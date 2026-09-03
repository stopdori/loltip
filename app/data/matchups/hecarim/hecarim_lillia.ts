// app/data/matchups/hecarim/hecarim_lillia.ts
import type { MatchupSummary } from "../_types";

export const hecarim_lillia: MatchupSummary = {
  champs: ["hecarim", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 릴리아 R의 [[SLEEP]]을 무시할 수 있음. \n 단, [[DROWSY]]에서 [[SLEEP]]으로 넘어갈 때 [[UNSTOPPABLE]] 상태에 있어야 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted.",
        "R [[UNSTOPPABLE]] can ignore Lillia's R [[SLEEP]]. \n However, [[UNSTOPPABLE]] must be active at the moment [[DROWSY]] transitions into [[SLEEP]] in order to ignore it."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
