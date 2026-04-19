// app/data/matchups/amumu/amumu_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const amumu_aurelionsol: MatchupSummary = {
  champs: ["amumu", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Aurelion Sol's R [[STUN]] and [[EMPOWERED]] R (Falling Star) [[AIRBORNE]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    aurelionsol: {
      ko: [],
      en: [],
    },
  },
};
