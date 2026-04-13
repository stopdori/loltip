// app/data/matchups/aatrox/aatrox_aurora.ts
import type { MatchupSummary } from "../_types";

export const aatrox_aurora: MatchupSummary = {
  champs: ["aatrox", "aurora"],
  summary: {
    ko: ["오로라 은신은 아트 W에 보임"],
    en: ["Aatrox's W reveals Aurora's invisibility."],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 오로라 W의 [[DASH]], E(후진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Aatrox's Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Aurora's W [[DASH]] and E (backstep phase) [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음."],
      en: ["Aurora's E (wind-up phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
