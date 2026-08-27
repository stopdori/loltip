// app/data/matchups/cassiopeia/cassiopeia_sion.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_sion: MatchupSummary = {
  champs: ["cassiopeia", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 사이온 Q의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Sion's Q [[SKILL_CHARGED]]."],
    },
    sion: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
