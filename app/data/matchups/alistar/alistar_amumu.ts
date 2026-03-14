// app/data/matchups/alistar/alistar_amumu.ts
import type { MatchupSummary } from "../_types";

export const alistar_amumu: MatchupSummary = {
  champs: ["alistar", "amumu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 아무무 Q를 끊을 수 있음", "알리스타 E의 [[STUN]]로 아무무 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 아무무 Q, R의 [[STUN]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Amumu's Q", "Alistar's E [[STUN]] cannot interrupt Amumu's Q. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Amumu's Q and R [[STUN]]"],
    },
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 알리스타 W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 알리스타 W를 끊을 수 있음.", "아무무 Q로 알리스타 Q, W의 [[AIRBORNE]], E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 알리스타 Q, W, E의 데미지는 유효하고, E의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Alistar's W, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Alistar's W.", "Amumu's Q is affected by Alistar's Q and W [[AIRBORNE]] and E [[STUN]], but can still move if the dash phase activates.\nHowever, damage from Alistar's Q, W, and E is applied, and E's [[STUN]] remains active."],
    },
  },
};
