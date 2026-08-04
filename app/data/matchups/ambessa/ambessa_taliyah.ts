// app/data/matchups/ambessa/ambessa_taliyah.ts
import type { MatchupSummary } from "../_types";

export const ambessa_taliyah: MatchupSummary = {
  champs: ["ambessa", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 탈리야 W의 [[AIRBORNE]], E의 [[STUN]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Taliyah's R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Taliyah's W [[AIRBORNE]], E [[STUN]], and R [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
