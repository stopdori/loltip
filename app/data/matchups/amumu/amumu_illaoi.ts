// app/data/matchups/amumu/amumu_illaoi.ts
import type { MatchupSummary } from "../_types";

export const amumu_illaoi: MatchupSummary = {
  champs: ["amumu", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 일라오이 W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 일라오이 W를 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Illaoi's W, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Illaoi's W."],
    },
    illaoi: {
      ko: [],
      en: [],
    },
  },
};
