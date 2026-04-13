// app/data/matchups/ahri/ahri_fizz.ts
import type { MatchupSummary } from "../_types";

export const ahri_fizz: MatchupSummary = {
  champs: ["ahri", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 피즈 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Fizz's Q [[DASH]]."],
    },
    fizz: {
      ko: ["피즈 E의 [[UNTARGETABLE]]로 아리 Q, W, E, R의 [[PROJECTILE]]를 피할 수 있음.",
        "피즈 R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Fizz's E [[UNTARGETABLE]] can dodge Ahri's Q, W, E, and R [[PROJECTILE]].", "Fizz's R [[AIRBORNE]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
