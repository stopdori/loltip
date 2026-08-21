// app/data/matchups/briar/briar_yuumi.ts
import type { MatchupSummary } from "../_types";

export const briar_yuumi: MatchupSummary = {
  champs: ["briar", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 유미 W의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 유미가 부착중이지 않을 때. \n 단, 유미 W의 [[DASH]]이 끊기면 W에 [[COOLDOWN]]이 생김.", 
        "R2의 [[HOMING]] [[DASH]]으로 유미 W의 [[DASH]]을 따라갈 수 있음. \n 단, 유미와 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Yuumi's W [[DASH]] and R [[SKILL_CHANNEL]]. \n However, only while Yuumi is not attached. \n However, if Yuumi's W [[DASH]] is interrupted, W goes on [[COOLDOWN]].",
        "R2 [[HOMING]] [[DASH]] can follow Yuumi's W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Yuumi."
      ],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
