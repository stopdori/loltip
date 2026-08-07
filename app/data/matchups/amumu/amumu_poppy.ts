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
      ko: ["Q의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 뽀삐 E의 [[DASH]]을 따라갈 수 있음. \n 단, 뽀삐 W([[AURA]])를 사용한 상태라면 아무무가 따라가다 [[AIRBORNE]]과 [[GROUNDED]] [[DEBUFF]] 당함.", 
        "R의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "Q, R의 [[STUN]]로 뽀삐 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 뽀삐 E의 [[KNOCKBACK]] [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Poppy's E [[DASH]]. \n However, if Poppy has W [[AURA]] active, Amumu will be hit by [[AIRBORNE]] and [[GROUNDED]] [[DEBUFF]] while following.", "R [[STUN]] can interrupt Poppy's E [[DASH]].", "Q and R [[STUN]] can interrupt Poppy's R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Poppy's E [[KNOCKBACK]] [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 아무무 Q(돌진 단계)의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.", "뽀삐 E와 아무무 Q가 부딪힌다면, 서로 데미지를 입고 CC가 유효하지만, 뽀삐가 아무무를 [[KNOCKBACK]]하고 벽에 닿는다면 추가로 [[STUN]]도 검.\n단, 뽀삐에게도 [[STUN]]은 남아있음.\n단, 뽀삐 W도 사용한 상태로 부딪힌다면 아무무는 [[GROUNDED]]도 걸림.",],
      en: ["Poppy's W can interrupt Amumu's Q (dash phase), apply [[GROUNDED]], and [[AIRBORNE]] him.", "If Poppy's E and Amumu's Q collide, both take damage and CCs apply, but if Poppy [[KNOCKBACK]]s Amumu into a wall, additional [[STUN]] is applied.\nHowever, [[STUN]] also remains on Poppy.\nNote: If Poppy has W active during the collision, Amumu is also hit by [[GROUNDED]]."],
    },
  },
};
