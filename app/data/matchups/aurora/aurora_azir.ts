// app/data/matchups/aurora/aurora_azir.ts
import type { MatchupSummary } from "../_types";

export const aurora_azir: MatchupSummary = {
  champs: ["aurora", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 아지르 R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, R의 [[KNOCKBACK]]으로 끌려가다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 아지르 R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (ready phase) [[CC_BUFFER]] can ignore Azir's R [[KNOCKBACK]] and continue [[DASH]]ing. \n However, the [[DASH]] activates while being knocked back by [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Azir's R [[KNOCKBACK]] and continue [[DASH]]ing."],
    },
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Aurora's W and E [[DASH]]."],
    },
  },
};
