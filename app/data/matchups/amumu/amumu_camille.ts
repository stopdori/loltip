// app/data/matchups/amumu/amumu_camille.ts
import type { MatchupSummary } from "../_types";

export const amumu_camille: MatchupSummary = {
  champs: ["amumu", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 카밀 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 카밀 E로 벽에 대기했을 때만 아무무가 Q를 맞히면 끊을 수 있음.", "아무무 R의 [[STUN]]로 카밀 E(그렙, 대기, 돌진 단계)를 끊을 수 있음.", "아무무 Q로 카밀 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Camille's E, but can follow her.\nHowever, [[STUN]] remains active.\nNote: Amumu can only interrupt Camille's E when she is waiting at the wall.", "Amumu's R [[STUN]] can interrupt Camille's E (grapple, waiting, and dash phases).", "Amumu's Q is affected by Camille's E [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[STUN]] remains active."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
