// app/data/matchups/amumu/amumu_camille.ts
import type { MatchupSummary } from "../_types";

export const amumu_camille: MatchupSummary = {
  champs: ["amumu", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 카밀 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 카밀 E의 [[DASH]]을 따라갈 수 있음. \n 단, 카밀 E의 대기 단계 일 때는 끊을 수 있음.", 
        "R의 [[STUN]]로 카밀 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 카밀 E의 [[STUN]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Camille's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Camille's E [[DASH]]. \n However, it can interrupt Camille's E during the waiting phase.", "R [[STUN]] can interrupt Camille's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Camille's E [[STUN]] and R [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
