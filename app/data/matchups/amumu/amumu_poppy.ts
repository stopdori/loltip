// app/data/matchups/amumu/amumu_poppy.ts
import type { MatchupSummary } from "../_types";

export const amumu_poppy: MatchupSummary = {
  champs: ["amumu", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 뽀삐 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단 뽀삐 W를 사용한 상태라면 아무무가 따라가다 [[AIRBORNE]] 당함.", "아무무 R의 [[STUN]]로 뽀삐 E를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 뽀삐 R(시전 집중)을 끊을 수 있음.", "아무무 Q로 뽀삐 E의 [[KNOCKBACK]] [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Poppy's E, but can follow her.\nHowever, [[STUN]] remains active.\nNote: If Poppy has W active, Amumu will be hit by [[AIRBORNE]] while following.", "Amumu's R [[STUN]] can interrupt Poppy's E.", "Amumu's Q and R [[STUN]] can interrupt Poppy's R (channeling).", "Amumu's Q is affected by Poppy's E [[KNOCKBACK]] [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    poppy: {
      ko: ["뽀삐 W로 아무무 Q(돌진 단계)을 끊고, [[GROUNDED]] 상태로 만들고 [[AIRBORNE]] 할 수 있음.", "뽀삐 E와 아무무 Q가 부딪힌다면, 서로 데미지를 입고 CC가 유효하지만, 뽀삐가 아무무를 [[KNOCKBACK]]하고 벽에 닿는다면 추가로 [[STUN]]도 검.\n단, 뽀삐에게도 [[STUN]]은 남아있음.\n단, 뽀삐 W도 사용한 상태로 부딪힌다면 아무무는 [[GROUNDED]]도 걸림.",],
      en: ["Poppy's W can interrupt Amumu's Q (dash phase), apply [[GROUNDED]], and [[AIRBORNE]] him.", "If Poppy's E and Amumu's Q collide, both take damage and CCs apply, but if Poppy [[KNOCKBACK]]s Amumu into a wall, additional [[STUN]] is applied.\nHowever, [[STUN]] also remains on Poppy.\nNote: If Poppy has W active during the collision, Amumu is also hit by [[GROUNDED]]."],
    },
  },
};
