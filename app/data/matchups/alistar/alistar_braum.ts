// app/data/matchups/alistar/alistar_braum.ts
import type { MatchupSummary } from "../_types";

export const alistar_braum: MatchupSummary = {
  champs: ["alistar", "braum"],
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 브라움 W를 끊을 수 있음", "알리스타 E의 [[STUN]]로 브라움 E를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 브라움 P의 [[STUN]], Q의 [[SLOW]], R의 [[AIRBORNE]]을 해제할 수 있음"],
      en: [""],
    },
    braum: {
      ko: ["브라움 E로 알리스타의 평타, Q, W, E 를 [[DAMAGE_NULLIFY]] 할 수 있음"],
      en: [],
    },
  },
};
