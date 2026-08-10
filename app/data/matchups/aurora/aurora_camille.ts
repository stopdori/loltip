// app/data/matchups/aurora/aurora_camille.ts
import type { MatchupSummary } from "../_types";

export const aurora_camille: MatchupSummary = {
  champs: ["aurora", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 카밀 E의 [[STUN]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SILENCE]]은 0.1초 지속이라 사라짐. \n 단, R의 [[KNOCKBACK]]은 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로  카밀 E의 [[STUN]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Camille's E [[STUN]] / R's [[SILENCE]] and [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[SILENCE]] only lasts 0.1s so it wears off anyway. \n However, the [[DASH]] activates while being knocked back by R's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Camille's E [[STUN]] / R's [[SILENCE]] and [[KNOCKBACK]] and continue [[DASH]]."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
