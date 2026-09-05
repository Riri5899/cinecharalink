// =====================================================
// CINECHARA LINK
// English Character Data Layer
// IMPORTANT:
// ../characters.js の後に読み込んでください
// =====================================================


// =====================================================
// 1. CATEGORY
// =====================================================

const categoryTranslations = {
  "映画": "Movie",
  "アニメ": "Anime",
  "アニメ映画": "Animated Movie",
  "海外アニメ": "Animation",
  "ドラマ": "TV Series",
  "ゲーム": "Game",
  "漫画": "Manga"
};


// =====================================================
// 2. GENRE
// =====================================================

const genreTranslations = {
  "アクション": "Action",
  "アドベンチャー": "Adventure",
  "冒険": "Adventure",
  "ファンタジー": "Fantasy",
  "SF": "Sci-Fi",
  "ドラマ": "Drama",
  "コメディ": "Comedy",
  "恋愛": "Romance",
  "青春": "Coming-of-Age",
  "犯罪": "Crime",
  "ミステリー": "Mystery",
  "サスペンス": "Suspense",
  "ホラー": "Horror",
  "スリラー": "Thriller",
  "スポーツ": "Sports",
  "ファミリー": "Family",
  "音楽": "Music",
  "学園": "School",
  "日常": "Slice of Life",
  "歴史": "Historical",
  "戦争": "War",
  "魔法": "Magic",
  "異世界": "Isekai",
  "ロボット": "Mecha",
  "メカ": "Mecha",
  "スパイ": "Spy",
  "ヒーロー": "Superhero",
  "バトル": "Battle",
  "ダークファンタジー": "Dark Fantasy",
  "異能力": "Supernatural Powers"
};


// =====================================================
// 3. EXACT WORD TRANSLATIONS
// =====================================================

const exactTranslations = {
  "主人公": "Protagonist",
  "主人公の一人": "One of the protagonists",
  "ヒーロー": "Hero",
  "悪役": "Villain",
  "主要な敵": "Main antagonist",

  "戦士": "Warrior",
  "魔法使い": "Wizard",
  "警察官": "Police officer",
  "教師": "Teacher",
  "生徒": "Student",
  "指導者": "Leader",

  "王": "King",
  "王女": "Princess",
  "王子": "Prince",
  "皇帝": "Emperor",
  "プリンセス": "Princess",

  "相棒": "Partner",
  "仲間": "Companion",
  "ライバル": "Rival",

  "少女": "Girl",
  "少年": "Boy",

  "姉": "Older sister",
  "兄": "Older brother",
  "弟": "Younger brother",
  "妹": "Younger sister",

  "友人": "Friend",
  "親友": "Best friend",
  "家族": "Family",

  "剣士": "Swordsman",
  "弓使い": "Archer",

  "探偵": "Detective",
  "科学者": "Scientist",
  "医師": "Doctor",

  "忍者": "Ninja",
  "海賊": "Pirate",
  "兵士": "Soldier",

  "ロボット": "Robot",
  "ドロイド": "Droid",

  "猫": "Cat",
  "犬": "Dog",

  "友情": "Friendship",
  "冒険": "Adventure",
  "成長": "Growth",
  "魔法": "Magic",

  "格闘": "Martial arts",
  "剣": "Sword",
  "弓": "Bow",
  "銃": "Gun",

  "飛行": "Flight",
  "怪力": "Super strength",
  "変身": "Transformation",

  "宇宙": "Space",
  "学校": "School",

  "高校生": "High school student",
  "中学生": "Middle school student",
  "小学生": "Elementary school student",

  // Harry Potter
  "ホグワーツ": "Hogwarts",
  "グリフィンドール": "Gryffindor",
  "スリザリン": "Slytherin",
  "レイブンクロー": "Ravenclaw",
  "ハッフルパフ": "Hufflepuff"
};


// =====================================================
// 4. WORK TITLES
// =====================================================

