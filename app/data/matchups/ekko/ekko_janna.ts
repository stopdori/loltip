// app/data/matchups/ekko/ekko_janna.ts
import type { MatchupSummary } from "../_types";

export const ekko_janna: MatchupSummary = {
  champs: ["ekko", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["W의 [[STUN]]로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]], [[KNOCKBACK]]([[AIRBORNE]])은 남아있음."],
      en: [""],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 에코 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Ekko's E [[DASH]]."],
    },
  },
};
