// app/data/matchups/cassiopeia/cassiopeia_rengar.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_rengar: MatchupSummary = {
  champs: ["cassiopeia", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Rengar's P and R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    rengar: {
      ko: ["P, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 [[DASH]]할 수 없음. \n 단, R은 [[GROUNDED]] 효과일 때 사용할 수는 있음.", "[[GROUNDED]] 효과를 받는동안 R의 [[DASH]]이 불가능 하지만 \n 근접 공격은 가능한데, 근접 공격 시 R의 [[AR_SHRED]] [[DEBUFF]] 효과는 없음. \n 단, P의 보라색 [[BUFF_STACK]]은 제공."],
      en: ["P and R cannot [[DASH]] while affected by Cassiopeia's W [[GROUNDED]]. \n However, R can still be cast while [[GROUNDED]].", "While affected by [[GROUNDED]], R's [[DASH]] is impossible, \n but the melee attack still goes out — that melee attack just doesn't apply R's [[AR_SHRED]] [[DEBUFF]]. \n However, it still grants P's purple [[BUFF_STACK]]."],
    },
  },
};
