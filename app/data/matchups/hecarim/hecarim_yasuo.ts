// app/data/matchups/hecarim/hecarim_yasuo.ts
import type { MatchupSummary } from "../_types";

export const hecarim_yasuo: MatchupSummary = {
  champs: ["hecarim", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["야스오 W(장막)가 헤카림 R 조건부로 막을 수 있음. 헤카림 몸에 닿으면 막을 수 없음."],
      en: ["Yasuo’s W (Wind Wall) can conditionally block Hecarim’s R. If Hecarim’s body hits the target, it cannot be blocked."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]으로 헤카림 R의 [[PROJECTILE]]를 막을 수 있음. [[CLIP:https://www.youtube.com/shorts/0Gy2DK4XlfE]]"],
      en: ["Yasuo's W [[WINDSHIELD]] can block Hecarim's R [[PROJECTILE]]. [[CLIP:https://www.youtube.com/shorts/0Gy2DK4XlfE]]"],
    },
  },
};
