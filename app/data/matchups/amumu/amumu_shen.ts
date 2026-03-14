// app/data/matchups/amumu/amumu_shen.ts
import type { MatchupSummary } from "../_types";

export const amumu_shen: MatchupSummary = {
  champs: ["amumu", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 쉔 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 쉔 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 쉔 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 쉔 E의 [[TAUNT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[TAUNT]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Shen's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Shen's E.", "Amumu's Q and R [[STUN]] can interrupt Shen's R (channeling).", "Amumu's Q is affected by Shen's E [[TAUNT]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[TAUNT]] remains active."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
