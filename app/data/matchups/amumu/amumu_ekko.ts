// app/data/matchups/amumu/amumu_ekko.ts
import type { MatchupSummary } from "../_types";

export const amumu_ekko: MatchupSummary = {
  champs: ["amumu", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 에코 E(구르기)의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 에코 E의 [[DASH]], [[BLINK]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 에코 W의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Ekko's E [[DASH]] and [[BLINK]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ekko's E [[DASH]] and [[BLINK]].", "R [[STUN]] can interrupt Ekko's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Ekko's W [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
