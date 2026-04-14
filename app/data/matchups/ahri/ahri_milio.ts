// app/data/matchups/ahri/ahri_milio.ts
import type { MatchupSummary } from "../_types";

export const ahri_milio: MatchupSummary = {
  champs: ["ahri", "milio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    milio: {
      ko: ["밀리오 Q의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", "밀리오 R의 [[CC_CLEANSE]]로 아리 E의 [[CHARM]]을 해제할 수 있음. \n 단, 밀리오가 [[CHARM]]에 걸리면 사용 불가."],
      en: ["Milio's Q [[KNOCKBACK]] can interrupt Ahri's R [[DASH]].", "Milio's R [[CC_CLEANSE]] can cleanse Ahri's E [[CHARM]] from allies. \n However, if Milio is [[CHARM]]ed, it cannot be used."],
    },
  },
};
