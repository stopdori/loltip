import fs from "fs";
import path from "path";

const champsDir = path.resolve("app/data/champs");
const outFile = path.resolve("app/data/interactions/index.ts");

const files = fs
  .readdirSync(champsDir)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(".ts", ""))
  .filter((name) => name !== "index");

const imports = files
  .map((name) => `import ${name} from "../champs/${name}";`)
  .join("\n");

const mapEntries = files.map((name) => `  ${name},`).join("\n");

const content = `
// ⚠️ 이 파일은 자동 생성됨 (genChampSkills.ts)
// 수동 수정 금지

export * from "./tags";
export * from "./types";

${imports}

export const CHAMP_SKILLS = {
${mapEntries}
} as const;
`;

fs.writeFileSync(outFile, content.trim() + "\n", "utf8");

console.log("✅ CHAMP_SKILLS 자동 생성 완료");
