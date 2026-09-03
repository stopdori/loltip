// app/data/matchups/hecarim/hecarim_pyke.ts
import type { MatchupSummary } from "../_types";

export const hecarim_pyke: MatchupSummary = {
  champs: ["hecarim", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 파이크 Q의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Pyke's Q [[SKILL_CHARGED]] and E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Pyke's Q [[GRAB]] and E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
