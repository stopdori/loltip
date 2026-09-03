// app/data/matchups/hecarim/hecarim_rakan.ts
import type { MatchupSummary } from "../_types";

export const hecarim_rakan: MatchupSummary = {
  champs: ["hecarim", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Rakan's W and E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Rakan's W [[AIRBORNE]] and R [[CHARM]]. \n However, [[CHARM]] remains after [[UNSTOPPABLE]] ends."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
