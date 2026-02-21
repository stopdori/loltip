// app/data/matchups/aatrox/aatrox_alistar.ts
import type { MatchupSummary } from "../_types";

export const aatrox_alistar: MatchupSummary = {
  champs: ["aatrox", "alistar"],
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 알리스타 W를 끊을 수 있음", "아트록스 W를 알리스타에게 맞히고 알리스타가 R을 사용하면 W의 [[TETHER]]은 남아있음"],
      en: ["None"],
    },
    alistar: {
      ko: ["알리스타 Q, W로 아트록스 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 아트록스 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 해제할 수 있음"],
      en: [],
    },
  },
};