const workTitleTranslations = {

  // ===================================================
  // ANIME / MANGA
  // ===================================================

  "【推しの子】": "Oshi no Ko",
  "3月のライオン": "March Comes in Like a Lion",
  "86―エイティシックス―": "86 Eighty-Six",
  "Angel Beats!": "Angel Beats!",
  "BACCANO!": "Baccano!",
  "BANANA FISH": "Banana Fish",
  "BEASTARS": "BEASTARS",
  "BECK": "BECK: Mongolian Chop Squad",
  "BLACK LAGOON": "Black Lagoon",
  "BLEACH": "Bleach",
  "Charlotte": "Charlotte",
  "CLANNAD": "Clannad",
  "D.Gray-man": "D.Gray-man",
  "DEATH NOTE": "Death Note",
  "Dr.STONE": "Dr. STONE",
  "FAIRY TAIL": "Fairy Tail",
  "Fate/stay night": "Fate/stay night",
  "Fate/Zero": "Fate/Zero",
  "H2": "H2",
  "HELLSING": "Hellsing",
  "HUNTER×HUNTER": "Hunter x Hunter",
  "MFゴースト": "MF Ghost",
  "MONSTER": "Monster",
  "NANA": "NANA",
  "NARUTO -ナルト-": "Naruto",
  "ONE PIECE": "One Piece",
  "PSYCHO-PASS サイコパス": "Psycho-Pass",
  "Re:ゼロから始める異世界生活": "Re:ZERO -Starting Life in Another World-",
  "SAKAMOTO DAYS": "SAKAMOTO DAYS",
  "SLAM DUNK": "Slam Dunk",
  "SPY×FAMILY": "SPY x FAMILY",
  "STEINS;GATE": "Steins;Gate",
  "TRIGUN": "Trigun",
  "WIND BREAKER": "WIND BREAKER",
  "WORKING!!": "Wagnaria!!",

  "あそびあそばせ": "Asobi Asobase",
  "アカメが斬る！": "Akame ga Kill!",
  "イナズマイレブン": "Inazuma Eleven",
  "ヴァイオレット・エヴァーガーデン": "Violet Evergarden",
  "ヴィンランド・サガ": "Vinland Saga",
  "うしおととら": "Ushio and Tora",
  "うる星やつら": "Urusei Yatsura",
  "オーバーロード": "Overlord",
  "オッドタクシー": "ODDTAXI",
  "カードキャプターさくら": "Cardcaptor Sakura",
  "ガールズ＆パンツァー": "Girls und Panzer",
  "カウボーイビバップ": "Cowboy Bebop",
  "かぐや様は告らせたい": "Kaguya-sama: Love Is War",
  "からくりサーカス": "Karakuri Circus",
  "キャプテン翼": "Captain Tsubasa",
  "キルラキル": "Kill la Kill",
  "クレヨンしんちゃん": "Crayon Shin-chan",
  "けいおん！": "K-ON!",
  "コードギアス 反逆のルルーシュ": "Code Geass: Lelouch of the Rebellion",
  "ゴールデンカムイ": "Golden Kamuy",
  "この素晴らしい世界に祝福を！": "KONOSUBA -God's blessing on this wonderful world!",
  "シャーマンキング": "Shaman King",
  "ジョジョの奇妙な冒険": "JoJo's Bizarre Adventure",
  "スレイヤーズ": "Slayers",
  "ソウルイーター": "Soul Eater",
  "ソードアート・オンライン": "Sword Art Online",
  "その着せ替え人形は恋をする": "My Dress-Up Darling",
  "ゾンビランドサガ": "Zombie Land Saga",
  "ダイヤのA": "Ace of Diamond",
  "タッチ": "Touch",
  "ダンジョン飯": "Delicious in Dungeon",
  "ダンダダン": "DAN DA DAN",
  "チェンソーマン": "Chainsaw Man",
  "ちはやふる": "Chihayafuru",
  "ちびまる子ちゃん": "Chibi Maruko-chan",
  "デジモンアドベンチャー": "Digimon Adventure",
  "テニスの王子様": "The Prince of Tennis",
  "ドラえもん": "Doraemon",
  "ドラゴンボール": "Dragon Ball",
  "とらドラ！": "Toradora!",
  "ノーゲーム・ノーライフ": "No Game No Life",
  "のだめカンタービレ": "Nodame Cantabile",
  "ノラガミ": "Noragami",
  "ハイキュー!!": "Haikyu!!",
  "はじめの一歩": "Hajime no Ippo",
  "はたらく細胞": "Cells at Work!",
  "ふしぎ遊戯": "Fushigi Yugi",
  "ブラッククローバー": "Black Clover",
  "プリキュア（ふたりはプリキュア）": "Futari wa Pretty Cure",
  "フルーツバスケット": "Fruits Basket",
  "ブルーピリオド": "Blue Period",
  "ブルーロック": "Blue Lock",
  "フルメタル・パニック！": "Full Metal Panic!",
  "ぼっち・ざ・ろっく！": "BOCCHI THE ROCK!",
  "ホリミヤ": "Horimiya",
  "マッシュル-MASHLE-": "MASHLE: MAGIC AND MUSCLES",
  "メイドインアビス": "Made in Abyss",
  "メジャー": "Major",
  "めぞん一刻": "Maison Ikkoku",
  "モブサイコ100": "Mob Psycho 100",
  "やはり俺の青春ラブコメはまちがっている。": "My Teen Romantic Comedy SNAFU",
  "ゆるキャン△": "Laid-Back Camp",
  "ようこそ実力至上主義の教室へ": "Classroom of the Elite",
  "ラブライブ！": "Love Live!",
  "らんま1/2": "Ranma 1/2",
  "リコリス・リコイル": "Lycoris Recoil",
  "るろうに剣心": "Rurouni Kenshin",
  "ワールドトリガー": "World Trigger",

  "暗殺教室": "Assassination Classroom",
  "宇宙よりも遠い場所": "A Place Further than the Universe",
  "宇宙兄弟": "Space Brothers",
  "炎炎ノ消防隊": "Fire Force",
  "俺だけレベルアップな件": "Solo Leveling",
  "化物語": "Bakemonogatari",
  "夏目友人帳": "Natsume's Book of Friends",
  "家庭教師ヒットマンREBORN!": "Katekyo Hitman Reborn!",
  "会長はメイド様！": "Maid Sama!",
  "怪獣8号": "Kaiju No. 8",
  "寄生獣 セイの格率": "Parasyte -the maxim-",
  "機動戦士ガンダム": "Mobile Suit Gundam",
  "鬼滅の刃": "Demon Slayer: Kimetsu no Yaiba",
  "響け！ユーフォニアム": "Sound! Euphonium",
  "暁のヨナ": "Yona of the Dawn",
  "金色のガッシュ!!": "Zatch Bell!",
  "銀河英雄伝説": "Legend of the Galactic Heroes",
  "銀魂": "Gintama",
  "君に届け": "Kimi ni Todoke: From Me to You",
  "血界戦線": "Blood Blockade Battlefront",
  "月刊少女野崎くん": "Monthly Girls' Nozaki-kun",
  "犬夜叉": "Inuyasha",
  "古見さんは、コミュ症です。": "Komi Can't Communicate",
  "五等分の花嫁": "The Quintessential Quintuplets",
  "攻殻機動隊": "Ghost in the Shell",
  "鋼の錬金術師": "Fullmetal Alchemist",
  "黒子のバスケ": "Kuroko's Basketball",
  "坂道のアポロン": "Kids on the Slope",
  "桜蘭高校ホスト部": "Ouran High School Host Club",
  "四月は君の嘘": "Your Lie in April",
  "弱虫ペダル": "Yowamushi Pedal",
  "呪術廻戦": "Jujutsu Kaisen",
  "終わりのセラフ": "Seraph of the End",
  "終末のワルキューレ": "Record of Ragnarok",
  "盾の勇者の成り上がり": "The Rising of the Shield Hero",
  "食戟のソーマ": "Food Wars! Shokugeki no Soma",
  "新世紀エヴァンゲリオン": "Neon Genesis Evangelion",
  "進撃の巨人": "Attack on Titan",
  "青の祓魔師": "Blue Exorcist",
  "青春ブタ野郎シリーズ": "Rascal Does Not Dream Series",
  "斉木楠雄のΨ難": "The Disastrous Life of Saiki K.",
  "赤髪の白雪姫": "Snow White with the Red Hair",
  "葬送のフリーレン": "Frieren: Beyond Journey's End",
  "地獄楽": "Hell's Paradise",
  "地獄少女": "Hell Girl",
  "天元突破グレンラガン": "Gurren Lagann",
  "転生したらスライムだった件": "That Time I Got Reincarnated as a Slime",
  "賭ケグルイ": "Kakegurui",
  "東京リベンジャーズ": "Tokyo Revengers",
  "東京喰種トーキョーグール": "Tokyo Ghoul",
  "頭文字D": "Initial D",
  "日常": "Nichijou",
  "彼女、お借りします": "Rent-A-Girlfriend",
  "美少女戦士セーラームーン": "Sailor Moon",
  "文豪ストレイドッグス": "Bungo Stray Dogs",
  "宝石の国": "Land of the Lustrous",
  "僕のヒーローアカデミア": "My Hero Academia",
  "魔法騎士レイアース": "Magic Knight Rayearth",
  "魔法少女まどか☆マギカ": "Puella Magi Madoka Magica",
  "魔法陣グルグル": "Magical Circle Guru-Guru",
  "無職転生 ～異世界行ったら本気だす～": "Mushoku Tensei: Jobless Reincarnation",
  "名探偵コナン": "Detective Conan",
  "薬屋のひとりごと": "The Apothecary Diaries",
  "幽☆遊☆白書": "Yu Yu Hakusho",
  "遊☆戯☆王デュエルモンスターズ": "Yu-Gi-Oh! Duel Monsters",
  "蟲師": "Mushi-Shi",


  // ===================================================
  // MOVIES / WESTERN FRANCHISES
  // ===================================================

  "DC": "DC",
  "Mr.インクレディブル": "The Incredibles",

  "アクアマン": "Aquaman",
  "アナと雪の女王": "Frozen",
  "アバター": "Avatar",
  "インディ・ジョーンズ": "Indiana Jones",
  "ウォーリー": "WALL-E",
  "エイリアン": "Alien",

  "カンフー・パンダ": "Kung Fu Panda",
  "ゴーストバスターズ": "Ghostbusters",
  "ゴッドファーザー": "The Godfather",

  "ジュラシック・パーク": "Jurassic Park",
  "シュレック": "Shrek",
  "スーサイド・スクワッド": "Suicide Squad",
  "ズートピア": "Zootopia",
  "スーパーマン": "Superman",
  "スター・ウォーズ": "Star Wars",

  "ターミネーター": "Terminator",
  "タイタニック": "Titanic",
  "トイ・ストーリー": "Toy Story",
  "トップガン": "Top Gun",
  "トランスフォーマー": "Transformers",

  "パイレーツ・オブ・カリビアン": "Pirates of the Caribbean",
  "ハウルの動く城": "Howl's Moving Castle",
  "バック・トゥ・ザ・フューチャー": "Back to the Future",
  "バットマン": "Batman",
  "ハムナプトラ": "The Mummy",
  "ハリー・ポッター": "Harry Potter",
  "ヒックとドラゴン": "How to Train Your Dragon",
  "ファインディング・ニモ": "Finding Nemo",

  "ホーム・アローン": "Home Alone",

  "マーベル・シネマティック・ユニバース":
    "Marvel Cinematic Universe",

  "マトリックス": "The Matrix",
  "ミッション：インポッシブル": "Mission: Impossible",
  "メン・イン・ブラック": "Men in Black",
  "もののけ姫": "Princess Mononoke",
  "モンスターズ・インク": "Monsters, Inc.",

  "ライオン・キング": "The Lion King",
  "ロード・オブ・ザ・リング": "The Lord of the Rings",
  "ロッキー": "Rocky",

  "ワイルド・スピード": "Fast & Furious",
  "ワンダーウーマン": "Wonder Woman",

  "怪盗グルー": "Despicable Me",

  "千と千尋の神隠し": "Spirited Away",
  "となりのトトロ": "My Neighbor Totoro",
  "魔女の宅急便": "Kiki's Delivery Service"

};

