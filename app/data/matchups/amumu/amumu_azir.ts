// app/data/matchups/amumu/amumu_azir.ts
import type { MatchupSummary } from "../_types";

export const amumu_azir: MatchupSummary = {
  champs: ["amumu", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 아지르 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 아지르 R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Azir's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Azir's E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Azir's R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    azir: {
      ko: [],
      en: [],
    },
  },
};
