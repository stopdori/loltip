// app/data/matchups/gragas/gragas_ornn.ts
import type { MatchupSummary } from "../_types";

export const gragas_ornn: MatchupSummary = {
  champs: ["gragas", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R의 [[KNOCKBACK]]으로 오른 E, R2의 [[DASH]]를 끊을 수 있음."],
      en: ["Gragas's E and R [[KNOCKBACK]] can interrupt Ornn's E and R2 [[DASH]]."],
    },
    ornn: {
      ko: ["오른 W의 [[UNSTOPPABLE]]로 그라가스 E, R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "오른 E, R2의 [[AIRBORNE]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Ornn's W [[UNSTOPPABLE]] can ignore Gragas's E and R [[KNOCKBACK]].", "Ornn's E, R2 [[AIRBORNE]] can interrupt Gragas's E [[DASH]]."],
    },
  },
};
