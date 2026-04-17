// app/data/matchups/amumu/amumu_fizz.ts
import type { MatchupSummary } from "../_types";

export const amumu_fizz: MatchupSummary = {
  champs: ["amumu", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 피즈 Q의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 피즈 R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Fizz's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Fizz's Q [[DASH]].", "Amumu's R [[STUN]] can interrupt Fizz's Q [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Fizz's R [[AIRBORNE]] and continue [[DASH]]."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
