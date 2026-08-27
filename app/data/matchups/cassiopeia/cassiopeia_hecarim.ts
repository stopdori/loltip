// app/data/matchups/cassiopeia/cassiopeia_hecarim.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_hecarim: MatchupSummary = {
  champs: ["cassiopeia", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    hecarim: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, 헤카림 E는 [[MS_UP]] 버프이고, 조건부 [[DASH]]으로 사용할 수 있음."],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, Hecarim's E is an [[MS_UP]] buff and a conditional [[DASH]], so it can still be used."],
    },
  },
};
