// app/data/matchups/cassiopeia/cassiopeia_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_fiddlesticks: MatchupSummary = {
  champs: ["cassiopeia", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 피들스틱 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "W의 [[GROUNDED]], R의 [[STUN]]으로 피들스틱 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Fiddlesticks' W [[SKILL_CHANNEL]].",
        "W [[GROUNDED]] and R [[STUN]] can interrupt Fiddlesticks' R [[SKILL_CHANNEL]]."],
    },
    fiddlesticks: {
      ko: ["R 스킬은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
