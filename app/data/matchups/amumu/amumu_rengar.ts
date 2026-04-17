// app/data/matchups/amumu/amumu_rengar.ts
import type { MatchupSummary } from "../_types";

export const amumu_rengar: MatchupSummary = {
  champs: ["amumu", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 렝가 P, R의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 렝가 [[EMPOWERED]] E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Rengar's P and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Rengar's P and R [[DASH]].", "Amumu's R [[STUN]] can interrupt Rengar's P and R [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Rengar's [[EMPOWERED]] E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
