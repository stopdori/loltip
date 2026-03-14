// app/data/matchups/amumu/amumu_seraphine.ts
import type { MatchupSummary } from "../_types";

export const amumu_seraphine: MatchupSummary = {
  champs: ["amumu", "seraphine"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 세라핀 R(시전 집중)을 끊을 수 없음.", "아무무 Q로 세라핀 E의 [[ROOT]] [[STUN]], R의 [[CHARM]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[ROOT]] [[STUN]], R의 [[CHARM]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Seraphine's R (channeling).", "Amumu's Q is affected by Seraphine's E [[ROOT]] [[STUN]] and R [[CHARM]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[ROOT]] [[STUN]] and R's [[CHARM]] remain active."],
    },
    seraphine: {
      ko: [],
      en: [],
    },
  },
};
