// app/data/matchups/alistar/alistar_talon.ts
import type { MatchupSummary } from "../_types";

export const alistar_talon: MatchupSummary = {
  champs: ["alistar", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 탈론 Q, E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 탈론 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 탈론 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Talon's Q and E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Talon's Q or E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Talon's W [[SLOW]]."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
