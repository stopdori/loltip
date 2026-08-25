// app/data/matchups/camille/camille_tristana.ts
import type { MatchupSummary } from "../_types";

export const camille_tristana: MatchupSummary = {
  champs: ["camille", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 트리스타나 R[[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 트리스타나 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 트리스타나 평타, W, E(투사체), R을 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 트리스타나 E(부착된 폭발 피해)를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Tristana's R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Tristana's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Tristana's auto-attacks, W, E (projectile), and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Tristana's E (attached explosion damage)."
      ],
    },
    tristana: {
      ko: ["W의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]을 무시하고 W의 [[DASH]]을 할 수 있음. \n 단, 카밀 R의 [[ZONE]] 범위 밖으로 R의 [[DASH]] 하면, 강제로 [[ZONE]] [[AOE]] 안으로 [[GRAB]]되어 돌아올 수 있음.",
        "R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Tristana's W [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] and continue the W [[DASH]]. \n However, if the R [[DASH]] moves outside of Camille's R [[ZONE]] range, Tristana can be forcibly [[GRAB]]bed back into the [[ZONE]] [[AOE]].",
        "Tristana's R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
