// app/data/matchups/camille/camille_nasus.ts
import type { MatchupSummary } from "../_types";

export const camille_nasus: MatchupSummary = {
  champs: ["camille", "nasus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["R의 [[UNTARGETABLE]]로 나서스 E, R(범위 피해)을 피할 수 있음. \n 단, 나서스 W는 취소될 수 있음. [[COOLDOWN]] 소모 없음.", 
        "[[TIP]]R의 [[UNTARGETABLE]]로 나서스 Q를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/X_yUObub_iY]]", 
      ],
      en: ["Camille's R [[UNTARGETABLE]] can dodge Nasus's E and R (AoE damage). \n However, Nasus's W can be canceled. No [[COOLDOWN]] is consumed.",
        "[[TIP]]Camille's R [[UNTARGETABLE]] cannot dodge Nasus's Q. [[CLIP:https://www.youtube.com/shorts/X_yUObub_iY]]"
      ],
    },
    nasus: {
      ko: [],
      en: [],
    },
  },
};
