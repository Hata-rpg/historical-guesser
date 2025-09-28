/**
 * config.js
 * * このファイルには、ゲーム全体で使われる設定や定数をまとめています。
 * デバッグモードの切り替えや、音声ファイルの一覧などを管理します。
 * * export: 他ファイルから `import { DEBUG_MODE } from './config.js'` のようにして
 * ここの変数を使えるようにするためのキーワードです。
 */

// --- デバッグ設定 ---
export const DEBUG_MODE = true; // trueにするとデバッグ用の設定が有効になります。falseで無効。
export const DEBUG_UNLOCK_ALL_ACHIEVEMENTS = true; // trueにすると全実績が解除されます

// --- 音声ファイル一覧 ---
// ここでnew Audio()を使い、音声ファイルをあらかじめ読み込んでおきます。
export const sounds = {
    bgm: {
        oped: new Audio('bgm_oped.mp3'),
        q: [new Audio('bgm_q1.mp3'), new Audio('bgm_q2.mp3'), new Audio('bgm_q3.mp3')],
        t1: new Audio('bgm_t1.mp3'),
        dialogue_normal: new Audio('bgm_dialogue_normal.mp3'),
        dialogue_happy: new Audio('bgm_dialogue_happy.mp3'),
        dialogue_serious: new Audio('bgm_dialogue_serious.mp3'),
        dialogue_funny: new Audio('bgm_dialogue_funny.mp3'),
        ending1: new Audio('ending_bgm_1.mp3'), // 最終調査の道中BGM
        ending2: new Audio('ending_bgm_2.mp3'),  // 最終結果表示のBGM
        ending3: new Audio('ending_bgm_3.mp3'), // エンドロールBGM
        heartbeat: new Audio('se_heartbeat.mp3') // 心臓音
    },
    se: {
        b1: new Audio('se_b1.mp3'), // hover
        b2: new Audio('se_b2.mp3'), // answer > 5000
        b3: new Audio('se_b3.mp3'), // answer < 5000
        b4: new Audio('se_b4.mp3'), // click
        p1: new Audio('se_p1.mp3'), // pin
        h1: new Audio('se_h1.mp3'), // hint
        t1: new Audio('se_t1.mp3'),  // timer
        achieve: new Audio('se_achieve.mp3'), // 実績解除音
        coin: new Audio('se_coin.mp3'), // お金獲得音
        magic: new Audio('se_magic.mp3'),
        nassau_crowd: new Audio('se_nassau_crowd.mp3'), // 喧騒
        // ▼▼▼ [追加] 新しい魔法の効果音 ▼▼▼
        water_magic: new Audio('se_water_magic.mp3')
    }
};


