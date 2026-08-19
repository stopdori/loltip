// app/data/matchups/amumu/amumu_annie.ts
import type { MatchupSummary } from "../_types";

export const amumu_annie: MatchupSummary = {
  champs: ["amumu", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 애니 P의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, 아무무 Q의 [[CC_BUFFER]]도 무시하고 끊음.", 
        "Q의 [[HOMING]] [[DASH]]로 애니 R(애니가 티버와 멀어지면 티버가 애니 옆으로 순간이동 하는것)을 따라갈 수 있음. \n 단, [[STUN]]은 R(티버)에게 남아있음.",
      ],
      en: ["Q [[CC_BUFFER]] can ignore Annie's P [[STUN]] and continue [[DASH]]. \n However, Annie's P [[STUN]] can also override Amumu's Q [[CC_BUFFER]] and interrupt the [[DASH]].", "Q [[HOMING]] [[DASH]] can follow Annie's R (when Annie moves away from Tibbers, Tibbers teleports next to Annie). \n However, the [[STUN]] remains on R (Tibbers)."],
    },
    annie: {
      ko: ["P의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R로 [[SUMMON]]된 티버로 아무무 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Amumu's Q [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
