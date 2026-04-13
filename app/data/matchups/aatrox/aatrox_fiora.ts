// app/data/matchups/aatrox/aatrox_fiora.ts
import type { MatchupSummary } from "../_types";

export const aatrox_fiora: MatchupSummary = {
  champs: ["aatrox", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 피오라 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Fiora's Q [[DASH]]."],
    },
    fiora: {
      ko: ["피오라 W(응수)로 아트록스 Q의 [[AIRBORNE]], W [[GRAB]] 효과와 데미지를 무시하고 [[STUN]]을 걸 수 있음."],
      en: ["Fiora's W (Riposte) can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]] effect and damage, and apply a [[STUN]]."],
    },
  },
};
