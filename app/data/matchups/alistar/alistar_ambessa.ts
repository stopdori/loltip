// app/data/matchups/alistar/alistar_ambessa.ts
import type { MatchupSummary } from "../_types";

export const alistar_ambessa: MatchupSummary = {
  champs: ["alistar", "ambessa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 암베사 E의 [[SLOW]], R의 [[SUPPRESS]] [[STUN]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Ambessa's P [[DASH]].", "E [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Ambessa's E [[SLOW]] and R [[SUPPRESS]] [[STUN]]."],
    },
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Alistar's W [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};
