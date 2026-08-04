// app/data/matchups/ambessa/ambessa_ekko.ts
import type { MatchupSummary } from "../_types";

export const ambessa_ekko: MatchupSummary = {
  champs: ["ambessa", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음.", "R의 [[UNSTOPPABLE]]로 에코 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Ekko's E (roll) [[DASH]].", "R [[UNSTOPPABLE]] can ignore Ekko's W [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
