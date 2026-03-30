// app/data/matchups/ahri/ahri_kennen.ts
import type { MatchupSummary } from "../_types";

export const ahri_kennen: MatchupSummary = {
  champs: ["ahri", "kennen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 케넨 E, R의 [[CAST_COMMIT]]을 끊을 수 없음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Kennen's E or R [[CAST_COMMIT]]."],
    },
    kennen: {
      ko: ["케넨 P의 [[STUN]]로 아리 R을 끊을 수 없음.\n단, [[STUN]]은 남아있음."],
      en: ["Kennen's P [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
    },
  },
};
