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
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 오로라 W의 [[DASH]], E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Aurora's W [[DASH]] and E [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음. \n 단, W의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Aurora's E (wind-up phase) [[CC_BUFFER]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
