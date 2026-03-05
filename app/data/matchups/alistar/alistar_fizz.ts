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
      ko: ["알리스타 Q, W로 피즈 Q를 끊을 수 있음", "알리스타 E의 [[STUN]]로 피즈 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음.", "알리스타 R의 [[CC_CLEANSE]]로 피즈 E의 [[SLOW]], R의 1번[[SLOW]], 2번[[SLOW]], [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Fizz's Q", "Alistar's E [[STUN]] cannot interrupt Fizz's Q. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Fizz's E [[SLOW]] and R 1st [[SLOW]], 2nd [[SLOW]], [[AIRBORNE]]"],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
