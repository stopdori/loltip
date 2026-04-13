// app/data/matchups/aatrox/aatrox_fizz.ts
import type { MatchupSummary } from "../_types";

export const aatrox_fizz: MatchupSummary = {
  champs: ["aatrox", "fizz"],
  summary: {
    ko: ["피즈 E(재간둥이)로도 아트록스 W(사슬) 끌림을 피할 수 없음"],
    en: ["Fizz's E does not dodge Aatrox's W pull."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 피즈 Q의 [[DASH]]을 끊을 수 있음.", "아트록스 W([[TETHER]])를 맞고 피즈가 E(재간둥이)를 사용하면 [[TETHER]]효과가 남아있고, 벗어나지 않으면 [[GRAB]] 뿐만아니라 데미지도 들어감."],
      en: ["Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Fizz's Q [[DASH]].", "If Aatrox hits Fizz with W [[TETHER]] and Fizz uses E (Playful/Trickster), the [[TETHER]] remains. If Fizz doesn't leave the range, both [[GRAB]] and damage still apply."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
