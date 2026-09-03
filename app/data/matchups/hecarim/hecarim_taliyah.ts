// app/data/matchups/hecarim/hecarim_taliyah.ts
import type { MatchupSummary } from "../_types";

export const hecarim_taliyah: MatchupSummary = {
  champs: ["hecarim", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 탈리야 R2의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 탈리야 E의 [[STUN]] / E, R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Taliyah's R2 [[SKILL_CHANNEL]] [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Taliyah's E [[STUN]] / E and R [[KNOCKBACK]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
