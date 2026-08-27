// app/data/matchups/cassiopeia/cassiopeia_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_twistedfate: MatchupSummary = {
  champs: ["cassiopeia", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 트위스티드 페이트 R2의 [[SKILL_CHANNEL]] [[BLINK]]을 끊을 수 있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]] [[BLINK]]."],
    },
    twistedfate: {
      ko: ["R2는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R2 [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
