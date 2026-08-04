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
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]]효과로 암베사 P의 [[DASH]]을 끊을 수 있음"],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Ambessa's P [[DASH]]."],
    },
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.", "R의 [[UNSTOPPABLE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Aatrox's E.", "R [[UNSTOPPABLE]] can ignore Aatrox's Q [[AIRBORNE]] and W [[GRAB]]."],
    },
  },
};
