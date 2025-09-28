/**
 * audio.js
 * * BGMや効果音（SE）の再生、停止、音量調整など、音声に関するすべての処理をここにまとめています。
 * * import: 他のファイルで `export` された変数や関数を読み込むためのキーワードです。
 */

import { sounds } from './config.js';

// --- 音声の状態を管理する変数 ---
let activeBGM = null;
let currentGameplayBGM = null; // ゲームプレイ中のBGMを保持する変数
let bgmVolume = 0.3;
let seVolume = 0.8;
// ▼▼▼ [追加] 再生中の効果音を管理するSet ▼▼▼
const playingSEs = new Set();

// --- 音声関連の関数 ---

/** BGMとSEのループ設定を初期化します */
export function initializeAudio() {
    sounds.bgm.oped.loop = true;
    sounds.bgm.q.forEach(bgm => bgm.loop = true);
    sounds.bgm.t1.loop = true;
    sounds.bgm.dialogue_normal.loop = true;
    sounds.bgm.dialogue_happy.loop = true;
    sounds.bgm.dialogue_serious.loop = true;
    sounds.bgm.dialogue_funny.loop = true;
    sounds.bgm.ending1.loop = true;
    sounds.bgm.ending2.loop = true;
    sounds.bgm.ending3.loop = true;
    sounds.bgm.heartbeat.loop = true;
    sounds.se.t1.loop = true;
}

/** 音量設定を読み込み、スライダーと実際の音量に適用します */
export function loadVolumeSettings() {
    const savedBGM = localStorage.getItem('historicalGeoGuesserBGMVolume');
    const savedSE = localStorage.getItem('historicalGeoGuesserSEVolume');

    bgmVolume = savedBGM !== null ? parseFloat(savedBGM) : 0.3;
    seVolume = savedSE !== null ? parseFloat(savedSE) : 0.8;
    
    document.getElementById('bgm-volume-slider').value = bgmVolume;
    document.getElementById('se-volume-slider').value = seVolume;

    setBGMVolume(bgmVolume);
    setSEVolume(seVolume);
}

/** 音量アイコンの状態を更新します */
function updateVolumeIcon() {
    const volumeIcon = document.getElementById('volume-icon');
    if (bgmVolume > 0 || seVolume > 0) {
        volumeIcon.classList.remove('fa-volume-xmark');
        volumeIcon.classList.add('fa-volume-high');
    } else {
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.add('fa-volume-xmark');
    }
}

/** BGMの音量を設定します */
export function setBGMVolume(value) {
    bgmVolume = parseFloat(value);
    Object.values(sounds.bgm).flat().forEach(sound => sound.volume = bgmVolume);
    localStorage.setItem('historicalGeoGuesserBGMVolume', bgmVolume);
    updateVolumeIcon();
}

/** 効果音の音量を設定します */
export function setSEVolume(value) {
    seVolume = parseFloat(value);
    Object.values(sounds.se).forEach(sound => sound.volume = seVolume);
    localStorage.setItem('historicalGeoGuesserSEVolume', seVolume);
    updateVolumeIcon();
}

/**
 * 効果音を再生します
 * @param {Audio} sound - 再生するAudioオブジェクト
 * @param {boolean} loop - ループ再生するかどうか
 */
export function playSE(sound, loop = false) {
    sound.loop = loop;
    sound.currentTime = 0;
    sound.play().catch(e => console.log("SE play error:", e));
    if (loop) {
        playingSEs.add(sound);
    }
}

/**
 * 指定された効果音を停止します
 * @param {Audio} sound - 停止するAudioオブジェクト
 */
export function stopSE(sound) {
    if (playingSEs.has(sound)) {
        sound.pause();
        sound.currentTime = 0;
        playingSEs.delete(sound);
    }
}


/** BGMを再生します */
export function playBGM(sound, isGameplayBGM = false) {
    stopBGM();
    sound.currentTime = 0;
    sound.play().catch(e => console.log("BGM play error:", e));
    activeBGM = sound;
    if (isGameplayBGM) {
        currentGameplayBGM = sound;
    }
}

/** BGMを停止します */
export function stopBGM() {
    if (activeBGM) {
        activeBGM.pause();
        activeBGM.currentTime = 0;
    }
    activeBGM = null;
}

/** ゲームプレイ中のBGMをリセットします */
export function resetGameplayBGM() {
    currentGameplayBGM = null;
}

/** 現在再生中のBGMを取得します */
export function getActiveBGM() {
    return activeBGM;
}

/** ゲームプレイ中のBGMを再生します */
export function resumeGameplayBGM() {
    if (currentGameplayBGM) {
        playBGM(currentGameplayBGM, true);
    } else {
        playBGM(sounds.bgm.oped);
    }
}

/**
 * 現在のBGMが指定されたBGMと異なるかチェックします
 * @param {Audio} bgm - 確認したいBGMオブジェクト
 * @returns {boolean} - 異なる場合はtrue
 */
export function isBGMDifferent(bgm) {
    // ▼▼▼ [修正] bgmが未定義の場合でもエラーにならないようにする ▼▼▼
    if (!bgm) return false;
    // ▲▲▲ [修正] ▲▲▲
    return !activeBGM || activeBGM.src !== bgm.src;
}

