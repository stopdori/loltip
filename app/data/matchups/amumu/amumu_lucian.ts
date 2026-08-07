// app/data/matchups/amumu/amumu_lucian.ts
import type { MatchupSummary } from "../_types";

export const amumu_lucian: MatchupSummary = {
  champs: ["amumu", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 루시안 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 루시안 E의 [[DASH]]을 끊을 수 있음.", 
        "Q, R의 [[STUN]]로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Lucian's E [[DASH]].", "R [[STUN]] can interrupt Lucian's E [[DASH]].", "Q and R [[STUN]] can interrupt Lucian's R [[SKILL_CHANNEL]]."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
