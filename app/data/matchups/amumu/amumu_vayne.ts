// app/data/matchups/amumu/amumu_vayne.ts
import type { MatchupSummary } from "../_types";

export const amumu_vayne: MatchupSummary = {
  champs: ["amumu", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 베인 Q(구르기)를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 베인 Q(구르기)를 끊을 수 있음.", "아무무 Q로 베인 E의 [[KNOCKBACK]] [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Vayne's Q (roll), but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Vayne's Q (roll).", "Amumu's Q is affected by Vayne's E [[KNOCKBACK]] [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
