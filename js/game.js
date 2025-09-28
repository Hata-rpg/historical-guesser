/**
 * game.js
 * * マップの初期化、プレイヤーの操作、ゲームの各章の進行、
 * 回答の判定、スコア計算など、ゲームプレイの中核となる処理をまとめています。
 */

import * as Main from './main.js';
import * as Audio from './audio.js';
import * as State from './state.js';
import { sounds } from './config.js';

// --- ゲーム状態変数 ---
let map;
let playerMarker = null;
let answerMarker = null;
let lineToAnswer = null;
let timerId;
let startTime;
let remainingTime = 60;
let answered = false;
let isTimerSEPlaying = false;
let compassWobbleInterval = null;
let isZooming = false;
let currentChapterInitialTime = 0;

// WASD移動用の変数
const player = {
    velocity: { x: 0, y: 0 },
    speed: 12,
    acceleration: 0.15,
    friction: 0.92,
};
const keys = { w: false, a: false, s: false, d: false, shift: false };

// --- マップ・プレイヤー操作関連 ---

/** マップを初期化します */
export function initMap() {
    if (map) return;
    map = L.map('map', {
        center: [35.6895, 139.6917],
        zoom: 2,
        worldCopyJump: false,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0,
        keyboard: false,
        scrollWheelZoom: true,
        zoomDelta: 1.5,
        zoomSnap: 0.1
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        minZoom: 2,
        noWrap: true,
        bounds: [[-90, -180], [90, 180]]
    }).addTo(map);

    map.on('click', placeMarker);
    map.on('zoomstart', () => { isZooming = true; });
    map.on('zoomend', () => { isZooming = false; });

    setupWASDControls();
}

/** プレイヤーのピンをマップに配置します */
function placeMarker(e) {
    if (answered || Main.getIsPaused() || Main.getIsDialogueActive()) return;
    Audio.playSE(sounds.se.p1);

    const lng = L.Util.wrapNum(e.latlng.lng, [-180, 180], true);
    const lat = e.latlng.lat;

    if (playerMarker) playerMarker.setLatLng([lat, lng]);
    else playerMarker = L.marker([lat, lng]).addTo(map);

    if (Main.getUseCompass()) {
        if (compassWobbleInterval) clearInterval(compassWobbleInterval);
        const answerCoords = Main.getCurrentQuestion().answer;
        const distance = calculateDistance(lat, lng, answerCoords[0], answerCoords[1]);
        const bearing = calculateBearing(lat, lng, answerCoords[0], answerCoords[1]);
        
        const compassLevel = State.getGameStats().itemLevels.compass;
        // ▼▼▼ [変更] コンパスの揺れ軽減率を 20%, 40%, 60% に変更 ▼▼▼
        const wobbleFactors = [1, 0.8, 0.6, 0.4];
        // ▲▲▲ [変更] ▲▲▲
        const baseWobble = (distance >= 1000) ? 270 : (distance >= 500) ? 180 : (distance >= 100) ? 90 : 45;
        const finalWobble = baseWobble * wobbleFactors[compassLevel];

        compassWobbleInterval = setInterval(() => {
            const randomAngle = bearing + (Math.random() - 0.5) * finalWobble;
            document.getElementById('compass-needle').style.transform = `rotate(${randomAngle}deg)`;
        }, 100);
    }
}

