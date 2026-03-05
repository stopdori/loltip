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
      ko: ["브라움 E로 아지르 평타, Q, W, E, R을 [[DAMAGE_NULLIFY]] 할 수 있음. (평타 불가) \n단, Q의 경우 가로막힌 모든 병사의 데미지를 무효화", "브라움 E로 아지르의 Q, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, 병사는 사라지지 않음\n아지르 평타는 투사체가 아니여서 [[INTERCEPT_PROJECTILE]] 수 없음", "브라움 E를 아지르 R이 다가오는 방향으로 들면 [[INTERCEPT_PROJECTILE]] 하는데, 방패에 막힐 때 브라움은 밀려나지 않고 병사들은 이동을 멈춤"],
      en: ["Braum's E can [[DAMAGE_NULLIFY]] against Azir's 평타, Q, W, E and R\\nFor Q, all soldiers blocked by the shield have their damage nullified", "Braum's E can [[INTERCEPT_PROJECTILE]] Azir's Q, E and R. However, soldiers are not destroyed\\nAzir's auto attacks are not projectiles, so they cannot be [[INTERCEPT_PROJECTILE]]", "If Braum holds E toward the direction Azir's R is coming from, it [[INTERCEPT_PROJECTILE]]; when blocked by the shield, Braum is not pushed back and the soldiers stop moving"],
    },
  },
};
