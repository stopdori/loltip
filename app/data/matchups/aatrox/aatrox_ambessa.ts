// app/data/matchups/aatrox/aatrox_ambessa.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ambessa: MatchupSummary = {
  champs: ["aatrox", "ambessa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 암베사 P를 끊을 수 있음"],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Ambessa's P"],
    },
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 아트록스 E를 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Aatrox's E.", "Ambessa's R [[UNSTOPPABLE]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
