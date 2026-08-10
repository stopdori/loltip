// app/data/matchups/aurora/aurora_vayne.ts
import type { MatchupSummary } from "../_types";

export const aurora_vayne: MatchupSummary = {
  champs: ["aurora", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 베인 E의 [[KNOCKBACK]], [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, 베인 E의 [[PROJECTILE]]를 맞기 바로 직전에 사용해야 함. \n 베인 E의 벽꿍으로 [[STUN]]이 걸려도 [[DASH]] 발동. 심지어 얇은벽은 [[WALL_HOP]]도 할 수 있음. \n 단, [[STUN]]은 남아있음.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 베인 E의 [[KNOCKBACK]], [[STUN]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Vayne's E [[KNOCKBACK]] and [[STUN]] and continue [[DASH]]. \n However, it must be used right before Vayne's E [[PROJECTILE]] hits. \n Even if [[STUN]]ned by Vayne's E wall slam, the [[DASH]] still activates — it can even [[WALL_HOP]] through a thin wall. \n However, the [[STUN]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Vayne's E [[KNOCKBACK]] and [[STUN]] and continue [[DASH]]."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
