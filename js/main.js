/**
 * main.js
 * * このゲームの司令塔となるファイルです。
 * 各専門モジュール（State, UI, Game, Audio, Dialogue, Events）を読み込み、
 * ゲーム全体の流れを統括します。
 */

// --- モジュールのインポート ---
import { sounds } from './config.js';
import * as Audio from './audio.js';
import * as UI from './ui.js';
import * as Game from './game.js';
import * as State from './state.js';
import * as Dialogue from './dialogue.js';
import * as Events from './events.js';

// ▼▼▼ [変更] 分割された会話データを統合 ▼▼▼
const heroineDialogue = {
    ...storyAchievementDialogue,
    ...storyAchievementDialogue2,
    ...otherAchievementDialogue,
    ...itemDialogue
};
// ▲▲▲ [変更] ここまで ▲▲▲


// --- グローバルゲーム状態変数 ---
let gameMode = 'story';
let currentStory;
let currentChapterIndex = 0;
let currentQuestion;
let allChapters = [];
let chapterResults = [];
let totalScore = 0;
let useCompass = true;
let isPaused = false;
let timeWhenPaused = 0;
let timeAttackTimerId;
let timeAttackStartTime;
let timeAttackRemainingTime = 120;
let comboCount = 0;
let questionStartTime = 0;
let comboMultiplier = 1.0;
let isTimerSEPlaying = false;
let dialoguePauseStartTime = 0;
let dialoguePauseDurationThisQuestion = 0;


// --- エクスポート用のゲッター関数 ---
export const getGameMode = () => gameMode;
export const getCurrentQuestion = () => currentQuestion;
export const getCurrentChapterIndex = () => currentChapterIndex;
export const getUseCompass = () => useCompass;
export const getIsPaused = () => isPaused;
export const getIsDialogueActive = () => Dialogue.getIsDialogueActive();
export const setQuestionStartTime = () => { questionStartTime = performance.now(); };

// --- アイテム購入 ---
/** アイテムを購入する処理 */
export async function buyItem(itemId) {
    const itemData = itemMaster[itemId];
    const currentLevel = State.getGameStats().itemLevels[itemId] || 0;
    if (currentLevel >= itemData.levels.length) return;

    const upgradeInfo = itemData.levels[currentLevel];

    if (State.spendMoney(upgradeInfo.price)) {
        State.saveGameData();
        UI.updateMoneyDisplay(State.getMoney());
        Audio.playSE(sounds.se.coin);

        const newLevel = currentLevel + 1;
        State.setItemLevel(itemId, newLevel);
        
        const dialogueId = `item_${itemId}_${newLevel}`;
        if (heroineDialogue[dialogueId]) {
            await Dialogue.startDialogue(dialogueId);
        }

        const toastMessage = itemData.levels.length === 1 ? `${upgradeInfo.name}を解放しました。` : `${upgradeInfo.name}を強化しました。`;
        UI.showToastMessage('購入完了', toastMessage, 'fa-solid fa-check');

        UI.renderShop(State.getGameStats(), buyItem);
        State.checkAndUnlockAchievements('shop', { itemLevels: State.getGameStats().itemLevels });
        State.saveGameData();

    } else {
        Audio.playSE(sounds.se.b3);
        UI.showToastMessage('資金不足', '調査資金が足りません。', 'fa-solid fa-circle-exclamation');
    }
}


// --- ゲームフロー ---

