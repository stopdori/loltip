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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 탈론 Q, E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 탈론 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 탈론 W의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Talon's Q and E [[DASH]].", "E [[STUN]] cannot interrupt Talon's Q or E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Talon's W [[SLOW]]."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
