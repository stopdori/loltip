// app/data/matchups/tahmkench/tahmkench_volibear.ts
import type { MatchupSummary } from "../_types";

export const tahmkench_volibear: MatchupSummary = {
  champs: ["tahmkench", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    tahmkench: {
      ko: ["볼리베어 R의 [[UNSTOPPABLE]] 상태일 때 탐켄치 R(삼키기)을 사용할 수 있음. [[EXIST]] \n 단, 탐켄치 R의 [[COOLDOWN]]은 소모되고 삼켜지지 않은것 처럼 아무런 효과가 없음."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