/** ゲームを開始します */
export function startGame(mode) {
    gameMode = mode;
    Audio.playSE(sounds.se.b4);
    UI.showScreen('game');
    Game.initMap();

    useCompass = (State.getGameStats().itemLevels.no_compass_unlock > 0) ? document.getElementById('compass-toggle').checked : true;
    chapterResults = [];
    totalScore = 0;

    const timerLevel = State.getGameStats().itemLevels.timer;
    const timeBonuses = [0, 10, 15, 20];
    const timeBonus = timeBonuses[timerLevel];

    if (gameMode === 'story' || gameMode === 'final') {
        document.getElementById('map').classList.remove('time-attack-map');
        document.getElementById('story-mode-ui').classList.remove('hidden');
        document.getElementById('time-attack-mode-ui').classList.add('hidden');
        document.getElementById('time-attack-score').classList.add('hidden');
        document.getElementById('combo-display').classList.add('hidden');
        currentChapterIndex = 0;

        // ▼▼▼ [変更] 新アイテムの効果を適用するロジックを追加 ▼▼▼
        if (gameMode === 'story') {
            const prioritizeToggle = document.getElementById('prioritize-unplayed-toggle');
            const isPrioritizeEnabled = State.getGameStats().itemLevels.prioritize_unplayed > 0 && prioritizeToggle.checked;
            
            let storyPool = stories;

            if (isPrioritizeEnabled) {
                const unachievedStories = stories.filter(story => (State.getGameStats().storyHighScores[story.title] || 0) < 15000);
                if (unachievedStories.length > 0) {
                    storyPool = unachievedStories;
                } else {
                    UI.showToastMessage('お知らせ', '全ての物語で15,000点以上を達成済みです！', 'fa-solid fa-star');
                }
            }
            currentStory = storyPool[Math.floor(Math.random() * storyPool.length)];
        } else { // final mode
            currentStory = endingStory;
        }
        // ▲▲▲ [変更] ここまで ▲▲▲
        
        currentQuestion = currentStory.chapters[currentChapterIndex];
        document.getElementById('story-title').textContent = currentStory.title;
        Game.startStoryChapter(timeBonus);

        if (gameMode === 'final') {
            Audio.playBGM(sounds.bgm.ending1, true);
        } else {
            Audio.playBGM(sounds.bgm.q[currentChapterIndex], true);
        }

    } else { // timeAttack
        document.getElementById('map').classList.add('time-attack-map');
        document.getElementById('story-mode-ui').classList.add('hidden');
        document.getElementById('time-attack-mode-ui').classList.remove('hidden');
        document.getElementById('time-attack-score').classList.remove('hidden');
        document.getElementById('combo-display').classList.remove('hidden');
        document.getElementById('time-attack-score').textContent = 'スコア: 0';
        timeAttackRemainingTime = 120 + timeBonus;
        timeAttackStartTime = performance.now();
        comboCount = 0;
        comboMultiplier = 1.0;
        dialoguePauseDurationThisQuestion = 0; // 中断時間をリセット
        document.getElementById('combo-display').textContent = '';
        timeAttackTimerId = requestAnimationFrame(updateTimeAttackTimer);
        Audio.playBGM(sounds.bgm.t1, true);
        currentQuestion = allChapters[Math.floor(Math.random() * allChapters.length)];
        Game.startNextQuestion();
    }
}

/** タイムアタックモードのタイマーを更新します */
function updateTimeAttackTimer(timestamp) {
    if (Dialogue.getIsDialogueActive() || isPaused) {
        // タイマーが止まっている間も再開のためにフレームを要求し続ける
        timeAttackTimerId = requestAnimationFrame(updateTimeAttackTimer);
        return;
    }

    const timerLevel = State.getGameStats().itemLevels.timer;
    const timeBonuses = [0, 10, 15, 20];
    const initialTime = 120 + timeBonuses[timerLevel];

    const elapsedTime = (timestamp - timeAttackStartTime) / 1000;
    timeAttackRemainingTime = Math.max(0, initialTime - elapsedTime);
    document.getElementById('timer').textContent = timeAttackRemainingTime.toFixed(2);

    if (timeAttackRemainingTime <= 10 && !isTimerSEPlaying) { Audio.playSE(sounds.se.t1); isTimerSEPlaying = true; document.getElementById('timer').classList.add('text-red-600'); }

    if (timeAttackRemainingTime <= 0) {
        if (isTimerSEPlaying) { sounds.se.t1.pause(); sounds.se.t1.currentTime = 0; isTimerSEPlaying = false; }
        showResults();
    } else {
        timeAttackTimerId = requestAnimationFrame(updateTimeAttackTimer);
    }
}

