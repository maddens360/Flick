export default () => {
    const texts = [
        {
            "original": "イギリス領ヴァージン諸島",
            "hiragana": "いぎりすりょうゔぁーじんしょとう",
            "_id": "H9MDPMqNCeodOnoH"
        },
        {
            "original": "アゼルバイジャン",
            "hiragana": "あぜるばいじゃん",
            "_id": "yAXbKmfJezrGj0lR"
        },
        {
            "original": "アンギラ",
            "hiragana": "あんぎら",
            "_id": "TfFaePYik2M8QUk1"
        },
        {
            "original": "エクアドル",
            "hiragana": "えくあどる",
            "_id": "GnglnLjUqPmxDAz8"
        },
        {
            "original": "オーランド諸島",
            "hiragana": "おーらんどしょとう",
            "_id": "Pu2Sw58QAhgIIcc2"
        },
        {
            "original": "ウガンダ",
            "hiragana": "うがんだ",
            "_id": "AC1sy7NMNuz7rwq0"
        },
        {
            "original": "ウォリス・フツナ",
            "hiragana": "うぉりすふつな",
            "_id": "0L3qqy1e6joRR8Jf"
        },
        {
            "original": "イエメン",
            "hiragana": "いえめん",
            "_id": "9ZmWC9WUrxZENDVg"
        },
        {
            "original": "エチオピア",
            "hiragana": "えちおぴあ",
            "_id": "Bkx5QLmE2ElLckub"
        },
        {
            "original": "アイスランド",
            "hiragana": "あいすらんど",
            "_id": "iz1uFO3JHzZuM1Ri"
        },
        {
            "original": "クウェート",
            "hiragana": "くうぇーと",
            "_id": "kcW0RCYoarAB5g95"
        },
        {
            "original": "グアテマラ",
            "hiragana": "ぐあてまら",
            "_id": "hBHRwHItmTtcrVDZ"
        },
        {
            "original": "イギリス領インド洋地域",
            "hiragana": "いぎりすりょういんどようちいき",
            "_id": "BtulJYspkfARsAzZ"
        },
        {
            "original": "ガンビア",
            "hiragana": "がんびあ",
            "_id": "74IK6yoZOnTg3Hox"
        },
        {
            "original": "カンボジア",
            "hiragana": "かんぼじあ",
            "_id": "fUSzlP1rN3tveSsH"
        },
        {
            "original": "ギニアビサウ",
            "hiragana": "ぎにあびさう",
            "_id": "pOQqQZJIpJujt6tr"
        },
        {
            "original": "カナダ",
            "hiragana": "かなだ",
            "_id": "gcbsXtMIWK8h9cjY"
        },
        {
            "original": "ガイアナ",
            "hiragana": "がいあな",
            "_id": "bklBNIdxmslxiIcP"
        },
        {
            "original": "アルメニア",
            "hiragana": "あるめにあ",
            "_id": "r51IFz4Qwsb3e3wn"
        },
        {
            "original": "グルジア",
            "hiragana": "ぐるじあ",
            "_id": "qGteG1xgFcqu7Y0Q"
        },
        {
            "original": "アメリカ領サモア",
            "hiragana": "あめりかりょうさもあ",
            "_id": "kZguJ1DP9e85RbHs"
        },
        {
            "original": "イスラエル",
            "hiragana": "いすらえる",
            "_id": "KPSiOkVFyvxmuxiW"
        },
        {
            "original": "シリア",
            "hiragana": "しりあ",
            "_id": "7J89s4UulRFvU5vo"
        },
        {
            "original": "クック諸島",
            "hiragana": "くっくしょとう",
            "_id": "wo8F1QTPyq8VhlqN"
        },
        {
            "original": "アルジェリア",
            "hiragana": "あるじぇりあ",
            "_id": "ggPOioZ48q9LpzEp"
        },
        {
            "original": "アンドラ",
            "hiragana": "あんどら",
            "_id": "URit2ymw9LdtkwkG"
        },
        {
            "original": "アフガニスタン",
            "hiragana": "あふがにすたん",
            "_id": "kw9WyjWePtj5RvyZ"
        },
        {
            "original": "ウルグアイ",
            "hiragana": "うるぐあい",
            "_id": "briELZlj0E6J5lHR"
        },
        {
            "original": "ケニア",
            "hiragana": "けにあ",
            "_id": "CmUbGqH1T199qqY8"
        },
        {
            "original": "コンゴ民主共和国",
            "hiragana": "こんごみんしゅきょうわこく",
            "_id": "ASGqXWQwtNuKBqLX"
        },
        {
            "original": "エジプト",
            "hiragana": "えじぷと",
            "_id": "JxA2AHk6Scbb2F73"
        },
        {
            "original": "アルバニア",
            "hiragana": "あるばにあ",
            "_id": "SRZYHHQSwbC7EJwc"
        },
        {
            "original": "アメリカ領ヴァージン諸島",
            "hiragana": "あめりかりょうゔぁーじんしょとう",
            "_id": "M8TgnkESG06hS63m"
        },
        {
            "original": "イラク",
            "hiragana": "いらく",
            "_id": "8cILZ1FXZGeh19gA"
        },
        {
            "original": "アルゼンチン",
            "hiragana": "あるぜんちん",
            "_id": "OlulSMI9tVcZ67kc"
        },
        {
            "original": "エルサルバドル",
            "hiragana": "えるさるばどる",
            "_id": "h8vYUCUc9QYSg0cK"
        },
        {
            "original": "インド",
            "hiragana": "いんど",
            "_id": "8jPENP1GVopGa9K9"
        },
        {
            "original": "アンゴラ",
            "hiragana": "あんごら",
            "_id": "RcQXsqb3XFqT1XS5"
        },
        {
            "original": "インドネシア",
            "hiragana": "いんどねしあ",
            "_id": "kwApi4MqwfCvcoi5"
        },
        {
            "original": "北マリアナ諸島",
            "hiragana": "きたまりあなしょとう",
            "_id": "vtN42Ia2MYlfwm9s"
        },
        {
            "original": "コモロ",
            "hiragana": "こもろ",
            "_id": "fHOMfxxYKSspEmrC"
        },
        {
            "original": "グアドループ",
            "hiragana": "ぐあどるーぷ",
            "_id": "wNnZJIhR2mbUSeKT"
        },
        {
            "original": "サモア",
            "hiragana": "さもあ",
            "_id": "V5yDqGjsDc7EGepM"
        },
        {
            "original": "カタール",
            "hiragana": "かたーる",
            "_id": "8EwK4iNLWCzEXWhG"
        },
        {
            "original": "ココス諸島",
            "hiragana": "ここすしょとう",
            "_id": "nU9jSaVF2xV4PDqH"
        },
        {
            "original": "ウズベキスタン",
            "hiragana": "うずべきすたん",
            "_id": "BZ5xW8GMT5me7nRq"
        },
        {
            "original": "オマーン",
            "hiragana": "おまーん",
            "_id": "U82kkSA9qEgZy5Ls"
        },
        {
            "original": "キプロス",
            "hiragana": "きぷろす",
            "_id": "nU2KCfUrzH2HniJ4"
        },
        {
            "original": "合衆国領有小離島",
            "hiragana": "がっしゅうこくりょうゆうしょうりとう",
            "_id": "Mzi8MngPicqYpilr"
        },
        {
            "original": "キリバス",
            "hiragana": "きりばす",
            "_id": "cyTMQqRcnhL1doHz"
        },
        {
            "original": "イタリア",
            "hiragana": "いたりあ",
            "_id": "vtOLXkui6CW7Cyn7"
        },
        {
            "original": "アルバ",
            "hiragana": "あるば",
            "_id": "POsKNMGcY1Z6oxrz"
        },
        {
            "original": "サントメ・プリンシペ",
            "hiragana": "さんとめぷりんしぺ",
            "_id": "vb3tgAvRTKOKCiR9"
        },
        {
            "original": "アイルランド",
            "hiragana": "あいるらんど",
            "_id": "mjbVmW3vxsII03i9"
        },
        {
            "original": "スリランカ",
            "hiragana": "すりらんか",
            "_id": "UcD9vinWL013sYmf"
        },
        {
            "original": "アンティグア・バーブーダ",
            "hiragana": "あんてぃぐあばーぶーだ",
            "_id": "XNS86c09CQFBZm0v"
        },
        {
            "original": "オーストラリア",
            "hiragana": "おーすとらりあ",
            "_id": "yJpLI9Zvwoaujyvm"
        },
        {
            "original": "サウスジョージア・サウスサンドウィッチ諸島",
            "hiragana": "さうすじょーじあさうすさんどうぃっちしょとう",
            "_id": "mjoZpgL4OOq1Jjzb"
        },
        {
            "original": "イラン",
            "hiragana": "いらん",
            "_id": "S3Xxt3ImAqSrSYee"
        },
        {
            "original": "ジブチ",
            "hiragana": "じぶち",
            "_id": "2W2pu4eHJrGgRtvu"
        },
        {
            "original": "コートジボワール",
            "hiragana": "こーとじぼわーる",
            "_id": "u9QiFYx4IwjqWG8k"
        },
        {
            "original": "コスタリカ",
            "hiragana": "こすたりか",
            "_id": "8uEBWqKop4Vin3Ps"
        },
        {
            "original": "スワジランド",
            "hiragana": "すわじらんど",
            "_id": "6CnZKGXolbCgEE0b"
        },
        {
            "original": "ナイジェリア",
            "hiragana": "ないじぇりあ",
            "_id": "WWqn2ukDkVG3WfNL"
        },
        {
            "original": "トーゴ",
            "hiragana": "とーご",
            "_id": "qs5yrJ42CxHrH2mV"
        },
        {
            "original": "シント・マールテン",
            "hiragana": "しんとまーるてん",
            "_id": "sGLDQMM7pGwrAQnq"
        },
        {
            "original": "バハマ",
            "hiragana": "ばはま",
            "_id": "BopZlvRCJSKsxPD6"
        },
        {
            "original": "クロアチア",
            "hiragana": "くろあちあ",
            "_id": "ChOqkElCcSClgx5i"
        },
        {
            "original": "ソマリア",
            "hiragana": "そまりあ",
            "_id": "zr63e2yLv5szy0Hw"
        },
        {
            "original": "大韓民国",
            "hiragana": "だいかんみんこく",
            "_id": "5e8zXbdDp4gHMBTd"
        },
        {
            "original": "ガーナ",
            "hiragana": "がーな",
            "_id": "WcIYkGJm5fgIhE5v"
        },
        {
            "original": "チャド",
            "hiragana": "ちゃど",
            "_id": "KbRkvdZ2qcf64H96"
        },
        {
            "original": "赤道ギニア",
            "hiragana": "せきどうぎにあ",
            "_id": "4Tm998PWZmPPFaVB"
        },
        {
            "original": "ガボン",
            "hiragana": "がぼん",
            "_id": "sNKHWh7xiQHQYBsF"
        },
        {
            "original": "ノーフォーク島",
            "hiragana": "のーふぉーくとう",
            "_id": "hOqItrYQat8L1oOV"
        },
        {
            "original": "グレナダ",
            "hiragana": "ぐれなだ",
            "_id": "8h11xNBhfmvnikLj"
        },
        {
            "original": "ドミニカ国",
            "hiragana": "どみにかこく",
            "_id": "u2cjhK6rT79aApwr"
        },
        {
            "original": "グリーンランド",
            "hiragana": "ぐりーんらんど",
            "_id": "cgq5anHTcLH29YP0"
        },
        {
            "original": "西サハラ",
            "hiragana": "にしさはら",
            "_id": "neanRZdJn7ZqOkR1"
        },
        {
            "original": "ニカラグア",
            "hiragana": "にからぐあ",
            "_id": "hNXPHTpVY4pgqsHJ"
        },
        {
            "original": "セントビンセント・グレナディーン",
            "hiragana": "せんとびんせんとぐれなでぃーん",
            "_id": "p5qSjwkLaCOkdZ7r"
        },
        {
            "original": "キルギス",
            "hiragana": "きるぎす",
            "_id": "q0BBvFfk1K910XN1"
        },
        {
            "original": "朝鮮民主主義人民共和国",
            "hiragana": "ちょうせんみんしゅしゅぎじんみんきょうわこく",
            "_id": "C7DcFQ0ZUrpTjT7N"
        },
        {
            "original": "ケイマン諸島",
            "hiragana": "けいまんしょとう",
            "_id": "47hS3Uie7cZb3sUT"
        },
        {
            "original": "トリニダード・トバゴ",
            "hiragana": "とりにだーどとばご",
            "_id": "NWsSt4XGFK7TKoR2"
        },
        {
            "original": "アメリカ合衆国",
            "hiragana": "あめりかがっしゅうこく",
            "_id": "m5gisPFjn4SsUQbA"
        },
        {
            "original": "ニューカレドニア",
            "hiragana": "にゅーかれどにあ",
            "_id": "o1Y92rjIycom62mI"
        },
        {
            "original": "ガーンジー",
            "hiragana": "がーんじー",
            "_id": "s0GTCWZ7FoGOp6dP"
        },
        {
            "original": "グアム",
            "hiragana": "ぐあむ",
            "_id": "kHeb7o5k7SV63Eah"
        },
        {
            "original": "スリナム",
            "hiragana": "すりなむ",
            "_id": "WFH2lzpjetSTul5x"
        },
        {
            "original": "アラブ首長国連邦",
            "hiragana": "あらぶしゅちょうこくれんぽう",
            "_id": "YyebCjCe1T0BMobT"
        },
        {
            "original": "ギリシャ",
            "hiragana": "ぎりしゃ",
            "_id": "On21sXihY8WWwGNw"
        },
        {
            "original": "セントクリストファー・ネイビス",
            "hiragana": "せんとくりすとふぁーねいびす",
            "_id": "lpDHzNMHh1PKI5Ff"
        },
        {
            "original": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
            "hiragana": "せんとへれなあせんしょんおよびとりすたんだくーにゃ",
            "_id": "4GqH1oACQAiwKa1f"
        },
        {
            "original": "イギリス",
            "hiragana": "いぎりす",
            "_id": "Ax8kHY8uGrUnkIsG"
        },
        {
            "original": "ジブラルタル",
            "hiragana": "じぶらるたる",
            "_id": "aoFEsnBcJHU5yrDA"
        },
        {
            "original": "シンガポール",
            "hiragana": "しんがぽーる",
            "_id": "6FU6g8kA4850q4z1"
        },
        {
            "original": "タンザニア",
            "hiragana": "たんざにあ",
            "_id": "RUv4BKgTdeS3WZxr"
        },
        {
            "original": "ジャージー",
            "hiragana": "じゃーじー",
            "_id": "6WcZToHJup12xTB5"
        },
        {
            "original": "サン・バルテルミー",
            "hiragana": "さんばるてるみー",
            "_id": "3tac38whczcaQyjY"
        },
        {
            "original": "ジャマイカ",
            "hiragana": "じゃまいか",
            "_id": "v2yl5Pb35zGOOfph"
        },
        {
            "original": "中国",
            "hiragana": "ちゅうごく",
            "_id": "OYMkuzW2J46nTgGj"
        },
        {
            "original": "エリトリア",
            "hiragana": "えりとりあ",
            "_id": "DRE9Ng5oWJo9ZNn4"
        },
        {
            "original": "スロバキア",
            "hiragana": "すろばきあ",
            "_id": "LJ1kLWkV65SltRid"
        },
        {
            "original": "スイス",
            "hiragana": "すいす",
            "_id": "OwTFo1CkM513uEOk"
        },
        {
            "original": "サン・マルタン",
            "hiragana": "さんまるたん",
            "_id": "SUyKpZt08n9TI5mv"
        },
        {
            "original": "ギニア",
            "hiragana": "ぎにあ",
            "_id": "UHoiIVtpeK5XrjmI"
        },
        {
            "original": "台湾",
            "hiragana": "たいわん",
            "_id": "mUvOqXizP6AXigxY"
        },
        {
            "original": "ドイツ",
            "hiragana": "どいつ",
            "_id": "ATfTpqZ5fqHqwT2n"
        },
        {
            "original": "ドミニカ共和国",
            "hiragana": "どみにかきょうわこく",
            "_id": "jLt5dseNvsRaMTSc"
        },
        {
            "original": "カメルーン",
            "hiragana": "かめるーん",
            "_id": "rjZBcYQdwdDKz1eP"
        },
        {
            "original": "セーシェル",
            "hiragana": "せーしぇる",
            "_id": "F8nigCH4NC1MyMak"
        },
        {
            "original": "スーダン",
            "hiragana": "すーだん",
            "_id": "89lmWnHUNNwwJy9G"
        },
        {
            "original": "セントルシア",
            "hiragana": "せんとるしあ",
            "_id": "ZVyzXz6xgy9IGRpb"
        },
        {
            "original": "サンピエール島・ミクロン島",
            "hiragana": "さんぴえーるとうみくろんとう",
            "_id": "q3X7sUL2QbMiiwkV"
        },
        {
            "original": "オーストリア",
            "hiragana": "おーすとりあ",
            "_id": "OfJIjd5lNoa38GML"
        },
        {
            "original": "ウクライナ",
            "hiragana": "うくらいな",
            "_id": "f4DXskgzOvhrc5Au"
        },
        {
            "original": "エストニア",
            "hiragana": "えすとにあ",
            "_id": "opgFQ7YKtPpGeeZl"
        },
        {
            "original": "カーボベルデ",
            "hiragana": "かーぼべるで",
            "_id": "nzLMHO4hj17SXtu5"
        },
        {
            "original": "カザフスタン",
            "hiragana": "かざふすたん",
            "_id": "ERJwIhoodoSrFaVz"
        },
        {
            "original": "サウジアラビア",
            "hiragana": "さうじあらびあ",
            "_id": "0NOzTfszJPeGJjXk"
        },
        {
            "original": "スヴァールバル諸島およびヤンマイエン島",
            "hiragana": "すゔぁーるばるしょとうおよびやんまいえんとう",
            "_id": "y6mxmCtIB5K1JBHl"
        },
        {
            "original": "ソロモン諸島",
            "hiragana": "そろもんしょとう",
            "_id": "KxEKmi8kPan586zr"
        },
        {
            "original": "ツバル",
            "hiragana": "つばる",
            "_id": "u3MNQMQ3SWNhPKVH"
        },
        {
            "original": "トケラウ",
            "hiragana": "とけらう",
            "_id": "JJd244TDg5GneDf8"
        },
        {
            "original": "トルクメニスタン",
            "hiragana": "とるくめにすたん",
            "_id": "i5V8piTehlPvdi5S"
        },
        {
            "original": "サンマリノ",
            "hiragana": "さんまりの",
            "_id": "g8Dg8M6zNjCqATCd"
        },
        {
            "original": "オランダ",
            "hiragana": "おらんだ",
            "_id": "m1Nbcu8seF5pxf8D"
        },
        {
            "original": "キューバ",
            "hiragana": "きゅーば",
            "_id": "AQ8Z9CV8afwR4P8V"
        },
        {
            "original": "チリ",
            "hiragana": "ちり",
            "_id": "X0xz9GGzRZR1VKFF"
        },
        {
            "original": "スウェーデン",
            "hiragana": "すうぇーでん",
            "_id": "6ErOnGfYgV7s2kX6"
        },
        {
            "original": "チェコ",
            "hiragana": "ちぇこ",
            "_id": "YLkxabynQylSffmV"
        },
        {
            "original": "キュラソー",
            "hiragana": "きゅらそー",
            "_id": "eN5yiw0gHFANNswF"
        },
        {
            "original": "タジキスタン",
            "hiragana": "たじきすたん",
            "_id": "i9xr2h0m7QtsPp7p"
        },
        {
            "original": "クリスマス島",
            "hiragana": "くりすますとう",
            "_id": "KpiqKygUt5ZUfuaE"
        },
        {
            "original": "スペイン",
            "hiragana": "すぺいん",
            "_id": "Ec9zAcUa2a3Of1uV"
        },
        {
            "original": "セネガル",
            "hiragana": "せねがる",
            "_id": "8auPHsqmIkmc7mB2"
        },
        {
            "original": "パラグアイ",
            "hiragana": "ぱらぐあい",
            "_id": "l42C2sSvSsHZnyM8"
        },
        {
            "original": "スロベニア",
            "hiragana": "すろべにあ",
            "_id": "cypH7dUlQ7VZcuYT"
        },
        {
            "original": "ニュージーランド",
            "hiragana": "にゅーじーらんど",
            "_id": "hAjVgCpCrE28VRfz"
        },
        {
            "original": "トルコ",
            "hiragana": "とるこ",
            "_id": "yqQpYVlmiq1u0a0m"
        },
        {
            "original": "バルバドス",
            "hiragana": "ばるばどす",
            "_id": "8oRew09Kepe0aJ9n"
        },
        {
            "original": "日本",
            "hiragana": "にほん",
            "_id": "wQHNjp1QOeKW0oyI"
        },
        {
            "original": "ナウル",
            "hiragana": "なうる",
            "_id": "YCH6Ik97LEIHmbre"
        },
        {
            "original": "ノルウェー",
            "hiragana": "のるうぇー",
            "_id": "Z9VmH0TEOQWYax2X"
        },
        {
            "original": "コロンビア",
            "hiragana": "ころんびあ",
            "_id": "11Px4CPx497iRVwj"
        },
        {
            "original": "セルビア",
            "hiragana": "せるびあ",
            "_id": "2aFIkjcXRld0wUXL"
        },
        {
            "original": "コンゴ共和国",
            "hiragana": "こんごきょうわこく",
            "_id": "wTXntfQoyRT2daIR"
        },
        {
            "original": "ザンビア",
            "hiragana": "ざんびあ",
            "_id": "Qeqs5dNv10bJcIdh"
        },
        {
            "original": "タークス・カイコス諸島",
            "hiragana": "たーくすかいこすしょとう",
            "_id": "nG0EfH7gO8H01Aug"
        },
        {
            "original": "中央アフリカ共和国",
            "hiragana": "ちゅうおうあふりかきょうわこく",
            "_id": "swfheqfXHWIkYD4R"
        },
        {
            "original": "ジンバブエ",
            "hiragana": "じんばぶえ",
            "_id": "VZL2nC9Nq6VWDoPZ"
        },
        {
            "original": "チュニジア",
            "hiragana": "ちゅにじあ",
            "_id": "oGw7dKDc46sbBrGc"
        },
        {
            "original": "タイ",
            "hiragana": "たい",
            "_id": "8UKb0zKpv1mqLIio"
        },
        {
            "original": "ニウエ",
            "hiragana": "にうえ",
            "_id": "0W1SDht65iqM9oiO"
        },
        {
            "original": "バングラデシュ",
            "hiragana": "ばんぐらでしゅ",
            "_id": "sfW7LW8R0PdY7UHL"
        },
        {
            "original": "シエラレオネ",
            "hiragana": "しえられおね",
            "_id": "PqZpOKbmfNXPiaAA"
        },
        {
            "original": "ネパール",
            "hiragana": "ねぱーる",
            "_id": "8Mvqa3qiVDLvNHsb"
        },
        {
            "original": "東ティモール",
            "hiragana": "ひがしてぃもーる",
            "_id": "w72uW94ryv4qjl0K"
        },
        {
            "original": "フランス領ギアナ",
            "hiragana": "ふらんすりょうぎあな",
            "_id": "El1ciL0IAKMK1JDu"
        },
        {
            "original": "ピトケアン",
            "hiragana": "ぴとけあん",
            "_id": "af6nBZxmjNqsk36B"
        },
        {
            "original": "ポルトガル",
            "hiragana": "ぽるとがる",
            "_id": "YMZcRtv3bIMlOCGy"
        },
        {
            "original": "ペルー",
            "hiragana": "ぺるー",
            "_id": "8eSEFcZvBiHenNio"
        },
        {
            "original": "バミューダ",
            "hiragana": "ばみゅーだ",
            "_id": "dxWV7WdDY7bNyfpo"
        },
        {
            "original": "フィジー",
            "hiragana": "ふぃじー",
            "_id": "hbmwuiNEluvkIa6N"
        },
        {
            "original": "ベナン",
            "hiragana": "べなん",
            "_id": "lOtehCCY149y1JTJ"
        },
        {
            "original": "ブータン",
            "hiragana": "ぶーたん",
            "_id": "GYMzSgNY1nqcuRwc"
        },
        {
            "original": "フォークランド諸島",
            "hiragana": "ふぉーくらんどしょとう",
            "_id": "W5dcIWQDrBpHrbpU"
        },
        {
            "original": "パレスチナ",
            "hiragana": "ぱれすちな",
            "_id": "gt2DLfDdELBHUC6L"
        },
        {
            "original": "ブルガリア",
            "hiragana": "ぶるがりあ",
            "_id": "vyrMxfaajKCZ9Qru"
        },
        {
            "original": "パナマ",
            "hiragana": "ぱなま",
            "_id": "y6oKTGLt0QXs1Ip5"
        },
        {
            "original": "ハイチ",
            "hiragana": "はいち",
            "_id": "gjPMSJ04R0IL6rnR"
        },
        {
            "original": "パキスタン",
            "hiragana": "ぱきすたん",
            "_id": "DEHe3eTtksFG2D8L"
        },
        {
            "original": "フェロー諸島",
            "hiragana": "ふぇろーしょとう",
            "_id": "eAeaa86OP2LdaHfR"
        },
        {
            "original": "ブーベ島",
            "hiragana": "ぶーべとう",
            "_id": "csMubhONntRCxdTR"
        },
        {
            "original": "ハンガリー",
            "hiragana": "はんがりー",
            "_id": "vJltRMg0ucc1bc5E"
        },
        {
            "original": "パラオ",
            "hiragana": "ぱらお",
            "_id": "wJuwGX95EA9ctED6"
        },
        {
            "original": "バチカン",
            "hiragana": "ばちかん",
            "_id": "bpLPFmZZK7bDIkAg"
        },
        {
            "original": "フィンランド",
            "hiragana": "ふぃんらんど",
            "_id": "20fQpGHUOOz2ZgRu"
        },
        {
            "original": "パプアニューギニア",
            "hiragana": "ぱぷあにゅーぎにあ",
            "_id": "bHkGrYTvw6feT2VC"
        },
        {
            "original": "フランス領ポリネシア",
            "hiragana": "ふらんすりょうぽりねしあ",
            "_id": "GVZHkfVT5v0zjD0Q"
        },
        {
            "original": "ブルキナファソ",
            "hiragana": "ぶるきなふぁそ",
            "_id": "hEvrpTv6KeDPRpJo"
        },
        {
            "original": "ナミビア",
            "hiragana": "なみびあ",
            "_id": "wAcRfRBk21KDazvN"
        },
        {
            "original": "トンガ",
            "hiragana": "とんが",
            "_id": "VTteTkScnU7DoLJq"
        },
        {
            "original": "バーレーン",
            "hiragana": "ばーれーん",
            "_id": "X1g3OCUobX6HzCbj"
        },
        {
            "original": "ハード島とマクドナルド諸島",
            "hiragana": "はーどとうとまくどなるどしょとう",
            "_id": "jI8qRZJ9HW2zJvcu"
        },
        {
            "original": "プエルトリコ",
            "hiragana": "ぷえるとりこ",
            "_id": "xeg1Gh3Qyf2sVEzO"
        },
        {
            "original": "BES諸島",
            "hiragana": "びーいーえすしょとう",
            "_id": "irTJU1ISN12JMFfv"
        },
        {
            "original": "ブルンジ",
            "hiragana": "ぶるんじ",
            "_id": "rsbf1AeDhhDsz75B"
        },
        {
            "original": "ニジェール",
            "hiragana": "にじぇーる",
            "_id": "CusR3iNflfbdKJC6"
        },
        {
            "original": "ブルネイ",
            "hiragana": "ぶるねい",
            "_id": "noufIuXdRF6yePvY"
        },
        {
            "original": "フィリピン",
            "hiragana": "ふぃりぴん",
            "_id": "xwwdmvbOsJ83JFGN"
        },
        {
            "original": "バヌアツ",
            "hiragana": "ばぬあつ",
            "_id": "qZ3a3uXgNK1rRaH4"
        },
        {
            "original": "ブラジル",
            "hiragana": "ぶらじる",
            "_id": "H7ahU96Rwv99TfLk"
        },
        {
            "original": "南極",
            "hiragana": "なんきょく",
            "_id": "ITjjXtW8Dx1Xbv4r"
        },
        {
            "original": "フランス",
            "hiragana": "ふらんす",
            "_id": "Ub3TY0qIrr3IJA7M"
        },
        {
            "original": "デンマーク",
            "hiragana": "でんまーく",
            "_id": "ckN1CkUsxpMqWVQ8"
        },
        {
            "original": "フランス領南方・南極地域",
            "hiragana": "ふらんすりょうなんぽうなんきょくちいき",
            "_id": "xjpodKilElTe5uqp"
        },
        {
            "original": "マダガスカル",
            "hiragana": "まだがすかる",
            "_id": "sCeY551R4ZBU8n0X"
        },
        {
            "original": "ミャンマー",
            "hiragana": "みゃんまー",
            "_id": "of4OMc0BSugUZbV5"
        },
        {
            "original": "マルタ",
            "hiragana": "まるた",
            "_id": "pTVFMet0VOu5IWgU"
        },
        {
            "original": "モンゴル",
            "hiragana": "もんごる",
            "_id": "uXqrQXqlbwqbC3I0"
        },
        {
            "original": "マン島",
            "hiragana": "まんとう",
            "_id": "HLsFGTKv0At1IePQ"
        },
        {
            "original": "モナコ",
            "hiragana": "もなこ",
            "_id": "h4SAAozA3NQ2VOz7"
        },
        {
            "original": "レソト",
            "hiragana": "れそと",
            "_id": "AlMr0YOI9sYuQ3aE"
        },
        {
            "original": "ラオス",
            "hiragana": "らおす",
            "_id": "tu5XxvS0pXsD3gX9"
        },
        {
            "original": "レバノン",
            "hiragana": "ればのん",
            "_id": "RNUsXcQOrNSYAJyV"
        },
        {
            "original": "リベリア",
            "hiragana": "りべりあ",
            "_id": "iD3HrjmiVbTJjkqd"
        },
        {
            "original": "ボスニア・ヘルツェゴビナ",
            "hiragana": "ぼすにあへるつぇごびな",
            "_id": "3NwytvvI3s2HOsV0"
        },
        {
            "original": "ベリーズ",
            "hiragana": "べりーず",
            "_id": "ajw48UMb2x0lqhey"
        },
        {
            "original": "ベトナム",
            "hiragana": "べとなむ",
            "_id": "zY6ZfT3RI4dJatho"
        },
        {
            "original": "ベラルーシ",
            "hiragana": "べらるーし",
            "_id": "0GEXFoC5BxPKfpst"
        },
        {
            "original": "マケドニア共和国",
            "hiragana": "まけどにあきょうわこく",
            "_id": "iCkfhYhGXSENtE5A"
        },
        {
            "original": "マリ",
            "hiragana": "まり",
            "_id": "s4uqJeYZqdgwZrcK"
        },
        {
            "original": "マラウイ",
            "hiragana": "まらうい",
            "_id": "uOhBKCvM9BqgVxYU"
        },
        {
            "original": "マーシャル諸島",
            "hiragana": "まーしゃるしょとう",
            "_id": "RROiJgYmsny4TRtR"
        },
        {
            "original": "ホンジュラス",
            "hiragana": "ほんじゅらす",
            "_id": "5lqiANwUNUmcSJA1"
        },
        {
            "original": "モルディブ",
            "hiragana": "もるでぃぶ",
            "_id": "GZd7wADtMTy3zDSm"
        },
        {
            "original": "マヨット",
            "hiragana": "まよっと",
            "_id": "yeUiZ24WT0zu2xkF"
        },
        {
            "original": "マカオ",
            "hiragana": "まかお",
            "_id": "m5YTFJTJF5tnhZLo"
        },
        {
            "original": "マルティニーク",
            "hiragana": "まるてぃにーく",
            "_id": "6p5a5yjAtUnspYTK"
        },
        {
            "original": "メキシコ",
            "hiragana": "めきしこ",
            "_id": "EvjqyMArItLmDsIz"
        },
        {
            "original": "ベルギー",
            "hiragana": "べるぎー",
            "_id": "pC6UfzO7vXDBjGOt"
        },
        {
            "original": "ボリビア",
            "hiragana": "ぼりびあ",
            "_id": "5rgOXeJr1EGIwboz"
        },
        {
            "original": "ミクロネシア連邦",
            "hiragana": "みくろねしあれんぽう",
            "_id": "U2zUJK82pkPYc8MJ"
        },
        {
            "original": "ポーランド",
            "hiragana": "ぽーらんど",
            "_id": "I7IkLeGSPz9aHB0w"
        },
        {
            "original": "モントセラト",
            "hiragana": "もんとせらと",
            "_id": "V1T7yMx5pxd1Fiu6"
        },
        {
            "original": "リトアニア",
            "hiragana": "りとあにあ",
            "_id": "kJPpEKkodyOAFckP"
        },
        {
            "original": "ラトビア",
            "hiragana": "らとびあ",
            "_id": "cewuMcQiKdyuws0W"
        },
        {
            "original": "モンテネグロ",
            "hiragana": "もんてねぐろ",
            "_id": "lCHrELT2OeJakZU3"
        },
        {
            "original": "レユニオン",
            "hiragana": "れゆにおん",
            "_id": "uKwOPgObM1spnAhr"
        },
        {
            "original": "ロシア",
            "hiragana": "ろしあ",
            "_id": "qXoEcoHW1TBjSw7D"
        },
        {
            "original": "モルドバ",
            "hiragana": "もるどば",
            "_id": "FDQmzqvdsmV3bO7S"
        },
        {
            "original": "ルーマニア",
            "hiragana": "るーまにあ",
            "_id": "DEXGa2i4a9LYf6A6"
        },
        {
            "original": "ボツワナ",
            "hiragana": "ぼつわな",
            "_id": "BDx8WYaZiuy6xxTW"
        },
        {
            "original": "モーリタニア",
            "hiragana": "もーりたにあ",
            "_id": "OC1aEt5kpL8yruTk"
        },
        {
            "original": "南スーダン",
            "hiragana": "みなみすーだん",
            "_id": "0w1YyTZc3nqGJXSc"
        },
        {
            "original": "モロッコ",
            "hiragana": "もろっこ",
            "_id": "zHlMhlu36Qol6NVr"
        },
        {
            "original": "ヨルダン",
            "hiragana": "よるだん",
            "_id": "84tj2rFoD3Zgrtpd"
        },
        {
            "original": "リビア",
            "hiragana": "りびあ",
            "_id": "PQnvAgEI6yzyeKjq"
        },
        {
            "original": "リヒテンシュタイン",
            "hiragana": "りひてんしゅたいん",
            "_id": "Db5yoj4LM8pi7dHj"
        },
        {
            "original": "モーリシャス",
            "hiragana": "もーりしゃす",
            "_id": "pSsmbjtpBtgyt1po"
        },
        {
            "original": "ベネズエラ",
            "hiragana": "べねずえら",
            "_id": "XOGLaA4krzel8QY2"
        },
        {
            "original": "モザンビーク",
            "hiragana": "もざんびーく",
            "_id": "EwXMiRmR55frlZgo"
        },
        {
            "original": "香港",
            "hiragana": "ほんこん",
            "_id": "qV2vF7lCEK6hUAmu"
        },
        {
            "original": "南アフリカ",
            "hiragana": "みなみあふりか",
            "_id": "AkVyYvOAQJMsYiQt"
        },
        {
            "original": "マレーシア",
            "hiragana": "まれーしあ",
            "_id": "d4hhTQvmyWpNGMpJ"
        },
        {
            "original": "ルクセンブルク",
            "hiragana": "るくせんぶるく",
            "_id": "RFbr9W1MZciqkPJ8"
        },
        {
            "original": "ルワンダ",
            "hiragana": "るわんだ",
            "_id": "ByOfTBzFdj0TMKj0"
        }
    ];
    return texts[Math.floor(Math.random() * texts.length)]
}
