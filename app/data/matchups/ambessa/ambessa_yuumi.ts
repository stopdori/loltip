// app/data/matchups/ambessa/ambessa_yuumi.ts
import type { MatchupSummary } from "../_types";

export const ambessa_yuumi: MatchupSummary = {
  champs: ["ambessa", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 유미 W의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Yuumi's W [[DASH]]."],
    },
    yuumi: {
      ko: ["유미 W는 암베사 R의 [[SUPPRESS]]을 맞으면 W가 쿨타임이 될 수 있음."],
      en: ["Yuumi's W can be put on [[COOLDOWN]] if hit by Ambessa's R [[SUPPRESS]]."],
    },
  },
};
