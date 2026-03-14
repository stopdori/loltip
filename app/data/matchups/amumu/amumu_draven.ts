// app/data/matchups/amumu/amumu_draven.ts
import type { MatchupSummary } from "../_types";

export const amumu_draven: MatchupSummary = {
  champs: ["amumu", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 드레이븐 E의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[SLOW]]도 남아있음."],
      en: ["Amumu's Q is affected by Draven's E [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[SLOW]] remains active."],
    },
    draven: {
      ko: [],
      en: [],
    },
  },
};
