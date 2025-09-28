/**
 * state.js
 * * ゲームの状態（セーブデータ、実績、アイテムレベルなど）を管理します。
 * データの読み込み、保存、更新処理を専門に担当します。
 */
import * as UI from './ui.js';
import * as Audio from './audio.js';
import { sounds } from './config.js';
import { startDialogue } from './dialogue.js';
import { DEBUG_MODE, DEBUG_UNLOCK_ALL_ACHIEVEMENTS } from './config.js';

// --- ゲーム状態変数 ---
let gameStats = {};
let achievementQueue = [];
let isProcessingQueue = false;

// --- エクスポート用のゲッター/セッター ---
export const getGameStats = () => gameStats;
export const setGameStats = (newStats) => { gameStats = newStats; };
export const getMoney = () => gameStats.money;
export const addMoney = (amount) => {
    if (amount > 0) {
        gameStats.money += amount;
        checkAndUnlockAchievements('money', { currentMoney: gameStats.money });
    }
};
export const spendMoney = (amount) => {
    if (gameStats.money >= amount) {
        gameStats.money -= amount;
        return true;
    }
    return false;
};
export const setEndingCleared = () => {
    gameStats.endingCleared = true;
};
export const incrementGamesCompleted = () => {
    gameStats.gamesCompleted++;
};
export const updateHighScore = (score) => {
    if (score > gameStats.highScore) {
        gameStats.highScore = score;
    }
};

export const updateStoryHighScore = (title, score) => {
    if (!gameStats.storyHighScores) {
        gameStats.storyHighScores = {};
    }
    if (score > (gameStats.storyHighScores[title] || 0)) {
        gameStats.storyHighScores[title] = score;
    }
};

export const addPlayedStory = (title) => {
    if (!gameStats.playedStoryTitles.includes(title)) {
        gameStats.playedStoryTitles.push(title);
    }
};
export const setItemLevel = (itemId, level) => {
    gameStats.itemLevels[itemId] = level;
};

export const updateTimeAttackHighScore = (score) => {
    if (score > (gameStats.timeAttackHighScore || 0)) {
        gameStats.timeAttackHighScore = score;
    }
};


/** ローカルストレージからゲームデータを読み込みます */
export function loadGameData() {
    const data = localStorage.getItem('historicalGeoGuesserStats');
    const defaultItems = { compass: 0, timer: 0, survey: 0, relic: 0, combo_scroll: 0, time_attack_unlock: 0, no_compass_unlock: 0, map_skin: 0, prioritize_unplayed: 0 };

    if (data) {
        gameStats = JSON.parse(data);
        if (gameStats.money === undefined) gameStats.money = 0;
        if (gameStats.itemLevels === undefined) {
            gameStats.itemLevels = defaultItems;
        } else {
            for (const key in defaultItems) {
                if (gameStats.itemLevels[key] === undefined) {
                    gameStats.itemLevels[key] = 0;
                }
            }
        }
        if (gameStats.finalInvestigationUnlocked === undefined) gameStats.finalInvestigationUnlocked = false;
        if (gameStats.endingCleared === undefined) gameStats.endingCleared = false;
        if (gameStats.storyHighScores === undefined) gameStats.storyHighScores = {};
        if (gameStats.timeAttackHighScore === undefined) gameStats.timeAttackHighScore = 0;
        if (gameStats.themeScores) delete gameStats.themeScores;
    } else {
        gameStats = {
            gamesCompleted: 0,
            highScore: 0,
            playedStoryTitles: [],
            unlockedAchievements: [],
            money: 0,
            itemLevels: defaultItems,
            finalInvestigationUnlocked: false,
            endingCleared: false,
            storyHighScores: {},
            timeAttackHighScore: 0
        };
    }

    if (DEBUG_MODE) {
        gameStats.money = 1000000;
        if (DEBUG_UNLOCK_ALL_ACHIEVEMENTS) {
            gameStats.unlockedAchievements = Object.keys(achievementMaster);
        }
    }
    
    checkFinalInvestigationUnlock();

    UI.updateMoneyDisplay(gameStats.money);
    UI.updateTitleScreenUI(gameStats);
}

