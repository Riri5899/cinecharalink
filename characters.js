const characters = [

  // =====================================================
  // 1〜10 ハリー・ポッター
  // =====================================================

  {
    id: "harry-potter",
    name: "ハリー・ポッター",
    originalName: "Harry Potter",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "主人公",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "勇敢で仲間思い。強い正義感を持つ。",
    features: ["魔法使い", "ホグワーツ", "グリフィンドール"],
    relationships: ["ロン・ウィーズリー", "ハーマイオニー・グレンジャー", "アルバス・ダンブルドア"],
    description: "幼い頃に両親を失い、11歳で自分が魔法使いであることを知る少年。ホグワーツで仲間と出会い、自分の過去と魔法界を揺るがす宿命に向き合っていく。",
    highlight: "友情や勇気だけでなく、自分自身の選択によって運命を切り開いていく成長が大きな魅力。",
    keywords: ["魔法", "主人公", "ホグワーツ", "友情", "グリフィンドール"]
  },

  {
    id: "hermione-granger",
    name: "ハーマイオニー・グレンジャー",
    originalName: "Hermione Granger",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "ハリーの親友",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "努力家で知的。責任感が強い。",
    features: ["魔法使い", "優秀な生徒", "豊富な知識"],
    relationships: ["ハリー・ポッター", "ロン・ウィーズリー"],
    description: "勉強熱心で非常に優秀な魔法使い。豊富な知識と冷静な判断力で、ハリーたちが直面する数々の危機を支える。",
    highlight: "知識だけでなく行動力と勇気も持ち合わせ、物語が進むほど頼れる存在へ成長していく。",
    keywords: ["魔法", "知性", "ホグワーツ", "友情", "グリフィンドール"]
  },

  {
    id: "ron-weasley",
    name: "ロン・ウィーズリー",
    originalName: "Ron Weasley",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "ハリーの親友",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "陽気で親しみやすく、仲間思い。",
    features: ["魔法使い", "ウィーズリー家", "チェスが得意"],
    relationships: ["ハリー・ポッター", "ハーマイオニー・グレンジャー"],
    description: "魔法使いの大家族ウィーズリー家に生まれた少年。ハリーにとって最初の親友の一人となり、多くの冒険を共にする。",
    highlight: "迷いや嫉妬を抱えながらも、大切な場面では仲間のために勇気を示す人間らしさが魅力。",
    keywords: ["魔法", "友情", "ウィーズリー", "ホグワーツ"]
  },

  {
    id: "albus-dumbledore",
    name: "アルバス・ダンブルドア",
    originalName: "Albus Dumbledore",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー"],
    role: "ホグワーツ校長",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "穏やかで思慮深い。",
    features: ["強大な魔法使い", "校長", "指導者"],
    relationships: ["ハリー・ポッター", "セブルス・スネイプ"],
    description: "ホグワーツ魔法魔術学校の校長。魔法界でも特に高い実力と知恵を持ち、ハリーの成長を見守る。",
    highlight: "優しい指導者としての姿と、過去や計画に関する複雑な一面の両方を持つ。",
    keywords: ["校長", "魔法", "ホグワーツ", "指導者"]
  },

  {
    id: "severus-snape",
    name: "セブルス・スネイプ",
    originalName: "Severus Snape",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー", "ドラマ"],
    role: "ホグワーツ教師",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "厳格で冷淡に見える。",
    features: ["魔法薬", "教師", "複雑な過去"],
    relationships: ["ハリー・ポッター", "アルバス・ダンブルドア"],
    description: "ホグワーツで魔法薬学などを教える教師。ハリーに厳しく接する一方、その行動には簡単には説明できない背景がある。",
    highlight: "物語の進行によって人物像の見え方が大きく変化する、シリーズでも特に複雑な人物。",
    keywords: ["教師", "魔法薬", "ホグワーツ", "謎"]
  },

  {
    id: "lord-voldemort",
    name: "ヴォルデモート",
    originalName: "Lord Voldemort",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー"],
    role: "主要な敵",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "冷酷で支配欲が強い。",
    features: ["闇の魔法使い", "強大な魔力", "宿敵"],
    relationships: ["ハリー・ポッター", "アルバス・ダンブルドア"],
    description: "魔法界に大きな恐怖をもたらした闇の魔法使い。ハリーの過去と深く関係しており、シリーズ全体を通じた最大級の脅威となる。",
    highlight: "死への恐怖と力への執着が、ハリーとの対照的な価値観を生み出している。",
    keywords: ["悪役", "闇の魔法", "宿敵", "魔法"]
  },

  {
    id: "draco-malfoy",
    name: "ドラコ・マルフォイ",
    originalName: "Draco Malfoy",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー"],
    role: "ハリーの同級生",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "プライドが高く挑発的。",
    features: ["スリザリン", "純血の魔法使いの家系", "ライバル"],
    relationships: ["ハリー・ポッター", "ルシウス・マルフォイ"],
    description: "スリザリン寮に所属する魔法使い。ハリーとたびたび対立するが、成長するにつれて家族や周囲からの期待との間で揺れる。",
    highlight: "単純なライバルから、葛藤を抱える人物へ変化していく点が見どころ。",
    keywords: ["ライバル", "スリザリン", "魔法", "ホグワーツ"]
  },

  {
    id: "rubeus-hagrid",
    name: "ルビウス・ハグリッド",
    originalName: "Rubeus Hagrid",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー"],
    role: "ホグワーツの森番",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "心優しく情に厚い。",
    features: ["大柄", "魔法生物好き", "森番"],
    relationships: ["ハリー・ポッター", "アルバス・ダンブルドア"],
    description: "ハリーを魔法界へ導いた人物の一人。危険とされる魔法生物にも愛情を注ぐ、心優しい存在。",
    highlight: "ハリーたちにとって家族のような安心感を与える人物。",
    keywords: ["魔法生物", "ホグワーツ", "友情", "森番"]
  },

  {
    id: "sirius-black",
    name: "シリウス・ブラック",
    originalName: "Sirius Black",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー", "ドラマ"],
    role: "ハリーの名付け親",
    firstAppearance: "ハリー・ポッターとアズカバンの囚人",
    personality: "大胆で情熱的。",
    features: ["アニメーガス", "名付け親", "脱獄者"],
    relationships: ["ハリー・ポッター", "リーマス・ルーピン"],
    description: "ハリーの両親と深い関係を持つ魔法使い。長い年月を経てハリーの人生に重要な存在として関わっていく。",
    highlight: "ハリーにとって家族を感じさせる存在であり、自由を求める性格も印象的。",
    keywords: ["名付け親", "アズカバン", "魔法", "家族"]
  },

  {
    id: "luna-lovegood",
    name: "ルーナ・ラブグッド",
    originalName: "Luna Lovegood",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー"],
    role: "ホグワーツの生徒",
    firstAppearance: "ハリー・ポッターと不死鳥の騎士団",
    personality: "独創的で穏やか。",
    features: ["レイブンクロー", "独特の感性", "仲間思い"],
    relationships: ["ハリー・ポッター", "ネビル・ロングボトム"],
    description: "独特の価値観を持つホグワーツの生徒。周囲に流されず、自分が信じることを自然体で受け入れている。",
    highlight: "少し変わって見えても他人を偏見で判断しない優しさが魅力。",
    keywords: ["レイブンクロー", "友情", "魔法", "個性"]
  },


  // =====================================================
  // 11〜20 スター・ウォーズ
  // =====================================================

  {
    id: "luke-skywalker",
    name: "ルーク・スカイウォーカー",
    originalName: "Luke Skywalker",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "主人公",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "理想を信じる勇敢な青年。",
    features: ["ジェダイ", "フォース", "ライトセーバー"],
    relationships: ["レイア・オーガナ", "ハン・ソロ", "ダース・ベイダー"],
    description: "辺境の惑星で暮らしていた青年。銀河規模の戦いへ巻き込まれ、フォースとジェダイの道を知ることになる。",
    highlight: "未熟な青年から、自分自身の信念を持つ人物へ成長していく過程。",
    keywords: ["ジェダイ", "フォース", "宇宙", "主人公"]
  },

  {
    id: "leia-organa",
    name: "レイア・オーガナ",
    originalName: "Leia Organa",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "反乱軍の指導者",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "勇敢で意志が強い。",
    features: ["プリンセス", "指導者", "反乱軍"],
    relationships: ["ルーク・スカイウォーカー", "ハン・ソロ"],
    description: "帝国に抵抗する反乱勢力の中心人物の一人。政治的判断力と高い行動力を持つ。",
    highlight: "救われるだけの人物ではなく、自ら戦いを動かす強いリーダーとして描かれる。",
    keywords: ["反乱軍", "リーダー", "宇宙", "プリンセス"]
  },

  {
    id: "han-solo",
    name: "ハン・ソロ",
    originalName: "Han Solo",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "宇宙船パイロット",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "皮肉屋だが仲間思い。",
    features: ["密輸業者", "パイロット", "ミレニアム・ファルコン"],
    relationships: ["レイア・オーガナ", "チューバッカ", "ルーク・スカイウォーカー"],
    description: "ミレニアム・ファルコンを操る腕利きのパイロット。当初は自分の利益を優先するが、仲間との関係を通じて変化していく。",
    highlight: "軽妙な会話と大胆な行動、そして隠れた情の深さが魅力。",
    keywords: ["パイロット", "宇宙船", "反乱軍", "冒険"]
  },

  {
    id: "darth-vader",
    name: "ダース・ベイダー",
    originalName: "Darth Vader",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "帝国軍の指揮官",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "冷酷で威圧的。",
    features: ["シス", "フォース", "黒い装甲"],
    relationships: ["ルーク・スカイウォーカー", "パルパティーン"],
    description: "銀河帝国の強大な戦士として恐れられる存在。圧倒的な力を持つ一方、その過去はシリーズ全体の重要な軸となる。",
    highlight: "単なる悪役では終わらない背景と葛藤が、シリーズを象徴する魅力につながっている。",
    keywords: ["シス", "悪役", "フォース", "帝国"]
  },

  {
    id: "yoda",
    name: "ヨーダ",
    originalName: "Yoda",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "ファンタジー"],
    role: "ジェダイ・マスター",
    firstAppearance: "スター・ウォーズ エピソード5／帝国の逆襲",
    personality: "穏やかで思慮深い。",
    features: ["ジェダイ", "フォース", "師匠"],
    relationships: ["ルーク・スカイウォーカー", "オビ＝ワン・ケノービ"],
    description: "非常に長い経験を持つジェダイ・マスター。小柄な外見からは想像できないほど強いフォースと知恵を持つ。",
    highlight: "独特な言葉遣いと哲学的な教えが印象に残る。",
    keywords: ["ジェダイ", "師匠", "フォース", "知恵"]
  },

  {
    id: "obi-wan-kenobi",
    name: "オビ＝ワン・ケノービ",
    originalName: "Obi-Wan Kenobi",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "ジェダイ",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "冷静で誠実。",
    features: ["ジェダイ", "ライトセーバー", "指導者"],
    relationships: ["ルーク・スカイウォーカー", "アナキン・スカイウォーカー"],
    description: "ジェダイとして多くの戦いを経験した人物。後にルークへフォースの存在とジェダイについて伝える。",
    highlight: "師としての責任と、かつての弟子との関係が大きなドラマを生む。",
    keywords: ["ジェダイ", "師匠", "フォース", "ライトセーバー"]
  },

  {
    id: "emperor-palpatine",
    name: "パルパティーン",
    originalName: "Palpatine",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF"],
    role: "銀河帝国皇帝",
    firstAppearance: "スター・ウォーズ エピソード5／帝国の逆襲",
    personality: "狡猾で支配欲が強い。",
    features: ["シス", "政治家", "皇帝"],
    relationships: ["ダース・ベイダー"],
    description: "銀河の政治と暗黒面を利用し、巨大な権力を築き上げた人物。",
    highlight: "直接戦うだけでなく、策略によって歴史そのものを動かすタイプの敵役。",
    keywords: ["皇帝", "シス", "帝国", "悪役"]
  },

  {
    id: "chewbacca",
    name: "チューバッカ",
    originalName: "Chewbacca",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "副操縦士",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "忠実で情に厚い。",
    features: ["ウーキー", "怪力", "宇宙船"],
    relationships: ["ハン・ソロ"],
    description: "ウーキー族の戦士で、ハン・ソロの長年の相棒。ミレニアム・ファルコンの副操縦士でもある。",
    highlight: "言葉が通じなくても感情が伝わる、シリーズ屈指の愛される相棒キャラクター。",
    keywords: ["ウーキー", "相棒", "宇宙船", "怪力"]
  },

  {
    id: "r2-d2",
    name: "R2-D2",
    originalName: "R2-D2",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF"],
    role: "アストロメク・ドロイド",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "大胆で機転が利く。",
    features: ["ドロイド", "修理", "情報"],
    relationships: ["C-3PO", "ルーク・スカイウォーカー"],
    description: "宇宙船の修理やデータ管理を担当する小型ドロイド。数々の重要な場面で仲間を助ける。",
    highlight: "言葉を話さなくても豊かな個性を感じさせるところが魅力。",
    keywords: ["ドロイド", "ロボット", "宇宙", "相棒"]
  },

  {
    id: "c-3po",
    name: "C-3PO",
    originalName: "C-3PO",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF"],
    role: "プロトコル・ドロイド",
    firstAppearance: "スター・ウォーズ エピソード4／新たなる希望",
    personality: "心配性で礼儀正しい。",
    features: ["ドロイド", "通訳", "多数の言語"],
    relationships: ["R2-D2"],
    description: "言語や文化の通訳を得意とする人型ドロイド。危険な冒険には消極的だが、仲間と共に数々の事件へ巻き込まれる。",
    highlight: "R2-D2との対照的な性格と掛け合いがシリーズのユーモアを支える。",
    keywords: ["ドロイド", "通訳", "ロボット", "宇宙"]
  },


  // =====================================================
  // 21〜30 マーベル映画
  // =====================================================

  {
    id: "iron-man",
    name: "アイアンマン",
    originalName: "Iron Man / Tony Stark",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "アイアンマン",
    personality: "自信家で機知に富む。",
    features: ["パワードスーツ", "発明家", "天才"],
    relationships: ["ペッパー・ポッツ", "ジェームズ・ローズ", "スパイダーマン"],
    description: "優れた技術力を持つ実業家トニー・スタークが、自ら開発したパワードスーツを使って戦うヒーロー。",
    highlight: "自信過剰な人物が責任や犠牲について学び、ヒーローとして変化していく。",
    keywords: ["マーベル", "ヒーロー", "科学", "スーツ"]
  },

  {
    id: "captain-america",
    name: "キャプテン・アメリカ",
    originalName: "Captain America / Steve Rogers",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "キャプテン・アメリカ／ザ・ファースト・アベンジャー",
    personality: "誠実で正義感が強い。",
    features: ["盾", "超人的身体能力", "兵士"],
    relationships: ["バッキー・バーンズ", "サム・ウィルソン"],
    description: "強い正義感を持つ青年スティーブ・ロジャースが、超人兵士計画を経て戦うヒーローとなる。",
    highlight: "時代が変化しても、自分が正しいと思う価値観を守ろうとする姿。",
    keywords: ["マーベル", "盾", "ヒーロー", "アベンジャーズ"]
  },

  {
    id: "thor",
    name: "ソー",
    originalName: "Thor",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "ファンタジー"],
    role: "ヒーロー",
    firstAppearance: "マイティ・ソー",
    personality: "豪快で誇り高い。",
    features: ["雷", "ムジョルニア", "アスガルド"],
    relationships: ["ロキ", "オーディン"],
    description: "アスガルドの王子として生まれ、雷の力を操る戦士。地球での経験を通して王としての責任を学ぶ。",
    highlight: "神話的な強さと家族に関する人間的な葛藤の組み合わせが魅力。",
    keywords: ["雷", "神", "アスガルド", "マーベル"]
  },

  {
    id: "hulk",
    name: "ハルク",
    originalName: "Hulk / Bruce Banner",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "インクレディブル・ハルク",
    personality: "バナーは知的で穏やか。ハルクは激情的。",
    features: ["怪力", "科学者", "変身"],
    relationships: ["ブラック・ウィドウ", "ソー"],
    description: "科学者ブルース・バナーが強い感情などをきっかけに巨大なハルクへ変身する。",
    highlight: "知性と圧倒的な力という二つの側面を抱えながら、自分自身との共存を探していく。",
    keywords: ["怪力", "科学", "変身", "マーベル"]
  },

  {
    id: "black-widow",
    name: "ブラック・ウィドウ",
    originalName: "Black Widow / Natasha Romanoff",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "スパイ"],
    role: "ヒーロー／エージェント",
    firstAppearance: "アイアンマン2",
    personality: "冷静で観察力が高い。",
    features: ["格闘", "諜報", "潜入"],
    relationships: ["ホークアイ", "キャプテン・アメリカ"],
    description: "高い戦闘能力と諜報技術を持つエージェント。超人的能力を持つ仲間たちの中でも技術と判断力で戦う。",
    highlight: "過去を背負いながら、自分が選んだ仲間や家族を大切にする姿。",
    keywords: ["スパイ", "女性ヒーロー", "格闘", "マーベル"]
  },

  {
    id: "hawkeye",
    name: "ホークアイ",
    originalName: "Hawkeye / Clint Barton",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション"],
    role: "ヒーロー／エージェント",
    firstAppearance: "マイティ・ソー",
    personality: "落ち着いていて家族思い。",
    features: ["弓矢", "射撃", "エージェント"],
    relationships: ["ブラック・ウィドウ"],
    description: "弓矢を中心とした高い戦闘技術を持つエージェント。特殊能力を持たない人間として数々の戦いに参加する。",
    highlight: "ヒーローである一方、家族を大切にする生活者としての一面も強い。",
    keywords: ["弓", "アベンジャーズ", "エージェント", "マーベル"]
  },

  {
    id: "spider-man-mcu",
    name: "スパイダーマン",
    originalName: "Spider-Man / Peter Parker",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "シビル・ウォー／キャプテン・アメリカ",
    personality: "明るく正義感が強い。",
    features: ["クモの能力", "ウェブ", "高校生"],
    relationships: ["アイアンマン", "MJ", "ネッド"],
    description: "クモのような能力を持つ若きヒーロー。学生生活とヒーロー活動を両立しながら成長していく。",
    highlight: "若さゆえの失敗と成長が、親しみやすいヒーロー像につながっている。",
    keywords: ["スパイダーマン", "高校生", "ヒーロー", "マーベル"]
  },

  {
    id: "doctor-strange",
    name: "ドクター・ストレンジ",
    originalName: "Doctor Strange / Stephen Strange",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["ファンタジー", "アクション"],
    role: "魔術師／ヒーロー",
    firstAppearance: "ドクター・ストレンジ",
    personality: "自信家だが責任感を身につける。",
    features: ["魔術", "異次元", "元医師"],
    relationships: ["ウォン"],
    description: "優秀な外科医だったスティーヴン・ストレンジが、人生を変える出来事を経て魔術の世界へ入る。",
    highlight: "科学を信じていた人物が、理解を超えた世界を受け入れていく変化。",
    keywords: ["魔法", "魔術", "マーベル", "異次元"]
  },

  {
    id: "black-panther",
    name: "ブラックパンサー",
    originalName: "Black Panther / T'Challa",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ワカンダ国王／ヒーロー",
    firstAppearance: "シビル・ウォー／キャプテン・アメリカ",
    personality: "冷静で責任感が強い。",
    features: ["ワカンダ", "王", "ヴィブラニウム"],
    relationships: ["シュリ", "オコエ"],
    description: "高度な技術を持つ国家ワカンダの王であり、その守護者ブラックパンサーとして戦う人物。",
    highlight: "一人のヒーローとしてだけでなく、国を導く王として難しい判断を迫られる。",
    keywords: ["ワカンダ", "王", "ヒーロー", "マーベル"]
  },

  {
    id: "captain-marvel",
    name: "キャプテン・マーベル",
    originalName: "Captain Marvel / Carol Danvers",
    work: "マーベル・シネマティック・ユニバース",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "キャプテン・マーベル",
    personality: "大胆で意志が強い。",
    features: ["宇宙", "飛行", "強力なエネルギー"],
    relationships: ["ニック・フューリー"],
    description: "非常に強力なエネルギー能力を持つヒーロー。失われた記憶と自分自身の過去を探る。",
    highlight: "他人から与えられた説明ではなく、自分で自分の正体を見つけていく物語。",
    keywords: ["宇宙", "女性ヒーロー", "マーベル", "飛行"]
  },


  // =====================================================
  // 31〜40 DC映画
  // =====================================================

  {
    id: "batman",
    name: "バットマン",
    originalName: "Batman / Bruce Wayne",
    work: "バットマン",
    category: "映画",
    genre: ["アクション", "犯罪"],
    role: "ヒーロー",
    firstAppearance: "バットマン ビギンズ",
    personality: "寡黙で強い意志を持つ。",
    features: ["探偵", "格闘", "特殊装備"],
    relationships: ["アルフレッド", "ジェームズ・ゴードン", "ジョーカー"],
    description: "ブルース・ウェインが犯罪と戦うため、知力・鍛錬・装備を駆使してバットマンとして活動する。",
    highlight: "超能力ではなく、人間の能力と執念によって犯罪へ立ち向かう点が特徴。",
    keywords: ["DC", "ゴッサム", "ヒーロー", "探偵"]
  },

  {
    id: "superman",
    name: "スーパーマン",
    originalName: "Superman / Clark Kent",
    work: "スーパーマン",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "マン・オブ・スティール",
    personality: "誠実で人を守ろうとする。",
    features: ["飛行", "怪力", "クリプトン"],
    relationships: ["ロイス・レイン"],
    description: "惑星クリプトンから地球へ送られ、人間として育ったクラーク・ケント。並外れた力を人々を守るために使う。",
    highlight: "圧倒的な力を持ちながら、人間社会でどう生きるかという葛藤。",
    keywords: ["DC", "ヒーロー", "飛行", "クリプトン"]
  },

  {
    id: "wonder-woman",
    name: "ワンダーウーマン",
    originalName: "Wonder Woman / Diana Prince",
    work: "ワンダーウーマン",
    category: "映画",
    genre: ["アクション", "ファンタジー"],
    role: "ヒーロー",
    firstAppearance: "バットマン vs スーパーマン ジャスティスの誕生",
    personality: "勇敢で慈悲深い。",
    features: ["アマゾン族", "戦士", "真実の投げ縄"],
    relationships: ["スティーブ・トレバー"],
    description: "アマゾン族の王女ダイアナが、人間社会へ足を踏み入れ、ワンダーウーマンとして戦う。",
    highlight: "圧倒的な戦闘力と、人間への希望を信じようとする姿勢が魅力。",
    keywords: ["DC", "女性ヒーロー", "アマゾン", "戦士"]
  },

  {
    id: "aquaman",
    name: "アクアマン",
    originalName: "Aquaman / Arthur Curry",
    work: "アクアマン",
    category: "映画",
    genre: ["アクション", "ファンタジー"],
    role: "ヒーロー",
    firstAppearance: "バットマン vs スーパーマン ジャスティスの誕生",
    personality: "豪快で自由奔放。",
    features: ["海", "アトランティス", "怪力"],
    relationships: ["メラ"],
    description: "地上の人間と海底王国アトランティス双方につながりを持つアーサー・カリー。",
    highlight: "二つの世界の間に立ち、自分がどこに属するのかを探していく。",
    keywords: ["DC", "海", "アトランティス", "ヒーロー"]
  },

  {
    id: "flash",
    name: "フラッシュ",
    originalName: "The Flash / Barry Allen",
    work: "DC",
    category: "映画",
    genre: ["アクション", "SF"],
    role: "ヒーロー",
    firstAppearance: "バットマン vs スーパーマン ジャスティスの誕生",
    personality: "明るく親しみやすい。",
    features: ["超高速", "スピードフォース", "時間"],
    relationships: ["バットマン"],
    description: "驚異的な速度で動く能力を持つバリー・アレン。速度を利用した独特の戦い方をする。",
    highlight: "速さが戦闘だけでなく、時間や人生の選択にも関係していく。",
    keywords: ["DC", "高速", "ヒーロー", "時間"]
  },

  {
    id: "harley-quinn",
    name: "ハーレイ・クイン",
    originalName: "Harley Quinn",
    work: "スーサイド・スクワッド",
    category: "映画",
    genre: ["アクション", "犯罪"],
    role: "アンチヒーロー",
    firstAppearance: "スーサイド・スクワッド",
    personality: "予測不能で自由奔放。",
    features: ["格闘", "派手な装い", "元精神科医"],
    relationships: ["ジョーカー"],
    description: "独特の感性と大胆な行動力を持つ人物。危険な状況でも自分らしさを失わない。",
    highlight: "善悪の枠だけでは説明できない自由さと強烈な存在感。",
    keywords: ["DC", "アンチヒーロー", "犯罪", "女性キャラクター"]
  },

  {
    id: "joker",
    name: "ジョーカー",
    originalName: "Joker",
    work: "バットマン",
    category: "映画",
    genre: ["犯罪", "ドラマ"],
    role: "悪役",
    firstAppearance: "ダークナイト",
    personality: "予測不能で混沌を好む。",
    features: ["犯罪者", "策略", "バットマンの宿敵"],
    relationships: ["バットマン"],
    description: "ゴッサムを混乱へ陥れる犯罪者。力よりも心理戦や策略を利用し、人々の価値観を揺さぶる。",
    highlight: "バットマンと正反対の思想を持つ存在として、強烈な対立構造を生み出す。",
    keywords: ["DC", "悪役", "犯罪", "ゴッサム"]
  },

  {
    id: "catwoman",
    name: "キャットウーマン",
    originalName: "Catwoman / Selina Kyle",
    work: "バットマン",
    category: "映画",
    genre: ["アクション", "犯罪"],
    role: "怪盗／アンチヒーロー",
    firstAppearance: "ダークナイト ライジング",
    personality: "自立心が強く機転が利く。",
    features: ["潜入", "格闘", "盗み"],
    relationships: ["バットマン"],
    description: "高い身体能力と潜入技術を持つセリーナ・カイル。自分の目的のため大胆に行動する。",
    highlight: "バットマンの味方とも敵とも断定できない複雑な距離感が魅力。",
    keywords: ["DC", "怪盗", "ゴッサム", "アンチヒーロー"]
  },

  {
    id: "alfred-pennyworth",
    name: "アルフレッド・ペニーワース",
    originalName: "Alfred Pennyworth",
    work: "バットマン",
    category: "映画",
    genre: ["アクション", "ドラマ"],
    role: "ブルースの執事",
    firstAppearance: "バットマン ビギンズ",
    personality: "温厚で現実的。",
    features: ["執事", "助言者", "家族的存在"],
    relationships: ["ブルース・ウェイン"],
    description: "ウェイン家に長年仕え、ブルースを幼少期から支える人物。バットマンとしての活動にも重要な助言を与える。",
    highlight: "ヒーローを支える家族のような存在として、ブルースの人間性をつなぎ止める。",
    keywords: ["DC", "執事", "バットマン", "助言者"]
  },

  {
    id: "commissioner-gordon",
    name: "ジェームズ・ゴードン",
    originalName: "James Gordon",
    work: "バットマン",
    category: "映画",
    genre: ["犯罪", "アクション"],
    role: "警察官",
    firstAppearance: "バットマン ビギンズ",
    personality: "誠実で粘り強い。",
    features: ["警察", "ゴッサム", "協力者"],
    relationships: ["バットマン"],
    description: "腐敗や犯罪が広がるゴッサムで正義を守ろうとする警察官。バットマンと協力関係を築く。",
    highlight: "特殊能力を持たない市民側から街の正義を支える重要人物。",
    keywords: ["DC", "警察", "ゴッサム", "バットマン"]
  },


  // =====================================================
  // 41〜50 ロード・オブ・ザ・リング
  // =====================================================

  {
    id: "frodo-baggins",
    name: "フロド・バギンズ",
    originalName: "Frodo Baggins",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "主人公",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "穏やかで勇敢。",
    features: ["ホビット", "指輪", "旅"],
    relationships: ["サム", "ガンダルフ", "アラゴルン"],
    description: "ホビット庄で平穏に暮らしていた青年。強大な力を持つ指輪を託され、危険な旅へ出る。",
    highlight: "大きな力を持たない普通の人物が、重い使命を背負う物語。",
    keywords: ["ホビット", "指輪", "冒険", "主人公"]
  },

  {
    id: "samwise-gamgee",
    name: "サムワイズ・ギャムジー",
    originalName: "Samwise Gamgee",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "フロドの仲間",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "誠実で忠実。",
    features: ["ホビット", "友情", "旅"],
    relationships: ["フロド・バギンズ"],
    description: "フロドの親友として旅に同行するホビット。困難な状況でもフロドを支え続ける。",
    highlight: "力や名声ではなく、友情と粘り強さで物語を支える。",
    keywords: ["友情", "ホビット", "旅", "仲間"]
  },

  {
    id: "aragorn",
    name: "アラゴルン",
    originalName: "Aragorn",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "戦士",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "寡黙で責任感が強い。",
    features: ["剣士", "レンジャー", "王の血筋"],
    relationships: ["アルウェン", "レゴラス", "ギムリ"],
    description: "旅人として生きる優れた戦士。大きな使命と自らの血筋に向き合っていく。",
    highlight: "一人の戦士から、人々を導く人物へ成長していく。",
    keywords: ["剣士", "王", "戦士", "旅"]
  },

  {
    id: "gandalf",
    name: "ガンダルフ",
    originalName: "Gandalf",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー"],
    role: "魔法使い",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "知恵深く大胆。",
    features: ["魔法使い", "杖", "指導者"],
    relationships: ["フロド", "アラゴルン"],
    description: "中つ国を旅しながら人々を導く魔法使い。強大な敵へ立ち向かうため仲間を集める。",
    highlight: "強さだけでなく、希望を与え人々を動かす指導力が魅力。",
    keywords: ["魔法使い", "中つ国", "旅", "指導者"]
  },

  {
    id: "legolas",
    name: "レゴラス",
    originalName: "Legolas",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "弓使い",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "冷静で仲間思い。",
    features: ["エルフ", "弓", "高い身体能力"],
    relationships: ["ギムリ", "アラゴルン"],
    description: "エルフ族の優れた弓使い。旅の仲間としてフロドたちの使命を支える。",
    highlight: "華麗な戦闘と、ギムリとの友情の変化が印象的。",
    keywords: ["エルフ", "弓", "戦士", "友情"]
  },

  {
    id: "gimli",
    name: "ギムリ",
    originalName: "Gimli",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "戦士",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "豪快で誇り高い。",
    features: ["ドワーフ", "斧", "戦士"],
    relationships: ["レゴラス", "アラゴルン"],
    description: "ドワーフ族の戦士。斧を使った力強い戦いを得意とし、旅の仲間へ加わる。",
    highlight: "レゴラスとの種族を越えた友情が大きな魅力。",
    keywords: ["ドワーフ", "斧", "戦士", "友情"]
  },

  {
    id: "boromir",
    name: "ボロミア",
    originalName: "Boromir",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "ドラマ"],
    role: "戦士",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "勇敢で祖国への思いが強い。",
    features: ["人間", "戦士", "ゴンドール"],
    relationships: ["アラゴルン", "フロド"],
    description: "ゴンドールから旅の仲間に加わった戦士。故郷を守りたいという強い願いを持つ。",
    highlight: "使命と誘惑の間で揺れる、人間らしい弱さと勇気が描かれる。",
    keywords: ["戦士", "ゴンドール", "旅の仲間", "ドラマ"]
  },

  {
    id: "gollum",
    name: "ゴラム",
    originalName: "Gollum",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー", "ドラマ"],
    role: "指輪に執着する人物",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "執着心が強く不安定。",
    features: ["一つの指輪", "二面性", "案内役"],
    relationships: ["フロド", "サム"],
    description: "長い年月にわたり指輪の影響を受け続けた人物。フロドたちの旅に複雑な形で関わる。",
    highlight: "一人の人物の中に複数の感情がせめぎ合う描写が特徴。",
    keywords: ["指輪", "ゴラム", "葛藤", "中つ国"]
  },

  {
    id: "galadriel",
    name: "ガラドリエル",
    originalName: "Galadriel",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー"],
    role: "エルフの指導者",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "威厳があり思慮深い。",
    features: ["エルフ", "知恵", "指導者"],
    relationships: ["フロド"],
    description: "長い時代を生きてきたエルフの高貴な人物。旅を続けるフロドたちに助言と支援を与える。",
    highlight: "静かな存在感と、誘惑を理解しながらそれに向き合う強さ。",
    keywords: ["エルフ", "指導者", "魔法", "中つ国"]
  },

  {
    id: "saruman",
    name: "サルマン",
    originalName: "Saruman",
    work: "ロード・オブ・ザ・リング",
    category: "映画",
    genre: ["ファンタジー"],
    role: "魔法使い",
    firstAppearance: "ロード・オブ・ザ・リング／旅の仲間",
    personality: "知的だが野心的。",
    features: ["魔法使い", "軍勢", "策略"],
    relationships: ["ガンダルフ"],
    description: "大きな力と知識を持つ魔法使い。力への考え方をめぐりガンダルフと対立する。",
    highlight: "知識や能力の高さが必ずしも正しい選択につながらないことを示す人物。",
    keywords: ["魔法使い", "悪役", "策略", "中つ国"]
  },


  // =====================================================
  // 51〜60 スタジオジブリ作品
  // =====================================================

  {
    id: "chihiro-ogino",
    name: "荻野千尋",
    originalName: "Chihiro Ogino",
    work: "千と千尋の神隠し",
    category: "アニメ映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "主人公",
    firstAppearance: "千と千尋の神隠し",
    personality: "最初は臆病だが芯が強い。",
    features: ["少女", "異世界", "成長"],
    relationships: ["ハク"],
    description: "不思議な世界へ迷い込み、両親を助けるため働くことになる少女。",
    highlight: "不安の強い少女が経験を重ね、自分で考えて行動できるようになる成長。",
    keywords: ["ジブリ", "異世界", "少女", "成長"]
  },

  {
    id: "haku",
    name: "ハク",
    originalName: "Haku",
    work: "千と千尋の神隠し",
    category: "アニメ映画",
    genre: ["ファンタジー"],
    role: "千尋を助ける少年",
    firstAppearance: "千と千尋の神隠し",
    personality: "穏やかで頼れる。",
    features: ["魔法", "龍", "謎"],
    relationships: ["千尋", "湯婆婆"],
    description: "異世界で千尋を助ける謎めいた少年。自分自身に関する重要な記憶を失っている。",
    highlight: "千尋とのつながりと、自分の本当の名前を巡る物語が印象的。",
    keywords: ["ジブリ", "龍", "魔法", "千尋"]
  },

  {
    id: "totoro",
    name: "トトロ",
    originalName: "Totoro",
    work: "となりのトトロ",
    category: "アニメ映画",
    genre: ["ファンタジー", "ファミリー"],
    role: "森の不思議な存在",
    firstAppearance: "となりのトトロ",
    personality: "おおらかで不思議。",
    features: ["森", "大きな体", "不思議な力"],
    relationships: ["サツキ", "メイ"],
    description: "森に暮らす大きな不思議な存在。サツキとメイの前に現れ、幻想的な体験へ導く。",
    highlight: "説明されすぎない不思議さと、安心感のある存在感。",
    keywords: ["ジブリ", "森", "ファンタジー", "トトロ"]
  },

  {
    id: "satsuki-kusakabe",
    name: "草壁サツキ",
    originalName: "Satsuki Kusakabe",
    work: "となりのトトロ",
    category: "アニメ映画",
    genre: ["ファミリー", "ファンタジー"],
    role: "主人公の一人",
    firstAppearance: "となりのトトロ",
    personality: "しっかり者で家族思い。",
    features: ["姉", "小学生", "田舎暮らし"],
    relationships: ["メイ", "トトロ"],
    description: "家族と田舎へ引っ越してきた少女。妹のメイを気遣いながら新しい生活を始める。",
    highlight: "子どもらしさと、姉として頑張ろうとする姿の両方が描かれる。",
    keywords: ["ジブリ", "姉妹", "田舎", "トトロ"]
  },

  {
    id: "kiki",
    name: "キキ",
    originalName: "Kiki",
    work: "魔女の宅急便",
    category: "アニメ映画",
    genre: ["ファンタジー", "青春"],
    role: "主人公",
    firstAppearance: "魔女の宅急便",
    personality: "前向きで努力家。",
    features: ["魔女", "ほうき", "宅配"],
    relationships: ["ジジ", "トンボ"],
    description: "魔女として独り立ちするため、新しい街で生活を始める少女。",
    highlight: "仕事や人間関係に悩みながら、自分の居場所を作っていく青春物語。",
    keywords: ["ジブリ", "魔女", "成長", "青春"]
  },

  {
    id: "jiji",
    name: "ジジ",
    originalName: "Jiji",
    work: "魔女の宅急便",
    category: "アニメ映画",
    genre: ["ファンタジー", "ファミリー"],
    role: "キキの相棒",
    firstAppearance: "魔女の宅急便",
    personality: "少し皮肉屋で現実的。",
    features: ["黒猫", "相棒", "会話"],
    relationships: ["キキ"],
    description: "キキと一緒に旅をする黒猫。キキに対して率直な意見を伝える大切な相棒。",
    highlight: "キキとの軽妙なやりとりが作品にユーモアを加える。",
    keywords: ["ジブリ", "猫", "相棒", "魔女"]
  },

  {
    id: "howl",
    name: "ハウル",
    originalName: "Howl",
    work: "ハウルの動く城",
    category: "アニメ映画",
    genre: ["ファンタジー", "恋愛"],
    role: "魔法使い",
    firstAppearance: "ハウルの動く城",
    personality: "自由奔放で繊細。",
    features: ["魔法使い", "動く城", "変身"],
    relationships: ["ソフィー", "カルシファー"],
    description: "強い魔力を持つ一方、気まぐれで繊細な一面も見せる魔法使い。",
    highlight: "華やかな外見と、人間的な弱さのギャップが魅力。",
    keywords: ["ジブリ", "魔法使い", "城", "恋愛"]
  },

  {
    id: "sophie-hatter",
    name: "ソフィー",
    originalName: "Sophie Hatter",
    work: "ハウルの動く城",
    category: "アニメ映画",
    genre: ["ファンタジー", "恋愛"],
    role: "主人公",
    firstAppearance: "ハウルの動く城",
    personality: "真面目で芯が強い。",
    features: ["帽子屋", "呪い", "成長"],
    relationships: ["ハウル", "カルシファー"],
    description: "帽子屋で働く少女。ある呪いをきっかけにハウルの城へ入り、新しい人生を歩み始める。",
    highlight: "自信のなかった人物が、自分らしい強さを見つけていく。",
    keywords: ["ジブリ", "主人公", "呪い", "恋愛"]
  },

  {
    id: "ashitaka",
    name: "アシタカ",
    originalName: "Ashitaka",
    work: "もののけ姫",
    category: "アニメ映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "主人公",
    firstAppearance: "もののけ姫",
    personality: "冷静で誠実。",
    features: ["弓", "呪い", "旅"],
    relationships: ["サン"],
    description: "自らにかけられた呪いの原因を探すため故郷を離れ、森と人間の争いへ関わっていく青年。",
    highlight: "どちらか一方だけを正しいと決めず、双方を理解しようとする姿勢。",
    keywords: ["ジブリ", "森", "弓", "主人公"]
  },

  {
    id: "san-mononoke",
    name: "サン",
    originalName: "San",
    work: "もののけ姫",
    category: "アニメ映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "森を守る少女",
    firstAppearance: "もののけ姫",
    personality: "勇敢で激しい。",
    features: ["山犬", "森", "戦士"],
    relationships: ["アシタカ"],
    description: "山犬に育てられ、森を守るため人間と戦う少女。",
    highlight: "人間として生まれながら森の側で生きるという複雑な立場。",
    keywords: ["ジブリ", "もののけ", "森", "戦士"]
  },


  // =====================================================
  // 61〜70 鬼滅の刃
  // =====================================================

  {
    id: "tanjiro-kamado",
    name: "竈門炭治郎",
    originalName: "Tanjiro Kamado",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "主人公",
    firstAppearance: "鬼滅の刃",
    personality: "心優しく努力家。",
    features: ["鬼殺隊", "剣士", "鋭い嗅覚"],
    relationships: ["竈門禰豆子", "我妻善逸", "嘴平伊之助"],
    description: "家族を襲った悲劇をきっかけに鬼殺隊へ入り、妹の禰豆子を人間へ戻す方法を探す少年。",
    highlight: "敵に対してさえ悲しみを理解しようとする優しさと、決して諦めない強さ。",
    keywords: ["鬼殺隊", "剣士", "主人公", "兄妹"]
  },

  {
    id: "nezuko-kamado",
    name: "竈門禰豆子",
    originalName: "Nezuko Kamado",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "炭治郎の妹",
    firstAppearance: "鬼滅の刃",
    personality: "家族思いで優しい。",
    features: ["鬼", "特殊な力", "兄妹"],
    relationships: ["竈門炭治郎"],
    description: "炭治郎の妹。鬼へ変えられてしまうが、人を襲う本能に抗いながら兄と旅をする。",
    highlight: "言葉が少ない中でも、表情や行動から家族への強い思いが伝わる。",
    keywords: ["鬼", "妹", "炭治郎", "鬼滅"]
  },

  {
    id: "zenitsu-agatsuma",
    name: "我妻善逸",
    originalName: "Zenitsu Agatsuma",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "鬼殺隊士",
    firstAppearance: "鬼滅の刃",
    personality: "臆病だが仲間思い。",
    features: ["雷の呼吸", "剣士", "聴覚"],
    relationships: ["炭治郎", "伊之助", "禰豆子"],
    description: "強い恐怖心を持ちながら鬼殺隊として戦う少年。極限状態では驚くほど高い実力を発揮する。",
    highlight: "普段とのギャップが大きく、コメディと格好良さの両方を担当する。",
    keywords: ["雷", "鬼殺隊", "剣士", "善逸"]
  },

  {
    id: "inosuke-hashibira",
    name: "嘴平伊之助",
    originalName: "Inosuke Hashibira",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "鬼殺隊士",
    firstAppearance: "鬼滅の刃",
    personality: "好戦的で負けず嫌い。",
    features: ["獣の呼吸", "二刀流", "猪の頭"],
    relationships: ["炭治郎", "善逸"],
    description: "山で育った野性的な少年。戦うことが大好きだが、仲間との旅を通じて少しずつ人とのつながりを学ぶ。",
    highlight: "豪快さの中に見える純粋さと成長が魅力。",
    keywords: ["獣", "二刀流", "鬼殺隊", "伊之助"]
  },

  {
    id: "giyu-tomioka",
    name: "冨岡義勇",
    originalName: "Giyu Tomioka",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "水柱",
    firstAppearance: "鬼滅の刃",
    personality: "寡黙で冷静。",
    features: ["水の呼吸", "柱", "剣士"],
    relationships: ["炭治郎", "禰豆子"],
    description: "鬼殺隊最高位の剣士である柱の一人。炭治郎と禰豆子の運命を大きく変える人物。",
    highlight: "感情を表に出しにくい一方、行動には強い信念が表れている。",
    keywords: ["水柱", "鬼殺隊", "剣士", "水"]
  },

  {
    id: "shinobu-kocho",
    name: "胡蝶しのぶ",
    originalName: "Shinobu Kocho",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "蟲柱",
    firstAppearance: "鬼滅の刃",
    personality: "穏やかに見えるが強い意志を持つ。",
    features: ["蟲の呼吸", "毒", "柱"],
    relationships: ["栗花落カナヲ", "冨岡義勇"],
    description: "鬼殺隊の柱の一人。小柄な体格を補うため、独自の戦い方を身につけている。",
    highlight: "笑顔の裏側に抱える感情と、独自の戦闘方法が特徴。",
    keywords: ["蟲柱", "毒", "鬼殺隊", "しのぶ"]
  },

  {
    id: "kyojuro-rengoku",
    name: "煉獄杏寿郎",
    originalName: "Kyojuro Rengoku",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション"],
    role: "炎柱",
    firstAppearance: "鬼滅の刃",
    personality: "明朗で責任感が強い。",
    features: ["炎の呼吸", "柱", "剣士"],
    relationships: ["炭治郎"],
    description: "鬼殺隊の炎柱。明るく堂々とした性格で、強者として弱い人を守る責任を重く受け止めている。",
    highlight: "力強い戦闘だけでなく、後輩たちへ残す言葉と生き方が印象的。",
    keywords: ["炎柱", "炎", "鬼殺隊", "煉獄"]
  },

  {
    id: "tengen-uzui",
    name: "宇髄天元",
    originalName: "Tengen Uzui",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション"],
    role: "音柱",
    firstAppearance: "鬼滅の刃",
    personality: "派手好きで豪快。",
    features: ["音の呼吸", "忍", "二刀"],
    relationships: ["炭治郎", "善逸", "伊之助"],
    description: "派手さを好む鬼殺隊の音柱。忍として培った技術と高い戦闘力を持つ。",
    highlight: "派手な言動とは対照的に、仲間や家族を非常に大切にする。",
    keywords: ["音柱", "忍", "鬼殺隊", "派手"]
  },

  {
    id: "mitsuri-kanroji",
    name: "甘露寺蜜璃",
    originalName: "Mitsuri Kanroji",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション"],
    role: "恋柱",
    firstAppearance: "鬼滅の刃",
    personality: "明るく感情豊か。",
    features: ["恋の呼吸", "柱", "高い筋力"],
    relationships: ["伊黒小芭内"],
    description: "鬼殺隊の恋柱。優しく親しみやすい性格ながら、非常に高い身体能力を持つ。",
    highlight: "柔らかな性格と圧倒的な戦闘能力のギャップ。",
    keywords: ["恋柱", "鬼殺隊", "剣士", "蜜璃"]
  },

  {
    id: "muichiro-tokito",
    name: "時透無一郎",
    originalName: "Muichiro Tokito",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: ["アクション"],
    role: "霞柱",
    firstAppearance: "鬼滅の刃",
    personality: "淡々としている。",
    features: ["霞の呼吸", "柱", "天才剣士"],
    relationships: ["炭治郎"],
    description: "若くして柱となった天才剣士。物事への関心が薄く見えるが、過去には重要な理由がある。",
    highlight: "記憶や人とのつながりを取り戻していくことで変化する姿。",
    keywords: ["霞柱", "天才", "鬼殺隊", "無一郎"]
  },


  // =====================================================
  // 71〜80 僕のヒーローアカデミア
  // =====================================================

  {
    id: "izuku-midoriya",
    name: "緑谷出久",
    originalName: "Izuku Midoriya",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "学園"],
    role: "主人公",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "努力家で人助けへの思いが強い。",
    features: ["デク", "ヒーロー志望", "分析"],
    relationships: ["爆豪勝己", "オールマイト", "麗日お茶子"],
    description: "ヒーローに憧れ続ける少年。大きな力を受け継ぎ、一流のヒーローを目指して成長していく。",
    highlight: "力そのものより先に人を助けようと動ける精神が主人公としての核。",
    keywords: ["デク", "ヒーロー", "雄英", "主人公"]
  },

  {
    id: "katsuki-bakugo",
    name: "爆豪勝己",
    originalName: "Katsuki Bakugo",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "学園"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "負けず嫌いで自信家。",
    features: ["爆破", "戦闘センス", "ライバル"],
    relationships: ["緑谷出久", "轟焦凍"],
    description: "高い戦闘能力と強烈な勝利への執着を持つヒーロー志望の少年。",
    highlight: "才能だけに頼らず努力し、自分自身の弱さとも向き合っていく。",
    keywords: ["爆破", "ヒーロー", "ライバル", "雄英"]
  },

  {
    id: "all-might",
    name: "オールマイト",
    originalName: "All Might",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション"],
    role: "プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく責任感が強い。",
    features: ["平和の象徴", "圧倒的な力", "教師"],
    relationships: ["緑谷出久"],
    description: "社会から絶大な信頼を集めるトップクラスのヒーロー。緑谷の人生を大きく変える。",
    highlight: "圧倒的なヒーロー像の裏で、自分の限界と次世代への継承に向き合う。",
    keywords: ["ヒーロー", "平和の象徴", "教師", "雄英"]
  },

  {
    id: "shoto-todoroki",
    name: "轟焦凍",
    originalName: "Shoto Todoroki",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "学園"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "冷静で真面目。",
    features: ["氷", "炎", "高い戦闘能力"],
    relationships: ["エンデヴァー", "緑谷出久"],
    description: "炎と氷という強力な能力を持つ生徒。家庭環境への複雑な思いを抱えている。",
    highlight: "自分の能力と家族の問題を、自分自身の意思でどう受け止めるかが重要なテーマ。",
    keywords: ["氷", "炎", "ヒーロー", "雄英"]
  },

  {
    id: "ochaco-uraraka",
    name: "麗日お茶子",
    originalName: "Ochaco Uraraka",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "学園"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく思いやりがある。",
    features: ["無重力", "ヒーロー志望", "救助"],
    relationships: ["緑谷出久", "飯田天哉"],
    description: "触れたものを無重力状態にできる能力を持つ少女。家族を支えたいという現実的な目標も持つ。",
    highlight: "明るさの裏にある努力と、ヒーローを支える人への視点。",
    keywords: ["無重力", "女性ヒーロー", "雄英", "お茶子"]
  },

  {
    id: "tenya-iida",
    name: "飯田天哉",
    originalName: "Tenya Iida",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "学園"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "真面目で規律を重視する。",
    features: ["高速移動", "委員長", "エンジン"],
    relationships: ["緑谷出久", "麗日お茶子"],
    description: "規則を重んじる真面目な生徒。高速移動能力を活かしてヒーローを目指す。",
    highlight: "正しさを大切にする人物だからこそ、感情に揺さぶられた時の葛藤が描かれる。",
    keywords: ["高速", "委員長", "ヒーロー", "雄英"]
  },

  {
    id: "shota-aizawa",
    name: "相澤消太",
    originalName: "Shota Aizawa",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "学園"],
    role: "雄英高校教師",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "合理的で冷静。",
    features: ["個性抹消", "教師", "捕縛布"],
    relationships: ["緑谷出久", "雄英高校1年A組"],
    description: "雄英高校で生徒を指導するプロヒーロー。厳しい態度を見せるが、生徒を守る責任感は強い。",
    highlight: "派手さより現実的な判断を優先する教師としての魅力。",
    keywords: ["教師", "雄英", "ヒーロー", "イレイザーヘッド"]
  },

  {
    id: "endeavor",
    name: "エンデヴァー",
    originalName: "Endeavor",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "厳格で野心的。",
    features: ["炎", "トップヒーロー", "高い戦闘力"],
    relationships: ["轟焦凍"],
    description: "炎を操る強力なプロヒーロー。トップを目指す執着が家族にも大きな影響を与える。",
    highlight: "過去の行動と向き合い、ヒーローだけでなく一人の人間として変化しようとする。",
    keywords: ["炎", "プロヒーロー", "轟", "エンデヴァー"]
  },

  {
    id: "hawks",
    name: "ホークス",
    originalName: "Hawks",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション"],
    role: "プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "飄々として頭の回転が速い。",
    features: ["翼", "飛行", "情報収集"],
    relationships: ["エンデヴァー"],
    description: "翼を操る高速型のプロヒーロー。軽い雰囲気を見せながら、重要な任務も担う。",
    highlight: "表向きの自由さと、裏で背負っている役割とのギャップ。",
    keywords: ["翼", "プロヒーロー", "飛行", "ホークス"]
  },

  {
    id: "tomura-shigaraki",
    name: "死柄木弔",
    originalName: "Tomura Shigaraki",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["アクション", "ダーク"],
    role: "敵",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "破壊衝動が強い。",
    features: ["崩壊", "ヴィラン", "敵連合"],
    relationships: ["オール・フォー・ワン", "緑谷出久"],
    description: "ヒーロー社会そのものへ強い敵意を向けるヴィラン。物語が進むにつれて大きな存在へ成長する。",
    highlight: "主人公側とは逆方向の成長を見せる敵役として描かれる。",
    keywords: ["ヴィラン", "崩壊", "敵連合", "悪役"]
  },


  // =====================================================
  // 81〜90 ONE PIECE
  // =====================================================

  {
    id: "monkey-d-luffy",
    name: "モンキー・D・ルフィ",
    originalName: "Monkey D. Luffy",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "アクション"],
    role: "主人公",
    firstAppearance: "ONE PIECE",
    personality: "自由奔放で仲間思い。",
    features: ["海賊", "麦わらの一味", "船長"],
    relationships: ["ゾロ", "ナミ", "サンジ"],
    description: "海賊王を目指して大海原を旅する麦わらの一味の船長。自由を何よりも大切にする。",
    highlight: "普段は無邪気ながら、仲間が傷つけられた時に見せる圧倒的な行動力。",
    keywords: ["海賊", "主人公", "麦わら", "冒険"]
  },

  {
    id: "roronoa-zoro",
    name: "ロロノア・ゾロ",
    originalName: "Roronoa Zoro",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アクション", "アドベンチャー"],
    role: "剣士",
    firstAppearance: "ONE PIECE",
    personality: "寡黙で努力家。",
    features: ["三刀流", "剣士", "麦わらの一味"],
    relationships: ["ルフィ", "サンジ"],
    description: "世界一の大剣豪を目指す剣士。三本の刀を使う独特の戦闘スタイルを持つ。",
    highlight: "船長への強い信頼と、自分の夢を貫くための鍛錬。",
    keywords: ["剣士", "三刀流", "麦わら", "海賊"]
  },

  {
    id: "nami",
    name: "ナミ",
    originalName: "Nami",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "アクション"],
    role: "航海士",
    firstAppearance: "ONE PIECE",
    personality: "頭の回転が速く現実的。",
    features: ["航海士", "天候", "地図"],
    relationships: ["ルフィ", "ウソップ"],
    description: "優れた航海技術と天候に関する知識を持つ麦わらの一味の航海士。",
    highlight: "戦闘力だけではなく、航海に不可欠な専門知識で仲間を支える。",
    keywords: ["航海士", "海賊", "天候", "麦わら"]
  },

  {
    id: "usopp",
    name: "ウソップ",
    originalName: "Usopp",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "コメディ"],
    role: "狙撃手",
    firstAppearance: "ONE PIECE",
    personality: "臆病だが仲間思い。",
    features: ["狙撃", "発明", "嘘"],
    relationships: ["ルフィ", "ナミ"],
    description: "麦わらの一味の狙撃手。怖がりながらも、大切な場面では仲間のために勇気を振り絞る。",
    highlight: "普通の人に近い恐怖心を持つからこそ、その勇気が際立つ。",
    keywords: ["狙撃手", "麦わら", "発明", "海賊"]
  },

  {
    id: "sanji",
    name: "サンジ",
    originalName: "Sanji",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アクション", "アドベンチャー"],
    role: "料理人",
    firstAppearance: "ONE PIECE",
    personality: "情に厚く女性に弱い。",
    features: ["料理人", "蹴り技", "麦わらの一味"],
    relationships: ["ルフィ", "ゾロ"],
    description: "世界中の海の食材が集まるとされる場所を夢見る料理人。戦闘では主に蹴り技を使う。",
    highlight: "料理人として食べ物を大切にする信念と、仲間を守る強さ。",
    keywords: ["料理人", "蹴り", "麦わら", "海賊"]
  },

  {
    id: "tony-tony-chopper",
    name: "トニートニー・チョッパー",
    originalName: "Tony Tony Chopper",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "ファンタジー"],
    role: "船医",
    firstAppearance: "ONE PIECE",
    personality: "純粋で優しい。",
    features: ["トナカイ", "医者", "変身"],
    relationships: ["ルフィ", "Dr.くれは"],
    description: "人の言葉を話し、さまざまな姿へ変化できるトナカイ。麦わらの一味の船医を務める。",
    highlight: "可愛らしさだけでなく、医者として人の命を救いたいという強い信念を持つ。",
    keywords: ["船医", "トナカイ", "麦わら", "医者"]
  },

  {
    id: "nico-robin",
    name: "ニコ・ロビン",
    originalName: "Nico Robin",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "ミステリー"],
    role: "考古学者",
    firstAppearance: "ONE PIECE",
    personality: "冷静で知的。",
    features: ["考古学", "古代文字", "麦わらの一味"],
    relationships: ["ルフィ", "フランキー"],
    description: "失われた歴史を追い求める考古学者。古代文字を読み解く特別な知識を持つ。",
    highlight: "孤独な人生から仲間という居場所を見つけていく過程。",
    keywords: ["考古学", "歴史", "麦わら", "ロビン"]
  },

  {
    id: "franky",
    name: "フランキー",
    originalName: "Franky",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "アクション"],
    role: "船大工",
    firstAppearance: "ONE PIECE",
    personality: "豪快で情に厚い。",
    features: ["サイボーグ", "船大工", "発明"],
    relationships: ["ルフィ", "ロビン"],
    description: "高い造船技術を持つサイボーグの船大工。麦わらの一味の船を支える。",
    highlight: "奇抜な言動と、ものづくりへの真剣な情熱の組み合わせ。",
    keywords: ["船大工", "サイボーグ", "麦わら", "発明"]
  },

  {
    id: "brook",
    name: "ブルック",
    originalName: "Brook",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "コメディ"],
    role: "音楽家",
    firstAppearance: "ONE PIECE",
    personality: "陽気で礼儀正しい。",
    features: ["骸骨", "音楽家", "剣術"],
    relationships: ["ルフィ", "ラブーン"],
    description: "一度命を失った後、不思議な力によって骸骨の姿で生きる音楽家。",
    highlight: "コミカルな振る舞いの裏に、長い孤独と大切な約束を抱えている。",
    keywords: ["音楽家", "骸骨", "麦わら", "海賊"]
  },

  {
    id: "jinbe",
    name: "ジンベエ",
    originalName: "Jinbe",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["アドベンチャー", "アクション"],
    role: "操舵手",
    firstAppearance: "ONE PIECE",
    personality: "冷静で義理堅い。",
    features: ["魚人", "魚人空手", "操舵"],
    relationships: ["ルフィ"],
    description: "経験豊富な魚人の戦士。強い信念と判断力を持ち、麦わらの一味を支える。",
    highlight: "長い経験に基づいた落ち着きと、筋を通す生き方が魅力。",
    keywords: ["魚人", "操舵手", "麦わら", "海賊"]
  },


  // =====================================================
  // 91〜100 NARUTO
  // =====================================================

  {
    id: "naruto-uzumaki",
    name: "うずまきナルト",
    originalName: "Naruto Uzumaki",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "主人公",
    firstAppearance: "NARUTO -ナルト-",
    personality: "前向きで諦めない。",
    features: ["忍者", "九尾", "火影を目指す"],
    relationships: ["うちはサスケ", "春野サクラ", "はたけカカシ"],
    description: "里の人々から認められ、火影になることを夢見る少年忍者。",
    highlight: "孤独な少年が多くの人との絆を築きながら成長していく。",
    keywords: ["忍者", "主人公", "火影", "木ノ葉"]
  },

  {
    id: "sasuke-uchiha",
    name: "うちはサスケ",
    originalName: "Sasuke Uchiha",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "ナルトのライバル",
    firstAppearance: "NARUTO -ナルト-",
    personality: "冷静で復讐心が強い。",
    features: ["写輪眼", "うちは一族", "忍者"],
    relationships: ["ナルト", "イタチ", "サクラ"],
    description: "うちは一族の生き残りとして、兄への強い思いを胸に力を求める少年。",
    highlight: "ナルトとの友情と対立がシリーズ全体の大きな軸になる。",
    keywords: ["写輪眼", "忍者", "ライバル", "うちは"]
  },

  {
    id: "sakura-haruno",
    name: "春野サクラ",
    originalName: "Sakura Haruno",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "真面目で負けず嫌い。",
    features: ["医療忍術", "怪力", "第七班"],
    relationships: ["ナルト", "サスケ", "カカシ"],
    description: "ナルトとサスケと共に第七班へ所属する忍者。後に医療忍術を学び、大きく成長する。",
    highlight: "仲間に守られるだけではなく、自分自身の力で戦える人物へ成長していく。",
    keywords: ["医療忍術", "忍者", "第七班", "サクラ"]
  },

  {
    id: "kakashi-hatake",
    name: "はたけカカシ",
    originalName: "Kakashi Hatake",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "第七班の先生",
    firstAppearance: "NARUTO -ナルト-",
    personality: "飄々として冷静。",
    features: ["忍者", "写輪眼", "先生"],
    relationships: ["ナルト", "サスケ", "サクラ"],
    description: "第七班を担当する優秀な上忍。普段はのんびりして見えるが、豊富な戦闘経験を持つ。",
    highlight: "過去の経験から仲間を大切にすることを何より重視している。",
    keywords: ["先生", "忍者", "写輪眼", "第七班"]
  },

  {
    id: "hinata-hyuga",
    name: "日向ヒナタ",
    originalName: "Hinata Hyuga",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "控えめだが芯が強い。",
    features: ["白眼", "日向一族", "柔拳"],
    relationships: ["ナルト", "ネジ"],
    description: "名門日向一族に生まれた忍者。自信のなさを抱えながらも、ナルトの姿に勇気をもらい成長する。",
    highlight: "静かな性格の中にある強い意志と、大切な人を守ろうとする勇気。",
    keywords: ["白眼", "忍者", "日向一族", "ヒナタ"]
  },

  {
    id: "shikamaru-nara",
    name: "奈良シカマル",
    originalName: "Shikamaru Nara",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "忍者／参謀",
    firstAppearance: "NARUTO -ナルト-",
    personality: "面倒くさがりだが非常に頭が切れる。",
    features: ["影真似", "戦術", "高い知能"],
    relationships: ["チョウジ", "いの", "ナルト"],
    description: "面倒事を嫌う一方、戦闘では冷静な分析力と戦略で仲間を導く忍者。",
    highlight: "力押しではなく、相手の能力と状況を読み切る頭脳戦が魅力。",
    keywords: ["頭脳", "忍者", "影", "参謀"]
  },

  {
    id: "gaara",
    name: "我愛羅",
    originalName: "Gaara",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "砂隠れの忍",
    firstAppearance: "NARUTO -ナルト-",
    personality: "当初は冷酷だが大きく変化する。",
    features: ["砂", "人柱力", "風影"],
    relationships: ["ナルト", "テマリ", "カンクロウ"],
    description: "砂を自在に操る忍者。ナルトと似た孤独を抱えながら、異なる道を歩んできた。",
    highlight: "ナルトとの出会いをきっかけに、人とのつながりへの考え方が大きく変わる。",
    keywords: ["砂", "風影", "忍者", "我愛羅"]
  },

  {
    id: "itachi-uchiha",
    name: "うちはイタチ",
    originalName: "Itachi Uchiha",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "うちはサスケの兄",
    firstAppearance: "NARUTO -ナルト-",
    personality: "冷静で感情を表に出さない。",
    features: ["写輪眼", "幻術", "うちは一族"],
    relationships: ["サスケ"],
    description: "サスケの兄であり、高い能力を持つ忍者。その行動と過去は物語の重要な謎の一つとなる。",
    highlight: "物語が進むにつれて、それまでの印象が大きく変わっていく人物。",
    keywords: ["写輪眼", "うちは", "忍者", "兄"]
  },

  {
    id: "jiraiya",
    name: "自来也",
    originalName: "Jiraiya",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "伝説の三忍／師匠",
    firstAppearance: "NARUTO -ナルト-",
    personality: "豪快で自由奔放。",
    features: ["三忍", "仙術", "師匠"],
    relationships: ["ナルト", "綱手"],
    description: "木ノ葉の伝説の三忍の一人。ナルトの師として、忍術だけでなく生き方にも大きな影響を与える。",
    highlight: "普段のコミカルな姿と、重要な使命に向き合う時の真剣さの差。",
    keywords: ["三忍", "師匠", "忍者", "自来也"]
  },

  {
    id: "tsunade",
    name: "綱手",
    originalName: "Tsunade",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["アクション", "忍者"],
    role: "五代目火影",
    firstAppearance: "NARUTO -ナルト-",
    personality: "豪快で責任感が強い。",
    features: ["医療忍術", "怪力", "三忍"],
    relationships: ["自来也", "サクラ", "ナルト"],
    description: "伝説の三忍の一人で、優れた医療忍術と驚異的な怪力を持つ忍者。",
    highlight: "過去の喪失を乗り越え、里を守る火影として責任を背負っていく。",
    keywords: ["火影", "医療忍術", "三忍", "忍者"]
  }

];
// =====================================================
// 101〜120 ドラゴンボール
// =====================================================

characters.push(

  {
    id: "son-goku",
    name: "孫悟空",
    originalName: "Son Goku",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "主人公",
    firstAppearance: "ドラゴンボール",
    personality: "明るく純粋で戦うことが大好き。",
    features: ["サイヤ人", "格闘", "かめはめ波"],
    relationships: ["ベジータ", "孫悟飯", "クリリン"],
    description: "強い相手との戦いを楽しみながら、仲間や地球を守るため数々の強敵に立ち向かう戦士。",
    highlight: "どれほど強くなってもさらに上を目指し続ける姿が魅力。",
    keywords: ["悟空", "サイヤ人", "格闘", "主人公"]
  },

  {
    id: "vegeta",
    name: "ベジータ",
    originalName: "Vegeta",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "ライバル",
    firstAppearance: "ドラゴンボールZ",
    personality: "誇り高く負けず嫌い。",
    features: ["サイヤ人", "王子", "格闘"],
    relationships: ["孫悟空", "ブルマ", "トランクス"],
    description: "サイヤ人の王子として高い誇りを持ち、悟空を最大のライバルとして成長を続ける。",
    highlight: "冷酷な戦士から家族や仲間を守る存在へ変化していく。",
    keywords: ["サイヤ人", "王子", "ライバル", "ベジータ"]
  },

  {
    id: "son-gohan",
    name: "孫悟飯",
    originalName: "Son Gohan",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "戦士",
    firstAppearance: "ドラゴンボールZ",
    personality: "優しく真面目。",
    features: ["サイヤ人との混血", "高い潜在能力", "学者"],
    relationships: ["孫悟空", "ピッコロ"],
    description: "悟空の息子で、穏やかな性格ながら非常に高い潜在能力を秘めている。",
    highlight: "戦いを好まない性格と圧倒的な力のギャップが特徴。",
    keywords: ["悟飯", "サイヤ人", "学者", "戦士"]
  },

  {
    id: "piccolo",
    name: "ピッコロ",
    originalName: "Piccolo",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "戦士",
    firstAppearance: "ドラゴンボール",
    personality: "冷静で責任感が強い。",
    features: ["ナメック星人", "再生能力", "格闘"],
    relationships: ["孫悟飯", "孫悟空"],
    description: "かつて悟空と敵対したが、後に頼れる仲間となったナメック星人の戦士。",
    highlight: "悟飯との師弟関係を通じて見せる優しさが印象的。",
    keywords: ["ナメック星人", "師匠", "戦士", "ピッコロ"]
  },

  {
    id: "krillin",
    name: "クリリン",
    originalName: "Krillin",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "武道家",
    firstAppearance: "ドラゴンボール",
    personality: "仲間思いで勇気がある。",
    features: ["地球人", "武道家", "気円斬"],
    relationships: ["孫悟空", "人造人間18号"],
    description: "悟空と共に修行した長年の親友で、地球人を代表する実力派の武道家。",
    highlight: "圧倒的な敵を前にしても仲間のため戦う勇気が魅力。",
    keywords: ["武道家", "悟空", "地球人", "クリリン"]
  },

  {
    id: "bulma",
    name: "ブルマ",
    originalName: "Bulma",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["冒険", "SF"],
    role: "科学者",
    firstAppearance: "ドラゴンボール",
    personality: "行動的で頭の回転が速い。",
    features: ["科学者", "発明", "カプセルコーポレーション"],
    relationships: ["ベジータ", "孫悟空", "トランクス"],
    description: "悟空の最初期からの仲間で、優れた科学技術によって多くの冒険を支える。",
    highlight: "戦闘以外の分野から物語を大きく動かす重要人物。",
    keywords: ["科学者", "発明", "ドラゴンボール", "ブルマ"]
  },

  {
    id: "trunks",
    name: "トランクス",
    originalName: "Trunks",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "戦士",
    firstAppearance: "ドラゴンボールZ",
    personality: "勇敢で真面目。",
    features: ["サイヤ人との混血", "剣", "高い戦闘力"],
    relationships: ["ベジータ", "ブルマ", "孫悟天"],
    description: "ベジータとブルマの息子で、高い戦闘能力を持つ。",
    highlight: "父ベジータとの関係や未来を守ろうとする強い責任感が魅力。",
    keywords: ["トランクス", "サイヤ人", "剣", "ベジータ"]
  },

  {
    id: "son-goten",
    name: "孫悟天",
    originalName: "Son Goten",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "戦士",
    firstAppearance: "ドラゴンボールZ",
    personality: "明るく無邪気。",
    features: ["サイヤ人との混血", "格闘", "フュージョン"],
    relationships: ["孫悟空", "トランクス"],
    description: "悟空の次男で、幼い頃から高い戦闘能力を持っている。",
    highlight: "トランクスとのコンビによる元気な戦いが特徴。",
    keywords: ["悟天", "サイヤ人", "フュージョン", "戦士"]
  },

  {
    id: "frieza",
    name: "フリーザ",
    originalName: "Frieza",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "悪役",
    firstAppearance: "ドラゴンボールZ",
    personality: "冷酷で残忍。",
    features: ["宇宙の帝王", "変身", "高い戦闘力"],
    relationships: ["孫悟空", "ベジータ"],
    description: "多くの惑星を支配してきた強大な存在で、悟空たちと何度も激突する。",
    highlight: "丁寧な話し方と冷酷な行動の対比が強烈。",
    keywords: ["悪役", "宇宙", "フリーザ", "帝王"]
  },

  {
    id: "cell",
    name: "セル",
    originalName: "Cell",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "悪役",
    firstAppearance: "ドラゴンボールZ",
    personality: "自信家で戦闘を楽しむ。",
    features: ["人造生命体", "吸収", "再生"],
    relationships: ["孫悟飯", "孫悟空"],
    description: "さまざまな戦士の特徴を取り込んで生み出された人造生命体。",
    highlight: "進化を重ねながら強さを増していく存在として大きな脅威となる。",
    keywords: ["セル", "悪役", "人造生命体", "戦闘"]
  },

  {
    id: "majin-buu",
    name: "魔人ブウ",
    originalName: "Majin Buu",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "ファンタジー"],
    role: "強敵",
    firstAppearance: "ドラゴンボールZ",
    personality: "無邪気だが危険。",
    features: ["魔人", "再生", "変身"],
    relationships: ["孫悟空", "ミスター・サタン"],
    description: "非常に高い戦闘力と再生能力を持つ魔人。",
    highlight: "姿や性格が変化しながら物語に大きな影響を与える。",
    keywords: ["魔人", "ブウ", "再生", "強敵"]
  },

  {
    id: "android-18",
    name: "人造人間18号",
    originalName: "Android 18",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "戦士",
    firstAppearance: "ドラゴンボールZ",
    personality: "冷静でマイペース。",
    features: ["人造人間", "高い戦闘力", "永久エネルギー"],
    relationships: ["クリリン", "人造人間17号"],
    description: "高い戦闘能力を持つ人造人間で、後にクリリンと家庭を築く。",
    highlight: "クールな性格の中に見せる家族思いな一面。",
    keywords: ["人造人間", "18号", "クリリン", "戦士"]
  },

  {
    id: "android-17",
    name: "人造人間17号",
    originalName: "Android 17",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "戦士",
    firstAppearance: "ドラゴンボールZ",
    personality: "落ち着いていて自由を好む。",
    features: ["人造人間", "高い戦闘力", "バリア"],
    relationships: ["人造人間18号"],
    description: "18号の双子の兄で、非常に高い持久力と戦闘能力を持つ。",
    highlight: "後の物語で頼れる戦士として再び活躍する。",
    keywords: ["人造人間", "17号", "戦士", "バリア"]
  },

  {
    id: "beerus",
    name: "ビルス",
    originalName: "Beerus",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "ファンタジー"],
    role: "破壊神",
    firstAppearance: "ドラゴンボールZ 神と神",
    personality: "気まぐれで食べ物好き。",
    features: ["破壊神", "神", "圧倒的な力"],
    relationships: ["ウイス", "孫悟空"],
    description: "宇宙の均衡に関わる破壊神で、悟空をはるかに上回る力を持つ。",
    highlight: "恐ろしい存在でありながら食事を楽しむコミカルな面もある。",
    keywords: ["破壊神", "神", "ビルス", "宇宙"]
  },

  {
    id: "whis",
    name: "ウイス",
    originalName: "Whis",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "ファンタジー"],
    role: "天使",
    firstAppearance: "ドラゴンボールZ 神と神",
    personality: "穏やかで余裕がある。",
    features: ["天使", "指導者", "非常に高い実力"],
    relationships: ["ビルス", "孫悟空", "ベジータ"],
    description: "破壊神ビルスに仕える天使で、悟空やベジータの修行にも関わる。",
    highlight: "常に落ち着いた態度を崩さない底知れない強さが特徴。",
    keywords: ["天使", "ウイス", "修行", "神"]
  },

  {
    id: "master-roshi",
    name: "亀仙人",
    originalName: "Master Roshi",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "武道の師匠",
    firstAppearance: "ドラゴンボール",
    personality: "お調子者だが武道には真剣。",
    features: ["武道家", "師匠", "かめはめ波"],
    relationships: ["孫悟空", "クリリン"],
    description: "悟空やクリリンに武術を教えた伝説的な武道家。",
    highlight: "普段のコミカルさと武道家としての深い教えのギャップ。",
    keywords: ["亀仙人", "師匠", "武道", "かめはめ波"]
  },

  {
    id: "tien-shinhan",
    name: "天津飯",
    originalName: "Tien Shinhan",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション"],
    role: "武道家",
    firstAppearance: "ドラゴンボール",
    personality: "真面目で修行熱心。",
    features: ["武道家", "三つ目", "気功砲"],
    relationships: ["餃子", "孫悟空"],
    description: "自らの強さを高めるため修行を続ける実力派の武道家。",
    highlight: "強大な敵にも自分のできることを全力でぶつける姿が印象的。",
    keywords: ["天津飯", "武道家", "気功砲", "修行"]
  },

  {
    id: "yamcha",
    name: "ヤムチャ",
    originalName: "Yamcha",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "武道家",
    firstAppearance: "ドラゴンボール",
    personality: "明るく親しみやすい。",
    features: ["武道家", "狼牙風風拳", "元盗賊"],
    relationships: ["孫悟空", "プーアル"],
    description: "かつて荒野の盗賊だったが、悟空たちとの出会いを経て仲間となる。",
    highlight: "初期から長く登場する親しみやすい仲間。",
    keywords: ["ヤムチャ", "武道家", "仲間", "ドラゴンボール"]
  },

  {
    id: "chi-chi",
    name: "チチ",
    originalName: "Chi-Chi",
    work: "ドラゴンボール",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "悟空の妻",
    firstAppearance: "ドラゴンボール",
    personality: "しっかり者で家族思い。",
    features: ["母親", "武術経験", "教育熱心"],
    relationships: ["孫悟空", "孫悟飯", "孫悟天"],
    description: "悟空の妻であり、悟飯と悟天を育てる家族の中心人物。",
    highlight: "戦いばかりの悟空一家を日常生活の面から支える。",
    keywords: ["チチ", "家族", "悟空", "母"]
  },

  {
    id: "broly",
    name: "ブロリー",
    originalName: "Broly",
    work: "ドラゴンボール",
    category: "アニメ映画",
    genre: ["アクション", "SF"],
    role: "サイヤ人の戦士",
    firstAppearance: "ドラゴンボール超 ブロリー",
    personality: "純粋だが感情が力に影響する。",
    features: ["サイヤ人", "驚異的な潜在能力", "怪力"],
    relationships: ["孫悟空", "ベジータ"],
    description: "非常に高い潜在能力を持つサイヤ人で、戦うほど急速に力を伸ばしていく。",
    highlight: "圧倒的な戦闘能力と純粋な内面の対比が魅力。",
    keywords: ["ブロリー", "サイヤ人", "戦士", "怪力"]
  },


  // =====================================================
  // 121〜135 進撃の巨人
  // =====================================================

  {
    id: "eren-yeager",
    name: "エレン・イェーガー",
    originalName: "Eren Yeager",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "主人公",
    firstAppearance: "進撃の巨人",
    personality: "強い意志と自由への執着を持つ。",
    features: ["調査兵団", "巨人", "自由"],
    relationships: ["ミカサ", "アルミン"],
    description: "巨人への強い憎しみを抱き、壁の外の自由を求めて戦い続ける少年。",
    highlight: "物語が進むにつれ、主人公としての印象が大きく変化していく。",
    keywords: ["エレン", "巨人", "自由", "調査兵団"]
  },

  {
    id: "mikasa-ackerman",
    name: "ミカサ・アッカーマン",
    originalName: "Mikasa Ackerman",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "調査兵団兵士",
    firstAppearance: "進撃の巨人",
    personality: "冷静で仲間への思いが強い。",
    features: ["アッカーマン", "高い戦闘能力", "立体機動"],
    relationships: ["エレン", "アルミン"],
    description: "非常に高い戦闘能力を持ち、幼い頃からエレンを大切にしている兵士。",
    highlight: "圧倒的な強さとエレンへの深い感情が物語の重要な軸。",
    keywords: ["ミカサ", "アッカーマン", "調査兵団", "戦士"]
  },

  {
    id: "armin-arlert",
    name: "アルミン・アルレルト",
    originalName: "Armin Arlert",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "調査兵団兵士",
    firstAppearance: "進撃の巨人",
    personality: "知的で思慮深い。",
    features: ["戦略", "頭脳", "調査兵団"],
    relationships: ["エレン", "ミカサ"],
    description: "高い分析力と発想力を持ち、多くの危機を作戦によって切り抜ける。",
    highlight: "戦闘能力ではなく知性によって仲間を支える。",
    keywords: ["アルミン", "頭脳", "調査兵団", "戦略"]
  },

  {
    id: "levi-ackerman",
    name: "リヴァイ",
    originalName: "Levi Ackerman",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "兵士長",
    firstAppearance: "進撃の巨人",
    personality: "冷静で厳格。",
    features: ["人類最強の兵士", "立体機動", "アッカーマン"],
    relationships: ["エルヴィン", "ハンジ"],
    description: "人類最強の兵士と称される調査兵団の兵士長。",
    highlight: "圧倒的な戦闘力と仲間の死を背負い続ける責任感。",
    keywords: ["リヴァイ", "兵士長", "調査兵団", "最強"]
  },

  {
    id: "erwin-smith",
    name: "エルヴィン・スミス",
    originalName: "Erwin Smith",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ドラマ", "ダークファンタジー"],
    role: "調査兵団団長",
    firstAppearance: "進撃の巨人",
    personality: "冷静で大胆。",
    features: ["団長", "戦略家", "指導者"],
    relationships: ["リヴァイ", "ハンジ"],
    description: "人類の未来のため、大きな犠牲を覚悟して作戦を指揮する調査兵団団長。",
    highlight: "人類への使命と個人的な夢の間で揺れる姿。",
    keywords: ["エルヴィン", "団長", "調査兵団", "指導者"]
  },

  {
    id: "hange-zoe",
    name: "ハンジ・ゾエ",
    originalName: "Hange Zoe",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "調査兵団幹部",
    firstAppearance: "進撃の巨人",
    personality: "好奇心旺盛で情熱的。",
    features: ["巨人研究", "指揮官", "調査兵団"],
    relationships: ["リヴァイ", "エルヴィン"],
    description: "巨人への強い研究心を持ち、その知識を人類の戦いに役立てる人物。",
    highlight: "科学的好奇心と仲間を守る責任感を併せ持つ。",
    keywords: ["ハンジ", "研究", "巨人", "調査兵団"]
  },

  {
    id: "jean-kirstein",
    name: "ジャン・キルシュタイン",
    originalName: "Jean Kirstein",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "調査兵団兵士",
    firstAppearance: "進撃の巨人",
    personality: "現実的で仲間思い。",
    features: ["立体機動", "判断力", "兵士"],
    relationships: ["エレン", "コニー"],
    description: "現実的な考え方をする青年で、仲間との経験を通して責任ある兵士へ成長する。",
    highlight: "普通の青年に近い視点から戦争の恐怖と向き合う。",
    keywords: ["ジャン", "兵士", "調査兵団", "成長"]
  },

  {
    id: "connie-springer",
    name: "コニー・スプリンガー",
    originalName: "Connie Springer",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "調査兵団兵士",
    firstAppearance: "進撃の巨人",
    personality: "明るく仲間思い。",
    features: ["兵士", "立体機動", "素早い動き"],
    relationships: ["サシャ", "ジャン"],
    description: "親しみやすい性格の兵士で、過酷な戦いを通じて多くの経験を重ねる。",
    highlight: "明るさを持ちながら重い現実に向き合っていく。",
    keywords: ["コニー", "調査兵団", "兵士", "仲間"]
  },

  {
    id: "sasha-braus",
    name: "サシャ・ブラウス",
    originalName: "Sasha Braus",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "調査兵団兵士",
    firstAppearance: "進撃の巨人",
    personality: "明るく食べることが大好き。",
    features: ["弓", "狩猟", "兵士"],
    relationships: ["コニー", "ジャン"],
    description: "狩猟の経験を持つ兵士で、高い感覚と射撃能力を持つ。",
    highlight: "過酷な物語の中で親しみやすい明るさを与える存在。",
    keywords: ["サシャ", "調査兵団", "狩猟", "兵士"]
  },

  {
    id: "reiner-braun",
    name: "ライナー・ブラウン",
    originalName: "Reiner Braun",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "戦士",
    firstAppearance: "進撃の巨人",
    personality: "責任感が強いが深い葛藤を抱える。",
    features: ["鎧の巨人", "戦士", "高い耐久力"],
    relationships: ["ベルトルト", "アニ"],
    description: "兵士として仲間と行動する一方、大きな秘密と使命を抱えている。",
    highlight: "敵と味方という単純な区分では語れない複雑な人物。",
    keywords: ["ライナー", "鎧の巨人", "戦士", "巨人"]
  },

  {
    id: "bertholdt-hoover",
    name: "ベルトルト・フーバー",
    originalName: "Bertholdt Hoover",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "戦士",
    firstAppearance: "進撃の巨人",
    personality: "控えめで慎重。",
    features: ["超大型巨人", "戦士", "高い破壊力"],
    relationships: ["ライナー", "アニ"],
    description: "穏やかに見える青年だが、物語の根幹に関わる重大な使命を背負う。",
    highlight: "自分の役割と仲間への感情の間で揺れる姿。",
    keywords: ["ベルトルト", "超大型巨人", "巨人", "戦士"]
  },

  {
    id: "annie-leonhart",
    name: "アニ・レオンハート",
    originalName: "Annie Leonhart",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "戦士",
    firstAppearance: "進撃の巨人",
    personality: "無口で冷静。",
    features: ["女型の巨人", "格闘", "戦士"],
    relationships: ["ライナー", "ベルトルト"],
    description: "格闘能力に優れた兵士で、自分の使命を遂行するため冷静に行動する。",
    highlight: "感情を表に出さない人物の内面にある迷いが印象的。",
    keywords: ["アニ", "女型の巨人", "格闘", "戦士"]
  },

  {
    id: "historia-reiss",
    name: "ヒストリア・レイス",
    originalName: "Historia Reiss",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ドラマ", "ダークファンタジー"],
    role: "兵士／王家の人物",
    firstAppearance: "進撃の巨人",
    personality: "優しいが芯が強い。",
    features: ["王家", "兵士", "重要人物"],
    relationships: ["ユミル", "エレン"],
    description: "自分の出生や役割に悩みながら、自分自身の人生を選ぼうとする少女。",
    highlight: "他人の期待ではなく、自分の意思で生きようとする変化。",
    keywords: ["ヒストリア", "王家", "兵士", "進撃"]
  },

  {
    id: "zeke-yeager",
    name: "ジーク・イェーガー",
    originalName: "Zeke Yeager",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "戦士長",
    firstAppearance: "進撃の巨人",
    personality: "冷静で計算高い。",
    features: ["獣の巨人", "戦略", "王家の血"],
    relationships: ["エレン", "ライナー"],
    description: "高い知性と特殊な力を持ち、自らの思想に基づいて行動する戦士。",
    highlight: "エレンとの関係と世界に対する独自の考え方が重要。",
    keywords: ["ジーク", "獣の巨人", "巨人", "戦士"]
  },

  {
    id: "gabi-braun",
    name: "ガビ・ブラウン",
    originalName: "Gabi Braun",
    work: "進撃の巨人",
    category: "アニメ",
    genre: ["ドラマ", "アクション"],
    role: "戦士候補生",
    firstAppearance: "進撃の巨人",
    personality: "勝ち気で行動力がある。",
    features: ["戦士候補生", "射撃", "高い戦闘能力"],
    relationships: ["ファルコ", "ライナー"],
    description: "高い能力を持つ戦士候補生で、自分が信じてきた世界観と現実の違いに直面する。",
    highlight: "敵だと思っていた人々との交流によって考え方が変化していく。",
    keywords: ["ガビ", "戦士候補生", "マーレ", "進撃"]
  },


  // =====================================================
  // 136〜150 呪術廻戦
  // =====================================================

  {
    id: "yuji-itadori",
    name: "虎杖悠仁",
    originalName: "Yuji Itadori",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "主人公",
    firstAppearance: "呪術廻戦",
    personality: "明るく他人を思いやる。",
    features: ["呪術師", "高い身体能力", "宿儺の器"],
    relationships: ["伏黒恵", "釘崎野薔薇", "五条悟"],
    description: "特殊な呪物を取り込んだことで呪術の世界へ足を踏み入れる高校生。",
    highlight: "人の死と向き合いながら、自分なりの正しさを探していく。",
    keywords: ["虎杖", "呪術師", "宿儺", "主人公"]
  },

  {
    id: "megumi-fushiguro",
    name: "伏黒恵",
    originalName: "Megumi Fushiguro",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "呪術師",
    firstAppearance: "呪術廻戦",
    personality: "冷静で真面目。",
    features: ["式神", "十種影法術", "呪術高専"],
    relationships: ["虎杖悠仁", "五条悟"],
    description: "式神を使う術式を持ち、自分が救う価値があると考える人を守ろうとする。",
    highlight: "冷静な性格の内側に強い正義感を持つ。",
    keywords: ["伏黒", "式神", "呪術師", "呪術高専"]
  },

  {
    id: "nobara-kugisaki",
    name: "釘崎野薔薇",
    originalName: "Nobara Kugisaki",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "呪術師",
    firstAppearance: "呪術廻戦",
    personality: "勝ち気で自信がある。",
    features: ["釘", "金槌", "芻霊呪法"],
    relationships: ["虎杖悠仁", "伏黒恵"],
    description: "釘と金槌を使った独特の術式で戦う呪術師。",
    highlight: "自分らしさを大切にしながら強敵にもひるまない姿。",
    keywords: ["釘崎", "呪術師", "釘", "野薔薇"]
  },

  {
    id: "satoru-gojo",
    name: "五条悟",
    originalName: "Satoru Gojo",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "教師／呪術師",
    firstAppearance: "呪術廻戦",
    personality: "自由奔放で自信家。",
    features: ["六眼", "無下限呪術", "教師"],
    relationships: ["虎杖悠仁", "伏黒恵", "夏油傑"],
    description: "現代最強クラスの呪術師として知られ、生徒たちの育成にも力を注ぐ。",
    highlight: "圧倒的な強さと軽い性格の裏に、呪術界を変えたいという考えを持つ。",
    keywords: ["五条悟", "最強", "呪術師", "教師"]
  },

  {
    id: "ryomen-sukuna",
    name: "両面宿儺",
    originalName: "Ryomen Sukuna",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "呪いの王",
    firstAppearance: "呪術廻戦",
    personality: "冷酷で傲慢。",
    features: ["呪いの王", "強大な呪力", "領域展開"],
    relationships: ["虎杖悠仁", "伏黒恵"],
    description: "非常に強大な力を持つ呪いで、虎杖の身体に宿る危険な存在。",
    highlight: "圧倒的な力と予測不能な行動によって物語に緊張感を与える。",
    keywords: ["宿儺", "呪い", "悪役", "呪術"]
  },

  {
    id: "maki-zenin",
    name: "禪院真希",
    originalName: "Maki Zenin",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション"],
    role: "呪術師",
    firstAppearance: "呪術廻戦",
    personality: "努力家で負けず嫌い。",
    features: ["呪具", "高い身体能力", "禪院家"],
    relationships: ["乙骨憂太", "真依"],
    description: "呪力に恵まれない環境でも努力を重ね、呪具を使って戦う。",
    highlight: "才能や家柄に頼らず自分の力で道を切り開く。",
    keywords: ["真希", "呪具", "呪術師", "禪院"]
  },

  {
    id: "toge-inumaki",
    name: "狗巻棘",
    originalName: "Toge Inumaki",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション"],
    role: "呪術師",
    firstAppearance: "呪術廻戦",
    personality: "仲間思いで慎重。",
    features: ["呪言", "言葉", "呪術高専"],
    relationships: ["乙骨憂太", "パンダ"],
    description: "言葉そのものに強い力を宿す呪言師。",
    highlight: "仲間を傷つけないよう日常会話まで工夫している。",
    keywords: ["狗巻", "呪言", "呪術師", "棘"]
  },

  {
    id: "panda-jjk",
    name: "パンダ",
    originalName: "Panda",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "ファンタジー"],
    role: "呪術高専生",
    firstAppearance: "呪術廻戦",
    personality: "明るく仲間思い。",
    features: ["突然変異呪骸", "格闘", "高い知性"],
    relationships: ["狗巻棘", "禪院真希"],
    description: "見た目はパンダだが、高い知性と戦闘能力を持つ特殊な呪骸。",
    highlight: "コミカルな外見と真剣な戦闘力のギャップ。",
    keywords: ["パンダ", "呪骸", "呪術高専", "格闘"]
  },

  {
    id: "yuta-okkotsu",
    name: "乙骨憂太",
    originalName: "Yuta Okkotsu",
    work: "呪術廻戦",
    category: "アニメ映画",
    genre: ["アクション", "ダークファンタジー"],
    role: "呪術師",
    firstAppearance: "劇場版 呪術廻戦 0",
    personality: "温厚で仲間思い。",
    features: ["特級呪術師", "高い呪力", "刀"],
    relationships: ["祈本里香", "五条悟"],
    description: "非常に高い呪力を持つ特級呪術師。",
    highlight: "大切な人への思いと、自分自身の力を受け入れていく成長。",
    keywords: ["乙骨", "特級", "呪術師", "呪術廻戦0"]
  },

  {
    id: "kento-nanami",
    name: "七海建人",
    originalName: "Kento Nanami",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション"],
    role: "一級呪術師",
    firstAppearance: "呪術廻戦",
    personality: "冷静で現実的。",
    features: ["十劃呪法", "スーツ", "一級呪術師"],
    relationships: ["虎杖悠仁", "五条悟"],
    description: "社会人経験を持つ現実的な呪術師で、虎杖の指導にも関わる。",
    highlight: "大人として若い呪術師を守ろうとする責任感。",
    keywords: ["七海", "一級呪術師", "ナナミン", "呪術"]
  },

  {
    id: "suguru-geto",
    name: "夏油傑",
    originalName: "Suguru Geto",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "呪詛師",
    firstAppearance: "呪術廻戦",
    personality: "冷静で思想が強い。",
    features: ["呪霊操術", "元呪術師", "特級"],
    relationships: ["五条悟"],
    description: "かつて五条と共に学んだ呪術師で、ある経験から大きく思想を変化させる。",
    highlight: "五条との友情と決別が物語に深い影響を与える。",
    keywords: ["夏油", "呪霊", "五条", "呪術"]
  },

  {
    id: "mahito",
    name: "真人",
    originalName: "Mahito",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "呪霊",
    firstAppearance: "呪術廻戦",
    personality: "残酷で好奇心が強い。",
    features: ["魂への干渉", "呪霊", "変形"],
    relationships: ["虎杖悠仁", "夏油傑"],
    description: "人間への強い興味を持ち、魂そのものへ干渉する能力を使う呪霊。",
    highlight: "虎杖の価値観を大きく揺さぶる危険な敵。",
    keywords: ["真人", "呪霊", "悪役", "魂"]
  },

  {
    id: "aoi-todo",
    name: "東堂葵",
    originalName: "Aoi Todo",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "呪術師",
    firstAppearance: "呪術廻戦",
    personality: "豪快で独特。",
    features: ["高い身体能力", "術式", "京都校"],
    relationships: ["虎杖悠仁"],
    description: "非常に高い身体能力と独特な価値観を持つ呪術師。",
    highlight: "虎杖との奇妙な友情と高い戦闘センスが魅力。",
    keywords: ["東堂", "呪術師", "京都校", "虎杖"]
  },

  {
    id: "choso",
    name: "脹相",
    originalName: "Choso",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "呪胎九相図",
    firstAppearance: "呪術廻戦",
    personality: "兄弟への思いが非常に強い。",
    features: ["赤血操術", "兄", "呪胎九相図"],
    relationships: ["虎杖悠仁"],
    description: "血液を操る能力を持ち、兄弟への深い愛情を行動の中心に置く。",
    highlight: "敵対関係から変化していく虎杖との関係。",
    keywords: ["脹相", "赤血操術", "兄弟", "呪術"]
  },

  {
    id: "mei-mei",
    name: "冥冥",
    originalName: "Mei Mei",
    work: "呪術廻戦",
    category: "アニメ",
    genre: ["アクション"],
    role: "一級呪術師",
    firstAppearance: "呪術廻戦",
    personality: "冷静で合理的。",
    features: ["黒鳥操術", "一級呪術師", "斧"],
    relationships: ["憂憂"],
    description: "実力と利益を冷静に判断する一級呪術師。",
    highlight: "合理的な考え方と高い戦闘技術が特徴。",
    keywords: ["冥冥", "一級呪術師", "黒鳥", "呪術"]
  },


  // =====================================================
  // 151〜165 名探偵コナン
  // =====================================================

  {
    id: "conan-edogawa",
    name: "江戸川コナン",
    originalName: "Conan Edogawa",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "サスペンス"],
    role: "主人公／探偵",
    firstAppearance: "名探偵コナン",
    personality: "冷静で正義感が強い。",
    features: ["推理", "少年の姿", "探偵"],
    relationships: ["毛利蘭", "灰原哀", "毛利小五郎"],
    description: "高校生探偵・工藤新一が小さな身体となり、江戸川コナンとして事件を解決する。",
    highlight: "限られた立場から知恵と推理で難事件へ挑む。",
    keywords: ["コナン", "探偵", "推理", "事件"]
  },

  {
    id: "shinichi-kudo",
    name: "工藤新一",
    originalName: "Shinichi Kudo",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー"],
    role: "高校生探偵",
    firstAppearance: "名探偵コナン",
    personality: "自信家で正義感が強い。",
    features: ["推理", "高校生探偵", "サッカー"],
    relationships: ["毛利蘭", "服部平次"],
    description: "卓越した推理力を持つ高校生探偵で、コナンの本来の姿。",
    highlight: "論理的な推理によって事件の真相を見抜く。",
    keywords: ["新一", "高校生探偵", "推理", "コナン"]
  },

  {
    id: "ran-mouri",
    name: "毛利蘭",
    originalName: "Ran Mouri",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "ドラマ"],
    role: "高校生",
    firstAppearance: "名探偵コナン",
    personality: "優しく芯が強い。",
    features: ["空手", "高校生", "高い身体能力"],
    relationships: ["工藤新一", "毛利小五郎", "江戸川コナン"],
    description: "新一の幼なじみで、空手の実力者でもある高校生。",
    highlight: "人を思いやる優しさと危険な場面での強さ。",
    keywords: ["蘭", "空手", "新一", "コナン"]
  },

  {
    id: "kogoro-mouri",
    name: "毛利小五郎",
    originalName: "Kogoro Mouri",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "コメディ"],
    role: "私立探偵",
    firstAppearance: "名探偵コナン",
    personality: "お調子者だが家族思い。",
    features: ["私立探偵", "元刑事", "柔道"],
    relationships: ["毛利蘭", "江戸川コナン"],
    description: "探偵事務所を営む元刑事で、コナンの推理によって名探偵として知られるようになる。",
    highlight: "普段は頼りなく見えても重要な場面では父親らしい姿を見せる。",
    keywords: ["小五郎", "探偵", "眠りの小五郎", "コナン"]
  },

  {
    id: "ai-haibara",
    name: "灰原哀",
    originalName: "Ai Haibara",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "サスペンス"],
    role: "科学者",
    firstAppearance: "名探偵コナン",
    personality: "冷静で慎重。",
    features: ["科学", "黒ずくめの組織", "少年の姿"],
    relationships: ["江戸川コナン", "阿笠博士"],
    description: "黒ずくめの組織に所属していた科学者で、コナンと同様に小さな身体となる。",
    highlight: "組織への恐怖と仲間への信頼の間で少しずつ変化する。",
    keywords: ["灰原", "科学者", "黒ずくめ", "コナン"]
  },

  {
    id: "heiji-hattori",
    name: "服部平次",
    originalName: "Heiji Hattori",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー"],
    role: "高校生探偵",
    firstAppearance: "名探偵コナン",
    personality: "熱血で行動的。",
    features: ["推理", "大阪", "剣道"],
    relationships: ["工藤新一", "遠山和葉"],
    description: "大阪を中心に活躍する高校生探偵で、新一の良きライバル。",
    highlight: "新一と協力しながら難事件を解決する名コンビぶり。",
    keywords: ["平次", "高校生探偵", "大阪", "推理"]
  },

  {
    id: "kazuha-toyama",
    name: "遠山和葉",
    originalName: "Kazuha Toyama",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "恋愛"],
    role: "高校生",
    firstAppearance: "名探偵コナン",
    personality: "明るく世話好き。",
    features: ["合気道", "大阪", "幼なじみ"],
    relationships: ["服部平次"],
    description: "平次の幼なじみで、事件に巻き込まれながら彼を支える。",
    highlight: "平次とのじれったい関係が作品の人気要素の一つ。",
    keywords: ["和葉", "平次", "大阪", "幼なじみ"]
  },

  {
    id: "sonoko-suzuki",
    name: "鈴木園子",
    originalName: "Sonoko Suzuki",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "コメディ"],
    role: "蘭の親友",
    firstAppearance: "名探偵コナン",
    personality: "明るく社交的。",
    features: ["鈴木財閥", "高校生", "行動的"],
    relationships: ["毛利蘭", "京極真"],
    description: "蘭の親友で、大企業グループの令嬢ながら気取らない性格。",
    highlight: "コメディ担当として作品を明るくする存在。",
    keywords: ["園子", "鈴木財閥", "蘭", "コナン"]
  },

  {
    id: "hiroshi-agasa",
    name: "阿笠博士",
    originalName: "Hiroshi Agasa",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "SF"],
    role: "発明家",
    firstAppearance: "名探偵コナン",
    personality: "温厚で面倒見が良い。",
    features: ["発明", "科学", "コナンの協力者"],
    relationships: ["江戸川コナン", "灰原哀"],
    description: "コナンの正体を知る協力者で、さまざまな道具を開発する発明家。",
    highlight: "コナンと灰原にとって家族のような安心できる存在。",
    keywords: ["博士", "発明", "コナン", "灰原"]
  },

  {
    id: "shuichi-akai",
    name: "赤井秀一",
    originalName: "Shuichi Akai",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["サスペンス", "アクション"],
    role: "FBI捜査官",
    firstAppearance: "名探偵コナン",
    personality: "冷静で寡黙。",
    features: ["FBI", "狙撃", "推理"],
    relationships: ["江戸川コナン", "安室透"],
    description: "高い狙撃能力と判断力を持つFBI捜査官。",
    highlight: "黒ずくめの組織を巡る攻防で重要な役割を担う。",
    keywords: ["赤井", "FBI", "狙撃", "コナン"]
  },

  {
    id: "tooru-amuro",
    name: "安室透",
    originalName: "Tooru Amuro",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["サスペンス", "ミステリー"],
    role: "公安警察",
    firstAppearance: "名探偵コナン",
    personality: "頭脳明晰で器用。",
    features: ["公安", "探偵", "潜入"],
    relationships: ["江戸川コナン", "赤井秀一"],
    description: "複数の顔を使い分けながら重要な任務を遂行する人物。",
    highlight: "探偵・公安・潜入捜査という複数の立場を持つ。",
    keywords: ["安室", "公安", "探偵", "コナン"]
  },

  {
    id: "gin-conan",
    name: "ジン",
    originalName: "Gin",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "黒ずくめの組織メンバー",
    firstAppearance: "名探偵コナン",
    personality: "冷酷で用心深い。",
    features: ["黒ずくめの組織", "犯罪", "高い警戒心"],
    relationships: ["ウォッカ", "ベルモット"],
    description: "黒ずくめの組織の中でも危険な人物として描かれる。",
    highlight: "コナン側に強い緊張感を与える主要な敵。",
    keywords: ["ジン", "黒ずくめ", "悪役", "組織"]
  },

  {
    id: "vodka-conan",
    name: "ウォッカ",
    originalName: "Vodka",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "黒ずくめの組織メンバー",
    firstAppearance: "名探偵コナン",
    personality: "ジンへの忠誠心が強い。",
    features: ["黒ずくめの組織", "犯罪", "行動員"],
    relationships: ["ジン"],
    description: "ジンと行動を共にすることが多い黒ずくめの組織のメンバー。",
    highlight: "組織の実働役として多くの事件に関わる。",
    keywords: ["ウォッカ", "黒ずくめ", "組織", "コナン"]
  },

  {
    id: "vermouth-conan",
    name: "ベルモット",
    originalName: "Vermouth",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "黒ずくめの組織メンバー",
    firstAppearance: "名探偵コナン",
    personality: "謎が多く大胆。",
    features: ["変装", "演技", "黒ずくめの組織"],
    relationships: ["ジン", "江戸川コナン"],
    description: "優れた変装技術を持ち、組織の中でも独自の行動を見せる人物。",
    highlight: "敵でありながらコナンたちへの複雑な感情を持つ。",
    keywords: ["ベルモット", "変装", "黒ずくめ", "組織"]
  },

  {
    id: "kaito-kid",
    name: "怪盗キッド",
    originalName: "Kaito Kid",
    work: "名探偵コナン",
    category: "アニメ",
    genre: ["ミステリー", "アドベンチャー"],
    role: "怪盗",
    firstAppearance: "名探偵コナン",
    personality: "大胆で華やか。",
    features: ["怪盗", "変装", "マジック"],
    relationships: ["江戸川コナン"],
    description: "華麗な予告とマジックを使って宝石を狙う神出鬼没の怪盗。",
    highlight: "コナンとの知恵比べと華やかな盗みの演出が魅力。",
    keywords: ["怪盗キッド", "怪盗", "マジック", "コナン"]
  },


  // =====================================================
  // 166〜180 BLEACH
  // =====================================================

  {
    id: "ichigo-kurosaki",
    name: "黒崎一護",
    originalName: "Ichigo Kurosaki",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "主人公",
    firstAppearance: "BLEACH",
    personality: "仲間思いで責任感が強い。",
    features: ["死神代行", "斬魄刀", "高い霊力"],
    relationships: ["朽木ルキア", "井上織姫", "石田雨竜"],
    description: "死神の力を得た高校生で、大切な人々を守るため数々の戦いへ身を投じる。",
    highlight: "複数の力と自分の出生の秘密に向き合いながら成長する。",
    keywords: ["一護", "死神", "斬魄刀", "主人公"]
  },

  {
    id: "rukia-kuchiki",
    name: "朽木ルキア",
    originalName: "Rukia Kuchiki",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "死神",
    firstAppearance: "BLEACH",
    personality: "真面目で仲間思い。",
    features: ["死神", "斬魄刀", "朽木家"],
    relationships: ["黒崎一護", "朽木白哉"],
    description: "一護へ死神の力を与え、彼を死神の世界へ導いた人物。",
    highlight: "一護との深い信頼関係がシリーズの中心の一つ。",
    keywords: ["ルキア", "死神", "朽木", "BLEACH"]
  },

  {
    id: "orihime-inoue",
    name: "井上織姫",
    originalName: "Orihime Inoue",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ファンタジー"],
    role: "一護の仲間",
    firstAppearance: "BLEACH",
    personality: "優しく思いやりがある。",
    features: ["盾舜六花", "回復", "防御"],
    relationships: ["黒崎一護", "石田雨竜"],
    description: "一護の同級生で、傷や出来事に干渉する特殊な能力を持つ。",
    highlight: "人を傷つけるより守ることを重視する優しさ。",
    keywords: ["織姫", "回復", "一護", "BLEACH"]
  },

  {
    id: "yasutora-sado",
    name: "茶渡泰虎",
    originalName: "Yasutora Sado",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "一護の仲間",
    firstAppearance: "BLEACH",
    personality: "寡黙で優しい。",
    features: ["怪力", "特殊な右腕", "高い耐久力"],
    relationships: ["黒崎一護"],
    description: "チャドの愛称で呼ばれる一護の親友で、非常に高い身体能力を持つ。",
    highlight: "寡黙ながら友人のためなら危険へ飛び込む強さ。",
    keywords: ["チャド", "怪力", "一護", "BLEACH"]
  },

  {
    id: "uryu-ishida",
    name: "石田雨竜",
    originalName: "Uryu Ishida",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ファンタジー"],
    role: "滅却師",
    firstAppearance: "BLEACH",
    personality: "冷静で理屈っぽい。",
    features: ["滅却師", "弓", "霊力"],
    relationships: ["黒崎一護", "井上織姫"],
    description: "死神とは異なる力を使う滅却師の少年。",
    highlight: "一護と競い合いながらも重要な場面では協力する。",
    keywords: ["雨竜", "滅却師", "弓", "BLEACH"]
  },

  {
    id: "renji-abarai",
    name: "阿散井恋次",
    originalName: "Renji Abarai",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "死神",
    firstAppearance: "BLEACH",
    personality: "熱血で努力家。",
    features: ["斬魄刀", "副隊長", "死神"],
    relationships: ["朽木ルキア", "黒崎一護"],
    description: "護廷十三隊の副隊長を務める死神で、ルキアとは幼なじみ。",
    highlight: "一護との戦いを通じてライバルから仲間へ変化する。",
    keywords: ["恋次", "死神", "副隊長", "斬魄刀"]
  },

  {
    id: "byakuya-kuchiki",
    name: "朽木白哉",
    originalName: "Byakuya Kuchiki",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "隊長",
    firstAppearance: "BLEACH",
    personality: "冷静で誇り高い。",
    features: ["死神", "隊長", "千本桜"],
    relationships: ["朽木ルキア"],
    description: "朽木家当主で護廷十三隊の隊長を務める実力者。",
    highlight: "規律を重んじる姿から少しずつ変化していく。",
    keywords: ["白哉", "隊長", "千本桜", "死神"]
  },

  {
    id: "toshiro-hitsugaya",
    name: "日番谷冬獅郎",
    originalName: "Toshiro Hitsugaya",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "隊長",
    firstAppearance: "BLEACH",
    personality: "真面目で冷静。",
    features: ["氷雪系斬魄刀", "隊長", "天才"],
    relationships: ["松本乱菊"],
    description: "若くして護廷十三隊の隊長となった天才的な死神。",
    highlight: "小柄な見た目と高い実力のギャップ。",
    keywords: ["冬獅郎", "氷", "隊長", "死神"]
  },

  {
    id: "kenpachi-zaraki",
    name: "更木剣八",
    originalName: "Kenpachi Zaraki",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "隊長",
    firstAppearance: "BLEACH",
    personality: "戦闘を何より楽しむ。",
    features: ["怪力", "隊長", "戦闘狂"],
    relationships: ["草鹿やちる", "黒崎一護"],
    description: "強敵との戦いを求め続ける護廷十三隊屈指の戦闘派。",
    highlight: "純粋に戦いを楽しむ豪快な姿が特徴。",
    keywords: ["剣八", "隊長", "最強", "戦闘"]
  },

  {
    id: "yoruichi-shihoin",
    name: "四楓院夜一",
    originalName: "Yoruichi Shihoin",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "元隊長",
    firstAppearance: "BLEACH",
    personality: "自由奔放で面倒見が良い。",
    features: ["瞬歩", "格闘", "変身"],
    relationships: ["浦原喜助"],
    description: "非常に高い速度と格闘能力を持つ元護廷十三隊隊長。",
    highlight: "軽快な性格と圧倒的なスピードが魅力。",
    keywords: ["夜一", "瞬歩", "死神", "格闘"]
  },

  {
    id: "kisuke-urahara",
    name: "浦原喜助",
    originalName: "Kisuke Urahara",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ミステリー"],
    role: "元隊長／商店主",
    firstAppearance: "BLEACH",
    personality: "飄々として頭脳明晰。",
    features: ["科学", "死神", "発明"],
    relationships: ["四楓院夜一", "黒崎一護"],
    description: "一見気楽な商店主だが、非常に高い知識と戦闘能力を持つ。",
    highlight: "常に何手も先を読む策士として活躍する。",
    keywords: ["浦原", "科学", "死神", "策士"]
  },

  {
    id: "sosuke-aizen",
    name: "藍染惣右介",
    originalName: "Sosuke Aizen",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "主要な敵",
    firstAppearance: "BLEACH",
    personality: "冷静で計算高い。",
    features: ["完全催眠", "高い知力", "強大な霊力"],
    relationships: ["黒崎一護"],
    description: "高い知性と力を持ち、長期にわたる計画を進める人物。",
    highlight: "物語の見え方を大きく変える策謀が特徴。",
    keywords: ["藍染", "悪役", "催眠", "BLEACH"]
  },

  {
    id: "grimmjow-jaegerjaquez",
    name: "グリムジョー・ジャガージャック",
    originalName: "Grimmjow Jaegerjaquez",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション"],
    role: "破面",
    firstAppearance: "BLEACH",
    personality: "好戦的で自信家。",
    features: ["破面", "十刃", "格闘"],
    relationships: ["黒崎一護"],
    description: "強い相手との戦いを好み、一護をライバル視する破面。",
    highlight: "一護との激しい直接対決が見どころ。",
    keywords: ["グリムジョー", "破面", "十刃", "一護"]
  },

  {
    id: "ulquiorra-cifer",
    name: "ウルキオラ・シファー",
    originalName: "Ulquiorra Cifer",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "破面",
    firstAppearance: "BLEACH",
    personality: "冷静で感情に乏しい。",
    features: ["十刃", "破面", "高速再生"],
    relationships: ["黒崎一護", "井上織姫"],
    description: "感情や心というものを理解しようとしない冷静な破面。",
    highlight: "織姫との交流を通して心について考え始める。",
    keywords: ["ウルキオラ", "十刃", "破面", "BLEACH"]
  },

  {
    id: "mayuri-kurotsuchi",
    name: "涅マユリ",
    originalName: "Mayuri Kurotsuchi",
    work: "BLEACH",
    category: "アニメ",
    genre: ["アクション", "SF"],
    role: "隊長／科学者",
    firstAppearance: "BLEACH",
    personality: "研究への執着が強い。",
    features: ["科学者", "隊長", "発明"],
    relationships: ["涅ネム"],
    description: "護廷十三隊の隊長であり、研究開発を担当する科学者。",
    highlight: "倫理より研究を優先する危うさと高い技術力。",
    keywords: ["マユリ", "科学者", "隊長", "死神"]
  },


  // =====================================================
  // 181〜190 HUNTER×HUNTER
  // =====================================================

  {
    id: "gon-freecss",
    name: "ゴン＝フリークス",
    originalName: "Gon Freecss",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "主人公",
    firstAppearance: "HUNTER×HUNTER",
    personality: "好奇心旺盛で純粋。",
    features: ["ハンター", "高い身体能力", "念能力"],
    relationships: ["キルア", "クラピカ", "レオリオ"],
    description: "父親を探すためハンターとなり、未知の世界へ冒険する少年。",
    highlight: "純粋さが強さにも危うさにもつながる主人公。",
    keywords: ["ゴン", "ハンター", "冒険", "主人公"]
  },

  {
    id: "killua-zoldyck",
    name: "キルア＝ゾルディック",
    originalName: "Killua Zoldyck",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "ゴンの親友",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静だが友達思い。",
    features: ["暗殺者一家", "電気", "念能力"],
    relationships: ["ゴン", "アルカ"],
    description: "暗殺一家に生まれた高い戦闘能力を持つ少年。",
    highlight: "ゴンとの友情を通して自分の人生を選び始める。",
    keywords: ["キルア", "ゾルディック", "電気", "ハンター"]
  },

  {
    id: "kurapika",
    name: "クラピカ",
    originalName: "Kurapika",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "サスペンス"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静で強い目的意識を持つ。",
    features: ["鎖", "緋の眼", "念能力"],
    relationships: ["ゴン", "キルア", "幻影旅団"],
    description: "滅ぼされた一族のために幻影旅団を追うハンター。",
    highlight: "復讐への思いと仲間への感情の間で揺れる。",
    keywords: ["クラピカ", "鎖", "緋の眼", "ハンター"]
  },

  {
    id: "leorio",
    name: "レオリオ",
    originalName: "Leorio",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "ドラマ"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "熱血で仲間思い。",
    features: ["医者志望", "ハンター", "交渉"],
    relationships: ["ゴン", "キルア", "クラピカ"],
    description: "医者になるという目標を持ちながらハンターを目指す青年。",
    highlight: "口は悪くても困っている仲間を放っておけない。",
    keywords: ["レオリオ", "医者", "ハンター", "仲間"]
  },

  {
    id: "hisoka",
    name: "ヒソカ",
    originalName: "Hisoka",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "サスペンス"],
    role: "ハンター／戦闘者",
    firstAppearance: "HUNTER×HUNTER",
    personality: "気まぐれで戦闘を好む。",
    features: ["念能力", "トランプ", "奇術師"],
    relationships: ["ゴン", "クロロ"],
    description: "強い相手と戦うことを楽しみに行動する謎の多い人物。",
    highlight: "敵にも味方にもなり得る予測不能な立ち位置。",
    keywords: ["ヒソカ", "念", "奇術師", "戦闘"]
  },

  {
    id: "chrollo-lucilfer",
    name: "クロロ＝ルシルフル",
    originalName: "Chrollo Lucilfer",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "犯罪"],
    role: "幻影旅団団長",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静でカリスマ性がある。",
    features: ["念能力", "幻影旅団", "団長"],
    relationships: ["クラピカ", "ヒソカ"],
    description: "幻影旅団を率いる団長で、多彩な能力と高い判断力を持つ。",
    highlight: "仲間を重視する一方で冷酷な犯罪も行う複雑さ。",
    keywords: ["クロロ", "幻影旅団", "団長", "念"]
  },

  {
    id: "biscuit-krueger",
    name: "ビスケット＝クルーガー",
    originalName: "Biscuit Krueger",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "ハンター／師匠",
    firstAppearance: "HUNTER×HUNTER",
    personality: "明るいが指導には厳しい。",
    features: ["念能力", "師匠", "高い戦闘力"],
    relationships: ["ゴン", "キルア"],
    description: "豊富な経験を持つ熟練ハンターで、ゴンとキルアの修行を担当する。",
    highlight: "外見からは想像しにくい圧倒的な実力。",
    keywords: ["ビスケ", "師匠", "念", "ハンター"]
  },

  {
    id: "isaac-netero",
    name: "アイザック＝ネテロ",
    originalName: "Isaac Netero",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション"],
    role: "ハンター協会会長",
    firstAppearance: "HUNTER×HUNTER",
    personality: "飄々として戦いを楽しむ。",
    features: ["会長", "武道", "念能力"],
    relationships: ["メルエム"],
    description: "ハンター協会を率いる長老で、長年の修行による圧倒的な力を持つ。",
    highlight: "人類屈指の強者としてメルエムとの戦いに臨む。",
    keywords: ["ネテロ", "会長", "念", "ハンター"]
  },

  {
    id: "meruem",
    name: "メルエム",
    originalName: "Meruem",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "キメラアントの王",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷酷だが次第に変化する。",
    features: ["王", "圧倒的な力", "高い知性"],
    relationships: ["コムギ", "ネテロ"],
    description: "キメラアントの王として生まれ、人間を圧倒する力と知性を持つ。",
    highlight: "コムギとの交流によって価値観が大きく変化する。",
    keywords: ["メルエム", "王", "キメラアント", "最強"]
  },

  {
    id: "komugi",
    name: "コムギ",
    originalName: "Komugi",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["ドラマ"],
    role: "軍儀棋士",
    firstAppearance: "HUNTER×HUNTER",
    personality: "純粋で謙虚。",
    features: ["軍儀", "天才棋士", "集中力"],
    relationships: ["メルエム"],
    description: "軍儀という盤上競技で圧倒的な才能を持つ少女。",
    highlight: "戦闘力を持たない彼女がメルエムの心を大きく変えていく。",
    keywords: ["コムギ", "軍儀", "メルエム", "棋士"]
  },


  // =====================================================
  // 191〜200 鋼の錬金術師
  // =====================================================

  {
    id: "edward-elric",
    name: "エドワード・エルリック",
    originalName: "Edward Elric",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "主人公",
    firstAppearance: "鋼の錬金術師",
    personality: "短気だが家族思い。",
    features: ["国家錬金術師", "錬金術", "機械鎧"],
    relationships: ["アルフォンス", "ウィンリィ"],
    description: "失った身体を取り戻す方法を探すため、弟アルフォンスと旅を続ける錬金術師。",
    highlight: "過ちを背負いながら前へ進もうとする兄弟の物語。",
    keywords: ["エドワード", "錬金術", "鋼", "主人公"]
  },

  {
    id: "alphonse-elric",
    name: "アルフォンス・エルリック",
    originalName: "Alphonse Elric",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "主人公の弟",
    firstAppearance: "鋼の錬金術師",
    personality: "優しく穏やか。",
    features: ["鎧の身体", "錬金術", "弟"],
    relationships: ["エドワード", "ウィンリィ"],
    description: "魂を鎧へ定着させた姿で兄エドワードと旅を続ける。",
    highlight: "大きな鎧の姿とは対照的な優しい性格。",
    keywords: ["アルフォンス", "鎧", "錬金術", "兄弟"]
  },

  {
    id: "winry-rockbell",
    name: "ウィンリィ・ロックベル",
    originalName: "Winry Rockbell",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "機械鎧技師",
    firstAppearance: "鋼の錬金術師",
    personality: "明るく努力家。",
    features: ["機械鎧", "技師", "幼なじみ"],
    relationships: ["エドワード", "アルフォンス"],
    description: "エドワードの機械鎧を整備する優秀な技師。",
    highlight: "戦闘ではなく技術と人への思いやりで兄弟を支える。",
    keywords: ["ウィンリィ", "機械鎧", "技師", "幼なじみ"]
  },

  {
    id: "roy-mustang",
    name: "ロイ・マスタング",
    originalName: "Roy Mustang",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "国家錬金術師／軍人",
    firstAppearance: "鋼の錬金術師",
    personality: "野心的で仲間思い。",
    features: ["炎の錬金術", "軍人", "大佐"],
    relationships: ["リザ・ホークアイ", "エドワード"],
    description: "炎を操る錬金術師で、国を変えるという大きな目標を持つ軍人。",
    highlight: "野心家でありながら部下を非常に大切にする。",
    keywords: ["マスタング", "炎", "錬金術", "大佐"]
  },

  {
    id: "riza-hawkeye",
    name: "リザ・ホークアイ",
    originalName: "Riza Hawkeye",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "軍人",
    firstAppearance: "鋼の錬金術師",
    personality: "冷静で責任感が強い。",
    features: ["射撃", "軍人", "副官"],
    relationships: ["ロイ・マスタング"],
    description: "優れた射撃技術を持ち、マスタングを支える信頼の厚い副官。",
    highlight: "互いに強い信頼を持つマスタングとの関係。",
    keywords: ["ホークアイ", "射撃", "軍人", "副官"]
  },

  {
    id: "scar-fma",
    name: "スカー",
    originalName: "Scar",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "復讐者",
    firstAppearance: "鋼の錬金術師",
    personality: "寡黙で強い復讐心を持つ。",
    features: ["破壊の錬成", "イシュヴァール", "格闘"],
    relationships: ["エドワード", "国家錬金術師"],
    description: "故郷を巡る過去から国家錬金術師を狙う人物。",
    highlight: "復讐だけでなく、自分が進むべき道を考えるようになる。",
    keywords: ["スカー", "復讐", "イシュヴァール", "錬金術"]
  },

  {
    id: "ling-yao",
    name: "リン・ヤオ",
    originalName: "Ling Yao",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "シン国の皇子",
    firstAppearance: "鋼の錬金術師",
    personality: "明るく野心的。",
    features: ["皇子", "高い身体能力", "気の感知"],
    relationships: ["グリード", "ランファン"],
    description: "皇帝になるため不老不死の方法を探して旅をするシン国の皇子。",
    highlight: "野心を持ちながら、自分の民や仲間を何より大切にする。",
    keywords: ["リン", "皇子", "シン", "グリード"]
  },

  {
    id: "greed-fma",
    name: "グリード",
    originalName: "Greed",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "ホムンクルス",
    firstAppearance: "鋼の錬金術師",
    personality: "欲望に忠実で自由を好む。",
    features: ["最強の盾", "ホムンクルス", "再生"],
    relationships: ["リン・ヤオ"],
    description: "あらゆるものを欲しがる強欲を象徴するホムンクルス。",
    highlight: "欲望を追求する中で仲間という存在の価値に気づいていく。",
    keywords: ["グリード", "ホムンクルス", "強欲", "リン"]
  },

  {
    id: "envy-fma",
    name: "エンヴィー",
    originalName: "Envy",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "ホムンクルス",
    firstAppearance: "鋼の錬金術師",
    personality: "挑発的で残酷。",
    features: ["変身", "ホムンクルス", "嫉妬"],
    relationships: ["エドワード", "マスタング"],
    description: "自由に姿を変える能力を持ち、人間同士の争いを利用するホムンクルス。",
    highlight: "人間を見下す態度の奥にある感情が重要。",
    keywords: ["エンヴィー", "ホムンクルス", "嫉妬", "変身"]
  },

  {
    id: "father-fma",
    name: "お父様",
    originalName: "Father",
    work: "鋼の錬金術師",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "主要な敵",
    firstAppearance: "鋼の錬金術師",
    personality: "冷静で目的のためなら犠牲をいとわない。",
    features: ["錬金術", "ホムンクルス", "巨大な計画"],
    relationships: ["ホムンクルス", "エドワード"],
    description: "ホムンクルスたちを従え、大規模な計画を進める物語の中心的な敵。",
    highlight: "人間の感情や弱さを切り捨てようとする思想が兄弟と対照的。",
    keywords: ["お父様", "悪役", "錬金術", "ホムンクルス"]
  }

);
// =====================================================
// 201〜220 ポケットモンスター
// =====================================================

characters.push(

  {
    id: "ash-ketchum",
    name: "サトシ",
    originalName: "Ash Ketchum / Satoshi",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "主人公／ポケモントレーナー",
    firstAppearance: "ポケットモンスター",
    personality: "前向きで仲間思い。挑戦を恐れない。",
    features: ["ポケモントレーナー", "冒険", "バトル"],
    relationships: ["ピカチュウ", "カスミ", "タケシ"],
    description: "ポケモンマスターを目指し、相棒のピカチュウとさまざまな地方を旅する少年。",
    highlight: "勝敗だけでなくポケモンとの信頼を大切にしながら成長していく。",
    keywords: ["サトシ", "ポケモン", "トレーナー", "主人公"]
  },

  {
    id: "pikachu",
    name: "ピカチュウ",
    originalName: "Pikachu",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "サトシの相棒",
    firstAppearance: "ポケットモンスター",
    personality: "勇敢で仲間思い。",
    features: ["でんきタイプ", "相棒", "10まんボルト"],
    relationships: ["サトシ"],
    description: "サトシと長い旅を続けるポケモン。小さな身体ながら数々の強敵へ立ち向かう。",
    highlight: "サトシとの強い信頼関係がシリーズを象徴している。",
    keywords: ["ピカチュウ", "でんき", "ポケモン", "相棒"]
  },

  {
    id: "misty-pokemon",
    name: "カスミ",
    originalName: "Misty / Kasumi",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモントレーナー",
    firstAppearance: "ポケットモンスター",
    personality: "勝ち気で面倒見が良い。",
    features: ["みずタイプ", "トレーナー", "ジム"],
    relationships: ["サトシ", "タケシ"],
    description: "みずタイプのポケモンを得意とし、サトシの旅に同行したトレーナー。",
    highlight: "強気な性格ながら仲間やポケモンを大切にする。",
    keywords: ["カスミ", "みずタイプ", "トレーナー", "ポケモン"]
  },

  {
    id: "brock-pokemon",
    name: "タケシ",
    originalName: "Brock / Takeshi",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモンブリーダー志望",
    firstAppearance: "ポケットモンスター",
    personality: "穏やかで世話好き。",
    features: ["料理", "ポケモンの知識", "いわタイプ"],
    relationships: ["サトシ", "カスミ"],
    description: "豊富なポケモン知識と料理の腕で旅の仲間を支える青年。",
    highlight: "仲間の生活面まで支える頼れる存在。",
    keywords: ["タケシ", "ブリーダー", "ポケモン", "料理"]
  },

  {
    id: "jessie-pokemon",
    name: "ムサシ",
    originalName: "Jessie / Musashi",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["コメディ", "冒険"],
    role: "ロケット団",
    firstAppearance: "ポケットモンスター",
    personality: "負けず嫌いで自信家。",
    features: ["ロケット団", "変装", "作戦"],
    relationships: ["コジロウ", "ニャース"],
    description: "ピカチュウを狙ってサトシたちを追い続けるロケット団のメンバー。",
    highlight: "失敗しても何度でも挑戦する強烈なキャラクター性。",
    keywords: ["ムサシ", "ロケット団", "悪役", "ポケモン"]
  },

  {
    id: "james-pokemon",
    name: "コジロウ",
    originalName: "James / Kojiro",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["コメディ", "冒険"],
    role: "ロケット団",
    firstAppearance: "ポケットモンスター",
    personality: "優しく少し気弱。",
    features: ["ロケット団", "変装", "ポケモン好き"],
    relationships: ["ムサシ", "ニャース"],
    description: "ムサシやニャースと共に行動するロケット団のメンバー。",
    highlight: "敵役でありながらポケモンへの優しさを見せることも多い。",
    keywords: ["コジロウ", "ロケット団", "ポケモン", "コメディ"]
  },

  {
    id: "meowth-team-rocket",
    name: "ニャース",
    originalName: "Meowth",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["コメディ", "冒険"],
    role: "ロケット団",
    firstAppearance: "ポケットモンスター",
    personality: "おしゃべりで頭の回転が速い。",
    features: ["人の言葉", "ロケット団", "発明"],
    relationships: ["ムサシ", "コジロウ"],
    description: "人間の言葉を話す珍しいニャースで、ロケット団の作戦にも積極的に参加する。",
    highlight: "ポケモンでありながら人間のような会話をする独特の存在。",
    keywords: ["ニャース", "ロケット団", "しゃべる", "ポケモン"]
  },

  {
    id: "professor-oak",
    name: "オーキド博士",
    originalName: "Professor Oak",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモン研究者",
    firstAppearance: "ポケットモンスター",
    personality: "温厚で知識豊富。",
    features: ["研究者", "ポケモン図鑑", "博士"],
    relationships: ["サトシ", "シゲル"],
    description: "ポケモン研究の第一人者として、多くのトレーナーを支える博士。",
    highlight: "サトシの旅の出発点となる重要人物。",
    keywords: ["博士", "研究", "ポケモン", "オーキド"]
  },

  {
    id: "gary-oak",
    name: "シゲル",
    originalName: "Gary Oak / Shigeru",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモントレーナー",
    firstAppearance: "ポケットモンスター",
    personality: "自信家で競争心が強い。",
    features: ["トレーナー", "研究", "ライバル"],
    relationships: ["サトシ", "オーキド博士"],
    description: "サトシの幼なじみであり、ライバルとして旅を始めたトレーナー。",
    highlight: "サトシとは異なる道を進みながら自分の目標を見つけていく。",
    keywords: ["シゲル", "ライバル", "トレーナー", "ポケモン"]
  },

  {
    id: "may-pokemon",
    name: "ハルカ",
    originalName: "May / Haruka",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモンコーディネーター",
    firstAppearance: "ポケットモンスター アドバンスジェネレーション",
    personality: "明るく努力家。",
    features: ["コーディネーター", "コンテスト", "旅"],
    relationships: ["サトシ", "マサト"],
    description: "旅を通じてポケモンコンテストの魅力を知り、コーディネーターとして成長する少女。",
    highlight: "初心者から自分なりの夢を見つけていく成長。",
    keywords: ["ハルカ", "コンテスト", "ポケモン", "コーディネーター"]
  },

  {
    id: "max-pokemon",
    name: "マサト",
    originalName: "Max / Masato",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険"],
    role: "旅の仲間",
    firstAppearance: "ポケットモンスター アドバンスジェネレーション",
    personality: "好奇心旺盛で勉強熱心。",
    features: ["ポケモン知識", "旅", "ハルカの弟"],
    relationships: ["ハルカ", "サトシ"],
    description: "ハルカの弟としてサトシたちの旅に同行する少年。",
    highlight: "まだトレーナーではない立場からポケモンについて多くを学ぶ。",
    keywords: ["マサト", "ハルカ", "ポケモン", "旅"]
  },

  {
    id: "dawn-pokemon",
    name: "ヒカリ",
    originalName: "Dawn / Hikari",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモンコーディネーター",
    firstAppearance: "ポケットモンスター ダイヤモンド＆パール",
    personality: "前向きで明るい。",
    features: ["コンテスト", "コーディネーター", "ポッチャマ"],
    relationships: ["サトシ", "タケシ"],
    description: "トップコーディネーターを目指して旅する少女。",
    highlight: "失敗を経験しながら自信を取り戻していく姿が魅力。",
    keywords: ["ヒカリ", "ポッチャマ", "コンテスト", "ポケモン"]
  },

  {
    id: "iris-pokemon",
    name: "アイリス",
    originalName: "Iris",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモントレーナー",
    firstAppearance: "ポケットモンスター ベストウイッシュ",
    personality: "活発で自然を好む。",
    features: ["ドラゴンタイプ", "トレーナー", "冒険"],
    relationships: ["サトシ", "デント"],
    description: "ドラゴンタイプのポケモンとの強いつながりを持つトレーナー。",
    highlight: "自然の中で培った感覚とポケモンへの理解が特徴。",
    keywords: ["アイリス", "ドラゴン", "トレーナー", "ポケモン"]
  },

  {
    id: "cilan-pokemon",
    name: "デント",
    originalName: "Cilan / Dent",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモンソムリエ",
    firstAppearance: "ポケットモンスター ベストウイッシュ",
    personality: "知識豊富で落ち着いている。",
    features: ["ポケモンソムリエ", "料理", "ジムリーダー"],
    relationships: ["サトシ", "アイリス"],
    description: "ポケモンとトレーナーの相性を見る能力を磨く青年。",
    highlight: "幅広い趣味と知識で旅を支える。",
    keywords: ["デント", "ソムリエ", "ポケモン", "ジム"]
  },

  {
    id: "serena-pokemon",
    name: "セレナ",
    originalName: "Serena",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "青春"],
    role: "ポケモンパフォーマー",
    firstAppearance: "ポケットモンスター XY",
    personality: "優しく努力家。",
    features: ["パフォーマンス", "旅", "トレーナー"],
    relationships: ["サトシ", "シトロン", "ユリーカ"],
    description: "自分が本当にやりたいことを探しながらサトシたちと旅する少女。",
    highlight: "自分の夢を見つけ、それに向かって努力する成長が魅力。",
    keywords: ["セレナ", "パフォーマー", "サトシ", "ポケモン"]
  },

  {
    id: "clemont-pokemon",
    name: "シトロン",
    originalName: "Clemont / Citron",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "SF"],
    role: "ジムリーダー",
    firstAppearance: "ポケットモンスター XY",
    personality: "真面目で発明好き。",
    features: ["発明", "でんきタイプ", "ジムリーダー"],
    relationships: ["サトシ", "ユリーカ"],
    description: "発明を得意とするジムリーダーで、サトシの旅に同行する。",
    highlight: "科学への情熱とトレーナーとしての成長が特徴。",
    keywords: ["シトロン", "発明", "ジムリーダー", "ポケモン"]
  },

  {
    id: "bonnie-pokemon",
    name: "ユリーカ",
    originalName: "Bonnie / Eureka",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険"],
    role: "旅の仲間",
    firstAppearance: "ポケットモンスター XY",
    personality: "元気で好奇心旺盛。",
    features: ["シトロンの妹", "旅", "ポケモン好き"],
    relationships: ["シトロン", "サトシ", "セレナ"],
    description: "兄のシトロンと共にサトシたちの旅へ同行する少女。",
    highlight: "ポケモンへの純粋な愛情が魅力。",
    keywords: ["ユリーカ", "シトロン", "旅", "ポケモン"]
  },

  {
    id: "lillie-pokemon",
    name: "リーリエ",
    originalName: "Lillie",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "青春"],
    role: "ポケモンスクール生徒",
    firstAppearance: "ポケットモンスター サン＆ムーン",
    personality: "知識豊富で優しい。",
    features: ["ポケモンスクール", "成長", "アローラ"],
    relationships: ["サトシ"],
    description: "ポケモンについて豊富な知識を持つアローラ地方の少女。",
    highlight: "苦手意識を乗り越えてポケモンとの絆を深めていく。",
    keywords: ["リーリエ", "アローラ", "ポケモン", "スクール"]
  },

  {
    id: "goh-pokemon",
    name: "ゴウ",
    originalName: "Goh",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ポケモントレーナー",
    firstAppearance: "ポケットモンスター",
    personality: "知識欲が強く行動的。",
    features: ["ポケモン収集", "研究", "冒険"],
    relationships: ["サトシ"],
    description: "多くのポケモンとの出会いを求め、サトシと共に世界各地を旅する少年。",
    highlight: "サトシとは異なる目標を持ちながら互いに刺激を与える。",
    keywords: ["ゴウ", "トレーナー", "研究", "ポケモン"]
  },

  {
    id: "chloe-pokemon",
    name: "コハル",
    originalName: "Chloe / Koharu",
    work: "ポケットモンスター",
    category: "アニメ",
    genre: ["青春", "冒険"],
    role: "学生",
    firstAppearance: "ポケットモンスター",
    personality: "冷静で慎重。",
    features: ["イーブイ", "成長", "研究所"],
    relationships: ["ゴウ", "サトシ"],
    description: "ポケモンとの関わりを通じて自分の将来や進む道を考えていく少女。",
    highlight: "最初から明確な夢を持たず、少しずつ可能性を探していく点が特徴。",
    keywords: ["コハル", "イーブイ", "ポケモン", "成長"]
  },


  // =====================================================
  // 221〜240 ジョジョの奇妙な冒険
  // =====================================================

  {
    id: "jonathan-joestar",
    name: "ジョナサン・ジョースター",
    originalName: "Jonathan Joestar",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "主人公",
    firstAppearance: "ファントムブラッド",
    personality: "誠実で正義感が強い。",
    features: ["波紋", "紳士", "ジョースター家"],
    relationships: ["ディオ・ブランドー"],
    description: "ジョースター家に生まれ、宿敵ディオとの運命的な戦いへ挑む青年。",
    highlight: "正々堂々とした精神と強い意志が特徴。",
    keywords: ["ジョナサン", "波紋", "ジョースター", "主人公"]
  },

  {
    id: "dio-brando",
    name: "ディオ・ブランドー",
    originalName: "Dio Brando",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "ダークファンタジー"],
    role: "宿敵",
    firstAppearance: "ファントムブラッド",
    personality: "野心的で冷酷。",
    features: ["吸血鬼", "高い知性", "宿敵"],
    relationships: ["ジョナサン・ジョースター"],
    description: "強烈な野心を持ち、ジョースター家と長い因縁を生み出す人物。",
    highlight: "シリーズ全体へ影響を与える象徴的な敵。",
    keywords: ["ディオ", "吸血鬼", "悪役", "ジョジョ"]
  },

  {
    id: "joseph-joestar",
    name: "ジョセフ・ジョースター",
    originalName: "Joseph Joestar",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "主人公",
    firstAppearance: "戦闘潮流",
    personality: "陽気で機転が利く。",
    features: ["波紋", "策略", "ジョースター家"],
    relationships: ["シーザー", "リサリサ"],
    description: "知恵と大胆な作戦を使い、圧倒的な強敵へ立ち向かう青年。",
    highlight: "力だけではなく相手の心理を読む戦い方が魅力。",
    keywords: ["ジョセフ", "波紋", "策略", "ジョジョ"]
  },

  {
    id: "caesar-zeppeli",
    name: "シーザー・A・ツェペリ",
    originalName: "Caesar A. Zeppeli",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション"],
    role: "波紋戦士",
    firstAppearance: "戦闘潮流",
    personality: "誇り高く情熱的。",
    features: ["波紋", "シャボン", "戦士"],
    relationships: ["ジョセフ・ジョースター", "リサリサ"],
    description: "波紋の技術を受け継ぐ戦士で、ジョセフと共に強敵へ挑む。",
    highlight: "ジョセフとの友情と自らの誇りを貫く姿。",
    keywords: ["シーザー", "波紋", "戦士", "ジョジョ"]
  },

  {
    id: "lisa-lisa",
    name: "リサリサ",
    originalName: "Lisa Lisa",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション"],
    role: "波紋の師匠",
    firstAppearance: "戦闘潮流",
    personality: "冷静で厳格。",
    features: ["波紋", "師匠", "高い戦闘力"],
    relationships: ["ジョセフ", "シーザー"],
    description: "高度な波紋技術を持ち、ジョセフとシーザーを鍛える師匠。",
    highlight: "落ち着いた指導者として高い実力を見せる。",
    keywords: ["リサリサ", "波紋", "師匠", "ジョジョ"]
  },

  {
    id: "jotaro-kujo",
    name: "空条承太郎",
    originalName: "Jotaro Kujo",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "主人公",
    firstAppearance: "スターダストクルセイダース",
    personality: "寡黙で冷静。",
    features: ["スタンド", "スタープラチナ", "高い判断力"],
    relationships: ["ジョセフ", "花京院"],
    description: "強力なスタンド能力を持ち、仲間と共に長い旅へ出る青年。",
    highlight: "冷静な判断と圧倒的なスタンド能力が魅力。",
    keywords: ["承太郎", "スタンド", "スタープラチナ", "ジョジョ"]
  },

  {
    id: "noriaki-kakyoin",
    name: "花京院典明",
    originalName: "Noriaki Kakyoin",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "仲間",
    firstAppearance: "スターダストクルセイダース",
    personality: "冷静で知的。",
    features: ["スタンド", "ハイエロファントグリーン", "分析"],
    relationships: ["空条承太郎"],
    description: "承太郎たちの旅に同行し、冷静な分析で仲間を支えるスタンド使い。",
    highlight: "危険な状況でも相手の能力を見抜こうとする知性。",
    keywords: ["花京院", "スタンド", "仲間", "ジョジョ"]
  },

  {
    id: "jean-pierre-polnareff",
    name: "ジャン＝ピエール・ポルナレフ",
    originalName: "Jean Pierre Polnareff",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "仲間",
    firstAppearance: "スターダストクルセイダース",
    personality: "陽気で情に厚い。",
    features: ["スタンド", "剣", "シルバーチャリオッツ"],
    relationships: ["承太郎", "アヴドゥル"],
    description: "剣を操るスタンドを使い、承太郎たちと共に旅をするフランス人。",
    highlight: "コミカルさと仲間への深い情の両方を持つ。",
    keywords: ["ポルナレフ", "スタンド", "剣", "ジョジョ"]
  },

  {
    id: "muhammad-avdol",
    name: "モハメド・アヴドゥル",
    originalName: "Muhammad Avdol",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション"],
    role: "仲間",
    firstAppearance: "スターダストクルセイダース",
    personality: "冷静で責任感が強い。",
    features: ["スタンド", "炎", "マジシャンズレッド"],
    relationships: ["ジョセフ", "ポルナレフ"],
    description: "炎を操るスタンド能力を持ち、仲間たちを支える経験豊富な戦士。",
    highlight: "危険を察知する判断力と仲間を守る勇気。",
    keywords: ["アヴドゥル", "炎", "スタンド", "ジョジョ"]
  },

  {
    id: "iggy-jojo",
    name: "イギー",
    originalName: "Iggy",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "仲間",
    firstAppearance: "スターダストクルセイダース",
    personality: "気まぐれで自由。",
    features: ["犬", "スタンド", "砂"],
    relationships: ["ポルナレフ"],
    description: "砂を操るスタンド能力を持つ犬で、承太郎たちの旅へ加わる。",
    highlight: "自由奔放ながら大切な場面で勇気を見せる。",
    keywords: ["イギー", "犬", "スタンド", "ジョジョ"]
  },

  {
    id: "josuke-higashikata",
    name: "東方仗助",
    originalName: "Josuke Higashikata",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "ミステリー"],
    role: "主人公",
    firstAppearance: "ダイヤモンドは砕けない",
    personality: "温厚だが仲間への侮辱には激しい。",
    features: ["スタンド", "クレイジー・ダイヤモンド", "修復"],
    relationships: ["虹村億泰", "岸辺露伴"],
    description: "杜王町で暮らす高校生のスタンド使い。",
    highlight: "壊れたものを元に戻す能力を戦闘や救助へ応用する。",
    keywords: ["仗助", "杜王町", "スタンド", "ジョジョ"]
  },

  {
    id: "okuyasu-nijimura",
    name: "虹村億泰",
    originalName: "Okuyasu Nijimura",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "仗助の親友",
    firstAppearance: "ダイヤモンドは砕けない",
    personality: "単純だが情に厚い。",
    features: ["スタンド", "ザ・ハンド", "怪力"],
    relationships: ["東方仗助"],
    description: "強力なスタンドを持ち、仗助の親友として行動する。",
    highlight: "危険な能力と親しみやすい性格のギャップ。",
    keywords: ["億泰", "ザ・ハンド", "スタンド", "ジョジョ"]
  },

  {
    id: "rohan-kishibe",
    name: "岸辺露伴",
    originalName: "Rohan Kishibe",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["ミステリー", "アクション"],
    role: "漫画家",
    firstAppearance: "ダイヤモンドは砕けない",
    personality: "好奇心が強く自信家。",
    features: ["漫画家", "スタンド", "ヘブンズ・ドアー"],
    relationships: ["東方仗助"],
    description: "リアリティを追求する漫画家で、他人の情報を読む特殊なスタンドを持つ。",
    highlight: "創作への強烈な執着と独特の価値観。",
    keywords: ["露伴", "漫画家", "スタンド", "ジョジョ"]
  },

  {
    id: "yoshikage-kira",
    name: "吉良吉影",
    originalName: "Yoshikage Kira",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["サスペンス", "アクション"],
    role: "主要な敵",
    firstAppearance: "ダイヤモンドは砕けない",
    personality: "表面上は穏やかだが危険。",
    features: ["スタンド", "爆弾", "秘密主義"],
    relationships: ["東方仗助"],
    description: "平穏な生活を望みながら恐ろしい秘密を隠して暮らす人物。",
    highlight: "日常へ溶け込む敵という不気味さが特徴。",
    keywords: ["吉良吉影", "悪役", "スタンド", "杜王町"]
  },

  {
    id: "giorno-giovanna",
    name: "ジョルノ・ジョバァーナ",
    originalName: "Giorno Giovanna",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "犯罪"],
    role: "主人公",
    firstAppearance: "黄金の風",
    personality: "冷静で強い夢を持つ。",
    features: ["スタンド", "生命", "ギャング"],
    relationships: ["ブチャラティ", "ミスタ"],
    description: "ギャング組織へ入り、自らの理想を実現しようとする少年。",
    highlight: "冷静な頭脳と強い覚悟で困難を突破していく。",
    keywords: ["ジョルノ", "黄金の風", "スタンド", "ジョジョ"]
  },

  {
    id: "bruno-bucciarati",
    name: "ブローノ・ブチャラティ",
    originalName: "Bruno Bucciarati",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "犯罪"],
    role: "チームリーダー",
    firstAppearance: "黄金の風",
    personality: "冷静で部下思い。",
    features: ["スタンド", "ジッパー", "ギャング"],
    relationships: ["ジョルノ", "ミスタ"],
    description: "仲間から高い信頼を集めるギャングチームのリーダー。",
    highlight: "組織への忠誠より正しいと信じることを選ぶ覚悟。",
    keywords: ["ブチャラティ", "ギャング", "スタンド", "ジョジョ"]
  },

  {
    id: "guido-mista",
    name: "グイード・ミスタ",
    originalName: "Guido Mista",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "犯罪"],
    role: "仲間",
    firstAppearance: "黄金の風",
    personality: "陽気で大胆。",
    features: ["拳銃", "スタンド", "射撃"],
    relationships: ["ジョルノ", "ブチャラティ"],
    description: "拳銃とスタンドを組み合わせて戦うチームの一員。",
    highlight: "危険な戦いでも軽快さを失わない。",
    keywords: ["ミスタ", "拳銃", "スタンド", "ジョジョ"]
  },

  {
    id: "jolyne-cujoh",
    name: "空条徐倫",
    originalName: "Jolyne Cujoh",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["アクション", "サスペンス"],
    role: "主人公",
    firstAppearance: "ストーンオーシャン",
    personality: "気が強く勇敢。",
    features: ["スタンド", "糸", "空条家"],
    relationships: ["空条承太郎"],
    description: "ある事件をきっかけに刑務所へ収監され、巨大な陰謀へ立ち向かう。",
    highlight: "困難の中で精神的にも戦士としても成長していく。",
    keywords: ["徐倫", "ストーンオーシャン", "スタンド", "ジョジョ"]
  },

  {
    id: "enrico-pucci",
    name: "エンリコ・プッチ",
    originalName: "Enrico Pucci",
    work: "ジョジョの奇妙な冒険",
    category: "アニメ",
    genre: ["サスペンス", "アクション"],
    role: "主要な敵",
    firstAppearance: "ストーンオーシャン",
    personality: "冷静で強い信念を持つ。",
    features: ["スタンド", "神父", "計画"],
    relationships: ["空条徐倫", "DIO"],
    description: "自らの理想を実現するため壮大な計画を進める神父。",
    highlight: "善悪だけでは整理できない強い信念が特徴。",
    keywords: ["プッチ", "神父", "スタンド", "ジョジョ"]
  },

  {
    id: "gyro-zeppeli",
    name: "ジャイロ・ツェペリ",
    originalName: "Gyro Zeppeli",
    work: "ジョジョの奇妙な冒険",
    category: "マンガ",
    genre: ["冒険", "アクション"],
    role: "主人公の一人",
    firstAppearance: "スティール・ボール・ラン",
    personality: "大胆でユーモアがある。",
    features: ["鉄球", "回転", "騎手"],
    relationships: ["ジョニィ・ジョースター"],
    description: "特殊な鉄球技術を使い、大陸横断レースへ参加する人物。",
    highlight: "高い技術とジョニィとの師弟に近い友情が魅力。",
    keywords: ["ジャイロ", "鉄球", "回転", "ジョジョ"]
  },


  // =====================================================
  // 241〜255 美少女戦士セーラームーン
  // =====================================================

  {
    id: "usagi-tsukino",
    name: "月野うさぎ",
    originalName: "Usagi Tsukino",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "主人公",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "明るく泣き虫だが優しい。",
    features: ["セーラームーン", "月", "変身"],
    relationships: ["地場衛", "水野亜美"],
    description: "普通の中学生からセーラー戦士として目覚め、仲間と共に戦う少女。",
    highlight: "完璧ではない少女が仲間との絆で強くなっていく。",
    keywords: ["セーラームーン", "うさぎ", "月", "主人公"]
  },

  {
    id: "ami-mizuno",
    name: "水野亜美",
    originalName: "Ami Mizuno",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "セーラー戦士",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "知的で穏やか。",
    features: ["セーラーマーキュリー", "水", "分析"],
    relationships: ["月野うさぎ"],
    description: "高い知性を持ち、分析力で仲間を支えるセーラー戦士。",
    highlight: "頭脳を活かした戦いと優しい性格が魅力。",
    keywords: ["亜美", "マーキュリー", "水", "セーラー戦士"]
  },

  {
    id: "rei-hino",
    name: "火野レイ",
    originalName: "Rei Hino",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "セーラー戦士",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "気が強く責任感がある。",
    features: ["セーラーマーズ", "炎", "霊感"],
    relationships: ["月野うさぎ"],
    description: "強い霊感を持ち、炎の力で戦うセーラー戦士。",
    highlight: "うさぎと衝突しながらも深い友情を築く。",
    keywords: ["レイ", "マーズ", "炎", "セーラー戦士"]
  },

  {
    id: "makoto-kino",
    name: "木野まこと",
    originalName: "Makoto Kino",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "セーラー戦士",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "面倒見が良く頼れる。",
    features: ["セーラージュピター", "雷", "怪力"],
    relationships: ["月野うさぎ"],
    description: "高い身体能力と雷の力を持つセーラー戦士。",
    highlight: "力強さと家庭的で優しい性格のギャップ。",
    keywords: ["まこと", "ジュピター", "雷", "セーラー戦士"]
  },

  {
    id: "minako-aino",
    name: "愛野美奈子",
    originalName: "Minako Aino",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "セーラー戦士",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "明るく行動的。",
    features: ["セーラーヴィーナス", "愛", "リーダーシップ"],
    relationships: ["月野うさぎ", "アルテミス"],
    description: "セーラー戦士として豊富な経験を持つ少女。",
    highlight: "明るさの中に戦士としての責任感を持つ。",
    keywords: ["美奈子", "ヴィーナス", "愛", "セーラー戦士"]
  },

  {
    id: "mamoru-chiba",
    name: "地場衛",
    originalName: "Mamoru Chiba",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "恋愛"],
    role: "タキシード仮面",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "落ち着いていて誠実。",
    features: ["タキシード仮面", "地球", "守護者"],
    relationships: ["月野うさぎ"],
    description: "タキシード仮面としてセーラー戦士たちを助ける青年。",
    highlight: "うさぎとの長い運命的なつながりが物語の軸。",
    keywords: ["衛", "タキシード仮面", "うさぎ", "恋愛"]
  },

  {
    id: "chibiusa",
    name: "ちびうさ",
    originalName: "Chibiusa",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "セーラー戦士",
    firstAppearance: "美少女戦士セーラームーンR",
    personality: "活発で負けず嫌い。",
    features: ["未来", "セーラーちびムーン", "月"],
    relationships: ["月野うさぎ", "地場衛"],
    description: "未来から現代へやって来た少女で、後に戦士としても成長する。",
    highlight: "うさぎとの親子のような関係がコミカルにも感動的にも描かれる。",
    keywords: ["ちびうさ", "未来", "ちびムーン", "セーラー戦士"]
  },

  {
    id: "haruka-tenoh",
    name: "天王はるか",
    originalName: "Haruka Tenoh",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "外部太陽系戦士",
    firstAppearance: "美少女戦士セーラームーンS",
    personality: "クールで決断力がある。",
    features: ["セーラーウラヌス", "天王星", "戦闘"],
    relationships: ["海王みちる"],
    description: "大きな使命を背負う外部太陽系のセーラー戦士。",
    highlight: "必要なら厳しい決断も選ぶ覚悟を持つ。",
    keywords: ["はるか", "ウラヌス", "セーラー戦士", "天王星"]
  },

  {
    id: "michiru-kaioh",
    name: "海王みちる",
    originalName: "Michiru Kaioh",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "外部太陽系戦士",
    firstAppearance: "美少女戦士セーラームーンS",
    personality: "優雅で冷静。",
    features: ["セーラーネプチューン", "海", "芸術"],
    relationships: ["天王はるか"],
    description: "海の力を操る外部太陽系のセーラー戦士。",
    highlight: "優雅な雰囲気と強い覚悟を併せ持つ。",
    keywords: ["みちる", "ネプチューン", "海", "セーラー戦士"]
  },

  {
    id: "setsuna-meioh",
    name: "冥王せつな",
    originalName: "Setsuna Meioh",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "外部太陽系戦士",
    firstAppearance: "美少女戦士セーラームーンR",
    personality: "落ち着いていて思慮深い。",
    features: ["セーラープルート", "時空", "守護"],
    relationships: ["ちびうさ"],
    description: "時空の扉を守る使命を持つセーラー戦士。",
    highlight: "孤独な役目を背負いながら仲間を支える。",
    keywords: ["せつな", "プルート", "時空", "セーラー戦士"]
  },

  {
    id: "hotaru-tomoe",
    name: "土萠ほたる",
    originalName: "Hotaru Tomoe",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "外部太陽系戦士",
    firstAppearance: "美少女戦士セーラームーンS",
    personality: "静かで優しい。",
    features: ["セーラーサターン", "土星", "強大な力"],
    relationships: ["ちびうさ"],
    description: "強大な力を秘める少女で、ちびうさと大切な友情を築く。",
    highlight: "儚い雰囲気と世界規模の力を秘めるギャップ。",
    keywords: ["ほたる", "サターン", "土星", "セーラー戦士"]
  },

  {
    id: "luna-sailormoon",
    name: "ルナ",
    originalName: "Luna",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "案内役",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "真面目で面倒見が良い。",
    features: ["黒猫", "助言", "月"],
    relationships: ["月野うさぎ", "アルテミス"],
    description: "うさぎをセーラームーンとして導く黒猫。",
    highlight: "戦士たちをまとめる助言者として重要な存在。",
    keywords: ["ルナ", "猫", "セーラームーン", "案内役"]
  },

  {
    id: "artemis-sailormoon",
    name: "アルテミス",
    originalName: "Artemis",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "案内役",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "穏やかで頼れる。",
    features: ["白猫", "助言", "月"],
    relationships: ["愛野美奈子", "ルナ"],
    description: "美奈子を支え、セーラー戦士たちへ助言を与える白猫。",
    highlight: "ルナと共に戦士たちを陰から支える。",
    keywords: ["アルテミス", "猫", "美奈子", "セーラームーン"]
  },

  {
    id: "queen-beryl",
    name: "クイン・ベリル",
    originalName: "Queen Beryl",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "敵",
    firstAppearance: "美少女戦士セーラームーン",
    personality: "冷酷で野心的。",
    features: ["ダーク・キングダム", "魔力", "女王"],
    relationships: ["セーラームーン"],
    description: "ダーク・キングダムを率いてセーラー戦士たちと対立する。",
    highlight: "物語初期を代表する強大な敵。",
    keywords: ["ベリル", "悪役", "女王", "セーラームーン"]
  },

  {
    id: "sailor-galaxia",
    name: "セーラーギャラクシア",
    originalName: "Sailor Galaxia",
    work: "美少女戦士セーラームーン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "強敵",
    firstAppearance: "美少女戦士セーラームーン セーラースターズ",
    personality: "圧倒的な自信を持つ。",
    features: ["セーラー戦士", "銀河", "強大な力"],
    relationships: ["セーラームーン"],
    description: "銀河規模の力を持ち、セーラームーンたちの前に立ちはだかる戦士。",
    highlight: "シリーズ終盤にふさわしい圧倒的な存在感。",
    keywords: ["ギャラクシア", "銀河", "強敵", "セーラームーン"]
  },


  // =====================================================
  // 256〜270 新世紀エヴァンゲリオン
  // =====================================================

  {
    id: "shinji-ikari",
    name: "碇シンジ",
    originalName: "Shinji Ikari",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "主人公／パイロット",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "内向的で繊細。",
    features: ["EVA初号機", "パイロット", "少年"],
    relationships: ["碇ゲンドウ", "綾波レイ", "アスカ"],
    description: "父に呼び出され、巨大な人型兵器エヴァンゲリオンへ乗ることになる少年。",
    highlight: "戦いそのもの以上に人との距離や自己肯定を巡る葛藤が描かれる。",
    keywords: ["シンジ", "EVA", "初号機", "主人公"]
  },

  {
    id: "rei-ayanami",
    name: "綾波レイ",
    originalName: "Rei Ayanami",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "EVAパイロット",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "寡黙で感情を表に出しにくい。",
    features: ["EVA零号機", "パイロット", "謎"],
    relationships: ["碇シンジ", "碇ゲンドウ"],
    description: "EVA零号機に搭乗する謎の多い少女。",
    highlight: "物語が進むにつれ、その存在そのものが重要な意味を持つ。",
    keywords: ["レイ", "EVA", "零号機", "エヴァ"]
  },

  {
    id: "asuka-langley",
    name: "惣流・アスカ・ラングレー",
    originalName: "Asuka Langley Soryu",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "EVAパイロット",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "勝ち気で自信家。",
    features: ["EVA弐号機", "パイロット", "高い自尊心"],
    relationships: ["碇シンジ", "葛城ミサト"],
    description: "高い能力と強い自信を持つEVA弐号機のパイロット。",
    highlight: "強気な態度の裏側にある不安や孤独が重要。",
    keywords: ["アスカ", "EVA", "弐号機", "エヴァ"]
  },

  {
    id: "misato-katsuragi",
    name: "葛城ミサト",
    originalName: "Misato Katsuragi",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "NERV作戦部長",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "明るく大胆だが複雑な過去を持つ。",
    features: ["NERV", "指揮官", "作戦"],
    relationships: ["碇シンジ", "加持リョウジ"],
    description: "EVAによる作戦を指揮しながら、シンジの生活面も支える人物。",
    highlight: "仕事では指揮官、家庭では保護者という二つの立場を担う。",
    keywords: ["ミサト", "NERV", "指揮官", "エヴァ"]
  },

  {
    id: "ritsuko-akagi",
    name: "赤木リツコ",
    originalName: "Ritsuko Akagi",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ミステリー"],
    role: "科学者",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "冷静で知的。",
    features: ["科学者", "NERV", "MAGI"],
    relationships: ["葛城ミサト", "碇ゲンドウ"],
    description: "NERVの技術や研究を支える優秀な科学者。",
    highlight: "科学者としての冷静さと個人的な感情の間で揺れる。",
    keywords: ["リツコ", "科学者", "NERV", "エヴァ"]
  },

  {
    id: "gendo-ikari",
    name: "碇ゲンドウ",
    originalName: "Gendo Ikari",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "NERV司令",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "冷徹で目的を優先する。",
    features: ["司令", "NERV", "計画"],
    relationships: ["碇シンジ", "碇ユイ"],
    description: "NERVを率い、独自の目的に向かって計画を進める人物。",
    highlight: "息子シンジとの距離と真意が物語の重要な謎となる。",
    keywords: ["ゲンドウ", "NERV", "司令", "エヴァ"]
  },

  {
    id: "kozo-fuyutsuki",
    name: "冬月コウゾウ",
    originalName: "Kozo Fuyutsuki",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "NERV副司令",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "冷静で思慮深い。",
    features: ["副司令", "NERV", "研究者"],
    relationships: ["碇ゲンドウ", "碇ユイ"],
    description: "ゲンドウを支えるNERV副司令で、過去の事情にも詳しい。",
    highlight: "多くを知りながら静かに状況を見守る人物。",
    keywords: ["冬月", "NERV", "副司令", "エヴァ"]
  },

  {
    id: "kaworu-nagisa",
    name: "渚カヲル",
    originalName: "Kaworu Nagisa",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "EVAパイロット候補",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "穏やかで理解力が高い。",
    features: ["謎", "EVA", "シンジとの交流"],
    relationships: ["碇シンジ"],
    description: "シンジへ強い理解を示す謎めいた少年。",
    highlight: "短い登場ながらシンジの心へ非常に大きな影響を与える。",
    keywords: ["カヲル", "シンジ", "EVA", "エヴァ"]
  },

  {
    id: "ryoji-kaji",
    name: "加持リョウジ",
    originalName: "Ryoji Kaji",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "ミステリー"],
    role: "NERV関係者",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "飄々としているが行動力がある。",
    features: ["情報収集", "調査", "NERV"],
    relationships: ["葛城ミサト"],
    description: "複数の立場を行き来しながら、世界の真実を探ろうとする人物。",
    highlight: "大人の余裕を見せながら危険な調査を続ける。",
    keywords: ["加持", "ミサト", "NERV", "調査"]
  },

  {
    id: "toji-suzuhara",
    name: "鈴原トウジ",
    originalName: "Toji Suzuhara",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "学園"],
    role: "シンジの同級生",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "豪快で友達思い。",
    features: ["学生", "友情", "EVAとの関係"],
    relationships: ["碇シンジ", "相田ケンスケ"],
    description: "シンジのクラスメートとして次第に友情を築く少年。",
    highlight: "日常側の友人でありながらEVAの戦いとも深く関わる。",
    keywords: ["トウジ", "シンジ", "学生", "エヴァ"]
  },

  {
    id: "kensuke-aida",
    name: "相田ケンスケ",
    originalName: "Kensuke Aida",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "学園"],
    role: "シンジの同級生",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "好奇心旺盛。",
    features: ["軍事好き", "学生", "カメラ"],
    relationships: ["碇シンジ", "鈴原トウジ"],
    description: "軍事関係への強い興味を持つシンジの友人。",
    highlight: "巨大兵器へ憧れる一般人側の視点を持つ。",
    keywords: ["ケンスケ", "学生", "シンジ", "エヴァ"]
  },

  {
    id: "hikari-horaki",
    name: "洞木ヒカリ",
    originalName: "Hikari Horaki",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF", "学園"],
    role: "クラス委員長",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "真面目で世話好き。",
    features: ["学生", "委員長", "日常"],
    relationships: ["鈴原トウジ", "アスカ"],
    description: "シンジたちのクラスの委員長を務める少女。",
    highlight: "緊張感の強い物語の中で学校生活を象徴する存在。",
    keywords: ["ヒカリ", "委員長", "学生", "エヴァ"]
  },

  {
    id: "maya-ibuki",
    name: "伊吹マヤ",
    originalName: "Maya Ibuki",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF"],
    role: "NERVオペレーター",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "真面目で誠実。",
    features: ["オペレーター", "技術", "NERV"],
    relationships: ["赤木リツコ"],
    description: "NERV本部で技術面のオペレーションを担当する人物。",
    highlight: "作戦現場を技術面から支える。",
    keywords: ["マヤ", "NERV", "オペレーター", "エヴァ"]
  },

  {
    id: "shigeru-aoba",
    name: "青葉シゲル",
    originalName: "Shigeru Aoba",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF"],
    role: "NERVオペレーター",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "落ち着いている。",
    features: ["オペレーター", "NERV", "情報"],
    relationships: ["日向マコト", "伊吹マヤ"],
    description: "NERV本部で情報処理を担当するオペレーター。",
    highlight: "緊迫した作戦中も冷静に任務を進める。",
    keywords: ["青葉", "NERV", "オペレーター", "エヴァ"]
  },

  {
    id: "makoto-hyuga",
    name: "日向マコト",
    originalName: "Makoto Hyuga",
    work: "新世紀エヴァンゲリオン",
    category: "アニメ",
    genre: ["SF"],
    role: "NERVオペレーター",
    firstAppearance: "新世紀エヴァンゲリオン",
    personality: "誠実で機転が利く。",
    features: ["オペレーター", "NERV", "作戦支援"],
    relationships: ["葛城ミサト"],
    description: "NERVの作戦指揮を支える主要オペレーターの一人。",
    highlight: "前線ではなく司令室から作戦を支える。",
    keywords: ["日向", "NERV", "オペレーター", "エヴァ"]
  },


  // =====================================================
  // 271〜285 機動戦士ガンダム
  // =====================================================

  {
    id: "amuro-ray",
    name: "アムロ・レイ",
    originalName: "Amuro Ray",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "主人公／パイロット",
    firstAppearance: "機動戦士ガンダム",
    personality: "繊細で高い適応力を持つ。",
    features: ["ガンダム", "ニュータイプ", "パイロット"],
    relationships: ["シャア・アズナブル", "ブライト・ノア"],
    description: "偶然ガンダムへ乗り込み、戦争の中でパイロットとして成長する少年。",
    highlight: "普通の少年が戦争によって急速に変化していく。",
    keywords: ["アムロ", "ガンダム", "ニュータイプ", "主人公"]
  },

  {
    id: "char-aznable",
    name: "シャア・アズナブル",
    originalName: "Char Aznable",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "軍人／ライバル",
    firstAppearance: "機動戦士ガンダム",
    personality: "冷静でカリスマ性がある。",
    features: ["赤い彗星", "モビルスーツ", "仮面"],
    relationships: ["アムロ・レイ", "セイラ・マス"],
    description: "高い操縦技術を持ち、赤い彗星と呼ばれるジオン軍のパイロット。",
    highlight: "アムロとのライバル関係と複雑な出生が重要。",
    keywords: ["シャア", "赤い彗星", "ガンダム", "ライバル"]
  },

  {
    id: "sayla-mass",
    name: "セイラ・マス",
    originalName: "Sayla Mass",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "ホワイトベース乗員",
    firstAppearance: "機動戦士ガンダム",
    personality: "冷静で芯が強い。",
    features: ["操縦", "医療知識", "重要な血筋"],
    relationships: ["シャア・アズナブル", "アムロ・レイ"],
    description: "ホワイトベースの一員として戦いに参加する女性。",
    highlight: "シャアとの複雑な関係が物語へ深みを加える。",
    keywords: ["セイラ", "ホワイトベース", "シャア", "ガンダム"]
  },

  {
    id: "bright-noa",
    name: "ブライト・ノア",
    originalName: "Bright Noa",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "艦長",
    firstAppearance: "機動戦士ガンダム",
    personality: "責任感が強く厳格。",
    features: ["ホワイトベース", "艦長", "指揮"],
    relationships: ["アムロ・レイ", "ミライ・ヤシマ"],
    description: "若くしてホワイトベースの指揮を任される人物。",
    highlight: "未熟な若者たちをまとめながら指揮官として成長する。",
    keywords: ["ブライト", "艦長", "ホワイトベース", "ガンダム"]
  },

  {
    id: "mirai-yashima",
    name: "ミライ・ヤシマ",
    originalName: "Mirai Yashima",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "操舵手",
    firstAppearance: "機動戦士ガンダム",
    personality: "冷静で包容力がある。",
    features: ["操舵", "ホワイトベース", "判断力"],
    relationships: ["ブライト・ノア"],
    description: "ホワイトベースの操舵を担当し、乗員たちを精神面でも支える。",
    highlight: "混乱する艦内で落ち着いた判断を見せる。",
    keywords: ["ミライ", "操舵手", "ホワイトベース", "ガンダム"]
  },

  {
    id: "kai-shiden",
    name: "カイ・シデン",
    originalName: "Kai Shiden",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "パイロット",
    firstAppearance: "機動戦士ガンダム",
    personality: "皮肉屋だが仲間思い。",
    features: ["ガンキャノン", "パイロット", "現実的"],
    relationships: ["アムロ", "ハヤト"],
    description: "現実的で少し皮肉な視点を持つホワイトベースのパイロット。",
    highlight: "戦争経験を通じて責任感を身につけていく。",
    keywords: ["カイ", "ガンキャノン", "パイロット", "ガンダム"]
  },

  {
    id: "hayato-kobayashi",
    name: "ハヤト・コバヤシ",
    originalName: "Hayato Kobayashi",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "パイロット",
    firstAppearance: "機動戦士ガンダム",
    personality: "真面目で努力家。",
    features: ["ガンタンク", "パイロット", "ホワイトベース"],
    relationships: ["アムロ", "カイ"],
    description: "ホワイトベースの戦力として戦う若いパイロット。",
    highlight: "自分より優れた仲間への複雑な感情を抱えながら努力する。",
    keywords: ["ハヤト", "ガンタンク", "パイロット", "ガンダム"]
  },

  {
    id: "frau-bow",
    name: "フラウ・ボゥ",
    originalName: "Fraw Bow",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "ホワイトベース乗員",
    firstAppearance: "機動戦士ガンダム",
    personality: "面倒見が良く優しい。",
    features: ["通信", "支援", "幼なじみ"],
    relationships: ["アムロ・レイ"],
    description: "アムロの幼なじみとしてホワイトベースへ乗り込み、仲間を支える。",
    highlight: "戦闘の中でも人間らしい日常を支える存在。",
    keywords: ["フラウ", "アムロ", "ホワイトベース", "ガンダム"]
  },

  {
    id: "lalah-sune",
    name: "ララァ・スン",
    originalName: "Lalah Sune",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "ニュータイプ",
    firstAppearance: "機動戦士ガンダム",
    personality: "穏やかで感受性が高い。",
    features: ["ニュータイプ", "モビルアーマー", "高い感応力"],
    relationships: ["シャア", "アムロ"],
    description: "優れたニュータイプ能力を持ち、アムロとシャア双方へ大きな影響を与える。",
    highlight: "二人のライバル関係を決定的に変える存在。",
    keywords: ["ララァ", "ニュータイプ", "シャア", "アムロ"]
  },

  {
    id: "garma-zabi",
    name: "ガルマ・ザビ",
    originalName: "Garma Zabi",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "ジオン軍軍人",
    firstAppearance: "機動戦士ガンダム",
    personality: "誇り高く家族への責任を感じる。",
    features: ["ザビ家", "軍人", "指揮官"],
    relationships: ["シャア・アズナブル"],
    description: "ザビ家の一員としてジオン軍を率いる若い軍人。",
    highlight: "シャアとの友情と政治的な立場が悲劇を生む。",
    keywords: ["ガルマ", "ザビ家", "ジオン", "ガンダム"]
  },

  {
    id: "gihren-zabi",
    name: "ギレン・ザビ",
    originalName: "Gihren Zabi",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "戦争"],
    role: "ジオン公国指導者",
    firstAppearance: "機動戦士ガンダム",
    personality: "冷徹で野心的。",
    features: ["政治", "ザビ家", "指導者"],
    relationships: ["キシリア", "ドズル"],
    description: "ジオン公国の戦争指導を進めるザビ家の中心人物。",
    highlight: "戦闘ではなく政治と思想によって戦争へ大きな影響を与える。",
    keywords: ["ギレン", "ザビ家", "ジオン", "政治"]
  },

  {
    id: "kycilia-zabi",
    name: "キシリア・ザビ",
    originalName: "Kycilia Zabi",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "戦争"],
    role: "ジオン軍指揮官",
    firstAppearance: "機動戦士ガンダム",
    personality: "冷静で計算高い。",
    features: ["ザビ家", "軍人", "諜報"],
    relationships: ["シャア", "ギレン"],
    description: "ジオン軍の重要部門を率いるザビ家の人物。",
    highlight: "軍事と政治の両面で高い影響力を持つ。",
    keywords: ["キシリア", "ザビ家", "ジオン", "ガンダム"]
  },

  {
    id: "dozle-zabi",
    name: "ドズル・ザビ",
    originalName: "Dozle Zabi",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "戦争"],
    role: "ジオン軍指揮官",
    firstAppearance: "機動戦士ガンダム",
    personality: "豪快で家族思い。",
    features: ["ザビ家", "軍人", "指揮"],
    relationships: ["ギレン", "ガルマ"],
    description: "宇宙軍を率いるザビ家の軍人で、前線の兵士を重視する。",
    highlight: "豪快な軍人としての姿と家族への愛情を併せ持つ。",
    keywords: ["ドズル", "ザビ家", "ジオン", "軍人"]
  },

  {
    id: "ramba-ral",
    name: "ランバ・ラル",
    originalName: "Ramba Ral",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ロボット"],
    role: "ジオン軍軍人",
    firstAppearance: "機動戦士ガンダム",
    personality: "豪胆で部下思い。",
    features: ["グフ", "ベテラン", "軍人"],
    relationships: ["クラウレ・ハモン", "アムロ"],
    description: "豊富な実戦経験を持つジオン軍のベテラン兵士。",
    highlight: "敵側でありながら高い人間的魅力を持つ人物。",
    keywords: ["ランバ・ラル", "グフ", "ジオン", "ガンダム"]
  },

  {
    id: "crowley-hamon",
    name: "クラウレ・ハモン",
    originalName: "Crowley Hamon",
    work: "機動戦士ガンダム",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "ランバ・ラルの仲間",
    firstAppearance: "機動戦士ガンダム",
    personality: "落ち着いていて芯が強い。",
    features: ["ジオン", "指揮", "忠誠"],
    relationships: ["ランバ・ラル"],
    description: "ランバ・ラルを公私ともに支える重要な人物。",
    highlight: "愛する人物への強い思いと行動力が印象的。",
    keywords: ["ハモン", "ランバ・ラル", "ジオン", "ガンダム"]
  },


  // =====================================================
  // 286〜300 コードギアス 反逆のルルーシュ
  // =====================================================

  {
    id: "lelouch-lamperouge",
    name: "ルルーシュ・ランペルージ",
    originalName: "Lelouch Lamperouge",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "主人公",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "頭脳明晰で目的意識が強い。",
    features: ["ギアス", "ゼロ", "戦略"],
    relationships: ["枢木スザク", "C.C.", "ナナリー"],
    description: "特殊な力ギアスを得て、巨大帝国へ反逆を始める青年。",
    highlight: "卓越した戦略と大切な人への思いが複雑に絡み合う。",
    keywords: ["ルルーシュ", "ギアス", "ゼロ", "主人公"]
  },

  {
    id: "suzaku-kururugi",
    name: "枢木スザク",
    originalName: "Suzaku Kururugi",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "軍人／パイロット",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "正義感が強く理想主義的。",
    features: ["ナイトメアパイロット", "ランスロット", "軍人"],
    relationships: ["ルルーシュ", "ユーフェミア"],
    description: "体制の内側から世界を変えようとする青年。",
    highlight: "ルルーシュとは同じ願いを持ちながら正反対の方法を選ぶ。",
    keywords: ["スザク", "ランスロット", "パイロット", "コードギアス"]
  },

  {
    id: "cc-code-geass",
    name: "C.C.",
    originalName: "C.C.",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ミステリー"],
    role: "ルルーシュの共犯者",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "冷静で謎が多い。",
    features: ["ギアス", "不老", "契約"],
    relationships: ["ルルーシュ"],
    description: "ルルーシュへギアスを与え、彼と行動を共にする謎めいた少女。",
    highlight: "過去と本当の願いが徐々に明らかになっていく。",
    keywords: ["C.C.", "ギアス", "ルルーシュ", "謎"]
  },

  {
    id: "kallen-kozuki",
    name: "紅月カレン",
    originalName: "Kallen Kozuki",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "アクション"],
    role: "レジスタンス／パイロット",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "情熱的で意志が強い。",
    features: ["紅蓮", "パイロット", "黒の騎士団"],
    relationships: ["ルルーシュ"],
    description: "黒の騎士団で高い操縦技術を発揮するエースパイロット。",
    highlight: "普段の学生生活と戦士としての姿の二面性。",
    keywords: ["カレン", "紅蓮", "黒の騎士団", "コードギアス"]
  },

  {
    id: "nunnally-lamperouge",
    name: "ナナリー・ランペルージ",
    originalName: "Nunnally Lamperouge",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "ルルーシュの妹",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "優しく思いやりがある。",
    features: ["妹", "平和への願い", "皇族"],
    relationships: ["ルルーシュ"],
    description: "ルルーシュが世界を変えようとする最大の理由となる大切な妹。",
    highlight: "戦闘力を持たなくても物語全体の選択へ大きな影響を与える。",
    keywords: ["ナナリー", "ルルーシュ", "妹", "コードギアス"]
  },

  {
    id: "shirley-fenette",
    name: "シャーリー・フェネット",
    originalName: "Shirley Fenette",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "恋愛"],
    role: "学生",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "明るく素直。",
    features: ["学生", "生徒会", "日常"],
    relationships: ["ルルーシュ"],
    description: "ルルーシュに好意を寄せる学園の同級生。",
    highlight: "戦争と日常の境界で翻弄される姿が物語に重さを与える。",
    keywords: ["シャーリー", "ルルーシュ", "学生", "コードギアス"]
  },

  {
    id: "milly-ashford",
    name: "ミレイ・アッシュフォード",
    originalName: "Milly Ashford",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "学園"],
    role: "生徒会長",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "明るく大胆。",
    features: ["生徒会", "学園", "イベント"],
    relationships: ["ルルーシュ", "シャーリー"],
    description: "アッシュフォード学園の生徒会長として仲間たちを盛り上げる。",
    highlight: "重い物語の中で学園の日常を象徴する存在。",
    keywords: ["ミレイ", "生徒会", "学園", "コードギアス"]
  },

  {
    id: "rivalz-cardemonde",
    name: "リヴァル・カルデモンド",
    originalName: "Rivalz Cardemonde",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "学園"],
    role: "学生",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "明るく友達思い。",
    features: ["学生", "生徒会", "友人"],
    relationships: ["ルルーシュ"],
    description: "ルルーシュの学校生活を支える友人の一人。",
    highlight: "戦争とは距離のある普通の学生視点を担う。",
    keywords: ["リヴァル", "学生", "生徒会", "コードギアス"]
  },

  {
    id: "nina-einstein",
    name: "ニーナ・アインシュタイン",
    originalName: "Nina Einstein",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "科学者",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "内向的で研究への集中力が高い。",
    features: ["科学", "研究", "兵器開発"],
    relationships: ["ユーフェミア"],
    description: "高い科学的才能を持ち、後に世界を左右する技術へ関わる少女。",
    highlight: "個人的感情と科学技術の危険性が結びつく人物。",
    keywords: ["ニーナ", "科学者", "研究", "コードギアス"]
  },

  {
    id: "lloyd-asplund",
    name: "ロイド・アスプルンド",
    originalName: "Lloyd Asplund",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF"],
    role: "技術者",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "飄々として研究を優先する。",
    features: ["科学者", "ランスロット", "技術開発"],
    relationships: ["枢木スザク", "セシル"],
    description: "高性能ナイトメアの開発を担当する天才的な技術者。",
    highlight: "人間関係より技術への興味を優先する独特の人物。",
    keywords: ["ロイド", "ランスロット", "科学者", "コードギアス"]
  },

  {
    id: "cecil-croomy",
    name: "セシル・クルーミー",
    originalName: "Cecile Croomy",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF"],
    role: "技術者",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "穏やかで面倒見が良い。",
    features: ["技術者", "ランスロット", "支援"],
    relationships: ["ロイド", "スザク"],
    description: "ロイドと共にランスロットの運用を支える技術者。",
    highlight: "個性的な仲間たちの中で常識的な支え役となる。",
    keywords: ["セシル", "技術者", "ランスロット", "コードギアス"]
  },

  {
    id: "jeremiah-gottwald",
    name: "ジェレミア・ゴットバルト",
    originalName: "Jeremiah Gottwald",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "アクション"],
    role: "軍人",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "忠誠心が非常に強い。",
    features: ["軍人", "ナイトメア", "高い忠誠心"],
    relationships: ["ルルーシュ"],
    description: "物語の中で立場を大きく変えながら、自らの忠義を貫く軍人。",
    highlight: "初期と後半で印象が大きく変化する人気キャラクター。",
    keywords: ["ジェレミア", "軍人", "忠誠", "コードギアス"]
  },

  {
    id: "kaname-ohgi",
    name: "扇要",
    originalName: "Kaname Ohgi",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "黒の騎士団幹部",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "温厚で現実的。",
    features: ["黒の騎士団", "レジスタンス", "指揮"],
    relationships: ["ヴィレッタ・ヌゥ"],
    description: "レジスタンスの中心人物としてゼロの指揮のもと戦う。",
    highlight: "戦場だけでなく組織内部の現実的な判断にも関わる。",
    keywords: ["扇", "黒の騎士団", "レジスタンス", "コードギアス"]
  },

  {
    id: "schneizel-el-britannia",
    name: "シュナイゼル・エル・ブリタニア",
    originalName: "Schneizel el Britannia",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "ドラマ"],
    role: "皇族／政治家",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "冷静で極めて頭脳明晰。",
    features: ["皇族", "戦略", "政治"],
    relationships: ["ルルーシュ", "コーネリア"],
    description: "高い政治力と戦略眼を持つブリタニア皇族。",
    highlight: "頭脳戦においてルルーシュと互角以上に渡り合う。",
    keywords: ["シュナイゼル", "皇族", "戦略", "コードギアス"]
  },

  {
    id: "cornelia-li-britannia",
    name: "コーネリア・リ・ブリタニア",
    originalName: "Cornelia li Britannia",
    work: "コードギアス 反逆のルルーシュ",
    category: "アニメ",
    genre: ["SF", "アクション"],
    role: "皇族／軍人",
    firstAppearance: "コードギアス 反逆のルルーシュ",
    personality: "勇猛で誇り高い。",
    features: ["皇族", "軍人", "ナイトメア"],
    relationships: ["ユーフェミア", "シュナイゼル"],
    description: "優れた軍事指揮能力を持つブリタニア皇女。",
    highlight: "厳しい軍人でありながら妹への愛情は非常に深い。",
    keywords: ["コーネリア", "皇族", "軍人", "コードギアス"]
  }

);
// =====================================================
// 301〜320 DEATH NOTE
// =====================================================

characters.push(

  {
    id: "light-yagami",
    name: "夜神月",
    originalName: "Light Yagami",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "ミステリー"],
    role: "主人公",
    firstAppearance: "DEATH NOTE",
    personality: "頭脳明晰で強い理想を持つ。",
    features: ["デスノート", "高い知能", "策略"],
    relationships: ["L", "リューク", "弥海砂"],
    description: "死神のノートを手に入れ、自らの理想とする世界を作ろうとする青年。",
    highlight: "天才的な頭脳を使ったLとの心理戦が大きな見どころ。",
    keywords: ["夜神月", "キラ", "デスノート", "頭脳戦"]
  },

  {
    id: "l-lawliet",
    name: "L",
    originalName: "L Lawliet",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "ミステリー"],
    role: "探偵",
    firstAppearance: "DEATH NOTE",
    personality: "冷静で独特。",
    features: ["世界的探偵", "推理", "高い知能"],
    relationships: ["夜神月", "ワタリ"],
    description: "数々の難事件を解決してきた世界的な名探偵で、キラ事件の真相を追う。",
    highlight: "わずかな情報から相手を追い詰める圧倒的な推理力。",
    keywords: ["L", "探偵", "キラ", "推理"]
  },

  {
    id: "misa-amane",
    name: "弥海砂",
    originalName: "Misa Amane",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "ドラマ"],
    role: "第二のキラ",
    firstAppearance: "DEATH NOTE",
    personality: "明るく一途。",
    features: ["デスノート", "死神の目", "芸能人"],
    relationships: ["夜神月", "レム"],
    description: "芸能活動を行う少女で、デスノートを手にしたことで月と深く関わる。",
    highlight: "月への強い思いが物語の展開を大きく動かす。",
    keywords: ["ミサ", "第二のキラ", "デスノート", "死神の目"]
  },

  {
    id: "ryuk-death-note",
    name: "リューク",
    originalName: "Ryuk",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["ダークファンタジー", "サスペンス"],
    role: "死神",
    firstAppearance: "DEATH NOTE",
    personality: "好奇心旺盛で退屈を嫌う。",
    features: ["死神", "デスノート", "リンゴ好き"],
    relationships: ["夜神月"],
    description: "人間界へデスノートを落とし、月の行動を観察する死神。",
    highlight: "人間同士の戦いに深く肩入れせず、観察者として物語を見つめる。",
    keywords: ["リューク", "死神", "デスノート", "リンゴ"]
  },

  {
    id: "rem-death-note",
    name: "レム",
    originalName: "Rem",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "死神",
    firstAppearance: "DEATH NOTE",
    personality: "冷静で情が深い。",
    features: ["死神", "デスノート", "海砂を守る"],
    relationships: ["弥海砂"],
    description: "海砂にデスノートを渡し、彼女を守ろうとする死神。",
    highlight: "人間へ特別な感情を抱く死神として重要な役割を持つ。",
    keywords: ["レム", "死神", "海砂", "デスノート"]
  },

  {
    id: "soichiro-yagami",
    name: "夜神総一郎",
    originalName: "Soichiro Yagami",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "警察官",
    firstAppearance: "DEATH NOTE",
    personality: "誠実で正義感が強い。",
    features: ["警察", "捜査本部", "責任感"],
    relationships: ["夜神月"],
    description: "キラ事件の捜査を指揮し、正義を守ろうとする警察官。",
    highlight: "父親としての愛情と捜査官としての使命の間で揺れる。",
    keywords: ["総一郎", "警察", "キラ捜査", "デスノート"]
  },

  {
    id: "touta-matsuda",
    name: "松田桃太",
    originalName: "Touta Matsuda",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "刑事",
    firstAppearance: "DEATH NOTE",
    personality: "明るく行動的。",
    features: ["警察", "捜査本部", "行動力"],
    relationships: ["夜神総一郎", "L"],
    description: "キラ捜査本部に参加する若い刑事。",
    highlight: "未熟さを見せながらも重要な場面では勇気を発揮する。",
    keywords: ["松田", "警察", "キラ捜査", "刑事"]
  },

  {
    id: "shuichi-aizawa",
    name: "相沢周市",
    originalName: "Shuichi Aizawa",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "刑事",
    firstAppearance: "DEATH NOTE",
    personality: "真面目で慎重。",
    features: ["警察", "捜査", "分析"],
    relationships: ["夜神総一郎", "L"],
    description: "キラ事件を追う捜査本部の刑事。",
    highlight: "疑問を持った時には自ら考え、真相を追おうとする。",
    keywords: ["相沢", "刑事", "キラ", "デスノート"]
  },

  {
    id: "kanzo-mogi",
    name: "模木完造",
    originalName: "Kanzo Mogi",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "刑事",
    firstAppearance: "DEATH NOTE",
    personality: "寡黙で忠実。",
    features: ["警察", "捜査", "潜入"],
    relationships: ["L", "松田桃太"],
    description: "キラ捜査本部で地道な任務をこなす信頼性の高い刑事。",
    highlight: "口数は少ないが確実に任務を遂行する。",
    keywords: ["模木", "刑事", "警察", "デスノート"]
  },

  {
    id: "hideki-ide",
    name: "伊出英基",
    originalName: "Hideki Ide",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "刑事",
    firstAppearance: "DEATH NOTE",
    personality: "冷静で現実的。",
    features: ["警察", "捜査", "判断力"],
    relationships: ["相沢周市"],
    description: "キラ事件の真相を追う警察関係者。",
    highlight: "複雑な状況でも現実的な判断を重視する。",
    keywords: ["伊出", "刑事", "キラ", "デスノート"]
  },

  {
    id: "watari-death-note",
    name: "ワタリ",
    originalName: "Watari",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["ミステリー", "サスペンス"],
    role: "Lの協力者",
    firstAppearance: "DEATH NOTE",
    personality: "冷静で忠実。",
    features: ["支援", "情報", "射撃"],
    relationships: ["L"],
    description: "Lの活動を長年支えてきた重要な協力者。",
    highlight: "情報や装備など多方面からLの捜査を支える。",
    keywords: ["ワタリ", "L", "協力者", "デスノート"]
  },

  {
    id: "near-death-note",
    name: "ニア",
    originalName: "Near",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["ミステリー", "サスペンス"],
    role: "探偵",
    firstAppearance: "DEATH NOTE",
    personality: "冷静で分析的。",
    features: ["高い知能", "推理", "SPK"],
    relationships: ["メロ", "L"],
    description: "Lの後継者候補の一人としてキラ事件の真相へ迫る少年。",
    highlight: "情報を論理的に組み合わせて相手の行動を読み解く。",
    keywords: ["ニア", "L", "探偵", "キラ"]
  },

  {
    id: "mello-death-note",
    name: "メロ",
    originalName: "Mello",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "Lの後継者候補",
    firstAppearance: "DEATH NOTE",
    personality: "大胆で負けず嫌い。",
    features: ["高い知能", "行動力", "マフィア"],
    relationships: ["ニア"],
    description: "ニアとは異なる大胆な方法でキラを追う青年。",
    highlight: "危険を恐れず自ら動くことで捜査を前進させる。",
    keywords: ["メロ", "L", "キラ", "頭脳戦"]
  },

  {
    id: "teru-mikami",
    name: "魅上照",
    originalName: "Teru Mikami",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "キラの協力者",
    firstAppearance: "DEATH NOTE",
    personality: "極端な正義感を持つ。",
    features: ["検事", "デスノート", "キラ信奉"],
    relationships: ["夜神月"],
    description: "キラの思想へ強く共感し、その計画に協力する検事。",
    highlight: "徹底した価値観と規則的な行動が物語の鍵になる。",
    keywords: ["魅上", "キラ", "検事", "デスノート"]
  },

  {
    id: "kiyomi-takada",
    name: "高田清美",
    originalName: "Kiyomi Takada",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "ドラマ"],
    role: "報道キャスター",
    firstAppearance: "DEATH NOTE",
    personality: "知的で自信がある。",
    features: ["メディア", "キラ", "情報発信"],
    relationships: ["夜神月"],
    description: "報道の立場からキラ思想と深く関係する女性。",
    highlight: "世論とキラの影響力をつなぐ重要な存在。",
    keywords: ["高田", "キラ", "報道", "デスノート"]
  },

  {
    id: "naomi-misora",
    name: "南空ナオミ",
    originalName: "Naomi Misora",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "ミステリー"],
    role: "元FBI捜査官",
    firstAppearance: "DEATH NOTE",
    personality: "冷静で洞察力が高い。",
    features: ["捜査", "FBI", "推理"],
    relationships: ["レイ・ペンバー"],
    description: "元FBI捜査官として高い推理力を持ち、独自にキラ事件を調べる。",
    highlight: "少ない情報から事件の核心へ近づく鋭さ。",
    keywords: ["南空ナオミ", "FBI", "捜査", "デスノート"]
  },

  {
    id: "raye-penber",
    name: "レイ・ペンバー",
    originalName: "Raye Penber",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス"],
    role: "FBI捜査官",
    firstAppearance: "DEATH NOTE",
    personality: "真面目で慎重。",
    features: ["FBI", "尾行", "捜査"],
    relationships: ["南空ナオミ", "夜神月"],
    description: "キラ容疑者の監視任務を担当するFBI捜査官。",
    highlight: "月との接触が物語序盤の重要な転換点となる。",
    keywords: ["レイ", "FBI", "キラ", "デスノート"]
  },

  {
    id: "sidoh-death-note",
    name: "シドウ",
    originalName: "Sidoh",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["ダークファンタジー", "サスペンス"],
    role: "死神",
    firstAppearance: "DEATH NOTE",
    personality: "気弱で少し抜けている。",
    features: ["死神", "デスノート", "死神界"],
    relationships: ["リューク"],
    description: "自分のデスノートを取り戻すため人間界へ現れる死神。",
    highlight: "緊張感の強い物語の中で独特のコミカルさを持つ。",
    keywords: ["シドウ", "死神", "デスノート", "死神界"]
  },

  {
    id: "gelus-death-note",
    name: "ジェラス",
    originalName: "Gelus",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "死神",
    firstAppearance: "DEATH NOTE",
    personality: "人間へ強い感情を持つ。",
    features: ["死神", "デスノート", "海砂との関係"],
    relationships: ["弥海砂", "レム"],
    description: "人間である海砂の運命へ特別な思いを抱いた死神。",
    highlight: "死神にも感情があることを示す重要な存在。",
    keywords: ["ジェラス", "死神", "海砂", "デスノート"]
  },

  {
    id: "hitoshi-demegawa",
    name: "出目川仁",
    originalName: "Hitoshi Demegawa",
    work: "DEATH NOTE",
    category: "アニメ",
    genre: ["サスペンス", "犯罪"],
    role: "テレビ局関係者",
    firstAppearance: "DEATH NOTE",
    personality: "目立つことを好み利益に敏感。",
    features: ["テレビ", "報道", "キラ"],
    relationships: ["キラ信奉者"],
    description: "キラを巡る社会現象を利用し、メディアを通じて影響力を得ようとする人物。",
    highlight: "キラ事件が社会へ与える影響を表す存在。",
    keywords: ["出目川", "テレビ", "キラ", "メディア"]
  },


  // =====================================================
  // 321〜340 銀魂
  // =====================================================

  {
    id: "gintoki-sakata",
    name: "坂田銀時",
    originalName: "Gintoki Sakata",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "主人公",
    firstAppearance: "銀魂",
    personality: "普段はだらしないが仲間思い。",
    features: ["万事屋", "木刀", "侍"],
    relationships: ["志村新八", "神楽"],
    description: "万事屋を営みながら、仲間と共にさまざまな依頼や事件へ関わる侍。",
    highlight: "コメディとシリアスの両方で圧倒的な存在感を見せる。",
    keywords: ["銀時", "万事屋", "侍", "主人公"]
  },

  {
    id: "shinpachi-shimura",
    name: "志村新八",
    originalName: "Shinpachi Shimura",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "万事屋メンバー",
    firstAppearance: "銀魂",
    personality: "真面目でツッコミ役。",
    features: ["剣術", "眼鏡", "万事屋"],
    relationships: ["坂田銀時", "神楽", "志村妙"],
    description: "銀時のもとで働く少年で、個性的な仲間たちへのツッコミ役を担う。",
    highlight: "普段は振り回されながらも大切な場面では勇気を見せる。",
    keywords: ["新八", "万事屋", "眼鏡", "銀魂"]
  },

  {
    id: "kagura-gintama",
    name: "神楽",
    originalName: "Kagura",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "万事屋メンバー",
    firstAppearance: "銀魂",
    personality: "自由奔放で食いしん坊。",
    features: ["夜兎族", "怪力", "傘"],
    relationships: ["坂田銀時", "志村新八", "神威"],
    description: "宇宙最強クラスの戦闘種族・夜兎族の少女。",
    highlight: "豪快な性格と家族に対する繊細な思いのギャップ。",
    keywords: ["神楽", "夜兎", "万事屋", "銀魂"]
  },

  {
    id: "sadaharu",
    name: "定春",
    originalName: "Sadaharu",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "ファンタジー"],
    role: "万事屋のペット",
    firstAppearance: "銀魂",
    personality: "元気で食欲旺盛。",
    features: ["巨大犬", "怪力", "万事屋"],
    relationships: ["神楽"],
    description: "万事屋で暮らす巨大な白い犬。",
    highlight: "可愛らしい外見に反して強烈な力を持つ。",
    keywords: ["定春", "犬", "万事屋", "銀魂"]
  },

  {
    id: "tae-shimura",
    name: "志村妙",
    originalName: "Tae Shimura",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "新八の姉",
    firstAppearance: "銀魂",
    personality: "笑顔が多いが非常に強い。",
    features: ["怪力", "姉", "道場"],
    relationships: ["志村新八", "近藤勲"],
    description: "新八の姉で、家族の道場を守ろうとする強い女性。",
    highlight: "穏やかな笑顔と豪快な戦闘力のギャップ。",
    keywords: ["お妙", "新八", "怪力", "銀魂"]
  },

  {
    id: "isao-kondo",
    name: "近藤勲",
    originalName: "Isao Kondo",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "真選組局長",
    firstAppearance: "銀魂",
    personality: "豪快で部下思い。",
    features: ["真選組", "局長", "剣士"],
    relationships: ["土方十四郎", "沖田総悟"],
    description: "真選組を率いる局長で、隊士たちから強く慕われる。",
    highlight: "普段の奇行とは対照的に組織の危機では頼れる指導者となる。",
    keywords: ["近藤", "真選組", "局長", "銀魂"]
  },

  {
    id: "toushirou-hijikata",
    name: "土方十四郎",
    originalName: "Toshiro Hijikata",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "真選組副長",
    firstAppearance: "銀魂",
    personality: "冷静で厳格。",
    features: ["真選組", "副長", "剣術"],
    relationships: ["近藤勲", "沖田総悟"],
    description: "鬼の副長と呼ばれる真選組の実質的なまとめ役。",
    highlight: "規律を重んじながら仲間への情も深い。",
    keywords: ["土方", "真選組", "副長", "銀魂"]
  },

  {
    id: "sougo-okita",
    name: "沖田総悟",
    originalName: "Sougo Okita",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "真選組隊長",
    firstAppearance: "銀魂",
    personality: "毒舌でドライ。",
    features: ["剣術", "真選組", "一番隊"],
    relationships: ["土方十四郎", "神楽"],
    description: "真選組屈指の剣術を持つ一番隊隊長。",
    highlight: "普段の軽い態度から一転する本気の戦闘が魅力。",
    keywords: ["沖田", "真選組", "剣士", "銀魂"]
  },

  {
    id: "sagaru-yamazaki",
    name: "山崎退",
    originalName: "Sagaru Yamazaki",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "真選組隊士",
    firstAppearance: "銀魂",
    personality: "真面目で地味。",
    features: ["監察", "真選組", "潜入"],
    relationships: ["土方十四郎"],
    description: "真選組で監察任務などを担当する隊士。",
    highlight: "地味さそのものが個性として扱われるユニークな人物。",
    keywords: ["山崎", "真選組", "監察", "銀魂"]
  },

  {
    id: "kotaro-katsura",
    name: "桂小太郎",
    originalName: "Kotaro Katsura",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "攘夷志士",
    firstAppearance: "銀魂",
    personality: "真面目だが天然。",
    features: ["攘夷志士", "剣術", "逃走"],
    relationships: ["坂田銀時", "エリザベス"],
    description: "銀時の旧友で、攘夷活動を続ける人物。",
    highlight: "真剣な革命家でありながら強烈な天然ぶりを見せる。",
    keywords: ["桂", "ヅラ", "攘夷", "銀魂"]
  },

  {
    id: "elizabeth-gintama",
    name: "エリザベス",
    originalName: "Elizabeth",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ"],
    role: "桂の相棒",
    firstAppearance: "銀魂",
    personality: "無口で謎が多い。",
    features: ["看板", "白い姿", "相棒"],
    relationships: ["桂小太郎"],
    description: "桂と行動を共にする正体不明の白い存在。",
    highlight: "見た目と行動すべてが予測不能。",
    keywords: ["エリザベス", "桂", "相棒", "銀魂"]
  },

  {
    id: "shinsuke-takasugi",
    name: "高杉晋助",
    originalName: "Shinsuke Takasugi",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "鬼兵隊総督",
    firstAppearance: "銀魂",
    personality: "冷静で破壊的な思想を持つ。",
    features: ["鬼兵隊", "剣術", "攘夷戦争"],
    relationships: ["坂田銀時", "桂小太郎"],
    description: "銀時のかつての戦友で、現在の世界を壊そうと行動する人物。",
    highlight: "銀時との過去と師への思いが物語の重要な軸。",
    keywords: ["高杉", "鬼兵隊", "攘夷", "銀魂"]
  },

  {
    id: "tatsuma-sakamoto",
    name: "坂本辰馬",
    originalName: "Tatsuma Sakamoto",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "商人",
    firstAppearance: "銀魂",
    personality: "豪快で前向き。",
    features: ["快援隊", "宇宙船", "商人"],
    relationships: ["坂田銀時", "陸奥"],
    description: "銀時たちの旧友で、宇宙を舞台に商売を行う人物。",
    highlight: "戦う以外の方法で世界を変えようとする。",
    keywords: ["坂本", "快援隊", "商人", "銀魂"]
  },

  {
    id: "tsukuyo-gintama",
    name: "月詠",
    originalName: "Tsukuyo",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "吉原の守護者",
    firstAppearance: "銀魂",
    personality: "冷静で責任感が強い。",
    features: ["苦無", "百華", "吉原"],
    relationships: ["坂田銀時"],
    description: "吉原の治安を守る組織を率いる実力者。",
    highlight: "厳格な戦士の姿と不器用な一面のギャップ。",
    keywords: ["月詠", "吉原", "苦無", "銀魂"]
  },

  {
    id: "ayame-sarutobi",
    name: "猿飛あやめ",
    originalName: "Ayame Sarutobi",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "忍者",
    firstAppearance: "銀魂",
    personality: "情熱的で独特。",
    features: ["忍者", "暗殺", "眼鏡"],
    relationships: ["坂田銀時"],
    description: "高い忍術能力を持つ女性忍者。",
    highlight: "戦闘能力の高さと銀時への極端な愛情表現が特徴。",
    keywords: ["さっちゃん", "忍者", "銀時", "銀魂"]
  },

  {
    id: "kyubei-yagyu",
    name: "柳生九兵衛",
    originalName: "Kyubei Yagyu",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション", "コメディ"],
    role: "剣士",
    firstAppearance: "銀魂",
    personality: "真面目で一途。",
    features: ["剣術", "柳生家", "眼帯"],
    relationships: ["志村妙"],
    description: "名門柳生家の剣士で、お妙を非常に大切にしている。",
    highlight: "高い剣術と不器用な人間関係が魅力。",
    keywords: ["九兵衛", "剣士", "柳生", "銀魂"]
  },

  {
    id: "taizo-hasegawa",
    name: "長谷川泰三",
    originalName: "Taizo Hasegawa",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "ドラマ"],
    role: "元役人",
    firstAppearance: "銀魂",
    personality: "不運だが人情に厚い。",
    features: ["マダオ", "サングラス", "無職"],
    relationships: ["坂田銀時"],
    description: "仕事を失ってから波乱続きの生活を送る中年男性。",
    highlight: "笑える不運の中にも人間味のある物語を持つ。",
    keywords: ["マダオ", "長谷川", "銀魂", "コメディ"]
  },

  {
    id: "otose-gintama",
    name: "お登勢",
    originalName: "Otose",
    work: "銀魂",
    category: "アニメ",
    genre: ["コメディ", "ドラマ"],
    role: "大家",
    firstAppearance: "銀魂",
    personality: "厳しいが情に厚い。",
    features: ["大家", "かぶき町", "スナック"],
    relationships: ["坂田銀時", "キャサリン"],
    description: "銀時が暮らす建物の大家で、かぶき町を長く見守ってきた女性。",
    highlight: "銀時にとって家族に近い存在でもある。",
    keywords: ["お登勢", "かぶき町", "銀時", "銀魂"]
  },

  {
    id: "tama-gintama",
    name: "たま",
    originalName: "Tama",
    work: "銀魂",
    category: "アニメ",
    genre: ["SF", "コメディ"],
    role: "からくり",
    firstAppearance: "銀魂",
    personality: "真面目で優しい。",
    features: ["からくり", "機械", "スナック"],
    relationships: ["坂田銀時", "お登勢"],
    description: "高い知能を持つからくりで、お登勢の店を手伝う。",
    highlight: "機械でありながら人間らしい優しさを学んでいく。",
    keywords: ["たま", "からくり", "ロボット", "銀魂"]
  },

  {
    id: "kamui-gintama",
    name: "神威",
    originalName: "Kamui",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション", "ドラマ"],
    role: "夜兎族の戦士",
    firstAppearance: "銀魂",
    personality: "戦闘を好み笑顔を絶やさない。",
    features: ["夜兎族", "怪力", "春雨"],
    relationships: ["神楽"],
    description: "神楽の兄で、強者との戦いを求め続ける夜兎族の戦士。",
    highlight: "神楽との複雑な家族関係が大きな見どころ。",
    keywords: ["神威", "夜兎", "神楽", "銀魂"]
  },

  {
    id: "abuto-gintama",
    name: "阿伏兎",
    originalName: "Abuto",
    work: "銀魂",
    category: "アニメ",
    genre: ["アクション"],
    role: "夜兎族の戦士",
    firstAppearance: "銀魂",
    personality: "落ち着いていて現実的。",
    features: ["夜兎族", "怪力", "春雨"],
    relationships: ["神威"],
    description: "神威を支える経験豊富な夜兎族の戦士。",
    highlight: "危険な戦場でも冷静さを保つベテランらしさ。",
    keywords: ["阿伏兎", "夜兎", "神威", "銀魂"]
  },


  // =====================================================
  // 341〜360 FAIRY TAIL
  // =====================================================

  {
    id: "natsu-dragneel",
    name: "ナツ・ドラグニル",
    originalName: "Natsu Dragneel",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "主人公／魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "熱血で仲間思い。",
    features: ["滅竜魔法", "炎", "フェアリーテイル"],
    relationships: ["ルーシィ", "ハッピー", "グレイ"],
    description: "炎を操る滅竜魔導士で、仲間と共に数々の依頼や戦いへ挑む。",
    highlight: "仲間が傷つけられた時に発揮する圧倒的な闘志。",
    keywords: ["ナツ", "炎", "滅竜魔導士", "FAIRY TAIL"]
  },

  {
    id: "lucy-heartfilia",
    name: "ルーシィ・ハートフィリア",
    originalName: "Lucy Heartfilia",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "冒険"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "明るく仲間思い。",
    features: ["星霊魔法", "鍵", "作家志望"],
    relationships: ["ナツ", "ハッピー"],
    description: "星霊を呼び出す魔法を使い、フェアリーテイルへ加入する少女。",
    highlight: "仲間との冒険を通して精神的にも魔導士としても成長する。",
    keywords: ["ルーシィ", "星霊", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "happy-fairy-tail",
    name: "ハッピー",
    originalName: "Happy",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "コメディ"],
    role: "ナツの相棒",
    firstAppearance: "FAIRY TAIL",
    personality: "明るくいたずら好き。",
    features: ["エクシード", "飛行", "青い猫"],
    relationships: ["ナツ", "シャルル"],
    description: "ナツと幼い頃から行動を共にする青い猫のような種族。",
    highlight: "コミカルな会話と仲間への深い愛情が魅力。",
    keywords: ["ハッピー", "猫", "エクシード", "FAIRY TAIL"]
  },

  {
    id: "gray-fullbuster",
    name: "グレイ・フルバスター",
    originalName: "Gray Fullbuster",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "冷静で負けず嫌い。",
    features: ["氷の造形魔法", "魔導士", "ライバル"],
    relationships: ["ナツ", "ジュビア"],
    description: "氷を自由な形へ変えて戦う造形魔導士。",
    highlight: "ナツとの絶えない競争と深い仲間意識が魅力。",
    keywords: ["グレイ", "氷", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "erza-scarlet",
    name: "エルザ・スカーレット",
    originalName: "Erza Scarlet",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "S級魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "厳格で仲間思い。",
    features: ["換装魔法", "剣", "鎧"],
    relationships: ["ナツ", "グレイ", "ジェラール"],
    description: "さまざまな武器と鎧を瞬時に換装して戦う強力な魔導士。",
    highlight: "圧倒的な強さと仲間への優しさを併せ持つ。",
    keywords: ["エルザ", "換装", "剣", "FAIRY TAIL"]
  },

  {
    id: "wendy-marvell",
    name: "ウェンディ・マーベル",
    originalName: "Wendy Marvell",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "滅竜魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "優しく控えめ。",
    features: ["天空の滅竜魔法", "回復", "魔導士"],
    relationships: ["シャルル", "ナツ"],
    description: "天空の滅竜魔法を使う少女で、治癒や支援も得意とする。",
    highlight: "気弱な少女から勇敢な魔導士へ成長していく。",
    keywords: ["ウェンディ", "天空", "滅竜魔導士", "FAIRY TAIL"]
  },

  {
    id: "charla-fairy-tail",
    name: "シャルル",
    originalName: "Carla",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "ウェンディの相棒",
    firstAppearance: "FAIRY TAIL",
    personality: "冷静でしっかり者。",
    features: ["エクシード", "飛行", "予知"],
    relationships: ["ウェンディ", "ハッピー"],
    description: "ウェンディと行動を共にする白いエクシード。",
    highlight: "ウェンディを守ろうとする強い責任感。",
    keywords: ["シャルル", "エクシード", "ウェンディ", "FAIRY TAIL"]
  },

  {
    id: "gajeel-redfox",
    name: "ガジル・レッドフォックス",
    originalName: "Gajeel Redfox",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "滅竜魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "荒っぽいが仲間思い。",
    features: ["鉄の滅竜魔法", "魔導士", "怪力"],
    relationships: ["レビィ", "ナツ"],
    description: "鉄を操り身体を鉄へ変化させて戦う滅竜魔導士。",
    highlight: "敵として登場した後、仲間として成長していく。",
    keywords: ["ガジル", "鉄", "滅竜魔導士", "FAIRY TAIL"]
  },

  {
    id: "juvia-lockser",
    name: "ジュビア・ロクサー",
    originalName: "Juvia Lockser",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "コメディ"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "一途で感情豊か。",
    features: ["水魔法", "魔導士", "雨"],
    relationships: ["グレイ"],
    description: "水を操る魔法を使う女性魔導士。",
    highlight: "グレイへの一途な思いと高い戦闘能力が特徴。",
    keywords: ["ジュビア", "水", "グレイ", "FAIRY TAIL"]
  },

  {
    id: "laxus-dreyar",
    name: "ラクサス・ドレアー",
    originalName: "Laxus Dreyar",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "S級魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "誇り高く強気。",
    features: ["雷", "滅竜魔法", "S級"],
    relationships: ["マカロフ"],
    description: "雷を操る非常に強力な魔導士。",
    highlight: "自分の過ちと向き合い、仲間への考え方を変えていく。",
    keywords: ["ラクサス", "雷", "S級", "FAIRY TAIL"]
  },

  {
    id: "mirajane-strauss",
    name: "ミラジェーン・ストラウス",
    originalName: "Mirajane Strauss",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "S級魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "普段は穏やかで優しい。",
    features: ["接収魔法", "悪魔", "S級"],
    relationships: ["エルフマン", "リサーナ"],
    description: "普段はギルドを優しく支えるが、高い戦闘力を秘めた魔導士。",
    highlight: "穏やかな姿から戦闘時に一変するギャップ。",
    keywords: ["ミラジェーン", "S級", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "elfman-strauss",
    name: "エルフマン・ストラウス",
    originalName: "Elfman Strauss",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "熱血で家族思い。",
    features: ["接収魔法", "怪力", "魔導士"],
    relationships: ["ミラジェーン", "リサーナ"],
    description: "獣の力を身体へ取り込んで戦う魔導士。",
    highlight: "豪快な言動の一方で姉妹を非常に大切にする。",
    keywords: ["エルフマン", "怪力", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "lisanna-strauss",
    name: "リサーナ・ストラウス",
    originalName: "Lisanna Strauss",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "明るく優しい。",
    features: ["接収魔法", "変身", "ストラウス家"],
    relationships: ["ミラジェーン", "エルフマン"],
    description: "ストラウス三姉弟の末っ子で、動物の力を使う魔導士。",
    highlight: "ナツたちとの幼少期からのつながりを持つ。",
    keywords: ["リサーナ", "ストラウス", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "makarov-dreyar",
    name: "マカロフ・ドレアー",
    originalName: "Makarov Dreyar",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "ギルドマスター",
    firstAppearance: "FAIRY TAIL",
    personality: "豪快で仲間思い。",
    features: ["ギルドマスター", "巨大化", "強力な魔法"],
    relationships: ["ラクサス", "ナツ"],
    description: "フェアリーテイルのメンバーを家族のように大切にするギルドマスター。",
    highlight: "仲間を守るためなら強大な敵にも立ち向かう。",
    keywords: ["マカロフ", "ギルドマスター", "FAIRY TAIL", "家族"]
  },

  {
    id: "levy-mcgarden",
    name: "レビィ・マクガーデン",
    originalName: "Levy McGarden",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "知的で優しい。",
    features: ["文字魔法", "読書", "言語"],
    relationships: ["ガジル", "ルーシィ"],
    description: "文字を具現化する魔法を使い、古代文字などの知識にも優れる。",
    highlight: "知識を使って仲間を支えるタイプの魔導士。",
    keywords: ["レビィ", "文字魔法", "ガジル", "FAIRY TAIL"]
  },

  {
    id: "cana-alberona",
    name: "カナ・アルベローナ",
    originalName: "Cana Alberona",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "豪快で仲間思い。",
    features: ["カード魔法", "占い", "魔導士"],
    relationships: ["ギルダーツ"],
    description: "魔法のカードを使って戦うフェアリーテイルの古参メンバー。",
    highlight: "豪快な性格の裏に家族への複雑な思いを抱える。",
    keywords: ["カナ", "カード", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "jellal-fernandes",
    name: "ジェラール・フェルナンデス",
    originalName: "Jellal Fernandes",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "真面目で罪への意識が強い。",
    features: ["天体魔法", "高い魔力", "過去"],
    relationships: ["エルザ"],
    description: "エルザの過去と深く関わり、自らの罪を償おうとする魔導士。",
    highlight: "過去を背負いながら正しい道を選ぼうとする。",
    keywords: ["ジェラール", "エルザ", "魔導士", "FAIRY TAIL"]
  },

  {
    id: "zeref-dragneel",
    name: "ゼレフ・ドラグニル",
    originalName: "Zeref Dragneel",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "黒魔導士",
    firstAppearance: "FAIRY TAIL",
    personality: "穏やかだが深い苦悩を抱える。",
    features: ["黒魔法", "不死", "強大な魔力"],
    relationships: ["ナツ"],
    description: "長い時を生きる伝説的な黒魔導士。",
    highlight: "圧倒的な力とは対照的に生と死を巡る苦しみを抱えている。",
    keywords: ["ゼレフ", "黒魔導士", "ナツ", "FAIRY TAIL"]
  },

  {
    id: "acnologia",
    name: "アクノロギア",
    originalName: "Acnologia",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "強敵",
    firstAppearance: "FAIRY TAIL",
    personality: "破壊的で圧倒的。",
    features: ["ドラゴン", "滅竜魔導士", "強大な力"],
    relationships: ["ナツ", "イグニール"],
    description: "非常に強大な力を持ち、ドラゴン王とも呼ばれる存在。",
    highlight: "物語終盤を代表する最大級の脅威。",
    keywords: ["アクノロギア", "ドラゴン", "強敵", "FAIRY TAIL"]
  },

  {
    id: "mavis-vermillion",
    name: "メイビス・ヴァーミリオン",
    originalName: "Mavis Vermillion",
    work: "FAIRY TAIL",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "初代ギルドマスター",
    firstAppearance: "FAIRY TAIL",
    personality: "明るく頭脳明晰。",
    features: ["初代", "戦略", "魔法"],
    relationships: ["ゼレフ"],
    description: "フェアリーテイルを創設した初代ギルドマスター。",
    highlight: "優れた戦略眼とギルドへの深い愛情を持つ。",
    keywords: ["メイビス", "初代", "ギルド", "FAIRY TAIL"]
  },


  // =====================================================
  // 361〜380 ブラッククローバー
  // =====================================================

  {
    id: "asta-black-clover",
    name: "アスタ",
    originalName: "Asta",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "主人公",
    firstAppearance: "ブラッククローバー",
    personality: "前向きで絶対に諦めない。",
    features: ["反魔法", "魔法騎士", "大剣"],
    relationships: ["ユノ", "ノエル", "ヤミ"],
    description: "魔力を持たずに生まれながら、魔法帝を目指して努力を続ける少年。",
    highlight: "才能がないという状況を努力と反魔法の力で覆していく。",
    keywords: ["アスタ", "反魔法", "黒の暴牛", "主人公"]
  },

  {
    id: "yuno-black-clover",
    name: "ユノ",
    originalName: "Yuno",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "冷静で負けず嫌い。",
    features: ["風魔法", "高い魔力", "金色の夜明け"],
    relationships: ["アスタ"],
    description: "アスタと共に育ち、互いに魔法帝を目指すライバル。",
    highlight: "天才でありながら努力を怠らない姿勢。",
    keywords: ["ユノ", "風魔法", "ライバル", "ブラッククローバー"]
  },

  {
    id: "noelle-silva",
    name: "ノエル・シルヴァ",
    originalName: "Noelle Silva",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "誇り高いが仲間思い。",
    features: ["水魔法", "王族", "黒の暴牛"],
    relationships: ["アスタ"],
    description: "高い魔力を持つ王族出身の少女だが、魔力制御に苦労する。",
    highlight: "自信を得ながら大きく成長していく姿。",
    keywords: ["ノエル", "水魔法", "王族", "黒の暴牛"]
  },

  {
    id: "yami-sukehiro",
    name: "ヤミ・スケヒロ",
    originalName: "Yami Sukehiro",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "黒の暴牛団長",
    firstAppearance: "ブラッククローバー",
    personality: "豪快で面倒見が良い。",
    features: ["闇魔法", "剣", "団長"],
    relationships: ["アスタ", "ナハト"],
    description: "個性的な魔法騎士団・黒の暴牛を率いる団長。",
    highlight: "限界を超えろという言葉で部下の成長を促す。",
    keywords: ["ヤミ", "闇魔法", "団長", "黒の暴牛"]
  },

  {
    id: "finral-roulacase",
    name: "フィンラル・ルーラケイス",
    originalName: "Finral Roulacase",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "軽い性格だが仲間思い。",
    features: ["空間魔法", "移動", "黒の暴牛"],
    relationships: ["ランギルス", "アスタ"],
    description: "空間魔法を使い仲間の移動や戦闘支援を担当する。",
    highlight: "直接攻撃以外の力でチームに欠かせない存在となる。",
    keywords: ["フィンラル", "空間魔法", "黒の暴牛", "魔法騎士"]
  },

  {
    id: "luck-voltia",
    name: "ラック・ボルティア",
    originalName: "Luck Voltia",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "戦闘を楽しむ。",
    features: ["雷魔法", "高速戦闘", "黒の暴牛"],
    relationships: ["マグナ", "アスタ"],
    description: "雷魔法を使った高速戦闘を得意とする魔法騎士。",
    highlight: "常に笑顔で強い相手を求める独特の戦闘好き。",
    keywords: ["ラック", "雷魔法", "黒の暴牛", "魔法騎士"]
  },

  {
    id: "magna-swing",
    name: "マグナ・スウィング",
    originalName: "Magna Swing",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "熱血で仲間思い。",
    features: ["炎魔法", "黒の暴牛", "根性"],
    relationships: ["ラック", "アスタ"],
    description: "炎魔法を使い、努力と根性で強敵に挑む魔法騎士。",
    highlight: "才能の差を努力と工夫で埋めようとする姿が魅力。",
    keywords: ["マグナ", "炎魔法", "黒の暴牛", "努力"]
  },

  {
    id: "vanessa-enoteca",
    name: "バネッサ・エノテーカ",
    originalName: "Vanessa Enoteca",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "自由奔放で仲間思い。",
    features: ["糸魔法", "運命", "黒の暴牛"],
    relationships: ["ヤミ", "アスタ"],
    description: "糸を操る魔法を使う黒の暴牛のメンバー。",
    highlight: "仲間との絆によって特殊な魔法を発現させる。",
    keywords: ["バネッサ", "糸魔法", "黒の暴牛", "魔法騎士"]
  },

  {
    id: "gauche-adlai",
    name: "ゴーシュ・アドレイ",
    originalName: "Gauche Adlai",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "妹への愛情が非常に強い。",
    features: ["鏡魔法", "黒の暴牛", "反射"],
    relationships: ["マリー"],
    description: "鏡を利用した多彩な魔法を使う黒の暴牛の魔法騎士。",
    highlight: "当初は他人に無関心ながら次第に仲間を信頼するようになる。",
    keywords: ["ゴーシュ", "鏡魔法", "黒の暴牛", "魔法騎士"]
  },

  {
    id: "charmy-pappitson",
    name: "チャーミー・パピットソン",
    originalName: "Charmy Pappitson",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "コメディ"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "食べることが大好き。",
    features: ["綿魔法", "料理", "黒の暴牛"],
    relationships: ["ユノ"],
    description: "食事を何よりも愛する黒の暴牛の魔法騎士。",
    highlight: "普段の可愛らしい姿から想像できない高い戦闘能力。",
    keywords: ["チャーミー", "料理", "綿魔法", "黒の暴牛"]
  },

  {
    id: "grey-black-clover",
    name: "グレイ",
    originalName: "Grey",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "非常に恥ずかしがり屋。",
    features: ["変身魔法", "変換", "黒の暴牛"],
    relationships: ["ゴーシュ"],
    description: "物質や自分の姿を変化させる魔法を使う少女。",
    highlight: "自信のなさを抱えながら仲間のために力を発揮する。",
    keywords: ["グレイ", "変身魔法", "黒の暴牛", "魔法騎士"]
  },

  {
    id: "gordon-agrippa",
    name: "ゴードン・アグリッパ",
    originalName: "Gordon Agrippa",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "人見知りだが友達思い。",
    features: ["毒魔法", "黒の暴牛", "呪術"],
    relationships: ["黒の暴牛メンバー"],
    description: "小声で話すため誤解されやすいが、仲間を非常に大切にしている。",
    highlight: "見た目や雰囲気とは反対に心優しい人物。",
    keywords: ["ゴードン", "毒魔法", "黒の暴牛", "魔法騎士"]
  },

  {
    id: "henry-legolant",
    name: "ヘンリー・レゴラント",
    originalName: "Henry Legolant",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "穏やかで仲間思い。",
    features: ["組換魔法", "アジト", "黒の暴牛"],
    relationships: ["黒の暴牛メンバー"],
    description: "黒の暴牛のアジトに長く暮らしてきた魔法騎士。",
    highlight: "仲間から魔力を受けながら巨大なアジトを操る。",
    keywords: ["ヘンリー", "黒の暴牛", "アジト", "魔法騎士"]
  },

  {
    id: "zora-ideale",
    name: "ゾラ・イデアーレ",
    originalName: "Zora Ideale",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "皮肉屋だが信念が強い。",
    features: ["罠魔法", "策略", "黒の暴牛"],
    relationships: ["アスタ"],
    description: "罠魔法を駆使して格上の相手にも戦術で対抗する。",
    highlight: "魔法騎士の理想について強い信念を持つ。",
    keywords: ["ゾラ", "罠魔法", "黒の暴牛", "策略"]
  },

  {
    id: "nacht-faust",
    name: "ナハト・ファウスト",
    originalName: "Nacht Faust",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "黒の暴牛副団長",
    firstAppearance: "ブラッククローバー",
    personality: "冷静で厳しい。",
    features: ["影魔法", "悪魔憑き", "副団長"],
    relationships: ["ヤミ", "アスタ"],
    description: "黒の暴牛の副団長として秘密裏に活動してきた魔法騎士。",
    highlight: "悪魔の力を利用した多彩な戦闘スタイル。",
    keywords: ["ナハト", "影魔法", "副団長", "黒の暴牛"]
  },

  {
    id: "julius-novachrono",
    name: "ユリウス・ノヴァクロノ",
    originalName: "Julius Novachrono",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法帝",
    firstAppearance: "ブラッククローバー",
    personality: "好奇心旺盛で公平。",
    features: ["時間魔法", "魔法帝", "高い魔力"],
    relationships: ["アスタ", "ヤミ"],
    description: "クローバー王国の魔法騎士をまとめる魔法帝。",
    highlight: "身分にこだわらず新しい魔法を見ることを心から楽しむ。",
    keywords: ["ユリウス", "魔法帝", "時間魔法", "ブラッククローバー"]
  },

  {
    id: "mimosa-vermillion",
    name: "ミモザ・ヴァーミリオン",
    originalName: "Mimosa Vermillion",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "穏やかで優しい。",
    features: ["植物魔法", "回復", "王族"],
    relationships: ["アスタ", "ノエル"],
    description: "植物魔法を使い、回復や探索で仲間を支える王族出身の少女。",
    highlight: "支援魔法のスペシャリストとして重要な役割を担う。",
    keywords: ["ミモザ", "植物魔法", "回復", "ブラッククローバー"]
  },

  {
    id: "fuegoleon-vermillion",
    name: "フエゴレオン・ヴァーミリオン",
    originalName: "Fuegoleon Vermillion",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士団長",
    firstAppearance: "ブラッククローバー",
    personality: "誠実で指導力が高い。",
    features: ["炎魔法", "団長", "王族"],
    relationships: ["メレオレオナ", "ミモザ"],
    description: "紅蓮の獅子王を率いる高潔な魔法騎士団長。",
    highlight: "実力だけでなく人格面でも多くの騎士から尊敬される。",
    keywords: ["フエゴレオン", "炎魔法", "団長", "ブラッククローバー"]
  },

  {
    id: "mereoleona-vermillion",
    name: "メレオレオナ・ヴァーミリオン",
    originalName: "Mereoleona Vermillion",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法騎士",
    firstAppearance: "ブラッククローバー",
    personality: "豪快で非常に好戦的。",
    features: ["炎魔法", "魔力操作", "怪力"],
    relationships: ["フエゴレオン"],
    description: "自然界で鍛え続けた圧倒的な戦闘能力を持つ魔法騎士。",
    highlight: "敵が強いほど楽しそうに戦う豪快さ。",
    keywords: ["メレオレオナ", "炎魔法", "最強", "ブラッククローバー"]
  },

  {
    id: "william-vangeance",
    name: "ウィリアム・ヴァンジャンス",
    originalName: "William Vangeance",
    work: "ブラッククローバー",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "金色の夜明け団長",
    firstAppearance: "ブラッククローバー",
    personality: "穏やかで責任感が強い。",
    features: ["世界樹魔法", "団長", "高い魔力"],
    relationships: ["ユノ", "ユリウス"],
    description: "最強クラスの魔法騎士団・金色の夜明けを率いる人物。",
    highlight: "自らの立場と大切な存在の間で難しい選択を迫られる。",
    keywords: ["ウィリアム", "世界樹魔法", "団長", "ブラッククローバー"]
  },


  // =====================================================
  // 381〜400 ハイキュー!!
  // =====================================================

  {
    id: "shoyo-hinata",
    name: "日向翔陽",
    originalName: "Shoyo Hinata",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "主人公／バレーボール選手",
    firstAppearance: "ハイキュー!!",
    personality: "前向きで負けず嫌い。",
    features: ["ミドルブロッカー", "ジャンプ力", "速攻"],
    relationships: ["影山飛雄", "月島蛍"],
    description: "小柄ながら驚異的なジャンプ力を武器に全国を目指す高校生。",
    highlight: "身体的な不利を努力とスピードで乗り越えていく。",
    keywords: ["日向", "烏野", "バレー", "主人公"]
  },

  {
    id: "tobio-kageyama",
    name: "影山飛雄",
    originalName: "Tobio Kageyama",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "セッター",
    firstAppearance: "ハイキュー!!",
    personality: "真面目でバレーへの情熱が強い。",
    features: ["セッター", "正確なトス", "天才"],
    relationships: ["日向翔陽"],
    description: "卓越した技術を持つセッターで、日向と独特のコンビを形成する。",
    highlight: "個人技だけではなく仲間を活かすセッターへ成長していく。",
    keywords: ["影山", "セッター", "烏野", "バレー"]
  },

  {
    id: "daichi-sawamura",
    name: "澤村大地",
    originalName: "Daichi Sawamura",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "主将",
    firstAppearance: "ハイキュー!!",
    personality: "落ち着いていて責任感が強い。",
    features: ["主将", "レシーブ", "守備"],
    relationships: ["菅原孝支", "東峰旭"],
    description: "烏野高校バレー部をまとめる主将。",
    highlight: "派手さより安定した守備と精神面でチームを支える。",
    keywords: ["澤村", "主将", "烏野", "ハイキュー"]
  },

  {
    id: "koshi-sugawara",
    name: "菅原孝支",
    originalName: "Koshi Sugawara",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "セッター",
    firstAppearance: "ハイキュー!!",
    personality: "穏やかで仲間思い。",
    features: ["セッター", "副主将", "経験"],
    relationships: ["澤村大地", "影山飛雄"],
    description: "烏野の経験豊富なセッターで、後輩の影山も支える。",
    highlight: "出場時間だけでは測れないチームへの貢献が魅力。",
    keywords: ["菅原", "セッター", "烏野", "ハイキュー"]
  },

  {
    id: "asahi-azumane",
    name: "東峰旭",
    originalName: "Asahi Azumane",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "エース",
    firstAppearance: "ハイキュー!!",
    personality: "気弱な面もあるが責任感が強い。",
    features: ["エース", "スパイク", "パワー"],
    relationships: ["西谷夕", "澤村大地"],
    description: "強力なスパイクを武器とする烏野高校のエース。",
    highlight: "一度失った自信を仲間との関係から取り戻していく。",
    keywords: ["東峰", "エース", "烏野", "バレー"]
  },

  {
    id: "yu-nishinoya",
    name: "西谷夕",
    originalName: "Yu Nishinoya",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "リベロ",
    firstAppearance: "ハイキュー!!",
    personality: "熱血で前向き。",
    features: ["リベロ", "レシーブ", "守護神"],
    relationships: ["東峰旭", "田中龍之介"],
    description: "烏野の守護神と呼ばれる高い守備力を持つリベロ。",
    highlight: "どんな強打にも恐れず飛び込む勇気。",
    keywords: ["西谷", "リベロ", "守護神", "烏野"]
  },

  {
    id: "ryunosuke-tanaka",
    name: "田中龍之介",
    originalName: "Ryunosuke Tanaka",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "ウイングスパイカー",
    firstAppearance: "ハイキュー!!",
    personality: "熱血で精神的に強い。",
    features: ["スパイク", "ムードメーカー", "烏野"],
    relationships: ["西谷夕", "日向翔陽"],
    description: "熱い性格でチームを盛り上げるウイングスパイカー。",
    highlight: "失敗しても引きずらず次の一本へ向かう精神力。",
    keywords: ["田中", "スパイカー", "烏野", "ハイキュー"]
  },

  {
    id: "kei-tsukishima",
    name: "月島蛍",
    originalName: "Kei Tsukishima",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "ミドルブロッカー",
    firstAppearance: "ハイキュー!!",
    personality: "冷静で皮肉屋。",
    features: ["ブロック", "高身長", "分析"],
    relationships: ["山口忠", "日向翔陽"],
    description: "高身長と分析力を活かしてブロックを行う選手。",
    highlight: "バレーへ距離を置いていた少年が競技の面白さへ目覚めていく。",
    keywords: ["月島", "ブロック", "烏野", "ハイキュー"]
  },

  {
    id: "tadashi-yamaguchi",
    name: "山口忠",
    originalName: "Tadashi Yamaguchi",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "ピンチサーバー",
    firstAppearance: "ハイキュー!!",
    personality: "控えめだが努力家。",
    features: ["ジャンプフローター", "サーブ", "烏野"],
    relationships: ["月島蛍"],
    description: "自分だけの武器を身につけるためサーブの練習を重ねる選手。",
    highlight: "控え選手が努力によって重要な武器を手にする成長。",
    keywords: ["山口", "サーブ", "烏野", "ハイキュー"]
  },

  {
    id: "kiyoko-shimizu",
    name: "清水潔子",
    originalName: "Kiyoko Shimizu",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "マネージャー",
    firstAppearance: "ハイキュー!!",
    personality: "静かで責任感が強い。",
    features: ["マネージャー", "烏野", "支援"],
    relationships: ["谷地仁花"],
    description: "烏野高校バレー部を長く支えてきたマネージャー。",
    highlight: "選手ではない立場からチームの活動を支える。",
    keywords: ["清水", "マネージャー", "烏野", "ハイキュー"]
  },

  {
    id: "hitoka-yachi",
    name: "谷地仁花",
    originalName: "Hitoka Yachi",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "マネージャー",
    firstAppearance: "ハイキュー!!",
    personality: "臆病だが真面目。",
    features: ["マネージャー", "デザイン", "烏野"],
    relationships: ["清水潔子", "日向翔陽"],
    description: "烏野バレー部へ新しく加入したマネージャー。",
    highlight: "自信のなかった少女がチームの中で自分の役割を見つける。",
    keywords: ["谷地", "マネージャー", "烏野", "ハイキュー"]
  },

  {
    id: "toru-oikawa",
    name: "及川徹",
    originalName: "Toru Oikawa",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "セッター",
    firstAppearance: "ハイキュー!!",
    personality: "自信家で努力家。",
    features: ["セッター", "サーブ", "青葉城西"],
    relationships: ["岩泉一", "影山飛雄"],
    description: "青葉城西を率いる高い技術と統率力を持つセッター。",
    highlight: "天才に対抗するため徹底して努力する姿が魅力。",
    keywords: ["及川", "セッター", "青葉城西", "ハイキュー"]
  },

  {
    id: "hajime-iwaizumi",
    name: "岩泉一",
    originalName: "Hajime Iwaizumi",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "エース",
    firstAppearance: "ハイキュー!!",
    personality: "男気があり頼れる。",
    features: ["エース", "スパイク", "青葉城西"],
    relationships: ["及川徹"],
    description: "青葉城西のエースとして及川を支える選手。",
    highlight: "幼なじみの及川を最も理解する相棒でもある。",
    keywords: ["岩泉", "エース", "青葉城西", "ハイキュー"]
  },

  {
    id: "tetsuro-kuroo",
    name: "黒尾鉄朗",
    originalName: "Tetsuro Kuroo",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "主将",
    firstAppearance: "ハイキュー!!",
    personality: "頭の回転が速く面倒見が良い。",
    features: ["ブロック", "主将", "音駒"],
    relationships: ["孤爪研磨"],
    description: "音駒高校を率いるミドルブロッカー。",
    highlight: "相手を観察して戦術的にブロックを組み立てる。",
    keywords: ["黒尾", "音駒", "主将", "ハイキュー"]
  },

  {
    id: "kenma-kozume",
    name: "孤爪研磨",
    originalName: "Kenma Kozume",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "セッター",
    firstAppearance: "ハイキュー!!",
    personality: "内向的で分析好き。",
    features: ["セッター", "分析", "音駒"],
    relationships: ["黒尾鉄朗", "日向翔陽"],
    description: "相手の動きを分析して試合を組み立てる音駒のセッター。",
    highlight: "バレーをゲームのように読み解く高い分析能力。",
    keywords: ["研磨", "音駒", "セッター", "ハイキュー"]
  },

  {
    id: "kotaro-bokuto",
    name: "木兎光太郎",
    originalName: "Kotaro Bokuto",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "エース",
    firstAppearance: "ハイキュー!!",
    personality: "明るく感情豊か。",
    features: ["エース", "スパイク", "梟谷"],
    relationships: ["赤葦京治"],
    description: "全国でも高い実力を持つ梟谷学園のエース。",
    highlight: "調子の波は大きいが、乗った時の圧倒的な攻撃力が魅力。",
    keywords: ["木兎", "梟谷", "エース", "ハイキュー"]
  },

  {
    id: "keiji-akaashi",
    name: "赤葦京治",
    originalName: "Keiji Akaashi",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "セッター",
    firstAppearance: "ハイキュー!!",
    personality: "冷静で観察力が高い。",
    features: ["セッター", "梟谷", "分析"],
    relationships: ["木兎光太郎"],
    description: "木兎を上手くコントロールしながら試合を組み立てるセッター。",
    highlight: "エースの性格まで理解した高いサポート能力。",
    keywords: ["赤葦", "梟谷", "セッター", "ハイキュー"]
  },

  {
    id: "wakatoshi-ushijima",
    name: "牛島若利",
    originalName: "Wakatoshi Ushijima",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "エース",
    firstAppearance: "ハイキュー!!",
    personality: "寡黙で自信がある。",
    features: ["左利き", "エース", "白鳥沢"],
    relationships: ["天童覚"],
    description: "全国トップクラスの攻撃力を持つ白鳥沢高校のエース。",
    highlight: "圧倒的なパワーと安定感を持つシンプルに強い選手。",
    keywords: ["牛島", "白鳥沢", "エース", "ハイキュー"]
  },

  {
    id: "atsumu-miya",
    name: "宮侑",
    originalName: "Atsumu Miya",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "セッター",
    firstAppearance: "ハイキュー!!",
    personality: "自信家でバレーへのこだわりが強い。",
    features: ["セッター", "サーブ", "稲荷崎"],
    relationships: ["宮治"],
    description: "高校トップクラスと評価される技術を持つセッター。",
    highlight: "高い技術だけでなく攻撃的なサーブでも相手を追い込む。",
    keywords: ["宮侑", "稲荷崎", "セッター", "ハイキュー"]
  },

  {
    id: "osamu-miya",
    name: "宮治",
    originalName: "Osamu Miya",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "ウイングスパイカー",
    firstAppearance: "ハイキュー!!",
    personality: "落ち着いていて現実的。",
    features: ["スパイク", "稲荷崎", "双子"],
    relationships: ["宮侑"],
    description: "侑の双子の兄弟として息の合ったプレーを見せる選手。",
    highlight: "双子ならではの連携と侑との遠慮のない関係が魅力。",
    keywords: ["宮治", "稲荷崎", "双子", "ハイキュー"]
  },

  {
    id: "satori-tendo",
    name: "天童覚",
    originalName: "Satori Tendo",
    work: "ハイキュー!!",
    category: "アニメ",
    genre: ["スポーツ", "青春"],
    role: "ミドルブロッカー",
    firstAppearance: "ハイキュー!!",
    personality: "陽気で独特。",
    features: ["ブロック", "読み", "白鳥沢"],
    relationships: ["牛島若利"],
    description: "相手の攻撃を直感的に読むゲス・ブロックを得意とする選手。",
    highlight: "予測しにくいブロックで相手アタッカーへ強い圧力をかける。",
    keywords: ["天童", "白鳥沢", "ブロック", "ハイキュー"]
  }

);
// =====================================================
// 401〜420 HUNTER×HUNTER
// =====================================================

characters.push(

  {
    id: "gon-freecss",
    name: "ゴン＝フリークス",
    originalName: "Gon Freecss",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "主人公／ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "素直で好奇心旺盛。",
    features: ["ハンター", "強化系", "高い身体能力"],
    relationships: ["キルア", "クラピカ", "レオリオ"],
    description: "父親を探すことを大きな目的としてハンターの世界へ飛び込む少年。",
    highlight: "純粋さと驚異的な集中力で困難へ挑んでいく。",
    keywords: ["ゴン", "ハンター", "強化系", "主人公"]
  },

  {
    id: "killua-zoldyck",
    name: "キルア＝ゾルディック",
    originalName: "Killua Zoldyck",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静で頭の回転が速い。",
    features: ["暗殺一家", "変化系", "電気"],
    relationships: ["ゴン", "アルカ"],
    description: "暗殺一家に生まれながら自分の人生を求め、ゴンと旅をする少年。",
    highlight: "暗殺者としての技術と友達を大切にする優しさを併せ持つ。",
    keywords: ["キルア", "ゾルディック", "電気", "ハンター"]
  },

  {
    id: "kurapika-hxh",
    name: "クラピカ",
    originalName: "Kurapika",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "サスペンス"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "知的で冷静。",
    features: ["鎖", "具現化系", "緋の眼"],
    relationships: ["ゴン", "キルア", "レオリオ"],
    description: "失われた同胞に関わる目的を胸にハンターとなった人物。",
    highlight: "冷静な戦略と強い使命感を持って行動する。",
    keywords: ["クラピカ", "鎖", "緋の眼", "ハンター"]
  },

  {
    id: "leorio-paradinight",
    name: "レオリオ＝パラディナイト",
    originalName: "Leorio Paradinight",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "ドラマ"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "熱血で情に厚い。",
    features: ["医師志望", "ハンター", "仲間思い"],
    relationships: ["ゴン", "キルア", "クラピカ"],
    description: "医師になるという目標を持ってハンター試験へ参加する青年。",
    highlight: "口調は荒いものの仲間を誰より心配する人情家。",
    keywords: ["レオリオ", "医師", "ハンター", "仲間"]
  },

  {
    id: "hisoka-morow",
    name: "ヒソカ＝モロウ",
    originalName: "Hisoka Morow",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "サスペンス"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "気まぐれで戦闘好き。",
    features: ["変化系", "バンジーガム", "トランプ"],
    relationships: ["ゴン", "クロロ"],
    description: "強い相手との戦いを何より楽しみにする謎の多いハンター。",
    highlight: "敵味方という枠に収まらない予測不能な行動。",
    keywords: ["ヒソカ", "バンジーガム", "念", "ハンター"]
  },

  {
    id: "chrollo-lucilfer",
    name: "クロロ＝ルシルフル",
    originalName: "Chrollo Lucilfer",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "サスペンス"],
    role: "幻影旅団団長",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静でつかみどころがない。",
    features: ["幻影旅団", "団長", "念能力"],
    relationships: ["ヒソカ", "幻影旅団"],
    description: "幻影旅団を率いる高い知性と戦闘能力を持った人物。",
    highlight: "落ち着いた態度と予測困難な能力が特徴。",
    keywords: ["クロロ", "幻影旅団", "団長", "念"]
  },

  {
    id: "illumi-zoldyck",
    name: "イルミ＝ゾルディック",
    originalName: "Illumi Zoldyck",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "サスペンス"],
    role: "暗殺者",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静で感情を表に出しにくい。",
    features: ["暗殺", "針", "操作系"],
    relationships: ["キルア", "ヒソカ"],
    description: "ゾルディック家の一員として高度な暗殺技術を持つ人物。",
    highlight: "家族への独特な価値観と高い実力が特徴。",
    keywords: ["イルミ", "ゾルディック", "暗殺", "念"]
  },

  {
    id: "alluka-zoldyck",
    name: "アルカ＝ゾルディック",
    originalName: "Alluka Zoldyck",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ゾルディック家",
    firstAppearance: "HUNTER×HUNTER",
    personality: "素直でキルアを慕っている。",
    features: ["特殊な能力", "ゾルディック家", "ナニカ"],
    relationships: ["キルア"],
    description: "ゾルディック家の一員で、非常に特殊な力と関係を持つ。",
    highlight: "キルアとの強い兄妹の絆が重要なポイント。",
    keywords: ["アルカ", "ナニカ", "キルア", "ゾルディック"]
  },

  {
    id: "isaac-netero",
    name: "アイザック＝ネテロ",
    originalName: "Isaac Netero",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "ハンター協会会長",
    firstAppearance: "HUNTER×HUNTER",
    personality: "豪快で飄々としている。",
    features: ["会長", "武術", "百式観音"],
    relationships: ["ハンター協会"],
    description: "長年の修行によって極めて高い戦闘力を身につけたハンター協会会長。",
    highlight: "老齢を感じさせない圧倒的な技量と精神力。",
    keywords: ["ネテロ", "会長", "百式観音", "ハンター"]
  },

  {
    id: "meruem-hxh",
    name: "メルエム",
    originalName: "Meruem",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["ダークファンタジー", "ドラマ"],
    role: "キメラアントの王",
    firstAppearance: "HUNTER×HUNTER",
    personality: "圧倒的な自信を持つ。",
    features: ["キメラアント", "王", "高い戦闘力"],
    relationships: ["コムギ", "ネフェルピトー"],
    description: "キメラアントの頂点として誕生した非常に強大な存在。",
    highlight: "人間との交流によって価値観が変化していく過程。",
    keywords: ["メルエム", "王", "キメラアント", "HUNTER×HUNTER"]
  },

  {
    id: "komugi-hxh",
    name: "コムギ",
    originalName: "Komugi",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["ドラマ"],
    role: "軍儀棋士",
    firstAppearance: "HUNTER×HUNTER",
    personality: "謙虚で一途。",
    features: ["軍儀", "天才棋士", "集中力"],
    relationships: ["メルエム"],
    description: "盤上競技の軍儀において驚異的な才能を持つ少女。",
    highlight: "メルエムの価値観へ大きな影響を与える存在。",
    keywords: ["コムギ", "軍儀", "メルエム", "棋士"]
  },

  {
    id: "neferpitou",
    name: "ネフェルピトー",
    originalName: "Neferpitou",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "王直属護衛軍",
    firstAppearance: "HUNTER×HUNTER",
    personality: "好奇心旺盛で王への忠誠心が強い。",
    features: ["キメラアント", "念", "護衛軍"],
    relationships: ["メルエム"],
    description: "キメラアントの王を守る直属護衛軍の一人。",
    highlight: "非常に高い戦闘力と強烈な存在感を持つ。",
    keywords: ["ピトー", "キメラアント", "護衛軍", "念"]
  },

  {
    id: "shalnark-hxh",
    name: "シャルナーク",
    originalName: "Shalnark",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "サスペンス"],
    role: "幻影旅団",
    firstAppearance: "HUNTER×HUNTER",
    personality: "明るく頭脳派。",
    features: ["操作系", "携帯電話", "幻影旅団"],
    relationships: ["クロロ", "幻影旅団"],
    description: "情報収集や分析にも優れた幻影旅団のメンバー。",
    highlight: "軽い雰囲気とは裏腹に冷静な判断力を持つ。",
    keywords: ["シャルナーク", "幻影旅団", "操作系", "念"]
  },

  {
    id: "feitan-porter",
    name: "フェイタン＝ポートオ",
    originalName: "Feitan Portor",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション"],
    role: "幻影旅団",
    firstAppearance: "HUNTER×HUNTER",
    personality: "寡黙で冷酷。",
    features: ["幻影旅団", "高速戦闘", "念"],
    relationships: ["クロロ", "フィンクス"],
    description: "素早い動きと危険な念能力を持つ幻影旅団の戦闘員。",
    highlight: "小柄な体格から繰り出される高速戦闘。",
    keywords: ["フェイタン", "幻影旅団", "念", "戦闘"]
  },

  {
    id: "machi-komacine",
    name: "マチ＝コマチネ",
    originalName: "Machi Komacine",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション"],
    role: "幻影旅団",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静で勘が鋭い。",
    features: ["念糸", "幻影旅団", "治療"],
    relationships: ["ヒソカ", "クロロ"],
    description: "念で作った糸を巧みに操る幻影旅団のメンバー。",
    highlight: "戦闘から治療まで応用できる念糸が特徴。",
    keywords: ["マチ", "幻影旅団", "念糸", "念"]
  },

  {
    id: "biscuit-krueger",
    name: "ビスケット＝クルーガー",
    originalName: "Biscuit Krueger",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "明るく指導力が高い。",
    features: ["念能力", "修行", "高い戦闘力"],
    relationships: ["ゴン", "キルア"],
    description: "ゴンとキルアへ念の修行をつける経験豊富なハンター。",
    highlight: "見た目からは想像できない豊富な経験と実力。",
    keywords: ["ビスケ", "修行", "念", "ハンター"]
  },

  {
    id: "kite-hxh",
    name: "カイト",
    originalName: "Kite",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "冷静で責任感が強い。",
    features: ["念能力", "生物調査", "武器"],
    relationships: ["ゴン", "ジン"],
    description: "生物調査を行うハンターで、ゴンの人生にも大きな影響を与える。",
    highlight: "危険な状況でも仲間を守ろうとする責任感。",
    keywords: ["カイト", "ハンター", "ゴン", "念"]
  },

  {
    id: "ging-freecss",
    name: "ジン＝フリークス",
    originalName: "Ging Freecss",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "自由奔放で好奇心旺盛。",
    features: ["トップハンター", "遺跡", "冒険"],
    relationships: ["ゴン", "カイト"],
    description: "世界各地を自由に探索する非常に高い実力を持つハンター。",
    highlight: "未知のものを追い続ける純粋な探究心。",
    keywords: ["ジン", "ゴン", "ハンター", "冒険"]
  },

  {
    id: "knuckle-bine",
    name: "ナックル＝バイン",
    originalName: "Knuckle Bine",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "情に厚く涙もろい。",
    features: ["念能力", "格闘", "魔獣ハンター"],
    relationships: ["シュート", "モラウ"],
    description: "見た目は荒々しいが非常に優しい心を持つハンター。",
    highlight: "独特な念能力と人情味あふれる性格。",
    keywords: ["ナックル", "念", "ハンター", "キメラアント"]
  },

  {
    id: "morel-mackernasey",
    name: "モラウ＝マッカーナーシ",
    originalName: "Morel Mackernasey",
    work: "HUNTER×HUNTER",
    category: "アニメ",
    genre: ["アクション", "冒険"],
    role: "ハンター",
    firstAppearance: "HUNTER×HUNTER",
    personality: "豪快で冷静。",
    features: ["煙", "念能力", "経験"],
    relationships: ["ナックル", "シュート"],
    description: "豊富な経験と柔軟な戦術で困難な任務へ挑むハンター。",
    highlight: "能力の応用力と状況判断能力の高さ。",
    keywords: ["モラウ", "煙", "念", "ハンター"]
  },


  // =====================================================
  // 421〜440 SPY×FAMILY
  // =====================================================

  {
    id: "loid-forger",
    name: "ロイド・フォージャー",
    originalName: "Loid Forger",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "スパイ"],
    role: "主人公／スパイ",
    firstAppearance: "SPY×FAMILY",
    personality: "冷静で任務に忠実。",
    features: ["スパイ", "変装", "戦闘"],
    relationships: ["アーニャ", "ヨル"],
    description: "極秘任務のため偽装家族を作ることになった敏腕スパイ。",
    highlight: "完璧なスパイが家族生活に悪戦苦闘するギャップ。",
    keywords: ["ロイド", "黄昏", "スパイ", "フォージャー家"]
  },

  {
    id: "anya-forger",
    name: "アーニャ・フォージャー",
    originalName: "Anya Forger",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "ファミリー"],
    role: "フォージャー家の娘",
    firstAppearance: "SPY×FAMILY",
    personality: "好奇心旺盛で素直。",
    features: ["超能力", "読心", "学生"],
    relationships: ["ロイド", "ヨル", "ボンド"],
    description: "人の心を読むことができる特殊な能力を持った少女。",
    highlight: "両親の秘密を知りながら家族生活を楽しむ姿。",
    keywords: ["アーニャ", "超能力", "フォージャー家", "SPY×FAMILY"]
  },

  {
    id: "yor-forger",
    name: "ヨル・フォージャー",
    originalName: "Yor Forger",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "アクション"],
    role: "母／暗殺者",
    firstAppearance: "SPY×FAMILY",
    personality: "優しく天然。",
    features: ["暗殺者", "怪力", "戦闘"],
    relationships: ["ロイド", "アーニャ", "ユーリ"],
    description: "普段は市役所で働きながら秘密の仕事を持つ女性。",
    highlight: "穏やかな日常生活と圧倒的な戦闘能力のギャップ。",
    keywords: ["ヨル", "暗殺者", "フォージャー家", "SPY×FAMILY"]
  },

  {
    id: "bond-forger",
    name: "ボンド・フォージャー",
    originalName: "Bond Forger",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "ファミリー"],
    role: "フォージャー家の犬",
    firstAppearance: "SPY×FAMILY",
    personality: "穏やかで家族思い。",
    features: ["大型犬", "特殊能力", "家族"],
    relationships: ["アーニャ"],
    description: "フォージャー家で暮らすことになる大きな白い犬。",
    highlight: "アーニャとの独特なコンビネーション。",
    keywords: ["ボンド", "犬", "アーニャ", "SPY×FAMILY"]
  },

  {
    id: "damian-desmond",
    name: "ダミアン・デズモンド",
    originalName: "Damian Desmond",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "学園"],
    role: "学生",
    firstAppearance: "SPY×FAMILY",
    personality: "誇り高く負けず嫌い。",
    features: ["イーデン校", "学生", "名家"],
    relationships: ["アーニャ"],
    description: "イーデン校へ通う名家出身の少年。",
    highlight: "アーニャとの不器用な関係がコミカルに描かれる。",
    keywords: ["ダミアン", "アーニャ", "イーデン校", "SPY×FAMILY"]
  },

  {
    id: "becky-blackbell",
    name: "ベッキー・ブラックベル",
    originalName: "Becky Blackbell",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "学園"],
    role: "学生",
    firstAppearance: "SPY×FAMILY",
    personality: "明るく友達思い。",
    features: ["イーデン校", "学生", "友人"],
    relationships: ["アーニャ"],
    description: "アーニャと同じ学校に通う親友。",
    highlight: "学校生活でアーニャを支える大切な友達。",
    keywords: ["ベッキー", "アーニャ", "イーデン校", "SPY×FAMILY"]
  },

  {
    id: "yuri-briar",
    name: "ユーリ・ブライア",
    originalName: "Yuri Briar",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "スパイ"],
    role: "秘密警察",
    firstAppearance: "SPY×FAMILY",
    personality: "姉への愛情が非常に強い。",
    features: ["秘密警察", "情報", "捜査"],
    relationships: ["ヨル", "ロイド"],
    description: "ヨルの弟で、秘密警察として活動する青年。",
    highlight: "姉を大切にするあまりロイドへ強い警戒心を持つ。",
    keywords: ["ユーリ", "ヨル", "秘密警察", "SPY×FAMILY"]
  },

  {
    id: "fiona-frost",
    name: "フィオナ・フロスト",
    originalName: "Fiona Frost",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["スパイ", "コメディ"],
    role: "スパイ",
    firstAppearance: "SPY×FAMILY",
    personality: "無表情で任務に忠実。",
    features: ["スパイ", "諜報", "戦闘"],
    relationships: ["ロイド"],
    description: "ロイドと同じ組織に所属する優秀な女性スパイ。",
    highlight: "冷静な表情の内側に強烈な感情を秘めている。",
    keywords: ["フィオナ", "夜帷", "スパイ", "SPY×FAMILY"]
  },

  {
    id: "franky-franklin",
    name: "フランキー・フランクリン",
    originalName: "Franky Franklin",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "スパイ"],
    role: "情報屋",
    firstAppearance: "SPY×FAMILY",
    personality: "陽気で面倒見が良い。",
    features: ["情報屋", "発明", "協力者"],
    relationships: ["ロイド", "アーニャ"],
    description: "ロイドへさまざまな情報を提供する協力者。",
    highlight: "スパイ活動だけでなくフォージャー家の日常も支える。",
    keywords: ["フランキー", "情報屋", "ロイド", "SPY×FAMILY"]
  },

  {
    id: "sylvia-sherwood",
    name: "シルヴィア・シャーウッド",
    originalName: "Sylvia Sherwood",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["スパイ", "ドラマ"],
    role: "諜報組織管理官",
    firstAppearance: "SPY×FAMILY",
    personality: "冷静で厳格。",
    features: ["諜報", "管理官", "指揮"],
    relationships: ["ロイド"],
    description: "ロイドたち諜報員へ任務を与える管理官。",
    highlight: "平和を守る任務に対して強い覚悟を持っている。",
    keywords: ["シルヴィア", "ハンドラー", "スパイ", "SPY×FAMILY"]
  },

  {
    id: "henry-henderson",
    name: "ヘンリー・ヘンダーソン",
    originalName: "Henry Henderson",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "学園"],
    role: "教師",
    firstAppearance: "SPY×FAMILY",
    personality: "礼儀と品格を重視する。",
    features: ["教師", "イーデン校", "エレガント"],
    relationships: ["アーニャ", "ダミアン"],
    description: "イーデン校で生徒たちを指導する教師。",
    highlight: "何事にもエレガントさを求める独特の教育方針。",
    keywords: ["ヘンダーソン", "教師", "イーデン校", "エレガント"]
  },

  {
    id: "donovan-desmond",
    name: "ドノバン・デズモンド",
    originalName: "Donovan Desmond",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["スパイ", "サスペンス"],
    role: "政治家",
    firstAppearance: "SPY×FAMILY",
    personality: "寡黙で慎重。",
    features: ["政治家", "重要人物", "デズモンド家"],
    relationships: ["ダミアン"],
    description: "ロイドの極秘任務において重要な対象となる政治家。",
    highlight: "簡単には接触できない謎の多い人物。",
    keywords: ["ドノバン", "デズモンド", "政治家", "SPY×FAMILY"]
  },

  {
    id: "melinda-desmond",
    name: "メリンダ・デズモンド",
    originalName: "Melinda Desmond",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["ドラマ", "コメディ"],
    role: "デズモンド家",
    firstAppearance: "SPY×FAMILY",
    personality: "穏やかだが謎が多い。",
    features: ["社交", "名家", "デズモンド家"],
    relationships: ["ダミアン", "ヨル"],
    description: "デズモンド家の一員として物語に関わる女性。",
    highlight: "ヨルとの交流を通して新たな人間関係を作る。",
    keywords: ["メリンダ", "デズモンド", "ヨル", "SPY×FAMILY"]
  },

  {
    id: "emile-elman",
    name: "エミール・エルマン",
    originalName: "Emile Elman",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "学園"],
    role: "学生",
    firstAppearance: "SPY×FAMILY",
    personality: "友達思い。",
    features: ["イーデン校", "学生", "友人"],
    relationships: ["ダミアン"],
    description: "ダミアンと学校生活を共にする友人の一人。",
    highlight: "ダミアンを支える仲間として行動する。",
    keywords: ["エミール", "ダミアン", "イーデン校", "SPY×FAMILY"]
  },

  {
    id: "ewen-egeburg",
    name: "ユーイン・エッジバーグ",
    originalName: "Ewen Egeburg",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "学園"],
    role: "学生",
    firstAppearance: "SPY×FAMILY",
    personality: "友達思いで活発。",
    features: ["イーデン校", "学生", "友人"],
    relationships: ["ダミアン"],
    description: "ダミアンと共に行動することが多いクラスメート。",
    highlight: "学校での友情を通してダミアンを支える。",
    keywords: ["ユーイン", "ダミアン", "イーデン校", "SPY×FAMILY"]
  },

  {
    id: "martha-marriott",
    name: "マーサ・マリオット",
    originalName: "Martha Marriott",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["ドラマ", "コメディ"],
    role: "ブラックベル家の使用人",
    firstAppearance: "SPY×FAMILY",
    personality: "落ち着いていて頼れる。",
    features: ["護衛", "使用人", "経験"],
    relationships: ["ベッキー"],
    description: "ベッキーの身の回りを支える経験豊富な女性。",
    highlight: "冷静な判断力でベッキーを見守る。",
    keywords: ["マーサ", "ベッキー", "ブラックベル", "SPY×FAMILY"]
  },

  {
    id: "camilla-spy-family",
    name: "カミラ",
    originalName: "Camilla",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "日常"],
    role: "ヨルの同僚",
    firstAppearance: "SPY×FAMILY",
    personality: "はっきりした性格。",
    features: ["市役所", "料理", "同僚"],
    relationships: ["ヨル"],
    description: "ヨルと同じ職場で働く女性。",
    highlight: "ヨルの日常生活や料理の練習にも関わる。",
    keywords: ["カミラ", "ヨル", "市役所", "SPY×FAMILY"]
  },

  {
    id: "dominic-spy-family",
    name: "ドミニク",
    originalName: "Dominic",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "日常"],
    role: "ヨルの知人",
    firstAppearance: "SPY×FAMILY",
    personality: "穏やかで親切。",
    features: ["友人", "日常", "市民"],
    relationships: ["カミラ", "ユーリ"],
    description: "ヨルたちと交流を持つ穏やかな青年。",
    highlight: "個性的な登場人物たちの中で比較的落ち着いた存在。",
    keywords: ["ドミニク", "カミラ", "ヨル", "SPY×FAMILY"]
  },

  {
    id: "bill-watkins",
    name: "ビル・ワトキンス",
    originalName: "Bill Watkins",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "学園"],
    role: "学生",
    firstAppearance: "SPY×FAMILY",
    personality: "堂々としている。",
    features: ["イーデン校", "運動", "学生"],
    relationships: ["アーニャ", "ダミアン"],
    description: "イーデン校に通う非常に体格の良い生徒。",
    highlight: "年齢から想像しにくい堂々とした姿が印象的。",
    keywords: ["ビル", "イーデン校", "学生", "SPY×FAMILY"]
  },

  {
    id: "daybreak-spy-family",
    name: "東雲",
    originalName: "Daybreak",
    work: "SPY×FAMILY",
    category: "アニメ",
    genre: ["コメディ", "スパイ"],
    role: "自称スパイ",
    firstAppearance: "SPY×FAMILY",
    personality: "自信過剰で目立ちたがり。",
    features: ["スパイ", "潜入", "コミカル"],
    relationships: ["ロイド"],
    description: "黄昏を意識した名前を使う独特な自称スパイ。",
    highlight: "ロイドとは対照的な潜入方法が笑いを生む。",
    keywords: ["東雲", "スパイ", "黄昏", "SPY×FAMILY"]
  },


  // =====================================================
  // 441〜460 僕のヒーローアカデミア
  // =====================================================

  {
    id: "izuku-midoriya",
    name: "緑谷出久",
    originalName: "Izuku Midoriya",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "主人公／ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "真面目で人を助ける意志が強い。",
    features: ["ワン・フォー・オール", "分析", "雄英高校"],
    relationships: ["爆豪勝己", "オールマイト", "麗日お茶子"],
    description: "最高のヒーローを目指し、仲間と共に成長していく少年。",
    highlight: "危険を前にすると考えるより先に人を助けようとする。",
    keywords: ["デク", "緑谷", "雄英", "ヒーロー"]
  },

  {
    id: "katsuki-bakugo",
    name: "爆豪勝己",
    originalName: "Katsuki Bakugo",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "負けず嫌いで自信家。",
    features: ["爆破", "高い戦闘能力", "雄英高校"],
    relationships: ["緑谷出久", "切島鋭児郎"],
    description: "爆発を利用した高い機動力と攻撃力を持つヒーロー志望の少年。",
    highlight: "強烈な性格の裏側に勝利への徹底した努力がある。",
    keywords: ["爆豪", "爆破", "雄英", "ヒーロー"]
  },

  {
    id: "shoto-todoroki",
    name: "轟焦凍",
    originalName: "Shoto Todoroki",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "冷静で真面目。",
    features: ["半冷半燃", "氷", "炎"],
    relationships: ["緑谷出久", "エンデヴァー"],
    description: "氷と炎の両方を操る強力な個性を持つ生徒。",
    highlight: "家族との複雑な過去と向き合いながら自分の力を受け入れていく。",
    keywords: ["轟", "氷", "炎", "雄英"]
  },

  {
    id: "ochaco-uraraka",
    name: "麗日お茶子",
    originalName: "Ochaco Uraraka",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "青春"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく前向き。",
    features: ["無重力", "雄英高校", "救助"],
    relationships: ["緑谷出久", "飯田天哉"],
    description: "触れた対象を無重力状態にできる個性を持つ少女。",
    highlight: "明るさの裏に家族を支えたいという強い目標を持つ。",
    keywords: ["お茶子", "無重力", "雄英", "ヒーロー"]
  },

  {
    id: "tenya-iida",
    name: "飯田天哉",
    originalName: "Tenya Iida",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "非常に真面目で規律を重視する。",
    features: ["エンジン", "高速移動", "委員長"],
    relationships: ["緑谷出久", "麗日お茶子"],
    description: "脚のエンジンを利用して高速で移動するヒーロー志望の少年。",
    highlight: "クラスをまとめようとする強い責任感。",
    keywords: ["飯田", "エンジン", "雄英", "ヒーロー"]
  },

  {
    id: "all-might",
    name: "オールマイト",
    originalName: "All Might",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく正義感が強い。",
    features: ["平和の象徴", "ワン・フォー・オール", "怪力"],
    relationships: ["緑谷出久"],
    description: "長年にわたり平和の象徴として人々へ安心を与えてきたヒーロー。",
    highlight: "強さだけでなく人々を安心させる笑顔を大切にする。",
    keywords: ["オールマイト", "平和の象徴", "ヒーロー", "デク"]
  },

  {
    id: "shota-aizawa",
    name: "相澤消太",
    originalName: "Shota Aizawa",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "教師／プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "合理的で生徒思い。",
    features: ["抹消", "捕縛布", "教師"],
    relationships: ["雄英高校1年A組"],
    description: "雄英高校で生徒を指導するプロヒーロー。",
    highlight: "厳しい態度の裏側で生徒の安全と成長を重視する。",
    keywords: ["相澤", "イレイザーヘッド", "雄英", "教師"]
  },

  {
    id: "eijiro-kirishima",
    name: "切島鋭児郎",
    originalName: "Eijiro Kirishima",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "青春"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "熱血で友情に厚い。",
    features: ["硬化", "防御", "雄英高校"],
    relationships: ["爆豪勝己"],
    description: "身体を硬化させる個性を持ち、正面から敵へ立ち向かう少年。",
    highlight: "恐怖を乗り越えて仲間を守ろうとする姿。",
    keywords: ["切島", "硬化", "雄英", "ヒーロー"]
  },

  {
    id: "tsuyu-asui",
    name: "蛙吹梅雨",
    originalName: "Tsuyu Asui",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "青春"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "冷静で率直。",
    features: ["蛙", "跳躍", "水中活動"],
    relationships: ["麗日お茶子"],
    description: "カエルのようなさまざまな能力を使えるヒーロー志望の少女。",
    highlight: "危険な状況でも落ち着いて判断できる。",
    keywords: ["梅雨ちゃん", "蛙", "雄英", "ヒーロー"]
  },

  {
    id: "momo-yaoyorozu",
    name: "八百万百",
    originalName: "Momo Yaoyorozu",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "青春"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "知的で責任感が強い。",
    features: ["創造", "知識", "雄英高校"],
    relationships: ["轟焦凍"],
    description: "身体からさまざまな物質を作り出せる個性を持つ少女。",
    highlight: "豊富な知識を活用した戦術的な戦い方。",
    keywords: ["八百万", "創造", "雄英", "ヒーロー"]
  },

  {
    id: "denki-kaminari",
    name: "上鳴電気",
    originalName: "Denki Kaminari",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "コメディ"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく社交的。",
    features: ["帯電", "電気", "雄英高校"],
    relationships: ["耳郎響香"],
    description: "身体から強力な電気を放つ個性を持つ少年。",
    highlight: "コミカルな面を持ちながら仲間のために勇気を出す。",
    keywords: ["上鳴", "電気", "雄英", "ヒーロー"]
  },

  {
    id: "kyoka-jiro",
    name: "耳郎響香",
    originalName: "Kyoka Jiro",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "青春"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "クールで音楽好き。",
    features: ["イヤホンジャック", "音波", "音楽"],
    relationships: ["上鳴電気"],
    description: "耳たぶのジャックを利用して音を探知したり攻撃したりできる少女。",
    highlight: "ヒーロー活動と音楽への情熱の両方を持つ。",
    keywords: ["耳郎", "音楽", "雄英", "ヒーロー"]
  },

  {
    id: "fumikage-tokoyami",
    name: "常闇踏陰",
    originalName: "Fumikage Tokoyami",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "冷静で独特な美学を持つ。",
    features: ["黒影", "闇", "雄英高校"],
    relationships: ["ホークス"],
    description: "影のような存在を操って戦うヒーロー志望の少年。",
    highlight: "光と闇の環境によって変化する個性を巧みに扱う。",
    keywords: ["常闇", "黒影", "雄英", "ヒーロー"]
  },

  {
    id: "endeavor-mha",
    name: "エンデヴァー",
    originalName: "Endeavor",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "ドラマ"],
    role: "プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "厳格で向上心が強い。",
    features: ["炎", "プロヒーロー", "高い戦闘力"],
    relationships: ["轟焦凍"],
    description: "強力な炎を操り、長年トップクラスで活動するプロヒーロー。",
    highlight: "過去の行動と向き合いながら家族との関係を見直していく。",
    keywords: ["エンデヴァー", "炎", "プロヒーロー", "轟"]
  },

  {
    id: "hawks-mha",
    name: "ホークス",
    originalName: "Hawks",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "プロヒーロー",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "飄々として頭の回転が速い。",
    features: ["翼", "飛行", "羽"],
    relationships: ["エンデヴァー", "常闇踏陰"],
    description: "巨大な翼と羽を自在に操るトップクラスのプロヒーロー。",
    highlight: "軽い態度とは裏腹に難しい任務を冷静に遂行する。",
    keywords: ["ホークス", "翼", "プロヒーロー", "ヒロアカ"]
  },

  {
    id: "tomura-shigaraki",
    name: "死柄木弔",
    originalName: "Tomura Shigaraki",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "ダーク"],
    role: "ヴィラン",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "破壊への強い衝動を持つ。",
    features: ["崩壊", "ヴィラン", "敵連合"],
    relationships: ["オール・フォー・ワン"],
    description: "ヒーロー社会そのものへ敵意を向けるヴィラン。",
    highlight: "物語の進行とともに敵側の中心人物へ成長していく。",
    keywords: ["死柄木", "崩壊", "ヴィラン", "敵連合"]
  },

  {
    id: "dabi-mha",
    name: "荼毘",
    originalName: "Dabi",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "ダーク"],
    role: "ヴィラン",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "冷淡で皮肉屋。",
    features: ["蒼炎", "ヴィラン", "敵連合"],
    relationships: ["死柄木弔", "エンデヴァー"],
    description: "強力な青い炎を操るヴィラン。",
    highlight: "過去とヒーロー社会への強い感情が物語へ大きく関わる。",
    keywords: ["荼毘", "蒼炎", "ヴィラン", "ヒロアカ"]
  },

  {
    id: "himiko-toga",
    name: "トガヒミコ",
    originalName: "Himiko Toga",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "ダーク"],
    role: "ヴィラン",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく独特な価値観を持つ。",
    features: ["変身", "ヴィラン", "潜入"],
    relationships: ["死柄木弔", "麗日お茶子"],
    description: "他人へ変身する能力を利用して活動するヴィラン。",
    highlight: "独自の愛情観と社会とのズレが物語で描かれる。",
    keywords: ["トガ", "変身", "ヴィラン", "ヒロアカ"]
  },

  {
    id: "all-for-one",
    name: "オール・フォー・ワン",
    originalName: "All For One",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "ダーク"],
    role: "ヴィラン",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "冷静で支配的。",
    features: ["個性を奪う力", "ヴィラン", "高い戦闘力"],
    relationships: ["死柄木弔", "オールマイト"],
    description: "長い間ヒーロー社会の裏側で影響力を持ってきた強大なヴィラン。",
    highlight: "複数の能力を利用した圧倒的な戦闘力。",
    keywords: ["オールフォーワン", "ヴィラン", "オールマイト", "ヒロアカ"]
  },

  {
    id: "mirio-togata",
    name: "通形ミリオ",
    originalName: "Mirio Togata",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "青春"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく前向き。",
    features: ["透過", "ビッグ3", "高い技術"],
    relationships: ["天喰環", "波動ねじれ"],
    description: "難しい個性を努力によって高いレベルで使いこなす雄英高校の上級生。",
    highlight: "困難な状況でも笑顔で人を守ろうとする。",
    keywords: ["ミリオ", "透過", "ビッグ3", "雄英"]
  },


  // =====================================================
  // 461〜480 ブルーロック
  // =====================================================

  {
    id: "yoichi-isagi",
    name: "潔世一",
    originalName: "Yoichi Isagi",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "主人公／FW",
    firstAppearance: "ブルーロック",
    personality: "向上心が強く分析的。",
    features: ["空間認識", "サッカー", "ストライカー"],
    relationships: ["蜂楽廻", "凪誠士郎", "糸師凛"],
    description: "世界一のストライカーを目指し、特殊な育成施設で競争する選手。",
    highlight: "試合中に自分と周囲を分析し続け、新たな武器を獲得していく。",
    keywords: ["潔", "ブルーロック", "サッカー", "ストライカー"]
  },

  {
    id: "meguru-bachira",
    name: "蜂楽廻",
    originalName: "Meguru Bachira",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "自由奔放でサッカー好き。",
    features: ["ドリブル", "テクニック", "創造性"],
    relationships: ["潔世一"],
    description: "独創的なドリブルを武器に自由なサッカーを楽しむ選手。",
    highlight: "予測不能なドリブルと豊かな創造力。",
    keywords: ["蜂楽", "ドリブル", "ブルーロック", "サッカー"]
  },

  {
    id: "rin-itoshi",
    name: "糸師凛",
    originalName: "Rin Itoshi",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "冷静で勝利への執着が強い。",
    features: ["シュート", "分析", "高い技術"],
    relationships: ["糸師冴", "潔世一"],
    description: "ブルーロック内でもトップクラスの総合能力を持つ選手。",
    highlight: "技術・判断・得点力を高いレベルで兼ね備える。",
    keywords: ["糸師凛", "ブルーロック", "ストライカー", "サッカー"]
  },

  {
    id: "seishiro-nagi",
    name: "凪誠士郎",
    originalName: "Seishiro Nagi",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "面倒くさがりだが天才肌。",
    features: ["トラップ", "ボールコントロール", "才能"],
    relationships: ["御影玲王", "潔世一"],
    description: "サッカー経験が浅いながら驚異的なボールコントロールを持つ天才。",
    highlight: "難しいボールを簡単そうに収めるトラップ技術。",
    keywords: ["凪", "トラップ", "ブルーロック", "天才"]
  },

  {
    id: "reo-mikage",
    name: "御影玲王",
    originalName: "Reo Mikage",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "器用で目標への執着が強い。",
    features: ["万能型", "コピー", "サッカー"],
    relationships: ["凪誠士郎"],
    description: "高い身体能力と器用さを持ち、多彩なプレーへ対応する選手。",
    highlight: "凪と共に世界一を目指すという夢からサッカーへ挑む。",
    keywords: ["玲王", "凪", "ブルーロック", "サッカー"]
  },

  {
    id: "hyoma-chigiri",
    name: "千切豹馬",
    originalName: "Hyoma Chigiri",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "クールで負けず嫌い。",
    features: ["俊足", "ドリブル", "スピード"],
    relationships: ["潔世一", "國神錬介"],
    description: "圧倒的なスピードを最大の武器とするサッカー選手。",
    highlight: "過去の不安を乗り越えて再び全力で走る姿。",
    keywords: ["千切", "俊足", "ブルーロック", "サッカー"]
  },

  {
    id: "rensuke-kunigami",
    name: "國神錬介",
    originalName: "Rensuke Kunigami",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "正義感が強く真面目。",
    features: ["左足シュート", "フィジカル", "ストライカー"],
    relationships: ["潔世一", "千切豹馬"],
    description: "強力なシュートと身体能力を武器にゴールを狙う選手。",
    highlight: "ヒーローのようなストライカーを目指す強い信念。",
    keywords: ["國神", "シュート", "ブルーロック", "サッカー"]
  },

  {
    id: "ryusei-shido",
    name: "士道龍聖",
    originalName: "Ryusei Shido",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "好戦的で本能的。",
    features: ["得点力", "身体能力", "ストライカー"],
    relationships: ["糸師冴"],
    description: "ゴールへの強烈な本能と高い身体能力を持つストライカー。",
    highlight: "ペナルティエリア周辺で発揮する驚異的な得点感覚。",
    keywords: ["士道", "ストライカー", "ブルーロック", "ゴール"]
  },

  {
    id: "sae-itoshi",
    name: "糸師冴",
    originalName: "Sae Itoshi",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "MF",
    firstAppearance: "ブルーロック",
    personality: "冷静で高い自信を持つ。",
    features: ["パス", "テクニック", "海外経験"],
    relationships: ["糸師凛"],
    description: "世界レベルを目指して海外でプレーする高い技術を持つ選手。",
    highlight: "試合全体を支配するような精密なプレー。",
    keywords: ["糸師冴", "サッカー", "ブルーロック", "MF"]
  },

  {
    id: "shoei-barou",
    name: "馬狼照英",
    originalName: "Shoei Barou",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "FW",
    firstAppearance: "ブルーロック",
    personality: "自信家でストイック。",
    features: ["シュート", "フィジカル", "キング"],
    relationships: ["潔世一"],
    description: "自分を王様と称し、ゴールを奪うことへ強くこだわるストライカー。",
    highlight: "徹底した自己管理とゴールへの執着。",
    keywords: ["馬狼", "キング", "ブルーロック", "ストライカー"]
  },

  {
    id: "jyubei-aryu",
    name: "蟻生十兵衛",
    originalName: "Jyubei Aryu",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "美意識が高く独特。",
    features: ["高身長", "リーチ", "空中戦"],
    relationships: ["糸師凛"],
    description: "長い手足と高身長を活かしたプレーを得意とする選手。",
    highlight: "空中戦で発揮される圧倒的なリーチ。",
    keywords: ["蟻生", "ブルーロック", "高身長", "サッカー"]
  },

  {
    id: "aoshi-tokimitsu",
    name: "時光青志",
    originalName: "Aoshi Tokimitsu",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "気弱で心配性。",
    features: ["スタミナ", "フィジカル", "持久力"],
    relationships: ["糸師凛"],
    description: "気弱な性格とは対照的に非常に高い身体能力を持つ選手。",
    highlight: "驚異的なスタミナと強靭なフィジカル。",
    keywords: ["時光", "スタミナ", "ブルーロック", "サッカー"]
  },

  {
    id: "yo-hiori",
    name: "氷織羊",
    originalName: "Yo Hiori",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "穏やかで冷静。",
    features: ["パス", "視野", "テクニック"],
    relationships: ["潔世一"],
    description: "優れた視野と正確なパス技術を持つ選手。",
    highlight: "試合の状況を読みながら味方の能力を引き出す。",
    keywords: ["氷織", "パス", "ブルーロック", "サッカー"]
  },

  {
    id: "tabito-karasu",
    name: "烏旅人",
    originalName: "Tabito Karasu",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "冷静で分析的。",
    features: ["ボールキープ", "分析", "戦術"],
    relationships: ["氷織羊"],
    description: "相手の弱点を分析し、試合を効率的に進める選手。",
    highlight: "高い戦術理解とボールキープ能力。",
    keywords: ["烏", "分析", "ブルーロック", "サッカー"]
  },

  {
    id: "eita-otoya",
    name: "乙夜影汰",
    originalName: "Eita Otoya",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "軽快でマイペース。",
    features: ["俊敏性", "裏抜け", "スピード"],
    relationships: ["烏旅人"],
    description: "相手の視界から消えるような動きを得意とする選手。",
    highlight: "素早い動きで守備の背後へ入り込む。",
    keywords: ["乙夜", "俊敏", "ブルーロック", "サッカー"]
  },

  {
    id: "kenyu-yukimiya",
    name: "雪宮剣優",
    originalName: "Kenyu Yukimiya",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "自信があり努力家。",
    features: ["ドリブル", "シュート", "一対一"],
    relationships: ["潔世一"],
    description: "一対一で相手を突破する高いドリブル能力を持つ選手。",
    highlight: "自らの目標を叶えるため強い覚悟で競争へ挑む。",
    keywords: ["雪宮", "ドリブル", "ブルーロック", "サッカー"]
  },

  {
    id: "gin-gagamaru",
    name: "我牙丸吟",
    originalName: "Gin Gagamaru",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "野性的でマイペース。",
    features: ["反射神経", "身体能力", "セーブ"],
    relationships: ["潔世一"],
    description: "高い反射神経と独特な身体能力を持つ選手。",
    highlight: "予想外の体勢からでもボールへ反応できる。",
    keywords: ["我牙丸", "反射神経", "ブルーロック", "サッカー"]
  },

  {
    id: "jinpachi-ego",
    name: "絵心甚八",
    originalName: "Jinpachi Ego",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "ドラマ"],
    role: "ブルーロック計画責任者",
    firstAppearance: "ブルーロック",
    personality: "合理的で挑発的。",
    features: ["指導者", "分析", "ストライカー理論"],
    relationships: ["潔世一", "帝襟アンリ"],
    description: "世界一のストライカーを作るため特殊な育成計画を指揮する人物。",
    highlight: "常識にとらわれない独自のサッカー理論。",
    keywords: ["絵心", "ブルーロック", "指導者", "サッカー"]
  },

  {
    id: "anri-teieri",
    name: "帝襟アンリ",
    originalName: "Anri Teieri",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "ドラマ"],
    role: "ブルーロック計画スタッフ",
    firstAppearance: "ブルーロック",
    personality: "情熱的で真面目。",
    features: ["運営", "サッカー", "育成計画"],
    relationships: ["絵心甚八"],
    description: "日本サッカーを強くするためブルーロック計画へ関わる女性。",
    highlight: "日本代表を世界一にしたいという強い目標を持つ。",
    keywords: ["アンリ", "ブルーロック", "サッカー", "運営"]
  },

  {
    id: "ikiyo-raichi",
    name: "雷市陣吾",
    originalName: "Jingo Raichi",
    work: "ブルーロック",
    category: "アニメ",
    genre: ["スポーツ", "サッカー"],
    role: "サッカー選手",
    firstAppearance: "ブルーロック",
    personality: "熱く負けず嫌い。",
    features: ["スタミナ", "守備", "フィジカル"],
    relationships: ["潔世一"],
    description: "高いスタミナと粘り強さを武器に戦う選手。",
    highlight: "相手へ食らいつき続けるしつこい守備。",
    keywords: ["雷市", "スタミナ", "ブルーロック", "サッカー"]
  },


  // =====================================================
  // 481〜500 葬送のフリーレン
  // =====================================================

  {
    id: "frieren",
    name: "フリーレン",
    originalName: "Frieren",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "冒険"],
    role: "主人公／魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "淡々としているが好奇心が強い。",
    features: ["エルフ", "魔法使い", "長寿"],
    relationships: ["フェルン", "ヒンメル", "シュタルク"],
    description: "長い寿命を持つエルフの魔法使いで、人間をより深く知るため新たな旅へ出る。",
    highlight: "長命な種族ならではの時間感覚と人間への理解の変化。",
    keywords: ["フリーレン", "エルフ", "魔法", "冒険"]
  },

  {
    id: "fern-frieren",
    name: "フェルン",
    originalName: "Fern",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "冒険"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "真面目でしっかり者。",
    features: ["魔法使い", "魔力制御", "弟子"],
    relationships: ["フリーレン", "シュタルク"],
    description: "フリーレンの弟子として旅を続ける若い魔法使い。",
    highlight: "高い魔法技術と生活面でフリーレンを支えるしっかり者ぶり。",
    keywords: ["フェルン", "魔法使い", "フリーレン", "弟子"]
  },

  {
    id: "stark-frieren",
    name: "シュタルク",
    originalName: "Stark",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "冒険"],
    role: "戦士",
    firstAppearance: "葬送のフリーレン",
    personality: "臆病な面もあるが優しい。",
    features: ["戦士", "斧", "高い耐久力"],
    relationships: ["フェルン", "フリーレン", "アイゼン"],
    description: "アイゼンの弟子として鍛えられた若い戦士。",
    highlight: "恐怖を感じながらも必要な時には前へ出る勇気。",
    keywords: ["シュタルク", "戦士", "斧", "フリーレン"]
  },

  {
    id: "himmel-frieren",
    name: "ヒンメル",
    originalName: "Himmel",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "勇者",
    firstAppearance: "葬送のフリーレン",
    personality: "優しく前向き。",
    features: ["勇者", "剣", "冒険"],
    relationships: ["フリーレン", "ハイター", "アイゼン"],
    description: "かつてフリーレンたちと共に長い冒険をした勇者。",
    highlight: "旅の中で残した言葉や行動が長い年月を経ても人々へ影響を与える。",
    keywords: ["ヒンメル", "勇者", "フリーレン", "冒険"]
  },

  {
    id: "heiter-frieren",
    name: "ハイター",
    originalName: "Heiter",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "僧侶",
    firstAppearance: "葬送のフリーレン",
    personality: "陽気で人情に厚い。",
    features: ["僧侶", "回復魔法", "勇者一行"],
    relationships: ["ヒンメル", "フェルン"],
    description: "かつて勇者一行として冒険した僧侶。",
    highlight: "フェルンの人生とフリーレンの新たな旅をつなぐ存在。",
    keywords: ["ハイター", "僧侶", "フェルン", "勇者一行"]
  },

  {
    id: "eisen-frieren",
    name: "アイゼン",
    originalName: "Eisen",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "冒険"],
    role: "戦士",
    firstAppearance: "葬送のフリーレン",
    personality: "寡黙で落ち着いている。",
    features: ["ドワーフ", "戦士", "高い耐久力"],
    relationships: ["ヒンメル", "シュタルク"],
    description: "勇者一行の戦士として冒険したドワーフ。",
    highlight: "シュタルクへ戦士としての技術と心構えを伝える。",
    keywords: ["アイゼン", "ドワーフ", "戦士", "シュタルク"]
  },

  {
    id: "flamme-frieren",
    name: "フランメ",
    originalName: "Flamme",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "大魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "聡明で先を見通す。",
    features: ["魔法使い", "人間", "師匠"],
    relationships: ["フリーレン", "ゼーリエ"],
    description: "歴史に大きな影響を残した人間の大魔法使い。",
    highlight: "フリーレンへ魔法だけでなく長い未来につながる考えを伝える。",
    keywords: ["フランメ", "魔法使い", "師匠", "フリーレン"]
  },

  {
    id: "serie-frieren",
    name: "ゼーリエ",
    originalName: "Serie",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "大魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "自信に満ち合理的。",
    features: ["エルフ", "膨大な魔法知識", "大魔法使い"],
    relationships: ["フランメ", "一級魔法使い"],
    description: "非常に長い年月を生き、膨大な魔法を知るエルフの大魔法使い。",
    highlight: "魔法に対する独自の価値観と圧倒的な知識。",
    keywords: ["ゼーリエ", "エルフ", "魔法", "フリーレン"]
  },

  {
    id: "aura-frieren",
    name: "断頭台のアウラ",
    originalName: "Aura",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "魔族",
    firstAppearance: "葬送のフリーレン",
    personality: "自信家で冷酷。",
    features: ["魔族", "魔法", "天秤"],
    relationships: ["フリーレン"],
    description: "長い年月を生き、高い魔力を持つ強力な魔族。",
    highlight: "魔力量を利用する特殊な魔法で相手を支配しようとする。",
    keywords: ["アウラ", "魔族", "魔法", "フリーレン"]
  },

  {
    id: "lugner-frieren",
    name: "リュグナー",
    originalName: "Lugner",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "魔族",
    firstAppearance: "葬送のフリーレン",
    personality: "冷静で狡猾。",
    features: ["魔族", "血の魔法", "交渉"],
    relationships: ["アウラ", "フェルン"],
    description: "人間との交渉役として行動する魔族。",
    highlight: "言葉を利用しながら目的を達成しようとする魔族らしい思考。",
    keywords: ["リュグナー", "魔族", "アウラ", "フリーレン"]
  },

  {
    id: "linie-frieren",
    name: "リーニエ",
    originalName: "Linie",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ダークファンタジー", "アクション"],
    role: "魔族",
    firstAppearance: "葬送のフリーレン",
    personality: "冷静で淡々としている。",
    features: ["魔族", "模倣", "戦闘"],
    relationships: ["リュグナー", "シュタルク"],
    description: "相手の動きを記憶し再現する能力を利用して戦う魔族。",
    highlight: "過去に観察した戦士の技術を再現する独特の戦闘方法。",
    keywords: ["リーニエ", "魔族", "模倣", "フリーレン"]
  },

  {
    id: "stoltz-frieren",
    name: "シュトルツ",
    originalName: "Stoltz",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "戦士",
    firstAppearance: "葬送のフリーレン",
    personality: "真面目で弟思い。",
    features: ["戦士", "剣術", "家族"],
    relationships: ["シュタルク"],
    description: "シュタルクの兄として高い戦士としての実力を持つ人物。",
    highlight: "弟の才能を認め、その成長を静かに見守っていた。",
    keywords: ["シュトルツ", "シュタルク", "戦士", "フリーレン"]
  },

  {
    id: "denken-frieren",
    name: "デンケン",
    originalName: "Denken",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "ドラマ"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "現実的で経験豊富。",
    features: ["魔法使い", "宮廷", "経験"],
    relationships: ["リヒター", "ラオフェン"],
    description: "長年の経験と高い判断力を持つ熟練の魔法使い。",
    highlight: "立場や年齢に頼らず必要な時には泥臭く戦う。",
    keywords: ["デンケン", "魔法使い", "一級魔法使い試験", "フリーレン"]
  },

  {
    id: "ubel-frieren",
    name: "ユーベル",
    originalName: "Ubel",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "自由で危うい雰囲気を持つ。",
    features: ["魔法使い", "切断魔法", "感覚"],
    relationships: ["ラント"],
    description: "独特な感覚によって魔法を理解し使いこなす魔法使い。",
    highlight: "一般的な理屈とは異なる発想で魔法を成立させる。",
    keywords: ["ユーベル", "魔法使い", "切断", "フリーレン"]
  },

  {
    id: "land-frieren",
    name: "ラント",
    originalName: "Land",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "慎重で冷静。",
    features: ["魔法使い", "分身", "分析"],
    relationships: ["ユーベル"],
    description: "慎重な戦術と特殊な魔法を利用する若い魔法使い。",
    highlight: "危険を避けながら目的を達成する合理的な戦い方。",
    keywords: ["ラント", "魔法使い", "分身", "フリーレン"]
  },

  {
    id: "wirbel-frieren",
    name: "ヴィアベル",
    originalName: "Wirbel",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー", "アクション"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "現実的で戦闘経験が豊富。",
    features: ["魔法使い", "拘束魔法", "戦闘"],
    relationships: ["エーレ", "シャルフ"],
    description: "実戦経験を積んできた実力派の魔法使い。",
    highlight: "戦場で培った冷静な判断力と合理的な戦術。",
    keywords: ["ヴィアベル", "魔法使い", "試験", "フリーレン"]
  },

  {
    id: "lawine-frieren",
    name: "ラヴィーネ",
    originalName: "Lawine",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "気が強く仲間思い。",
    features: ["氷魔法", "魔法使い", "チーム戦"],
    relationships: ["カンネ"],
    description: "氷を利用した魔法を得意とする若い魔法使い。",
    highlight: "カンネと互いの能力を補いながら戦う。",
    keywords: ["ラヴィーネ", "氷魔法", "カンネ", "フリーレン"]
  },

  {
    id: "kanne-frieren",
    name: "カンネ",
    originalName: "Kanne",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "明るく素直。",
    features: ["水魔法", "魔法使い", "チーム戦"],
    relationships: ["ラヴィーネ"],
    description: "水を操る魔法を得意とする若い魔法使い。",
    highlight: "周囲に存在する水を利用して戦況を変える。",
    keywords: ["カンネ", "水魔法", "ラヴィーネ", "フリーレン"]
  },

  {
    id: "sense-frieren",
    name: "ゼンゼ",
    originalName: "Sense",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "一級魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "静かで落ち着いている。",
    features: ["一級魔法使い", "髪", "試験官"],
    relationships: ["ゼーリエ"],
    description: "一級魔法使い試験で試験官を務める実力者。",
    highlight: "穏やかな雰囲気とは対照的な高い戦闘能力。",
    keywords: ["ゼンゼ", "一級魔法使い", "試験官", "フリーレン"]
  },

  {
    id: "lernen-frieren",
    name: "レルネン",
    originalName: "Lernen",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: ["ファンタジー"],
    role: "一級魔法使い",
    firstAppearance: "葬送のフリーレン",
    personality: "冷静で魔法への探究心が強い。",
    features: ["一級魔法使い", "高い魔力", "魔法研究"],
    relationships: ["ゼーリエ"],
    description: "長年にわたり魔法を磨いてきた経験豊富な一級魔法使い。",
    highlight: "フリーレンの実力を見抜くほどの高い魔法知識を持つ。",
    keywords: ["レルネン", "一級魔法使い", "ゼーリエ", "フリーレン"]
  }

);
// =====================================================
// シネキャラリンク
// 500人・重複整理・多言語検索対応
// このコードは characters.js の一番下に追加してください
// =====================================================


// -----------------------------------------------------
// ① 重複キャラクターを削除
// -----------------------------------------------------

const characterNameFix = {
  "レオリオ＝パラディナイト": "レオリオ",
  "ヒソカ＝モロウ": "ヒソカ"
};

const seenCharacterNames = new Set();

for (let i = 0; i < characters.length; ) {

  const character = characters[i];

  const checkName =
    characterNameFix[character.name] || character.name;

  if (seenCharacterNames.has(checkName)) {

    characters.splice(i, 1);

  } else {

    seenCharacterNames.add(checkName);
    i++;

  }
}


// -----------------------------------------------------
// ② 新しい18人を追加
// これで合計500人
// -----------------------------------------------------

characters.push(

  {
    id: "neville-longbottom",
    name: "ネビル・ロングボトム",
    originalName: "Neville Longbottom",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー", "アドベンチャー"],
    role: "ホグワーツの生徒",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality: "内気な面があるが、困難の中で勇気を育てていく。",
    features: ["グリフィンドール", "魔法使い", "勇気"],
    relationships: [
      "ハリー・ポッター",
      "ルーナ・ラブグッド"
    ],
    description:
      "ホグワーツでハリーたちと学ぶ生徒。失敗や不安を経験しながらも、自分の信念を持って行動できる人物へ成長していく。",
    highlight:
      "物語を通して大きく成長し、勇気とは何かを印象づける存在。",
    keywords: [
      "ネビル",
      "ねびる",
      "Neville",
      "Longbottom",
      "Harry Potter"
    ]
  },

  {
    id: "minerva-mcgonagall",
    name: "ミネルバ・マクゴナガル",
    originalName: "Minerva McGonagall",
    work: "ハリー・ポッター",
    category: "映画",
    genre: ["ファンタジー"],
    role: "ホグワーツ教師",
    firstAppearance: "ハリー・ポッターと賢者の石",
    personality:
      "厳格で公正。生徒への深い思いやりも持つ。",
    features: [
      "変身術",
      "教師",
      "グリフィンドール"
    ],
    relationships: [
      "アルバス・ダンブルドア",
      "ハリー・ポッター"
    ],
    description:
      "ホグワーツで変身術を教える教授。厳しさと公平さを兼ね備え、生徒たちを守るためには毅然と行動する。",
    highlight:
      "規律を重んじながらも、生徒を大切にする強さと温かさが魅力。",
    keywords: [
      "マクゴナガル",
      "みねるば",
      "Minerva",
      "McGonagall",
      "Harry Potter"
    ]
  },

  {
    id: "anakin-skywalker",
    name: "アナキン・スカイウォーカー",
    originalName: "Anakin Skywalker",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "ジェダイ",
    firstAppearance:
      "スター・ウォーズ エピソード1／ファントム・メナス",
    personality:
      "情熱的で才能に恵まれる一方、感情に強く動かされる。",
    features: [
      "ジェダイ",
      "フォース",
      "ライトセーバー"
    ],
    relationships: [
      "オビ＝ワン・ケノービ",
      "パドメ・アミダラ"
    ],
    description:
      "非常に高い素質を持つジェダイ。大切な人を守りたいという思いと、自分の中の恐れや葛藤の間で揺れ動く。",
    highlight:
      "シリーズ全体の大きな転換点に関わる、複雑な成長と選択が描かれる人物。",
    keywords: [
      "アナキン",
      "あなきん",
      "Anakin",
      "Skywalker",
      "Star Wars"
    ]
  },

  {
    id: "rey-star-wars",
    name: "レイ",
    originalName: "Rey",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "主人公",
    firstAppearance:
      "スター・ウォーズ／フォースの覚醒",
    personality:
      "自立心が強く、困難にも粘り強く立ち向かう。",
    features: [
      "フォース",
      "ライトセーバー",
      "操縦"
    ],
    relationships: [
      "フィン",
      "ルーク・スカイウォーカー",
      "カイロ・レン"
    ],
    description:
      "辺境で暮らしていた若者。大きな争いへ巻き込まれ、自分の力と過去に向き合っていく。",
    highlight:
      "自分が何者かを探しながら、自分自身の選択で進む道を決めていく。",
    keywords: [
      "レイ",
      "れい",
      "Rey",
      "Star Wars",
      "フォース"
    ]
  },

  {
    id: "kylo-ren",
    name: "カイロ・レン",
    originalName: "Kylo Ren",
    work: "スター・ウォーズ",
    category: "映画",
    genre: ["SF", "アドベンチャー"],
    role: "敵対勢力の戦士",
    firstAppearance:
      "スター・ウォーズ／フォースの覚醒",
    personality:
      "強い力を持つ一方、内面には大きな葛藤を抱える。",
    features: [
      "フォース",
      "ライトセーバー",
      "ファースト・オーダー"
    ],
    relationships: [
      "レイ",
      "レイア・オーガナ"
    ],
    description:
      "強力なフォースを操る戦士。自らが選んだ道と家族とのつながりの間で揺れ続ける。",
    highlight:
      "善悪の単純な二分では捉えきれない葛藤が物語の重要な軸になる。",
    keywords: [
      "カイロレン",
      "かいろれん",
      "Kylo Ren",
      "Star Wars"
    ]
  },

  {
    id: "shanks",
    name: "シャンクス",
    originalName: "Shanks",

image: "images/shanks-one-piece.webp",

    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海賊",
    firstAppearance: "ONE PIECE",
    personality:
      "おおらかで仲間思い。重要な場面では強い覚悟を見せる。",
    features: [
      "海賊",
      "赤髪",
      "四皇"
    ],
    relationships: [
      "モンキー・D・ルフィ"
    ],
    description:
      "赤髪海賊団を率いる海賊。幼いルフィに大きな影響を与え、その後の冒険の原点の一つとなる。",
    highlight:
      "普段の親しみやすさと、重要な局面で見せる圧倒的な存在感の差が魅力。",
    keywords: [
      "シャンクス",
      "しゃんくす",
      "Shanks",
      "One Piece",
      "ワンピース"
    ]
  },

  {
    id: "portgas-d-ace",
    name: "ポートガス・D・エース",
    originalName: "Portgas D. Ace",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海賊",
    firstAppearance: "ONE PIECE",
    personality:
      "自由奔放で仲間や家族への思いが強い。",
    features: [
      "海賊",
      "炎",
      "白ひげ海賊団"
    ],
    relationships: [
      "モンキー・D・ルフィ"
    ],
    description:
      "ルフィと深い兄弟の絆を持つ海賊。炎を使った戦いを得意とし、自分が大切にする仲間のために行動する。",
    highlight:
      "ルフィとの絆と、自分の生き方に対する強い思いが印象に残る。",
    keywords: [
      "エース",
      "えーす",
      "Ace",
      "Portgas D Ace",
      "One Piece",
      "ワンピース"
    ]
  },

  {
    id: "trafalgar-law",
    name: "トラファルガー・ロー",
    originalName: "Trafalgar Law",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海賊",
    firstAppearance: "ONE PIECE",
    personality:
      "冷静で計画的。時に大胆な決断もする。",
    features: [
      "海賊",
      "医師",
      "オペオペの実"
    ],
    relationships: [
      "モンキー・D・ルフィ"
    ],
    description:
      "ハートの海賊団を率いる船長であり医師。独特の能力と判断力を使い、複雑な局面でも戦略的に行動する。",
    highlight:
      "冷静な知性と壮絶な過去を併せ持ち、ルフィたちとの共闘でも存在感を示す。",
    keywords: [
      "ロー",
      "ろー",
      "Law",
      "Trafalgar Law",
      "One Piece",
      "ワンピース"
    ]
  },

  {
    id: "obito-uchiha",
    name: "うちはオビト",
    originalName: "Obito Uchiha",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍",
    firstAppearance: "NARUTO -ナルト-",
    personality:
      "強い理想を持っていたが、経験によって価値観が大きく変化する。",
    features: [
      "うちは一族",
      "写輪眼",
      "忍"
    ],
    relationships: [
      "はたけカカシ"
    ],
    description:
      "うちは一族の忍。過去の出来事をきっかけに大きく変化し、忍の世界全体に影響する行動へ進んでいく。",
    highlight:
      "過去の理想と現在の選択の対比が、物語に大きなドラマを生む。",
    keywords: [
      "オビト",
      "おびと",
      "Obito",
      "Uchiha",
      "Naruto",
      "ナルト"
    ]
  },

  {
    id: "rock-lee",
    name: "ロック・リー",
    originalName: "Rock Lee",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍",
    firstAppearance: "NARUTO -ナルト-",
    personality:
      "努力家で前向き。自分の目標へまっすぐ進む。",
    features: [
      "体術",
      "努力",
      "忍"
    ],
    relationships: [
      "マイト・ガイ",
      "日向ネジ"
    ],
    description:
      "忍術や幻術とは異なる道で力を磨き、体術を中心に戦う忍。努力を積み重ねる姿勢を貫く。",
    highlight:
      "才能だけに頼らず、努力によって自分の可能性を広げていく姿が魅力。",
    keywords: [
      "ロックリー",
      "ろっくりー",
      "Rock Lee",
      "Naruto",
      "ナルト"
    ]
  },

  {
    id: "kanao-tsuyuri",
    name: "栗花落カナヲ",
    originalName: "Kanao Tsuyuri",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: [
      "アクション",
      "ダークファンタジー"
    ],
    role: "鬼殺隊士",
    firstAppearance: "鬼滅の刃",
    personality:
      "物静かで感情を表に出すことが少ない。",
    features: [
      "鬼殺隊",
      "剣士",
      "花の呼吸"
    ],
    relationships: [
      "胡蝶しのぶ",
      "竈門炭治郎"
    ],
    description:
      "鬼殺隊に所属する剣士。高い身体能力と剣技を持ち、人との関わりを通して自分の意思で選ぶことを学んでいく。",
    highlight:
      "静かな人物が少しずつ自分の感情と意思を表していく変化が印象的。",
    keywords: [
      "カナヲ",
      "かなを",
      "Kanao",
      "Tsuyuri",
      "Kimetsu no Yaiba",
      "Demon Slayer"
    ]
  },

  {
    id: "sanemi-shinazugawa",
    name: "不死川実弥",
    originalName: "Sanemi Shinazugawa",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: [
      "アクション",
      "ダークファンタジー"
    ],
    role: "風柱",
    firstAppearance: "鬼滅の刃",
    personality:
      "荒々しく見えるが、強い責任感を持つ。",
    features: [
      "鬼殺隊",
      "風柱",
      "剣士"
    ],
    relationships: [
      "不死川玄弥"
    ],
    description:
      "鬼殺隊の柱の一人である風柱。激しい気性と高い戦闘能力を持ち、鬼との戦いに強い覚悟で臨む。",
    highlight:
      "厳しい態度の奥にある家族への思いや責任感が人物像に深みを与える。",
    keywords: [
      "実弥",
      "さねみ",
      "Sanemi",
      "Shinazugawa",
      "Kimetsu no Yaiba",
      "Demon Slayer"
    ]
  },

  {
    id: "obanai-iguro",
    name: "伊黒小芭内",
    originalName: "Obanai Iguro",
    work: "鬼滅の刃",
    category: "アニメ",
    genre: [
      "アクション",
      "ダークファンタジー"
    ],
    role: "蛇柱",
    firstAppearance: "鬼滅の刃",
    personality:
      "厳格で慎重。仲間への強い思いを秘める。",
    features: [
      "鬼殺隊",
      "蛇柱",
      "剣士"
    ],
    relationships: [
      "甘露寺蜜璃"
    ],
    description:
      "鬼殺隊の柱の一人である蛇柱。独特の剣技を使い、任務に対して非常に厳しい姿勢を取る。",
    highlight:
      "厳しさの内側にある繊細な感情や、大切な人物への思いが印象に残る。",
    keywords: [
      "小芭内",
      "おばない",
      "Obanai",
      "Iguro",
      "Kimetsu no Yaiba",
      "Demon Slayer"
    ]
  },

  {
    id: "shoko-ieiri",
    name: "家入硝子",
    originalName: "Shoko Ieiri",
    work: "呪術廻戦",
    category: "アニメ",
    genre: [
      "アクション",
      "ダークファンタジー"
    ],
    role: "医師／呪術師",
    firstAppearance: "呪術廻戦",
    personality:
      "落ち着いていて淡々としている。",
    features: [
      "反転術式",
      "医師",
      "呪術高専"
    ],
    relationships: [
      "五条悟",
      "夏油傑"
    ],
    description:
      "呪術高専で負傷者の治療などを担う人物。希少な技術を使い、前線で戦う仲間たちを支える。",
    highlight:
      "戦闘以外の面から呪術師たちを支える、組織に欠かせない存在。",
    keywords: [
      "硝子",
      "しょうこ",
      "Shoko",
      "Ieiri",
      "Jujutsu Kaisen",
      "呪術"
    ]
  },

  {
    id: "atsuya-kusakabe",
    name: "日下部篤也",
    originalName: "Atsuya Kusakabe",
    work: "呪術廻戦",
    category: "アニメ",
    genre: [
      "アクション",
      "ダークファンタジー"
    ],
    role: "呪術師",
    firstAppearance: "呪術廻戦",
    personality:
      "現実的で慎重。危険を冷静に判断する。",
    features: [
      "呪術師",
      "剣術",
      "教師"
    ],
    relationships: [
      "東京都立呪術高等専門学校"
    ],
    description:
      "呪術高専に関わる呪術師。無謀な行動を避けようとする現実的な姿勢を持ちながら、必要な場面では戦いに参加する。",
    highlight:
      "派手さよりも経験と判断力で状況に対応するところが特徴。",
    keywords: [
      "日下部",
      "くさかべ",
      "Atsuya Kusakabe",
      "Jujutsu Kaisen",
      "呪術"
    ]
  },

  {
    id: "pieck-finger",
    name: "ピーク・フィンガー",
    originalName: "Pieck Finger",
    work: "進撃の巨人",
    category: "アニメ",
    genre: [
      "ダークファンタジー",
      "アクション"
    ],
    role: "戦士",
    firstAppearance: "進撃の巨人",
    personality:
      "冷静で観察力が高い。",
    features: [
      "戦士",
      "車力の巨人",
      "判断力"
    ],
    relationships: [
      "ポルコ・ガリアード",
      "ライナー・ブラウン"
    ],
    description:
      "状況を素早く読み取る力に優れた戦士。持久力を生かした能力と冷静な判断で味方を支える。",
    highlight:
      "激しい戦場でも落ち着いて状況を分析する知性が大きな強み。",
    keywords: [
      "ピーク",
      "ぴーく",
      "Pieck",
      "Finger",
      "Attack on Titan",
      "Shingeki no Kyojin"
    ]
  },

  {
    id: "porco-galliard",
    name: "ポルコ・ガリアード",
    originalName: "Porco Galliard",
    work: "進撃の巨人",
    category: "アニメ",
    genre: [
      "ダークファンタジー",
      "アクション"
    ],
    role: "戦士",
    firstAppearance: "進撃の巨人",
    personality:
      "誇り高く負けず嫌い。",
    features: [
      "戦士",
      "顎の巨人",
      "高い機動力"
    ],
    relationships: [
      "ピーク・フィンガー",
      "ライナー・ブラウン"
    ],
    description:
      "高い機動力を生かして戦う戦士。仲間への複雑な感情や、自分の役割に対する強い誇りを持つ。",
    highlight:
      "攻撃的な態度の裏にある仲間意識や決断が人物像を形作る。",
    keywords: [
      "ポルコ",
      "ぽるこ",
      "Porco",
      "Galliard",
      "Attack on Titan",
      "Shingeki no Kyojin"
    ]
  },

  {
    id: "sein-frieren",
    name: "ザイン",
    originalName: "Sein",
    work: "葬送のフリーレン",
    category: "アニメ",
    genre: [
      "ファンタジー",
      "アドベンチャー"
    ],
    role: "僧侶",
    firstAppearance: "葬送のフリーレン",
    personality:
      "現実的で大人びているが、仲間への面倒見がよい。",
    features: [
      "僧侶",
      "治癒魔法",
      "旅"
    ],
    relationships: [
      "フリーレン",
      "フェルン",
      "シュタルク"
    ],
    description:
      "高い治癒能力を持つ僧侶。ある目的を胸に旅へ加わり、経験豊富な大人として一行を支える。",
    highlight:
      "落ち着いた視点と仲間への気遣いで、旅の雰囲気に新しいバランスを加える。",
    keywords: [
      "ザイン",
      "ざいん",
      "Sein",
      "Frieren",
      "Sousou no Frieren"
    ]
  }

);


// -----------------------------------------------------
// ③ 作品名の日本語・英語・ローマ字検索
// -----------------------------------------------------

const workSearchAliases = {

  "ハリー・ポッター": [
    "Harry Potter",
    "harrypotter"
  ],

  "スター・ウォーズ": [
    "Star Wars",
    "starwars"
  ],

  "マーベル・シネマティック・ユニバース": [
    "Marvel Cinematic Universe",
    "MCU",
    "Marvel"
  ],

  "バットマン": [
    "Batman"
  ],

  "スーパーマン": [
    "Superman"
  ],

  "ワンダーウーマン": [
    "Wonder Woman"
  ],

  "アクアマン": [
    "Aquaman"
  ],

  "スーサイド・スクワッド": [
    "Suicide Squad"
  ],

  "ロード・オブ・ザ・リング": [
    "The Lord of the Rings",
    "Lord of the Rings",
    "LOTR"
  ],

  "千と千尋の神隠し": [
    "Spirited Away",
    "Sen to Chihiro no Kamikakushi"
  ],

  "となりのトトロ": [
    "My Neighbor Totoro",
    "Tonari no Totoro"
  ],

  "魔女の宅急便": [
    "Kiki's Delivery Service",
    "Majo no Takkyubin"
  ],

  "ハウルの動く城": [
    "Howl's Moving Castle",
    "Howl no Ugoku Shiro"
  ],

  "もののけ姫": [
    "Princess Mononoke",
    "Mononoke Hime"
  ],

  "鬼滅の刃": [
    "Demon Slayer",
    "Kimetsu no Yaiba",
    "Kimetsu",
    "きめつのやいば",
    "きめつ"
  ],

  "僕のヒーローアカデミア": [
    "My Hero Academia",
    "Boku no Hero Academia",
    "MHA",
    "Heroaca",
    "ヒロアカ",
    "ひろあか"
  ],

  "ONE PIECE": [
    "One Piece",
    "onepiece",
    "ワンピース",
    "わんぴーす"
  ],

  "NARUTO -ナルト-": [
    "Naruto",
    "ナルト",
    "なると"
  ],

  "ドラゴンボール": [
    "Dragon Ball",
    "dragonball",
    "どらごんぼーる"
  ],

  "進撃の巨人": [
    "Attack on Titan",
    "Shingeki no Kyojin",
    "AOT",
    "しんげきのきょじん"
  ],

  "呪術廻戦": [
    "Jujutsu Kaisen",
    "Jujutsu",
    "じゅじゅつかいせん"
  ],

  "名探偵コナン": [
    "Detective Conan",
    "Case Closed",
    "Meitantei Conan",
    "めいたんていこなん"
  ],

  "BLEACH": [
    "Bleach",
    "ブリーチ",
    "ぶりーち"
  ],

  "HUNTER×HUNTER": [
    "Hunter x Hunter",
    "Hunter Hunter",
    "ハンターハンター",
    "はんたーはんたー"
  ],

  "鋼の錬金術師": [
    "Fullmetal Alchemist",
    "Hagane no Renkinjutsushi",
    "FMA",
    "はがねのれんきんじゅつし"
  ],

  "コードギアス 反逆のルルーシュ": [
    "Code Geass",
    "Code Geass Lelouch of the Rebellion"
  ],

  "ジョジョの奇妙な冒険": [
    "JoJo's Bizarre Adventure",
    "Jojo",
    "ジョジョ",
    "じょじょ"
  ],

  "ポケットモンスター": [
    "Pokemon",
    "Pokémon",
    "Pocket Monsters",
    "ポケモン",
    "ぽけもん"
  ],

  "新世紀エヴァンゲリオン": [
    "Neon Genesis Evangelion",
    "Evangelion",
    "EVA",
    "エヴァ",
    "えヴぁ"
  ],

  "機動戦士ガンダム": [
    "Mobile Suit Gundam",
    "Gundam",
    "ガンダム",
    "がんだむ"
  ],

  "美少女戦士セーラームーン": [
    "Sailor Moon",
    "Bishoujo Senshi Sailor Moon",
    "セーラームーン",
    "せーらーむーん"
  ],

  "DEATH NOTE": [
    "Death Note",
    "デスノート",
    "ですのーと"
  ],

  "銀魂": [
    "Gintama",
    "ぎんたま"
  ],

  "FAIRY TAIL": [
    "Fairy Tail",
    "フェアリーテイル",
    "ふぇありーている"
  ],

  "ブラッククローバー": [
    "Black Clover",
    "Burakku Kuroba",
    "ぶらっくくろーばー"
  ],

  "ハイキュー!!": [
    "Haikyu!!",
    "Haikyuu",
    "ハイキュー",
    "はいきゅー"
  ],

  "SPY×FAMILY": [
    "Spy x Family",
    "Spy Family",
    "スパイファミリー",
    "すぱいふぁみりー"
  ],

  "ブルーロック": [
    "Blue Lock",
    "Bluelock",
    "ぶるーろっく"
  ],

  "葬送のフリーレン": [
    "Frieren",
    "Frieren: Beyond Journey's End",
    "Sousou no Frieren",
    "そうそうのふりーれん"
  ]

};


// -----------------------------------------------------
// ④ カタカナ → ひらがな
// -----------------------------------------------------

function katakanaToHiragana(value) {

  return String(value || "").replace(
    /[ァ-ヶ]/g,
    function(character) {

      return String.fromCharCode(
        character.charCodeAt(0) - 0x60
      );

    }
  );

}


// -----------------------------------------------------
// ⑤ 500人全員に検索ワードを自動追加
// -----------------------------------------------------

characters.forEach(function(character) {

  const workAliases =
    workSearchAliases[character.work] || [];

  const originalName =
    String(character.originalName || "");

  const originalParts = originalName
    .replace(/[\/(),.]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  let reversedName = "";

  if (originalParts.length >= 2) {

    reversedName =
      [...originalParts]
        .reverse()
        .join(" ");

  }

  const automaticKeywords = [

    character.id,

    String(character.id || "")
      .replace(/-/g, " "),

    String(character.id || "")
      .replace(/-/g, ""),

    character.name,

    katakanaToHiragana(
      character.name
    ),

    character.originalName,

    originalName.replace(
      /\s+/g,
      ""
    ),

    reversedName,

    character.work,

    katakanaToHiragana(
      character.work
    ),

    ...workAliases

  ].filter(Boolean);


  character.keywords = [

    ...new Set([

      ...(character.keywords || []),

      ...automaticKeywords

    ])

  ];

});


// -----------------------------------------------------
// ⑥ 確認用
// -----------------------------------------------------

console.log(
  "シネキャラリンク キャラクター数:",
  characters.length
);// =====================================================
// シネキャラリンク 追加100人
// ① 1〜25
// =====================================================

characters.push(

  {
    id: "shanks-one-piece",
    name: "シャンクス",
    originalName: "Shanks",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海賊",
    firstAppearance: "ONE PIECE",
    personality: "おおらかで仲間を大切にする。",
    features: ["赤髪", "海賊", "四皇"],
    relationships: ["モンキー・D・ルフィ", "ベン・ベックマン"],
    description: "赤髪海賊団を率いる大海賊。幼いルフィの人生に大きな影響を与えた人物。",
    highlight: "普段の親しみやすさと重要な場面で見せる圧倒的な存在感。",
    keywords: ["シャンクス", "赤髪", "四皇", "ONE PIECE"]
  },

  {
    id: "ben-beckman-one-piece",
    name: "ベン・ベックマン",
    originalName: "Benn Beckman",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海賊",
    firstAppearance: "ONE PIECE",
    personality: "冷静で判断力に優れる。",
    features: ["赤髪海賊団", "副船長", "銃"],
    relationships: ["シャンクス"],
    description: "赤髪海賊団でシャンクスを支える副船長。",
    highlight: "落ち着いた判断力で船長と仲間を支える存在。",
    keywords: ["ベンベックマン", "赤髪海賊団", "副船長", "ONE PIECE"]
  },

  {
    id: "yasopp-one-piece",
    name: "ヤソップ",
    originalName: "Yasopp",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "狙撃手",
    firstAppearance: "ONE PIECE",
    personality: "陽気で自由を愛する。",
    features: ["赤髪海賊団", "狙撃手", "射撃"],
    relationships: ["シャンクス", "ウソップ"],
    description: "赤髪海賊団に所属する優れた狙撃手。",
    highlight: "高い射撃技術を持つ海賊として知られる。",
    keywords: ["ヤソップ", "狙撃手", "赤髪海賊団", "ONE PIECE"]
  },

  {
    id: "lucky-roux-one-piece",
    name: "ラッキー・ルウ",
    originalName: "Lucky Roux",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海賊",
    firstAppearance: "ONE PIECE",
    personality: "陽気で仲間思い。",
    features: ["赤髪海賊団", "海賊", "幹部"],
    relationships: ["シャンクス", "ベン・ベックマン"],
    description: "シャンクス率いる赤髪海賊団の主要メンバー。",
    highlight: "陽気な雰囲気と戦闘時の頼もしさを併せ持つ。",
    keywords: ["ラッキールウ", "赤髪海賊団", "海賊", "ONE PIECE"]
  },

  {
    id: "imu-one-piece",
    name: "イム",
    originalName: "Imu",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "ファンタジー"],
    role: "謎の人物",
    firstAppearance: "ONE PIECE",
    personality: "多くが謎に包まれている。",
    features: ["世界政府", "謎", "権力"],
    relationships: ["五老星"],
    description: "世界政府の核心に関わる謎の人物。",
    highlight: "物語世界の秘密に深く関係する存在として注目される。",
    keywords: ["イム", "世界政府", "五老星", "ONE PIECE"]
  },

  {
    id: "garp-one-piece",
    name: "モンキー・D・ガープ",
    originalName: "Monkey D. Garp",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海兵",
    firstAppearance: "ONE PIECE",
    personality: "豪快で自由奔放。",
    features: ["海軍", "中将", "英雄"],
    relationships: ["モンキー・D・ルフィ", "モンキー・D・ドラゴン"],
    description: "海軍の英雄として知られるベテラン海兵。",
    highlight: "豪快な性格と長年培った高い戦闘能力が特徴。",
    keywords: ["ガープ", "海軍", "英雄", "ONE PIECE"]
  },

  {
    id: "sengoku-one-piece",
    name: "センゴク",
    originalName: "Sengoku",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海兵",
    firstAppearance: "ONE PIECE",
    personality: "冷静で責任感が強い。",
    features: ["海軍", "元帥", "大仏"],
    relationships: ["モンキー・D・ガープ"],
    description: "長年にわたり海軍の中枢を担ってきた人物。",
    highlight: "豊富な経験と状況を見極める判断力を持つ。",
    keywords: ["センゴク", "海軍", "元帥", "ONE PIECE"]
  },

  {
    id: "tsuru-one-piece",
    name: "つる",
    originalName: "Tsuru",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海兵",
    firstAppearance: "ONE PIECE",
    personality: "冷静で落ち着いている。",
    features: ["海軍", "中将", "ベテラン"],
    relationships: ["センゴク", "モンキー・D・ガープ"],
    description: "長い経験を持つ海軍本部のベテラン中将。",
    highlight: "豊富な経験を生かして海軍を支える人物。",
    keywords: ["つる", "海軍", "中将", "ONE PIECE"]
  },

  {
    id: "koby-one-piece",
    name: "コビー",
    originalName: "Koby",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海兵",
    firstAppearance: "ONE PIECE",
    personality: "真面目で強い正義感を持つ。",
    features: ["海軍", "成長", "正義"],
    relationships: ["モンキー・D・ルフィ", "モンキー・D・ガープ"],
    description: "海兵になる夢を追い、経験を重ねながら成長していく青年。",
    highlight: "弱気だった少年が自らの信念を持つ海兵へ成長していく。",
    keywords: ["コビー", "海軍", "ガープ", "ONE PIECE"]
  },

  {
    id: "helmeppo-one-piece",
    name: "ヘルメッポ",
    originalName: "Helmeppo",
    work: "ONE PIECE",
    category: "アニメ",
    genre: ["冒険", "アクション"],
    role: "海兵",
    firstAppearance: "ONE PIECE",
    personality: "努力家で仲間を大切にする。",
    features: ["海軍", "剣術", "成長"],
    relationships: ["コビー", "モンキー・D・ガープ"],
    description: "コビーと共に海軍で鍛錬を重ねる海兵。",
    highlight: "初登場時から大きく成長していく姿が特徴。",
    keywords: ["ヘルメッポ", "海軍", "コビー", "ONE PIECE"]
  },

  {
    id: "kurenai-yuhi-naruto",
    name: "夕日紅",
    originalName: "Kurenai Yuhi",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "落ち着いており仲間思い。",
    features: ["木ノ葉隠れ", "上忍", "幻術"],
    relationships: ["猿飛アスマ", "日向ヒナタ"],
    description: "木ノ葉隠れの里で班を率いる上忍。",
    highlight: "幻術を得意とし、教え子たちの成長を見守る。",
    keywords: ["夕日紅", "紅", "上忍", "NARUTO"]
  },

  {
    id: "anko-mitarashi-naruto",
    name: "みたらしアンコ",
    originalName: "Anko Mitarashi",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "大胆で行動力がある。",
    features: ["木ノ葉隠れ", "特別上忍", "中忍試験"],
    relationships: ["大蛇丸"],
    description: "木ノ葉隠れの里に所属する実力ある忍者。",
    highlight: "過去との因縁を抱えながら任務に向き合う。",
    keywords: ["アンコ", "みたらしアンコ", "忍者", "NARUTO"]
  },

  {
    id: "shizune-naruto",
    name: "シズネ",
    originalName: "Shizune",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "医療忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "真面目で責任感が強い。",
    features: ["医療忍術", "木ノ葉隠れ", "補佐"],
    relationships: ["綱手"],
    description: "綱手を長く支えてきた医療忍者。",
    highlight: "医療技術と実務能力の両面から仲間を支える。",
    keywords: ["シズネ", "綱手", "医療忍者", "NARUTO"]
  },

  {
    id: "ebisu-naruto",
    name: "エビス",
    originalName: "Ebisu",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "真面目で教育熱心。",
    features: ["木ノ葉隠れ", "上忍", "指導"],
    relationships: ["木ノ葉丸"],
    description: "若い忍者たちの教育を担当する木ノ葉隠れの忍者。",
    highlight: "基礎を重視した指導で後輩の成長を支える。",
    keywords: ["エビス", "木ノ葉丸", "上忍", "NARUTO"]
  },

  {
    id: "ibiki-morino-naruto",
    name: "森乃イビキ",
    originalName: "Ibiki Morino",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "厳格で精神力が強い。",
    features: ["木ノ葉隠れ", "尋問", "中忍試験"],
    relationships: ["木ノ葉の忍者"],
    description: "尋問や情報収集に長けた木ノ葉隠れの忍者。",
    highlight: "心理面を重視した試験や任務で高い能力を発揮する。",
    keywords: ["森乃イビキ", "イビキ", "中忍試験", "NARUTO"]
  },

  {
    id: "genma-shiranui-naruto",
    name: "不知火ゲンマ",
    originalName: "Genma Shiranui",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "冷静で落ち着いている。",
    features: ["木ノ葉隠れ", "特別上忍", "千本"],
    relationships: ["木ノ葉の忍者"],
    description: "木ノ葉隠れの里で多くの任務を経験している忍者。",
    highlight: "危険な状況でも落ち着いて任務を遂行する。",
    keywords: ["不知火ゲンマ", "ゲンマ", "忍者", "NARUTO"]
  },

  {
    id: "raido-namiashi-naruto",
    name: "並足ライドウ",
    originalName: "Raido Namiashi",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "冷静で任務に忠実。",
    features: ["木ノ葉隠れ", "特別上忍", "護衛"],
    relationships: ["木ノ葉の忍者"],
    description: "木ノ葉隠れで重要人物の護衛などを務める忍者。",
    highlight: "経験を生かしてさまざまな任務を支える。",
    keywords: ["並足ライドウ", "ライドウ", "木ノ葉", "NARUTO"]
  },

  {
    id: "aoba-yamashiro-naruto",
    name: "山城アオバ",
    originalName: "Aoba Yamashiro",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "冷静で観察力がある。",
    features: ["木ノ葉隠れ", "上忍", "情報"],
    relationships: ["木ノ葉の忍者"],
    description: "木ノ葉隠れの里で活動する経験豊富な忍者。",
    highlight: "情報収集や任務の支援で力を発揮する。",
    keywords: ["山城アオバ", "アオバ", "上忍", "NARUTO"]
  },

  {
    id: "izumo-kamizuki-naruto",
    name: "神月イズモ",
    originalName: "Izumo Kamizuki",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "真面目で協調性がある。",
    features: ["木ノ葉隠れ", "中忍", "連携"],
    relationships: ["鋼子テツ"],
    description: "木ノ葉隠れで任務をこなす中忍。",
    highlight: "仲間との連携を生かして任務に取り組む。",
    keywords: ["神月イズモ", "イズモ", "木ノ葉", "NARUTO"]
  },

  {
    id: "kotetsu-hagane-naruto",
    name: "鋼子テツ",
    originalName: "Kotetsu Hagane",
    work: "NARUTO -ナルト-",
    category: "アニメ",
    genre: ["忍者", "アクション"],
    role: "忍者",
    firstAppearance: "NARUTO -ナルト-",
    personality: "仲間思いで実直。",
    features: ["木ノ葉隠れ", "中忍", "連携"],
    relationships: ["神月イズモ"],
    description: "イズモと共に行動することが多い木ノ葉隠れの忍者。",
    highlight: "長年の仲間との息の合った連携が特徴。",
    keywords: ["鋼子テツ", "コテツ", "イズモ", "NARUTO"]
  },

  {
    id: "momo-yaoyorozu-mha",
    name: "八百万百",
    originalName: "Momo Yaoyorozu",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "真面目で責任感が強い。",
    features: ["雄英高校", "創造", "知識"],
    relationships: ["轟焦凍", "耳郎響香"],
    description: "雄英高校ヒーロー科で学ぶ、豊富な知識を持つ生徒。",
    highlight: "知識と個性を組み合わせて状況に応じた道具を生み出す。",
    keywords: ["八百万百", "ヤオモモ", "雄英高校", "ヒロアカ"]
  },

  {
    id: "kyoka-jiro-mha",
    name: "耳郎響香",
    originalName: "Kyoka Jiro",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "クールだが仲間思い。",
    features: ["雄英高校", "イヤホンジャック", "音楽"],
    relationships: ["八百万百", "上鳴電気"],
    description: "音に関係する個性を持つ雄英高校の生徒。",
    highlight: "戦闘だけでなく音楽の才能でも仲間を支える。",
    keywords: ["耳郎響香", "耳郎", "イヤホンジャック", "ヒロアカ"]
  },

  {
    id: "denki-kaminari-mha",
    name: "上鳴電気",
    originalName: "Denki Kaminari",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく社交的。",
    features: ["雄英高校", "帯電", "電気"],
    relationships: ["耳郎響香", "切島鋭児郎"],
    description: "電気を扱う個性を持つ雄英高校ヒーロー科の生徒。",
    highlight: "明るい性格でクラスの雰囲気を盛り上げる。",
    keywords: ["上鳴電気", "上鳴", "電気", "ヒロアカ"]
  },

  {
    id: "mina-ashido-mha",
    name: "芦戸三奈",
    originalName: "Mina Ashido",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "明るく積極的。",
    features: ["雄英高校", "酸", "運動能力"],
    relationships: ["切島鋭児郎", "瀬呂範太"],
    description: "酸を操る個性を持つ雄英高校の生徒。",
    highlight: "高い身体能力と明るい性格を生かして仲間と行動する。",
    keywords: ["芦戸三奈", "芦戸", "酸", "ヒロアカ"]
  },

  {
    id: "hanta-sero-mha",
    name: "瀬呂範太",
    originalName: "Hanta Sero",
    work: "僕のヒーローアカデミア",
    category: "アニメ",
    genre: ["ヒーロー", "アクション"],
    role: "ヒーロー科生徒",
    firstAppearance: "僕のヒーローアカデミア",
    personality: "気さくで協調性がある。",
    features: ["雄英高校", "テープ", "機動力"],
    relationships: ["上鳴電気", "芦戸三奈"],
    description: "肘からテープ状の物質を出す個性を持つ生徒。",
    highlight: "個性を移動や拘束など幅広い用途に活用する。",
    keywords: ["瀬呂範太", "瀬呂", "テープ", "ヒロアカ"]
  }

);