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
      ko: ["아칼리 E2로 샤코 Q를 따라갈 수 있음", "아칼리 E로 샤코 Q의 [[INVISIBILITY]]를 볼 수 있음", "아칼리 E를 샤코에게 맞혔을 때 샤코가 R로 분화하면 본체에 E가 남아있음"],
      en: ["Akali's E2 can follow Shaco's Q", "Akali's E reveals Shaco's Q [[INVISIBILITY]]", "When Akali's E hits Shaco and Shaco uses R to clone, the E marker remains on the original body"],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
