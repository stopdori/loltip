// app/data/matchups/amumu/amumu_lillia.ts
import type { MatchupSummary } from "../_types";

export const amumu_lillia: MatchupSummary = {
  champs: ["amumu", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 릴리아 W의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 릴리아 W의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 릴리아 R의 [[SLEEP]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SLEEP]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Lillia's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Lillia's W [[DASH]].", "Amumu's R [[STUN]] can interrupt Lillia's W [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Lillia's R [[SLEEP]] and continue [[DASH]]. \n However, the [[SLEEP]] still applies."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
