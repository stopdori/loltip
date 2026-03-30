// app/data/matchups/ahri/ahri_malzahar.ts
import type { MatchupSummary } from "../_types";

export const ahri_malzahar: MatchupSummary = {
  champs: ["ahri", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 말자하 R의 [[SUPPRESS]]을 끊을 수 있음.\n단, 말자하 P의 [[CC_IMMUNE]]이 없을때 유효."],
      en: ["Ahri's E [[CHARM]] can interrupt Malzahar's R [[SUPPRESS]].\nOnly valid when Malzahar's P [[CC_IMMUNE]] is not active."],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 아리 E의 [[CHARM]]을 무시할 수 있음.\n단, 데미지는 감소되어 유효.", "말자하 R의 [[SUPPRESS]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Ahri's E [[CHARM]]. However, damage is still applied (reduced).", "Malzahar's R [[SUPPRESS]] can interrupt Ahri's R"],
    },
  },
};
