// dialogue_achievements_story.js

// ストーリーモード関連の実績解除時に発生する会話を管理します。
const storyAchievementDialogue = {
    // ==================================================================
    // カテゴリ: ストーリーモード
    // ==================================================================
    'achievement_first_step': [
        { speaker: "アニー", expression: 1, text: "お、見習いの初仕事か。まあ、上出来なんじゃないか？", bgm: 'happy' },
        { speaker: "キャスター", text: "アニー先輩のご指導の賜物です！" },
        { speaker: "アニー", expression: 13, text: "口ばっかり達者なんだから…。ま、この調子でさっさと一人前になれよな。" },
        { speaker: "キャスター", text: "はい！先輩を追い抜く勢いで頑張ります！" }
    ],
    'achievement_three_games': [
        { speaker: "キャスター", text: "だんだん調査にも慣れてきました！", bgm: 'normal' },
        { speaker: "アニー", expression: 10, text: "ほう。船乗りも三日もすれば波には慣れるが…油断してるとすぐ船酔いするぜ？" },
        { speaker: "アニー", expression: 1, text: "ま、お前は少しずつだが前に進んでるみたいだな。" },
        { speaker: "キャスター", text: "アニー先輩の指導がいいからです。ありがとうございます！" }
    ],
    'achievement_five_games': [
        { speaker: "アニー", expression: 5, text: "5回も調査をやり遂げたか。見習いにしちゃ根性あるじゃないか。", bgm: 'happy' },
        { speaker: "キャスター", text: "アニー先輩と一緒なら、どこへでも行きますよ！" },
        { speaker: "アニー", expression: 3, text: "そういう軽口は酒場で女にでも言っとけ！" },
        { speaker: "キャスター", text: "俺が言いたいのは、アニー先輩だけなんですけどね。" }
    ],
    'achievement_ten_games': [
        { speaker: "アニー", expression: 10, text: "10回か…。お前を指導し始めてから、もうそんなに経つんだな。", bgm: 'serious' },
        { speaker: "キャスター", text: "なんだか感慨深いですね。これからも、俺のこと見ててくださいね、アニー先輩。" },
        { speaker: "アニー", expression: 1, text: "当たり前だろ。お前がヘマしないか、しっかり見張っててやるよ。" },
        { speaker: "キャスター", text: "ヘマしたら、厳しく指導してくださいね？二人きりで。" }
    ],
    'achievement_fifteen_games': [
        { speaker: "キャスター", text: "アニー先輩、俺、少しは頼もしくなりましたか？", bgm: 'serious' },
        { speaker: "アニー", expression: 10, text: "うーん…まあ、最初の頃に比べりゃマシになったか？" },
        { speaker: "アニー", expression: 13, text: "金遣いの荒さと女癖の悪さがなけりゃ、もうちょっと褒めてやってもいいんだがな。" },
        { speaker: "キャスター", text: "それもこれも、先輩に振り向いてほしくてやってることなんですよ？" }
    ],
    'achievement_twenty_five_games': [
        { speaker: "アニー", expression: 1, text: "ベテラン調査員、か。お前も大層な名前がついたもんだな。", bgm: 'normal' },
        { speaker: "キャスター", text: "これも全部、アニー先輩のおかげです。今度、祝杯でもどうです？二人きりで。" },
        { speaker: "アニー", expression: 3, text: "断る。その金があるなら、もっとマシなことに使え！" },
        { speaker: "キャスター", text: "俺にとっては、先輩と飲むのが一番マシな使い方なんですけどね。" },
        { speaker: "アニー", expression: 9, text: "…ったく。お前は本当に、あたしの調子を狂わせる天才だな。" },
        { speaker: "キャスター", text: "最高の褒め言葉です。" }
    ],
    'achievement_no_compass': [
        { speaker: "キャスター", text: "コンパスなしでこのスコア、どうです？俺の直感、冴えてるでしょう。", bgm: 'normal' },
        { speaker: "アニー", expression: 9, text: "ふん、まぐれ当たりだろ。…でも、まあ…たまにはお前のその変な自信も役に立つんだな。" },
        { speaker: "キャスター", text: "変なってひどいですね。これも一種の魔法みたいなものですよ？" },
        { speaker: "アニー", expression: 10, text: "はいはい。魔法使い様は、次の調査の準備でもしてろ。" }
    ],
    'achievement_rookie_score': [
        { speaker: "キャスター", text: "やりました！10,000点超えです！", bgm: 'happy' },
        { speaker: "アニー", expression: 2, text: "おー、やるじゃないか。これでやっとスタートラインってとこだな。" },
        { speaker: "キャスター", text: "スタートラインですか！じゃあ、ゴールはアニー先輩の隣ですね！" },
        { speaker: "アニー", expression: 9, text: "…お前は本当にそういうことばっかりだな。" }
    ],
    'achievement_adept_score': [
        { speaker: "アニー", expression: 5, text: "14,000点か。大したもんだ。もう見習い卒業も近いんじゃないか？", bgm: 'happy' },
        { speaker: "キャスター", text: "いえ、俺は一生アニー先輩の『見習い』でいいです。" },
        { speaker: "アニー", expression: 9, text: "…はいはい、そういうのはいいから。" },
        { speaker: "キャスター", text: "本気なんですけどね。先輩のそばにずっといたいですから。" }
    ],
    'achievement_high_score_16k': [
        { speaker: "アニー", expression: 5, text: "16,000点か。やるじゃないか。", bgm: 'happy' },
        { speaker: "キャスター", text: "アニー先輩に褒められると、もっと頑張れますね。" },
        { speaker: "アニー", expression: 10, text: "調子に乗るな。まだまだだ。" },
        { speaker: "キャスター", text: "はい！先輩の期待に応えられるように、もっと頑張ります！" }
    ],
    'achievement_high_score_17k': [
        { speaker: "アニー", expression: 6, text: "17,000点だと？おいおい、あたしの最高記録に迫ってきてるじゃないか…。", bgm: 'funny' },
        { speaker: "キャスター", text: "アニー先輩を超えたら、何かご褒美ありますか？" },
        { speaker: "アニー", expression: 13, text: "あたしの膝枕で耳掃除でもしてやろうか？" },
        { speaker: "キャスター", text: "ぜひお願いします！" },
        { speaker: "アニー", expression: 3, text: "するか、バカ！" }
    ],
    'achievement_high_score_18k': [
        { speaker: "キャスター", text: "18,000点！もう俺、先輩を超えちゃいましたかね？", bgm: 'happy' },
        { speaker: "アニー", expression: 3, text: "はっ、あたしを誰だと思ってんだい？まだまだ背中は見せねえよ！" },
        { speaker: "キャスター", text: "その背中、いつか捕まえますからね。" },
        { speaker: "アニー", expression: 13, text: "…ふん、できるもんならな。" }
    ],
    'achievement_high_score_19k': [
        { speaker: "アニー", expression: 6, text: "19,000点…。もう何も言うことはないよ。お前はすごい。", bgm: 'serious' },
        { speaker: "キャスター", text: "…アニー先輩？なんだか素直で調子が狂いますね。" },
        { speaker: "アニー", expression: 7, text: "う、うるさい！たまには褒めてやってんだ！" },
        { speaker: "キャスター", text: "ありがとうございます。…じゃあ、ご褒美、期待してもいいですか？" },
        { speaker: "アニー", expression: 3, text: "図に乗るな、見習いが！" },
        { speaker: "キャスター", text: "はいはい、一生見習いで結構ですよ。" }
    ],
    'achievement_high_score_20k': [
        { speaker: "アニー", expression: 10, text: "20,000点の大台か…。なあ、キャスター。", bgm: 'serious' },
        { speaker: "キャスター", text: "はい、アニー先輩。" },
        { speaker: "アニー", expression: 5, text: "お前があたしのOJT担当で、本当によかったよ。…なんてな。" },
        { speaker: "キャスター", text: "俺も、先輩が担当でよかったです。じゃなかったら、こんなに毎日楽しくなかった。" },
        { speaker: "アニー", expression: 7, text: "…！そ、そうかよ…。なら、よかったじゃねえか…。" },
        { speaker: "キャスター", text: "はい。最高の毎日です。" }
    ],
    'achievement_consistent_chapters': [
        { speaker: "アニー", expression: 1, text: "全章で4,000点以上か。安定感が出てきたな。", bgm: 'normal' },
        { speaker: "キャスター", text: "アニー先輩の教え方がいいからですって。今度二人で祝杯でもあげませんか？" },
        { speaker: "アニー", expression: 3, text: "なんでそうなるんだ！断る！" },
        { speaker: "キャスター", text: "えー、残念だなあ。" }
    ],
    'achievement_perfect_story': [
        { speaker: "アニー", expression: 6, text: "全章5800点以上って…お前、もう人間じゃないだろ…。", bgm: 'serious' },
        { speaker: "キャスター", text: "俺が人間じゃなかったら、アニー先輩、どうします？" },
        { speaker: "アニー", expression: 10, text: "…はっ、面白そうじゃないか。人間だろうが魔法使いだろうが、お前はお前だろ？" },
        { speaker: "キャスター", text: "じゃあ、俺が魔法使いで、先輩を元の時代に帰せるとしたら…どうします？" },
        { speaker: "アニー", expression: 6, text: "…！ な、何言ってやがる…。そんなことできるわけ…。" },
        { speaker: "キャスター", text: "できますよ。…先輩が、それを望むならね。" }
    ],
    'achievement_davinci_code': [
        { showStoryBackground: true, speaker: "キャスター", text: "ダ・ヴィンチの謎、解き明かしましたよ！", bgm: 'happy' },
        { speaker: "アニー", expression: 13, text: "へえ、お前がねえ。天才の気持ちが少しはわかったか？" },
        { speaker: "キャスター", text: "ええ。アニー先輩っていう、もっと大きな謎を解き明かしたいですけどね。" },
        { speaker: "アニー", expression: 9, text: "…その口、いつか縫い合わせてやるからな。" }
    ],
    'achievement_pirate_king': [
        { showStoryBackground: true, speaker: "アニー", expression: 13, text: "海賊王の財宝を見つけるとはな。見習いにしちゃ上出来じゃないか。", bgm: 'happy' },
        { speaker: "キャスター", text: "アニー先輩こそ、本物の海賊女王じゃないですか。" },
        { speaker: "アニー", expression: 2, text: "へへっ、よく言われるぜ！アン・ボニーの名は伊達じゃないからな！" },
        { speaker: "キャスター", text: "その伝説の海賊女王様を、いつか俺が捕まえてみせますよ。" }
    ],
    'achievement_vampire_hunter': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "吸血鬼の謎を解くとはな。お前、夜道で襲われても大丈夫そうだな。", bgm: 'serious' },
        { speaker: "キャスター", text: "アニー先輩が一緒なら、どんな怪物でも怖くないですよ。" },
        { speaker: "アニー", expression: 13, text: "ふん、口だけは達者だな。…まあ、お前がやられると寝覚めが悪い。せいぜいあたしの後ろに隠れてな。" },
        { speaker: "キャスター", text: "頼もしいです。でも、先輩に血を吸われるなら本望ですけどね。" }
    ],
    'achievement_holy_grail': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "聖杯探求、お疲れさん。で、願い事は決まったのか？", bgm: 'normal' },
        { speaker: "キャスター", text: "俺の願いはもう叶ってますよ。" },
        { speaker: "アニー", expression: 9, text: "は？どういう意味だよ。" },
        { speaker: "キャスター", text: "アニー先輩と一緒にいられる、この毎日が俺の願いですから。" }
    ],
    'achievement_amber_room': [
        { showStoryBackground: true, speaker: "キャスター", text: "琥珀の間、見つけました！キラキラしてましたね！", bgm: 'happy' },
        { speaker: "アニー", expression: 14, text: "おう！お宝探しはやっぱり楽しいな！お前もすっかり板についてきたじゃないか。" },
        { speaker: "キャスター", text: "アニー先輩の瞳の方が、琥珀よりずっと綺麗ですけどね。" },
        { speaker: "アニー", expression: 9, text: "…お前はそういうことばっかりだな。耳にタコができたぜ。" }
    ],
    'achievement_pharaohs_heart': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "ファラオの心臓か…。古代の王の想いを読み解くとは、大したもんだ。", bgm: 'serious' },
        { speaker: "キャスター", text: "王の心より、俺はアニー先輩の心を知りたいです。" },
        { speaker: "アニー", expression: 3, text: "あたしの心はお前にやるほど安くないんだよ！" },
        { speaker: "キャスター", text: "じゃあ、いつか俺が盗んでみせます。" }
    ],
    'achievement_cold_war_ghost': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "冷戦時代のスパイ合戦とはな…。あたしらの時代の斬り合いより、よっぽど陰湿だぜ。", bgm: 'serious' },
        { speaker: "キャスター", text: "どんな時代でも、俺は先輩の味方ですよ。" },
        { speaker: "アニー", expression: 13, text: "…ふん。当たり前だろ、見習い。" },
        { speaker: "キャスター", text: "はい！だから、先輩の秘密も全部俺に教えてくださいね？" }
    ],
    'achievement_cthulhu_fhtagn': [
        { showStoryBackground: true, speaker: "キャスター", text: "なんだかSAN値が下がりそうな事件でしたね…。", bgm: 'funny' },
        { speaker: "アニー", expression: 9, text: "はぁ？さんち？なんだそりゃ。お前、変なもんでも食ったか？" },
        { speaker: "キャスター", text: "いえ、アニー先輩さえいれば、俺の正気は保たれますから大丈夫です。" },
        { speaker: "アニー", expression: 3, text: "意味わかんねえこと言ってないで、報告書まとめとけ！" }
    ],
    'achievement_mozart_requiem': [
        { showStoryBackground: true, speaker: "アニー", expression: 4, text: "モーツァルトのレクイエム…。悲しい旋律だったな。", bgm: 'serious' },
        { speaker: "キャスター", text: "ええ…。でも、俺たちの物語は、ハッピーエンドにしましょうね。" },
        { speaker: "アニー", expression: 3, text: "…！ な、気色の悪いこと言うな！あたしを巻き込むんじゃないよ！" },
        { speaker: "キャスター", text: "もう始まってますよ。俺たちの協奏曲が。" }
    ],
    'achievement_bushido_spirit': [
        { showStoryBackground: true, speaker: "キャスター", text: "武士の生き様、見届けました。", bgm: 'normal' },
        { speaker: "アニー", expression: 10, text: "あたしは海賊だから、主君に忠義なんてガラじゃないが…まあ、筋を通すってのは嫌いじゃないぜ。" },
        { speaker: "キャスター", text: "俺が忠誠を誓うのは、アニー先輩、あなただけです。" },
        { speaker: "アニー", expression: 9, text: "…はいはい。その忠誠心、仕事で示してくれよな。" }
    ],
    'achievement_freedom_architect': [
        { showStoryBackground: true, speaker: "アニー", expression: 2, text: "自由の設計図か。壮大な話だったな！", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ。俺も、アニー先輩と自由な未来を設計したいです。" },
        { speaker: "アニー", expression: 13, text: "へえ、どんな設計図だい？言ってみろ。笑ってやるからさ。" },
        { speaker: "キャスター", text: "それは…二人きりの時に、こっそりと。" }
    ],
    'achievement_emperor_immortality': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "不老不死ねぇ…。あたしは興味ないな。今が楽しけりゃそれでいい。", bgm: 'normal' },
        { speaker: "キャスター", text: "俺もです。アニー先輩といる、この一瞬一瞬が宝物ですから。" },
        { speaker: "アニー", expression: 9, text: "…お前は、本当にそういう口だけは回るな…。" },
        { speaker: "キャスター", text: "先輩にだけですよ。" }
    ],
    'achievement_shogun_secrets': [
        { showStoryBackground: true, speaker: "キャスター", text: "将軍の密書、無事回収しました！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "よくやった！これで今夜はパーッとやろうぜ！あたしの奢りだ！" },
        { speaker: "キャスター", text: "本当ですか！？じゃあ、二人で朝まで…！" },
        { speaker: "アニー", expression: 3, text: "なんでそうなるんだ！みんなでだ、みんなで！" }
    ],
    'achievement_volcanic_treasure': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "火山の秘宝か！熱い戦いだったな！", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ、でも俺の心はもっと燃え上がってますよ。アニー先輩への想いで！" },
        { speaker: "アニー", expression: 9, text: "はいはい、もう聞き飽きたぜ、そのセリフ。" },
        { speaker: "キャスター", text: "じゃあ、次は行動で示しますね。" }
    ],
    'achievement_sherlock_holmes': [
        { showStoryBackground: true, speaker: "キャスター", text: "事件の真相は、いつも一つ！ってね。", bgm: 'normal' },
        { speaker: "アニー", expression: 10, text: "なんだい、探偵気取りか？まあ、今回はお前の推理が冴えてたからな。認めてやるよ。" },
        { speaker: "キャスター", text: "ありがとうございます。じゃあ、探偵助手のアニーさん、次の事件も一緒に解決しましょう。" },
        { speaker: "アニー", expression: 3, text: "誰が助手だ！あたしが探偵だ！" }
    ],
    'achievement_ryoma_pact': [
        { showStoryBackground: true, speaker: "アニー", expression: 13, text: "日本の夜明けか…。あたしらの時代の夜明けも、こんな感じだったのかな。", bgm: 'serious' },
        { speaker: "キャスター", text: "アニー先輩がいれば、どんな時代でも夜明けは来ますよ。" },
        { speaker: "アニー", expression: 1, text: "…うまいこと言うじゃないか。まあ、口だけは達者だからな、お前は。" },
        { speaker: "キャスター", text: "一生、退屈させませんよ。" }
    ],
    'achievement_faustian_bargain': [
        { showStoryBackground: true, speaker: "キャスター", text: "悪魔との契約…恐ろしい話でしたね。", bgm: 'serious' },
        { speaker: "アニー", expression: 15, text: "あたしなら、魂を売ってでも手に入れたいもんなんて…いや、やめておこう。" },
        { speaker: "キャスター", text: "俺なら、アニー先輩のためなら悪魔にでも魂を売りますよ。" },
        { speaker: "アニー", expression: 3, text: "そんな安っぽい魂、悪魔もいらないだろ！" }
    ],
    'achievement_rasputin_curse': [
        { showStoryBackground: true, speaker: "アニー", expression: 9, text: "怪僧ラスプーチンねえ…。胡散臭いヤツだと思ってたが、大したもんだな。", bgm: 'funny' },
        { speaker: "キャスター", text: "でも、俺の魔法の方がすごいですよ？アニー先輩を笑顔にする魔法ですから。" },
        { speaker: "アニー", expression: 7, text: "…！ば、バカ！誰が笑顔になったってんだ！" },
        { speaker: "キャスター", text: "（なってるじゃないですか…可愛いなあ）" }
    ],
    'achievement_ripperologist': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "切り裂きジャックの正体、まさか王室が絡んでいたとはな…。闇が深いぜ。", bgm: 'serious' },
        { speaker: "キャスター", text: "どんな闇でも、俺が先輩を照らしますよ。" },
        { speaker: "アニー", expression: 10, text: "…キザなセリフだな。反吐が出そうだぜ。" },
        { speaker: "キャスター", text: "じゃあ、今度はもっと近くで照らしてもいいですか？" }
    ],
    'achievement_three_sacred_treasures': [
        { showStoryBackground: true, speaker: "キャスター", text: "三種の神器の秘密、解き明かしました！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "日本の宝か。あたしらの時代の財宝とはまた違った趣があるな。" },
        { speaker: "キャスター", text: "俺にとっての三種の神器は、「勇気」と「優しさ」と…「アニー先輩」です。" },
        { speaker: "アニー", expression: 3, text: "あたしを物みたいに言うな！" }
    ],
    'achievement_golden_compass': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "黄金の羅針盤ねぇ。あたしの時代の安物とは大違いだ。", bgm: 'normal' },
        { speaker: "キャスター", text: "俺の心の羅針盤は、いつでもアニー先輩を指してますけどね。" },
        { speaker: "アニー", expression: 9, text: "…またその口か。少しはマシなこと言えないのか？" },
        { speaker: "キャスター", text: "俺にとっては、これが最大級の賛辞です。" }
    ],
    'achievement_lost_prophecy': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "失われた預言か。未来なんて、あたしは自分の手で切り開くけどな。", bgm: 'serious' },
        { speaker: "キャスター", text: "そうですね。でも、俺の未来に先輩がいることだけは、預言されててほしいです。" },
        { speaker: "アニー", expression: 3, text: "気色の悪いこと言うな！" },
        { speaker: "キャスター", text: "照れてる顔、可愛いですよ。" }
    ],
    'achievement_inca_gold': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "インカの黄金都市！こういうのが一番燃えるぜ！", bgm: 'happy' },
        { speaker: "キャスター", text: "先輩は本当に宝探しが好きですね。" },
        { speaker: "アニー", expression: 5, text: "当たり前だろ！海賊の血が騒ぐってもんさ！" },
        { speaker: "キャスター", text: "俺の血も騒いでますよ。アニー先輩っていう、最高の宝を前にしてね。" }
    ],
    'achievement_marco_polo_map': [
        { showStoryBackground: true, speaker: "キャスター", text: "マルコ・ポーロの地図、見つけましたよ！", bgm: 'happy' },
        { speaker: "アニー", expression: 2, text: "おう、よくやった！これでまた新しい冒険ができるな！" },
        { speaker: "キャスター", text: "ええ！この地図で、先輩との新しい思い出の場所を探しに行きましょう。" },
        { speaker: "アニー", expression: 7, text: "…！仕事だって言ってんだろ、この見習い！" }
    ],
    'achievement_royal_scepter': [
        { showStoryBackground: true, speaker: "アニー", expression: 2, text: "太陽の王笏、ね。あたしには剣の方が性に合ってるがな。", bgm: 'funny' },
        { speaker: "キャスター", text: "先輩が女王様になったら、俺がその剣になってお守りしますよ。" },
        { speaker: "アニー", expression: 9, text: "はぁ？お前が剣？せいぜいナマクラだろうな。" },
        { speaker: "キャスター", text: "切れ味は保証しますよ。先輩を傷つけるものは、何でも斬り捨てますから。" }
    ],
    'achievement_romanov_cypher': [
        { showStoryBackground: true, speaker: "キャスター", text: "ロマノフ家の最後の暗号、悲しい物語でしたね…。", bgm: 'serious' },
        { speaker: "アニー", expression: 4, text: "…王族ってのも、楽じゃないんだな。" },
        { speaker: "キャスター", text: "どんな運命でも、俺は先輩のそばにいますよ。" },
        { speaker: "アニー", expression: 7, text: "…ふん。好きにしろ。" }
    ],
    'achievement_lost_library': [
        { showStoryBackground: true, speaker: "アニー", expression: 9, text: "失われた図書館か。本を読むのは苦手なんだよな…。", bgm: 'funny' },
        { speaker: "キャスター", text: "じゃあ、俺が読んであげましょうか？子守唄がわりに。" },
        { speaker: "アニー", expression: 3, text: "誰が子供だ！それに、お前の声じゃ眠れそうにないね！" },
        { speaker: "キャスター", text: "えー、結構いい声だって言われますけど？" }
    ],
    'achievement_mayan_calendar': [
        { showStoryBackground: true, speaker: "キャスター", text: "マヤ暦の予言、世界の終わりじゃなくてよかったですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 13, text: "当たり前だろ。世界が終わるなんて、あたしが許さないね。" },
        { speaker: "キャスター", text: "頼もしいですね、先輩！" },
        { speaker: "アニー", expression: 2, text: "ま、お前が隣にいるなら、世界の終わりも退屈しなさそうだがな。" }
    ],
    'achievement_voc_ghost_ship': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "幽霊船の正体が反乱船だったとはな。面白いじゃないか。", bgm: 'normal' },
        { speaker: "キャスター", text: "歴史の裏側って感じですね。" },
        { speaker: "アニー", expression: 1, text: "ああ。いつの時代も、真実は権力者に塗り替えられるもんさ。" },
        { speaker: "キャスター", text: "俺たちの真実は、誰にも塗り替えさせませんよ。" }
    ],
    'achievement_atlantis_legacy': [
        { showStoryBackground: true, speaker: "キャスター", text: "アトランティスは本当にあったんですね…！", bgm: 'happy' },
        { speaker: "アニー", expression: 10, text: "ふん、伝説が真実になる瞬間ってのは、悪くないもんだな。" },
        { speaker: "キャスター", text: "俺と先輩の出会いも、後世では伝説になってるかもしれませんね。" },
        { speaker: "アニー", expression: 3, text: "なるか、バカ！" }
    ],
    'achievement_star_melody': [
        { showStoryBackground: true, speaker: "アニー", expression: 4, text: "星の旋律…か。ロマンチックなのはどうもむず痒いぜ。", bgm: 'funny' },
        { speaker: "キャスター", text: "そうですか？俺は好きですよ、こういうの。" },
        { speaker: "アニー", expression: 9, text: "だろうな。お前はそういうヤツだと思ってたよ。" },
        { speaker: "キャスター", text: "じゃあ、今度俺が先輩のために一曲、作曲しますね。" }
    ],
    'achievement_nazca_lines': [
        { showStoryBackground: true, speaker: "キャスター", text: "ナスカの地上絵、宇宙人じゃなくてインド人が！驚きです！", bgm: 'happy' },
        { speaker: "アニー", expression: 1, text: "海を渡って文化が繋がる…か。昔も今も、世界は意外と狭いのかもな。" },
        { speaker: "キャスター", text: "ええ。だから俺と先輩も、こうして出会えたんですよ。" },
        { speaker: "アニー", expression: 7, text: "…！またそういうこと言って…。" }
    ],
    'achievement_ancient_oracle': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "古代の巫女の神託ねぇ。あたしは神様より自分を信じるがな。", bgm: 'normal' },
        { speaker: "キャスター", text: "俺はアニー先輩を信じます。" },
        { speaker: "アニー", expression: 7, text: "…！な、なんだよいきなり…。" },
        { speaker: "キャスター", text: "先輩が俺の道しるべですから。" }
    ],
    'achievement_hightech_shadow': [
        { showStoryBackground: true, speaker: "キャスター", text: "未来の技術、すごいですね！ワクワクします！", bgm: 'happy' },
        { speaker: "アニー", expression: 9, text: "ふん、あたしの時代の船の方がよっぽどすごいね。魂がこもってるからな。" },
        { speaker: "キャスター", text: "先輩も、魂こもってますもんね。いろんな意味で。" },
        { speaker: "アニー", expression: 3, text: "どういう意味だ、ゴラァ！" }
    ],
    'achievement_century_concert': [
        { showStoryBackground: true, speaker: "アニー", expression: 5, text: "世紀の演奏会か！音楽はいいよな、心が躍る！", bgm: 'happy' },
        { speaker: "キャスター", text: "先輩、意外と音楽好きなんですね。" },
        { speaker: "アニー", expression: 2, text: "当たり前だろ！船乗りは歌って踊るのが仕事みたいなもんだ！" },
        { speaker: "キャスター", text: "じゃあ今度、俺と踊ってくれませんか？" }
    ],
    'achievement_husaria_spear': [
        { showStoryBackground: true, speaker: "キャスター", text: "伝説の槍が、平和の証だったなんて…素敵ですね。", bgm: 'serious' },
        { speaker: "アニー", expression: 10, text: "武器を友情の証にするとはな。敵ながら天晴れってとこか。" },
        { speaker: "キャスター", text: "俺も先輩に何か贈りたいです。友情の証を。" },
        { speaker: "アニー", expression: 9, text: "…金目のものなら考えといてやる。" }
    ],
    'achievement_time_crystal': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "時間の結晶…地球の記憶か。壮大すぎてよくわからんな。", bgm: 'funny' },
        { speaker: "キャスター", text: "俺と先輩が過ごした時間も、いつか結晶になるんですかね。" },
        { speaker: "アニー", expression: 9, text: "なるわけないだろ。気色悪い。" },
        { speaker: "キャスター", text: "じゃあ、俺の心の中にだけ、大事にしまっておきます。" }
    ],
    'achievement_silent_melody': [
        { showStoryBackground: true, speaker: "キャスター", text: "言葉を越えて魂に響く音楽…感動的でした。", bgm: 'serious' },
        { speaker: "アニー", expression: 4, text: "…まあ、たまにはこういう静かなのも悪くないな。" },
        { speaker: "キャスター", text: "先輩の心にも、響きましたか？" },
        { speaker: "アニー", expression: 7, text: "…！うるさい、次行くぞ！" }
    ],
    'achievement_ice_phoenix': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "氷の不死鳥！派手でかっこいいじゃないか！", bgm: 'happy' },
        { speaker: "キャスター", text: "先輩みたいですね。クールで、美しい。" },
        { speaker: "アニー", expression: 7, text: "…！誰がクールだ！あたしは灼熱の太陽だ！" },
        { speaker: "キャスター", text: "じゃあ、俺はその太陽に照らされて生きていきます。" }
    ],
    'achievement_golden_dragon_tear': [
        { showStoryBackground: true, speaker: "キャスター", text: "龍の涙が地球を救うなんて、ロマンチックですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 9, text: "ふん、龍が泣くなんて聞いたことないがな。" },
        { speaker: "キャスター", text: "じゃあ、俺は先輩を絶対に泣かせませんよ。" },
        { speaker: "アニー", expression: 3, text: "当たり前だ！" }
    ],
    'achievement_mu_continent': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "ムー大陸の残響か。海の話は落ち着くな。", bgm: 'normal' },
        { speaker: "キャスター", text: "先輩はやっぱり海が好きなんですね。" },
        { speaker: "アニー", expression: 13, text: "ああ。あたしの故郷だからな。" },
        { speaker: "キャスター", text: "じゃあ、俺の故郷は先輩の隣ってことで。" }
    ],
    'achievement_aztec_sacrifice': [
        { showStoryBackground: true, speaker: "アニー", expression: 9, text: "アステカの生贄ねぇ…。あたしは心臓より金貨がいいな。", bgm: 'funny' },
        { speaker: "キャスター", text: "じゃあ俺の心臓、金貨で買い取ってくれませんか？" },
        { speaker: "アニー", expression: 3, text: "いらん！そんなもん、タダでもお断りだ！" },
        { speaker: "キャスター", text: "ひどいなあ…。" }
    ],
    'achievement_freemason_origin': [
        { showStoryBackground: true, speaker: "キャスター", text: "フリーメイソンの起源、謎めいてて面白いですね！", bgm: 'serious' },
        { speaker: "アニー", expression: 10, text: "秘密結社か。どいつもこいつも、コソコソすんのが好きだな。" },
        { speaker: "キャスター", text: "俺と先輩の仲も、二人だけの秘密ってことにしますか？" },
        { speaker: "アニー", expression: 9, text: "なんでそうなるんだ。" }
    ],
    'achievement_captain_cook_last_voyage': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "キャプテン・クックも、海に生きた男か。あたしと同じだな。", bgm: 'normal' },
        { speaker: "キャスター", text: "偉大な探検家でしたね。" },
        { speaker: "アニー", expression: 1, text: "ああ。だが、あたしの方が上だけどな！" },
        { speaker: "キャスター", text: "もちろんですよ、キャプテン・アニー！" }
    ],
    'achievement_marathon_warrior': [
        { showStoryBackground: true, speaker: "キャスター", text: "マラソンの始まり、感動的な話でした！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "命がけの伝令か。大した根性だ。" },
        { speaker: "キャスター", text: "俺も、先輩のためならどこまでも走りますよ！" },
        { speaker: "アニー", expression: 9, text: "…はいはい。口だけじゃなくて、本当に走ってみな。" }
    ],
    'achievement_black_death': [
        { showStoryBackground: true, speaker: "アニー", expression: 4, text: "黒死病…。病は戦争より怖いぜ、本当に。", bgm: 'serious' },
        { speaker: "キャスター", text: "そうですね…。" },
        { speaker: "アニー", expression: 15, text: "だから、お前も馬鹿みたいに飲み歩いてないで、ちゃんと体調管理しとけよ。" },
        { speaker: "キャスター", text: "…！先輩、俺のこと心配してくれてるんですか？" }
    ],
    'achievement_knights_of_malta': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "マルタ騎士団か。あたしら海賊とはまた違う、海の戦士だな。", bgm: 'normal' },
        { speaker: "キャスター", text: "信念のために戦う姿、かっこいいですよね。" },
        { speaker: "アニー", expression: 1, text: "ああ。守るものがあるヤツは強いからな。" },
        { speaker: "キャスター", text: "俺も、先輩を守るために強くなります。" }
    ],
    'achievement_tulip_mania': [
        { showStoryBackground: true, speaker: "キャスター", text: "チューリップ一個で家が買えるなんて、信じられないですね！", bgm: 'funny' },
        { speaker: "アニー", expression: 9, text: "人間の欲ってのは、いつの時代も底が知れないな。" },
        { speaker: "キャスター", text: "俺の先輩への欲も、底が知れませんよ？" },
        { speaker: "アニー", expression: 3, text: "気色悪いこと言うな！" }
    ],
    'achievement_fountain_of_youth': [
        { showStoryBackground: true, speaker: "アニー", expression: 13, text: "若さの泉ねぇ。見つからなくて正解だったんじゃないか？", bgm: 'normal' },
        { speaker: "キャスター", text: "どうしてですか？" },
        { speaker: "アニー", expression: 1, text: "限りがあるから、今が輝くんだろ？" },
        { speaker: "キャスター", text: "…先輩、たまに良いこと言いますね。" }
    ],
    'achievement_bounty_mutiny': [
        { showStoryBackground: true, speaker: "アニー", expression: 2, text: "バウンティ号の反乱！気持ちはわかるぜ！", bgm: 'happy' },
        { speaker: "キャスター", text: "先輩も、反乱とかしてたんですか？" },
        { speaker: "アニー", expression: 14, text: "まあな！気に入らないヤツは、いつでも海に叩き込んでやったさ！" },
        { speaker: "キャスター", text: "じゃあ、俺は先輩に逆らわないように気をつけます…！" }
    ],
    'achievement_alcatraz_escape': [
        { showStoryBackground: true, speaker: "キャスター", text: "アルカトラズからの脱出、彼らは本当に成功したんでしょうか…？", bgm: 'serious' },
        { speaker: "アニー", expression: 1, text: "さあな。だが、自由を求める魂は、誰にも止められないのさ。" },
        { speaker: "キャスター", text: "俺も、先輩の心を掴むまでは諦めませんよ。" },
        { speaker: "アニー", expression: 9, text: "…もういい、その話は。" }
    ],
    'achievement_trans_siberian_railway': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "シベリア鉄道か。船旅もいいが、汽車旅も悪くなさそうだな。", bgm: 'normal' },
        { speaker: "キャスター", text: "じゃあ、次の調査はシベリア鉄道で決まりですね！" },
        { speaker: "アニー", expression: 9, text: "はぁ？なんでそうなるんだ。" },
        { speaker: "キャスター", text: "二人で長い旅、してみたいじゃないですか。" }
    ],
    'achievement_alchemist_legacy': [
        { showStoryBackground: true, speaker: "キャスター", text: "錬金術師の遺産が「知恵」だなんて、素敵ですね。", bgm: 'happy' },
        { speaker: "アニー", expression: 13, text: "金銀財宝より、価値があるかもな。" },
        { speaker: "キャスター", text: "ええ。俺にとっては、アニー先輩から貰う言葉の一つ一つが、どんな財宝よりも価値がありますよ。" },
        { speaker: "アニー", expression: 7, text: "…！そ、そうかよ。" }
    ],
    'achievement_pirate_queen': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "海賊女王！あたし以外にもいたんだな。会ってみたかったぜ！", bgm: 'happy' },
        { speaker: "キャスター", text: "先輩とどっちが強かったでしょうね。" },
        { speaker: "アニー", expression: 5, text: "決まってるだろ、あたしに決まってる！" },
        { speaker: "キャスター", text: "はは、そうですね。俺にとっては、先輩が世界一の女王ですよ。" }
    ],
    'achievement_great_voyage_cross': [
        { showStoryBackground: true, speaker: "キャスター", text: "大航海時代の十字架…マゼランの信仰心、すごいですね。", bgm: 'serious' },
        { speaker: "アニー", expression: 1, text: "ああ。信じるものがあるヤツは、強いからな。" },
        { speaker: "キャスター", text: "俺も、信じてるものがありますよ。" },
        { speaker: "アニー", expression: 10, text: "へえ、なんだい？" },
        { speaker: "キャスター", text: "…アニー先輩との未来です。" }
    ],
    'achievement_aqua_orb': [
        { showStoryBackground: true, speaker: "アニー", expression: 5, text: "海の民の至宝か。あたしら海賊も欲しがりそうなお宝だな！", bgm: 'happy' },
        { speaker: "キャスター", text: "海流をコントロールできるなんて、すごい力ですよね。" },
        { speaker: "アニー", expression: 13, text: "ああ。これさえあれば、どんな嵐も乗り越えられるぜ！" },
        { speaker: "キャスター", text: "俺は、先輩さえいればどんな嵐も乗り越えられますけどね。" }
    ],
    'achievement_angkor_dynasty': [
        { showStoryBackground: true, speaker: "キャスター", text: "アンコール王朝、壮大でしたね！", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "ああ。石に刻まれた歴史か…ロマンがあるな。" },
        { speaker: "キャスター", text: "俺たちの歴史も、どこかに刻んでおきますか？" },
        { speaker: "アニー", expression: 9, text: "…お前の胸の内にでも刻んどけ。" }
    ],
    'achievement_joan_of_arc': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "ジャンヌ・ダルクか。国のために戦う女もいたんだな。", bgm: 'serious' },
        { speaker: "キャスター", text: "すごいですよね。神の声を聞いた少女…。" },
        { speaker: "アニー", expression: 15, text: "あたしには、神の声なんて聞こえないが…仲間を想う気持ちは、同じだったのかもしれないな。" },
        { speaker: "キャスター", text: "先輩…。" }
    ],
    'achievement_abyssinian_gold': [
        { showStoryBackground: true, speaker: "キャスター", text: "伝説の黄金が、水利権だったなんて！", bgm: 'funny' },
        { speaker: "アニー", expression: 2, text: "ははっ！面白いじゃないか！一番の宝が水だったとはな！" },
        { speaker: "キャスター", text: "俺にとっての一番の宝は、アニー先輩ですけどね。" },
        { speaker: "アニー", expression: 9, text: "もう聞き飽きたっての。" }
    ],
    'achievement_cathar_heresy': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "異端文書ねぇ。いつの時代も、権力者ってのは自分に都合の悪いものを隠したがるもんさ。", bgm: 'serious' },
        { speaker: "キャスター", text: "真実が明らかになる日が来るといいですね。" },
        { speaker: "アニー", expression: 1, text: "ああ。あたしたちの手で、明らかにすりゃいいのさ。" },
        { speaker: "キャスター", text: "はい！先輩と一緒なら、どこまでも！" }
    ],
    'achievement_leonidas_shield': [
        { showStoryBackground: true, speaker: "キャスター", text: "300人のスパルタ兵、まさに英雄ですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "ああ！たった300人で大軍に立ち向かうとは、大したもんだ！" },
        { speaker: "キャスター", text: "俺も、アニー先輩を守るためなら、一人で大軍に立ち向かいますよ！" },
        { speaker: "アニー", expression: 13, text: "…ふん、頼もしいじゃないか。" }
    ],
    'achievement_lost_aviator': [
        { showStoryBackground: true, speaker: "アニー", expression: 4, text: "消えた飛行士か…空のことはよくわからんが、海と同じでロマンがあるな。", bgm: 'normal' },
        { speaker: "キャスター", text: "ええ。どこまでも広がる空と海…。" },
        { speaker: "アニー", expression: 1, text: "いつか、お前と二人で空を飛んでみるのも悪くないかもな。" },
        { speaker: "キャスター", text: "…！ぜひ！" }
    ],
    'achievement_samurai_sword': [
        { showStoryBackground: true, speaker: "アニー", expression: 9, text: "呪われた刀ねぇ。あたしの銃の方がよっぽど頼りになるぜ。", bgm: 'funny' },
        { speaker: "キャスター", text: "でも、刀もかっこいいじゃないですか。" },
        { speaker: "アニー", expression: 13, text: "まあな。一度振り回してみたいもんだ。" },
        { speaker: "キャスター", text: "じゃあ、今度道場にでも行きますか？" }
    ],
    'achievement_last_conquistador': [
        { showStoryBackground: true, speaker: "キャスター", text: "失われた都市、見つけてみたいです！", bgm: 'happy' },
        { speaker: "アニー", expression: 14, text: "おう！ジャングルの奥地か！冒険の匂いがするな！" },
        { speaker: "キャスター", text: "二人で力を合わせれば、どんな謎も解けますよ！" },
        { speaker: "アニー", expression: 5, text: "当たり前だろ！" }
    ],
    'achievement_space_time_log': [
        { showStoryBackground: true, speaker: "アニー", expression: 6, text: "時空の航海日誌！？未来人が書いたのか！すげえな！", bgm: 'happy' },
        { speaker: "キャスター", text: "俺たちの調査も、未来の誰かが読んでるかもしれませんね。" },
        { speaker: "アニー", expression: 13, text: "ははっ！だったら、かっこつけないとな！" },
        { speaker: "キャスター", text: "そうですね！" }
    ],
    'achievement_dragon_vein': [
        { showStoryBackground: true, speaker: "キャスター", text: "龍脈…地球のエネルギーライン、神秘的ですね。", bgm: 'serious' },
        { speaker: "アニー", expression: 1, text: "ああ。地球も、あたしたちと同じで生きてるってことさ。" },
        { speaker: "キャスター", text: "俺も、生きてるって実感しますよ。先輩の隣にいると。" },
        { speaker: "アニー", expression: 7, text: "…！" }
    ],
    'achievement_faberge_egg': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "ファベルジェの卵か。綺麗だけど、あたしはもっと実用的な宝が好きだな。", bgm: 'funny' },
        { speaker: "キャスター", text: "じゃあ、今度俺が先輩にプレゼントしますよ。" },
        { speaker: "アニー", expression: 9, text: "は？何をだよ。" },
        { speaker: "キャスター", text: "世界一実用的な、俺の愛を。" }
    ],
    'achievement_silk_road_oracle': [
        { showStoryBackground: true, speaker: "キャスター", text: "シルクロードの神託が天文観測装置だったとは、驚きです。", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "ああ。昔の人間は、星を読んで未来を見てたんだな。" },
        { speaker: "キャスター", text: "俺は、星より先輩の瞳を見て、未来を見たいです。" },
        { speaker: "アニー", expression: 9, text: "…もういい。" }
    ],
    'achievement_phantom_of_the_opera': [
        { showStoryBackground: true, speaker: "アニー", expression: 4, text: "オペラ座の怪人か。悲しい話だね…。", bgm: 'serious' },
        { speaker: "キャスター", text: "ええ…。愛に生きた男の物語…。" },
        { speaker: "アニー", expression: 10, text: "お前も、誰かのためにそこまでできるのかい？" },
        { speaker: "キャスター", text: "…先輩のためなら。" }
    ],
    'achievement_mayan_serpent': [
        { showStoryBackground: true, speaker: "キャスター", text: "マヤの蛇の歯、未来予知の力じゃなくて儀式の道具だったんですね。", bgm: 'normal' },
        { speaker: "アニー", expression: 9, text: "まあ、そんなもんだろ。結局、未来なんて誰にもわからないのさ。" },
        { speaker: "キャスター", text: "でも、一つだけわかることがあります。" },
        { speaker: "アニー", expression: 10, text: "なんだい？" },
        { speaker: "キャスター", text: "俺が、これからもずっと先輩のそばにいるってことです。" }
    ],
    'achievement_alchemist_cipher': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "錬金術師の暗号か。知識こそが黄金、ってわけだな。", bgm: 'serious' },
        { speaker: "キャスター", text: "ええ。どんな財宝よりも、価値のあるものかもしれません。" },
        { speaker: "アニー", expression: 1, text: "ああ。あたしたちも、たくさんの知識を手に入れたな。" },
        { speaker: "キャスター", text: "はい。先輩と一緒だったから、手に入れられたんです。" }
    ],
    'achievement_serpent_river': [
        { showStoryBackground: true, speaker: "キャスター", text: "蛇の川の神託…ヴァイキングがアメリカ大陸に！歴史は繋がってるんですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "ああ！海を越えて、時代を越えてな！" },
        { speaker: "キャスター", text: "俺たちも、時代を越えて出会ったのかもしれませんね。" },
        { speaker: "アニー", expression: 7, text: "…！" }
    ],
    'achievement_shadow_architect': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "影の建築家ねぇ。職人のこだわりってのは、いつの時代もすごいもんだ。", bgm: 'normal' },
        { speaker: "キャスター", text: "ええ。光と影の芸術ですね。" },
        { speaker: "アニー", expression: 13, text: "お前も、たまには光の当たる場所に出てきたらどうだ？" },
        { speaker: "キャスター", text: "俺は、先輩っていう光を照らす影でいいんです。" }
    ],
    'achievement_franklin_expedition': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "フランクリン遠征隊か…。北の海は危険だらけだ。あたしはカリブの暖かい海がいいね。", bgm: 'funny' },
        { speaker: "キャスター", text: "じゃあ、今度二人でカリブ海に行きましょうか。" },
        { speaker: "アニー", expression: 3, text: "なんでそうなるんだ！" },
        { speaker: "キャスター", text: "だって、先輩と暖かい海で…ね？" }
    ],
    'achievement_voynich_manuscript': [
        { showStoryBackground: true, speaker: "キャスター", text: "ヴォイニッチ手稿、解読不能じゃなくて失われた言語だったなんて！", bgm: 'happy' },
        { speaker: "アニー", expression: 10, text: "ああ。いつか、あたしたちの言葉も、未来の誰かに解読されるのかもな。" },
        { speaker: "キャスター", text: "じゃあ、今のうちに愛の言葉をたくさん残しておきましょうか。" },
        { speaker: "アニー", expression: 9, text: "…却下だ。" }
    ],
    'achievement_lost_city_z': [
        { showStoryBackground: true, speaker: "アニー", expression: 5, text: "失われた都市Z！冒険心をくすぐるじゃないか！", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ！ジャングルの奥地、ロマンがありますね！" },
        { speaker: "アニー", expression: 14, text: "よし、次はあたしたちが探しに行くぞ！" },
        { speaker: "キャスター", text: "はい！二人でなら、どんな秘境でも！" }
    ],
    'achievement_hannibal_alps': [
        { showStoryBackground: true, speaker: "キャスター", text: "ハンニバルのアルプス越え、象でなんてすごい作戦ですね！", bgm: 'normal' },
        { speaker: "アニー", expression: 5, text: "ああ。常識を疑うからこそ、道は開けるのさ。" },
        { speaker: "キャスター", text: "俺も、常識を疑って…先輩にアタックし続けます！" },
        { speaker: "アニー", expression: 9, text: "…その情熱、仕事に使え。" }
    ],
    'achievement_roanoke_colony': [
        { showStoryBackground: true, speaker: "アニー", expression: 9, text: "ロアノークの集団失踪が女王の陰謀だったとはな。女は怖いぜ。", bgm: 'funny' },
        { speaker: "キャスター", text: "先輩も、たまに怖いですけどね。" },
        { speaker: "アニー", expression: 3, text: "なんだと！？" },
        { speaker: "キャスター", text: "美しすぎて、直視できないくらいに、です。" }
    ],
    'achievement_alexandria_knowledge': [
        { showStoryBackground: true, speaker: "キャスター", text: "アレクサンドリアの知識が、インドまで！知恵は旅をするんですね。", bgm: 'serious' },
        { speaker: "アニー", expression: 1, text: "ああ。そして、新しい場所で、新しい知恵と出会う。" },
        { speaker: "キャスター", text: "俺も、先輩と出会って、たくさんのことを学びました。" },
        { speaker: "アニー", expression: 13, text: "…ふん、生意気言うじゃないか。" }
    ],
    'achievement_amber_room_truth': [
        { showStoryBackground: true, speaker: "アニー", expression: 6, text: "琥珀の間がナチスのオカルト儀式にねぇ。とんでもない話だ。", bgm: 'serious' },
        { speaker: "キャスター", text: "歴史の闇は深いですね…。" },
        { speaker: "アニー", expression: 15, text: "ああ。だが、どんな闇にも、必ず終わりは来る。" },
        { speaker: "キャスター", text: "先輩は、俺の光です。" }
    ],
    'achievement_king_solomon_mines': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "ソロモン王の鉱山！黄金の国！これだよこれ！", bgm: 'happy' },
        { speaker: "キャスター", text: "先輩、目が輝いてますよ。" },
        { speaker: "アニー", expression: 5, text: "当たり前だろ！お宝の前では、いつでもこうさ！" },
        { speaker: "キャスター", text: "俺の前でも、そんな顔、してくれますか？" }
    ],
    'achievement_celestial_score': [
        { showStoryBackground: true, speaker: "キャスター", text: "音楽が宇宙からのメッセージだったなんて、ロマンチックです！", bgm: 'happy' },
        { speaker: "アニー", expression: 2, text: "ああ！星々が奏でる音楽か！壮大でいいじゃないか！" },
        { speaker: "キャスター", text: "俺も、先輩に愛のメロディーを奏でたいです。" },
        { speaker: "アニー", expression: 9, text: "…はいはい。" }
    ],
    'achievement_quantum_ghost': [
        { showStoryBackground: true, speaker: "アニー", expression: 9, text: "量子世界のゴースト？ちんぷんかんぷんだが、面白そうじゃないか！", bgm: 'funny' },
        { speaker: "キャスター", text: "先輩は、何でも楽しめますね。" },
        { speaker: "アニー", expression: 13, text: "人生は楽しんだもん勝ちだろ？" },
        { speaker: "キャスター", text: "ですね！先輩と一緒なら、毎日が最高に楽しいです！" }
    ],
    'achievement_olympus_prowess': [
        { showStoryBackground: true, speaker: "キャスター", text: "古代のトレーニング理論、現代でも通用しそうですね！", bgm: 'normal' },
        { speaker: "アニー", expression: 5, text: "ああ。結局、体を鍛える基本は変わらないってことさ。" },
        { speaker: "キャスター", text: "俺も、もっと鍛えて、先輩を守れるようになります！" },
        { speaker: "アニー", expression: 13, text: "…期待してるぜ。" }
    ],
    'achievement_phantom_opera': [
        { showStoryBackground: true, speaker: "アニー", expression: 4, text: "幻影のオペラ…音楽で人を操るなんて、恐ろしいな。", bgm: 'serious' },
        { speaker: "キャスター", text: "でも、音楽には人を救う力もあります。" },
        { speaker: "アニー", expression: 1, text: "…そうだな。あたしらの時代の歌も、そうだった。" },
        { speaker: "キャスター", text: "今度、聞かせてください。" }
    ],
    'achievement_alchemist_garden': [
        { showStoryBackground: true, speaker: "キャスター", text: "錬金術で砂漠を緑化！最高の魔法ですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "ああ！死んだ大地を蘇らせるなんて、神様みたいじゃないか！" },
        { speaker: "キャスター", text: "俺も、先輩の心を潤すオアシスになりたいです。" },
        { speaker: "アニー", expression: 9, text: "…もう潤ってるから、これ以上はやめとけ。" }
    ],
    'achievement_dragon_cradle': [
        { showStoryBackground: true, speaker: "アニー", expression: 5, text: "龍の揺りかごか。地球のエネルギー、あたしも感じてみたいもんだ。", bgm: 'normal' },
        { speaker: "キャスター", text: "俺はいつも、先輩からエネルギーをもらってますよ。" },
        { speaker: "アニー", expression: 7, text: "…！そ、そうかよ。" },
        { speaker: "キャスター", text: "はい。だから、俺のそばにいてください。" }
    ],
    'achievement_bushido_code': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "武士道のコードね。平和を願うのも武士の役目か。", bgm: 'serious' },
        { speaker: "キャスター", text: "ええ。守るべきもののために戦う…かっこいいです。" },
        { speaker: "アニー", expression: 1, text: "あたしにも、守りたいものができたからな。" },
        { speaker: "キャスター", text: "…それって、もしかして…。" }
    ],
    'achievement_celestial_race': [
        { showStoryBackground: true, speaker: "キャスター", text: "宇宙人とレースなんて、夢がありますね！", bgm: 'happy' },
        { speaker: "アニー", expression: 14, text: "ああ！一番速いのは誰か、あたしが教えてやるぜ！" },
        { speaker: "キャスター", text: "先輩なら、宇宙一になれますよ。" },
        { speaker: "アニー", expression: 5, text: "だろ？" }
    ],
    'achievement_cartographer_cipher': [
        { showStoryBackground: true, speaker: "アニー", expression: 1, text: "地図職人の暗号か。失われた大陸、見てみたいもんだな。", bgm: 'normal' },
        { speaker: "キャスター", text: "いつか、二人で見つけに行きましょう。" },
        { speaker: "アニー", expression: 7, text: "…！" },
        { speaker: "キャスター", text: "約束、ですよ？" }
    ],
    'achievement_aztec_revenge': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "アステカの復讐が日食の予言だったとはな。面白い仕返しだ。", bgm: 'funny' },
        { speaker: "キャスター", text: "ええ。時間を使った壮大な計画ですね。" },
        { speaker: "アニー", expression: 13, text: "あたしも、いつかお前に仕返ししてやるからな。覚悟しとけよ。" },
        { speaker: "キャスター", text: "え？俺、何かしましたっけ？" }
    ],
    'achievement_vinland_map': [
        { showStoryBackground: true, speaker: "キャスター", text: "ヴィンランド・マップ、偽物だけど本物の歴史が隠されていたんですね。", bgm: 'serious' },
        { speaker: "アニー", expression: 1, text: "ああ。嘘の中に真実が隠されてるなんて、よくあることさ。" },
        { speaker: "キャスター", text: "じゃあ、俺がいつも言ってる軽口の中にも、真実が隠されてるってことですかね？" },
        { speaker: "アニー", expression: 9, text: "…どうだかな。" }
    ],
    'achievement_round_table': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "円卓の騎士が宗教戦争を終わらせようとしていたとはな。大したもんだ。", bgm: 'serious' },
        { speaker: "キャスター", text: "ええ。真の騎士道ですね。" },
        { speaker: "アニー", expression: 1, text: "あたしたちも、歴史の真実を追い求める騎士みたいなもんか。" },
        { speaker: "キャスター", text: "はい！そして俺は、アニー先輩に仕える、ただ一人の騎士です。" }
    ],
    'achievement_atlantis_last_king': [
        { showStoryBackground: true, speaker: "キャスター", text: "アトランティスと古代エジプトが繋がっていたなんて！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "ああ！歴史のミッシングリンクってやつだな！" },
        { speaker: "キャスター", text: "俺と先輩の出会いも、運命のミッシングリンクだったりして。" },
        { speaker: "アニー", expression: 9, text: "…はいはい。" }
    ],
    'achievement_davinci_automaton': [
        { showStoryBackground: true, speaker: "アニー", expression: 6, text: "ダ・ヴィンチのオートマタ！宇宙の模型とは、さすが天才だな！", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ。彼の頭の中、どうなってるんでしょうね。" },
        { speaker: "アニー", expression: 13, text: "お前も、たまに変なこと考えるから、ちょっと似てるかもな。" },
        { speaker: "キャスター", text: "え！じゃあ俺も天才ですかね！？" }
    ],
    'achievement_blackbeard_treasure': [
        { showStoryBackground: true, speaker: "アニー", expression: 14, text: "黒髭の財宝か！あたしの財宝もどこかに隠してあるぜ？", bgm: 'funny' },
        { speaker: "キャスター", text: "本当ですか！？どこですか！？" },
        { speaker: "アニー", expression: 2, text: "教えるわけないだろ、バーカ！" },
        { speaker: "キャスター", text: "いつか絶対見つけ出してやりますからね！" }
    ],
    'achievement_doctor_faustus': [
        { showStoryBackground: true, speaker: "アニー", expression: 15, text: "悪魔との契約が、科学知識の亡命だったとはな。面白い。", bgm: 'normal' },
        { speaker: "キャスター", text: "ええ。歴史の裏側で、知られざる戦いがあったんですね。" },
        { speaker: "アニー", expression: 1, text: "あたしたちも、そうなのかもな。" },
        { speaker: "キャスター", text: "…はい。" }
    ],
    'achievement_cagliostro_potion': [
        { showStoryBackground: true, speaker: "キャスター", text: "カリオストロ伯爵、稀代の詐欺師でしたね…。", bgm: 'funny' },
        { speaker: "アニー", expression: 9, text: "ああ。口先三寸で世界を渡ろうなんて、甘いんだよ。" },
        { speaker: "キャスター", text: "俺は、口先だけじゃなくて、行動で先輩への愛を示しますから。" },
        { speaker: "アニー", expression: 3, text: "だから、その話はもういいっての！" }
    ],
    'achievement_dead_sea_scrolls': [
        { showStoryBackground: true, speaker: "アニー", expression: 10, text: "死海文書か。歴史を揺るがす真実ってのは、いつだって隠されるもんさ。", bgm: 'serious' },
        { speaker: "キャスター", text: "ええ。でも、いつかは必ず明らかになる。" },
        { speaker: "アニー", expression: 1, text: "そうだな。あたしたちの手で、明らかにしてやろうぜ。" },
        { speaker: "キャスター", text: "はい！" }
    ],
    'achievement_hammurabi_code': [
        { showStoryBackground: true, speaker: "キャスター", text: "ハンムラビ法典に、王の詩が隠されていたなんて…人間味がありますね。", bgm: 'normal' },
        { speaker: "アニー", expression: 1, text: "ああ。どんな偉い王様だって、ただの人間さ。" },
        { speaker: "キャスター", text: "じゃあ、アニー先輩も、ただの可愛い女の子ってことですか？" },
        { speaker: "アニー", expression: 3, text: "誰が可愛い女の子だ！" }
    ]
};

