// app/data/matchups/alistar/alistar_viktor.ts
import type { MatchupSummary } from "../_types";

export const alistar_viktor: MatchupSummary = {
  champs: ["alistar", "viktor"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 빅토르 W강화 영향으로 인한[[SLOW]], W의 [[STUN]]을 해제할 수 있음.", 
        "R의 [[CC_CLEANSE]]로 빅토르 W의 지속[[SLOW]]를 해제해도 다시 걸림."],
      en: ["R [[CC_CLEANSE]] can cleanse Viktor's [[EMPOWERED]] W [[SLOW]] and W [[STUN]].", "Viktor's W persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    viktor: {
      ko: [],
      en: [],
    },
  },
};
