const fs = require("fs");
const path = require("path");
const vm = require("vm");

// characters.js を読み込む
const charactersPath = path.join(__dirname, "characters.js");
const charactersCode = fs.readFileSync(charactersPath, "utf8");

// characters 配列を取得する
const sandbox = {};
vm.createContext(sandbox);

vm.runInContext(
  `${charactersCode}
  globalThis.__charactersForGenerate = characters;
  `,
  sandbox
);

const characters = sandbox.__charactersForGenerate;

if (!Array.isArray(characters)) {
  throw new Error("characters.js からキャラクターデータを取得できませんでした。");
}

// 出力先フォルダ
const outputDir = path.join(__dirname, "characters");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// HTMLで特殊文字を安全にする
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ファイル名に使える形にする
function makeSlug(character, index) {
  const base = character.id || `character-${index + 1}`;

  return String(base)
    .trim()
    .replace(/[<>:"/\\|?*]/g, "-")
    .replace(/\s+/g, "-");
}

characters.forEach((character, index) => {
  const slug = makeSlug(character, index);

  const name = escapeHtml(character.name);
  const work = escapeHtml(character.work);
  const role = escapeHtml(character.role);
  const personality = escapeHtml(character.personality);
  const features = escapeHtml(character.features);
  const relationships = escapeHtml(character.relationships);
  const description = escapeHtml(character.description);

  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${name}｜${work}のキャラクター情報｜シネキャラリンク</title>

  <meta
    name="description"
    content="${name}のキャラクター情報。${work}での役割・性格・特徴・関係性などを紹介します。"
  >

  <link rel="canonical" href="https://cinecharalink.com/characters/${encodeURIComponent(slug)}.html">
</head>

<body>

  <header>
    <a href="../index.html">シネキャラリンク</a>
  </header>

  <main>

    <h1>${name}</h1>

    <p><strong>作品：</strong>${work}</p>

    <h2>キャラクター概要</h2>
    <p>${description}</p>

    <h2>役割</h2>
    <p>${role}</p>

    <h2>性格</h2>
    <p>${personality}</p>

    <h2>特徴</h2>
    <p>${features}</p>

    <h2>関係性</h2>
    <p>${relationships}</p>

    <p>
      <a href="../index.html">キャラクター検索へ戻る</a>
    </p>

  </main>

</body>
</html>`;

  fs.writeFileSync(
    path.join(outputDir, `${slug}.html`),
    html,
    "utf8"
  );
});

console.log(`${characters.length}人分のページを作成しました！`);