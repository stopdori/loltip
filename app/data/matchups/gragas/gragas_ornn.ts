// app/data/matchups/gragas/gragas_ornn.ts
import type { MatchupSummary } from "../_types";

export const gragas_ornn: MatchupSummary = {
  champs: ["gragas", "ornn"],
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 오른 R2를 끊을 수 있음"],
      en: ["Gragas's E or R can interrupt Ornn's R2"],
    },
    ornn: {
      ko: ["오른 W로 그라가스 E, R의 CC를 무시 할 수 있음", "오른 E의 조건부 [[AIRBORNE]]으로 그라가스 E를 끊을 수 있음"],
      en: ["Ornn's W can ignore the CC from Gragas's E or R", "Ornn's conditional [[AIRBORNE]] from his E can interrupt Gragas's E"],
    },
  },
};
