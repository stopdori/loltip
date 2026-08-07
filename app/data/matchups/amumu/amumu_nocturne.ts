// app/data/matchups/amumu/amumu_nocturne.ts
import type { MatchupSummary } from "../_types";

export const amumu_nocturne: MatchupSummary = {
  champs: ["amumu", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 녹턴 R2의 [[UNSTOPPABLE]] [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 녹턴 R2의 [[DASH]]을 따라갈 수 있음.", 
        "Q의 [[CC_BUFFER]]로 녹턴 E의 [[FEAR]]를 무시하고 [[DASH]]할 수 있음. \n 단, [[FEAR]]는 남아있음."],
      en: ["Q and R [[STUN]] cannot interrupt Nocturne's R2 [[UNSTOPPABLE]] [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Nocturne's R2 [[DASH]].", "Q [[CC_BUFFER]] can ignore Nocturne's E [[FEAR]] and continue [[DASH]]. \n However, the [[FEAR]] still applies."],
    },
    nocturne: {
      ko: [],
      en: [],
    },
  },
};
