// app/data/matchups/camille/camille_draven.ts
import type { MatchupSummary } from "../_types";

export const camille_draven: MatchupSummary = {
  champs: ["camille", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 드레이븐 E의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 드레이븐 평타, Q, E, R을 피할 수 있음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Draven's E [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Draven's basic attacks, Q, E, and R."],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "[[TIP]]카밀 E1의 갈고리가 투척되는 벽에 드레이븐 E의 [[KNOCKBACK]]을 준비하면 \n E2로 [[DASH]]하는 카밀을 막을 수 있음."],
      en: ["Draven's E [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]].",
        "[[TIP]] If Draven prepares his E [[KNOCKBACK]] at the wall where Camille's E1 hook is thrown, \n he can block Camille's E2 [[DASH]]."],
    },
  },
};
