// app/data/matchups/cassiopeia/cassiopeia_thresh.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_thresh: MatchupSummary = {
  champs: ["cassiopeia", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Thresh's Q2 and W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    thresh: {
      ko: ["Q2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, Q1, W는 사용할 수는 있음.",
        "[[TIP]]쓰레쉬 W의 랜턴 위치에 카시오페아 W를 사용해두면 [[GROUNDED]] 효과로 인해 \n 쓰레쉬의 아군이 랜턴으로 쓰레쉬에게 [[DASH]]할 수 없음."],
      en: ["Q2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, Q1 and W can still be cast.",
        "[[TIP]] Placing Cassiopeia's W on the spot where Thresh's W (lantern) sits \n uses the [[GROUNDED]] effect to prevent Thresh's allies from [[DASH]]ing to Thresh via the lantern."],
    },
  },
};
