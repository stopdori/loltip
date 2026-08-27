// app/data/matchups/aurelionsol/aurelionsol_chogath.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_chogath: MatchupSummary = {
  champs: ["aurelionsol", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Aurelion Sol's W [[SKILL_CHANNEL]] [[DASH]].",
        "W [[SILENCE]] cannot interrupt Aurelion Sol's W [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
