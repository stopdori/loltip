// app/data/matchups/ahri/ahri_aphelios.ts
import type { MatchupSummary } from "../_types";

export const ahri_aphelios: MatchupSummary = {
  champs: ["ahri", "aphelios"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 아펠리오스 R의 [[CAST_COMMIT]]를 막을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Aphelios's R [[CAST_COMMIT]]. However, the [[CHARM]] still applies."],
    },
    aphelios: {
      ko: ["아펠리오스의 반월검(흰색)의 Q(포탑)가 활성화 되면, 아리 E를 막을 수 있음"],
      en: ["Aphelios's activated turret can block Ahri's E"],
    },
  },
};
