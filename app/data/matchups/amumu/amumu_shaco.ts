// app/data/matchups/amumu/amumu_shaco.ts
import type { MatchupSummary } from "../_types";

export const amumu_shaco: MatchupSummary = {
  champs: ["amumu", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[HOMING]] [[DASH]]로 샤코 R(샤코가 [[CLONE]]과 멀어지면 [[CLONE]]이 샤코 옆으로 순간이동 하는것)을 따라갈 수 있음. \n 단, [[STUN]]은 R([[CLONE]])에게 남아있음."
      ],
      en: ["Q [[HOMING]] [[DASH]] can follow Shaco's R (when Shaco moves away from his clone, the clone teleports next to Shaco). \n However, the [[STUN]] remains on R ([[CLONE]])."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
