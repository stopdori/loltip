// app/data/matchups/ahri/ahri_kassadin.ts
import type { MatchupSummary } from "../_types";

export const ahri_kassadin: MatchupSummary = {
  champs: ["ahri", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    kassadin: {
      ko: ["카사딘 R(준비단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]] 효과를 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, 카사딘 R(순간이동단계)가 종료 후 [[CHARM]]은 남아있음."],
      en: ["Kassadin's R (preparation phase) [[CC_BUFFER]] allows him to temporarily ignore Ahri's E [[CHARM]] and continue to the next phase. \n However, the [[CHARM]] remains after Kassadin's R (teleport phase) ends."],
    },
  },
};
