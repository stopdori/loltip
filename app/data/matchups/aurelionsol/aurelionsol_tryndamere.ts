// app/data/matchups/aurelionsol/aurelionsol_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_tryndamere: MatchupSummary = {
  champs: ["aurelionsol", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 트린다미어 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Tryndamere's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Tryndamere's E [[DASH]]."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
