// app/data/matchups/amumu/amumu_swain.ts
import type { MatchupSummary } from "../_types";

export const amumu_swain: MatchupSummary = {
  champs: ["amumu", "swain"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 스웨인 E1의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n이때, 아무무에게 걸린 스웨인 E1([[ROOT]])은 해제되고 스웨인은 아무무에게 E2를 사용 할 수 없음."],
      en: ["Amumu's Q is affected by Swain's E1 [[ROOT]], but can still move if the dash phase activates.\nAt this point, Swain's E1 [[ROOT]] on Amumu is lifted and Swain cannot use E2 on Amumu."],
    },
    swain: {
      ko: [],
      en: [],
    },
  },
};
