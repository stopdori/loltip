// app/data/matchups/cassiopeia/cassiopeia_talon.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_talon: MatchupSummary = {
  champs: ["cassiopeia", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 탈론 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Talon's Q and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    talon: {
      ko: ["Q ([[DASH]] 형태), E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, 근접 Q는 사용할 수 있음."],
      en: ["Q (dash form) and E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, melee Q can still be used."],
    },
  },
};
