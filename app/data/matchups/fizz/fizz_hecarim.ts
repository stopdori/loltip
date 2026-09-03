// app/data/matchups/fizz/fizz_hecarim.ts
import type { MatchupSummary } from "../_types";

export const fizz_hecarim: MatchupSummary = {
  champs: ["fizz", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fizz: {
      ko: [""],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 피즈 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 피즈 R의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Fizz's Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Fizz's R [[AIRBORNE]]."],
    },
  },
};
