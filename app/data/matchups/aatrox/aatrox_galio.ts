// app/data/matchups/aatrox/aatrox_galio.ts
import type { MatchupSummary } from "../_types";

export const aatrox_galio: MatchupSummary = {
  champs: ["aatrox", "galio"],
  summary: {
    ko: ["갈리오 E를 타이밍맞게 사용하면 아트 W(사슬) 무시함"],
    en: ["Galio's E can ignore Aatrox's W pull with proper timing."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 갈리오 E(돌진단계), R(시전집중)을 끊을 수 있음"],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Galio's E (dash phase) and R (channeling)"],
    },
    galio: {
      ko: ["갈리오 E로 후진할 때 아트록스 Q끝, W [[GRAB]]효과를 무시할 수 있고. 전진할 때는 불가능함"],
      en: ["Galio can ignore Aatrox's Q (sweet spot) or W pull during the backstep of his E", "However, Galio cannot ignore them once he starts charging forward"],
    },
  },
};
