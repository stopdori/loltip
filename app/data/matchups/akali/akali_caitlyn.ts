// app/data/matchups/akali/akali_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const akali_caitlyn: MatchupSummary = {
  champs: ["akali", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 케이틀린 E의 [[DASH]]을 따라 갈 수 있음.",
        "E1, E2, R1, R2는 케이틀린 W의 [[ROOT]]에 걸리면 사용할 수 없음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Caitlyn's E [[DASH]].",
        "E1, E2, R1, and R2 cannot be used while [[ROOT]]ed by Caitlyn's W."],
    },
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음.", 
        "활성화된 W([[TRAP]])의 [[TRUE_SIGHT]]로 아칼리 W(장막)의 [[INVISIBILITY]] 상태를 볼 수 있음.",
      "R의 [[TRUE_SIGHT]]로 아칼리 W(장막)의 [[INVISIBILITY]] 상태를 볼 수 있음. \n R의 [[PROJECTILE]]가 적중하면 종료."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[ROOT]] and headshot still apply.",
        "Caitlyn's activated W's ([[TRAP]]) [[TRUE_SIGHT]] can see Akali under W (shroud) [[INVISIBILITY]].",
        "Caitlyn's R [[TRUE_SIGHT]] can see Akali under W (shroud) [[INVISIBILITY]]. \n This ends once R's [[PROJECTILE]] hits."],
    },
  },
};
