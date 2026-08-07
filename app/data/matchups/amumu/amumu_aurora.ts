// app/data/matchups/amumu/amumu_aurora.ts
import type { MatchupSummary } from "../_types";

export const amumu_aurora: MatchupSummary = {
  champs: ["amumu", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 오로라 W, E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 오로라 W, E, R의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Aurora's W, E and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Aurora's W, E and R [[DASH]].", "R [[STUN]] can interrupt Aurora's W and E [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 아무무 Q, R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
