// app/data/matchups/aurora/aurora_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const aurora_cassiopeia: MatchupSummary = {
  champs: ["aurora", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["W, E, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 카시오페아 W의 [[GROUNDED]], R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n단, [[STUN]]은 남아있음. \n 단, 카시오페아 W [[ZONE]]이 깔리기 전에 미리 사용해야 하고, [[ZONE]]을 벗어나지 않으면 [[GROUNDED]]는 남아있음."],
      en: ["W, E, and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].", "E (wind-up phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Cassiopeia's W [[GROUNDED]] and R [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies. \n However, it must be used before Cassiopeia's W [[ZONE]] is laid down, and the [[GROUNDED]] still applies if she doesn't leave the [[ZONE]]."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
