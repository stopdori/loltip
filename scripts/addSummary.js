const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app", "data", "matchups");

function processFile(filePath) {
  let text = fs.readFileSync(filePath, "utf8");

  // 이미 summary 있으면 스킵
  if (text.includes("summary: {")) {
    return false;
  }

  // champs 블록 찾기
  const champsRegex = /champs:\s*\[[^\]]+\],/;

  if (!champsRegex.test(text)) {
    return false;
  }

  // 삽입할 summary 템플릿
  const summaryBlock = `
  summary: {
    ko: [],
    en: [],
  },`;

  // champs 뒤에 삽입
  text = text.replace(champsRegex, (match) => match + summaryBlock);

  fs.writeFileSync(filePath, text, "utf8");
  return true;
}

function walk(dir) {
  let changed = 0;

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      changed += walk(full);
    } else if (file.endsWith(".ts")) {
      if (processFile(full)) {
        console.log("modified:", full);
        changed++;
      }
    }
  }

  return changed;
}

const count = walk(ROOT);
console.log("완료. 수정된 파일:", count);