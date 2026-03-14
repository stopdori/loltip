// app/data/matchups/amumu/amumu_tristana.ts
import type { MatchupSummary } from "../_types";

export const amumu_tristana: MatchupSummary = {
  champs: ["amumu", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 트타 W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 트타 W(점프 단계)를 끊을 수 있음.", "아무무 Q로 트타 R의 [[KNOCKBACK]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Tristana's W, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Tristana's W (jump phase).", "Amumu's Q is affected by Tristana's R [[KNOCKBACK]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
