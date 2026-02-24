// app/data/matchups/aatrox/aatrox_alistar.ts
import type { MatchupSummary } from "../_types";

export const aatrox_alistar: MatchupSummary = {
  champs: ["aatrox", "alistar"],
  summary: {
    ko: ["알리스타 R은 아트록스 W 사슬을 해제하지 못함"],
    en: ["Alistar's R does not cleanse Aatrox's W chain."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 알리스타 W를 끊을 수 있음", "아트록스 W를 알리스타에게 맞히고 알리스타가 R을 사용하면 W의 [[TETHER]]은 남아있음"],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Alistar's W", "If Alistar uses his R after being hit by Aatrox's W, the W's [[TETHER]] remains"],
    },
    alistar: {
      ko: ["알리스타 Q, W로 아트록스 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 아트록스 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Aatrox's E", "Alistar's E [[STUN]] cannot interrupt Aatrox's E, but the [[STUN]] remains", "Alistar's R [[CC_CLEANSE]] can remove Aatrox's Q [[AIRBORNE]] and W [[GRAB]]"],
    },
  },
};
