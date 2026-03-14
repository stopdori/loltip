// app/data/matchups/amumu/amumu_kaisa.ts
import type { MatchupSummary } from "../_types";

export const amumu_kaisa: MatchupSummary = {
  champs: ["amumu", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 카이사 R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 카이사 R을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kai'Sa's R, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Kai'Sa's R."],
    },
    kaisa: {
      ko: [],
      en: [],
    },
  },
};
