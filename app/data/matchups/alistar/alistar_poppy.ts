// app/data/matchups/alistar/alistar_poppy.ts
import type { MatchupSummary } from "../_types";

export const alistar_poppy: MatchupSummary = {
  champs: ["alistar", "poppy"],
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W로 뽀삐 E를 끊을 수 있음", "알리스타 E의 [[STUN]]로 뽀삐 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 뽀삐 Q의 [[SLOW]], W의 [[STUN]] [[AIRBORNE]] [[GROUNDED]], E의 [[STUN]], R의 [[AIRBORNE]]을 해제할 수 있음\n단, 길게 차징한 뽀삐 R은 해제해도 아무것도 할 수 없음"],
      en: [""],
    },
    poppy: {
      ko: ["뽀삐 W로 알리스타 W를 [[ANTI_DASH]] 할 수 있음","뽀삐 E와 알리스타 W가 부딪히면 알리스타 W가 무효화\n뽀삐 E를 알리스타에게 사용했을 때 알리스타 Q를 타이밍맞춰 사용하면, 뽀삐 E는 유효하고 알리스타 Q도 유효함\n단, 뽀삐에게 [[AIRBORNE]] 모션이 없지만 CC게이지에 공중에뜸 으로 유효함"],
      en: [],
    },
  },
};
