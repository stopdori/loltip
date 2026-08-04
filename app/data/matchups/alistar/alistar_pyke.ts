// app/data/matchups/alistar/alistar_pyke.ts
import type { MatchupSummary } from "../_types";

export const alistar_pyke: MatchupSummary = {
  champs: ["alistar", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 파이크 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 파이크 Q의 [[SLOW]] [[GRAB]], E의 [[STUN]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Pyke's E [[DASH]].", "E [[STUN]] cannot interrupt Pyke's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Pyke's Q [[SLOW]][[GRAB]] and E [[STUN]]."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
