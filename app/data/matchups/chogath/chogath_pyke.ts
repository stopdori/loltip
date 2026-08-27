// app/data/matchups/chogath/chogath_pyke.ts
import type { MatchupSummary } from "../_types";

export const chogath_pyke: MatchupSummary = {
  champs: ["chogath", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Pyke's Q [[SKILL_CHARGED]].",
        "Q [[AIRBORNE]] can interrupt Pyke's E [[DASH]] and R [[BLINK]].",
        "W [[SILENCE]] cannot interrupt Pyke's E [[DASH]] and R [[BLINK]]. \n However, the [[SILENCE]] still applies."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
