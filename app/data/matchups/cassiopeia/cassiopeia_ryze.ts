// app/data/matchups/cassiopeia/cassiopeia_ryze.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ryze: MatchupSummary = {
  champs: ["cassiopeia", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 라이즈 R의 [[SKILL_CHANNEL]] [[BLINK]]을 끊을 수 있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Ryze's R [[SKILL_CHANNEL]] [[BLINK]]."],
    },
    ryze: {
      ko: ["R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
