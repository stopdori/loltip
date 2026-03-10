// app/data/matchups/braum/braum_ksante.ts
import type { MatchupSummary } from "../_types";

export const braum_ksante: MatchupSummary = {
  champs: ["braum", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 크산테 일반폼 평타, Q, Q3, W, R / 변신폼 Q, Q3를 막을([[DAMAGE_NULLIFY]]) 수 있음. \n단, 크산테 R은 브라움 E(방패)를 크산테가 사용한 반대방향을 바라봐야 적용\n단, 크산테 일반폼 Q / 변신폼 Q의 [[SLOW]], 일반폼 Q3 / 변신폼 Q3의 [[STUN]] [[AIRBORNE]], 일반폼 W의 [[STUN]] [[KNOCKBACK]]은 남아있음.\n단, 크산테 변신폼 W는 브라움 E(방패)로 막을 수 없음.", "브라움 E(방패)로 크산테 일반폼 Q3 변신폼 Q3를 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "브라움 P의 [[STUN]]로 크산테 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 크산테 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] K'Sante's base form basic attacks, Q, Q3, W and R, and alt form Q and Q3.\nHowever, R only applies when facing the opposite direction from where K'Sante used it.\nHowever, base/alt form Q [[SLOW]], base/alt form Q3 [[STUN]] and [[AIRBORNE]], and base form W [[STUN]] and [[KNOCKBACK]] still apply.\nHowever, K'Sante's alt form W cannot be blocked by Braum's E(Shield).", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] K'Sante's base form Q3 and alt form Q3.", "Braum's P [[STUN]] cannot interrupt K'Sante's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt K'Sante's E."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
