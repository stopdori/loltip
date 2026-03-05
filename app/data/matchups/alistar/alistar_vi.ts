// app/data/matchups/alistar/alistar_vi.ts
import type { MatchupSummary } from "../_types";

export const alistar_vi: MatchupSummary = {
  champs: ["alistar", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W, E로 바이 Q(충전)를 끊을 수 있음\n알리스타 Q, W로 바이 Q(돌진)를 끊을 수 있음", "알리스타 E의 [[STUN]]로 바이 Q(돌진)를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 바이 Q의 [[STUN]], R의 [[AIRBORNE]] [[STUN]]을 해제할 수 있음"],
      en: ["Alistar's Q, W, and E can interrupt Vi's Q(충전)를 끊을 수 있음\\\\n알리스타 Q, W로 바이 Q(돌진)", "Alistar's E [[STUN]] cannot interrupt Vi's Q(돌진). However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Vi's Q [[STUN]], R [[AIRBORNE]] [[STUN]]"],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
