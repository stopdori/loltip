// app/data/matchups/cassiopeia/cassiopeia_warwick.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_warwick: MatchupSummary = {
  champs: ["cassiopeia", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Warwick's R [[SKILL_CHANNEL]]."],
    },
    warwick: {
      ko: ["Q(길게 누른), R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, Q(짧게 누른)는 사용할 수 있음."],
      en: ["Q (long press) and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, Q (short press) can still be used."],
    },
  },
};
