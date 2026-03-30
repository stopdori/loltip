// app/data/matchups/ahri/ahri_morgana.ts
import type { MatchupSummary } from "../_types";

export const ahri_morgana: MatchupSummary = {
  champs: ["ahri", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [""],
      en: [""],
    },
    morgana: {
      ko: ["모르가나 Q의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음.", "모르가나 E의 [[CC_IMMUNE]]으로 아리 E의 [[CHARM]]을 무시할 수 있음.\n단, 데미지는 유효."],
      en: ["Morgana's Q [[ROOT]] cannot interrupt Ahri's R.", "Morgana's E [[CC_IMMUNE]] can ignore Ahri's E [[CHARM]]. However, the damage still applies."],
    },
  },
};
