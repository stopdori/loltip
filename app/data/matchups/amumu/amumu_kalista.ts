// app/data/matchups/amumu/amumu_kalista.ts
import type { MatchupSummary } from "../_types";

export const amumu_kalista: MatchupSummary = {
  champs: ["amumu", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 칼리스타 P의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 있음. \n 단, 칼리스타 R의 [[DASH]]는 끊을 수 없음. (실험 완료)"],
      en: ["Q [[STUN]] cannot interrupt Kalista's P [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kalista's P [[DASH]].", "R [[STUN]] can interrupt Kalista's P [[DASH]]. \n However, it cannot interrupt Kalista's R [[DASH]]. (verified)"],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
