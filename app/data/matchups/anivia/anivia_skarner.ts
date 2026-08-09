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
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 스카너 E(벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 애니비아 W([[TERRAIN]])는 지형지물에도 겹쳐서 사용 가능."],
      en: ["Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Skarner's E (wall traverse) [[SKILL_CHANNEL]]. \n Note: Anivia's W [[TERRAIN]] can be placed overlapping terrain."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
