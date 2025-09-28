// dialogue_achievements_story2.js

// ストーリーモードの章クリア時の実績会話を管理します。
const storyAchievementDialogue2 = {
    'achievement_good_chapter_score': [
        { speaker: "キャスター", text: "5,000点超え！どうです、先輩！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "ほう、やるじゃないか。その洞察力、少しは見直したぜ。" },
        { speaker: "キャスター", text: "先輩に見直されるなんて光栄です！この調子で、先輩の心も射抜いちゃいますよ！" },
        { speaker: "アニー", expression: 9, text: "はいはい、威勢がいいこった。" }
    ],
    'achievement_great_chapter_score': [
        { speaker: "アニー", expression: 2, text: "5,500点か。見事な推理だな。あたしが教えた通りじゃないか。", bgm: 'happy' },
        { speaker: "キャスター", text: "ええ！アニー先輩の教え方が素晴らしいおかげです！" },
        { speaker: "アニー", expression: 13, text: "ふん、わかってるじゃないか。もっとあたしを敬えよな、見習い。" },
        { speaker: "キャスター", text: "はい！世界一尊敬してますよ、アニー先輩！" }
    ],
    'achievement_near_perfect': [
        { speaker: "キャスター", text: "うわー！あと一歩で完璧だったのに！惜しい！", bgm: 'funny' },
        { speaker: "アニー", expression: 1, text: "まあ、上出来だろ。次はいけるさ。" },
        { speaker: "キャスター", text: "はい！次こそ完璧に決めてみせます！先輩のために！" },
        { speaker: "アニー", expression: 7, text: "…あたしのためじゃなくて、仕事のためだろ。" }
    ],
    'achievement_perfect_chapter': [
        { speaker: "アニー", expression: 6, text: "5,900点以上…！？完璧じゃないか！おい、お前、本当にあたしの見習いか？", bgm: 'serious' },
        { speaker: "キャスター", text: "いつまでも見習いのままじゃいられませんよ。いつかは先輩と、対等なパートナーになりたいですから。" },
        { speaker: "アニー", expression: 7, text: "…！ な、生意気言うな！" },
        { speaker: "キャスター", text: "本気ですよ。だから、これからも見ていてください。" }
    ],
    'achievement_time_to_spare': [
        { speaker: "アニー", expression: 1, text: "時間をかなり残してクリアか。余裕だな。", bgm: 'normal' },
        { speaker: "キャスター", text: "ええ。先輩とのデートの時間を作るために、仕事はさっさと終わらせないと。" },
        { speaker: "アニー", expression: 3, text: "誰がデートなんかするか！" },
        { speaker: "キャスター", text: "照れちゃって、可愛いなあ。" }
    ],
    'achievement_speed_demon': [
        { speaker: "キャスター", text: "電光石火のクリアです！我ながらすごい集中力でした！", bgm: 'happy' },
        { speaker: "アニー", expression: 14, text: "やるじゃないか！その速さ、海賊としても通用するぜ！" },
        { speaker: "キャスター", text: "じゃあ、俺も先輩の船に乗れますか？" },
        { speaker: "アニー", expression: 13, text: "…まあ、掃除係くらいなら考えといてやる。" }
    ],
    'achievement_no_hints_perfect': [
        { speaker: "アニー", expression: 6, text: "ノーヒントでハイスコア…。お前の頭の中、どうなってんだ？", bgm: 'serious' },
        { speaker: "キャスター", text: "先輩のことでいっぱいですけど、何か？" },
        { speaker: "アニー", expression: 7, text: "…それで、どうしてこの成績が出せるんだよ…。" },
        { speaker: "キャスター", text: "さあ？恋の力、ですかね。" }
    ],
    'achievement_close_call_win': [
        { speaker: "キャスター", text: "危なかったー！ギリギリでした！", bgm: 'funny' },
        { speaker: "アニー", expression: 2, text: "ははっ！見てるこっちがヒヤヒヤしたぜ！だが、結果オーライだな！" },
        { speaker: "キャスター", text: "ええ！これも、先輩の応援があったからです！" },
        { speaker: "アニー", expression: 9, text: "あたしは何もしてないだろ…。" }
    ],
    'achievement_pinpoint': [
        { speaker: "キャスター", text: "10km未満！かなりのピンポイント回答ですね！", bgm: 'happy' },
        { speaker: "アニー", expression: 5, text: "ああ、見事だ。その調子で頼むぜ。" },
        { speaker: "キャスター", text: "はい！次は先輩のハートをピンポイントで狙います！" },
        { speaker: "アニー", expression: 3, text: "断る！" }
    ],
    'achievement_sniper': [
        { speaker: "アニー", expression: 6, text: "100m未満…！？スナイパーか、お前は。", bgm: 'happy' },
        { speaker: "キャスター", text: "俺の狙う的は、いつだってアニー先輩だけですよ。" },
        { speaker: "アニー", expression: 7, text: "…！ そ、そうかよ…。" },
        { speaker: "キャスター", text: "（お、照れてる。可愛い…）" }
    ],
    'achievement_globetrotter': [
        { speaker: "キャスター", text: "うわー、5000kmも離れてる…。やっちゃいました。", bgm: 'funny' },
        { speaker: "アニー", expression: 9, text: "大陸横断とは、派手に間違えたな。まあ、ドンマイ。" },
        { speaker: "キャスター", text: "先輩が慰めてくれるなら、まあいっか。" },
        { speaker: "アニー", expression: 3, text: "慰めてなんかない！" }
    ],
    'achievement_lost': [
        { speaker: "アニー", expression: 3, text: "おい、1万kmって…地球の裏側じゃないか！迷子にも程があるぞ！", bgm: 'funny' },
        { speaker: "キャスター", text: "すみません、アニー先輩のこと考えてたら、つい…。" },
        { speaker: "アニー", expression: 9, text: "あたしのせいにするな！" },
        { speaker: "キャスター", text: "でも、先輩の魅力が俺を迷わせるんですよ？" }
    ],
    'achievement_time_is_up': [
        { speaker: "アニー", expression: 15, text: "時間切れだ、このマヌケ！船乗りなら時間厳守は基本だろ！", bgm: 'funny' },
        { speaker: "キャスター", text: "すみません…。もう少し、先輩と一緒にいたくて、つい時間を忘れてしまいました。" },
        { speaker: "アニー", expression: 7, text: "…！ば、バカ！言い訳になってないぞ！" },
        { speaker: "キャスター", text: "あれ、顔赤いですよ？" }
    ],
    'achievement_minus_score': [
        { speaker: "アニー", expression: 2, text: "ははっ！マイナススコアだって！逆にすごいじゃないか！", bgm: 'funny' },
        { speaker: "キャスター", text: "笑いごとじゃないですよ…。" },
        { speaker: "アニー", expression: 13, text: "まあまあ。失敗は誰にでもあるさ。ほら、次行くぞ、次！" },
        { speaker: "キャスター", text: "…はい！先輩が励ましてくれるなら、頑張れます！" }
    ],
};
