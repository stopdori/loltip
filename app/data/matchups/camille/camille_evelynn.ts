// app/data/matchups/camille/camille_evelynn.ts
import type { MatchupSummary } from "../_types";

export const camille_evelynn: MatchupSummary = {
  champs: ["camille", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 이블린 W의 [[CHARM]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[CHARM]]이 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.",
      "R의 [[UNTARGETABLE]]로 이블린 Q, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Evelynn's W [[CHARM]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[CHARM]] remains until the E1 (Hold phase), Camille's E is cancelled.",
      "Camille's R [[UNTARGETABLE]] can dodge Evelynn's Q, E, and R."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Evelynn's W [[CHARM]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
