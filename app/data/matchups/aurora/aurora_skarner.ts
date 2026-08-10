// app/data/matchups/aurora/aurora_skarner.ts
import type { MatchupSummary } from "../_types";

export const aurora_skarner: MatchupSummary = {
  champs: ["aurora", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["R의 [[UNSTOPPABLE]] [[DASH]]으로 스카너 E, R의 [[SUPPRESS]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["R [[UNSTOPPABLE]] [[DASH]] can ignore Skarner's E and R [[SUPPRESS]] and continue [[DASH]]."],
    },
    skarner: {
      ko: ["스카너 E, R의 [[SUPPRESS]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음.", "스카너 E, R의 [[SUPPRESS]]으로 오로라 R(세계의 경계)의 [[ZONE]]을 벗어나게 하면 [[UNTARGETABLE]] [[BLINK]]이 발동하지 않고 오히려 [[ZONE]]이 사라짐."],
      en: ["Skarner's E and R [[SUPPRESS]] can interrupt Aurora's W and E [[DASH]].",
        "If Skarner's E or R [[SUPPRESS]] pulls Aurora out of her R (Between Worlds) [[ZONE]], the [[UNTARGETABLE]] [[BLINK]] does not trigger and the [[ZONE]] disappears instead."],
    },
  },
};
