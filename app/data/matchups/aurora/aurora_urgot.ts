// app/data/matchups/aurora/aurora_urgot.ts
import type { MatchupSummary } from "../_types";

export const aurora_urgot: MatchupSummary = {
  champs: ["aurora", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 우르곳 E의 [[GRAB]], [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, 우르곳 E의 [[DASH]]을 보고 오로라 E를 사용하면, 오로라가 끌려가다가 [[DASH]] 발동. 실패하면 그냥 끌려감.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 우르곳 E의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: [""],
    },
    urgot: {
      ko: ["우르곳 E의 [[GRAB]], [[STUN]]로 오로라 W의 [[DASH]]을 끊을 수 있음.", 
        "우르곳 E의 [[GRAB]], [[STUN]]로 오로라 E의 [[DASH]]를 끊을 수 있음. \n 단, 오로라가 실수해야 끊을 수 있음.", 
        "우르곳 R2의 [[SUPPRESS]] [EXECUTE]]으로 오로라 W, E, R의 [[DASH]]을 끊을 수 있음. \n 단, 오로라 R은 [[UNSTOPPABLE]] [[DASH]]이지만 끌려감."],
      en: [],
    },
  },
};
