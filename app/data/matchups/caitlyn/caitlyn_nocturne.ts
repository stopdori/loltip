// app/data/matchups/caitlyn/caitlyn_nocturne.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_nocturne: MatchupSummary = {
  champs: ["caitlyn", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: [],
      en: [],
    },
    nocturne: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 \n 녹턴 R의 [[NEAR_SIGHT]]가 발동 했을 때 \n 1. 케이틀린 W([[TRAP]])을 녹턴이 밟으면 \n W의 [[TRUE_SIGHT]]가 있지만 케이틀린 화면에서도 녹턴이 보이지 않음. [[CLIP:https://youtube.com/shorts/r2uPnXbsm3I?feature=share]] \n \n 2. 케이틀린 R의 [[TRUE_SIGHT]]로 케이틀린 화면에서만 녹턴을 볼 수 있음. [[CLIP:https://youtube.com/shorts/SiRkbEVYFNQ]] \n 단, R의 [[PROJECTILE]]가 적중하면 볼 수 없음."],
    en: ["Unusual interaction \n When Nocturne's R [[NEAR_SIGHT]] is active, \n 1. if Nocturne steps on Caitlyn's W ([[TRAP]]), \n even though the W has [[TRUE_SIGHT]], Nocturne is still not visible even on Caitlyn's own screen. [[CLIP:https://youtube.com/shorts/r2uPnXbsm3I?feature=share]] \n \n 2. Caitlyn's R [[TRUE_SIGHT]] can only reveal Nocturne on Caitlyn's own screen. [[CLIP:https://youtube.com/shorts/SiRkbEVYFNQ]] \n However, this stops working once R's [[PROJECTILE]] hits."],
  },
};
