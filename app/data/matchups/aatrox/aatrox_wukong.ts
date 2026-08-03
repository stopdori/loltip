// app/data/matchups/aatrox/aatrox_wukong.ts
import type { MatchupSummary } from "../_types";

export const aatrox_wukong: MatchupSummary = {
  champs: ["aatrox", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 오공 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[TRUE_SIGHT]]로 오공 W의 [[INVISIBILITY]]을 볼 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Wukong's E [[DASH]].", "W [[TRUE_SIGHT]] reveals Wukong's W [[INVISIBILITY]]."],
    },
    wukong: {
      ko: ["오공 W의 [[CLONE]]으로 아트록스 W의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Wukong's W [[CLONE]] can block Aatrox's W [[PROJECTILE]]."],
    },
  },
};
