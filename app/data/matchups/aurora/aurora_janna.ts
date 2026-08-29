// app/data/matchups/aurora/aurora_janna.ts
import type { MatchupSummary } from "../_types";

export const aurora_janna: MatchupSummary = {
  champs: ["aurora", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, R의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."
      ],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[DASH]] activates while being knocked back by R's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Aurora's W and E [[DASH]]."],
    },
  },
};
