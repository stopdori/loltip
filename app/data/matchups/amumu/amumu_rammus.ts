// app/data/matchups/amumu/amumu_rammus.ts
import type { MatchupSummary } from "../_types";

export const amumu_rammus: MatchupSummary = {
  champs: ["amumu", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 람머스 R의 [[CC_IMMUNE]] [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 람머스 R의 [[DASH]]을 따라갈 수 있음.", 
        "Q, R의 [[STUN]]로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "Q의 [[CC_BUFFER]]로 람머스 E의 [[TAUNT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[TAUNT]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Rammus's R [[CC_IMMUNE]] [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Rammus's R [[DASH]].", "Q and R [[STUN]] can interrupt Rammus's Q [[TRANSFORM]].", "Q [[CC_BUFFER]] can ignore Rammus's E [[TAUNT]] and continue [[DASH]]. \n However, the [[TAUNT]] still applies."],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
