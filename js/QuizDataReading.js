const ReadingData = [

    {
        type: "reading",

        q: `
        <div class="reading-text">

            <b>【お知らせ】</b><br><br>

            スーパーは、
            <ruby>月曜日<rt>げつようび</rt></ruby>から
            <ruby>土曜日<rt>どようび</rt></ruby>まで、
            <ruby>朝<rt>あさ</rt></ruby>9<ruby>時<rt>じ</rt></ruby>から
            <ruby>夜<rt>よる</rt></ruby>8<ruby>時<rt>じ</rt></ruby>まで
            <ruby>営業<rt>えいぎょう</rt></ruby>しています。<br>

            <ruby>日曜日<rt>にちようび</rt></ruby>は
            <ruby>休<rt>やす</rt></ruby>みです。

        </div>

        <br>

        スーパーは、
        <ruby>日曜日<rt>にちようび</rt></ruby>に
        <ruby>営業<rt>えいぎょう</rt></ruby>していますか？
        `,

        choices: [
            "はい、営業しています。",
            "いいえ、営業していません。",
            "朝9時だけ営業しています。",
            "夜8時まで営業しています。"
        ],

        answer: "いいえ、営業していません。"
    },
{
type:"reading",
q:`
<div class="reading-text">
<b>【お知らせ】</b><br><br>

スーパーは、
<ruby>月曜日<rt>げつようび</rt></ruby>から
<ruby>土曜日<rt>どようび</rt></ruby>まで、
<ruby>朝<rt>あさ</rt></ruby>9<ruby>時<rt>じ</rt></ruby>から
<ruby>夜<rt>よる</rt></ruby>8<ruby>時<rt>じ</rt></ruby>まで
<ruby>営業<rt>えいぎょう</rt></ruby>しています。<br>

<ruby>日曜日<rt>にちようび</rt></ruby>は
<ruby>休<rt>やす</rt></ruby>みです。

</div><br>

スーパーは、
<ruby>日曜日<rt>にちようび</rt></ruby>に
<ruby>営業<rt>えいぎょう</rt></ruby>していますか？
`,
choices:[
"はい、営業しています。",
"いいえ、営業していません。",
"朝9時だけ営業しています。",
"夜8時まで営業しています。"
],
answer:"いいえ、営業していません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【図書館】</b><br><br>

この図書館は
<ruby>午前<rt>ごぜん</rt></ruby>10<ruby>時<rt>じ</rt></ruby>から
<ruby>午後<rt>ごご</rt></ruby>6<ruby>時<rt>じ</rt></ruby>までです。<br>

<ruby>火曜日<rt>かようび</rt></ruby>は
<ruby>休<rt>やす</rt></ruby>みです。

</div><br>

図書館は
火曜日に
あいていますか？
`,
choices:[
"はい、あいています。",
"いいえ、あいていません。",
"午後6時からです。",
"月曜日だけです。"
],
answer:"いいえ、あいていません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【メモ】</b><br><br>

あしたは
<ruby>病院<rt>びょういん</rt></ruby>へ
<ruby>行<rt>い</rt></ruby>きます。<br>

<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>に
<ruby>受付<rt>うけつけ</rt></ruby>です。

</div><br>

病院の受付は
何時ですか。
`,
choices:[
"8時です。",
"9時です。",
"10時です。",
"12時です。"
],
answer:"9時です。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【お知らせ】</b><br><br>

ゴミは
<ruby>月曜日<rt>げつようび</rt></ruby>と
<ruby>木曜日<rt>もくようび</rt></ruby>に
<ruby>出<rt>だ</rt></ruby>してください。

</div><br>

ゴミは
いつ出しますか。
`,
choices:[
"月曜日と木曜日",
"火曜日と金曜日",
"水曜日と土曜日",
"毎日"
],
answer:"月曜日と木曜日"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【会社】</b><br><br>

<ruby>昼休<rt>ひるやす</rt></ruby>みは
12<ruby>時<rt>じ</rt></ruby>から
1<ruby>時<rt>じ</rt></ruby>までです。

</div><br>

昼休みは
何時間ですか。
`,
choices:[
"30分",
"1時間",
"2時間",
"3時間"
],
answer:"1時間"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【メール】</b><br><br>

きょうは
<ruby>雨<rt>あめ</rt></ruby>です。<br>

かさを
<ruby>持<rt>も</rt></ruby>ってきてください。

</div><br>

何を持ってきますか。
`,
choices:[
"かさ",
"ぼうし",
"かばん",
"くつ"
],
answer:"かさ"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【アパート】</b><br><br>

このアパートでは
ペットを
<ruby>飼<rt>か</rt></ruby>うことが
できません。

</div><br>

このアパートで
いぬを<ruby>飼<rt>か</rt></ruby>うことができますか。
`,
choices:[
"はい、できます。",
"いいえ、できません。",
"一匹だけできます。",
"昼だけできます。"
],
answer:"いいえ、できません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【旅行】</b><br><br>

しゅうまつ、
<ruby>京都<rt>きょうと</rt></ruby>へ
<ruby>行<rt>い</rt></ruby>きました。<br>

おてらを
たくさん見ました。

</div><br>

この人は
どこへ行きましたか。
`,
choices:[
"東京",
"大阪",
"京都",
"名古屋"
],
answer:"京都"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【店】</b><br><br>

パンを
3つ
<ruby>買<rt>か</rt></ruby>いました。<br>

1つ200円です。

</div><br>

全部でいくらですか。
`,
choices:[
"200円",
"300円",
"500円",
"600円"
],
answer:"600円"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【学校】</b><br><br>

あした
<ruby>日本語<rt>にほんご</rt></ruby>テストがあります。<br>

9<ruby>時<rt>じ</rt></ruby>までに
<ruby>教室<rt>きょうしつ</rt></ruby>へ
来てください。

</div><br>

学生は
何時までに教室へ行きますか。
`,
choices:[
"8時",
"9時",
"10時",
"11時"
],
answer:"9時"
},
{
type:"reading",
q:`
<div class="reading-text">
<b>【お知らせ】</b><br><br>

エレベーターは
<ruby>点検<rt>てんけん</rt></ruby>のため、
きょうは
<ruby>使<rt>つか</rt></ruby>えません。<br>

<ruby>階段<rt>かいだん</rt></ruby>を
<ruby>利用<rt>りよう</rt></ruby>してください。

</div><br>

きょう、エレベーターを使えますか。
`,
choices:[
"はい、使えます。",
"いいえ、使えません。",
"午後だけ使えます。",
"夜だけ使えます。"
],
answer:"いいえ、使えません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【メモ】</b><br><br>

れいぞうこに
ぎゅうにゅうが
ありません。<br>

スーパーで
買ってください。

</div><br>

何を買いますか。
`,
choices:[
"パン",
"ぎゅうにゅう",
"たまご",
"みず"
],
answer:"ぎゅうにゅう"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【学校】</b><br><br>

あしたは
<ruby>遠足<rt>えんそく</rt></ruby>です。<br>

<ruby>朝<rt>あさ</rt></ruby>8時に
学校へ
来てください。

</div><br>

何時に学校へ行きますか。
`,
choices:[
"7時",
"8時",
"9時",
"10時"
],
answer:"8時"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【会社】</b><br><br>

きょうの
<ruby>会議<rt>かいぎ</rt></ruby>は
3時からです。<br>

2時50分までに
会議室へ来てください。

</div><br>

会議は何時からですか。
`,
choices:[
"2時",
"2時50分",
"3時",
"4時"
],
answer:"3時"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【ホテル】</b><br><br>

<ruby>朝食<rt>ちょうしょく</rt></ruby>は
1階のレストランで
食べられます。<br>

時間は
6時から9時までです。

</div><br>

<ruby>朝食<rt>ちょうしょく</rt></ruby>はどこで食べますか。
`,
choices:[
"へや",
"ロビー",
"レストラン",
"うけつけ"
],
answer:"レストラン"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【メール】</b><br><br>

きょうは
<ruby>残業<rt>ざんぎょう</rt></ruby>です。<br>

仕事は
7時に終わります。

</div><br>

仕事は何時に終わりますか。
`,
choices:[
"5時",
"6時",
"7時",
"8時"
],
answer:"7時"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【アパート】</b><br><br>

夜10時のあと、
大きい音を
出してはいけません。

</div><br>

夜11時に
大きい音を出してもいいですか。
`,
choices:[
"はい、いいです。",
"いいえ、いけません。",
"昼だけいいです。",
"休みの日だけです。"
],
answer:"いいえ、いけません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【レストラン】</b><br><br>

本日のおすすめは
ハンバーグです。<br>

サラダとスープが
ついています。

</div><br>

おすすめの料理は何ですか。
`,
choices:[
"ラーメン",
"カレー",
"ハンバーグ",
"うどん"
],
answer:"ハンバーグ"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【病院】</b><br><br>

土曜日は
午前中だけ
診察しています。<br>

午後は休みです。

</div><br>

土曜日の午後は診察していますか。
`,
choices:[
"はい、しています。",
"いいえ、していません。",
"夕方だけしています。",
"夜だけしています。"
],
answer:"いいえ、していません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【スーパー】</b><br><br>

りんごは
1こ100円です。<br>

3こ買いました。

</div><br>

全部でいくらですか。
`,
choices:[
"100円",
"200円",
"300円",
"400円"
],
answer:"300円"
},
{
type:"reading",
q:`
<div class="reading-text">

<b>【アルバイト募集】</b><br><br>

レストランスタッフを
<ruby>募集<rt>ぼしゅう</rt></ruby>しています。<br>

<ruby>時間<rt>じかん</rt></ruby>：18:00～22:00<br>

<ruby>週<rt>しゅう</rt></ruby>3<ruby>日以上<rt>にちいじょう</rt></ruby><br>

<ruby>土曜日<rt>どようび</rt></ruby>・
<ruby>日曜日<rt>にちようび</rt></ruby>に
<ruby>働<rt>はたら</rt></ruby>ける
<ruby>人<rt>ひと</rt></ruby>を
<ruby>歓迎<rt>かんげい</rt></ruby>します。

</div><br>

キムさんは
<ruby>平日<rt>へいじつ</rt></ruby>の18:00～22:00は
<ruby>働<rt>はたら</rt></ruby>けますが、
<ruby>土曜日<rt>どようび</rt></ruby>と
<ruby>日曜日<rt>にちようび</rt></ruby>は
<ruby>働<rt>はたら</rt></ruby>けません。

キムさんは
<ruby>応募<rt>おうぼ</rt></ruby>できますか。
`,
choices:[
"応募できる",
"応募できない",
"土曜日だけ応募できる",
"日曜日だけ応募できる"
],
answer:"応募できない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【マンションのお知らせ】</b><br><br>

ゴミは
<ruby>火曜日<rt>かようび</rt></ruby>と
<ruby>金曜日<rt>きんようび</rt></ruby>の
<ruby>朝<rt>あさ</rt></ruby>に
<ruby>出<rt>だ</rt></ruby>してください。<br>

<ruby>前日<rt>ぜんじつ</rt></ruby>の
<ruby>夜<rt>よる</rt></ruby>に
<ruby>出<rt>だ</rt></ruby>しては
いけません。

</div><br>

<ruby>正<rt>ただ</rt></ruby>しいものは
どれですか。
`,
choices:[
"月曜日の夜に出す",
"火曜日の朝に出す",
"木曜日の昼に出す",
"日曜日の朝に出す"
],
answer:"火曜日の朝に出す"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【ホテルのお知らせ】</b><br><br>

<ruby>朝食<rt>ちょうしょく</rt></ruby>は
1<ruby>階<rt>かい</rt></ruby>レストランで
6:30～9:00までです。<br>

9:00を
<ruby>過<rt>す</rt></ruby>ぎると
<ruby>利用<rt>りよう</rt></ruby>できません。

</div><br>

9:10に
レストランへ
<ruby>行<rt>い</rt></ruby>きました。

どうなりますか。
`,
choices:[
"朝食を食べられる",
"朝食を注文できる",
"朝食を利用できない",
"昼食を食べる"
],
answer:"朝食を利用できない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【メール】</b><br><br>

<ruby>山田<rt>やまだ</rt></ruby>さんへ<br><br>

<ruby>明日<rt>あした</rt></ruby>の
<ruby>会議<rt>かいぎ</rt></ruby>は
10<ruby>時<rt>じ</rt></ruby>からです。<br>

9<ruby>時50分<rt>じごじゅっぷん</rt></ruby>までに
<ruby>会議室<rt>かいぎしつ</rt></ruby>へ
<ruby>来<rt>き</rt></ruby>てください。

</div><br>

山田さんは
<ruby>何時<rt>なんじ</rt></ruby>までに
会議室へ
行かなければなりませんか。
`,
choices:[
"9時",
"9時30分",
"9時50分",
"10時"
],
answer:"9時50分"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【スーパー】</b><br><br>

たまご　198円<br>
ぎゅうにゅう　238円<br>

きょうは
たまごが
20円<ruby>引<rt>び</rt></ruby>きです。

</div><br>

きょうの
たまごは
いくらですか。
`,
choices:[
"178円",
"180円",
"198円",
"218円"
],
answer:"178円"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【図書館】</b><br><br>

<ruby>本<rt>ほん</rt></ruby>は
2<ruby>週間<rt>しゅうかん</rt></ruby>
<ruby>借<rt>か</rt></ruby>りることができます。<br>

<ruby>返却日<rt>へんきゃくび</rt></ruby>を
<ruby>過<rt>す</rt></ruby>ぎると
<ruby>新<rt>あたら</rt></ruby>しい本を
借りることができません。

</div><br>

本を
<ruby>返<rt>かえ</rt></ruby>していない人は
どうなりますか。
`,
choices:[
"本を返さなくてもいい",
"新しい本を借りられない",
"図書館へ入れない",
"本を買わなければならない"
],
answer:"新しい本を借りられない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【病院のお知らせ】</b><br><br>

<ruby>内科<rt>ないか</rt></ruby>
　月～金<br>

<ruby>小児科<rt>しょうにか</rt></ruby>
　月・水・金<br>

土曜日と日曜日は休みです。

</div><br>

木曜日に
<ruby>子<rt>こ</rt></ruby>どもが
<ruby>熱<rt>ねつ</rt></ruby>を
出しました。

正しいものはどれですか。
`,
choices:[
"<ruby>小児科<rt>しょうにか</rt></ruby>へ行ける",
"病院は休みである",
"<ruby>内科<rt>ないか</rt></ruby>へ行ける",
"金曜日まで待つ"
],
answer:"<ruby>内科<rt>ないか</rt></ruby>へ行ける"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【社員旅行】</b><br><br>

<ruby>集合<rt>しゅうごう</rt></ruby>
8:30
<ruby>駅前<rt>えきまえ</rt></ruby><br>

<ruby>出発<rt>しゅっぱつ</rt></ruby>
9:00<br>

<ruby>遅<rt>おく</rt></ruby>れる人は
<ruby>必<rt>かなら</rt></ruby>ず
<ruby>連絡<rt>れんらく</rt></ruby>してください。

</div><br>

田中さんは
8:45に
駅へ着きます。

田中さんはどうしますか。
`,
choices:[
"何もしない",
"連絡する",
"家へ帰る",
"旅行を中止する"
],
answer:"連絡する"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【会社】</b><br><br>

<ruby>来週<rt>らいしゅう</rt></ruby>の
<ruby>月曜日<rt>げつようび</rt></ruby>は
<ruby>祝日<rt>しゅくじつ</rt></ruby>のため
休みです。<br>

火曜日から
<ruby>通常<rt>つうじょう</rt></ruby>どおり
仕事があります。

</div><br>

仕事は
いつからありますか。
`,
choices:[
"月曜日",
"火曜日",
"水曜日",
"金曜日"
],
answer:"火曜日"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【掲示】</b><br><br>

きょうは
<ruby>強<rt>つよ</rt></ruby>い雨のため、
<ruby>野球<rt>やきゅう</rt></ruby>の
<ruby>試合<rt>しあい</rt></ruby>は
<ruby>中止<rt>ちゅうし</rt></ruby>です。<br>

次の予定は
来週お知らせします。

</div><br>

正しいものはどれですか。
`,
choices:[
"今日試合がある",
"今日試合はない",
"明日試合がある",
"来週必ず試合がある"
],
answer:"今日試合はない"
},
{
type:"reading",
q:`
<div class="reading-text">

<b>【お知らせ】</b><br><br>

<ruby>台風<rt>たいふう</rt></ruby>のため、
あしたの
<ruby>日本語教室<rt>にほんごきょうしつ</rt></ruby>は
お<ruby>休<rt>やす</rt></ruby>みです。<br>

<ruby>次回<rt>じかい</rt></ruby>は
<ruby>来週<rt>らいしゅう</rt></ruby>の
<ruby>火曜日<rt>かようび</rt></ruby>です。

</div><br>

あした、
日本語教室はありますか。
`,
choices:[
"あります",
"ありません",
"午前だけあります",
"午後だけあります"
],
answer:"ありません"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【求人】</b><br><br>

ホテルスタッフ<br>

<ruby>勤務時間<rt>きんむじかん</rt></ruby>
7:00～12:00<br>

<ruby>週<rt>しゅう</rt></ruby>4<ruby>日以上<rt>にちいじょう</rt></ruby><br>

<ruby>経験<rt>けいけん</rt></ruby>は
いりません。

</div><br>

リーさんは
<ruby>午前<rt>ごぜん</rt></ruby>7:00から
11:00まで
<ruby>働<rt>はたら</rt></ruby>けます。

リーさんは
この<ruby>仕事<rt>しごと</rt></ruby>を
できますか。
`,
choices:[
"できる",
"できない",
"土曜日だけできる",
"経験が必要である"
],
answer:"できる"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【病院】</b><br><br>

<ruby>受付時間<rt>うけつけじかん</rt></ruby><br>

8:30～11:30<br>

13:00～16:30

</div><br>

12:00に
<ruby>病院<rt>びょういん</rt></ruby>へ
<ruby>行<rt>い</rt></ruby>きました。

どうなりますか。
`,
choices:[
"<ruby>受付<rt>うけつけ</rt></ruby>できる",
"<ruby>診察<rt>しんさつ</rt></ruby>が終わった",
"<ruby>受付<rt>うけつけ</rt></ruby>できない",
"病院は休み"
],
answer:"<ruby>受付<rt>うけつけ</rt></ruby>できない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【アパート】</b><br><br>

<ruby>共用<rt>きょうよう</rt></ruby>キッチンは
6:00～22:00まで
<ruby>利用<rt>りよう</rt></ruby>できます。

</div><br>

23:00に
キッチンを
<ruby>使<rt>つか</rt></ruby>えますか。
`,
choices:[
"使える",
"使えない",
"少しだけ使える",
"<ruby>管理人<rt>かんりにん</rt></ruby>に聞く"
],
answer:"使えない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【メール】</b><br><br>

あしたは
<ruby>工事<rt>こうじ</rt></ruby>があります。<br>

<ruby>駐車場<rt>ちゅうしゃじょう</rt></ruby>は
<ruby>使<rt>つか</rt></ruby>えません。<br>

<ruby>自転車<rt>じてんしゃ</rt></ruby>で
<ruby>来<rt>き</rt></ruby>てください。

</div><br>

車で会社へ
行くことができますか。
`,
choices:[
"できます",
"できません",
"午後だけできます",
"土曜日だけできます"
],
answer:"できません"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【スーパー】</b><br><br>

りんご 120円<br>
バナナ 180円<br>

りんごを2つ、
バナナを1つ
<ruby>買<rt>か</rt></ruby>いました。

</div><br>

<ruby>合計<rt>ごうけい</rt></ruby>は
いくらですか。
`,
choices:[
"240円",
"300円",
"360円",
"420円"
],
answer:"420円"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【図書館】</b><br><br>

<ruby>飲<rt>の</rt></ruby>みものは
ふたがあるものだけ
<ruby>持<rt>も</rt></ruby>ちこめます。<br>

<ruby>食<rt>た</rt></ruby>べものは
だめです。

</div><br>

ペットボトルの
お<ruby>茶<rt>ちゃ</rt></ruby>を
<ruby>持<rt>も</rt></ruby>って
<ruby>入<rt>はい</rt></ruby>れますか。
`,
choices:[
"入れる",
"入れない",
"食べ物が必要",
"図書館が休み"
],
answer:"入れる"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【ホテル】</b><br><br>

チェックアウトは
10:00までです。<br>

10:00を
<ruby>過<rt>す</rt></ruby>ぎると
<ruby>追加料金<rt>ついかりょうきん</rt></ruby>が
かかります。

</div><br>

10:15に
チェックアウトしました。

どうなりますか。
`,
choices:[
"何もない",
"<ruby>追加料金<rt>ついかりょうきん</rt></ruby>がかかる",
"無料になる",
"1泊できる"
],
answer:"<ruby>追加料金<rt>ついかりょうきん</rt></ruby>がかかる"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【会社のルール】</b><br><br>

<ruby>仕事中<rt>しごとちゅう</rt></ruby>は
スマートフォンを
<ruby>使<rt>つか</rt></ruby>っては
いけません。<br>

<ruby>休憩時間<rt>きゅうけいじかん</rt></ruby>は
使ってもいいです。

</div><br>

休憩時間に
スマートフォンを
使ってもいいですか。
`,
choices:[
"いい",
"だめ",
"上司だけいい",
"昼だけだめ"
],
answer:"いい"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【駅のお知らせ】</b><br><br>

<ruby>人身事故<rt>じんしんじこ</rt></ruby>のため、
この<ruby>電車<rt>でんしゃ</rt></ruby>は
20<ruby>分<rt>ぷん</rt></ruby>
<ruby>遅<rt>おく</rt></ruby>れています。

</div><br>

10:00の電車は
何時ごろ
来ますか。
`,
choices:[
"10:10ごろ",
"10:20ごろ",
"10:30ごろ",
"11:00ごろ"
],
answer:"10:20ごろ"
},
{
type:"reading",
q:`
<div class="reading-text">

<b>【メール】</b><br><br>

<ruby>木村<rt>きむら</rt></ruby>さん

あしたの
<ruby>研修<rt>けんしゅう</rt></ruby>は
9<ruby>時<rt>じ</rt></ruby>からではなく、
10<ruby>時<rt>じ</rt></ruby>からです。<br>

<ruby>会場<rt>かいじょう</rt></ruby>は
3<ruby>階<rt>かい</rt></ruby>の
203<ruby>号室<rt>ごうしつ</rt></ruby>です。

</div><br>

研修は何時からですか。
`,
choices:[
"8時",
"9時",
"10時",
"11時"
],
answer:"10時"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【お知らせ】</b><br><br>

プールは
<ruby>清掃<rt>せいそう</rt></ruby>のため、
7月10日から12日まで
<ruby>利用<rt>りよう</rt></ruby>できません。

</div><br>

7月11日に
プールを使えますか。
`,
choices:[
"使える",
"使えない",
"午前だけ使える",
"午後だけ使える"
],
answer:"使えない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【サークル募集】</b><br><br>

<ruby>参加費<rt>さんかひ</rt></ruby>
500円<br>

<ruby>毎週<rt>まいしゅう</rt></ruby>
<ruby>土曜日<rt>どようび</rt></ruby>
14:00からです。<br>

18歳以上の人だけ
参加できます。

</div><br>

17歳の人は参加できますか。
`,
choices:[
"参加できる",
"参加できない",
"土曜日だけ参加できる",
"無料なら参加できる"
],
answer:"参加できない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【駅】</b><br><br>

A線　8:10<br>
B線　8:25<br>
C線　8:40

</div><br>

8:20に駅に着きました。

どの電車に乗りますか。
`,
choices:[
"A線",
"B線",
"C線",
"A線とB線"
],
answer:"B線"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【会社】</b><br><br>

コピー用紙がありません。<br>

<ruby>総務部<rt>そうむぶ</rt></ruby>へ
連絡してください。

</div><br>

コピー用紙がないとき、
どうしますか。
`,
choices:[
"買いに行く",
"<ruby>総務部<rt>そうむぶ</rt></ruby>へ連絡する",
"帰る",
"上司を待つ"
],
answer:"<ruby>総務部<rt>そうむぶ</rt></ruby>へ連絡する"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【アパートのルール】</b><br><br>

<ruby>駐輪場<rt>ちゅうりんじょう</rt></ruby>は
1人1台だけ
利用できます。<br>

友達の自転車は
置けません。

</div><br>

友達の自転車を
置くことができますか。
`,
choices:[
"できる",
"できない",
"夜だけできる",
"休日だけできる"
],
answer:"できない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【スーパー】</b><br><br>

牛乳　220円<br>
パン　180円<br>
たまご　250円

</div><br>

牛乳とパンを買いました。

合計はいくらですか。
`,
choices:[
"350円",
"380円",
"400円",
"430円"
],
answer:"400円"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【病院】</b><br><br>

<ruby>受付<rt>うけつけ</rt></ruby>は
午前8:30からです。<br>

それより前は
入れません。

</div><br>

8:15に病院へ来ました。

どうなりますか。
`,
choices:[
"<ruby>受付<rt>うけつけ</rt></ruby>できる",
"すぐ<ruby>診察<rt>しんさつ</rt></ruby>できる",
"まだ入れない",
"<ruby>薬<rt>くすり</rt></ruby>をもらえる"
],
answer:"まだ入れない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【ホテル】</b><br><br>

チェックインは
15:00からです。<br>

それより前は
<ruby>部屋<rt>へや</rt></ruby>に入れません。

</div><br>

14:00にホテルへ着きました。

正しいものはどれですか。
`,
choices:[
"すぐ部屋に入れる",
"まだ部屋に入れない",
"チェックアウトする",
"朝食を食べる"
],
answer:"まだ部屋に入れない"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【掲示】</b><br><br>

この教室では
飲み物は飲んでもいいです。<br>

しかし、
食べ物を食べては
いけません。

</div><br>

正しいものはどれですか。
`,
choices:[
"パンを食べる",
"おにぎりを食べる",
"ジュースを飲む",
"お弁当を食べる"
],
answer:"ジュースを飲む"
},
[
  {
    type: "reading",
    q: `
<div class="reading-text">
<b>【ごみの出し方】</b><br><br>

<ruby>燃<rt>もえ</rt></ruby>るごみは、<ruby>火曜日<rt>かようび</rt></ruby>と<ruby>金曜日<rt>きんようび</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>8<ruby>時<rt>じ</rt></ruby>までに出してください。<br>
<ruby>夜<rt>よる</rt></ruby>に出してはいけません。

</div><br>

<ruby>燃<rt>もえ</rt></ruby>るごみは、いつ出しますか。
`,
    choices: [
      "火曜日の夜",
      "金曜日の朝8時まで",
      "水曜日の朝8時まで",
      "毎日いつでも"
    ],
    answer: "金曜日の朝8時まで"
  },
  {
    type: "reading",
    q: `
<div class="reading-text">
<b>【さくらクリニック】</b><br><br>

<ruby>診療<rt>しんりょう</rt></ruby>時間：9:00 - 12:00 / 14:00 - 18:00<br>
<ruby>休診日<rt>きゅうしんび</rt></ruby>：<ruby>水曜日<rt>すいようび</rt></ruby>・<ruby>日曜日<rt>にちようび</rt></ruby>・<ruby>祝日<rt>しゅくじつ</rt></ruby><br>
※<ruby>土曜日<rt>どようび</rt></ruby>は<ruby>午前<rt>ごぜん</rt></ruby>のみです。

</div><br>

土曜日の午後2時に、クリニックへ行くことができますか。
`,
    choices: [
      "はい、行くことができます。",
      "いいえ、行くことができません。",
      "午前9時からなら行くことができます。",
      "水曜日なら行くことができます。"
    ],
    answer: "いいえ、行くことができません。"
  },
  {
    type: "reading",
    q: `
<div class="reading-text">
<b>【たなかさんからのメッセージ】</b><br><br>

キムさん、お疲れ様です。<br>
きょうの<ruby>会議<rt>かいぎ</rt></ruby>は、3<ruby>階<rt>かい</rt></ruby>ではなく<b>4<ruby>階<rt>かい</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby></b>でします。<br>
<ruby>時間<rt>じかん</rt></ruby>は<ruby>午後<rt>ごご</rt></ruby>2<ruby>時<rt>じ</rt></ruby>からです。<br>
よろしくお願いします。

</div><br>

キムさんは、どこへ行きますか。
`,
    choices: [
      "3階の部屋",
      "4階の部屋",
      "2階の部屋",
      "キムさんの部屋"
    ],
    answer: "4階の部屋"
  },
  {
    type: "reading",
    q: `
<div class="reading-text">
<b>【レストランの割引のお知らせ】</b><br><br>

<ruby>平日<rt>へいじつ</rt></ruby>（<ruby>月曜日<rt>げつようび</rt></ruby>〜<ruby>金曜日<rt>きんようび</rt></ruby>）の11:30〜14:00は、すべてのランチメニューが100<ruby>円<rt>えん</rt></ruby><ruby>安<rt>やす</rt></ruby>くなります。<br>
※<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>は安くなりません。

</div><br>

安くなるのは、いつですか。
`,
    choices: [
      "日曜日の昼",
      "土曜日の昼",
      "木曜日の昼",
      "金曜日の夜"
    ],
    answer: "木曜日の昼"
  },
  {
    type: "reading",
    q: `
<div class="reading-text">
<b>【エレベーター工事のお知らせ】</b><br><br>

3<ruby>月<rt>がつ</rt></ruby>10<ruby>日<rt>か</rt></ruby>（<ruby>月<rt>げつ</rt></ruby>）〜 3<ruby>月<rt>がつ</rt></ruby>12<ruby>日<rt>にち</rt></ruby>（<ruby>水<rt>すい</rt></ruby>）<br>
<ruby>工事<rt>こうじ</rt></ruby>のため、エレベーターを<ruby>使<rt>つか</rt></ruby>うことができません。<br>
<ruby>階段<rt>かいだん</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ってください。

</div><br>

3月11日に、エレベーターを使うことができますか。
`,
    choices: [
      "はい、使えます。",
      "いいえ、使えません。",
      "階段のあとで使えます。",
      "3月10日だけ使えません。"
    ],
    answer: "いいえ、使えません。"
  }
]
];