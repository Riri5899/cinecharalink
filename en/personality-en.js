// CINECHARA LINK - English Personality Helper
// Load this AFTER characters-en.js and BEFORE the page's render/search script.
//
// This does NOT guess or invent full translations.
// It extracts only personality traits that can be safely recognized
// from the original Japanese personality text.
// If nothing can be recognized safely, it keeps the existing fallback.

(function () {
  const personalityTraitTranslations = [
    ["責任感が強い", "responsible"],
    ["責任感がある", "responsible"],
    ["責任感があり", "responsible"],
    ["責任感が強く", "responsible"],
    ["正義感が強い", "has a strong sense of justice"],
    ["観察力が高い", "observant"],
    ["感情を表に出さない", "reserved"],
    ["頭の回転が速い", "quick-witted"],
    ["カリスマ性がある", "charismatic"],
    ["圧倒的な自信", "highly confident"],
    ["好奇心旺盛", "very curious"],
    ["家族思い", "family-oriented"],
    ["親しみやすい", "approachable"],
    ["思いやりがある", "compassionate"],
    ["任務に忠実", "devoted to duty"],
    ["支配欲が強い", "domineering"],
    ["自立心が強い", "independent"],
    ["執着心が強い", "obsessive"],
    ["破壊衝動が強い", "destructive"],
    ["自由を好む", "freedom-loving"],
    ["忠誠心が非常に強い", "highly loyal"],
    ["忠誠心が強い", "highly loyal"],
    ["研究への執着が強い", "obsessed with research"],
    ["指導力が高い", "a strong leader"],
    ["礼儀と品格を重視", "values manners and dignity"],
    ["科学への情熱が強い", "passionate about science"],
    ["ものづくりへの情熱が強い", "passionate about creating"],
    ["感情の起伏が大きい", "emotionally volatile"],
    ["規律を重視", "disciplined"],
    ["生徒思い", "caring toward students"],
    ["強い信念", "strong-willed"],
    ["行動力がある", "action-oriented"],
    ["行動力があり", "action-oriented"],
    ["意志が強い", "strong-willed"],
    ["意志が強く", "strong-willed"],
    ["自信があり", "confident"],
    ["自信がある", "confident"],
    ["手先が器用", "skillful"],
    ["人望があり", "well-respected"],
    ["判断力が高い", "has good judgment"],
    ["決断力がある", "decisive"],
    ["反骨心が強い", "rebellious"],
    ["視野が広い", "broad-minded"],
    ["勝負強い", "strong under pressure"],
    ["友達思い", "caring toward friends"],
    ["部下思い", "caring toward subordinates"],
    ["食欲旺盛", "a big eater"],
    ["涙もろい", "easily moved to tears"],
    ["目立ちたがり", "attention-seeking"],
    ["目立つことを好む", "attention-seeking"],
    ["面倒くさがり", "laid-back"],
    ["恥ずかしがり屋", "shy"],
    ["人見知り", "shy around strangers"],
    ["頭脳明晰", "highly intelligent"],
    ["謎めいている", "mysterious"],
    ["多くが謎", "mysterious"],
    ["強い理想", "idealistic"],
    ["理想主義的", "idealistic"],
    ["研究者気質", "research-minded"],
    ["食いしん坊", "food-loving"],
    ["感受性が強い", "sensitive"],
    ["冷静", "calm"],
    ["勇敢", "brave"],
    ["仲間思い", "caring toward friends"],
    ["誠実", "sincere"],
    ["穏やか", "gentle"],
    ["思慮深い", "thoughtful"],
    ["皮肉屋", "sarcastic"],
    ["知的", "intelligent"],
    ["厳格", "strict"],
    ["社交的", "sociable"],
    ["熱血", "passionate"],
    ["素直", "straightforward"],
    ["感情豊か", "expressive"],
    ["負けず嫌い", "competitive"],
    ["自信家", "self-confident"],
    ["真面目", "serious"],
    ["誇り高い", "proud"],
    ["計算高い", "calculating"],
    ["慎重", "cautious"],
    ["行動的", "active"],
    ["豪快", "bold"],
    ["努力家", "hardworking"],
    ["現実的", "practical"],
    ["頼れる", "reliable"],
    ["しっかり者", "dependable"],
    ["心優しい", "kind-hearted"],
    ["臆病", "timid"],
    ["寡黙", "quiet"],
    ["自由奔放", "free-spirited"],
    ["義理堅い", "loyal"],
    ["優しい", "kind"],
    ["大胆", "bold"],
    ["情熱的", "passionate"],
    ["狡猾", "cunning"],
    ["執念深い", "persistent"],
    ["内向的", "introverted"],
    ["不器用", "awkward"],
    ["気が強い", "strong-willed"],
    ["朗らか", "cheerful"],
    ["一途", "devoted"],
    ["照れ屋", "shy"],
    ["面倒見がよい", "caring"],
    ["面倒見が良い", "caring"],
    ["反抗的", "rebellious"],
    ["無愛想", "unsociable"],
    ["大らか", "easygoing"],
    ["礼儀正しい", "polite"],
    ["好戦的", "combative"],
    ["分析的", "analytical"],
    ["おしゃべり", "talkative"],
    ["無表情", "expressionless"],
    ["粘り強い", "persistent"],
    ["温厚", "mild-mannered"],
    ["陽気", "cheerful"],
    ["おっとり", "gentle"],
    ["内気", "shy"],
    ["好奇心が強い", "curious"],
    ["天真爛漫", "innocent and cheerful"],
    ["独創的", "original"],
    ["プライドが高い", "proud"],
    ["挑発的", "provocative"],
    ["冷淡", "cold"],
    ["予測不能", "unpredictable"],
    ["機転が利く", "resourceful"],
    ["心配性", "worry-prone"],
    ["繊細", "sensitive"],
    ["前向き", "positive"],
    ["慈悲深い", "compassionate"],
    ["混沌を好む", "chaos-loving"],
    ["野心的", "ambitious"],
    ["不安定", "unstable"],
    ["芯が強い", "strong-minded"],
    ["率直", "frank"],
    ["おおらか", "easygoing"],
    ["気まぐれ", "capricious"],
    ["情に厚い", "warm-hearted"],
    ["冷酷", "ruthless"],
    ["威圧的", "intimidating"],
    ["忠実", "loyal"],
    ["淡々としている", "matter-of-fact"],
    ["純粋", "pure-hearted"],
    ["無邪気", "innocent"],
    ["残忍", "cruel"],
    ["お調子者", "playful"],
    ["勝ち気", "competitive"],
    ["傲慢", "arrogant"],
    ["謙虚", "humble"],
    ["気弱", "timid"],
    ["活発", "energetic"],
    ["クール", "cool-headed"],
    ["冷徹", "cold and calculating"],
    ["豪胆", "bold"],
    ["元気", "energetic"],
    ["毒舌", "sharp-tongued"],
    ["ドライ", "detached"],
    ["いたずら好き", "mischievous"],
    ["控えめ", "reserved"],
    ["強気", "assertive"],
    ["破壊的", "destructive"],
    ["頭脳派", "intellectual"],
    ["天然", "airheaded"],
    ["合理的", "rational"],
    ["音楽好き", "music-loving"],
    ["天才肌", "naturally gifted"],
    ["美意識が高い", "aesthetically minded"],
    ["マイペース", "easygoing"],
    ["野性的", "wild"],
    ["聡明", "wise"],
    ["物静か", "quiet"],
    ["気さく", "friendly"],
    ["協調性がある", "cooperative"],
    ["短気", "short-tempered"],
    ["明朗", "cheerful"],
    ["爽やか", "refreshing"],
    ["神経質", "nervous"],
    ["豪放", "bold"],
    ["生意気", "cheeky"],

    // Common conjugated forms
    ["明るく", "cheerful"],
    ["優しく", "kind"],
    ["落ち着いて", "composed"],
    ["賢く", "intelligent"],
    ["冷静で", "calm"],
    ["真面目で", "serious"],
    ["誠実で", "sincere"],
    ["豪快で", "bold"],
    ["穏やかで", "gentle"],
    ["勇敢で", "brave"],
    ["知的で", "intelligent"],
    ["寡黙で", "quiet"],
    ["内気で", "shy"],
    ["内向的で", "introverted"],
    ["負けず嫌いで", "competitive"],
    ["自由奔放で", "free-spirited"],
    ["気が強く", "strong-willed"],
    ["自信に満ち", "confident"],
    ["親しみやすく", "approachable"],
    ["静かで", "quiet"],
    ["素直で", "straightforward"],
    ["独創的で", "original"],
    ["大胆で", "bold"],
    ["豪放で", "bold"],
    ["爽やかで", "refreshing"],
    ["合理的で", "rational"],
    ["冷酷で", "ruthless"],
    ["狡猾で", "cunning"],
    ["誇り高く", "proud"],
    ["心優しく", "kind-hearted"],
    ["元気で", "energetic"],
    ["活発で", "energetic"],
    ["物静かで", "quiet"],
    ["気さくで", "friendly"]
  ];

  function hasJapanese(text) {
    return /[\u3040-\u30ff\u3400-\u9fff]/.test(text || "");
  }

  function capitalize(text) {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function joinTraits(items) {
    const unique = [...new Set(items)].slice(0, 5);

    if (unique.length === 0) return "";
    if (unique.length === 1) return capitalize(unique[0]) + ".";
    if (unique.length === 2) {
      return capitalize(unique[0]) + " and " + unique[1] + ".";
    }

    return (
      capitalize(unique[0]) +
      ", " +
      unique.slice(1, -1).join(", ") +
      ", and " +
      unique[unique.length - 1] +
      "."
    );
  }

  function buildSafeEnglishPersonality(japaneseText) {
    if (!japaneseText) return "";

    if (!hasJapanese(japaneseText)) {
      return japaneseText;
    }

    const traits = [];

    for (const [jp, en] of personalityTraitTranslations) {
      if (japaneseText.includes(jp)) {
        traits.push(en);
      }
    }

    return joinTraits(traits);
  }

  if (typeof characters === "undefined" || !Array.isArray(characters)) {
    console.warn(
      "personality-en.js: characters was not found. Load this file after characters-en.js."
    );
    return;
  }

  characters.forEach((character) => {
    const originalJapanese =
      character.japanesePersonality ||
      (hasJapanese(character.personality) ? character.personality : "");

    const translated =
      buildSafeEnglishPersonality(originalJapanese);

    if (translated) {
      character.englishPersonality = translated;
      character.personality = translated;
    }
  });
})();
