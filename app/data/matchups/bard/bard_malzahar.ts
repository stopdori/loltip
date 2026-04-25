// app/data/matchups/bard/bard_malzahar.ts
import type { MatchupSummary } from "../_types";

export const bard_malzahar: MatchupSummary = {
  champs: ["bard", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 R(존야)로 말자하 W의 공허충을 존야 상태로 만들 수 있음.", 
        "바드 R(존야)로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 말자하 R의 [[SUPPRESS]] 대상을 존야 상태로 만들 수 있음. \n 단, 말자하 R의 [[SKILL_CHANNEL]]은 유지할 수 있음."],
      en: [""],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 바드 R(존야)를 막을 수 있음."],
      en: [],
    },
  },
};
