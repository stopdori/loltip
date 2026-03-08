// app/data/matchups/azir/azir_braum.ts
import type { MatchupSummary } from "../_types";

export const azir_braum: MatchupSummary = {
  champs: ["azir", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 아지르 평타, Q, W(평타), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, Q는 가로막힌 모든 병사의 데미지를 무효화", "브라움 E(방패)로 아지르의 Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, R의 병사는 사라지지 않음\n아지르 평타는 투사체가 아니여서 [[INTERCEPT_PROJECTILE]] 수 없음", "브라움 E(방패)를 아지르 R이 다가오는 방향으로 들면 [[INTERCEPT_PROJECTILE]] 하는데, 이때 브라움은 밀려나지 않고 병사들은 사라지지 않으며 이동을 멈춤", "브라움 P의 [[STUN]]로 아지르 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아지르 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Azir's basic attacks, Q, W(auto), E and R.\nFor Q, all soldiers blocked by the shield have their damage nullified.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Azir's Q and R. However, R's soldiers are not destroyed.\nAzir's basic attacks are not projectiles, so they cannot be [[INTERCEPT_PROJECTILE]].", "If Braum holds E toward the direction Azir's R is coming from, it [[INTERCEPT_PROJECTILE]]; in this case, Braum is not pushed back, soldiers are not destroyed, and they stop moving.", "Braum's P [[STUN]] cannot interrupt Azir's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Azir's E."],
    },
  },
};
