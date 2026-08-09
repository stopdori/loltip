// app/data/matchups/aurora/aurora_lillia.ts
import type { MatchupSummary } from "../_types";

export const aurora_lillia: MatchupSummary = {
  champs: ["aurora", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["W, E의 [[DASH]]으로 릴리아 R의 [[SLEEP]]을 무시하고 [[DASH]]할 수 있음.\n 단, [[SLEEP]]은 남아있음.", 
        "릴리아 R의 [[DROWSY]] 상태에서 [[SLEEP]]으로 넘어가는 순간 오로라 R의 [[UNSTOPPABLE]] [[DASH]]을 사용하면 [[SLEEP]]을 완전히 무시하고 [[DASH]]할 수 있음. \n [[SLEEP]]은 남아있지 않고 사라짐."
      ],
      en: ["W and E [[DASH]] can ignore Lillia's R [[SLEEP]] and continue [[DASH]]. \n However, the [[SLEEP]] still applies.",
        "The moment Lillia's R [[DROWSY]] transitions into [[SLEEP]], using Aurora's R [[UNSTOPPABLE]] [[DASH]] completely ignores the [[SLEEP]] and continues the [[DASH]]. \n The [[SLEEP]] does not remain and is removed."
      ],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
