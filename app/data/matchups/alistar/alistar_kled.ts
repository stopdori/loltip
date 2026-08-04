// app/data/matchups/alistar/alistar_kled.ts
import type { MatchupSummary } from "../_types";

export const alistar_kled: MatchupSummary = {
  champs: ["alistar", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 클레드 승마폼 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 클레드 승마폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 클레드 승마폼 Q의 [[SLOW]] [[AIRBORNE]], R의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Kled's mounted form E [[DASH]].", "E [[STUN]] cannot interrupt Kled's mounted form E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Kled's mounted form Q [[SLOW]] and [[AIRBORNE]], and R [[AIRBORNE]]."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
