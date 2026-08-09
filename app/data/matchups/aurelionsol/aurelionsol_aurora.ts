// app/data/matchups/aurelionsol/aurelionsol_aurora.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_aurora: MatchupSummary = {
  champs: ["aurelionsol", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Aurora's W and E [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Aurora's E (ready phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Aurelion Sol's R [[STUN]] and [[EMPOWERED]] R [[AIRBORNE]] and continue [[DASH]]ing. \n However, the [[STUN]] still applies."],
    },
  },
};
