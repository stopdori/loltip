// app/data/matchups/ahri/ahri_yuumi.ts
import type { MatchupSummary } from "../_types";

export const ahri_yuumi: MatchupSummary = {
  champs: ["ahri", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 유미 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Yuumi's W [[DASH]]."],
    },
    yuumi: {
      ko: ["유미 W는 아리 E의 [[CHARM]]을 맞으면 W가 쿨타임이 될 수 있음."],
      en: ["Yuumi's W can be put on [[COOLDOWN]] if hit by Ahri's E [[CHARM]]."],
    },
  },
};
