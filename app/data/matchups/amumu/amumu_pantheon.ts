// app/data/matchups/amumu/amumu_pantheon.ts
import type { MatchupSummary } from "../_types";

export const amumu_pantheon: MatchupSummary = {
  champs: ["amumu", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 판테온 W의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 있음.", 
        "Q, R의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 판테온 W의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Pantheon's W [[DASH]].", "R [[STUN]] can interrupt Pantheon's W [[DASH]].", "Q and R [[STUN]] can interrupt Pantheon's R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Pantheon's W [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
