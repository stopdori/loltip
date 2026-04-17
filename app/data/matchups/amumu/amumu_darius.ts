// app/data/matchups/amumu/amumu_darius.ts
import type { MatchupSummary } from "../_types";

export const amumu_darius: MatchupSummary = {
  champs: ["amumu", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 다리우스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 다리우스 R의 쿨타임은 소모되지 않음.", 
        "아무무 Q의 [[CC_BUFFER]]로 다리우스 E의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Darius's R [[SKILL_CHANNEL]]. \n However, Darius's R does not go on cooldown when interrupted.", "Amumu's Q [[CC_BUFFER]] can ignore Darius's E [[GRAB]] and continue [[DASH]]."],
    },
    darius: {
      ko: [],
      en: [],
    },
  },
};
