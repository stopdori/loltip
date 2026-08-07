// app/data/matchups/amumu/amumu_taliyah.ts
import type { MatchupSummary } from "../_types";

export const amumu_taliyah: MatchupSummary = {
  champs: ["amumu", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 탈리야 W의 [[AIRBORNE]], E의 [[STUN]], R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q and R [[STUN]] can interrupt Taliyah's R1 [[SKILL_CHANNEL]] and R2 [[TRANSFORM]].", "Q [[CC_BUFFER]] can ignore Taliyah's W [[AIRBORNE]], E [[STUN]], and R [[AIRBORNE]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
