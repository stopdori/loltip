// app/data/matchups/hecarim/hecarim_viego.ts
import type { MatchupSummary } from "../_types";

export const hecarim_viego: MatchupSummary = {
  champs: ["hecarim", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 비에고 W의 [[SKILL_CHARGED]], [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Viego's W [[SKILL_CHARGED]] [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Viego's W [[STUN]] and R [[KNOCKBACK]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
