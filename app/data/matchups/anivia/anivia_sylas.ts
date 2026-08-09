// app/data/matchups/anivia/anivia_sylas.ts
import type { MatchupSummary } from "../_types";

export const anivia_sylas: MatchupSummary = {
  champs: ["anivia", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 사일러스 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 사일러스 W, E의 [[DASH]]을 / 훔친 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Sylas's W or E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Sylas's W or E [[DASH]] / stolen Anivia R [[SKILL_CHANNEL]]."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
