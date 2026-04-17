// app/data/matchups/amumu/amumu_sion.ts
import type { MatchupSummary } from "../_types";

export const amumu_sion: MatchupSummary = {
  champs: ["amumu", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 사이온 R의 [[MOBILITY]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 사이온 R을 따라갈 수 있음. \n 단, 사이온과의 거리가 너무 멀어지면 아무무가 [[DASH]]을 멈춤.", 
        "아무무 Q, R의 [[STUN]]로 사이온 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "아무무 Q로 사이온 Q, R의 [[AIRBORNE]] [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Sion's R [[MOBILITY]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Sion's R. \n However, if Sion moves too far away, Amumu's [[DASH]] stops.", "Amumu's Q and R [[STUN]] can interrupt Sion's Q [[SKILL_CHANNEL]].", "Amumu's Q can ignore Sion's Q and R [[AIRBORNE]] [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
