// app/data/matchups/mel/mel_yone.ts
import type { MatchupSummary } from "../_types";

export const mel_yone: MatchupSummary = {
  champs: ["mel", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 요네 Q3의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q3 [[REFLECT]]로 인해 [[AIRBORNE]]이 요네에게 적용되어, Q3의 [[DASH]] 공격도 끊길 수 있음. \n 단, 요네가 멜과 정말 가까이 겹쳐 있으면 멜에게 Q3의 [[DASH]] 공격이 유효하고 [[AIRBORNE]]도 적용. [[CLIP:https://www.youtube.com/shorts/Qv7lm5Ya4eU]]", 
        "W의 [[REFLECT]]로 요네 평타, Q(1~2), W, E1, E2(데미지), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 요네 Q3, E1의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Yone's Q3 [[PROJECTILE]]. [[EXIST]] \n However, since the [[REFLECT]]ed Q3 applies [[AIRBORNE]] to Yone, the Q3 [[DASH]] attack can also be interrupted. \n However, if Yone is overlapping very closely with Mel, the Q3 [[DASH]] attack still hits Mel and applies [[AIRBORNE]]. [[CLIP:https://www.youtube.com/shorts/Qv7lm5Ya4eU]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Yone's basic attacks, Q (1~2), W, E1, E2 (damage), or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Yone's Q3 and E1 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
