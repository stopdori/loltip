// app/data/matchups/aurelionsol/aurelionsol_graves.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_graves: MatchupSummary = {
  champs: ["aurelionsol", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 그레이브즈 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 그레이브즈 E, R의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Graves's E and R [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Graves's E and R [[DASH]]."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
