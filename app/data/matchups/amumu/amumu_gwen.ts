// app/data/matchups/amumu/amumu_gwen.ts
import type { MatchupSummary } from "../_types";

export const amumu_gwen: MatchupSummary = {
  champs: ["amumu", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 그웬 E의 [[DASH]]을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 그웬 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 그웬 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Gwen's E [[DASH]].", "R [[STUN]] can interrupt Gwen's E [[DASH]]."],
    },
    gwen: {
      ko: ["그웬 W로 아무무 Q, R을 범위 밖에서 맞지 않음"],
      en: ["Gwen's W can avoid Amumu's Q and R from outside the range"],
    },
  },
};
