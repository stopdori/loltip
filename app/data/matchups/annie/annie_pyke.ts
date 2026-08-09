// app/data/matchups/annie/annie_pyke.ts
import type { MatchupSummary } from "../_types";

export const annie_pyke: MatchupSummary = {
  champs: ["annie", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 파이크 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Pyke's E [[DASH]] or R [[BLINK]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Pyke's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
