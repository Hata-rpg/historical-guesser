const itemMaster = {
    "compass": {
        id: "compass",
        icon: "fa-solid fa-compass",
        levels: [
            {
                level: 1,
                name: "古びた羅針盤",
                description: "コンパスの揺れを20%軽減する。",
                price: 500
            },
            {
                level: 2,
                name: "精密な方位磁針",
                description: "コンパスの揺れを40%軽減する。",
                price: 1300
            },
            {
                level: 3,
                name: "デジタルコンパス",
                description: "コンパスの揺れを60%軽減する。",
                price: 3500
            }
        ]
    },
    "timer": {
        id: "timer",
        icon: "fa-solid fa-stopwatch",
        levels: [
            {
                level: 1,
                name: "懐中時計",
                description: "調査の制限時間が10秒増加する。",
                price: 800
            },
            {
                level: 2,
                name: "ストップウォッチ",
                description: "調査の制限時間がさらに5秒増加する。(合計+15秒)",
                price: 1800
            },
            {
                level: 3,
                name: "クロノメーター",
                description: "調査の制限時間がさらに5秒増加する。(合計+20秒)",
                price: 4500
            }
        ]
    },
    "survey": {
        id: "survey",
        icon: "fa-solid fa-ruler-combined",
        levels: [
            {
                level: 1,
                name: "測量術の入門書",
                description: "距離によるスコア減少ペナルティを10%軽減する。",
                price: 1200
            },
            {
                level: 2,
                name: "測量術の専門書",
                description: "距離によるスコア減少ペナルティを25%軽減する。",
                price: 2700
            },
            {
                level: 3,
                name: "測量術の奥義書",
                description: "距離によるスコア減少ペナルティを40%軽減する。",
                price: 6000
            }
        ]
    },
    "relic": {
        id: "relic",
        icon: "fa-solid fa-gem",
        levels: [
            {
                level: 1,
                name: "古びたダウジングロッド",
                description: "最終スコアが5%増加する。",
                price: 1800
            },
            {
                level: 2,
                name: "精巧なアストロラーベ",
                description: "最終スコアがさらに5%増加する。(合計+10%)",
                price: 4500
            },
            {
                level: 3,
                name: "謎のオーパーツ",
                description: "最終スコアがさらに5%増加する。(合計+15%)",
                price: 8500
            }
        ]
    },
    "time_attack_unlock": {
        id: "time_attack_unlock",
        icon: "fa-solid fa-bolt",
        levels: [
            {
                level: 1,
                name: "時空の羅針盤",
                description: "タイムアタックモードを解放する。",
                price: 1800
            }
        ]
    },
    "no_compass_unlock": {
        id: "no_compass_unlock",
        icon: "fa-solid fa-eye-slash",
        levels: [
            {
                level: 1,
                name: "直感の書",
                description: "コンパスなしモードを解放する。(スコア1.5倍)",
                price: 2700
            }
        ]
    },
    // ▼▼▼ [追加] 新しいアイテムを追加 ▼▼▼
    "prioritize_unplayed": {
        id: "prioritize_unplayed",
        icon: "fa-solid fa-wand-magic-sparkles",
        levels: [
            {
                level: 1,
                name: "未踏の物語を映す水晶",
                description: "ストーリーモードで15,000点以上を獲得していない物語が優先的に選択されるようになります。",
                price: 10000
            }
        ]
    },
    // ▲▲▲ [追加] ここまで ▲▲▲
    "combo_scroll": {
        id: "combo_scroll",
        icon: "fa-solid fa-scroll",
        levels: [
            {
                level: 1,
                name: "連携の巻物",
                description: "コンボごとの倍率が+5%増加する。(基本10%→15%)",
                price: 3600
            },
            {
                level: 2,
                name: "連携の秘伝書",
                description: "コンボごとの倍率がさらに+5%増加する。(合計+20%)",
                price: 8000
            },
            {
                level: 3,
                name: "連携の奥義書",
                description: "コンボごとの倍率がさらに+5%増加する。(合計+25%)",
                price: 17000
            }
        ]
    },
    "map_skin": {
        id: "map_skin",
        icon: "fa-solid fa-palette",
        levels: [
            {
                level: 1,
                name: "世界の絵筆",
                description: "マップの見た目を変更する機能が解放される。(今後のアップデートで追加予定)",
                price: 13000
            },
            {
                level: 2,
                name: "世界の絵筆+",
                description: "新たなマップの見た目が追加される。(今後のアップデートで追加予定)",
                price: 25000
            },
            {
                level: 3,
                name: "世界の絵筆++",
                description: "さらに新たなマップの見た目が追加される。(今後のアップデートで追加予定)",
                price: 50000
            }
        ]
    }
};

