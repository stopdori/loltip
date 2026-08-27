// app/data/matchups/ambessa/ambessa_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const ambessa_cassiopeia: MatchupSummary = {
  champs: ["ambessa", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["P는 [[DASH]], R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "R의 [[UNSTOPPABLE]]로 카시오페아 W의 [[GROUNDED]]를(선입력으로), R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["P [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "R [[UNSTOPPABLE]] can ignore Cassiopeia's W [[GROUNDED]] (with pre-input) and R [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
