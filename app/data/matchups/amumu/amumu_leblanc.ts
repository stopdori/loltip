// app/data/matchups/amumu/amumu_leblanc.ts
import type { MatchupSummary } from "../_types";

export const amumu_leblanc: MatchupSummary = {
  champs: ["amumu", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 르블랑 W의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 르블랑 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow LeBlanc's W [[DASH]].", "Amumu's R [[STUN]] can interrupt LeBlanc's W [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore LeBlanc's E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    leblanc: {
      ko: [],
      en: [],
    },
  },
};
