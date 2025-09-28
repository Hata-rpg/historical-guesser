/**
 * ui.js
 * * 画面の表示切り替え、実績やショップの描画、モーダルウィンドウの制御など、
 * ユーザーインターフェース（見た目）に関する処理をまとめています。
 */
import { sounds, DEBUG_MODE } from './config.js';
import * as Audio from './audio.js';


// ▼▼▼ [追加] 分割された会話データを統合 ▼▼▼
const heroineDialogue = {
    ...storyAchievementDialogue,
    ...storyAchievementDialogue2,
    ...otherAchievementDialogue,
    ...itemDialogue
};
// ▲▲▲ [変更] ここまで ▲▲▲

// --- DOM要素 ---
// 各画面やモーダルなどの要素をあらかじめ取得しておきます
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const achievementsScreen = document.getElementById('achievements-screen');
const storyLogScreen = document.getElementById('story-log-screen');
const shopScreen = document.getElementById('shop-screen');
const pauseModal = document.getElementById('pause-modal');
const volumeControlModal = document.getElementById('volume-control-modal');
const resetConfirmModal = document.getElementById('reset-confirm-modal');
const dialogueModal = document.getElementById('dialogue-modal');
const loadingOverlay = document.getElementById('loading-overlay');
const notificationContainer = document.getElementById('notification-container');
const compassToggleContainer = document.getElementById('compass-toggle-container');
const prioritizeUnplayedContainer = document.getElementById('prioritize-unplayed-container');
const timeAttackStartButton = document.getElementById('time-attack-start-button');
const moneyValueStart = document.getElementById('money-value-start');
const moneyValueShop = document.getElementById('money-value-shop');
const finalInvestigationButton = document.getElementById('final-investigation-button');
const preStartGirl = document.getElementById('pre-start-girl');
const startScreenGirl = document.getElementById('start-screen-girl');
const fullscreenImageContainer = document.getElementById('fullscreen-image-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const debugEndRollButton = document.getElementById('debug-end-roll-button');
// ▼▼▼ [追加] プログレスバー関連のDOM要素を取得 ▼▼▼
const finalInvestigationProgressContainer = document.getElementById('final-investigation-progress-container');
const finalInvestigationProgressBar = document.getElementById('final-investigation-progress-bar');
const finalInvestigationProgressText = document.getElementById('final-investigation-progress-text');
// ▲▲▲ [追加] ここまで ▲▲▲


// --- 画面表示関連 ---

/** 指定された画面を表示し、他を非表示にします */
export function showScreen(screenName) {
    // 全てのスクリーンを一旦非表示に
    [startScreen, gameScreen, resultScreen, achievementsScreen, storyLogScreen, shopScreen].forEach(s => s.classList.add('hidden'));

    // Vignette(画面端を暗くする)効果の管理
    const needsVignette = ['start', 'achievements', 'shop', 'storyLog'];
    if (needsVignette.includes(screenName)) {
        document.body.classList.add('vignette-active');
    } else {
        document.body.classList.remove('vignette-active');
    }

    // 指定されたスクリーンを表示
    switch (screenName) {
        case 'start':
            startScreen.classList.remove('hidden');
            setupTitleScreenEffects();
            break;
        case 'game':
            gameScreen.classList.remove('hidden');
            cleanUpTitleScreenEffects();
            break;
        case 'result':
            resultScreen.classList.remove('hidden');
            break;
        case 'achievements':
            achievementsScreen.classList.remove('hidden');
            cleanUpTitleScreenEffects();
            break;
        case 'shop':
            shopScreen.classList.remove('hidden');
            cleanUpTitleScreenEffects();
            break;
        case 'storyLog':
            storyLogScreen.classList.remove('hidden');
            cleanUpTitleScreenEffects();
            break;
    }
}

/** タイトル画面のUI（ボタンなど）の状態を更新します */
export function updateTitleScreenUI(gameStats) {
    if (!gameStats || !gameStats.itemLevels) return;
    
    // タイムアタックボタンの状態
    if (gameStats.itemLevels.time_attack_unlock > 0) {
        timeAttackStartButton.disabled = false;
        timeAttackStartButton.textContent = "タイムアタック";
        timeAttackStartButton.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        timeAttackStartButton.disabled = true;
        timeAttackStartButton.textContent = "タイムアタック (未解放)";
        timeAttackStartButton.classList.add('opacity-50', 'cursor-not-allowed');
    }

    // コンパスなしモードのトグル表示
    if (gameStats.itemLevels.no_compass_unlock > 0) {
        compassToggleContainer.classList.remove('hidden');
    } else {
        compassToggleContainer.classList.add('hidden');
    }

    if (gameStats.itemLevels.prioritize_unplayed > 0) {
        prioritizeUnplayedContainer.classList.remove('hidden');
    } else {
        prioritizeUnplayedContainer.classList.add('hidden');
    }
    
    // ▼▼▼ [変更] 最終調査ボタンとプログレスバーの表示制御 ▼▼▼
    if (gameStats.finalInvestigationUnlocked) {
        // 解放済みの場合はボタンを表示し、プログレスバーを非表示
        finalInvestigationButton.classList.remove('hidden');
        finalInvestigationProgressContainer.classList.add('hidden');
    } else {
        // 未解放の場合はボタンを非表示にし、プログレスバーを表示
        finalInvestigationButton.classList.add('hidden');
        finalInvestigationProgressContainer.classList.remove('hidden');

        const totalAchievements = Object.keys(achievementMaster).length;
        const unlockedCount = gameStats.unlockedAchievements.length;
        const currentRate = totalAchievements > 0 ? (unlockedCount / totalAchievements) * 100 : 0;
        const targetRate = 80;
        
        // プログレスバーの進捗を計算 (80%を100%として)
        const progressPercent = Math.min(100, (currentRate / targetRate) * 100);

        finalInvestigationProgressBar.style.width = `${progressPercent}%`;
        finalInvestigationProgressText.textContent = `実績達成率: ${currentRate.toFixed(1)}% / ${targetRate.toFixed(1)}%`;
    }
    // ▲▲▲ [変更] ここまで ▲▲▲

    if (DEBUG_MODE) {
        debugEndRollButton.classList.remove('hidden');
    } else {
        debugEndRollButton.classList.add('hidden');
    }

    if (gameStats.endingCleared) {
        preStartGirl.src = 'girl_ending.png';
        startScreenGirl.src = 'girl_ending.png';
    } else {
        preStartGirl.src = 'girl.png';
        startScreenGirl.src = 'girl.png';
    }
}

/** 所持金表示を更新します */
export function updateMoneyDisplay(money) {
    moneyValueStart.textContent = money.toLocaleString();
    moneyValueShop.textContent = money.toLocaleString();
}

// --- モーダル・通知関連 ---

export function showPauseModal() { pauseModal.classList.remove('hidden'); }
export function hidePauseModal() { pauseModal.classList.add('hidden'); }
export function showVolumeModal() { volumeControlModal.classList.remove('hidden'); }
export function hideVolumeModal() { volumeControlModal.classList.add('hidden'); }
export function showResetModal() { resetConfirmModal.classList.remove('hidden'); }
export function hideResetModal() { resetConfirmModal.classList.add('hidden'); }
export function showLoadingOverlay() { loadingOverlay.classList.remove('hidden'); }
export function hideLoadingOverlay() { loadingOverlay.classList.add('hidden'); }

/**
 * 画面右下に通知（トースト）を表示します
 * @param {string} title - 通知のタイトル
 * @param {string} message - 通知の本文
 * @param {string} iconClass - Font Awesomeのアイコンクラス
 */
export function showToastMessage(title, message, iconClass = 'fa-solid fa-info-circle') {
    Audio.playSE(sounds.se.b3);
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.style.backgroundColor = '#4a2c2a';
    toast.innerHTML = `
        <i class="${iconClass}" style="color: #f5eeda;"></i>
        <div>
            <div class="font-bold">${title}</div>
            <div>${message}</div>
        </div>
    `;
    notificationContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

/** 実績解除の通知を表示します */
export function showAchievementNotification(achievementId) {
    const achievement = achievementMaster[achievementId];
    if (!achievement) return;

    Audio.playSE(sounds.se.achieve);
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
        <i class="${achievement.icon}"></i>
        <div>
            <div class="font-bold">実績解除</div>
            <div>${achievement.name}</div>
        </div>
    `;
    notificationContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
}


// --- 描画（レンダー）関連 ---

/**
 * 実績画面を描画します
 * @param {object} gameStats - 現在のゲーム統計データ
 * @param {function} dialogueCallback - 会話ボタンがクリックされたときに実行される関数
 */
export function renderAchievements(gameStats, dialogueCallback) {
    const achievementsList = document.getElementById('achievements-list');
    achievementsList.innerHTML = '';
    const unlockedCount = gameStats.unlockedAchievements.length;
    const totalAchievements = Object.keys(achievementMaster).length;
    const progressPercentage = totalAchievements > 0 ? (unlockedCount / totalAchievements) * 100 : 0;
    document.getElementById('achievement-progress').textContent = `達成率: ${progressPercentage.toFixed(1)}%`;

    const achievementsByCategory = {};
    Object.keys(achievementMaster).forEach(id => {
        const achievement = achievementMaster[id];
        const category = achievement.category || 'その他';
        if (!achievementsByCategory[category]) achievementsByCategory[category] = [];
        achievementsByCategory[category].push({ id, ...achievement });
    });

    const categoryOrder = ['ストーリーモード', 'タイムアタック', 'その他'];
    categoryOrder.forEach(category => {
        if (achievementsByCategory[category]) {
            const header = document.createElement('h2');
            header.className = 'col-span-full text-2xl font-bold border-b-2 border-dashed border-[#a4886d] pb-2 mb-2 text-left';
            header.textContent = category;
            achievementsList.appendChild(header);

            achievementsByCategory[category].forEach(achievement => {
                const isUnlocked = gameStats.unlockedAchievements.includes(achievement.id);
                const dialogueId = `achievement_${achievement.id}`;
                const hasDialogue = heroineDialogue[dialogueId] && heroineDialogue[dialogueId].length > 0;

                const achievementEl = document.createElement('div');
                achievementEl.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
                
                let descriptionHTML = `<p class="text-sm">${isUnlocked ? achievement.description : '？？？'}</p>`;
                if (isUnlocked && achievement.reward > 0) {
                    descriptionHTML += `<p class="text-xs font-bold text-yellow-600 mt-1">報酬: <i class="fa-solid fa-coins"></i> ${achievement.reward.toLocaleString()}</p>`;
                }

                let buttonHTML = '';
                if (isUnlocked && hasDialogue) {
                    buttonHTML = `<button class="game-button view-dialogue-button" data-dialogue-id="${dialogueId}">会話を見る</button>`;
                }

                achievementEl.innerHTML = `
                    <div class="flex items-start gap-4 flex-grow">
                        <i class="${achievement.icon} text-4xl ${isUnlocked ? 'text-yellow-500' : 'text-gray-500'} mt-1 flex-shrink-0"></i>
                        <div class="text-left flex-grow">
                            <h3 class="font-bold text-lg">${achievement.name}</h3>
                            ${descriptionHTML}
                        </div>
                    </div>
                    ${buttonHTML}
                `;
                achievementsList.appendChild(achievementEl);
            });
        }
    });

    document.querySelectorAll('.view-dialogue-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const dialogueId = e.currentTarget.dataset.dialogueId;
            if (dialogueId && dialogueCallback) {
                dialogueCallback(dialogueId);
            }
        });
    });
}


/** ショップ画面を描画します */
export function renderShop(gameStats, buyItemCallback) {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';
    Object.keys(itemMaster).forEach(itemId => {
        const item = itemMaster[itemId];
        const currentLevel = gameStats.itemLevels[itemId] || 0;
        const maxLevel = item.levels.length;
        const itemEl = document.createElement('div');
        itemEl.className = 'item-card';

        let buttonHTML;
        let name, description;
        const isUnlockable = item.levels.length === 1;

        if (currentLevel < maxLevel) {
            const upgradeInfo = item.levels[currentLevel];
            name = upgradeInfo.name;
            description = upgradeInfo.description;
            buttonHTML = `
                <button class="game-button buy-button" data-item-id="${itemId}">
                    <i class="fa-solid fa-coins"></i> ${upgradeInfo.price.toLocaleString()}
                </button>`;
        } else {
            const maxLevelInfo = item.levels[maxLevel - 1];
            name = maxLevelInfo.name;
            description = isUnlockable ? "解放済みです。" : "このアイテムは最大まで強化されています。";
            buttonHTML = `
                <button class="game-button buy-button max-level" disabled>
                    <i class="fa-solid fa-check"></i> ${isUnlockable ? '解放済み' : 'MAX'}
                </button>`;
        }
        
        itemEl.innerHTML = `
            <div class="item-level-display">
                LV <span>${currentLevel}</span>
            </div>
            <i class="${item.icon} item-icon"></i>
            <div class="item-info">
                <h3 class="item-name">${name}</h3>
                <p class="item-description">${description}</p>
            </div>
            ${buttonHTML}
        `;
        itemList.appendChild(itemEl);
    });

    document.querySelectorAll('.buy-button:not(:disabled)').forEach(button => {
        button.addEventListener('click', () => buyItemCallback(button.dataset.itemId));
    });
}

// --- CG・特殊エフェクト関連 ---
/**
 * 全画面に画像を表示します
 * @param {string} imageSrc - 表示する画像のパス
 * @param {string} effect - 'fade' または 'ripple'
 */
export function showFullscreenImage(imageSrc, effect = 'fade') {
    fullscreenImage.src = imageSrc;
    
    // 以前のエフェクトクラスを削除
    fullscreenImage.className = 'max-w-full max-h-full object-contain';
    
    // 新しいエフェクトクラスを適用
    if (effect === 'ripple') {
        fullscreenImage.classList.add('effect-ripple');
    } else {
        fullscreenImage.classList.add('effect-fade');
    }
    
    fullscreenImageContainer.classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('dialogue-box').classList.add('opacity-0');
}

/** 全画面画像を非表示にします */
export function hideFullscreenImage() {
    fullscreenImageContainer.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('dialogue-box').classList.remove('opacity-0');
    fullscreenImage.src = '';
}

/**
 * 画面に特殊効果を適用します
 * @param {string} effectName - 'wobble' など
 */
export function applyScreenEffect(effectName) {
    const targetElement = document.getElementById('dialogue-modal'); // 対象をdialogue-modalに変更
    if (effectName === 'wobble') {
        targetElement.classList.add('screen-wobble-effect');
        targetElement.addEventListener('animationend', () => {
            targetElement.classList.remove('screen-wobble-effect');
        }, { once: true });
    }
}

/**
 * 継続的な画面効果を開始します
 * @param {string} effectName - 'wobble' など
 */
export function startContinuousScreenEffect(effectName) {
    const targetElement = document.getElementById('dialogue-modal');
    if (effectName === 'wobble') {
        targetElement.classList.add('screen-wobble-continuous');
    }
}

/**
 * 継続的な画面効果を停止します
 * @param {string} effectName - 'wobble' など
 */
export function stopContinuousScreenEffect(effectName) {
    const targetElement = document.getElementById('dialogue-modal');
    if (effectName === 'wobble') {
        targetElement.classList.remove('screen-wobble-continuous');
    }
}

/**
 * 会話シーンの背景を表示します
 * @param {string} imageUrl - 表示する画像のURL
 */
export function showDialogueBackground(imageUrl) {
    const dialogueBackground = document.getElementById('dialogue-background-screen');
    dialogueBackground.style.backgroundImage = `url(${imageUrl})`;
    dialogueBackground.classList.remove('opacity-0');
}

/** 会話シーンの背景を非表示にします */
export function hideDialogueBackground() {
    const dialogueBackground = document.getElementById('dialogue-background-screen');
    dialogueBackground.classList.add('opacity-0');
}


// --- エンドロール関連 ---

/**
 * エンドロールを開始します
 * @param {function} onFinish - エンドロール終了時に呼び出すコールバック関数
 * @param {object} gameStats - 表示する統計データ
 */
export function startEndRoll(onFinish, gameStats) {
    const endRollContainer = document.getElementById('end-roll-container');
    const endRollContent = document.getElementById('end-roll-content');
    const skipButton = document.getElementById('skip-end-roll-button');
    const titleScreen = document.getElementById('end-roll-title-screen');

    Audio.stopBGM();
    Audio.playBGM(sounds.bgm.ending3);

    let statsHTML = '';
    if (gameStats) {
        const playedStories = Object.entries(gameStats.storyHighScores || {})
                                    .map(([title, score]) => {
                                        const storyData = stories.find(s => s.title === title);
                                        const image = storyData && storyData.chapters.length > 0 ? storyData.chapters[storyData.chapters.length - 1].image : '';
                                        return { title, score, image };
                                    })
                                    .sort((a, b) => b.score - a.score);

        if (playedStories.length > 0) {
            statsHTML += `
                <div class="mb-16">
                    <p class="text-xl font-bold mb-8">- 二人の旅路 -</p>
                    <div class="space-y-12 max-w-lg mx-auto">
                        ${playedStories.map(({ title, score, image }) => `
                            <div>
                                <img src="${image}" alt="${title}" class="w-full h-auto rounded-lg shadow-lg mb-4 border-4 border-gray-300">
                                <div class="text-lg flex justify-between items-center text-left">
                                    <span class="truncate pr-4">${title}</span>
                                    <span class="font-bold whitespace-nowrap">${score.toLocaleString()} 点</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>`;
        }
        
        const totalAchievements = Object.keys(achievementMaster).length;
        const achievementRate = totalAchievements > 0 
            ? ((gameStats.unlockedAchievements?.length || 0) / totalAchievements * 100).toFixed(1) 
            : 0;
        
        const timeAttackHighScore = gameStats.timeAttackHighScore || 0;

        statsHTML += `
            <div class="mb-12">
                <p class="text-xl font-bold mb-4">- 調査の記録 -</p>
                <div class="text-lg space-y-2">
                    <p>総調査回数: ${gameStats.gamesCompleted || 0} 回</p>
                    <p>タイムアタック最高得点: ${timeAttackHighScore.toLocaleString()} 点</p>
                    <p>実績達成率: ${achievementRate} %</p>
                </div>
            </div>`;
    }

    endRollContent.innerHTML = `
        <div style="padding-top: 100vh;">
            <div class="mb-16">
                <p class="text-3xl font-bold mb-4">ヒストリカル・ゲッサー</p>
                <p>Historical GeoGuesser</p>
            </div>
            
            ${statsHTML}

            <div class="mb-12">
                <p class="text-xl font-bold mb-4">Cast</p>
                <p>アニー</p>
                <p>キャスター</p>
            </div>
            <div class="mb-12">
                <p class="text-xl font-bold mb-4">Staff</p>
                <p>企画・シナリオ</p>
                <p class="text-lg mb-4">You</p>
                <p>音楽</p>
                <p class="text-lg mb-4">MoppySound / OtoLogic</p>
                <p>開発</p>
                <p class="text-lg mb-4">Gemini</p>
            </div>
            <div class="mb-24">
                <p class="text-xl font-bold mb-4">Special Thanks</p>
                <p>All Players</p>
            </div>
            <div>
                <p>Fin</p>
            </div>
        </div>
        <div style="padding-bottom: 100vh;"></div>
    `;

    endRollContainer.classList.remove('hidden');

    // ▼▼▼ [変更] タイトル表示とスクロールを同時に開始する ▼▼▼
    titleScreen.classList.add('end-roll-title-animation');
    
    // 即座にスクロールを開始
    endRollContent.classList.remove('opacity-0');
    const contentHeight = endRollContent.scrollHeight;
    const duration = (contentHeight > 100) ? contentHeight / 60 : 30; // 60ピクセル/秒でスクロール
    endRollContent.style.animation = `scroll-up ${duration}s linear forwards`;
    
    const finish = () => {
        endRollContainer.classList.add('hidden');
        endRollContent.style.animation = ''; // アニメーションをリセット
        endRollContent.classList.add('opacity-0'); // コンテンツを非表示に
        titleScreen.classList.remove('end-roll-title-animation'); // アニメーションクラスをリセット
        skipButton.removeEventListener('click', finish);
        endRollContent.removeEventListener('animationend', finish);
        if (onFinish) {
            onFinish();
        }
    };
    
    skipButton.addEventListener('click', finish, { once: true });
    endRollContent.addEventListener('animationend', finish, { once: true });
    // ▲▲▲ [変更] ここまで ▲▲▲
}


// --- タイトル画面エフェクト ---
let titleScreenMouseMoveListener = null;
let particleAnimationId = null;
let particleResizeListener = null;

function cleanUpTitleScreenEffects() {
    if (titleScreenMouseMoveListener) {
        document.getElementById('start-screen').removeEventListener('mousemove', titleScreenMouseMoveListener);
        titleScreenMouseMoveListener = null;
    }
    if (particleAnimationId) {
        cancelAnimationFrame(particleAnimationId);
        particleAnimationId = null;
    }
    if (particleResizeListener) {
        window.removeEventListener('resize', particleResizeListener);
        particleResizeListener = null;
    }
}

function setupTitleScreenEffects() {
    cleanUpTitleScreenEffects(); 

    const layers = document.querySelectorAll('.bg-layer');
    const startScreenElement = document.getElementById('start-screen');

    const onMouseMove = (e) => {
        const dialogueModal = document.getElementById('dialogue-modal');
        if (!dialogueModal.classList.contains('hidden')) return;

        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) / centerX;
        const moveY = (clientY - centerY) / centerY;

        layers.forEach(layer => {
            const depth = layer.getAttribute('data-depth');
            const x = -(moveX * depth * 50);
            const y = -(moveY * depth * 50);
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
    };
    startScreenElement.addEventListener('mousemove', onMouseMove);
    titleScreenMouseMoveListener = onMouseMove;

    const particleCanvas = document.getElementById('particle-canvas');
    if (!particleCanvas) return;

    const pCtx = particleCanvas.getContext('2d');
    let particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * particleCanvas.width;
            this.y = Math.random() * particleCanvas.height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.6 - 0.3;
            this.speedY = Math.random() * 0.6 - 0.3;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > particleCanvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > particleCanvas.height) this.speedY *= -1;
        }
        draw() {
            pCtx.beginPath();
            pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            pCtx.fillStyle = `rgba(255, 235, 159, ${this.opacity})`;
            pCtx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const numberOfParticles = (particleCanvas.width * particleCanvas.height) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    function resizeCanvas() {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
        initParticles();
    }
    particleResizeListener = resizeCanvas;
    window.addEventListener('resize', particleResizeListener);
    resizeCanvas();

    function animate() {
        pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        for (const particle of particles) {
            particle.update();
            particle.draw();
        }
        particleAnimationId = requestAnimationFrame(animate);
    }
    
    animate();
}

