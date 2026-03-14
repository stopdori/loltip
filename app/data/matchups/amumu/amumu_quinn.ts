// app/data/matchups/amumu/amumu_quinn.ts
import type { MatchupSummary } from "../_types";

export const amumu_quinn: MatchupSummary = {
  champs: ["amumu", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 퀸 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 퀸 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 퀸 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 퀸 E의 [[KNOCKBACK]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Quinn's E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Quinn's E.", "Amumu's Q and R [[STUN]] can interrupt Quinn's R (channeling).", "Amumu's Q is affected by Quinn's E [[KNOCKBACK]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
