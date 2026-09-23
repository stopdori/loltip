// app/data/matchups/malzahar/malzahar_volibear.ts
import type { MatchupSummary } from "../_types";

export const malzahar_volibear: MatchupSummary = {
  champs: ["malzahar", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malzahar: {
      ko: ["Q의 [[SILENCE]], R의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 Q의 [[SILENCE]], R의 [[SUPPRESS]]은 남아있음. \n 단, 말자하 R의 [[ZONE]]은 처음 시전된 위치에 남아있음. [[CLIP:https://www.youtube.com/shorts/QSliqOLFaLU]]"],
      en: [],
    },
  },
};
