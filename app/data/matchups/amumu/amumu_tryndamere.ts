// app/data/matchups/amumu/amumu_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const amumu_tryndamere: MatchupSummary = {
  champs: ["amumu", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 트린 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 트린다미어 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Tryndamere's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Tryndamere's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Tryndamere's E [[DASH]]."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
