// app/data/matchups/mel/mel_zilean.ts
import type { MatchupSummary } from "../_types";

export const mel_zilean: MatchupSummary = {
  champs: ["mel", "zilean"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 질리언 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 도착 지점까지는 [[PROJECTILE]] 판정. \n 도착한 Q([[ZONE]])는 멜이 [[REFLECT]] 상태에서 밟으면 질리언에게 발사되는 이펙트가 발동하지만, Q는 멜에게 [[ATTACH]]되어 남아있음. [[CLIP:https://www.youtube.com/shorts/EuLYEmCnk9Q]]", 
        "W의 [[REFLECT]]로 질리언 Q([[ZONE]] [[ATTACH]], [[ZONE]] [[DETONATE]]), E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Zilean's basic attacks and Q [[PROJECTILE]]. [[EXIST]] \n However, Q counts as a [[PROJECTILE]] until it reaches its destination. \n If Mel steps on a landed Q ([[ZONE]]) while [[REFLECT]] is active, the effect of firing back at Zilean plays, but the Q stays [[ATTACH]]ed to Mel. [[CLIP:https://www.youtube.com/shorts/EuLYEmCnk9Q]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Zilean's Q ([[ZONE]] [[ATTACH]], [[ZONE]] [[DETONATE]]) or E. [[NOT_EXIST]]"],
    },
    zilean: {
      ko: [],
      en: [],
    },
  },
};
