// app/data/matchups/aatrox/aatrox_vladimir.ts
import type { MatchupSummary } from "../_types";

export const aatrox_vladimir: MatchupSummary = {
  champs: ["aatrox", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["W를 맞고 블라디가 W를 사용하면 W의 [[TETHER]] 효과가 남아있고, \n 벗어나지 않으면 [[GRAB]] 뿐만아니라 데미지도 들어감."],
      en: ["If Vladimir uses his own W after being hit by W, the [[TETHER]] remains; if he doesn't escape, he takes full damage including the [[GRAB]]."],
    },
    vladimir: {
      ko: ["블라디미르 E의 [[SKILL_CHARGED]]은 아트록스 Q의 [[AIRBORNE]] W의 [[GRAB]]으로 끊길 수 있음. \n 단, 맞는 순간까지 모았던 [[SKILL_CHARGED]]은 발사."],
      en: ["Vladimir's E [[SKILL_CHARGED]] can be interrupted by Aatrox's Q [[AIRBORNE]] or W [[GRAB]]. \n However, the [[SKILL_CHARGED]] charged up until the moment of impact is still released."],
    },
  },
};
