// app/data/matchups/amumu/amumu_syndra.ts
import type { MatchupSummary } from "../_types";

export const amumu_syndra: MatchupSummary = {
  champs: ["amumu", "syndra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 신드라 E의 [[KNOCKBACK]], QE의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 QE의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q is affected by Syndra's E [[KNOCKBACK]] and QE [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and QE's [[STUN]] remains active."],
    },
    syndra: {
      ko: [],
      en: [],
    },
  },
};
