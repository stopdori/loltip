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
      ko: ["E의 [[CHARM]]으로 탈리야 R1의 [[SKILL_CHANNEL]], R2의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Taliyah's R1 [[SKILL_CHANNEL]] and R2 [[DASH]]."],
    },
    taliyah: {
      ko: ["탈리야 E의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Taliyah's E [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