// =====================================================
// 5. FIRST APPEARANCE
// =====================================================

const firstAppearanceTranslations = {
  "ハリー・ポッターと賢者の石":
    "Harry Potter and the Philosopher's Stone",
      "アイアンマン": "Iron Man",
  "アイアンマン2": "Iron Man 2",
  "インクレディブル・ハルク": "The Incredible Hulk",

  "キャプテン・アメリカ／ザ・ファースト・アベンジャー":
    "Captain America: The First Avenger",

  "キャプテン・マーベル":
    "Captain Marvel",

  "シビル・ウォー／キャプテン・アメリカ":
    "Captain America: Civil War",

  "スターダストクルセイダース":
    "Stardust Crusaders",

  "スター・ウォーズ エピソード1／ファントム・メナス":
    "Star Wars: Episode I – The Phantom Menace",

  "スター・ウォーズ エピソード4／新たなる希望":
    "Star Wars: Episode IV – A New Hope",

  "スター・ウォーズ エピソード5／帝国の逆襲":
    "Star Wars: Episode V – The Empire Strikes Back",

  "スター・ウォーズ／フォースの覚醒":
    "Star Wars: The Force Awakens",

  "スティール・ボール・ラン":
    "Steel Ball Run",

  "ストーンオーシャン":
    "Stone Ocean",

  "ダイヤモンドは砕けない":
    "Diamond Is Unbreakable",

  "ダークナイト":
    "The Dark Knight",

  "ダークナイト ライジング":
    "The Dark Knight Rises",

  "ドクター・ストレンジ":
    "Doctor Strange",

  "ドラゴンボールZ":
    "Dragon Ball Z",

  "ドラゴンボールZ 神と神":
    "Dragon Ball Z: Battle of Gods",

  "ドラゴンボール超 ブロリー":
    "Dragon Ball Super: Broly",

  "ハリー・ポッターとアズカバンの囚人":
    "Harry Potter and the Prisoner of Azkaban",

  "ハリー・ポッターと不死鳥の騎士団":
    "Harry Potter and the Order of the Phoenix",

  "バットマン vs スーパーマン ジャスティスの誕生":
    "Batman v Superman: Dawn of Justice",

  "バットマン ビギンズ":
    "Batman Begins",

  "ファントムブラッド":
    "Phantom Blood",

  "ポケットモンスター XY":
    "Pokémon the Series: XY",

  "ポケットモンスター アドバンスジェネレーション":
    "Pokémon the Series: Ruby and Sapphire",

  "ポケットモンスター サン＆ムーン":
    "Pokémon the Series: Sun & Moon",

  "ポケットモンスター ダイヤモンド＆パール":
    "Pokémon the Series: Diamond and Pearl",

  "ポケットモンスター ベストウイッシュ":
    "Pokémon the Series: Black & White",

  "マイティ・ソー":
    "Thor",

  "マン・オブ・スティール":
    "Man of Steel",

  "ロード・オブ・ザ・リング／旅の仲間":
    "The Lord of the Rings: The Fellowship of the Ring",

  "劇場版 呪術廻戦 0":
    "Jujutsu Kaisen 0",

  "戦闘潮流":
    "Battle Tendency",

  "美少女戦士セーラームーン セーラースターズ":
    "Sailor Moon Sailor Stars",

  "美少女戦士セーラームーンR":
    "Sailor Moon R",

  "美少女戦士セーラームーンS":
    "Sailor Moon S",

  "黄金の風":
    "Golden Wind",
};


