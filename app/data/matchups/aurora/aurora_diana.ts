// app/data/matchups/aurora/aurora_diana.ts
import type { MatchupSummary } from "../_types";

export const aurora_diana: MatchupSummary = {
  champs: ["aurora", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 다이애나 R의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음. \n 단, R의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 다이애나 R의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Diana's R [[GRAB]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled by R's [[GRAB]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Diana's R [[GRAB]] and continue [[DASH]]."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Aurora's W and E [[DASH]]."],
    },
  },
};
