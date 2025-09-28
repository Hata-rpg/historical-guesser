const achievementMaster = {
    // --- カテゴリ: ストーリーモード ---
    'first_step': {
        name: '初めての調査完了',
        description: 'ストーリーモードで初めてゲームを最後までプレイする。',
        icon: 'fa-solid fa-shoe-prints',
        category: 'ストーリーモード',
        type: 'final',
        reward: 250,
        requirePinning: true, // ピン刺し必須フラグ
        condition: (data, stats) => data.gameMode === 'story' && stats.gamesCompleted >= 1
    },
    'three_games': {
        name: '三度の調査',
        description: 'ストーリーモードを3回完了する。',
        icon: 'fa-solid fa-book',
        category: 'ストーリーモード',
        type: 'final',
        reward: 300,
        requirePinning: true, // ピン刺し必須フラグ
        condition: (data, stats) => data.gameMode === 'story' && stats.gamesCompleted >= 3
    },
    'five_games': {
        name: '五度の調査',
        description: 'ストーリーモードを5回完了する。',
        icon: 'fa-solid fa-compass-drafting',
        category: 'ストーリーモード',
        type: 'final',
        reward: 400,
        requirePinning: true, // ピン刺し必須フラグ
        condition: (data, stats) => data.gameMode === 'story' && stats.gamesCompleted >= 5
    },
    'ten_games': {
        name: '十回の調査',
        description: 'ストーリーモードを10回完了する。',
        icon: 'fa-solid fa-map-marked-alt',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        requirePinning: true, // ピン刺し必須フラグ
        condition: (data, stats) => data.gameMode === 'story' && stats.gamesCompleted >= 10
    },
    'fifteen_games': {
        name: '十五回の調査',
        description: 'ストーリーモードを15回完了する。',
        icon: 'fa-solid fa-scroll',
        category: 'ストーリーモード',
        type: 'final',
        reward: 750,
        requirePinning: true, // ピン刺し必須フラグ
        condition: (data, stats) => data.gameMode === 'story' && stats.gamesCompleted >= 15
    },
    'twenty_five_games': {
        name: 'ベテラン調査員',
        description: 'ストーリーモードを20回完了する。',
        icon: 'fa-solid fa-landmark-flag',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1000,
        requirePinning: true, // ピン刺し必須フラグ
        condition: (data, stats) => data.gameMode === 'story' && stats.gamesCompleted >= 20
    },
    'no_compass': {
        name: '直感の勝利',
        description: 'コンパスを使わずに、合計15,000点以上でクリアする。',
        icon: 'fa-solid fa-magnet',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1200,
        condition: (data, stats) => data.gameMode === 'story' && !data.useCompass && data.totalScore >= 15000
    },
    'rookie_score': {
        name: '探求の始まり',
        description: 'ストーリーモードで合計10,000点以上を獲得する。',
        icon: 'fa-solid fa-seedling',
        category: 'ストーリーモード',
        type: 'final',
        reward: 200,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 10000
    },
    'adept_score': {
        name: '熟練の調査員',
        description: 'ストーリーモードで合計14,000点以上を獲得する。',
        icon: 'fa-solid fa-book-reader',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 14000
    },
    'high_score_16k': {
        name: '卓越した探求者',
        description: 'ストーリーモードで合計16,000点以上を獲得する。',
        icon: 'fa-solid fa-shield-halved',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1200,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 16000
    },
    'high_score_17k': {
        name: '伝説の探求者',
        description: 'ストーリーモードで合計17,000点以上を獲得する。',
        icon: 'fa-solid fa-trophy',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1300,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 17000
    },
    'high_score_18k': {
        name: '偉業への挑戦',
        description: 'ストーリーモードで合計18,000点以上を獲得する。',
        icon: 'fa-solid fa-star-of-david',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1600,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 18000
    },
    'high_score_19k': {
        name: '神業の領域',
        description: 'ストーリーモードで合計19,000点以上を獲得する。',
        icon: 'fa-solid fa-award',
        category: 'ストーリーモード',
        type: 'final',
        reward: 2400,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 19000
    },
    'high_score_20k': {
        name: '歴史の探究者',
        description: 'ストーリーモードで合計20,000点以上を獲得する。',
        icon: 'fa-solid fa-hat-wizard',
        category: 'ストーリーモード',
        type: 'final',
        reward: 4000,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore >= 20000
    },
    'consistent_chapters': {
        name: '安定した調査',
        description: '1回のストーリーモードで、全3章のスコアが4,000点以上になる。',
        icon: 'fa-solid fa-balance-scale',
        category: 'ストーリーモード',
        type: 'final',
        reward: 800,
        condition: (data, stats) => data.gameMode === 'story' && data.chapterResults.length === 3 && data.chapterResults.every(r => r.score >= 4000)
    },
    'perfect_story': {
        name: '完璧な調査',
        description: '1回のストーリーモードで、全3章のスコアが5800点以上になる。',
        icon: 'fa-solid fa-gem',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1600,
        condition: (data, stats) => data.gameMode === 'story' && data.chapterResults.length === 3 && data.chapterResults.every(r => r.score >= 5800)
    },
    'davinci_code': {
        name: 'ダ・ヴィンチ・コード',
        description: '「ダ・ヴィンチの失われた設計図」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-scroll',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ダ・ヴィンチの失われた設計図' && data.totalScore >= 15000
    },
    'pirate_king': {
        name: '海賊王',
        description: '「海賊王の呪われた財宝」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-skull-crossbones',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '海賊王の呪われた財宝' && data.totalScore >= 15000
    },
    'vampire_hunter': {
        name: '吸血鬼ハンター',
        description: '「吸血鬼の追憶」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-moon',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '吸血鬼の追憶' && data.totalScore >= 15000
    },
    'holy_grail': {
        name: '聖杯の探求者',
        description: '「テンプル騎士団の聖杯」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-cross',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'テンプル騎士団の聖杯' && data.totalScore >= 15000
    },
    'amber_room': {
        name: '琥珀の間の追跡者',
        description: '「琥珀の間の影」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-gem',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '琥珀の間の影' && data.totalScore >= 15000
    },
    'pharaohs_heart': {
        name: 'ファラオの心臓',
        description: '「ファラオの心臓」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-ankh',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ファラオの心臓' && data.totalScore >= 15000
    },
    'cold_war_ghost': {
        name: '冷戦のゴースト',
        description: '「冷戦のゴースト」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-user-secret',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '冷戦のゴースト' && data.totalScore >= 15000
    },
    'cthulhu_fhtagn': {
        name: 'くとぅるふ ふたぐん',
        description: '「クトゥルフの呼び声」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-tentacle',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'クトゥルフの呼び声' && data.totalScore >= 15000
    },
    'mozart_requiem': {
        name: 'レクイエム',
        description: '「モーツァルトの未完のレクイエム」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-music',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'モーツァルトの未完のレクイエム' && data.totalScore >= 15000
    },
    'bushido_spirit': {
        name: '武士の魂',
        description: '「サムライの魂を追って」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-torii-gate',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'サムライの魂を追って' && data.totalScore >= 15000
    },
    'freedom_architect': {
        name: '自由の設計者',
        description: '「自由の設計図」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-monument',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '自由の設計図' && data.totalScore >= 15000
    },
    'emperor_immortality': {
        name: '始皇帝の遺産',
        description: '「始皇帝の不老不死」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-landmark',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '始皇帝の不老不死' && data.totalScore >= 15000
    },
    'shogun_secrets': {
        name: '将軍の密書',
        description: '「失われた将軍の密書」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-file-invoice',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '失われた将軍の密書' && data.totalScore >= 15000
    },
    'volcanic_treasure': {
        name: '火山の国の秘宝',
        description: '「火山の国の秘宝」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-volcano',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '火山の国の秘宝' && data.totalScore >= 15000
    },
    'sherlock_holmes': {
        name: '名探偵',
        description: '「シャーロック・ホームズ最後の事件」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-magnifying-glass',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'シャーロック・ホームズ最後の事件' && data.totalScore >= 15000
    },
    'ryoma_pact': {
        name: '維新の志士',
        description: '「坂本龍馬の密約」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-anchor',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '坂本龍馬の密約' && data.totalScore >= 15000
    },
    'faustian_bargain': {
        name: '悪魔との契約',
        description: '「ファウスト博士の契約」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-handshake-angle',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ファウスト博士の契約' && data.totalScore >= 15000
    },
    'rasputin_curse': {
        name: '怪僧の呪い',
        description: '「ラスプーチンの呪い」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-hat-wizard',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ラスプーチンの呪い' && data.totalScore >= 15000
    },
    'ripperologist': {
        name: 'リッパーロロジスト',
        description: '「ジャック・ザ・リッパーの正体」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-mask',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ジャック・ザ・リッパーの正体' && data.totalScore >= 15000
    },
    'three_sacred_treasures': {
        name: '三種の神器',
        description: '「三種の神器の秘密」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-vihara',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '三種の神器の秘密' && data.totalScore >= 15000
    },
    'golden_compass': {
        name: '黄金の羅針盤',
        description: '「黄金の羅針盤」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-compass',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '黄金の羅針盤' && data.totalScore >= 15000
    },
    'lost_prophecy': {
        name: '失われた預言',
        description: '「失われた預言」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-book-bible',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '失われた預言' && data.totalScore >= 15000
    },
    'inca_gold': {
        name: 'インカの黄金',
        description: '「インカの黄金都市」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-sun',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'インカの黄金都市' && data.totalScore >= 15000
    },
    'marco_polo_map': {
        name: 'マルコ・ポーロの地図',
        description: '「マルコ・ポーロの幻の地図」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-map-location-dot',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'マルコ・ポーロの幻の地図' && data.totalScore >= 15000
    },
    'royal_scepter': {
        name: '王家の王笏',
        description: '「王家の秘宝「太陽の王笏」」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-gavel',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '王家の秘宝「太陽の王笏」' && data.totalScore >= 15000
    },
    'romanov_cypher': {
        name: 'ロマノフ家の暗号',
        description: '「ロマノフ家の最後の暗号」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-snowflake',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ロマノフ家の最後の暗号' && data.totalScore >= 15000
    },
    'lost_library': {
        name: '失われた図書館',
        description: '「失われた図書館の叡智」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-book-atlas',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '失われた図書館の叡智' && data.totalScore >= 15000
    },
    'mayan_calendar': {
        name: 'マヤの暦',
        description: '「マヤ暦の最終予言」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-calendar-days',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'マヤ暦の最終予言' && data.totalScore >= 15000
    },
    'voc_ghost_ship': {
        name: '幽霊船の真実',
        description: '「オランダ東インド会社の幽霊船」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-ship',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'オランダ東インド会社の幽霊船' && data.totalScore >= 15000
    },
    'atlantis_legacy': {
        name: 'アトランティスの遺産',
        description: '「アトランティスの遺産」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-water',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アトランティスの遺産' && data.totalScore >= 15000
    },
    'star_melody': {
        name: '星の旋律',
        description: '「星の旋律」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-star',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '星の旋律' && data.totalScore >= 15000
    },
    'nazca_lines': {
        name: 'ナスカの謎',
        description: '「ナスカの地上絵の謎」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-feather',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ナスカの地上絵の謎' && data.totalScore >= 15000
    },
    'ancient_oracle': {
        name: '古代の神託',
        description: '「古代の巫女の神託」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-person-praying',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '古代の巫女の神託' && data.totalScore >= 15000
    },
    'hightech_shadow': {
        name: 'ハイテク都市の影',
        description: '「ハイテク都市の影」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-microchip',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ハイテク都市の影' && data.totalScore >= 15000
    },
    'century_concert': {
        name: '世紀の演奏会',
        description: '「世紀の演奏会」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-masks-theater',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '世紀の演奏会' && data.totalScore >= 15000
    },
    'husaria_spear': {
        name: 'フサリアの槍',
        description: '「フサリアの槍」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-feather-pointed',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'フサリアの槍' && data.totalScore >= 15000
    },
    'time_crystal': {
        name: '時間の結晶',
        description: '「時間の結晶」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-clock',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '時間の結晶' && data.totalScore >= 15000
    },
    'silent_melody': {
        name: '沈黙の旋律',
        description: '「沈黙の旋律」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-music',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '沈黙の旋律' && data.totalScore >= 15000
    },
    'ice_phoenix': {
        name: '氷の不死鳥',
        description: '「氷の不死鳥」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-icicles',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '氷の不死鳥' && data.totalScore >= 15000
    },
    'golden_dragon_tear': {
        name: '黄金の龍の涙',
        description: '「黄金の龍の涙」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-dragon',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '黄金の龍の涙' && data.totalScore >= 15000
    },
    'mu_continent': {
        name: 'ムー大陸の探求者',
        description: '「ムー大陸の残響」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-water',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ムー大陸の残響' && data.totalScore >= 15000
    },
    'aztec_sacrifice': {
        name: 'アステカの心臓',
        description: '「アステカの生贄の心臓」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-heart-pulse',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アステカの生贄の心臓' && data.totalScore >= 15000
    },
    'freemason_origin': {
        name: 'フリーメイソンの起源',
        description: '「フリーメイソンの起源」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-eye',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'フリーメイソンの起源' && data.totalScore >= 15000
    },
    'captain_cook_last_voyage': {
        name: 'クック最後の航海',
        description: '「キャプテン・クック最後の航海」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-ship',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'キャプテン・クック最後の航海' && data.totalScore >= 15000
    },
    'marathon_warrior': {
        name: 'マラトンの伝令',
        description: '「マラソン戦士の伝令」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-person-running',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'マラソン戦士の伝令' && data.totalScore >= 15000
    },
    'black_death': {
        name: '黒死病の爪痕',
        description: '「黒死病の爪痕」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-virus',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '黒死病の爪痕' && data.totalScore >= 15000
    },
    'knights_of_malta': {
        name: 'マルタ騎士団の栄光',
        description: '「マルタ騎士団の攻防」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-shield-halved',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'マルタ騎士団の攻防' && data.totalScore >= 15000
    },
    'tulip_mania': {
        name: 'チューリップ狂騒曲',
        description: '「チューリップ狂騒曲」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-leaf',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'チューリップ狂騒曲' && data.totalScore >= 15000
    },
    'fountain_of_youth': {
        name: '若さの泉',
        description: '「若さの泉を探して」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-bottle-water',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '若さの泉を探して' && data.totalScore >= 15000
    },
    'bounty_mutiny': {
        name: 'バウンティ号の反乱',
        description: '「バウンティ号の反乱」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-anchor-circle-exclamation',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'バウンティ号の反乱' && data.totalScore >= 15000
    },
    'alcatraz_escape': {
        name: 'アルカトラズからの脱出',
        description: '「アルカトラズからの脱出」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-tower-observation',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アルカトラズからの脱出' && data.totalScore >= 15000
    },
    'trans_siberian_railway': {
        name: 'シベリア鉄道の秘密',
        description: '「シベリア鉄道の秘密」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-train-subway',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'シベリア鉄道の秘密' && data.totalScore >= 15000
    },
    'alchemist_legacy': {
        name: '錬金術師の遺産',
        description: '「錬金術師の遺産」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-flask-vial',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '錬金術師の遺産' && data.totalScore >= 15000
    },
    'pirate_queen': {
        name: '海賊女王の秘宝',
        description: '「海賊女王の秘宝」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-crown',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '海賊女王の秘宝' && data.totalScore >= 15000
    },
    'great_voyage_cross': {
        name: '大航海時代の十字架',
        description: '「大航海時代の十字架」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-cross',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '大航海時代の十字架' && data.totalScore >= 15000
    },
    'aqua_orb': {
        name: '海の民の至宝',
        description: '「海の民の至宝「アクア・オーブ」」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-water',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '海の民の至宝「アクア・オーブ」' && data.totalScore >= 15000
    },
    'angkor_dynasty': {
        name: 'アンコール王朝の謎',
        description: '「アンコール王朝の謎」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-place-of-worship',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アンコール王朝の謎' && data.totalScore >= 15000
    },
    'joan_of_arc': {
        name: 'ジャンヌ・ダルクの聖旗',
        description: '「ジャンヌ・ダルクの聖旗」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-flag',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ジャンヌ・ダルクの聖旗' && data.totalScore >= 15000
    },
    'abyssinian_gold': {
        name: 'アビシニアン・ゴールド',
        description: '「アビシニアン・ゴールドの伝説」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-gem',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アビシニアン・ゴールドの伝説' && data.totalScore >= 15000
    },
    'cathar_heresy': {
        name: 'カタリ派の異端文書',
        description: '「カタリ派の異端文書」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-book-bible',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'カタリ派の異端文書' && data.totalScore >= 15000
    },
    'leonidas_shield': {
        name: 'レオニダスの盾',
        description: '「レオニダスの盾」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-shield',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'レオニダスの盾' && data.totalScore >= 15000
    },
    'lost_aviator': {
        name: '消えた飛行士',
        description: '「消えた飛行士の謎」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-plane',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '消えた飛行士の謎' && data.totalScore >= 15000
    },
    'samurai_sword': {
        name: '呪われたサムライソード',
        description: '「呪われたサムライソード」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-khanda',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '呪われたサムライソード' && data.totalScore >= 15000
    },
    'last_conquistador': {
        name: '最後のコンキスタドール',
        description: '「最後のコンキスタドールの地図」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-map',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '最後のコンキスタドールの地図' && data.totalScore >= 15000
    },
    'space_time_log': {
        name: '時空の航海日誌',
        description: '「時空の航海日誌」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-satellite',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '時空の航海日誌' && data.totalScore >= 15000
    },
    'dragon_vein': {
        name: '龍脈の羅針盤',
        description: '「龍脈の羅針盤」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-dragon',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '龍脈の羅針盤' && data.totalScore >= 15000
    },
    'faberge_egg': {
        name: 'ファベルジェの卵',
        description: '「ファベルジェの失われた卵」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-egg',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ファベルジェの失われた卵' && data.totalScore >= 15000
    },
    'silk_road_oracle': {
        name: 'シルクロードの神託',
        description: '「シルクロードの神託」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-road',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'シルクロードの神託' && data.totalScore >= 15000
    },
    'phantom_of_the_opera': {
        name: 'オペラ座の怪人',
        description: '「オペラ座の怪人の遺産」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-mask',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'オペラ座の怪人の遺産' && data.totalScore >= 15000
    },
    'mayan_serpent': {
        name: 'マヤの蛇の歯',
        description: '「マヤの蛇の歯」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-staff-snake',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'マヤの蛇の歯' && data.totalScore >= 15000
    },
    'alchemist_cipher': {
        name: '錬金術師の暗号',
        description: '「錬金術師の暗号」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-scroll',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '錬金術師の暗号' && data.totalScore >= 15000
    },
    'serpent_river': {
        name: '蛇の川の神託',
        description: '「蛇の川の神託」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-water',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '蛇の川の神託' && data.totalScore >= 15000
    },
    'shadow_architect': {
        name: '影の建築家',
        description: '「影の建築家」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-ruler-combined',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '影の建築家' && data.totalScore >= 15000
    },
    'franklin_expedition': {
        name: 'フランクリン遠征隊',
        description: '「失われたフランクリン遠征隊」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-ship',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '失われたフランクリン遠征隊' && data.totalScore >= 15000
    },
    'voynich_manuscript': {
        name: 'ヴォイニッチ手稿',
        description: '「ヴォイニッチ手稿の鍵」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-book',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ヴォイニッチ手稿の鍵' && data.totalScore >= 15000
    },
    'lost_city_z': {
        name: '失われた都市Z',
        description: '「失われた都市Z」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-city',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '失われた都市Z' && data.totalScore >= 15000
    },
    'hannibal_alps': {
        name: 'ハンニバルの雪越え',
        description: '「ハンニバルの雪越え」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-mountain',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ハンニバルの雪越え' && data.totalScore >= 15000
    },
    'roanoke_colony': {
        name: 'ロアノーク植民地',
        description: '「ロアノーク植民地の消失」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-tree',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ロアノーク植民地の消失' && data.totalScore >= 15000
    },
    'alexandria_knowledge': {
        name: 'アレクサンドリアの知識',
        description: '「アレクサンドリアの失われた知識」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-book-open',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アレクサンドリアの失われた知識' && data.totalScore >= 15000
    },
    'amber_room_truth': {
        name: '琥珀の間の真実',
        description: '「琥珀の間の真実」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-gem',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '琥珀の間の真実' && data.totalScore >= 15000
    },
    'king_solomon_mines': {
        name: 'ソロモン王の鉱山',
        description: '「ソロモン王の鉱山」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-gem',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ソロモン王の鉱山' && data.totalScore >= 15000
    },
    'celestial_score': {
        name: '天体のスコア',
        description: '「天体のスコア」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-music',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '天体のスコア' && data.totalScore >= 15000
    },
    'quantum_ghost': {
        name: '量子世界のゴースト',
        description: '「量子世界のゴースト」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-atom',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '量子世界のゴースト' && data.totalScore >= 15000
    },
    'olympus_prowess': {
        name: 'オリンポスの神業',
        description: '「オリンポスの神業」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-bolt',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'オリンポスの神業' && data.totalScore >= 15000
    },
    'phantom_opera': {
        name: '幻影のオペラ',
        description: '「幻影のオペラ」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-masks-theater',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '幻影のオペラ' && data.totalScore >= 15000
    },
    'alchemist_garden': {
        name: '錬金術師の庭園',
        description: '「錬金術師の庭園」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-seedling',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '錬金術師の庭園' && data.totalScore >= 15000
    },
    'dragon_cradle': {
        name: '龍の揺りかご',
        description: '「龍の揺りかご」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-dragon',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '龍の揺りかご' && data.totalScore >= 15000
    },
    'bushido_code': {
        name: '武士道のコード',
        description: '「武士道のコード」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-khanda',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '武士道のコード' && data.totalScore >= 15000
    },
    'celestial_race': {
        name: '天空のレース',
        description: '「天空のレース」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-flag-checkered',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '天空のレース' && data.totalScore >= 15000
    },
    'cartographer_cipher': {
        name: '地図職人の暗号',
        description: '「地図職人の暗号」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-map',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '地図職人の暗号' && data.totalScore >= 15000
    },
    'aztec_revenge': {
        name: 'アステカの復讐',
        description: '「アステカの復讐」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-sun',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アステカの復讐' && data.totalScore >= 15000
    },
    'vinland_map': {
        name: 'ヴィンランド・マップ',
        description: '「ヴィンランド・マップの真偽」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-map',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ヴィンランド・マップの真偽' && data.totalScore >= 15000
    },
    'round_table': {
        name: '円卓の騎士',
        description: '「円卓の騎士の誓い」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-shield-halved',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '円卓の騎士の誓い' && data.totalScore >= 15000
    },
    'atlantis_last_king': {
        name: 'アトランティス最後の王',
        description: '「アトランティス最後の王」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-water',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'アトランティス最後の王' && data.totalScore >= 15000
    },
    'davinci_automaton': {
        name: 'ダ・ヴィンチのオートマタ',
        description: '「ダ・ヴィンチの automaton」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-robot',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ダ・ヴィンチの automaton' && data.totalScore >= 15000
    },
    'blackbeard_treasure': {
        name: '黒髭の財宝',
        description: '「黒髭の最後の財宝」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-skull-crossbones',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '黒髭の最後の財宝' && data.totalScore >= 15000
    },
    'doctor_faustus': {
        name: 'ファウスト博士の契約',
        description: '「ファウスト博士の契約」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-handshake',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ファウスト博士の契約' && data.totalScore >= 15000
    },
    'cagliostro_potion': {
        name: 'カリオストロの秘薬',
        description: '「カリオストロ伯爵の秘薬」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-vial-circle-check',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'カリオストロ伯爵の秘薬' && data.totalScore >= 15000
    },
    'dead_sea_scrolls': {
        name: '死海文書の守護者',
        description: '「死海文書の守護者」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-scroll',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === '死海文書の守護者' && data.totalScore >= 15000
    },
    'hammurabi_code': {
        name: 'ハンムラビ法典',
        description: '「ハンムラビ法典の秘密」で15,000点以上を獲得する。',
        icon: 'fa-solid fa-scale-balanced',
        category: 'ストーリーモード',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.storyTitle === 'ハンムラビ法典の秘密' && data.totalScore >= 15000
    },
    'good_chapter_score': {
        name: '鋭い洞察',
        description: 'いずれかの章で、5,000点以上のスコアを獲得する。',
        icon: 'fa-solid fa-lightbulb',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 150,
        condition: (data, stats) => data.gameMode === 'story' && data.chapterScore >= 5000
    },
    'great_chapter_score': {
        name: '見事な推理',
        description: 'いずれかの章で、5,500点以上のスコアを獲得する。',
        icon: 'fa-solid fa-magnifying-glass-chart',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 300,
        condition: (data, stats) => data.gameMode === 'story' && data.chapterScore >= 5500
    },
    'near_perfect': {
        name: 'あと一歩',
        description: 'いずれかの章で、5,800点以上5,900点未満のスコアを獲得する。',
        icon: 'fa-solid fa-bullseye',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 350,
        condition: (data, stats) => data.gameMode === 'story' && data.chapterScore >= 5800 && data.chapterScore < 5900
    },
    'perfect_chapter': {
        name: '完璧な推測',
        description: 'いずれかの章で、5,900点以上のスコアを獲得する。',
        icon: 'fa-solid fa-star',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 1000,
        condition: (data, stats) => data.gameMode === 'story' && data.chapterScore >= 5900
    },
    'time_to_spare': {
        name: '余裕のクリア',
        description: 'いずれかの章を、残り時間45秒以上かつ5,500点以上でクリアする。',
        icon: 'fa-solid fa-hourglass-half',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 200,
        condition: (data, stats) => data.gameMode === 'story' && data.time >= 45 && data.chapterScore >= 5500
    },
    'speed_demon': {
        name: '電光石火',
        description: 'いずれかの章を、残り時間55秒以上かつ5,500点以上でクリアする。',
        icon: 'fa-solid fa-bolt',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.time >= 55 && data.chapterScore >= 5500
    },
    'no_hints_perfect': {
        name: 'ノーヒントマスター',
        description: 'ヒントが一つも表示される前に、合計15,000点以上を獲得する。',
        icon: 'fa-solid fa-brain',
        category: 'ストーリーモード',
        type: 'final',
        reward: 1000,
        condition: (data, stats) => {
            if (data.gameMode !== 'story' || data.totalScore < 15000 || data.chapterResults.length < 3) return false;
            return data.chapterResults.every(r => (r.initialTime - r.remainingTime) < 10);
        }
    },
    'close_call_win': {
        name: 'ギリギリセーフ',
        description: '残り時間5秒未満で、5000点以上でクリアする。',
        icon: 'fa-solid fa-person-running',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 700,
        condition: (data, stats) => data.gameMode === 'story' && data.time < 5 && data.time > 0 && data.chapterScore >= 5000
    },
    'pinpoint': {
        name: 'ピンポイント',
        description: 'いずれかの章で、正解との距離10km未満を達成する。',
        icon: 'fa-solid fa-map-pin',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 250,
        condition: (data, stats) => data.gameMode === 'story' && data.distance < 10
    },
    'sniper': {
        name: 'スナイパー',
        description: 'いずれかの章で、正解との距離0.1km未満を達成する。',
        icon: 'fa-solid fa-crosshairs',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'story' && data.distance < 0.1
    },
    'globetrotter': {
        name: '大陸横断',
        description: 'いずれかの章で、ピンを刺した上で正解との距離が5,000km以上離れる。',
        icon: 'fa-solid fa-plane-departure',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 50,
        condition: (data, stats) => data.gameMode === 'story' && data.distance >= 5000 && data.pinned
    },
    'lost': {
        name: '迷子',
        description: 'いずれかの章で、ピンを刺した上で正解との距離が10,000km以上離れる。',
        icon: 'fa-solid fa-compass',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 100,
        condition: (data, stats) => data.gameMode === 'story' && data.distance >= 10000 && data.pinned
    },
    'time_is_up': {
        name: '時間切れ',
        description: 'いずれかの章で時間切れ（残り時間0秒）で回答する。',
        icon: 'fa-solid fa-hourglass-end',
        category: 'ストーリーモード',
        type: 'chapter',
        reward: 100,
        condition: (data, stats) => data.gameMode === 'story' && data.time <= 0
    },
    'minus_score': {
        name: '地図は苦手？',
        description: 'ストーリーモードで合計スコアがマイナスになる。',
        icon: 'fa-solid fa-map-pin',
        category: 'ストーリーモード',
        type: 'final',
        reward: 100,
        condition: (data, stats) => data.gameMode === 'story' && data.totalScore < 0
    },

    // --- カテゴリ: タイムアタック ---
    'time_attack_first': {
        name: '時への挑戦',
        description: 'タイムアタックモードを初めてプレイする。',
        icon: 'fa-solid fa-hourglass-start',
        category: 'タイムアタック',
        type: 'final',
        reward: 250,
        condition: (data, stats) => data.gameMode === 'timeAttack'
    },
    'time_attack_3q': {
        name: 'タイムスプリンター',
        description: '1回のタイムアタックで3問以上回答し、合計10,000点以上でクリアする。',
        icon: 'fa-solid fa-flag-checkered',
        category: 'タイムアタック',
        type: 'final',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.chapterResults.length >= 3 && data.totalScore >= 10000
    },
    'time_attack_5q': {
        name: 'タイムアタッカー',
        description: '1回のタイムアタックで5問以上回答し、合計20,000点以上でクリアする。',
        icon: 'fa-solid fa-stopwatch',
        category: 'タイムアタック',
        type: 'final',
        reward: 1000,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.chapterResults.length >= 5 && data.totalScore >= 20000
    },
    'time_attack_10q': {
        name: 'クロノマスター',
        description: '1回のタイムアタックで10問以上回答し、合計40,000点以上でクリアする。',
        icon: 'fa-solid fa-user-clock',
        category: 'タイムアタック',
        type: 'final',
        reward: 1600,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.chapterResults.length >= 10 && data.totalScore >= 40000
    },
    'time_attack_15q': {
        name: 'タイムエンペラー',
        description: '1回のタイムアタックで15問以上回答し、合計60,000点以上でクリアする。',
        icon: 'fa-solid fa-rocket',
        category: 'タイムアタック',
        type: 'final',
        reward: 2400,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.chapterResults.length >= 15 && data.totalScore >= 60000
    },
    'time_attack_score_25k': {
        name: '時の探求者',
        description: 'タイムアタックで合計25,000点以上を獲得する。',
        icon: 'fa-solid fa-star-half-stroke',
        category: 'タイムアタック',
        type: 'final',
        reward: 700,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore >= 25000
    },
    'time_attack_score_40k': {
        name: '時の支配者',
        description: 'タイムアタックで合計40,000点以上を獲得する。',
        icon: 'fa-solid fa-crown',
        category: 'タイムアタック',
        type: 'final',
        reward: 1200,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore >= 40000
    },
    'time_attack_score_55k': {
        name: '時の超越者',
        description: 'タイムアタックで合計55,000点以上を獲得する。',
        icon: 'fa-solid fa-gem',
        category: 'タイムアタック',
        type: 'final',
        reward: 2000,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore >= 55000
    },
    'time_attack_score_70k': {
        name: '時間旅行者',
        description: 'タイムアタックで合計70,000点以上を獲得する。',
        icon: 'fa-solid fa-meteor',
        category: 'タイムアタック',
        type: 'final',
        reward: 3200,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore >= 70000
    },
    'time_lord': {
        name: 'タイムロード',
        description: 'タイムアタックで100,000点以上を獲得する。',
        icon: 'fa-solid fa-infinity',
        category: 'タイムアタック',
        type: 'final',
        reward: 8000,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore >= 100000
    },
    'time_god': {
        name: '時空の神',
        description: 'タイムアタックで150,000点以上を獲得する。',
        icon: 'fa-solid fa-sun',
        category: 'タイムアタック',
        type: 'final',
        reward: 15000,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore >= 150000
    },
    'time_attack_no_compass': {
        name: '第六感',
        description: 'コンパスを使わずにタイムアタックをプレイし、合計30,000点以上でクリアする。',
        icon: 'fa-solid fa-eye-slash',
        category: 'タイムアタック',
        type: 'final',
        reward: 1600,
        condition: (data, stats) => data.gameMode === 'timeAttack' && !data.useCompass && data.totalScore >= 30000
    },
    'consistent_performer': {
        name: '安定した実力',
        description: 'タイムアタック中に、5問連続で4,500点以上を獲得する。',
        icon: 'fa-solid fa-chart-line',
        category: 'タイムアタック',
        type: 'final',
        reward: 1600,
        condition: (data, stats) => {
            if (data.gameMode !== 'timeAttack' || !data.chapterResults || data.chapterResults.length < 5) {
                return false;
            }
            for (let i = 0; i <= data.chapterResults.length - 5; i++) {
                if (data.chapterResults.slice(i, i + 5).every(r => r.score >= 4500)) {
                    return true;
                }
            }
            return false;
        }
    },
    'time_attack_perfect_chapter': {
        name: '精密な時針',
        description: 'タイムアタック中に、3問連続で4,500点以上を獲得する。',
        icon: 'fa-solid fa-bullseye',
        category: 'タイムアタック',
        type: 'final',
        reward: 1200,
        condition: (data, stats) => {
            if (data.gameMode !== 'timeAttack' || !data.chapterResults || data.chapterResults.length < 3) {
                return false;
            }
            for (let i = 0; i <= data.chapterResults.length - 3; i++) {
                if (data.chapterResults[i].score >= 4500 &&
                    data.chapterResults[i + 1].score >= 4500 &&
                    data.chapterResults[i + 2].score >= 4500) {
                    return true;
                }
            }
            return false;
        }
    },
    'time_attack_sniper': {
        name: '刹那の見切り',
        description: 'タイムアタック中に、距離0.1km未満を達成する。',
        icon: 'fa-solid fa-location-crosshairs',
        category: 'タイムアタック',
        type: 'chapter',
        reward: 500,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.distance < 0.1
    },
     'time_attack_close_call': {
        name: 'ニアピン',
        description: 'タイムアタック中に、距離0.5km未満を達成する。',
        icon: 'fa-solid fa-map-marker-alt',
        category: 'タイムアタック',
        type: 'chapter',
        reward: 250,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.distance < 0.5
    },
    'time_attack_lost': {
        name: '時空の迷子',
        description: 'タイムアタック中に、ピンを刺した上で距離10,000km以上を達成する。',
        icon: 'fa-solid fa-globe',
        category: 'タイムアタック',
        type: 'chapter',
        reward: 100,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.distance >= 10000 && data.pinned
    },
    'time_attack_minus_score': {
        name: 'タイムパラドックス',
        description: 'タイムアタックで合計スコアがマイナスになる。',
        icon: 'fa-solid fa-bomb',
        category: 'タイムアタック',
        type: 'final',
        reward: 100,
        condition: (data, stats) => data.gameMode === 'timeAttack' && data.totalScore < 0
    },
    'combo_3': {
        name: '連撃',
        description: 'タイムアタックで3コンボを達成する。',
        icon: 'fa-solid fa-bolt-lightning',
        category: 'タイムアタック',
        type: 'combo',
        reward: 200,
        condition: (data, stats) => data.combo >= 3
    },
    'combo_5': {
        name: '猛攻',
        description: 'タイムアタックで5コンボを達成する。',
        icon: 'fa-solid fa-fire',
        category: 'タイムアタック',
        type: 'combo',
        reward: 400,
        condition: (data, stats) => data.combo >= 5
    },
    'combo_10': {
        name: '無双',
        description: 'タイムアタックで10コンボを達成する。',
        icon: 'fa-solid fa-burst',
        category: 'タイムアタック',
        type: 'combo',
        reward: 1000,
        condition: (data, stats) => data.combo >= 10
    },
    'combo_master': {
        name: 'コンボマスター',
        description: 'タイムアタックで15コンボを達成する。',
        icon: 'fa-solid fa-star-of-life',
        category: 'タイムアタック',
        type: 'combo',
        reward: 2400,
        condition: (data, stats) => data.combo >= 15
    },
    
    // --- カテゴリ: その他 ---
    'first_purchase': {
        name: '初めてのお買い物',
        description: 'ショップで初めてアイテムを購入または強化する。',
        icon: 'fa-solid fa-cart-shopping',
        category: 'その他',
        type: 'shop',
        reward: 100,
        condition: (data, stats) => {
            const totalLevels = Object.values(data.itemLevels).reduce((a, b) => a + b, 0);
            return totalLevels >= 1;
        }
    },
    'shopaholic': {
        name: '常連客',
        description: 'アイテムの合計レベルを10にする。',
        icon: 'fa-solid fa-bags-shopping',
        category: 'その他',
        type: 'shop',
        reward: 1000,
        condition: (data, stats) => {
            const totalLevels = Object.values(data.itemLevels).reduce((a, b) => a + b, 0);
            return totalLevels >= 10;
        }
    },
    'hoarder': {
        name: '大富豪',
        description: '所持金が50,000以上になる。',
        icon: 'fa-solid fa-sack-dollar',
        category: 'その他',
        type: 'money',
        reward: 1600,
        condition: (data, stats) => data.currentMoney >= 50000
    },
    'collector': {
        name: 'コレクター',
        description: '実績を30個解除する。',
        icon: 'fa-solid fa-award',
        category: 'その他',
        type: 'collect',
        reward: 1000,
        condition: (data, stats) => data.unlockedCount >= 30
    },
    // ▼▼▼ [変更] 達成度イベント用の実績(内部処理用) ▼▼▼
    'milestone_10': {
        name: '物語の序章',
        description: '実績達成率が10%に到達した。',
        icon: 'fa-solid fa-book-open',
        category: 'その他',
        type: 'collect',
        reward: 0,
        condition: (data, stats) => {
            const metaAchievements = ['milestone_10', 'milestone_30', 'milestone_50', 'achieve_complete'];
            const total = Object.keys(achievementMaster).filter(id => !metaAchievements.includes(id)).length;
            const current = stats.unlockedAchievements.filter(id => !metaAchievements.includes(id)).length;
            return total > 0 && (current / total) * 100 >= 10;
        }
    },
    'milestone_30': {
        name: '深まる謎',
        description: '実績達成率が30%に到達した。',
        icon: 'fa-solid fa-magnifying-glass',
        category: 'その他',
        type: 'collect',
        reward: 0,
        condition: (data, stats) => {
            const metaAchievements = ['milestone_10', 'milestone_30', 'milestone_50', 'achieve_complete'];
            const total = Object.keys(achievementMaster).filter(id => !metaAchievements.includes(id)).length;
            const current = stats.unlockedAchievements.filter(id => !metaAchievements.includes(id)).length;
            return total > 0 && (current / total) * 100 >= 30;
        }
    },
    'milestone_50': {
        name: '核心への接近',
        description: '実績達成率が50%に到達した。',
        icon: 'fa-solid fa-key',
        category: 'その他',
        type: 'collect',
        reward: 0,
        condition: (data, stats) => {
            const metaAchievements = ['milestone_10', 'milestone_30', 'milestone_50', 'achieve_complete'];
            const total = Object.keys(achievementMaster).filter(id => !metaAchievements.includes(id)).length;
            const current = stats.unlockedAchievements.filter(id => !metaAchievements.includes(id)).length;
            return total > 0 && (current / total) * 100 >= 50;
        }
    },
    // ▲▲▲ [変更] ここまで ▲▲▲
    'achieve_complete': {
        name: '実績マスター',
        description: 'この実績を除く、すべての実績を解除する。',
        icon: 'fa-solid fa-meteor',
        category: 'その他',
        type: 'collect',
        reward: 8000,
        condition: (data, stats) => {
            const metaAchievements = ['milestone_10', 'milestone_30', 'milestone_50', 'achieve_complete'];
            const totalPlayable = Object.keys(achievementMaster).filter(id => !metaAchievements.includes(id)).length;
            const unlockedPlayable = stats.unlockedAchievements.filter(id => !metaAchievements.includes(id)).length;
            return unlockedPlayable >= totalPlayable;
        }
    }
}

