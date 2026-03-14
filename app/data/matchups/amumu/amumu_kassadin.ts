// app/data/matchups/amumu/amumu_kassadin.ts
import type { MatchupSummary } from "../_types";

export const amumu_kassadin: MatchupSummary = {
  champs: ["amumu", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 카사딘 R를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 카사딘 R을 끊을 수 없음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kassadin's R, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] cannot interrupt Kassadin's R."],
    },
    kassadin: {
      ko: [],
      en: [],
    },
  },
};