// =====================================================
// 6. HELPERS
// =====================================================

function hasLatin(value) {
  return (
    typeof value === "string" &&
    /[A-Za-z]/.test(value)
  );
}


function hasJapanese(value) {
  return (
    typeof value === "string" &&
    /[ぁ-んァ-ヶ一-龠々]/.test(value)
  );
}


function translateExact(value) {
  if (typeof value !== "string") {
    return value;
  }

  return (
    exactTranslations[value] ||
    value
  );
}


function translateArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) => {

    if (typeof item !== "string") {
      return item;
    }

    return (
      genreTranslations[item] ||
      exactTranslations[item] ||
      item
    );

  });
}


function removeJapaneseItems(value) {

  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item) => {

    return (
      typeof item === "string" &&
      item.trim() !== "" &&
      !hasJapanese(item)
    );

  });

}


function dedupeStrings(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return [...new Set(
    value
      .filter((item) => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean)
  )];
}

function safeEnglishArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(
    (item) =>
      typeof item === "string" &&
      item.trim() !== "" &&
      !hasJapanese(item)
  );
}



function preserveOriginalJapanese(value) {
  if (typeof value !== "string") {
    return "";
  }

  const text = value.trim();

  if (!text || !hasJapanese(text)) {
    return "";
  }

  return `Original Japanese: ${text}`;
}


