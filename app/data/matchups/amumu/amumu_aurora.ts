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
      ko: ["아무무 Q의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 오로라 W, E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Aurora's W and E [[DASH]].", "Amumu's R [[STUN]] can interrupt Aurora's W and E [[DASH]]."],
    },
    aurora: {
      ko: [],
      en: [],
    },
  },
};
