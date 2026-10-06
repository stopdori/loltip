// app/data/matchups/fiddlesticks/fiddlesticks_mel.ts
import type { MatchupSummary } from "../_types";

export const fiddlesticks_mel: MatchupSummary = {
  champs: ["fiddlesticks", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiddlesticks: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 피들스틱 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 [[FEAR]]도 [[REFLECT]].", 
        "W의 [[REFLECT]]로 피들스틱 W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 피들스틱 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 피들스틱 W의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Fiddlesticks's basic attacks and Q [[PROJECTILE]]. [[EXIST]] \n However, Q also [[REFLECT]]s the [[FEAR]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Fiddlesticks's W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Fiddlesticks's R [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt Fiddlesticks's W [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
