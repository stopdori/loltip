// app/data/matchups/amumu/amumu_zoe.ts
import type { MatchupSummary } from "../_types";

export const amumu_zoe: MatchupSummary = {
  champs: ["amumu", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 조이 R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 조이 R의 [[BLINK]]을 따라갈 수 있음. \n 단, 아무무가 조이와 몸이 닿으면 [[DASH]]을 멈춤.", 
        "Q로 조이 E의 [[SLEEP]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[SLEEP]]도 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Zoe's R [[BLINK]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Zoe's R [[BLINK]]. \n However, Amumu stops if he makes body contact with Zoe.", "Q is affected by Zoe's E [[SLEEP]], but can still move if the dash phase activates.\nHowever, damage is applied and [[SLEEP]] still applies."],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
