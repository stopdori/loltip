// app/data/matchups/amumu/amumu_talon.ts
import type { MatchupSummary } from "../_types";

export const amumu_talon: MatchupSummary = {
  champs: ["amumu", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 탈론 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 탈론 Q, E의 [[DASH]]을 몸에 닿을 때까지 따라갈 수 있음.", 
        "R의 [[STUN]]로 탈론 Q, E의 [[DASH]]를 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Talon's Q and E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Talon's Q and E [[DASH]] until making contact.", "R [[STUN]] can interrupt Talon's Q and E [[DASH]]."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
