/**
 * dialogue.js
 * * キャラクターの会話シーンの表示・進行を専門に管理します。
 */
import * as Audio from './audio.js';
import * as UI from './ui.js';
import { sounds } from './config.js';
import { getGameMode } from './main.js';
// ▼▼▼ [追加] state.jsをインポート ▼▼▼
import * as State from './state.js';
// ▲▲▲ [追加] ここまで ▲▲▲


// ▼▼▼ [変更] 分割された会話データを統合 ▼▼▼
const heroineDialogue = {
    ...storyAchievementDialogue,
    ...storyAchievementDialogue2,
    ...otherAchievementDialogue,
    ...itemDialogue
};
// ▲▲▲ [変更] ここまで ▲▲▲

// --- DOM要素 ---
const dialogueModal = document.getElementById('dialogue-modal');
const dialogueBox = document.getElementById('dialogue-box');
const dialogueTextEl = document.getElementById('dialogue-text');
const speakerNameEl = document.getElementById('speaker-name');
const heroineImage = document.getElementById('heroine-image');
const casterImage = document.getElementById('caster-image');
const characterDisplay = document.getElementById('character-display');
const dialogueBackground = document.getElementById('dialogue-background-screen');

// --- 状態変数 ---
let isDialogueActive = false;
let currentDialogue = [];
let dialogueIndex = 0;
let onDialogueEnd = null;
let typeInterval;
let dialogueInterruptionTime = 0;
let dialogueStartTime = 0;


// --- エクスポート用ゲッター ---
export const getIsDialogueActive = () => isDialogueActive;
export const getDialogueInterruptionTime = () => dialogueInterruptionTime;

/** 会話シーンを開始します */
export function startDialogue(dialogueId) {
    return new Promise(resolve => {
        const dialogueData = heroineDialogue[dialogueId] || endingDialogue[dialogueId];
        if (!dialogueData || dialogueData.length === 0) {
            resolve();
            return;
        }

        const firstLine = dialogueData[0];

        // 背景表示処理
        if (firstLine.showStoryBackground) {
            const achievementId = dialogueId.replace('achievement_', '');
            const story = findStoryByAchievementId(achievementId);
            if (story && story.chapters.length === 3) {
                const imageUrl = story.chapters[2].image;
                UI.showDialogueBackground(imageUrl);
            }
        }

        dialogueInterruptionTime = 0;
        dialogueStartTime = performance.now();
        isDialogueActive = true;
        currentDialogue = dialogueData;
        dialogueIndex = 0;
        onDialogueEnd = resolve;

        if (!Audio.getActiveBGM() || Audio.isBGMDifferent(sounds.bgm[`dialogue_${firstLine.bgm}`])) {
            Audio.getActiveBGM()?.pause();
            if (firstLine.bgm) {
                const bgmKey = `dialogue_${firstLine.bgm}`;
                const dialogueBGM = sounds.bgm[bgmKey] || sounds.bgm.dialogue_normal;
                Audio.playBGM(dialogueBGM);
            }
        }

        dialogueModal.classList.remove('hidden');

        setTimeout(() => {
            characterDisplay.classList.remove('opacity-0');
            dialogueBox.classList.remove('translate-y-full', 'opacity-0');
        }, 100);

        showNextDialogue();
    });
}

