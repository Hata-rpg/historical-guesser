/**
 * ending.js
 * * エンディング専用の物語と会話データを管理します。
 */

// --- エンディング物語データ ---
const endingStory = {
    title: "あたしの航路",
    chapters: [
        {
            part: "第一章 - 始まりの港",
            title: "キンセール（アイルランド）",
            narrative: "「最後の調査です」。キャスターが選んだのは、アイルランドの古い港町…私の生まれ故郷だ。昔と随分景色も変わってしまったけど、この潮の香りはよく覚えている。",
            hints: [
                "ヒント1: ここは、ある女海賊が『アニー・ボニー』になる前の、ただの『アン・コーマック』として生を受けた場所。",
                "ヒント2: 彼女の父は弁護士だったが、アンは父の富裕な暮らしよりも、自由な海を選んだ。",
                "ヒント3: この港から、彼女の伝説は始まった。",
            ],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Kinsale_%284693044621%29.jpg/960px-Kinsale_%284693044621%29.jpg",
            answer: [51.705556,-8.522222]
        },
        {
            part: "第二章 - 自由の都",
            title: "ナッソー（バハマ）",
            narrative: "次はカリブ海か…ここは、あたしの庭みたいなもんだった。すっかり観光地になってしまって、昔の面影も薄れたもんだな。海水浴を楽しむ旅行客ばかりが目に入る。",
            hints: [
                "ヒント1: ここは、アニー・ボニーが海賊として最も輝いていた『海賊共和国』の首都。",
                "ヒント2: 黒髭、キャラコ・ジャック…名だたる海賊たちと肩を並べ、彼女は自由を謳歌した。",
                "ヒント3: バハマ総督により、アニー・ボニーはこの地で捕らえられた。彼女の記録は、歴史上、ここで途絶えている。",
            ],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Naxos-port.JPG/960px-Naxos-port.JPG",
            answer: [25.06,-77.345]
        },
        {
            part: "第三章 - あたしの航路、あたしの選択",
            title: "ヒストリカル・ゲッサー社",
            narrative: "世界中を飛び回った挙句、最後の調査場所に指定されたのは、なんと会社だった。拍子抜けするあたしの前で、キャスターは、いつになく真剣な面持ちだった。",
            bgmOverride: 'heartbeat', // この章のBGMを心臓音に設定
            lockUntilHint3: true, // ヒント3が表示されるまで回答ボタンをロック
            typewriterHints: true, 
            hints: [
                "ヒント1: ここは、海賊『アン・ボニー』が、ヒストリカル・ゲッサー社の調査員『アニー』として第二の人生を歩み始めた場所。",
                "ヒント2: キャスターは、歴史から忽然と消えた『アン・ボニー』の謎を追いかけている。そして、まるで運命に導かれるように、調査員『アニー』の後輩として、彼女のすぐそばで調査を共にするという『偶然』を手に入れた。",
                "<span class='text-red-600 font-bold'>ヒント3: キャスターは\"運命と時間の魔法\"を使える。彼の魔法を使えば『アン・ボニー』を元の時代に帰すことだってできる。</span>",
            ],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Googleplex_central_courtyard.jpg/960px-Googleplex_central_courtyard.jpg",
            answer: [37.422,-122.084] 
        }
    ]
};

