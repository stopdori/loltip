// app/data/matchups/bard/bard_evelynn.ts
import type { MatchupSummary } from "../_types";

export const bard_evelynn: MatchupSummary = {
  champs: ["bard", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's R (Tempered Fate) can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Bard's E (wall traversal) [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
