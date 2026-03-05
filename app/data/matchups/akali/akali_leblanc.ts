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
      ko: ["아칼리 E2로 르블랑 W를 따라갈 수 있음", "아칼리 E로 르블랑 P의 [[INVISIBILITY]]를 볼 수 있음. 단, E2를 사용하면 더이상 모습이 보이지 않음"],
      en: ["Akali's E2 can follow LeBlanc's W", "Akali's E reveals LeBlanc's P [[INVISIBILITY]]. 단, E2를 사용하면 더이상 모습이 보이지 않음"],
    },
    leblanc: {
      ko: ["르블랑 E의 [[TETHER]]효과로 아칼리 W의 [[INVISIBILITY]]를 볼 수 있음", "르블랑 W의 [[TETHER]]효과로 아칼리 E, E2, R, R2를 끊을 수 없음. 단, [[ROOT]]은 남아있음"],
      en: ["LeBlanc's E [[TETHER]]효과 reveals Akali's W [[INVISIBILITY]]", "LeBlanc's W [[TETHER]]효과 cannot interrupt Akali's E, E2, R and R2. However, [[ROOT]] still applies."],
    },
  },
};
