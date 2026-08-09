// app/data/matchups/aurelionsol/aurelionsol_irelia.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_irelia: MatchupSummary = {
  champs: ["aurelionsol", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Irelia's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Irelia's Q [[DASH]]."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
