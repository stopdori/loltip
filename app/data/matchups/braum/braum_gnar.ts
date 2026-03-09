// app/data/matchups/braum/braum_gnar.ts
import type { MatchupSummary } from "../_types";

export const braum_gnar: MatchupSummary = {
  champs: ["braum", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 나르 미니폼 평타, Q, E / 메가폼 평타, Q, W, E, R 을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 나르 P는 브라움에게 발동될 때 평타 데미지를 무효화하고 P의 데미지는 감소 없이 적용.\n나르 메가폼 R은 데미지가 들어오는 시점에 나르쪽을 바라봐야 적용", "브라움 E(방패)로 나르 미니폼 평타, Q / 메가폼 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 나르 미니폼 Q(부메랑)는 방패에 닿으면 투사체 삭제.\n단, 메가폼 Q의 [[SLOW]]는 남아있음.", "브라움 P의 [[STUN]]로 나르 미니폼 E / 메가폼 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 나르 미니폼 E / 메가폼 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Gnar's mini form basic attacks, Q, E / mega form basic attacks, Q, W, E, and R.\nWhen Gnar's P activates on Braum, the basic attack damage is nullified but P's damage is applied without reduction.\nGnar's mega form R must be blocked while facing Gnar at the time the damage lands.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Gnar's mini form basic attacks, Q / mega form Q.\nHowever, Gnar's mini form Q (boomerang) projectile is deleted upon hitting the shield.\nHowever, mega form Q [[SLOW]] still applies.", "Braum's P [[STUN]] cannot interrupt Gnar's mini form E / mega form E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Gnar's mini form E / mega form E"],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
