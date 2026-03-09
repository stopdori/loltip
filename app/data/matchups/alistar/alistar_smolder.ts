// app/data/matchups/alistar/alistar_smolder.ts
import type { MatchupSummary } from "../_types";

export const alistar_smolder: MatchupSummary = {
  champs: ["alistar", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W, E로 스몰더 E를 끊을 수 있음", "알리스타 R의 [[CC_CLEANSE]]로 스몰더 W의 [[SLOW]]는 해제할 수 없음", "알리스타 R의 [[CC_CLEANSE]]로 스몰더 R의 [[SLOW]]는 해제할 수 있음"],
      en: ["Alistar's Q, W, and E can interrupt 스몰더 E", "Alistar's R [[CC_CLEANSE]] cannot cleanse 스몰더 W [[SLOW]]", "Alistar's R [[CC_CLEANSE]] can cleanse Smolder's R [[SLOW]]"],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
