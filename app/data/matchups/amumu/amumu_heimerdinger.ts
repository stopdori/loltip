// app/data/matchups/amumu/amumu_heimerdinger.ts
import type { MatchupSummary } from "../_types";

export const amumu_heimerdinger: MatchupSummary = {
  champs: ["amumu", "heimerdinger"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 하딩 RW를 끊을 수 없음.", "아무무 Q로 하딩 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Heimerdinger's RW.", "Amumu's Q is affected by Heimerdinger's E [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[STUN]] remains active."],
    },
    heimerdinger: {
      ko: [],
      en: [],
    },
  },
};
