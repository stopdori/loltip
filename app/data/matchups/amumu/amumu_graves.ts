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
      ko: ["아무무 Q의 [[STUN]]로 그브 E, R를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 그브 E, R(후진 단계)을 끊을 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Graves's E and R, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Graves's E and R (backward dash phase)."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
