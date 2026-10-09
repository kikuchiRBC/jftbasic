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
  type: "reading",
  q: `
<div class="reading-text">

<b>【メモ】</b><br><br>

あしたは
<ruby>病院<rt>びょういん</rt></ruby>へ
<ruby>行<rt>い</rt></ruby>きます。<br>

<ruby>受付<rt>うけつけ</rt></ruby>は
<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>です。<br>

<ruby>診察<rt>しんさつ</rt></ruby>は
10<ruby>時<rt>じ</rt></ruby>からです。<br>

<ruby>遅<rt>おく</rt></ruby>れないように、
15<ruby>分<rt>ふん</rt></ruby>
<ruby>前<rt>まえ</rt></ruby>に
来てください。

</div><br><br>

<ruby>病院<rt>びょういん</rt></ruby>の
<ruby>受付<rt>うけつけ</rt></ruby>は
何時ですか。
`,
  choices: [
    "8時45分です。",
    "9時です。",
    "10時です。",
    "10時15分です。"
  ],
  answer: "9時です。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【お知らせ】</b><br><br>

もえるゴミは
<ruby>月曜日<rt>げつようび</rt></ruby>と
<ruby>木曜日<rt>もくようび</rt></ruby>に
<ruby>出<rt>だ</rt></ruby>してください。

もえないゴミは
<ruby>火曜日<rt>かようび</rt></ruby>と
<ruby>金曜日<rt>きんようび</rt></ruby>に
<ruby>出<rt>だ</rt></ruby>してください。

</div><br>

たべもののゴミは
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
<b>【学校】</b><br><br>

あした
<ruby>日本語<rt>にほんご</rt></ruby>のテストが10時からあります。<br>
1時間前に
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
},{
  type: "reading",
  q: `
<div class="reading-text">

<b>【お知らせ】</b><br><br>

エレベーターは
<ruby>点検<rt>てんけん</rt></ruby>のため、
きょうは
<ruby>利用<rt>りよう</rt></ruby>できません。<br>

ただし、
<ruby>荷物用<rt>にもつよう</rt></ruby>エレベーターは
9:00から17:00まで
<ruby>利用<rt>りよう</rt></ruby>できます。<br><br>

お<ruby>急<rt>いそ</rt></ruby>ぎの
<ruby>方<rt>かた</rt></ruby>は
<ruby>階段<rt>かいだん</rt></ruby>を
<ruby>利用<rt>りよう</rt></ruby>してください。

</div><br><br>

きょう、
ふつうのエレベーターを
<ruby>使<rt>つか</rt></ruby>うことができますか。
`,
  choices: [
    "はい、使えます。",
    "いいえ、使えません。",
    "17:00から使えます。",
    "荷物用エレベーターだけ使えません。"
  ],
  answer: "いいえ、使えません。"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【メモ】</b><br><br>

れいぞうこに
ぎゅうにゅうが
ありません。<br>

パンとたまごはあります。<br>
みずもありませんが、いりません。<br>

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

あしたは9時から
<ruby>遠足<rt>えんそく</rt></ruby>です。<br>

2年生は<ruby>朝<rt>あさ</rt></ruby>9時に
学校へ来てください。
それ以外のひとたちは、朝<rt>あさ</rt></ruby>8時に
学校へ来てください。


</div><br>

1年生は何時に学校へ行きますか。
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
  type: "reading",
  q: `
<div class="reading-text">

<b>【会社からのお知らせ】</b><br><br>

きょうの
<ruby>営業部<rt>えいぎょうぶ</rt></ruby>の
<ruby>会議<rt>かいぎ</rt></ruby>は
15:00から16:00までです。<br>

<ruby>参加<rt>さんか</rt></ruby>する人は
14:50までに
<ruby>会議室<rt>かいぎしつ</rt></ruby>へ
来てください。<br>

<ruby>会議<rt>かいぎ</rt></ruby>のあと、
16:15から
<ruby>研修<rt>けんしゅう</rt></ruby>があります。

</div><br><br>

<ruby>会議<rt>かいぎ</rt></ruby>は
何時からですか。
`,
  choices: [
    "14:50",
    "15:00",
    "16:00",
    "16:15"
  ],
  answer: "15:00"
},

