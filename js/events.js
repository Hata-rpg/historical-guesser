/**
 * events.js
 * * すべてのユーザー操作（クリック、キーボード入力など）のイベントリスナーを管理します。
 */
import * as Main from './main.js';
import * as Game from './game.js';
import * as UI from './ui.js';
import * as Audio from './audio.js';
import * as State from './state.js';
import * as Dialogue from './dialogue.js';
import { sounds } from './config.js';

/** すべてのイベントリスナーをセットアップします */
export function setupEventListeners() {
    // --- DOM要素の取得 ---
    const preStartScreen = document.getElementById('pre-start-screen');
    const startButton = document.getElementById('start-button');
    const timeAttackStartButton = document.getElementById('time-attack-start-button');
    const finalInvestigationButton = document.getElementById('final-investigation-button');
    const restartButton = document.getElementById('restart-button');
    const achievementsButton = document.getElementById('achievements-button');
    const backToStartButton = document.getElementById('back-to-start-button');
    const shopButton = document.getElementById('shop-button');
    const backToStartFromShopButton = document.getElementById('back-to-start-from-shop-button');
    const storyLogButton = document.getElementById('story-log-button');
    const backToStartFromStoryButton = document.getElementById('back-to-start-from-story-button');
    const submitAnswerButton = document.getElementById('submit-answer-button');
    const nextChapterButton = document.getElementById('next-chapter-button');
    const volumeButton = document.getElementById('volume-button');
    const closeVolumeModalButton = document.getElementById('close-volume-modal-button');
    const bgmVolumeSlider = document.getElementById('bgm-volume-slider');
    const seVolumeSlider = document.getElementById('se-volume-slider');
    const resumeGameButton = document.getElementById('resume-game-button');
    const returnToTitleButton = document.getElementById('return-to-title-button');
    const resetDataButton = document.getElementById('reset-data-button');
    const confirmResetButton = document.getElementById('confirm-reset-button');
    const cancelResetButton = document.getElementById('cancel-reset-button');
    const dialogueModal = document.getElementById('dialogue-modal');
    const debugEndRollButton = document.getElementById('debug-end-roll-button');

    // --- イベントリスナーの設定 ---
    preStartScreen.addEventListener('click', () => {
        sessionStorage.setItem('gameLaunchedInSession', 'true');
        preStartScreen.classList.add('hidden');
        UI.showScreen('start');
        Audio.playBGM(sounds.bgm.oped);
    }, { once: true });

    startButton.addEventListener('click', () => Main.startGame('story'));
    timeAttackStartButton.addEventListener('click', () => Main.startGame('timeAttack'));
    finalInvestigationButton.addEventListener('click', () => Main.startGame('final'));
    submitAnswerButton.addEventListener('click', () => Game.submitAnswer());
    nextChapterButton.addEventListener('click', () => Main.nextChapter());
    restartButton.addEventListener('click', () => Main.restartGame());

    // ▼▼▼ [変更] ボタンクリック時にSEを再生する処理を追加 ▼▼▼
    achievementsButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.renderAchievements(State.getGameStats(), Dialogue.startDialogue);
        UI.showScreen('achievements');
    });
    backToStartButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.updateTitleScreenUI(State.getGameStats());
        UI.showScreen('start');
    });

    shopButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.renderShop(State.getGameStats(), Main.buyItem);
        UI.showScreen('shop');
    });
    backToStartFromShopButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.updateTitleScreenUI(State.getGameStats());
        UI.showScreen('start');
    });

    storyLogButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.showToastMessage('未実装', 'この機能は現在準備中です。', 'fa-solid fa-gears');
    });
    backToStartFromStoryButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.updateTitleScreenUI(State.getGameStats());
        UI.showScreen('start');
    });


    volumeButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.showVolumeModal();
    });
    closeVolumeModalButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.hideVolumeModal();
    });
    // ▲▲▲ [変更] ここまで ▲▲▲
    
    bgmVolumeSlider.addEventListener('input', (e) => Audio.setBGMVolume(e.target.value));
    seVolumeSlider.addEventListener('input', (e) => Audio.setSEVolume(e.target.value));

    resumeGameButton.addEventListener('click', Main.resumeGame);
    returnToTitleButton.addEventListener('click', Main.returnToTitle);

    resetDataButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.showResetModal();
    });
    cancelResetButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b4);
        UI.hideResetModal();
    });
    confirmResetButton.addEventListener('click', () => {
        Audio.playSE(sounds.se.b3);
        localStorage.removeItem('historicalGeoGuesserStats');
        UI.hideResetModal();
        setTimeout(() => location.reload(), 300);
    });

    dialogueModal.addEventListener('click', Dialogue.showNextDialogue);
    
    // ▼▼▼ [変更] デバッグ用エンドロール開始時に統計情報を渡す ▼▼▼
    if (debugEndRollButton) {
        debugEndRollButton.addEventListener('click', () => {
            Audio.playSE(sounds.se.b4); 
            UI.startEndRoll(() => {
                Audio.stopBGM();
                Audio.playBGM(sounds.bgm.oped);
                UI.showScreen('start');
            }, State.getGameStats()); // 統計情報を渡す
        });
    }
    // ▲▲▲ [変更] ここまで ▲▲▲

    // ▼▼▼ [追加] 右クリックメニューを無効化 ▼▼▼
    window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    window.addEventListener('keydown', (e) => {
        if (Dialogue.getIsDialogueActive()) {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                Dialogue.showNextDialogue();
            }
            return;
        }
        if (e.code === 'Space' && !document.getElementById('game-screen').classList.contains('hidden') && !Main.getIsPaused()) {
            e.preventDefault();
            if (!nextChapterButton.classList.contains('hidden')) nextChapterButton.click();
            else if (!submitAnswerButton.disabled) submitAnswerButton.click();
        }

        if (e.key === 'Escape') {
            e.preventDefault();

            const volumeModal = document.getElementById('volume-control-modal');
            const resetModal = document.getElementById('reset-confirm-modal');
            const achievementsScreen = document.getElementById('achievements-screen');
            const shopScreen = document.getElementById('shop-screen');
            const storyLogScreen = document.getElementById('story-log-screen');
            const gameScreen = document.getElementById('game-screen');
            const resultScreen = document.getElementById('result-screen');
            
            if (!volumeModal.classList.contains('hidden')) {
                UI.hideVolumeModal();
            } else if (!resetModal.classList.contains('hidden')) {
                UI.hideResetModal();
            } else if (!achievementsScreen.classList.contains('hidden')) {
                backToStartButton.click();
            } else if (!shopScreen.classList.contains('hidden')) {
                backToStartFromShopButton.click();
            } else if (!storyLogScreen.classList.contains('hidden')) {
                backToStartFromStoryButton.click();
            } else if (!gameScreen.classList.contains('hidden') && resultScreen.classList.contains('hidden')) {
                if (Main.getIsPaused()) {
                    Main.resumeGame();
                } else {
                    Main.pauseGame();
                }
            }
        }
    });

    document.querySelectorAll('.game-button').forEach(button => {
        button.addEventListener('mouseenter', () => Audio.playSE(sounds.se.b1));
    });
}
