// app/data/matchups/blitzcrank/blitzcrank_ekko.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_ekko: MatchupSummary = {
  champs: ["blitzcrank", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 에코 E의 [[DASH]]을 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 에코 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: [""],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]], R의 [[SILENCE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 Q([[GRAB]]), E의 [[AIRBORNE]] / R의 [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
