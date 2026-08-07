// app/data/matchups/amumu/amumu_renekton.ts
import type { MatchupSummary } from "../_types";

export const amumu_renekton: MatchupSummary = {
  champs: ["amumu", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 레넥톤 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 레넥톤 E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 레넥톤 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 레넥톤 W의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Renekton's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Renekton's E [[DASH]].", "R [[STUN]] can interrupt Renekton's E [[DASH]].", "Q [[CC_BUFFER]] can ignore Renekton's W [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
