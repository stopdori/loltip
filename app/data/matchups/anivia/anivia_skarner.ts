// app/data/matchups/anivia/anivia_skarner.ts
import type { MatchupSummary } from "../_types";

export const anivia_skarner: MatchupSummary = {
  champs: ["anivia", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]] \n 단, 애니비아 W([[TERRAIN]])는 지형지물에도 겹쳐서 사용 가능."],
      en: ["Q [[STUN]] and W ([[TERRAIN]]) [[AIRBORNE]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, Anivia's W ([[TERRAIN]]) can also be placed overlapping terrain."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