/** WASDキーでのマップ移動をセットアップします */
function setupWASDControls() {
    if (window.wasdInitialized) return;
    window.wasdInitialized = true;

    window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || Main.getIsDialogueActive()) return;
        switch (e.key.toLowerCase()) {
            case 'w': keys.w = true; break;
            case 'a': keys.a = true; break;
            case 's': keys.s = true; break;
            case 'd': keys.d = true; break;
            case 'shift': keys.shift = true; break;
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        switch (e.key.toLowerCase()) {
            case 'w': keys.w = false; break;
            case 'a': keys.a = false; break;
            case 's': keys.s = false; break;
            case 'd': keys.d = false; break;
            case 'shift': keys.shift = false; break;
        }
    });

    function gameLoop() {
        if (map && !document.getElementById('game-screen').classList.contains('hidden') && !Main.getIsPaused() && !Main.getIsDialogueActive()) {
            let targetVec = { x: 0, y: 0 };
            if (keys.w) targetVec.y = -1;
            if (keys.s) targetVec.y = 1;
            if (keys.a) targetVec.x = -1;
            if (keys.d) targetVec.x = 1;
            
            const length = Math.sqrt(targetVec.x * targetVec.x + targetVec.y * targetVec.y);
            if (length > 0) {
                targetVec.x /= length;
                targetVec.y /= length;
            }

            const currentSpeed = keys.shift ? player.speed * 1.5 : player.speed;
            
            const targetVelocityX = targetVec.x * currentSpeed;
            const targetVelocityY = targetVec.y * currentSpeed;

            player.velocity.x += (targetVelocityX - player.velocity.x) * player.acceleration;
            player.velocity.y += (targetVelocityY - player.velocity.y) * player.acceleration;

            if (targetVec.x === 0 && targetVec.y === 0) {
                player.velocity.x *= player.friction;
                player.velocity.y *= player.friction;
            }

            if (Math.abs(player.velocity.x) < 0.01) player.velocity.x = 0;
            if (Math.abs(player.velocity.y) < 0.01) player.velocity.y = 0;

            if (!isZooming && (player.velocity.x !== 0 || player.velocity.y !== 0)) {
                let panVector = L.point(player.velocity.x, player.velocity.y);
                const currentPixelBounds = map.getPixelBounds();
                const maxBounds = map.options.maxBounds;

                if (maxBounds) {
                    const worldPixelBounds = L.bounds(
                        map.project(maxBounds.getNorthWest()),
                        map.project(maxBounds.getSouthEast())
                    );

                    const nextPixelBounds = L.bounds(
                        currentPixelBounds.min.add(panVector),
                        currentPixelBounds.max.add(panVector)
                    );

                    if (nextPixelBounds.min.x < worldPixelBounds.min.x) {
                        panVector.x = worldPixelBounds.min.x - currentPixelBounds.min.x;
                        player.velocity.x = 0;
                    }
                    if (nextPixelBounds.max.x > worldPixelBounds.max.x) {
                        panVector.x = worldPixelBounds.max.x - currentPixelBounds.max.x;
                        player.velocity.x = 0;
                    }
                    if (nextPixelBounds.min.y < worldPixelBounds.min.y) {
                        panVector.y = worldPixelBounds.min.y - currentPixelBounds.min.y;
                        player.velocity.y = 0;
                    }
                    if (nextPixelBounds.max.y > worldPixelBounds.max.y) {
                        panVector.y = worldPixelBounds.max.y - currentPixelBounds.max.y;
                        player.velocity.y = 0;
                    }
                }
                
                if (panVector.x !== 0 || panVector.y !== 0) {
                   map.panBy(panVector, { animate: false });
                }
            }
        }
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}


// --- ゲーム進行関連 ---

/** ストーリーモードの章を開始します */
export function startStoryChapter(timeBonus = 0) {
    resetQuestionUI();
    if (Main.getUseCompass()) document.getElementById('compass').classList.remove('hidden');

    const chapter = Main.getCurrentQuestion();

    const submitButton = document.getElementById('submit-answer-button');
    if (chapter.lockUntilHint3) {
        submitButton.disabled = true;
        submitButton.innerHTML = `<i class="fa-solid fa-lock mr-2"></i>待機中...`;
    } else {
        submitButton.disabled = false;
        submitButton.textContent = "回答する";
    }
    
    if(chapter.bgmOverride && sounds.bgm[chapter.bgmOverride]) {
        Audio.playBGM(sounds.bgm[chapter.bgmOverride], true);
    } else if (Main.getGameMode() === 'final') {
        if (!Audio.getActiveBGM() || Audio.isBGMDifferent(sounds.bgm.ending1)) {
           Audio.playBGM(sounds.bgm.ending1, true);
        }
    } else {
         Audio.playBGM(sounds.bgm.q[Main.getCurrentChapterIndex()], true);
    }


    document.getElementById('chapter-display').textContent = `第${Main.getCurrentChapterIndex() + 1}章 / 全3章`;
    document.getElementById('narrative-box').textContent = chapter.narrative;
    document.getElementById('hint-image').src = chapter.image;
    document.getElementById('hint-image').classList.remove('hidden');
    [document.getElementById('hint-1'), document.getElementById('hint-2'), document.getElementById('hint-3')].forEach((h, i) => h.innerHTML = chapter.hints[i]);
    
    startTime = performance.now();
    answered = false;
    isTimerSEPlaying = false;
    currentChapterInitialTime = 60 + timeBonus;
    requestAnimationFrame((timestamp) => updateTimer(timestamp, currentChapterInitialTime));
}

