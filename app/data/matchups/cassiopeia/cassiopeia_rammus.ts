// app/data/matchups/cassiopeia/cassiopeia_rammus.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_rammus: MatchupSummary = {
  champs: ["cassiopeia", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["R [[STUN]] can interrupt Rammus's Q [[TRANSFORM]]."],
    },
    rammus: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
