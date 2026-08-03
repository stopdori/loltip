// app/data/matchups/akali/akali_leblanc.ts
import type { MatchupSummary } from "../_types";

export const akali_leblanc: MatchupSummary = {
  champs: ["akali", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 르블랑 W의 [[DASH]]을 따라갈 수 있음.", "E1의 [[TRUE_SIGHT]]로 르블랑 P의 [[INVISIBILITY]]를 볼 수 있음. \n 단, E2로 부딪히면 더 이상 모습이 보이지 않음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow LeBlanc's W [[DASH]].", "E1 [[TRUE_SIGHT]] can reveal LeBlanc's P [[INVISIBILITY]]. \n However, if E2 hits her, she becomes invisible again."],
    },
    leblanc: {
      ko: ["르블랑 E의 [[TETHER]]효과로 아칼리 W의 [[INVISIBILITY]]를 볼 수 있음", "르블랑 W의 [[TETHER]]효과로 아칼리 E, E2, R, R2를 끊을 수 없음. 단, [[ROOT]]은 남아있음"],
      en: ["LeBlanc's E [[TETHER]] reveals Akali's W [[INVISIBILITY]].", "LeBlanc's W [[TETHER]] cannot interrupt Akali's E, E2, R and R2. However, [[ROOT]] still applies."],
    },
  },
};
