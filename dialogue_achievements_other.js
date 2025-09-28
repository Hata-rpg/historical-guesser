// dialogue_achievements_other.js

// タイムアタックとその他のカテゴリの実績解除時に発生する会話を管理します。
const otherAchievementDialogue = {
    // ==================================================================
    // カテゴリ: タイムアタック
    // ==================================================================
    'achievement_time_attack_first': [
        { speaker: "キャスター", text: "タイムアタック、挑戦してみます！", bgm: 'normal' },
        { speaker: "アニー", expression: 14, text: "おう！時間との勝負、楽しんでこいよ！" },
        { speaker: "キャスター", text: "アニー先輩が見ててくれるなら、光の速さでクリアしてみせます。" },
        { speaker: "アニー", expression: 9, text: "はいはい、期待しないで待ってるぜ。" }
    ],
    'achievement_time_attack_3q': [
        { speaker: "アニー", expression: 1, text: "タイムアタックで3問回答か。まあ、最初のステップとしては上出来だな。", bgm: 'normal' },
        { speaker: "キャスター", text: "もっとアニー先輩に褒めてもらえるように頑張ります！" },
        { speaker: "アニー", expression: 5, text: "おう、期待してるぜ。" },
        { speaker: "キャスター", text: "期待されると燃えちゃいますね！" }
    ],
    'achievement_time_attack_5q': [
        { speaker: "アニー", expression: 2, text: "5問回答！少しは様になってきたじゃないか。", bgm: 'happy' },
        { speaker: "キャスター", text: "時間を操る魔法でも使おうかと思いましたよ。" },
        { speaker: "アニー", expression: 9, text: "口ばっかり達者なんだから。" },
        { speaker: "キャスター", text: "いつか本当に見せてあげますよ、俺の魔法。" }
    ],
    'achievement_time_attack_10q': [
        { speaker: "キャスター", text: "10問です！どうです、先輩！", bgm: 'happy' },
        { speaker: "アニー", expression: 6, text: "お、おう…。大したもんだな。集中力が持続するようになったか。" },
        { speaker: "キャスター", text: "（アニー先輩、ちょっと驚いてるな…しめしめ）" },
        { speaker: "アニー", expression: 3, text: "な、何ニヤニヤしてんだ！次行くぞ、次！" }
    ],
    'achievement_time_attack_15q': [
        { speaker: "アニー", expression: 6, text: "15問！？おいおい、お前本当に人間か？", bgm: 'serious' },
        { speaker: "キャスター", text: "さあ？アニー先輩のためなら、人間やめますよ。" },
        { speaker: "アニー", expression: 7, text: "気味の悪いこと言うな！" },
        { speaker: "キャスター", text: "でも、先輩は俺が何者でも、受け入れてくれるんでしょう？" }
    ],
    'achievement_time_attack_score_25k': [
        { speaker: "キャスター", text: "タイムアタックで25,000点！やりました！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "なかなかやるじゃないか。その調子で頼むぜ。" },
        { speaker: "キャスター", text: "はい！先輩のためならいくらでも！" },
        { speaker: "アニー", expression: 3, text: "あたしのためじゃなくて、仕事のためだろ！" }
    ],
    'achievement_time_attack_score_40k': [
        { speaker: "アニー", expression: 5, text: "40,000点か。タイムアタックでも実力を見せてきたな。", bgm: 'happy' },
        { speaker: "キャスター", text: "時間を支配する感覚、結構好きかもしれません。" },
        { speaker: "アニー", expression: 10, text: "危ないこと言うなよ…。お前、たまに怖くなるぜ。" },
        { speaker: "キャスター", text: "大丈夫ですよ。俺が支配したいのは、アニー先輩の時間だけですから。" }
    ],
    'achievement_time_attack_score_55k': [
        { speaker: "アニー", expression: 6, text: "55,000点…。お前、本当にあたしの見習いか…？", bgm: 'serious' },
        { speaker: "キャスター", text: "いつまでも、アニー先輩だけの見習いですよ。" },
        { speaker: "アニー", expression: 7, text: "…そういうのはいいから。" },
        { speaker: "キャスター", text: "でも、もう先輩に教わることはないかもしれませんね。これからは俺が、先輩に色々と教えてあげますよ。" },
        { speaker: "アニー", expression: 3, text: "な、生意気言うな！" },
        { speaker: "キャスター", text: "例えば、俺がどれだけ先輩のこと好きか、とか。" }
    ],
    'achievement_time_attack_score_70k': [
        { speaker: "アニー", expression: 6, text: "なな、70,000点！？もうあたしが教えることは何もないな…。", bgm: 'serious' },
        { speaker: "キャスター", text: "そんなこと言わないでくださいよ。俺、先輩がいないとダメですから。" },
        { speaker: "アニー", expression: 15, text: "…ったく、しょうがないやつだな。" },
        { speaker: "キャスター", text: "だから、これからもずっと、俺の隣にいてください。" },
        { speaker: "アニー", expression: 7, text: "…！ それは、どういう意味だよ…。" },
        { speaker: "キャスター", text: "言わせるんですか？" }
    ],
    'achievement_time_lord': [
        { speaker: "キャスター", text: "10万点…！俺、時間の王になりましたかね？", bgm: 'happy' },
        { speaker: "アニー", expression: 13, text: "王様ねえ…。調子に乗ってると、すぐ足元をすくわれるぜ？" },
        { speaker: "キャスター", text: "俺の隣には、アニーっていう最高の女王がいるんで大丈夫です。" },
        { speaker: "アニー", expression: 7, text: "だ、誰が女王だ！" },
        { speaker: "キャスター", text: "じゃあ、俺だけの女王様、ですね。" },
        { speaker: "アニー", expression: 3, text: "やかましい！" }
    ],
    'achievement_time_god': [
        { speaker: "アニー", expression: 6, text: "15万点…時空の神か…。お前、本当に何者なんだ？", bgm: 'serious' },
        { speaker: "キャスター", text: "…さあ、何でしょうね。でも、アニー先輩を元の時代に帰すことくらいは出来るかもしれませんよ？" },
        { speaker: "アニー", expression: 10, text: "…！ …お前、本気で言ってるのか？" },
        { speaker: "キャスター", text: "いつか、ちゃんと話します。だから、もう少しだけ、俺のそばにいてください。" },
        { speaker: "アニー", expression: 4, text: "…わかった。待っててやるよ。" },
        { speaker: "キャスター", text: "ありがとうございます。" }
    ],
    'achievement_time_attack_no_compass': [
        { speaker: "アニー", expression: 2, text: "コンパスなしで3万点か。お前のその妙な勘は、たまに役に立つな。", bgm: 'happy' },
        { speaker: "キャスター", text: "だから魔法だって言ってるじゃないですか。信じてくれないんですか？" },
        { speaker: "アニー", expression: 9, text: "信じるか！そんなもんあるわけないだろ！" },
        { speaker: "キャスター", text: "じゃあ、今度証明して見せますよ。二人きりの時にね。" }
    ],
    'achievement_consistent_performer': [
        { speaker: "アニー", expression: 1, text: "5問連続でハイスコアか。安定感がすごいな。", bgm: 'normal' },
        { speaker: "キャスター", text: "俺の心は、アニー先輩に対していつもハイスコアで安定してますよ。" },
        { speaker: "アニー", expression: 9, text: "…お前は本当にブレないな…。ある意味、尊敬するぜ。" },
        { speaker: "キャスター", text: "光栄です。じゃあ、そろそろご褒美を…" }
    ],
    'achievement_time_attack_perfect_chapter': [
        { speaker: "アニー", expression: 6, text: "3問連続で4,500点以上…。精密機械か、お前は。", bgm: 'happy' },
        { speaker: "キャスター", text: "俺のハートは、アニー先輩だけを精密に狙ってます。" },
        { speaker: "アニー", expression: 3, text: "もういい！その口、塞ぐぞ！" },
        { speaker: "キャスター", text: "…どうやってですか？" }
    ],
    'achievement_time_attack_sniper': [
        { speaker: "キャスター", text: "タイムアタック中のスナイプ成功です！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "時間がない中でよくやったな。見事だ。" },
        { speaker: "キャスター", text: "どんな状況でも、先輩の期待は裏切りませんよ。" },
        { speaker: "アニー", expression: 13, text: "…ふん、頼もしくなったもんだ。" }
    ],
    'achievement_time_attack_close_call': [
        { speaker: "キャスター", text: "ニアピン！惜しい！", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "まあ、上出来だろ。次はいけるさ。" },
        { speaker: "キャスター", text: "はい！次こそ完璧に決めてみせます！" },
        { speaker: "アニー", expression: 2, text: "その意気だ。" }
    ],
    'achievement_time_attack_lost': [
        { speaker: "アニー", expression: 3, text: "おい、タイムアタック中に迷子になるな！", bgm: 'funny' },
        { speaker: "キャスター", text: "すみません、アニー先輩のこと考えてたら、つい…。" },
        { speaker: "アニー", expression: 9, text: "あたしのせいにすんな！" },
        { speaker: "キャスター", text: "でも、先輩のせいで集中できないのは本当ですよ？" }
    ],
    'achievement_time_attack_minus_score': [
        { speaker: "キャスター", text: "うわー、タイムアタックでマイナススコア…。", bgm: 'funny' },
        { speaker: "アニー", expression: 2, text: "ははっ、逆にすごいじゃないか！時間を遡ったのか？" },
        { speaker: "キャスター", text: "遡れるなら、アニー先輩に会う前の日に戻って、もっといい男になってから会いたいですけどね。" },
        { speaker: "アニー", expression: 9, text: "…ごちゃごちゃ言ってないで、さっさと次に行くぞ。" }
    ],
    'achievement_combo_3': [
        { speaker: "アニー", expression: 2, text: "お、3コンボ！いいぞ！", bgm: 'happy' },
        { speaker: "キャスター", text: "まだまだ行きますよ！" },
        { speaker: "アニー", expression: 5, text: "その意気だ！" },
        { speaker: "キャスター", text: "先輩の声援があれば、無限に続けられそうです！" }
    ],
    'achievement_combo_5': [
        { speaker: "アニー", expression: 14, text: "5コンボ！波に乗ってきたな！", bgm: 'happy' },
        { speaker: "キャスター", text: "このままどこまでも！" },
        { speaker: "アニー", expression: 13, text: "いいぜ、行けるとこまで行ってみな！" },
        { speaker: "キャスター", text: "アニー先輩と一緒なら、どこまでも。" }
    ],
    'achievement_combo_10': [
        { speaker: "アニー", expression: 6, text: "10コンボ！？おいおい、手が付けられなくなってきたな！", bgm: 'happy' },
        { speaker: "キャスター", text: "俺自身にも、もう止められません！" },
        { speaker: "アニー", expression: 14, text: "いいぞ、その勢いでどこまでも行っちまえ！" },
        { speaker: "キャスター", text: "はい！アニー先輩、しっかりついてきてくださいね！" }
    ],
    'achievement_combo_master': [
        { speaker: "アニー", expression: 6, text: "15コンボ…！お前は一体何者なんだ…！？", bgm: 'happy' },
        { speaker: "キャスター", text: "さあ…？ただの、アニー先輩にいいところを見せたい見習いですよ。" },
        { speaker: "アニー", expression: 13, text: "もう見習いの皮は剥がれ落ちてるぜ。お前は、あたしの自慢の相棒だ。" },
        { speaker: "キャスター", text: "…！ も、もう一回言ってもらっていいですか？" },
        { speaker: "アニー", expression: 3, text: "二度と言うか、バカ！" },
        { speaker: "キャスター", text: "はは、残念。" }
    ],

    // ==================================================================
    // カテゴリ: その他
    // ==================================================================
    'achievement_first_purchase': [
        { speaker: "アニー", expression: 10, text: "お、初めての買い物か。何買ったんだ？", bgm: 'normal' },
        { speaker: "キャスター", text: "アニー先輩に褒めてもらうための、未来への投資ですよ。" },
        { speaker: "アニー", expression: 9, text: "ふん、どうだかな。無駄遣いじゃなきゃいいが。" },
        { speaker: "キャスター", text: "先輩との未来のためなら、無駄な投資なんてありませんよ。" }
    ],
    'achievement_shopaholic': [
        { speaker: "キャスター", text: "結構、道具が揃ってきましたね！", bgm: 'funny' },
        { speaker: "アニー", expression: 9, text: "揃うのはいいが、お前の金遣いの荒さには呆れるぜ…。ちゃんと貯金しとけよな…。" },
        { speaker: "キャスター", text: "これは貯金みたいなものですよ。アニー先輩との未来のための。" },
        { speaker: "アニー", expression: 7, text: "…！そ、そういうのはいいから！" }
    ],
    // ▼▼▼ [変更] 達成度イベントの会話シナリオを追加 ▼▼▼
    'achievement_milestone_10': [
        { speaker: "アニー", expression: 2, text: "よう、見習い！一杯付き合え！", bgm: 'funny' },
        { speaker: "キャスター", expression: 1, text: "お、先輩からのお誘いとは珍しい。…ん？このラム酒、やけに年代物じゃないです？" },
        { speaker: "アニー", expression: 13, text: "へへっ、わかるか？あたしが昔、船に積んでた年代物でな。…お前、あたしが誰だか知ってて、この会社に入ってきたんだろ？" },
        { speaker: "キャスター", expression: 14, text: "さあ、何のことでしょう？俺はただ、アン・ボニー…いえ、アニー先輩の伝説に惹かれた、ただの歴史好きですよ。" },
        { speaker: "アニー", expression: 9, text: "…ふん、白々しいヤツ。まあいいさ、今はまだ泳がせといてやるよ。" },
        { speaker: "キャスター", expression: 17, text: "お手柔らかにお願いします、キャプテン。" }
    ],
    'achievement_milestone_30': [
        { speaker: "キャスター", expression: 10, text: "…先輩、この海図を見てください。ここ、何かおかしいんです。", bgm: 'serious' },
        { speaker: "アニー", expression: 15, text: "ああ？ただのカリブ海の古い地図だろ。…ん？この島の形…いや、こんな島、あたしの時代にはなかったはずだぞ…？" },
        { speaker: "キャスター", expression: 1, text: "ええ。これは未来の…つまり、今の時代の地図なんです。先輩がタイムスリップしたことで、微妙に歴史が…地形が変わってしまっている。" },
        { speaker: "アニー", expression: 6, text: "…！お前、まさか…。" },
        { speaker: "キャスター", expression: 14, text: "言ったでしょう？俺はただの歴史好きだって。…少しだけ、『未来の歴史』に詳しいだけですよ。" },
        { speaker: "アニー", expression: 10, text: "…お前、本当に何者なんだ？" }
    ],
    'achievement_milestone_50': [
        { speaker: "アニー", expression: 1, text: "なあ、キャスター。お前、あたしを元の時代に帰したいのか？", bgm: 'serious' },
        { speaker: "キャスター", expression: 16, text: "…。" },
        { speaker: "キャスター", expression: 1, text: "…はい。それが、俺の仕事ですから。歴史をあるべき姿に戻すのが…。" },
        { speaker: "アニー", expression: 13, text: "そうかい。…だがな、あたしの『あるべき姿』は、もうこの時代にあるのかもしれないぜ？" },
        { speaker: "アニー", expression: 2, text: "お前っていう、面白いオモチャを見つけちまったからな！" },
        { speaker: "キャスター", expression: 9, text: "…オモチャ、ですか。" },
        { speaker: "キャスター", expression: 17, text: "…ははっ、敵いませんね、先輩には。" }
    ],
    // ▲▲▲ [変更] ここまで ▲▲▲
    'achievement_hoarder': [
        { speaker: "アニー", expression: 9, text: "うおっ、なんだこの大金は！お前、どっかで海賊でもやってきたのか？", bgm: 'funny' },
        { speaker: "キャスター", text: "これだけあれば、アニー先輩を元の時代に帰してあげる方法も…見つかるかもしれません。" },
        { speaker: "アニー", expression: 10, text: "…！ …別に、あたしは帰りたいなんて言ってないだろ。それより、酒奢れ、酒！" },
        { speaker: "キャスター", text: "先輩が本当に帰りたいのか、帰りたくないのか…。俺にはもう、わかってますけどね。" },
        { speaker: "アニー", expression: 7, text: "な、わ、わかったような口をきくな！" },
        { speaker: "キャスター", text: "今度、ゆっくり聞かせてくださいよ。二人で飲みながら。" }
    ],
    'achievement_collector': [
        { speaker: "アニー", expression: 2, text: "30個も実績解除か。お前、この仕事、本当に楽しんでるんだな。", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ。だって、アニー先輩とずっと一緒にいられるじゃないですか。" },
        { speaker: "アニー", expression: 7, text: "…お前は、本当にそればっかりだな。" },
        { speaker: "キャスター", text: "ダメですか？" },
        { speaker: "アニー", expression: 1, text: "…別に、ダメとは言ってないだろ。" },
        { speaker: "キャスター", text: "！" }
    ],
    'achievement_achieve_complete': [
        { speaker: "アニー", expression: 5, text: "全部の実績を解除…か。大したもんだよ、キャスター。お前は、最高の調査員で、最高の相棒だ。", bgm: 'serious' },
        { speaker: "キャスター", text: "…アニー先輩。" },
        { speaker: "アニー", expression: 13, text: "これからも、あたしの隣でしっかり舵を取りな。" },
        { speaker: "キャスター", text: "はい。…アニー先輩、俺、先輩が好きです。" },
        { speaker: "アニー", expression: 7, text: "…！！！ ば、ば、ば、バカ言ってんじゃないよ！仕事しろ、このバカ見習い！" },
        { speaker: "キャスター", text: "顔、真っ赤ですよ、先輩。" }
    ]
};