{
type:"reading",
q:`
<div class="reading-text">
<b>【ホテル】</b><br><br>

朝ごはんは
1階のレストランで
食べられます。<br>
昼ごはんは
へやで食べられます。<br>


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
5時から<ruby>残業<rt>ざんぎょう</rt></ruby>です。<br>

仕事は
2時間後に終わります。

</div><br>

仕事は何時に終わりますか。
`,
choices:[
"2時",
"5時",
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
ハンバーグとサンドイッチです。<br>

サラダとスープが
ついています。

昨日のおすすめはうどんでした。
</div><br>

今日のおすすめの料理は何ですか。
`,
choices:[
"サラダ",
"スープ",
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
<ruby>診察<rt>しんさつ</rt></ruby>しています。<br>

午後は休みです。

</div><br>

土曜日の13時は<ruby>診察<rt>しんさつ</rt></ruby>していますか。
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

4個買おうと思いましたが、
1個はもどしました。

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

<ruby>週<rt>しゅう</rt></ruby>3<ruby>日以上<rt>かいじょう</rt></ruby><br>

<ruby>土曜日<rt>どようび</rt></ruby>・
<ruby>日曜日<rt>にちようび</rt></ruby>に
<ruby>働<rt>はたら</rt></ruby>ける
<ruby>人<rt>ひと</rt></ruby>だけ<ruby>応募<rt>おうぼ</rt></ruby>してください。

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

ダメなものは
どれですか。
`,
choices:[
"月曜日の朝に出す",
"火曜日の朝に出す",
"金曜日の朝に出す"
],
answer:"月曜日の朝に出す"
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
"20円",
"200円",
"178円",
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

リーさんはこの仕事をしたことがないですが、
<ruby>午前<rt>ごぜん</rt></ruby>7:00から
12:00まで
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
  type: "reading",
  q: `
<div class="reading-text">

<b>【アパートのおしらせ】</b><br><br>

<ruby>共用<rt>きょうよう</rt></ruby>キッチンは
<ruby>毎日<rt>まいにち</rt></ruby>6:00から22:00まで
<ruby>利用<rt>りよう</rt></ruby>できます。<br>

22:00<ruby>以降<rt>いこう</rt></ruby>は
<ruby>近所<rt>きんじょ</rt></ruby>の
<ruby>迷惑<rt>めいわく</rt></ruby>になるため、
<ruby>利用<rt>りよう</rt></ruby>できません。<br>

また、
<ruby>毎週<rt>まいしゅう</rt></ruby>
<ruby>月曜日<rt>げつようび</rt></ruby>の
21:00から22:00までは、
<ruby>清掃<rt>せいそう</rt></ruby>のため
<ruby>利用<rt>りよう</rt></ruby>できません。

</div><br><br>

<ruby>月曜日<rt>げつようび</rt></ruby>の21:30に
キッチンを
<ruby>使<rt>つか</rt></ruby>うことができますか。
`,
  choices: [
    "使える",
    "使えない",
    "22:00から使える",
    "<ruby>管理人<rt>かんりにん</rt></ruby>に聞かなければならない"
  ],
  answer: "使えない"
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
  type: "reading",
  q: `
<div class="reading-text">

<b>【スーパー】</b><br><br>

りんご　120円<br>
バナナ　180円<br>
みかん　150円<br><br>

くだものを3つ以上買うと、
合計から50円引きになります。<br><br>

りんごを2つ、
バナナを1つ買いました。

</div><br><br>

合計はいくらですか。
`,
  choices: [
    "370円",
    "390円",
    "420円",
    "470円"
  ],
  answer: "370円"
},

{
type:"reading",
q:`
<div class="reading-text">

<b>【図書館】</b><br><br>

<ruby>飲<rt>の</rt></ruby>みものは<ruby>持<rt>も</rt></ruby>ちこめません。
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
  type: "reading",
  q: `
<div class="reading-text">

<b>【お知らせ】</b><br><br>

プールは
<ruby>清掃<rt>せいそう</rt></ruby>のため、
7月10日から12日まで
<ruby>利用<rt>りよう</rt></ruby>できません。<br><br>

ただし、13日は
10:00から
<ruby>利用<rt>りよう</rt></ruby>できます。

</div><br><br>

7月11日に
プールを
<ruby>使<rt>つか</rt></ruby>うことができますか。
`,
  choices: [
    "使える",
    "使えない",
    "午前だけ使える",
    "午後だけ使える"
  ],
  answer: "使えない"
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

前日に<ruby>きょか<rt>きょか</rt></ruby>をもらえばおけます。

</div><br>

友達の自転車を
置くことができますか。
`,
choices:[
"できる",
"できない",
"夜だけできる",
"許可をもらえばできる"
],
answer:"許可をもらえばできる"
},
{
  type: "reading",
  q: `
<div class="reading-text">

<b>【スーパー】</b><br><br>

<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>　220円<br>
パン　180円<br>
<ruby>たまご<rt>たまご</rt></ruby>　250円<br><br>

パンを2つ
<ruby>買<rt>か</rt></ruby>うと、
2つ<ruby>目<rt>め</rt></ruby>は50円
<ruby>引<rt>び</rt></ruby>きになります。<br><br>

<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>を1本と
パンを2つ
<ruby>買<rt>か</rt></ruby>いました。

</div><br><br>

<ruby>合計<rt>ごうけい</rt></ruby>はいくらですか。
`,
  choices: [
    "480円",
    "530円",
    "580円",
    "600円"
  ],
  answer: "530円"
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
  },
  {
  type: "reading",
  q: `
<div class="reading-text">
父はご飯とみそしるが好きです。やさいも食べます。パンはあまり好きじゃないです。

母もご飯とみそしるが好きです。パンもよく食べます。母は卵はあまり食べません。魚はよく食べます。

私はいつもご飯と肉を食べます。魚も好きです。パンはあまり食べません。くだものも好きじゃないです。
</div><br><br>

父が食べるものはどれですか。
`,
  choices: [
    "みそしる、やさい、ごはん",
    "パン、みそしる、やさい",
    "パン、みそしる、魚",
    "たまご、パン、ごはん"
  ],
  answer: "みそしる、やさい、ごはん"
},
{
  type: "reading",
  q: `
<div class="reading-text">
私は北海道に住んでいます。私の家はアパートです。一人で住んでいます。私の家は古いです。でも、明るいです。近くに公園があります。
</div><br><br>

ここにあっているものはどれですか。
`,
  choices: [
    "私は北海道にあるホテルで住んでいます。",
    "私が住んでいるアパートは明るくて古いです。",
    "私は北海道にある公園の近くに住んでいます。"
  ],
  answer: "私が住んでいるアパートは明るくて古いです。"
},
{
  type: "reading",
  q: `
<div class="reading-text">
田中さん、

来週の食事はいつがいいですか。

私は月曜日から金曜日まで会社に行きます。会社は６時までです。残業しません。火曜日は病院に行きます。水曜日はフランス語の学校に行きます。週末は休みです。

みちこ
</div><br><br>

みちこさんの休みの日はいつですか。
`,
  choices: [
    "土曜日と日曜日",
    "月曜日と水曜日",
    "土曜日と月曜日"
  ],
  answer: "土曜日と日曜日"
},
{
  type: "reading",
  q: `
<div class="reading-text">
ワンさん、

今年の8月に私は一人で、日本に行きました。東京で友達に会いました。それから、いっしょに有名なお寺を見に行きました。とてもおもしろかったです。でも、あまり買い物をしませんでした。次は東京でたくさん買い物をしたいです。

リン
</div><br><br>

ここにあっているものはどれですか。
`,
  choices: [
    "この人は東京でたくさん買い物をしました。",
    "この人は友達といっしょにお寺へ行きました。",
    "この人は一人で買い物へ行きました。"
  ],
  answer: "この人は友達といっしょにお寺へ行きました。"
},
{
  type: "reading",
  q: `
<div class="reading-text">
アリさん、

先に学校に行きます。教室であいましょう。電気をけして出かけてください。先生にかりた本をわすれないでくださいね。

みちこ
</div><br><br>

アリさんは出かける前に何をしますか。
`,
  choices: [
    "学校にいきます。",
    "電気をけします。",
    "先生にかりた本を読みます。"
  ],
  answer: "電気をけします。"
},
{
  type: "reading",
  q: `
<div class="reading-text">
日曜日、誕生日のパーティーをしました。うちに子供の家族が来ました。いっしょに庭でバーベキューをしました。まごにプレゼントをもらいました。うれしかったです。
</div><br><br>

今日かれは何をしましたか。
`,
  choices: [
    "おじいさんの誕生日をいわうために家族といっしょにパーティーをしました。",
    "まごの誕生日パーティーはおじいさんのうちにしました。",
    "家族といっしょにりょこうをしました。"
  ],
  answer: "おじいさんの誕生日をいわうために家族といっしょにパーティーをしました。"
},
{
  type: "reading",
  q: `
<div class="reading-text">
日曜日に留学生センターで料理をしました。いろいろな国の留学生が来ていました。10時から自分の国の料理を作りました。12時にみんなで食べてどれがいちばんおいしいか選びました。いちばんおいしかったのはチンさんのぎょうざで27点でした。にばんは私のカレーで22点でした。さんばんはスミスさんのハンバーガーで18点でした。
</div><br><br>

いちばんおいしかったのはどれですか。
`,
  choices: [
    "ぎょうざ",
    "カレー",
    "ハンバーガー"
  ],
  answer: "ぎょうざ"
},
{
  type: "reading",
  q: `
<div class="reading-text">
友達に手紙を書きました。写真をいっしょにおくりたいです。手紙はふつうにいれて15グラム、写真は1まい4グラムです。写真は何まいいれたいです。いちばん安くおくりたいです。

【料金】
はがき　　　　　　50円
手紙　25gまで　　80円
手紙　50gまで　　90円
</div><br><br>

写真は何まいいれることができますか。
`,
  choices: [
    "1まい",
    "2まい",
    "3まい"
  ],
  answer: "2まい"
},
{
  type: "reading",
  q: `
<div class="reading-text">
朝は時間がありません。駅でパンを買って食べます。昼も会社が忙しいですから、たいていパンとぎゅうにゅうです。晩ご飯は家のそばのレストランでゆっくりご飯を食べます。
</div><br><br>

この人はいつもどんなものを食べていますか。
`,
  choices: [
    "朝も夜もパンを食べます",
    "朝と昼はパンで、夜はそばを食べます",
    "朝、昼はパンで夜はレストランでご飯を食べます"
  ],
  answer: "朝、昼はパンで夜はレストランでご飯を食べます"
},
{
  type: "reading",
  q: `
<div class="reading-text">
【さくら博物館のサービス】

今日、さくら博物館に行きました。とてもおもしろかったです。
毎週木曜日に無料の外国語ガイドツアーがあります。
もうしこみは必要ありません。いつもたくさんの人が参加するそうですから、早く行った方がいいです。

日本の文化をもっと知るために、毎月10日と25日にセミナーがあります。
セミナーはもうしこみが必要なので、気をつけてください。
くわしいことは博物館のサイトを見てください。

URL：www.museum-sakura.kyoto.jp

博物館の2階には日本的なカフェがあります。
まっちゃのアイスクリームがおいしかったです。
ぜひ行ってみてください。
</div>

<br><br>

① 外国語ガイドツアーは週に何回ありますか。
`,
  choices: [
    "1回です",
    "2回です",
    "3回です"
  ],
  answer: "1回です"
},
{
  type: "reading",
  q: `
<div class="reading-text">
【さくら博物館のサービス】

今日、さくら博物館に行きました。とてもおもしろかったです。
毎週木曜日に無料の外国語ガイドツアーがあります。
もうしこみは必要ありません。いつもたくさんの人が参加するそうですから、早く行った方がいいです。

日本の文化をもっと知るために、毎月10日と25日にセミナーがあります。
セミナーはもうしこみが必要なので、気をつけてください。
くわしいことは博物館のサイトを見てください。

URL：www.museum-sakura.kyoto.jp

博物館の2階には日本的なカフェがあります。
まっちゃのアイスクリームがおいしかったです。
ぜひ行ってみてください。
</div>

<br><br>

② 博物館のカフェのアイスクリームはどうでしたか。
`,
  choices: [
    "おいしくなかった",
    "おいしかった",
    "わからない"
  ],
  answer: "おいしかった"
}

]
];