// app/data/matchups/amumu/amumu_sona.ts
import type { MatchupSummary } from "../_types";

export const amumu_sona: MatchupSummary = {
  champs: ["amumu", "sona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 소나 R의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q is affected by Sona's R [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    sona: {
      ko: [],
      en: [],
    },
  },
};
