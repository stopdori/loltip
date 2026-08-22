// app/data/matchups/caitlyn/caitlyn_pyke.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_pyke: MatchupSummary = {
  champs: ["caitlyn", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 없음.",
        "W([[TRAP]])의 [[ROOT]]으로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Pyke's Q [[SKILL_CHARGED]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Pyke's E [[DASH]] and R [[BLINK]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
