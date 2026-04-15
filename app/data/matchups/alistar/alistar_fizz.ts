// app/data/matchups/alistar/alistar_fizz.ts
import type { MatchupSummary } from "../_types";

export const alistar_fizz: MatchupSummary = {
  champs: ["alistar", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 피즈 Q의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 피즈 Q의 [[DASH]] 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 피즈 E의 [[SLOW]], R의 미끼 [[SLOW]], 상어[[SLOW]] [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Fizz's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Fizz's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Fizz's E [[SLOW]] and R's bait [[SLOW]], shark [[SLOW]], and [[AIRBORNE]]."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
