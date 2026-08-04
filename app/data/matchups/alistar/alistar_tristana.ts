// app/data/matchups/alistar/alistar_tristana.ts
import type { MatchupSummary } from "../_types";

export const alistar_tristana: MatchupSummary = {
  champs: ["alistar", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 트리스타나(트리,트타) W의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 트리스타나 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 트리스타나 R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Tristana's W [[DASH]].", "E [[STUN]] cannot interrupt Tristana's W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Tristana's R [[KNOCKBACK]]."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
