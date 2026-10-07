// app/data/matchups/ambessa/ambessa_kayn.ts
import type { MatchupSummary } from "../_types";

export const ambessa_kayn: MatchupSummary = {
  champs: ["ambessa", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 

        "R의 [[UNSTOPPABLE]]로 다르킨 W의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]]"],
      en: ["R [[SUPPRESS]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[UNSTOPPABLE]] can ignore Darkin W [[AIRBORNE]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
