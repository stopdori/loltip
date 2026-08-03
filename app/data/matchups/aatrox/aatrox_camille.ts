// app/data/matchups/aatrox/aatrox_camille.ts
import type { MatchupSummary } from "../_types";

export const aatrox_camille: MatchupSummary = {
  champs: ["aatrox", "camille"],
  summary: {
    ko: ["카밀 R은 아트록스 W 사슬 효과를 무시함"],
    en: ["Camille's R dodges Aatrox's W chain."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 카밀 E(돌진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Camille's E (dash phase) [[DASH]]."],
    },
    camille: {
      ko: ["카밀 E(그렙단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과를 무시할 수 있음."],
      en: ["Camille's E (grapple phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
