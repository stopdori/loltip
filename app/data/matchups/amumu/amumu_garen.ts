// app/data/matchups/amumu/amumu_garen.ts
import type { MatchupSummary } from "../_types";

export const amumu_garen: MatchupSummary = {
  champs: ["amumu", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 가렌 E(채널링)를 끊을 수 없음.", "아무무 Q로 가렌 Q의 [[SILENCE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[SILENCE]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Garen's E (channeling).", "Amumu's Q is affected by Garen's Q [[SILENCE]], but can still move if the dash phase activates.\nHowever, damage is applied and [[SILENCE]] remains active."],
    },
    garen: {
      ko: [],
      en: [],
    },
  },
};
