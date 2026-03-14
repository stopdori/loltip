// app/data/matchups/amumu/amumu_evelynn.ts
import type { MatchupSummary } from "../_types";

export const amumu_evelynn: MatchupSummary = {
  champs: ["amumu", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 이블린 E(돌진)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 이블린 E(돌진)를 끊을 수 있음.", "아무무 Q로 이블린 W의 [[CHARM]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[CHARM]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Evelynn's E (dash), but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Evelynn's E (dash).", "Amumu's Q is affected by Evelynn's W [[CHARM]], but can still move if the dash phase activates.\nHowever, damage is applied and [[CHARM]] remains active."],
    },
    evelynn: {
      ko: [],
      en: [],
    },
  },
};
