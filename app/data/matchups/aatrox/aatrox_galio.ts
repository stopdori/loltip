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
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 갈리오 E의 [[DASH]] / W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Galio's E [[DASH]] and W and R [[SKILL_CHANNEL]]."],
    },
    galio: {
      ko: ["갈리오 E(후진단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과를 무시할 수 있음."],
      en: ["Galio's E (backstep phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