// --- エンディング会話データ ---
const endingDialogue = {
    'ending_chapter_1': [
        { speaker: "キャスター", expression: 1, text: "どうです、アニー先輩？" },
        { speaker: "キャスター", expression: 14, text: "なかなか趣のある場所でしょう。" },
        { speaker: "キャスター", expression: 17, text: "ここが、ある『伝説』が生まれた場所なんですよ。" },
        { speaker: "アニー",  text: "へぇ、伝説ねぇ。" },
        { speaker: "アニー",  text: "お前は本当にそういう話が好きだな。" },
        { speaker: "アニー",  text: "で？ その伝説ってのは、どんなお宝に繋がってるんだい？" },
        { speaker: "キャスター", expression: 10, text: "お宝、ですか。" },
        { speaker: "キャスター", expression: 14, text: "…そうですね、ここから始まった物語の結末は、まだ誰も知らない…。" },
        { speaker: "キャスター", expression: 1, text: "…歴史の記録にも、残っていないんです。" },
        { speaker: "アニー",  text: "ふぅん…。" },
        { speaker: "アニー",  text: "なんだい、歯切れが悪いじゃないか。" },
        { speaker: "アニー",  text: "いつもの軽口はどうしたんだい？" }
    ],
    'ending_chapter_2': [
        { speaker: "キャスター", expression: 1, text: "ここが『海賊共和国』の首都…。" },
        { speaker: "キャスター", expression: 17, text: "先輩が一番輝いてた場所ですね。" },
        { speaker: "キャスター", expression: 2, text: "なんだか、俺までワクワクしてきましたよ！" },
        { speaker: "アニー",  text: "昔の話さ。" },
        { speaker: "アニー",  text: "…こんなところに連れてきて、どういうつもりなんだ？" },
        { speaker: "キャスター", expression: 16, text: "…。" },
        { speaker: "キャスター", expression: 10, text: "………。" },        
        { speaker: "キャスター", expression: 1, text: "…先輩と一度来てみたかったんです。" },
        { speaker: "キャスター", expression: 17, text: "あなたがどんな場所で、どんな風に生きてきたのか…俺、もっと知りたかったんです。" },
        { speaker: "アニー",  text: "…勝手なこと言ってんじゃないよ。" },
        { speaker: "アニー",  text: "あたしの過去をほじくり返して、何がしたいんだ？" },
        { speaker: "キャスター", expression: 1, text: "…。" },
        { speaker: "アニー",  text: "…まあいいさ。お前の茶番に、最後まで付き合ってやるよ。" }
    ],
    'ending_final': [
        { speaker: "キャスター", expression: 1, text: "アニー先輩。" },
        { speaker: "キャスター", expression: 14, text: "今からとっておきの魔法をお見せします。驚かないでくださいね。" },
        { type: "narration", text: "キャスターが静かに目を伏せる。" },
        { type: "screenEffect", effect: "wobble" },
        { type: "narration", text: "すると、見慣れたオフィスの窓が、水面のように揺らめき始めた。" },
        { type: "stopBGM" },
        { type: "narration", text: "ガラスの向こうの景色が歪み、滲み、そして──" },
        { type: "showCG", image: 'nassau_cg.png', sound: 'water_magic', effect: 'ripple' },
        { type: "playSound", sound: 'nassau_crowd', loop: true },
        { type: "narration", text: "熱気と潮風に満ちた、18世紀の活気ある港の風景へと塗り替えられていく。" },
        { speaker: "キャスター",  text: "この窓をくぐれば、あなたは･･･" },
        { speaker: "キャスター",  text: "あなたの時代に戻ることができます。" },
        { speaker: "キャスター",  text: "こちらに来てから、今日までの出来事は、" },
        { speaker: "キャスター",  text: "きっと思い出せなくなります。" },
        { speaker: "キャスター",  text: "…長い夢を見ていたかのように。" },
        { type: "stopSound", sound: 'nassau_crowd' },
        { speaker: "アニー",  text: "おい、キャスター。" },
        { speaker: "キャスター",  text: "え…？" },
        { speaker: "アニー",  text: "お前のデスクの上、見てみな。" },
        { speaker: "アニー",  text: "報告書が山積みじゃないか。" },
        { type: "hideCG" },        
        { speaker: "キャスター", expression: 18, text: "え…？" },
        { speaker: "キャスター", expression: 9, text: "…って、そうじゃなくて！" },
        { speaker: "キャスター", expression: 15, text: "先輩、過去には…" },
        { speaker: "アニー",  text: "馬鹿だね、お前は。" },
        { type: "playBGM", bgm: 'ending2' },
        { speaker: "アニー", expression: 10, text: "あたしがどうやってこの時代に来たか、知りたそうだったな。" },
        { speaker: "アニー", expression: 15, text: "…バーネットの船に捕まる寸前さ。でかい嵐に呑まれて、気づいたらここにいた。" },
        { speaker: "アニー", expression: 1, text: "過去も仲間も、全部あの嵐の向こう。あたしの手の中にはもうないんだよ。" },
        { speaker: "アニー", expression: 13, text: "だから、今が楽しけりゃそれでいいのさ。" },
        { speaker: "アニー", expression: 2, text: "この仕事も嫌いじゃないしな。" },
        { speaker: "アニー", expression: 13, text: "それに、こんな面白い魔法が使えるのに、それを書類整理に使わないなんてもったいないじゃないか。" },
        { speaker: "アニー", expression: 14, text: "ほら、さっさとその報告書の山、魔法でやっつけちまいな！" },
        { speaker: "キャスター",  text: "ええっと…俺の魔法、運命とか時間をちょっといじるだけで…書類整理みたいな地味な作業は専門外というか…。" },
        { speaker: "アニー", expression: 3, text: "使えねぇ魔法だな！" },
        { speaker: "アニー", expression: 14, text: "だったら手でやれ、手で！さっさと終わらせるぞ！" },
        { speaker: "キャスター",  text: "結局、俺の扱いはいつも通りってことですね…" },
        { speaker: "アニー", expression: 5, text: "…さあ、終わったら祝いに飲みに行くぞ！" },
        { speaker: "アニー", expression: 2, text: "お前の奢りでな！" },
        { speaker: "キャスター",  text: "ええぇっ！？" },
        { type: "startEndRoll" }
    ]
};

