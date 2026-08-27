// app/data/matchups/cassiopeia/cassiopeia_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_tahmkench: MatchupSummary = {
  champs: ["cassiopeia", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]] [[BLINK]]을 끊을 수 있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]] [[BLINK]]."],
    },
    tahmkench: {
      ko: ["W는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