/** タイムアタックモードの次の問題を開始します */
export function startNextQuestion() {
    resetQuestionUI();
    if (Main.getUseCompass()) document.getElementById('compass').classList.remove('hidden');
    
    Main.setQuestionStartTime();
    const currentQuestion = Main.getCurrentQuestion();
    
    document.getElementById('narrative-box').textContent = currentQuestion.narrative;
    document.getElementById('hint-image').src = currentQuestion.image;
    document.getElementById('hint-image').classList.remove('hidden');
    [document.getElementById('hint-1'), document.getElementById('hint-2'), document.getElementById('hint-3')].forEach((h, i) => h.textContent = currentQuestion.hints[i]);

    setTimeout(() => document.getElementById('hint-1').classList.remove('opacity-0'), 100);
    setTimeout(() => document.getElementById('hint-2').classList.remove('opacity-0'), 200);
    setTimeout(() => document.getElementById('hint-3').classList.remove('opacity-0'), 300);
    setTimeout(() => document.getElementById('location-title').textContent = currentQuestion.title, 500);

    answered = false;
}

/** ストーリーモードのタイマーを更新します */
function updateTimer(timestamp, initialTime) {
    if (answered || Main.getIsDialogueActive()) {
        if (Main.getIsDialogueActive()) {
            startTime = timestamp - (initialTime - remainingTime) * 1000;
        }
        timerId = requestAnimationFrame((ts) => updateTimer(ts, initialTime));
        return;
    }
    const elapsedTime = (timestamp - startTime) / 1000;
    remainingTime = Math.max(0, initialTime - elapsedTime);
    document.getElementById('timer').textContent = remainingTime.toFixed(2);
    
    const hint1 = document.getElementById('hint-1');
    const hint2 = document.getElementById('hint-2');
    const hint3 = document.getElementById('hint-3');

    // ▼▼▼ [変更] ヒントの表示タイミングを経過時間（10秒, 20秒, 30秒）で固定 ▼▼▼
    if (elapsedTime >= 10 && hint1.classList.contains('opacity-0')) { hint1.classList.remove('opacity-0'); Audio.playSE(sounds.se.h1); }
    if (elapsedTime >= 20 && hint2.classList.contains('opacity-0')) { hint2.classList.remove('opacity-0'); Audio.playSE(sounds.se.h1); }
    if (elapsedTime >= 30 && hint3.classList.contains('opacity-0')) { 
    // ▲▲▲ [変更] ▲▲▲
        hint3.classList.remove('opacity-0'); 
        Audio.playSE(sounds.se.h1); 
        document.getElementById('location-title').textContent = Main.getCurrentQuestion().title; 
        
        const chapter = Main.getCurrentQuestion();
        if (chapter.lockUntilHint3) {
            const submitButton = document.getElementById('submit-answer-button');
            submitButton.disabled = false;
            submitButton.textContent = "回答する";
        }
    }
    if (remainingTime <= 10 && !isTimerSEPlaying) { Audio.playSE(sounds.se.t1); isTimerSEPlaying = true; document.getElementById('timer').classList.add('text-red-600'); }

    if (remainingTime <= 0) {
        submitAnswer();
    } else {
        timerId = requestAnimationFrame((ts) => updateTimer(ts, initialTime));
    }
}

