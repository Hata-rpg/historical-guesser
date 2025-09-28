// dialogue_items.js

// アイテム購入時に発生するヒロインとの会話を管理します。
const itemDialogue = {
    'item_compass_1': [
        { speaker: "キャスター", text: "とりあえず、羅針盤を買ってみました。", bgm: 'normal' },
        { speaker: "アニー", expression: 10, text: "ふぅん。まあ、ないよりはマシか。昔は太陽と星の位置だけで航海したもんだがな。" },
        { speaker: "キャスター", text: "俺も先輩さえいれば、コンパスなんていりませんけどね。" },
        { speaker: "アニー", expression: 9, text: "はいはい。" }
    ],
    'item_compass_2': [
        { speaker: "アニー", expression: 5, text: "お、結構いいやつじゃないか。これなら磁気の嵐が来ても大丈夫そうだな！", bgm: 'happy' },
        { speaker: "キャスター", text: "磁気の嵐…？アニー先輩のいた時代って、一体…？" },
        { speaker: "アニー", expression: 1, text: "…なんでもない。気にするな。" },
        { speaker: "キャスター", text: "気になりますよ。先輩の全部、知りたいですから。" }
    ],
    'item_compass_3': [
        { speaker: "キャスター", text: "奮発して、最新のデジタルコンパス買っちゃいました！", bgm: 'funny' },
        { speaker: "アニー", expression: 9, text: "お前なあ、金遣いが荒いって言ってるだろ…。" },
        { speaker: "アニー", expression: 14, text: "…けど、画面がピカピカしてて面白そうじゃないか。ちょっと貸してみろ！" },
        { speaker: "キャスター", text: "どうぞ。でも、俺の心のコンパスは、いつだって先輩を指してますから。" }
    ],
    'item_timer_1': [
        { speaker: "キャスター", text: "これで少しは時間に余裕ができますね。", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "時間を気にするなんて、どうも性に合わないんだが…まあ、お前はしっかり使いこなせよ。" },
        { speaker: "キャスター", text: "はい。先輩と少しでも長く一緒にいられるように。" },
        { speaker: "アニー", expression: 9, text: "…仕事の話だ。" }
    ],
    'item_timer_2': [
        { speaker: "アニー", expression: 2, text: "お、いい時計だな。船の時鐘よりはずっと正確そうだ。", bgm: 'normal' },
        { speaker: "キャスター", text: "これで、アニー先輩と過ごす時間も正確に測れますね。" },
        { speaker: "アニー", expression: 9, text: "…仕事しろ。" },
        { speaker: "キャスター", text: "してますよ。先輩との時間も、大事な仕事の一部です。" }
    ],
    'item_timer_3': [
        { speaker: "アニー", expression: 3, text: "こんな高いもん買って…。どうせすぐ女に貢いでなくなる金だと思ってたが…。", bgm: 'funny' },
        { speaker: "キャスター", text: "ひどい言われようですね…。これも全部、調査のためですよ！" },
        { speaker: "アニー", expression: 15, text: "…まあ、そういうことにしといてやるか。金の管理はちゃんとしろよな。" },
        { speaker: "キャスター", text: "はい！いっそ、俺の財布の管理、先輩がしてくれませんか？" }
    ],
    'item_survey_1': [
        { speaker: "キャスター", text: "測量術の本、買ってみました。", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "ほう、勉強熱心なこった。親父が弁護士だったが、あたしはああいう堅苦しい本は苦手でな。" },
        { speaker: "キャスター", text: "そうなんですか。じゃあ、今度俺が読み聞かせしてあげますよ。" },
        { speaker: "アニー", expression: 3, text: "いらん！" }
    ],
    'item_survey_2': [
        { speaker: "アニー", expression: 5, text: "専門書か。これで少しは距離の読みもマシになるか？", bgm: 'normal' },
        { speaker: "キャスター", text: "はい！アニー先輩との心の距離も、これで測れたらいいんですけどね。" },
        { speaker: "アニー", expression: 9, text: "…………。" },
        { speaker: "キャスター", text: "あ、あれ、先輩？" }
    ],
    'item_survey_3': [
        { speaker: "キャスター", text: "奥義書まで買ってしまいました。これで俺も測量のプロですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 13, text: "形から入るタイプだな、お前は。まあ、いいだろう。その知識、見せてもらおうか。" },
        { speaker: "キャスター", text: "知識だけじゃなく、俺の愛も見せちゃいますよ？" },
        { speaker: "アニー", expression: 9, text: "そっちは見せなくていい。" }
    ],
    'item_relic_1': [
        { speaker: "キャスター", text: "なんだか怪しげな棒ですね、これ…。", bgm: 'funny' },
        { speaker: "アニー", expression: 10, text: "ダウジングロッドか。まじないみたいなもんだが、意外と当たることもあるぜ？" },
        { speaker: "キャスター", text: "へえ。じゃあ、アニー先輩の気持ちもこれで占えますかね？" },
        { speaker: "アニー", expression: 3, text: "くだらんこと試すなよ！" }
    ],
    'item_relic_2': [
        { speaker: "アニー", expression: 1, text: "アストロラーベか。懐かしいな。昔、メアリーが欲しがってたっけ…。", bgm: 'serious' },
        { speaker: "キャスター", text: "…メアリーさんって、アニー先輩の大事な人だったんですね。" },
        { speaker: "アニー", expression: 4, text: "…ああ。最高のダチだったよ。" },
        { speaker: "キャスター", text: "…今度、その人の話も聞かせてください。" }
    ],
    'item_relic_3': [
        { speaker: "キャスター", text: "オーパーツ…！超古代文明の遺物ですよ、先輩！", bgm: 'happy' },
        { speaker: "アニー", expression: 6, text: "へえ、面白そうじゃないか！あたしの時代より、もっと昔のか。どんな海賊のお宝より価値がありそうだな！" },
        { speaker: "キャスター", text: "俺にとっては、アニー先輩の方がどんなお宝よりも価値がありますけどね。" },
        { speaker: "アニー", expression: 9, text: "…はいはい、わかったから。" }
    ],
    'item_time_attack_unlock_1': [
        { speaker: "アニー", expression: 6, text: "タイムアタック？時間との勝負か、面白そうじゃないか！", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ！俺の実力、アニー先輩に見せつけますよ！" },
        { speaker: "アニー", expression: 14, text: "おう、威勢がいいな！期待してるぜ！" },
        { speaker: "キャスター", text: "はい！先輩を惚れ直させてみせます！" }
    ],
    'item_no_compass_unlock_1': [
        { speaker: "アニー", expression: 9, text: "コンパスなしモード？正気か？", bgm: 'funny' },
        { speaker: "キャスター", text: "俺の心のコンパスが、いつもアニー先輩を指しているので大丈夫です。" },
        { speaker: "アニー", expression: 3, text: "その口、縫い合わせるぞ。" },
        { speaker: "キャスター", text: "先輩になら、何をされてもいいですよ。" }
    ],
    'item_combo_scroll_1': [
        { speaker: "キャスター", text: "これでコンボが強化されますね！", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "畳みかける時は一気に行くのが海賊のやり方だ。いい判断だな。" },
        { speaker: "キャスター", text: "アニー先輩へのアプローチも、これで一気に決めちゃいますかね！" },
        { speaker: "アニー", expression: 9, text: "…好きにしろ。" }
    ],
    'item_combo_scroll_2': [
        { speaker: "アニー", expression: 5, text: "秘伝書か。これで向かうところ敵なしだな！", bgm: 'happy' },
        { speaker: "キャスター", text: "はい！アニー先輩と俺のコンビネーションも、もっと良くなりますかね？" },
        { speaker: "アニー", expression: 13, text: "さあな。それはお前次第だろ？" },
        { speaker: "キャスター", text: "じゃあ、息ピッタリのところを見せて、先輩を驚かせますよ。" }
    ],
    'item_combo_scroll_3': [
        { speaker: "アニー", expression: 14, text: "奥義書まで手に入れたか！もうお前に死角はないな！", bgm: 'happy' },
        { speaker: "キャスター", text: "俺の背中は、アニー先輩に預けてますから。" },
        { speaker: "アニー", expression: 7, text: "…！ し、しっかり守ってやるから、前だけ見てろ！" },
        { speaker: "キャスター", text: "はい。でも、たまには振り返ってもいいですか？" }
    ],
    'item_map_skin_1': [
        { speaker: "キャスター", text: "マップの見た目が変えられるみたいですよ。気分転換にいいですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 2, text: "へえ、面白いじゃないか。どんな地図になるか楽しみだな！" },
        { speaker: "キャスター", text: "今度、二人でいろんな地図を見てデート気分を味わいましょう。" },
        { speaker: "アニー", expression: 9, text: "仕事だって言ってるだろ。" }
    ],
    'item_map_skin_2': [
        { speaker: "アニー", expression: 9, text: "また買ったのか…。まあ、あたしもどんな見た目か気になるから、今回は許してやる。", bgm: 'funny' },
        { speaker: "キャスター", text: "ありがとうございます！じゃあ、今度二人でデートしませんか？" },
        { speaker: "アニー", expression: 3, text: "話を聞け！" },
        { speaker: "キャスター", text: "聞いてますよ。で、いつ行きます？" }
    ],
    'item_map_skin_3': [
        { speaker: "アニー", expression: 15, text: "なあ、キャスター。お前、本当に大丈夫か？金遣いが心配になってきたぜ…。", bgm: 'serious' },
        { speaker: "キャスター", text: "大丈夫ですよ。アニー先輩が心配してくれるなら、俺、明日からでも真面目に働きます。" },
        { speaker: "アニー", expression: 9, text: "…今日から働け、今日から。" },
        { speaker: "キャスター", text: "じゃあ、先輩。俺が真面目に働いたら、何かご褒美くれますか？" }
    ],
    'item_prioritize_unplayed_1': [
        { speaker: "キャスター",  text: "面白い水晶を見つけたんですよ、先輩。", bgm: 'normal' },
        { speaker: "アニー", expression: 9, text: "また変なガラクタを買ってきて…。今度は何だ？未来でも見えるのか？" },
        { speaker: "キャスター",  text: "近いかもしれませんね。これは、俺たちがまだ見ていない『結末』…15,000点に届いていない物語の航路を優先して示してくれる水晶なんです。" },
        { speaker: "アニー", expression: 13, text: "へえ…。お前、本当にこの仕事にのめり込んでるんだな。感心するよ。" },
        { speaker: "キャスター",  text: "ええ。だって、先輩と見届けたい物語が、まだたくさんありますから。" },
        { speaker: "アニー", expression: 7, text: "…！ …ふん、せいぜいあたしを楽しませるんだな、見習い。" }
    ]
};
