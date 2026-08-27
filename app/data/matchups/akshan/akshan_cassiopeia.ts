// app/data/matchups/akshan/akshan_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const akshan_cassiopeia: MatchupSummary = {
  champs: ["akshan", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 아크샨 E의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Akshan's E [[SKILL_CHANNEL]] [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
  },
};
