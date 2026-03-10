// app/data/matchups/braum/braum_kayle.ts
import type { MatchupSummary } from "../_types";

export const braum_kayle: MatchupSummary = {
  champs: ["braum", "kayle"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 케일 평타(레벨: 6, 11, 16), Q, E(평타), R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 단, 케일 11레벨, 16레벨의 화염파 추가데미지는 막을 수 없음.\n단, 케일 Q의 [[SLOW]]는 남아있음.", "브라움 E(방패)로 케일 평타(레벨: 6, 11, 16), E(평타)를 [[INTERCEPT_PROJECTILE]] 할 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kayle's basic attacks (level 6, 11, 16), Q, E (basic attacks) and R.\nHowever, the bonus flame wave damage at level 11 and 16 cannot be blocked.\nHowever, Kayle's Q [[SLOW]] still applies.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kayle's basic attacks (level 6, 11, 16) and E (basic attacks)."],
    },
    kayle: {
      ko: [],
      en: [],
    },
  },
};
