// app/data/matchups/ahri/ahri_taliyah.ts
import type { MatchupSummary } from "../_types";

export const ahri_taliyah: MatchupSummary = {
  champs: ["ahri", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 탈리야 R을 끊을 수 있음"],
      en: ["Ahri's E can interrupt Taliyah's R"],
    },
    taliyah: {
      ko: ["탈리야 E의 [[STUN]]로 아리 R을 끊을 수 없음.\n단, [[STUN]]은 남아있음"],
      en: ["Taliyah's E [[STUN]] cannot interrupt Ahri's R.\nHowever, the [[STUN]] still applies."],
    },
  },
};
