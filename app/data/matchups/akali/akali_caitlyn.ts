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
      ko: ["활성화된 W([[TRAP]])를 아칼리 W(장막)의 [[INVISIBILITY]] 상태에서 밟으면 위치가 드러남.",
      "활성화된 W([[TRAP]])가 아칼리 E1, E2, R1, R2의 [[DASH]] 경로에 있다면 [[ROOT]]에 걸리지만 무시하고 [[DASH]]. \n 단, [[ROOT]]와 헤드샷은 남아있음.",
      "R의 [[TRUE_SIGHT]]로 인해 아칼리가 조준당하고 W(장막)의 [[INVISIBILITY]] 상태가 되어도 위치가 드러남."],
      en: ["Stepping on Caitlyn's activated W ([[TRAP]]) while under Akali's W (shroud) [[INVISIBILITY]] reveals her position.",
        "If Caitlyn's activated W ([[TRAP]]) is in the path of Akali's E1, E2, R1, or R2 [[DASH]], she gets [[ROOT]]ed but can ignore it and [[DASH]] anyway. \n However, the [[ROOT]] and headshot still apply.",
        "Even if Akali is targeted by Caitlyn's R [[TRUE_SIGHT]] and enters W (shroud) [[INVISIBILITY]], her position is still revealed."],
    },
  },
};
