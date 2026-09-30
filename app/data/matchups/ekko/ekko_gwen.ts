// app/data/matchups/ekko/ekko_gwen.ts
import type { MatchupSummary } from "../_types";

export const ekko_gwen: MatchupSummary = {
  champs: ["ekko", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 그웬 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]"],
      en: [""],
    },
    gwen: {
      ko: ["그웬 W의 [[UNTARGETABLE]]로 [[ZONE]] 밖의 에코 Q, W, R을 맞지 않음."],
      en: ["Gwen's W prevents Ekko's Q, W and R from hitting when outside the zone"],
    },
  },
};
