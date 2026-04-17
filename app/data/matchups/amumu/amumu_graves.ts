// app/data/matchups/amumu/amumu_graves.ts
import type { MatchupSummary } from "../_types";

export const amumu_graves: MatchupSummary = {
  champs: ["amumu", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 그레이브즈(그브) E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 그브 E, R의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 그브 E, R의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Graves's E and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Graves's E and R [[DASH]].", "Amumu's R [[STUN]] can interrupt Graves's E and R [[DASH]]."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
