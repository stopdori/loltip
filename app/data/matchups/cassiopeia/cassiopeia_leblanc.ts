// app/data/matchups/cassiopeia/cassiopeia_leblanc.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_leblanc: MatchupSummary = {
  champs: ["cassiopeia", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    leblanc: {
      ko: ["W1은 [[DASH]], W2는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, W를 모방한 R1, R2도 동일."],
      en: ["W1 [[DASH]] and W2 [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n The same applies to R1 and R2 (Mimic), which copy W."],
    },
  },
};
