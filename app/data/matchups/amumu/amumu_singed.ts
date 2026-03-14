// app/data/matchups/amumu/amumu_singed.ts
import type { MatchupSummary } from "../_types";

export const amumu_singed: MatchupSummary = {
  champs: ["amumu", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 신지드 E의 [[KNOCKBACK]], WE의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, E의 데미지는 유효하고 W의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q is affected by Singed's E [[KNOCKBACK]] and WE [[ROOT]], but can still move if the dash phase activates.\nHowever, E's damage is applied and W's [[ROOT]] remains active."],
    },
    singed: {
      ko: [],
      en: [],
    },
  },
};
