// app/data/matchups/amumu/amumu_irelia.ts
import type { MatchupSummary } from "../_types";

export const amumu_irelia: MatchupSummary = {
  champs: ["amumu", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 이렐리아 W, E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 이렐리아 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 이렐리아 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Irelia's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Irelia's W and E [[DASH]].", "R [[STUN]] can interrupt Irelia's Q [[DASH]].", "Q [[CC_BUFFER]] can ignore Irelia's E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
