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
      ko: ["R의 [[STUN]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 있음.", 
      "R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Caitlyn's E [[DASH]].",
        "R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Caitlyn's R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Aurelion Sol's Q [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Aurelion Sol's W [[SKILL_CHANNEL]] [[DASH]]."],
    },
  },
};