/** ゲームデータをローカルストレージに保存します */
export function saveGameData() {
    localStorage.setItem('historicalGeoGuesserStats', JSON.stringify(gameStats));
}


/**
 * 個別の実績解除処理（会話イベント、報酬付与など）を非同期で行います。
 * @param {string} achievementId - 解除する実績のID
 */
async function unlockSingleAchievement(achievementId) {
    if (gameStats.unlockedAchievements.includes(achievementId)) return;

    const achievement = achievementMaster[achievementId];
    if (!achievement) return;

    gameStats.unlockedAchievements.push(achievementId);
    
    // ▼▼▼ [変更] 実績数連動の実績（マイルストーンイベントなど）をチェックする ▼▼▼
    checkAndUnlockAchievements('collect', { unlockedCount: gameStats.unlockedAchievements.length });
    // ▲▲▲ [変更] ここまで ▲▲▲

    checkFinalInvestigationUnlock();
    saveGameData(); 

    UI.showAchievementNotification(achievementId);

    const dialogueId = `achievement_${achievementId}`;
    await startDialogue(dialogueId);

    if (achievement.reward && achievement.reward > 0) {
        await new Promise(resolve => {
            setTimeout(() => {
                addMoney(achievement.reward);
                Audio.playSE(sounds.se.coin);
                UI.showToastMessage('実績ボーナス', `<i class="fa-solid fa-coins"></i> ${achievement.reward.toLocaleString()} を獲得！`, 'fa-solid fa-sack-dollar');
                UI.updateMoneyDisplay(gameStats.money);
                saveGameData();
                resolve();
            }, 300);
        });
    }
}

/** 実績解除キューを順番に処理します */
async function processAchievementQueue() {
    if (isProcessingQueue) return;
    isProcessingQueue = true;

    while (achievementQueue.length > 0) {
        const achievementId = achievementQueue.shift();
        await unlockSingleAchievement(achievementId);
    }
    
    UI.updateTitleScreenUI(gameStats);

    isProcessingQueue = false;
}

/**
 * 特定の条件で実績が解除されるかチェックし、解除すべき実績をキューに追加します。
 * @param {string} checkType - チェックする実績のタイプ ('final', 'chapter', 'shop'など)
 * @param {object} data - 条件判定に使用するデータ
 */
export function checkAndUnlockAchievements(checkType, data) {
    let unlockedSomething = false;
    for (const id in achievementMaster) {
        const achievement = achievementMaster[id];
        if (achievement.type === checkType && !gameStats.unlockedAchievements.includes(id) && !achievementQueue.includes(id)) {
            let shouldUnlock = false;
            if (achievement.requirePinning) {
                if (data.gameMode === 'story' && data.chapterResults && data.chapterResults.every(result => result.pinned)) {
                    if (achievement.condition(data, gameStats)) {
                        shouldUnlock = true;
                    }
                }
            } else {
                if (achievement.condition(data, gameStats)) {
                    shouldUnlock = true;
                }
            }
            if (shouldUnlock) {
                achievementQueue.push(id);
                unlockedSomething = true;
            }
        }
    }

    if (unlockedSomething) {
        processAchievementQueue();
    }
}

/**
 * 実績達成率が80%以上かどうかを判定し、フラグを更新します。
 */
function checkFinalInvestigationUnlock() {
    if (gameStats.finalInvestigationUnlocked) return;

    const totalAchievements = Object.keys(achievementMaster).length;
    if (totalAchievements === 0) return;

    const unlockedCount = gameStats.unlockedAchievements.length;
    const achievementRate = (unlockedCount / totalAchievements) * 100;

    if (achievementRate >= 80) {
        gameStats.finalInvestigationUnlocked = true;
        saveGameData();
    }
}

