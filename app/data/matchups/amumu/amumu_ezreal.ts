// app/data/matchups/amumu/amumu_ezreal.ts
import type { MatchupSummary } from "../_types";

export const amumu_ezreal: MatchupSummary = {
  champs: ["amumu", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 이즈리얼 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 이즈리얼 E를 끊을 수 없음.", "아무무 Q, R의 [[STUN]]로 이즈리얼 R(시전 집중)을 끊을 수 없음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Ezreal's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] cannot interrupt Ezreal's E.", "Amumu's Q and R [[STUN]] cannot interrupt Ezreal's R (channeling)."],
    },
    ezreal: {
      ko: [],
      en: [],
    },
  },
};
