// app/data/matchups/akali/akali_shaco.ts
import type { MatchupSummary } from "../_types";

export const akali_shaco: MatchupSummary = {
  champs: ["akali", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]] 샤코 Q의 [[BLINK]]을 따라갈 수 있음.", "E1의 [[TRUE_SIGHT]]로 샤코 Q의 [[INVISIBILITY]]을 볼 수 있음.", "E1을 샤코에게 맞혔을 때 샤코가 R로 분화하면 본체에 E가 남아있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Shaco's Q [[BLINK]].", "E1 [[TRUE_SIGHT]] can reveal Shaco's Q [[INVISIBILITY]].", "When E1 hits Shaco and Shaco uses R to split, the E marker remains on the original body."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
