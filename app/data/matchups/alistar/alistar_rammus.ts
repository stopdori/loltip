// app/data/matchups/alistar/alistar_rammus.ts
import type { MatchupSummary } from "../_types";

export const alistar_rammus: MatchupSummary = {
  champs: ["alistar", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, W는 대신 부딪혀주는 방법으로 끊는것. 데미지도 들어가지 않음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 람머스 Q의 [[SLOW]], E의 [[TAUNT]], R의 [[SLOW]]를 해제할 수 있음. \n 단, R의 지속[[SLOW]]는 해제해도 다시 걸릴 수 있음.",
        "알리스타 WQ 콤보를 람머스 Q 상태에 사용할 수 없음. \n WQ 콤보는 W로 도착하고 선입력 Q가 발동하는 메커니즘인데, 람머스 Q에 닿아 W가 도착하지 못해 Q가 발동하지 못하는 것."
      ],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Rammus's Q. \n However, W interrupts by colliding into Rammus instead, and no damage is dealt.", "Alistar's R [[CC_CLEANSE]] can cleanse Rammus's Q [[SLOW]], E [[TAUNT]], and R [[SLOW]]. \n However, R's persistent [[SLOW]] may reapply after being cleansed.", "Alistar cannot use the WQ combo against Rammus's Q. \n The WQ combo works by W arriving and then the pre-input Q activating — but W is stopped upon contact with Rammus's Q, preventing Q from triggering."],
    },
    rammus: {
      ko: ["람머스 Q와 알리스타 W가 부딪히면 람머스 Q는 유효 알리스타 W는 무효화 \n 그래서 알리스타는 람머스 Q에 WQ자체가 불가능"],
      en: ["When Rammus's Q and Alistar's W collide, Rammus's Q remains valid while Alistar's W is nullified \n Therefore, Alistar cannot use WQ against Rammus's Q"],
    },
  },
};
