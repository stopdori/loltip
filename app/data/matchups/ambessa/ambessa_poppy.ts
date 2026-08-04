// app/data/matchups/ambessa/ambessa_poppy.ts
import type { MatchupSummary } from "../_types";

export const ambessa_poppy: MatchupSummary = {
  champs: ["ambessa", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]], R의 [[SKILL_CHARGED]](홈런)을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Poppy's E [[DASH]] and R [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Poppy's E [[KNOCKBACK]] [[STUN]], R [[AIRBORNE]], and R [[SKILL_CHARGED]] (home run). \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 암베사 R의 [[BLINK]]을 막을 수 없음.", "뽀삐 W의 [[ANTI_DASH]]로 암베사 P의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.\n 단, [[GROUNDED]]에 걸렸을 때, 암베사의 R도 [[BLINK]]여서 사용 할 수 없음."],
      en: ["Poppy's W [[ANTI_DASH]] cannot block Ambessa's R [[BLINK]].", "Poppy's W [[ANTI_DASH]] can block Ambessa's P [[DASH]] and apply [[GROUNDED]]. \n However, when [[GROUNDED]], Ambessa's R [[BLINK]] also cannot be used."],
    },
  },
};
