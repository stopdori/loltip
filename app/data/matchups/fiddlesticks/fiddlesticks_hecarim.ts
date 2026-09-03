// app/data/matchups/fiddlesticks/fiddlesticks_hecarim.ts
import type { MatchupSummary } from "../_types";

export const fiddlesticks_hecarim: MatchupSummary = {
  champs: ["fiddlesticks", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fiddlesticks: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 피들스틱 P, Q의 [[FEAR]] / E의 [[SILENCE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[FEAR]], [[SILENCE]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Fiddlesticks's P and Q [[FEAR]] / E [[SILENCE]]. \n However, [[FEAR]] and [[SILENCE]] remain after [[UNSTOPPABLE]] ends."],
    },
  },
};
