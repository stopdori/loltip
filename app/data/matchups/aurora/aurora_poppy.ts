// app/data/matchups/aurora/aurora_poppy.ts
import type { MatchupSummary } from "../_types";

export const aurora_poppy: MatchupSummary = {
  champs: ["aurora", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 뽀삐 E의 [[KNOCKBACK]] [[STUN]]을 조건부로 무시하고 [[DASH]]할 수 있음. \n 단, 뽀삐 E의 [[DASH]]에 닿기 바로 직전에 사용해야 함. \n 뽀삐 E의 벽꿍으로 [[STUN]]이 걸려도 [[DASH]] 발동. 심지어 얇은벽은 [[WALL_HOP]]도 할 수 있음. \n 단, [[STUN]]은 남아있음", 
        "E(준비단계)의 [[CC_BUFFER]]로 뽀삐 R(짧게 누른)의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 뽀삐 W의 [[ANTI_DASH]] [[AURA]] / E의 [[KNOCKBACK]] [[STUN]] / R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, 뽀삐 W의 [[ANTI_DASH]]에 [[DASH]]이 막히지 않음 않음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can conditionally ignore Poppy's E [[KNOCKBACK]] and [[STUN]] and continue [[DASH]]. \n However, it must be used right before Poppy's E [[DASH]] makes contact. \n Even if [[STUN]]ned by Poppy's E wall slam, the [[DASH]] still activates — it can even [[WALL_HOP]] through a thin wall. \n However, the [[STUN]] still applies.",
        "E (wind-up phase) [[CC_BUFFER]] can ignore Poppy's R (tap) [[AIRBORNE]] and continue [[DASH]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Poppy's W [[ANTI_DASH]] [[AURA]] / E's [[KNOCKBACK]] and [[STUN]] / R's [[AIRBORNE]] and continue [[DASH]]. \n However, the [[DASH]] is not blocked by Poppy's W [[ANTI_DASH]]."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 오로라 R의 [[DASH]]을 [[UNSTOPPABLE]]로 인해 막을 수 없음.", "뽀삐 W의 [[ANTI_DASH]]로 오로라 W, E의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음. \n 단, [[GROUNDED]]에 걸렸을 때, 오로라의 R도 [[DASH]]여서 사용 할 수 없음."],
      en: ["Poppy's W [[ANTI_DASH]] cannot block Aurora's R [[DASH]] because of [[UNSTOPPABLE]].",
        "Poppy's W [[ANTI_DASH]] can block Aurora's W and E [[DASH]] and apply the [[GROUNDED]] debuff. \n However, while [[GROUNDED]], Aurora's R is also a [[DASH]], so it cannot be used either."],
    },
  },
};
