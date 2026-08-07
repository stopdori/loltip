// app/data/matchups/amumu/amumu_elise.ts
import type { MatchupSummary } from "../_types";

export const amumu_elise: MatchupSummary = {
  champs: ["amumu", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 엘리스 거미폼 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 엘리스 인간폼 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Elise's Spider form Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Elise's Spider form Q [[DASH]].", "R [[STUN]] can interrupt Elise's Spider form Q [[DASH]].", "Q [[CC_BUFFER]] can ignore Elise's Human form E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    elise: {
      ko: [],
      en: [],
    },
  },
};
