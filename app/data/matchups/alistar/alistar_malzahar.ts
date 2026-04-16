// app/data/matchups/alistar/alistar_malzahar.ts
import type { MatchupSummary } from "../_types";

export const alistar_malzahar: MatchupSummary = {
  champs: ["alistar", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 말자하 Q의 [[SILENCE]], R의 [[SKILL_CHANNEL]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Malzahar's R [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Malzahar's Q [[SILENCE]] and R [[SUPPRESS]]."],
    },
    malzahar: {
      ko: [],
      en: [],
    },
  },
};
