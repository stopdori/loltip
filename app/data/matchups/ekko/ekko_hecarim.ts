// app/data/matchups/ekko/ekko_hecarim.ts
import type { MatchupSummary } from "../_types";

export const ekko_hecarim: MatchupSummary = {
  champs: ["ekko", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 에코 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 에코 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Ekko's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Ekko's W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
