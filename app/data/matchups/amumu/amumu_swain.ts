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
      ko: ["아무무 Q의 [[CC_BUFFER]]로 스웨인 E1의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 이때, 아무무에게 E2를 사용 할 수 없음."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Swain's E1 [[ROOT]] and continue [[DASH]]. \n However, Swain cannot use E2 on Amumu at this point."],
    },
    swain: {
      ko: [],
      en: [],
    },
  },
};
