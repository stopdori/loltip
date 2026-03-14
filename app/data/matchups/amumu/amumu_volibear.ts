// app/data/matchups/amumu/amumu_volibear.ts
import type { MatchupSummary } from "../_types";

export const amumu_volibear: MatchupSummary = {
  champs: ["amumu", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 볼베 R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 Q, R의 [[STUN]]로 볼베 Q를 끊을 수 있음.\n단, 볼베 Q의 쿨타임은 돌지않음.", "아무무 Q로 볼베 Q의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Volibear's R, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's Q and R [[STUN]] can interrupt Volibear's Q.\nNote: Volibear's Q does not go on cooldown when interrupted.", "Amumu's Q is affected by Volibear's Q [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
