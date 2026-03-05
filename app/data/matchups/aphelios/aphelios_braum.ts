// app/data/matchups/aphelios/aphelios_braum.ts
import type { MatchupSummary } from "../_types";

export const aphelios_braum: MatchupSummary = {
  champs: ["aphelios", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aphelios: {
      ko: [],
      en: [],
    },
    braum: {
      ko: ["브라움 E(방패)로 아펠리오스 R을 막을 수 있음.\n단, 브라움이 막았을때 범위 폭발이 일어나 주변에 데미지를 주고, 이때 브라움은 데미지를 입지 않음. \n그 이후 아펠리오스가 R의 효과로 추가 평타를 날릴때 브라움 E(방패)로 [[INTERCEPT_PROJECTILE]] 할 수 있음. 이때도 브라움은 데미지를 입음", "아군이 아펠리오스 만월총에 맞아 추가평타가 들어오는것을 브라움 E(방패)로 막아 줄 수 있음. 단, 절단검(빨강) 제외", "브라움 E(방패)로 아펠리오스 평타를 절단검(빨강)을 제외하고 막을 수 있음", "아군에게 아펠리오스가 중력포(보라) Q를 쓸때, 브라움 E로 막아 줄 수 없음"],
      en: ["Braum's E(Shield) can block Aphelios's R\\nHowever, when Braum blocks it, an area explosion occurs dealing damage nearby, and Braum does not take damage in this case\\nAfterward, when Aphelios fires additional auto attacks from R's effect, Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] them; Braum does take damage in this case", "Braum's E(Shield) can block the additional auto attacks coming from allies hit by Aphelios's Moonbeam, except for Severum (red)", "Braum's E(Shield) can block Aphelios's auto attacks, except for Severum (red)", "Braum's E cannot block Aphelios's Gravitum (purple) Q when used on allies"],
    },
  },
};
