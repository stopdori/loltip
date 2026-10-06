// app/data/matchups/mel/mel_olaf.ts
import type { MatchupSummary } from "../_types";

export const mel_olaf: MatchupSummary = {
  champs: ["mel", "olaf"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 올라프 Q(도끼)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 Q의 사거리는 올라프가 던진 사거리와 동일. \n 단, [[REFLECT]]된 Q의 [[DROP]](도끼)을 주울 수 없음.", 
        "W의 [[REFLECT]]로 올라프 평타, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Olaf's Q (axe) [[PROJECTILE]]. [[EXIST]] \n However, the [[REFLECT]]ed Q's range is the same as the range Olaf threw it. \n However, the [[DROP]] (axe) of the [[REFLECT]]ed Q cannot be picked up.", 
        "W [[REFLECT]] cannot [[REFLECT]] Olaf's basic attacks or E. [[NOT_EXIST]]"],
    },
    olaf: {
      ko: [],
      en: [],
    },
  },
};
