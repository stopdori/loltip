// app/data/matchups/mel/mel_smolder.ts
import type { MatchupSummary } from "../_types";

export const mel_smolder: MatchupSummary = {
  champs: ["mel", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 스몰더 평타, Q(일반, 125 [[STACKING]] 불꽃), W, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q(225 [[STACKING]])의 [[DOT]] 피해, [[EXECUTE]] 효과도 [[REFLECT]]에 적용. [[CLIP:https://www.youtube.com/shorts/e1zyIfMcj6o]]", 
        "W의 [[REFLECT]]로 스몰더 Q의 [[AOE]] [[DETONATE]]을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Smolder's basic attacks, Q (normal, 125 [[STACKING]] fireball), W, E, and R [[PROJECTILE]]. [[EXIST]] \n However, Q (225 [[STACKING]]) [[DOT]] damage and [[EXECUTE]] effect also apply to the [[REFLECT]]. [[CLIP:https://www.youtube.com/shorts/e1zyIfMcj6o]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Smolder's Q [[AOE]] [[DETONATE]]. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
