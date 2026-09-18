// app/data/matchups/aatrox/aatrox_ahri.ts
import type { MatchupSummary } from "../_types";

export const aatrox_ahri: MatchupSummary = {
  champs: ["aatrox", "ahri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]]효과로 아리 R의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["Q's [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Ahri's R [[DASH]]. [[EXIST]]"],
    },
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Aatrox's E [[DASH]]. [[EXIST]]"],
    },
  },
};
