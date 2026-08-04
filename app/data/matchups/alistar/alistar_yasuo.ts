// app/data/matchups/alistar/alistar_yasuo.ts
import type { MatchupSummary } from "../_types";

export const alistar_yasuo: MatchupSummary = {
  champs: ["alistar", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 아스오 E의 [[DASH]]을 끊을 수 있음. \n 단, 야스오 E의 [[DASH]]는 일반적인 [[DASH]]와 다르게 판정이 정말 좋지않은 스킬로 [[STUN]]에도 멈춤.", 
        "R의 [[CC_CLEANSE]]로 아스오 Q3, R의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Yasuo's E [[DASH]]. \n However, unlike typical dashes, Yasuo's E has very poor hit detection — [[STUN]] can also stop it.", "R [[CC_CLEANSE]] can cleanse Yasuo's Q3 and R [[AIRBORNE]]."],
    },
    yasuo: {
      ko: [],
      en: [],
    },
  },
};
