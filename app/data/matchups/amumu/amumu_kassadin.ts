// app/data/matchups/amumu/amumu_kassadin.ts
import type { MatchupSummary } from "../_types";

export const amumu_kassadin: MatchupSummary = {
  champs: ["amumu", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 카사딘 R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 카사딘 R의 [[BLINK]]을 따라갈 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kassadin's R [[BLINK]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kassadin's R [[BLINK]]."],
    },
    kassadin: {
      ko: [],
      en: [],
    },
  },
};
