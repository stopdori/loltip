// app/data/matchups/mel/mel_nunu.ts
import type { MatchupSummary } from "../_types";

export const mel_nunu: MatchupSummary = {
  champs: ["mel", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 누누와 월럼프 W([[SKILL_RECAST]] 발사), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 누누 E의 [[AOE]] [[ROOT]]은 정상적으로 발동하고, 멜은 발동하지 않음.", 
        "W의 [[REFLECT]]로 누누와 월럼프 E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 누누와 월럼프 W의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]] \n 단, 누누 W는 끊길 때 모았던 만큼의 [[SKILL_CHANNEL_MOVEMENT]]은 발사.", 
    "E의 [[ROOT]]으로 누누와 월럼프 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Nunu & Willump's W ([[SKILL_RECAST]] launch) and E [[PROJECTILE]]. [[EXIST]] \n However, Nunu's E [[AOE]] [[ROOT]] still triggers normally, while Mel's does not.", 
        "W [[REFLECT]] cannot [[REFLECT]] Nunu & Willump's E or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Nunu & Willump's W [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]] \n However, when interrupted, Nunu's W still fires the [[SKILL_CHANNEL_MOVEMENT]] charged up to that point.", 
        "E [[ROOT]] cannot interrupt Nunu & Willump's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
