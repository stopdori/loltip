// app/data/matchups/aurora/aurora_ksante.ts
import type { MatchupSummary } from "../_types";

export const aurora_ksante: MatchupSummary = {
  champs: ["aurora", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, Q3의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동. \n 단, W의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 크산테 R의 [[SUPPRESS]]을 무시할 수 없음. \n 즉, 크산테 R 판정이 무조건 이기는 듯. 반례 제보 부탁드림."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore K'Sante's Q3 [[GRAB]] and W [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled by Q3's [[GRAB]]. \n However, the [[DASH]] activates while being knocked back by W's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore K'Sante's Q3 [[GRAB]] and W [[KNOCKBACK]] and continue [[DASH]].",
        "R [[UNSTOPPABLE]] [[DASH]] cannot ignore K'Sante's R [[SUPPRESS]]. \n In other words, K'Sante's R seems to always win the interaction. Please let us know if you find a counterexample."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