/** 回答後の結果を処理します */
export async function processAnswerResult(result) {
    let finalScore = result.score;
    let comboBonusText = '';

    if (gameMode === 'timeAttack') {
        const answerTime = (performance.now() - questionStartTime - dialoguePauseDurationThisQuestion) / 1000;
        dialoguePauseDurationThisQuestion = 0; // 次の問題のためにリセット

        if (result.score >= 4000 && answerTime <= 10.0) {
            comboCount++;
            const comboLevel = State.getGameStats().itemLevels.combo_scroll || 0;
            const comboIncrements = [0.10, 0.15, 0.20, 0.25];
            const comboIncrement = comboIncrements[comboLevel];
            comboMultiplier = 1.0 + (comboCount * comboIncrement);
            const comboBonus = Math.round(result.score * (comboMultiplier - 1.0));
            finalScore += comboBonus;

            const comboDisplay = document.getElementById('combo-display');
            comboDisplay.textContent = `${comboCount} COMBO! x${comboMultiplier.toFixed(1)}`;
            comboDisplay.classList.remove('combo-animation');
            void comboDisplay.offsetWidth;
            comboDisplay.classList.add('combo-animation');

            State.checkAndUnlockAchievements('combo', { combo: comboCount });
            comboBonusText = `<br>コンボボーナス: <span class="font-bold text-orange-500">+${comboBonus.toLocaleString()}</span>点`;
        } else {
            comboCount = 0;
            comboMultiplier = 1.0;
            document.getElementById('combo-display').textContent = '';
        }
    }

    totalScore += finalScore;
    if (result.score >= 5000) Audio.playSE(sounds.se.b2); else Audio.playSE(sounds.se.b3);

    chapterResults.push({ ...result, score: finalScore });

    const scoreColorClass = result.score < 0 ? 'text-red-600' : '';
    document.getElementById('instruction-text').innerHTML = `正解との距離: <span class="font-bold">${result.distance.toFixed(0)} km</span><br>スコア: <span class="font-bold ${scoreColorClass}">${result.score.toLocaleString()}</span>点${comboBonusText}`;

    document.getElementById('submit-answer-button').disabled = true;

    if (gameMode === 'story' || gameMode === 'final') {
        document.getElementById('share-chapter-buttons').classList.remove('hidden');
        document.getElementById('next-chapter-button').classList.remove('hidden');
        if (currentChapterIndex === currentStory.chapters.length - 1) document.getElementById('next-chapter-button').textContent = "結果を見る";

        if (gameMode === 'final' && currentChapterIndex < currentStory.chapters.length - 1) {
            await Dialogue.startDialogue(`ending_chapter_${currentChapterIndex + 1}`);
        }

        State.checkAndUnlockAchievements('chapter', { gameMode: 'story', distance: result.distance, time: result.remainingTime, chapterScore: finalScore, pinned: result.pinned });
    } else {
        document.getElementById('time-attack-score').textContent = `スコア: ${totalScore.toLocaleString()}`;
        State.checkAndUnlockAchievements('chapter', { gameMode: 'timeAttack', distance: result.distance, chapterScore: finalScore, pinned: result.pinned });
        setTimeout(() => {
            if (timeAttackRemainingTime > 0) {
                currentQuestion = allChapters[Math.floor(Math.random() * allChapters.length)];
                Game.startNextQuestion();
            }
        }, 1500);
    }
}

/** 次の章へ進みます */
export async function nextChapter() {
    Audio.playSE(sounds.se.b4);
    currentChapterIndex++;
    if (currentChapterIndex < currentStory.chapters.length) {
        currentQuestion = currentStory.chapters[currentChapterIndex];
        Game.startStoryChapter();
        if (gameMode === 'story') {
            Audio.playBGM(sounds.bgm.q[currentChapterIndex], true);
        }
    } else {
        if (gameMode === 'final') {
            await Dialogue.startDialogue('ending_final');
        }
        showResults();
    }
}

