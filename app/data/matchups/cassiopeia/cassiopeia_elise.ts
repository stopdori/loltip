// app/data/matchups/cassiopeia/cassiopeia_elise.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_elise: MatchupSummary = {
  champs: ["cassiopeia", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Elise's Spider Form Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    elise: {
      ko: ["거미폼 Q는 [[DASH]], E는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Spider Form Q [[DASH]] and E [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
