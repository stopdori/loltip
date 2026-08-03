// app/data/matchups/akali/akali_kayn.ts
import type { MatchupSummary } from "../_types";

export const akali_kayn: MatchupSummary = {
  champs: ["akali", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 케인 E의 벽이동([[MOBILITY]])을 따라갈 수 있음. \n 단, 벽을 통과중일때 아칼리가 도착하면 케인은 데미지를 입고 계속 이동하고, \n 아칼리는 벽에서 나옴."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Kayn's E wall traverse ([[MOBILITY]]). \n If Akali arrives while Kayn is passing through a wall, Kayn takes damage and continues moving, \n while Akali exits the wall."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
