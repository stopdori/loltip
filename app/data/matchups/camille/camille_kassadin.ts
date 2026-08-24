// app/data/matchups/camille/camille_kassadin.ts
import type { MatchupSummary } from "../_types";

export const camille_kassadin: MatchupSummary = {
  champs: ["camille", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["R의 [[UNTARGETABLE]]로 카사딘 Q, E, R을 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 카사딘 W를 피할 수 없음."],
      en: ["Camille's R [[UNTARGETABLE]] can dodge Kassadin's Q, E, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Kassadin's W."],
    },
    kassadin: {
      ko: ["R의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]을 무시하고 R의 [[BLINK]]을 할 수 있음. \n 단, 카밀 R의 [[ZONE]] 범위 밖으로 R의 [[BLINK]] 하면, 강제로 [[ZONE]] [[AOE]] 안으로 [[GRAB]]되어 돌아올 수 있음."],
      en: ["Kassadin's R [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] and use R's [[BLINK]]. \n However, if Kassadin's R [[BLINK]] lands outside Camille's R [[ZONE]] range, he can be forcibly [[GRAB]]bed back into the [[ZONE]] [[AOE]]."],
    },
  },
};
