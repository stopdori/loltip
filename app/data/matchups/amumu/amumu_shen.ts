// app/data/matchups/amumu/amumu_shen.ts
import type { MatchupSummary } from "../_types";

export const amumu_shen: MatchupSummary = {
  champs: ["amumu", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 쉔 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 쉔 E의 [[TAUNT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[TAUNT]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Shen's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Shen's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Shen's E [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Shen's R [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Shen's E [[TAUNT]] and continue [[DASH]]. \n However, the [[TAUNT]] still applies."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
