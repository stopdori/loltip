// app/data/matchups/elise/elise_hecarim.ts
import type { MatchupSummary } from "../_types";

export const elise_hecarim: MatchupSummary = {
  champs: ["elise", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    elise: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 엘리스 인간폼 E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Elise's Spider Form Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Elise's human form E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