// =====================================================
// 7. CHARACTER NAME DICTIONARY
//
// 日本語名 → originalName を自動取得
// Related Characters に利用
// =====================================================

const englishNameByJapaneseName =
  new Map();


characters.forEach((character) => {

  if (!character) {
    return;
  }

  const japaneseName =
    character.name || "";

  let englishName =
    japaneseName;


  if (hasLatin(character.originalName)) {

    englishName =
      character.originalName;

  }


  if (japaneseName) {

    englishNameByJapaneseName.set(
      japaneseName,
      englishName
    );

  }

});


// =====================================================
// 8. RELATED CHARACTERS
// =====================================================

function translateRelationships(value) {

  if (!Array.isArray(value)) {
    return [];
  }


  return value.map((item) => {

    if (typeof item !== "string") {
      return item;
    }


    // データベース内のキャラクターなら
    // originalName を利用

    if (
      englishNameByJapaneseName.has(item)
    ) {

      return (
        englishNameByJapaneseName.get(item)
      );

    }


    // 単語辞書にある場合

    if (exactTranslations[item]) {

      return exactTranslations[item];

    }


    return item;

  });

}


// =====================================================
// 9. CONVERT ALL CHARACTERS
// =====================================================

characters.forEach((character) => {

  if (!character) {
    return;
  }


  // ---------------------------------------------------
  // ORIGINAL JAPANESE DATA
  // ---------------------------------------------------

  character.japaneseName =
    character.name || "";

  character.japaneseWork =
    character.work || "";

  character.japaneseRole =
    character.role || "";

  character.japaneseFirstAppearance =
    character.firstAppearance || "";

  character.japanesePersonality =
    character.personality || "";

  character.japaneseDescription =
    character.description || "";

  character.japaneseHighlight =
    character.highlight || "";


  character.japaneseFeatures =
    Array.isArray(character.features)
      ? [...character.features]
      : [];


  character.japaneseRelationships =
    Array.isArray(character.relationships)
      ? [...character.relationships]
      : [];


  character.japaneseKeywords =
    Array.isArray(character.keywords)
      ? [...character.keywords]
      : [];


  // ---------------------------------------------------
  // NAME
  // ---------------------------------------------------

  if (hasLatin(character.originalName)) {

    character.englishName =
      character.originalName;

  } else if (
    typeof character.id === "string" &&
    /[A-Za-z]/.test(character.id)
  ) {

    character.englishName =
      character.id
        .split("-")
        .filter(Boolean)
        .map(
          (part) =>
            part.charAt(0).toUpperCase() +
            part.slice(1)
        )
        .join(" ");

  } else {

    character.englishName =
      "Character";

  }


  // ---------------------------------------------------
  // WORK
  // ---------------------------------------------------

  const translatedWork =
    workTitleTranslations[
      character.japaneseWork
    ];


  if (translatedWork) {

    character.englishWork =
      translatedWork;

  } else if (
    !hasJapanese(
      character.japaneseWork
    )
  ) {

    character.englishWork =
      character.japaneseWork;

  } else {

    character.englishWork =
      character.japaneseWork || "";

  }


  // ---------------------------------------------------
  // CATEGORY
  // ---------------------------------------------------

  character.englishCategory =
    categoryTranslations[
      character.category
    ] ||
    (
      hasJapanese(character.category)
        ? "Other"
        : character.category || "Other"
    );


  // ---------------------------------------------------
  // GENRE
  // ---------------------------------------------------

  const translatedGenres =
    Array.isArray(character.genre)
      ? character.genre.map((item) => {

          return (
            genreTranslations[item] ||
            item
          );

        })
      : [];


  character.englishGenre =
    dedupeStrings(
      translatedGenres.filter(
        (item) =>
          typeof item === "string" &&
          !hasJapanese(item)
      )
    );


  // ---------------------------------------------------
  // ROLE
  // ---------------------------------------------------

  const translatedRole =
    translateExact(
      character.japaneseRole
    );


  if (
    translatedRole &&
    !hasJapanese(translatedRole)
  ) {

    character.englishRole =
      translatedRole;

  } else {

    character.englishRole =
      "Character";

  }


  // ---------------------------------------------------
  // FIRST APPEARANCE
  // ---------------------------------------------------

  const translatedFirstAppearance =
  firstAppearanceTranslations[
    character.japaneseFirstAppearance
  ] ||
  workTitleTranslations[
    character.japaneseFirstAppearance
  ];


  if (translatedFirstAppearance) {

    character.englishFirstAppearance =
      translatedFirstAppearance;

  } else if (
    character.japaneseFirstAppearance &&
    !hasJapanese(
      character.japaneseFirstAppearance
    )
  ) {

    character.englishFirstAppearance =
      character.japaneseFirstAppearance;

  } else {

    character.englishFirstAppearance =
      "Not available";

  }


  // ---------------------------------------------------
  // PERSONALITY
  // ---------------------------------------------------

  if (
    character.japanesePersonality &&
    !hasJapanese(
      character.japanesePersonality
    )
  ) {

    character.englishPersonality =
      character.japanesePersonality;

  } else {

    character.englishPersonality =
      "Personality details are available in the original Japanese profile.";

  }


  // ---------------------------------------------------
  // FEATURES
  // ---------------------------------------------------

  const translatedFeatures =
    translateArray(
      character.japaneseFeatures
    );


  character.englishFeatures =
    dedupeStrings(
      translatedFeatures.filter(
        (item) =>
          typeof item === "string" &&
          !hasJapanese(item)
      )
    );


  // ---------------------------------------------------
  // RELATED CHARACTERS
  // ---------------------------------------------------

  const translatedRelationships =
    translateRelationships(
      character.japaneseRelationships
    );


  character.englishRelationships =
    dedupeStrings(
      translatedRelationships.filter(
        (item) =>
          typeof item === "string" &&
          !hasJapanese(item)
      )
    );


  // ---------------------------------------------------
  // KEYWORDS
  // ---------------------------------------------------

  const translatedKeywords =
    translateArray(
      character.japaneseKeywords
    );


  character.englishKeywords =
    dedupeStrings(
      translatedKeywords.filter(
        (item) =>
          typeof item === "string" &&
          !hasJapanese(item)
      )
    );


  // ---------------------------------------------------
  // DESCRIPTION
  //
  // 既存データを失わない安全重視の英語表示。
  // 確実に分かる構造化データから英語要約を作り、
  // 日本語原文がある場合は必ず残す。
  // ---------------------------------------------------

  if (
    character.japaneseDescription &&
    !hasJapanese(character.japaneseDescription)
  ) {

    character.englishDescription =
      character.japaneseDescription;

  } else {

    const descriptionParts = [];

    if (character.englishWork) {
      descriptionParts.push(
        `${character.englishName} is a character from ${character.englishWork}.`
      );
    } else {
      descriptionParts.push(
        `${character.englishName} is included in the CINECHARA LINK character database.`
      );
    }

    if (
      character.englishRole &&
      character.englishRole !== "Character" &&
      !character.englishRole.startsWith("Character —")
    ) {
      descriptionParts.push(
        `Role: ${character.englishRole}.`
      );
    }

    if (character.englishFeatures.length > 0) {
      const safeEnglishFeatures =
        character.englishFeatures
          .filter((item) => !hasJapanese(item))
          .slice(0, 3);

      if (safeEnglishFeatures.length > 0) {
        descriptionParts.push(
          `Key features include ${safeEnglishFeatures.join(", ")}.`
        );
      }
    }

    character.englishDescription =
      descriptionParts.join(" ").trim();
  }


  // ---------------------------------------------------
  // HIGHLIGHTS
  //
  // 日本語原文を消さず、安全に分かる英語キーワードだけ
  // 英文サマリーとして補助表示する。
  // ---------------------------------------------------

  if (
    character.japaneseHighlight &&
    !hasJapanese(character.japaneseHighlight)
  ) {

    character.englishHighlight =
      character.japaneseHighlight;

  } else {

    const highlightParts = [];

    const safeEnglishKeywords =
      character.englishKeywords
        .filter((item) => !hasJapanese(item))
        .slice(0, 5);

    if (safeEnglishKeywords.length > 0) {
      highlightParts.push(
        `Notable themes: ${safeEnglishKeywords.join(", ")}.`
      );
    }

    character.englishHighlight =
      highlightParts.join(" ").trim() ||
      "See this character's profile for notable details.";
  }


  // ===================================================
  // 10. APPLY TO ENGLISH PAGE
  // ===================================================


  // NAME

  character.name =
    character.englishName;


  // WORK

  character.work =
    character.englishWork ||
    "Unknown title";


  // CATEGORY

  character.category =
    character.englishCategory;


  // GENRE

  character.genre =
    character.englishGenre;


  // ROLE

  character.role =
    character.englishRole;


  // FIRST APPEARANCE

  character.firstAppearance =
    character.englishFirstAppearance;


  // PERSONALITY

  character.personality =
    character.englishPersonality;


  // DESCRIPTION

  character.description =
    character.englishDescription;


  // FEATURES

  character.features =
    character.englishFeatures;


  // RELATIONSHIPS

  character.relationships =
    character.englishRelationships;


  // HIGHLIGHT

  character.highlight =
    character.englishHighlight;


  // KEYWORDS

  character.keywords =
    character.englishKeywords;


  // ===================================================
  // 11. FINAL ENGLISH-ONLY DISPLAY GUARD
  // ===================================================

  function fallbackEnglishName() {
    if (
      typeof character.id === "string" &&
      /[A-Za-z]/.test(character.id)
    ) {
      return character.id
        .split("-")
        .filter(Boolean)
        .map(
          (part) =>
            part.charAt(0).toUpperCase() +
            part.slice(1)
        )
        .join(" ");
    }

    return "Character";
  }

  if (!character.name || hasJapanese(character.name)) {
    character.name = fallbackEnglishName();
  }

  if (!character.work || hasJapanese(character.work)) {
    character.work = "Unknown title";
  }

  if (!character.category || hasJapanese(character.category)) {
    character.category = "Other";
  }

  character.genre =
    dedupeStrings(
      safeEnglishArray(character.genre)
    );

  if (!character.role || hasJapanese(character.role)) {
    character.role = "Character";
  }

  if (
    !character.firstAppearance ||
    hasJapanese(character.firstAppearance)
  ) {
    character.firstAppearance = "Not available";
  }

  if (
    !character.personality ||
    hasJapanese(character.personality)
  ) {
    character.personality =
      "Personality information is not available.";
  }

  character.features =
    dedupeStrings(
      safeEnglishArray(character.features)
    );

  character.relationships =
    dedupeStrings(
      safeEnglishArray(character.relationships)
    );

  character.keywords =
    dedupeStrings(
      safeEnglishArray(character.keywords)
    );

  if (
    !character.description ||
    hasJapanese(character.description)
  ) {
    const safeDescription = [];

    if (character.work !== "Unknown title") {
      safeDescription.push(
        `${character.name} is a character from ${character.work}.`
      );
    } else {
      safeDescription.push(
        `${character.name} is included in the CINECHARA LINK character database.`
      );
    }

    if (
      character.role &&
      character.role !== "Character"
    ) {
      safeDescription.push(
        `Role: ${character.role}.`
      );
    }

    if (character.features.length > 0) {
      safeDescription.push(
        `Key features include ${character.features
          .slice(0, 3)
          .join(", ")}.`
      );
    }

    character.description =
      safeDescription.join(" ");
  }

  if (
    !character.highlight ||
    hasJapanese(character.highlight)
  ) {
    character.highlight =
      character.keywords.length > 0
        ? `Notable themes: ${character.keywords
            .slice(0, 5)
            .join(", ")}.`
        : "See this character's profile for notable details.";
  }

});