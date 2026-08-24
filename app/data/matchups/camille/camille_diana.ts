// app/data/matchups/camille/camille_diana.ts
import type { MatchupSummary } from "../_types";

export const camille_diana: MatchupSummary = {
  champs: ["camille", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 다이애나 R의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 다이애나 Q, W, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Diana's E [[DASH]].", 
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Diana's R [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Diana's Q, W, E, and R."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Diana's R [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
