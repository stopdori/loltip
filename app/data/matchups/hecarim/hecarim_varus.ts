// app/data/matchups/hecarim/hecarim_varus.ts
import type { MatchupSummary } from "../_types";

export const hecarim_varus: MatchupSummary = {
  champs: ["hecarim", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 바루스 R의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Varus's Q [[SKILL_CHARGED]].",
        "R [[UNSTOPPABLE]] can ignore Varus's R [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
