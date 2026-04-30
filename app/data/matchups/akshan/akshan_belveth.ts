// app/data/matchups/akshan/akshan_belveth.ts
import type { MatchupSummary } from "../_types";

export const akshan_belveth: MatchupSummary = {
  champs: ["akshan", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [],
      en: [],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아크샨 E, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "벨베스 R의 [[SUMMON]]된 공허 벌레들이 아크샨 R의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Akshan's E and R [[SKILL_CHANNEL]].",
        "Bel'Veth's R [[SUMMON]]ed Void creatures can block Akshan's R [[PROJECTILE]]."],
    },
  },
};
