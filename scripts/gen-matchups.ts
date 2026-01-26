// scripts/gen-matchups.ts
import fs from "node:fs";
import path from "node:path";

const CHAMPS = [
  "aatrox",
  "ahri",
  "akali",
  "akshan",
  "alistar",
  "ambessa",
  "amumu",
  "anivia",
  "annie",
  "aphelios",
  "ashe",
  "aurelionsol",
  "aurora",
  "azir",
  "bard",
  "belveth",
  "blitzcrank",
  "brand",
  "braum",
  "briar",
  "caitlyn",
  "camille",
  "cassiopeia",
  "chogath",
  "corki",
  "darius",
  "diana",
  "draven",
  "drmundo",
  "ekko",
  "elise",
  "evelynn",
  "ezreal",
  "fiddlesticks",
  "fiora",
  "fizz",
  "galio",
  "gangplank",
  "garen",
  "gnar",
  "gragas",
  "graves",
  "gwen",
  "hecarim",
  "heimerdinger",
  "hwei",
  "illaoi",
  "irelia",
  "ivern",
  "janna",
  "jarvaniv",
  "jax",
  "jayce",
  "jhin",
  "jinx",
  "kaisa",
  "kalista",
  "karma",
  "karthus",
  "kassadin",
  "katarina",
  "kayle",
  "kayn",
  "kennen",
  "khazix",
  "kindred",
  "kled",
  "kogmaw",
  "ksante",
  "leblanc",
  "leesin",
  "leona",
  "lillia",
  "lissandra",
  "lucian",
  "lulu",
  "lux",
  "malphite",
  "malzahar",
  "maokai",
  "masteryi",
  "mel",
  "milio",
  "missfortune",
  "mordekaiser",
  "morgana",
  "naafiri",
  "nami",
  "nasus",
  "nautilus",
  "neeko",
  "nidalee",
  "nilah",
  "nocturne",
  "nunu",
  "olaf",
  "orianna",
  "ornn",
  "pantheon",
  "poppy",
  "pyke",
  "qiyana",
  "quinn",
  "rakan",
  "rammus",
  "reksai",
  "rell",
  "renata",
  "renekton",
  "rengar",
  "riven",
  "rumble",
  "ryze",
  "samira",
  "sejuani",
  "senna",
  "seraphine",
  "sett",
  "shaco",
  "shen",
  "shyvana",
  "singed",
  "sion",
  "sivir",
  "skarner",
  "smolder",
  "sona",
  "soraka",
  "swain",
  "sylas",
  "syndra",
  "tahmkench",
  "taliyah",
  "talon",
  "taric",
  "teemo",
  "thresh",
  "tristana",
  "trundle",
  "tryndamere",
  "twistedfate",
  "twitch",
  "udyr",
  "urgot",
  "varus",
  "vayne",
  "veigar",
  "velkoz",
  "vex",
  "vi",
  "viego",
  "viktor",
  "vladimir",
  "volibear",
  "warwick",
  "wukong",
  "xayah",
  "xerath",
  "xinzhao",
  "yasuo",
  "yone",
  "yorick",
  "yunara",
  "yuumi",
  "zaahen",
  "zac",
  "zed",
  "zeri",
  "ziggs",
  "zilean",
  "zoe",
  "zyra",
] as const;

// ✅ MatchupSummary 타입 파일 경로(프로젝트에 맞게 수정 가능)
// 보통: app/data/matchups/_types.ts 라고 가정
const TYPES_IMPORT = "../_types";

const ROOT = path.join(process.cwd(), "app", "data", "matchups");

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function writeIfNotExists(filePath: string, content: string) {
  if (fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, content, "utf8");
}

function fileTemplate(a: string, b: string) {
  const varName = `${a}_${b}`;
  return `// app/data/matchups/${a}/${a}_${b}.ts
import type { MatchupSummary } from "${TYPES_IMPORT}";

export const ${varName}: MatchupSummary = {
  champs: ["${a}", "${b}"],
  highlights: {
    ko: [""],
    en: [""],
  },
};
`;
}

function main() {
  ensureDir(ROOT);

  // 폴더 챔프별로 만들고,
  // a챔프 폴더엔 "a_vs_뒤에오는챔프들"만 생성(중복 방지)
  for (let i = 0; i < CHAMPS.length; i++) {
    const a = CHAMPS[i];
    const dirA = path.join(ROOT, a);
    ensureDir(dirA);

    for (let j = i + 1; j < CHAMPS.length; j++) {
      const b = CHAMPS[j];
      const filePath = path.join(dirA, `${a}_${b}.ts`);
      writeIfNotExists(filePath, fileTemplate(a, b));
    }
  }

  console.log(`✅ done. root = ${ROOT}`);
  console.log(`- folders: ${CHAMPS.length}`);
  console.log(`- files: ${Math.floor((CHAMPS.length * (CHAMPS.length - 1)) / 2)} (no duplicates)`);
}

main();
