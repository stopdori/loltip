// app/data/matchups/amumu/amumu_leblanc.ts
import type { MatchupSummary } from "../_types";

export const amumu_leblanc: MatchupSummary = {
  champs: ["amumu", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 르블랑 W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 르블랑 W를 끊을 수 있음.", "아무무 Q로 르블랑 E의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt LeBlanc's W, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt LeBlanc's W.", "Amumu's Q is affected by LeBlanc's E [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and [[ROOT]] remains active."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
