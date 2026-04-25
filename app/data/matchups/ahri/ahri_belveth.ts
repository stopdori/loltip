// app/data/matchups/ahri/ahri_belveth.ts
import type { MatchupSummary } from "../_types";

export const ahri_belveth: MatchupSummary = {
  champs: ["ahri", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 벨베스 Q의 [[DASH]], W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Bel'Veth's Q [[DASH]] and W [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 R의 [[CAST_COMMIT]]으로 아리 E의 [[CHARM]]으로 끊기지 않음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Ahri's R [[DASH]].", "Bel'Veth's R [[CAST_COMMIT]] can maintain its cast even when hit by Ahri's E [[CHARM]]."],
    },
  },
};