/** 次の台詞を表示します */
export function showNextDialogue() {
    clearInterval(typeInterval);

    if (dialogueIndex >= currentDialogue.length) {
        endDialogue();
        return;
    }
    const line = currentDialogue[dialogueIndex];
    const type = line.type || 'dialogue';

    Audio.playSE(sounds.se.b4);
    
    // ▼▼▼ [変更] エンドロール開始時に統計情報を渡す ▼▼▼
    if (type === 'startEndRoll') {
        UI.startEndRoll(endDialogue, State.getGameStats());
        return; 
    }
    // ▲▲▲ [変更] ここまで ▲▲▲

    // 新しいエフェクト制御タイプを追加
    if (type === 'startScreenEffect') {
        UI.startContinuousScreenEffect(line.effect);
        dialogueIndex++;
        showNextDialogue(); // 次の行を即座に処理
        return;
    }
    if (type === 'stopScreenEffect') {
        UI.stopContinuousScreenEffect(line.effect);
        dialogueIndex++;
        showNextDialogue(); // 次の行を即座に処理
        return;
    }

    if (type === 'playSound' || type === 'stopSound') {
        const sound = sounds.se[line.sound];
        if (sound) {
            if (type === 'playSound') Audio.playSE(sound, line.loop || false);
            else Audio.stopSE(sound);
        }
    } else if (type === 'playBGM') {
        const bgm = sounds.bgm[line.bgm];
        if (bgm) Audio.playBGM(bgm);
    } else if (type === 'stopBGM') {
        Audio.stopBGM();
    } else if (type === 'showCG') {
        UI.showFullscreenImage(line.image, line.effect);
        if (line.sound && sounds.se[line.sound]) {
            Audio.playSE(sounds.se[line.sound]);
        }
    } else if (type === 'hideCG') {
        UI.hideFullscreenImage();
    } else if (type === 'screenEffect') {
        UI.applyScreenEffect(line.effect);
    } else {
        if (line.bgm) {
            const bgmKey = `dialogue_${line.bgm}`;
            const dialogueBGM = sounds.bgm[bgmKey];
            if (dialogueBGM && Audio.isBGMDifferent(dialogueBGM)) {
                Audio.stopBGM();
                Audio.playBGM(dialogueBGM);
            }
        }

        speakerNameEl.textContent = '';
        dialogueTextEl.innerHTML = '';
        
        if (type === 'dialogue') {
            speakerNameEl.textContent = line.speaker;
            if (line.speaker === 'アニー') {
                if (line.expression) {
                    heroineImage.src = `./heroine/${line.expression}.png`;
                    heroineImage.classList.remove('opacity-0');
                    casterImage.classList.add('opacity-0');
                } else {
                    heroineImage.classList.add('opacity-0');
                    casterImage.classList.add('opacity-0');
                }
            } else if (line.speaker === 'キャスター') {
                if (line.expression) {
                    casterImage.src = `./hero/${line.expression}.png`;
                    casterImage.classList.remove('opacity-0');
                    heroineImage.classList.add('opacity-0');
                } else {
                    heroineImage.classList.add('opacity-0');
                    casterImage.classList.add('opacity-0');
                }
            } else {
                heroineImage.classList.add('opacity-0');
                casterImage.classList.add('opacity-0');
            }
            dialogueBox.classList.remove('opacity-0');

        } else if (type === 'narration') {
            heroineImage.classList.add('opacity-0');
            casterImage.classList.add('opacity-0');
            dialogueBox.classList.remove('opacity-0');
        }

        let charIndex = 0;
        typeInterval = setInterval(() => {
            if (charIndex < line.text.length) {
                dialogueTextEl.innerHTML += line.text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
            }
        }, 15);
    }

    dialogueIndex++;
    if (type !== 'dialogue' && type !== 'narration') {
        showNextDialogue();
    }
}

/** 会話シーンを終了します */
function endDialogue() {
    isDialogueActive = false;
    clearInterval(typeInterval);
    
    UI.hideDialogueBackground();
    
    UI.stopContinuousScreenEffect('wobble');
    
    dialogueInterruptionTime = performance.now() - dialogueStartTime;

    if (getGameMode() !== 'final') {
        Audio.stopBGM();
        Audio.resumeGameplayBGM();
    }

    characterDisplay.classList.add('opacity-0');
    dialogueBox.classList.add('translate-y-full', 'opacity-0');

    setTimeout(() => {
        dialogueModal.classList.add('hidden');
        if (onDialogueEnd) {
            onDialogueEnd();
            onDialogueEnd = null;
        }
    }, 300);
}

/**
 * 実績IDを元に対応する物語オブジェクトを探します。
 * @param {string} achievementId - 実績のID
 * @returns {object|null} - 対応する物語オブジェクト、見つからなければnull
 */
function findStoryByAchievementId(achievementId) {
    const achievement = achievementMaster[achievementId];
    if (!achievement) return null;

    // 実績のcondition関数を文字列に変換し、正規表現でstoryTitleを抽出
    const conditionString = achievement.condition.toString();
    const match = conditionString.match(/data\.storyTitle === '([^']+)'/);
    if (match && match[1]) {
        const storyTitle = match[1];
        return stories.find(s => s.title === storyTitle);
    }
    return null;
}
