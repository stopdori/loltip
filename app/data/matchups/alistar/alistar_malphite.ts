// app/data/matchups/alistar/alistar_malphite.ts
import type { MatchupSummary } from "../_types";

export const alistar_malphite: MatchupSummary = {
  champs: ["alistar", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 말파이트 Q의 [[SLOW]], R의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Malphite's Q [[SLOW]] and R [[AIRBORNE]]."],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]] and E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
