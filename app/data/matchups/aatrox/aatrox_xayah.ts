// app/data/matchups/aatrox/aatrox_xayah.ts
import type { MatchupSummary } from "../_types";

export const aatrox_xayah: MatchupSummary = {
  champs: ["aatrox", "xayah"],
  summary: {
    ko: ["자야 R로도 아트록스 W 사슬은 끊어지지 않음"],
    en: ["Xayah's R cannot escape Aatrox's W pull/chain"],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 W를 맞고 자야가 R을 사용하면 [[TETHER]]효과가 남아있고, 벗어나지 않으면 [[GRAB]] 뿐만아니라 데미지도 들어감"],
      en: ["If Xayah uses R after being hit by Aatrox's W, the [[TETHER]] remains; if she doesn't escape, she takes full damage including the [[GRAB]]"],
    },
    xayah: {
      ko: [],
      en: [],
    },
  },
};
