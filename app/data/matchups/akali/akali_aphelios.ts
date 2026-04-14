// app/data/matchups/akali/akali_aphelios.ts
import type { MatchupSummary } from "../_types";

export const akali_aphelios: MatchupSummary = {
  champs: ["akali", "aphelios"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: [""],
      en: [""],
    },
    aphelios: {
      ko: ["아펠리오스 반월검(흰색) Q의 [[SUMMON]]으로 포탑이 활성화 되면, 아칼리 E1의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음.", 
        "아펠리오스 중력포(보라) Q의 [[ROOT]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["When Aphelios's Crescendum (white) Q [[SUMMON]] turret is activated, it can block Akali's E1 [[SINGLE]] [[PROJECTILE]].", "Aphelios's Gravitum (purple) Q [[ROOT]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
  },
};
