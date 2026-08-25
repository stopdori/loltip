// app/data/matchups/azir/azir_camille.ts
import type { MatchupSummary } from "../_types";

export const azir_camille: MatchupSummary = {
  champs: ["azir", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 아지르 R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 아지르 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 아지르 Q, W(직접 공격, [[PIERCE]] 공격), E, R을 피할 수 있음.",
      "R의 [[UNTARGETABLE]]로 아지르 평타를 피할 수 없음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Azir's R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Azir's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Azir's Q, W (direct attack, [[PIERCE]] attack), E, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Azir's auto-attacks."],
    },
  },
};
