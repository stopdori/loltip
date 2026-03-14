// app/data/matchups/amumu/amumu_milio.ts
import type { MatchupSummary } from "../_types";

export const amumu_milio: MatchupSummary = {
  champs: ["amumu", "milio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 밀리오 Q의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 Q의 [[SLOW]]도 남아있음."],
      en: ["Amumu's Q is affected by Milio's Q [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and Q's [[SLOW]] remains active."],
    },
    milio: {
      ko: [],
      en: [],
    },
  },
};