/** 最終結果画面を表示します */
function showResults() {
    cancelAnimationFrame(timeAttackTimerId);
    if (isTimerSEPlaying) { sounds.se.t1.pause(); sounds.se.t1.currentTime = 0; isTimerSEPlaying = false; }
    UI.showScreen('result');
    
    if (gameMode === 'final') {
        State.setEndingCleared();
        if (Audio.isBGMDifferent(sounds.bgm.ending2)) {
            Audio.playBGM(sounds.bgm.ending2);
        }
    } else {
        Audio.resetGameplayBGM();
        Audio.playBGM(sounds.bgm.oped);
    }

    const resultsSummary = document.getElementById('results-summary');
    resultsSummary.innerHTML = '';

    // ▼▼▼ [修正] 距離表示が正しく行われるように修正 ▼▼▼
    if (gameMode === 'story' || gameMode === 'final') {
        chapterResults.forEach((result, index) => {
            const chapterData = currentStory.chapters[index];
            const scoreColorClass = result.score < 0 ? 'text-red-600' : '';
            const distanceText = result.pinned ? `(${result.distance.toFixed(0)}km)` : '(未回答)';
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item'; // CSSでスタイルを適用するためのクラス
            resultElement.innerHTML = `
                <span class="result-item-title">${escapeHTML(chapterData.part)}　${escapeHTML(chapterData.title)}</span>
                <span class="result-item-score">
                    <span class="font-bold ${scoreColorClass}">${result.score.toLocaleString()}点</span>
                    <span class="result-item-distance">${distanceText}</span>
                </span>`;
            resultsSummary.appendChild(resultElement);
        });
    } else {
        chapterResults.forEach((result, index) => {
            const scoreColorClass = result.score < 0 ? 'text-red-600' : '';
            const distanceText = result.pinned ? `(${result.distance.toFixed(0)}km)` : '(未回答)';
            const resultElement = document.createElement('div');
            resultElement.className = 'result-item'; // CSSでスタイルを適用するためのクラス
            const partText = result.part ? (result.part.split(' - ')[1] || '') : '';
            resultElement.innerHTML = `
                <span class="result-item-title">${index + 1}: ${escapeHTML(partText)}　${escapeHTML(result.title)}</span>
                <span class="result-item-score">
                    <span class="font-bold ${scoreColorClass}">${result.score.toLocaleString()}点</span>
                    <span class="result-item-distance">${distanceText}</span>
                </span>`;
            resultsSummary.appendChild(resultElement);
        });
    }
    // ▲▲▲ [修正] ここまで ▲▲▲

    const relicLevel = State.getGameStats().itemLevels.relic;
    if (relicLevel > 0) {
        const boostMultiplier = [1, 1.05, 1.10, 1.15][relicLevel];
        const scoreBeforeBonus = totalScore;
        totalScore = Math.round(totalScore * boostMultiplier);
        const relicBonus = totalScore - scoreBeforeBonus;
        const itemInfo = itemMaster.relic.levels[relicLevel - 1];
        resultsSummary.innerHTML += `<div class="text-center text-lg p-2 mt-2 font-bold bg-[#fdfaf2] rounded">${itemInfo.name}ボーナス (x${boostMultiplier.toFixed(2)}): <span class="text-green-700">+${relicBonus.toLocaleString()}点</span></div>`;
    }

    if (!useCompass) {
        const scoreBeforeBonus = totalScore;
        totalScore = Math.round(totalScore * 1.5);
        const compassBonus = totalScore - scoreBeforeBonus;
        resultsSummary.innerHTML += `<div class="text-center text-lg p-2 mt-2 font-bold bg-[#fdfaf2] rounded">コンパスなしボーナス (x1.5): <span class="text-green-700">+${compassBonus.toLocaleString()}点</span></div>`;
    }

    const totalScoreDisplay = document.getElementById('total-score');
    totalScoreDisplay.textContent = totalScore.toLocaleString();
    if (totalScore < 0) totalScoreDisplay.classList.add('text-red-600');
    else totalScoreDisplay.classList.remove('text-red-600');

    const earnedMoney = (gameMode !== 'final') ? Math.max(0, Math.floor(totalScore / 100)) : 0;
    State.addMoney(earnedMoney);

    const earnedMoneyDisplay = document.getElementById('earned-money-display');
    earnedMoneyDisplay.innerHTML = '';
    if (earnedMoney > 0) {
        earnedMoneyDisplay.innerHTML = `<span class="money-earned-animation">調査資金として <i class="fa-solid fa-coins"></i> ${earnedMoney.toLocaleString()} を獲得！</span>`;
        Audio.playSE(sounds.se.coin);
    }

    if (gameMode === 'story' || gameMode === 'final') {
        document.getElementById('result-title').textContent = (gameMode === 'final') ? "二人の旅路、その結末は…" : "調査完了";
        document.getElementById('result-story-title').textContent = `— ${currentStory.title} —`;
        document.getElementById('result-story-title').classList.remove('hidden');
        if (gameMode === 'story') {
            if (chapterResults.every(r => r.pinned)) State.incrementGamesCompleted();
            State.updateHighScore(totalScore);
            State.addPlayedStory(currentStory.title);
            State.updateStoryHighScore(currentStory.title, totalScore);
            State.checkAndUnlockAchievements('final', { gameMode: 'story', totalScore: totalScore, useCompass: useCompass, chapterResults: chapterResults, storyTitle: currentStory.title });
        }
    } else {
        document.getElementById('result-title').textContent = "タイムアップ！";
        document.getElementById('result-story-title').classList.add('hidden');
        const summaryElement = document.createElement('div');
        summaryElement.className = 'text-xl p-2 bg-[#fdfaf2] rounded';
        summaryElement.innerHTML = `<p>回答数: <span class="font-bold">${chapterResults.length}問</span></p>`;
        resultsSummary.prepend(summaryElement);
        State.updateTimeAttackHighScore(totalScore);
        State.checkAndUnlockAchievements('final', { gameMode: 'timeAttack', totalScore: totalScore, chapterResults: chapterResults, useCompass: useCompass });
    }

    State.saveGameData();
    UI.updateMoneyDisplay(State.getMoney());
}

