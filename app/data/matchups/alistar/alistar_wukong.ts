// app/data/matchups/alistar/alistar_wukong.ts
import type { MatchupSummary } from "../_types";

export const alistar_wukong: MatchupSummary = {
  champs: ["alistar", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 오공 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 오공 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 오공 R의 [[AIRBORNE]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Wukong's E [[DASH]].", "E [[STUN]] cannot interrupt Wukong's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Wukong's R [[AIRBORNE]]."],
    },
    wukong: {
      ko: [],
      en: [],
    },
  },
};
