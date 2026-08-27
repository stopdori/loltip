// app/data/matchups/aurelionsol/aurelionsol_lillia.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_lillia: MatchupSummary = {
  champs: ["aurelionsol", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, W의 공격도 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Lillia's W [[DASH]]. \n However, W's damage instance cannot be interrupted either. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
