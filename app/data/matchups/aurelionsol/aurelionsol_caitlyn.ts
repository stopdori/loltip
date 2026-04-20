// app/data/matchups/aurelionsol/aurelionsol_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_caitlyn: MatchupSummary = {
  champs: ["aurelionsol", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 있음.", 
      "아우렐리온 솔 R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Caitlyn's E [[DASH]].",
        "Aurelion Sol's R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Caitlyn's R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
