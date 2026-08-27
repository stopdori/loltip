// app/data/matchups/cassiopeia/cassiopeia_skarner.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_skarner: MatchupSummary = {
  champs: ["cassiopeia", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 스카너 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Skarner's E [[SKILL_CHANNEL]] [[DASH]]."],
    },
    skarner: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