export function restartGame() {
    Audio.playSE(sounds.se.b4);
    totalScore = 0;
    chapterResults = [];
    UI.updateTitleScreenUI(State.getGameStats());
    UI.showScreen('start');
}

// --- 一時停止 ---

export function pauseTimersForDialogue() {
    if (gameMode === 'timeAttack') {
        cancelAnimationFrame(timeAttackTimerId);
        dialoguePauseStartTime = performance.now();
    }
}

export function resumeTimersAfterDialogue() {
    if (gameMode === 'timeAttack' && dialoguePauseStartTime > 0) {
        const pauseDuration = performance.now() - dialoguePauseStartTime;
        dialoguePauseDurationThisQuestion += pauseDuration; 
        timeAttackStartTime += pauseDuration; 
        dialoguePauseStartTime = 0;
        timeAttackTimerId = requestAnimationFrame(updateTimeAttackTimer);
    }
}

export function pauseGame() {
    if (isPaused || Dialogue.getIsDialogueActive()) return;
    isPaused = true;
    timeWhenPaused = performance.now();
    if (isTimerSEPlaying) sounds.se.t1.pause();
    UI.showPauseModal();
    Audio.playSE(sounds.se.b4);
}

export function resumeGame() {
    if (!isPaused) return;
    isPaused = false;
    const pauseDuration = performance.now() - timeWhenPaused;
    if (gameMode === 'timeAttack') {
        timeAttackStartTime += pauseDuration;
    } else {
        const timerElement = document.querySelector('#game-screen #timer');
        if(timerElement) {
             const startTimeElement = timerElement.dataset.startTime;
             if(startTimeElement) {
                timerElement.dataset.startTime = parseFloat(startTimeElement) + pauseDuration;
             }
        }
    }
    UI.hidePauseModal();
    if (isTimerSEPlaying) sounds.se.t1.play();
    Audio.playSE(sounds.se.b4);
}

export function returnToTitle() {
    Audio.playSE(sounds.se.b4);
    isPaused = false;
    UI.hidePauseModal();
    Audio.resetGameplayBGM();
    Audio.playBGM(sounds.bgm.oped);
    if (isTimerSEPlaying) {
        sounds.se.t1.pause();
        sounds.se.t1.currentTime = 0;
        isTimerSEPlaying = false;
    }
    UI.updateTitleScreenUI(State.getGameStats());
    UI.showScreen('start');
}


// --- 初期化 ---
function initGame() {
    stories.forEach(story => {
        story.chapters.forEach(chapter => {
            allChapters.push({ ...chapter, storyTitle: story.title });
        });
    });

    if (sessionStorage.getItem('gameLaunchedInSession')) {
        document.getElementById('pre-start-screen').classList.add('hidden');
        UI.showScreen('start');
        Audio.playBGM(sounds.bgm.oped);
    }

    Audio.initializeAudio();
    Audio.loadVolumeSettings();
    State.loadGameData();
    Events.setupEventListeners();
}

// --- ユーティリティ関数 ---
function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    const p = document.createElement("p");
    p.textContent = str;
    return p.innerHTML;
}

// --- ゲーム起動 ---
initGame();

