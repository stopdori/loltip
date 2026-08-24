// app/data/matchups/camille/camille_fizz.ts
import type { MatchupSummary } from "../_types";

export const camille_fizz: MatchupSummary = {
  champs: ["camille", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 피즈 Q의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 피즈 R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
      "R의 [[UNTARGETABLE]]로 피즈 Q, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Fizz's Q [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Fizz's R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
      "Camille's R [[UNTARGETABLE]] can dodge Fizz's Q, E, and R."],
    },
    fizz: {
      ko: ["R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Fizz's R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
