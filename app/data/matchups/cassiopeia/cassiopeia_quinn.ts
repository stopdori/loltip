// app/data/matchups/cassiopeia/cassiopeia_quinn.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_quinn: MatchupSummary = {
  champs: ["cassiopeia", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 퀸 R의 [[TRANSFORM]]을 해제시킬 수 있음.",
        "R의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can cancel Quinn's R [[TRANSFORM]].",
        "R [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    quinn: {
      ko: ["E는 [[DASH]], R은 이동기 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, [[SKILL_CHANNEL]]에 돌입한 R은 끊을 수 없음."],
      en: ["E [[DASH]] / R (Mobility) cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, R cannot be interrupted once it has entered [[SKILL_CHANNEL]]."],
    },
  },
};