/** 回答を送信し、結果を判定します */
export function submitAnswer() {
    if (answered) return;
    answered = true;

    if (Main.getGameMode() === 'story' || Main.getGameMode() === 'final') {
        cancelAnimationFrame(timerId);
    }
    if (isTimerSEPlaying) { sounds.se.t1.pause(); sounds.se.t1.currentTime = 0; isTimerSEPlaying = false; }
    if (compassWobbleInterval) clearInterval(compassWobbleInterval);
    
    const currentQuestion = Main.getCurrentQuestion();
    const answerCoords = currentQuestion.answer;
    
    document.getElementById('hint-1').classList.remove('opacity-0');
    document.getElementById('hint-2').classList.remove('opacity-0');
    document.getElementById('hint-3').classList.remove('opacity-0');
    document.getElementById('location-title').textContent = currentQuestion.title;
    document.getElementById('hint-image').classList.remove('hidden');

    answerMarker = L.marker(answerCoords, { icon: L.icon({ iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png`, shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41] }) }).addTo(map);
    
    let distance = 20000;
    let pinned = false;
    if (playerMarker) {
        pinned = true;
        const playerCoords = playerMarker.getLatLng();
        distance = calculateDistance(playerCoords.lat, playerCoords.lng, answerCoords[0], answerCoords[1]);
        lineToAnswer = L.polyline([playerCoords, answerCoords], { color: 'red', weight: 3, opacity: 0.7, dashArray: '5, 10' }).addTo(map);
        map.fitBounds(L.latLngBounds(playerCoords, answerCoords), { padding: [50, 50] });
        if (Main.getUseCompass()) {
            const bearing = calculateBearing(playerCoords.lat, playerCoords.lng, answerCoords[0], answerCoords[1]);
            document.getElementById('compass-needle').style.transform = `rotate(${bearing}deg)`;
        }
    } else {
        map.setView(answerCoords, 4);
    }

    const timeForBonus = (Main.getGameMode() === 'story' || Main.getGameMode() === 'final') ? remainingTime : 60;
    const { chapterScore } = calculateScore(distance, timeForBonus);
    
    Main.processAnswerResult({
        part: currentQuestion.part,
        title: currentQuestion.title,
        score: chapterScore,
        distance: distance,
        remainingTime: remainingTime,
        initialTime: currentChapterInitialTime,
        pinned: pinned
    });
}

/** 問題回答後のUIをリセットします */
export function resetQuestionUI() {
    if(playerMarker) { map.removeLayer(playerMarker); playerMarker = null; }
    if(answerMarker) { map.removeLayer(answerMarker); answerMarker = null; }
    if(lineToAnswer) { map.removeLayer(lineToAnswer); lineToAnswer = null; }

    if (compassWobbleInterval) clearInterval(compassWobbleInterval);
    const compass = document.getElementById('compass');
    if (compass) {
        compass.classList.add('hidden');
        document.getElementById('compass-needle').style.transform = 'rotate(0deg)';
    }

    document.getElementById('timer').classList.remove('text-red-600');
    document.getElementById('location-title').textContent = "";
    document.getElementById('hint-1').classList.add('opacity-0');
    document.getElementById('hint-2').classList.add('opacity-0');
    document.getElementById('hint-3').classList.add('opacity-0');
    document.getElementById('hint-image').classList.add('hidden');
    document.getElementById('instruction-text').textContent = "物語の舞台となった場所を地図上で特定してください。";
    document.getElementById('submit-answer-button').disabled = false;
    document.getElementById('next-chapter-button').classList.add('hidden');
    document.getElementById('share-chapter-buttons').classList.add('hidden');
    document.getElementById('next-chapter-button').textContent = "次の章へ";
    map.setView([35.6895, 139.6917], 2);
}

// --- 計算関数 ---
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; const toRad = (v) => v * Math.PI / 180;
    const dLat = toRad(lat2 - lat1), dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function calculateBearing(lat1, lon1, lat2, lon2) {
    const toRad = (v) => v * Math.PI / 180, toDeg = (v) => v * 180 / Math.PI;
    const y = Math.sin(toRad(lon2 - lon1)) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) - Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(toRad(lon2 - lon1));
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

export function calculateScore(distance, time) {
    let distanceScore;
    const NEUTRAL_DISTANCE = 1000;
    const MAX_PENALTY_DISTANCE = 5000;

    const surveyLevel = State.getGameStats().itemLevels.survey;
    const penaltyReductions = [1, 0.9, 0.75, 0.6];

    if (distance <= NEUTRAL_DISTANCE) {
        distanceScore = 5000 * (1 - Math.pow(distance / NEUTRAL_DISTANCE, 0.7));
    } else {
        const penaltyProgress = Math.min(1, (distance - NEUTRAL_DISTANCE) / (MAX_PENALTY_DISTANCE - NEUTRAL_DISTANCE));
        distanceScore = -2000 * penaltyProgress * penaltyReductions[surveyLevel];
    }

    distanceScore = Math.round(distanceScore);
    const timeBonus = (Main.getGameMode() === 'story' || Main.getGameMode() === 'final') ? Math.round((Math.max(0, time) / 60) * 1000) : 0;
    const chapterScore = distanceScore + timeBonus;

    return { distanceScore, timeBonus, chapterScore };
}
