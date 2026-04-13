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
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 갈리오 E(돌진단계)의 [[DASH]], R([[SKILL_CHANNEL]])을 끊을 수 있음."],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Galio's E (dash phase) and R (channeling)"],
    },
    galio: {
      ko: ["갈리오 E(후진단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과를 무시할 수 있음."],
      en: ["Galio's E (backstep phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
