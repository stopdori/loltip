// app/data/matchups/aatrox/aatrox_yasuo.ts
import type { MatchupSummary } from "../_types";

export const aatrox_yasuo: MatchupSummary = {
  champs: ["aatrox", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 야스오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W [[GRAB]] can interrupt Yasuo's E [[DASH]]."],
    },
    yasuo: {
      ko: ["야스오 W([[WINDSHIELD]])로 아트록스 W의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W [[WINDSHIELD]] can block Aatrox's W [[PROJECTILE]]."],
    },
  },
};
