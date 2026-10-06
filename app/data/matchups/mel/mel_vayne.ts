// app/data/matchups/mel/mel_vayne.ts
import type { MatchupSummary } from "../_types";

export const mel_vayne: MatchupSummary = {
  champs: ["mel", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 베인 평타(일반, W, Q, R [[EMPOWERED]]), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 W의 [[DEBUFF_STACK]]은 3중첩이 되면 발동.", 
        "E의 [[ROOT]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] can [[REFLECT]] Vayne's basic attacks (normal, W, Q, R [[EMPOWERED]]) and E [[PROJECTILE]]. [[EXIST]] \n However, a [[REFLECT]]ed W [[DEBUFF_STACK]] triggers at 3 stacks.", 
        "E [[ROOT]] cannot interrupt Vayne's Q (Tumble) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
