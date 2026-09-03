// app/data/matchups/hecarim/hecarim_nunu.ts
import type { MatchupSummary } from "../_types";

export const hecarim_nunu: MatchupSummary = {
  champs: ["hecarim", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 누누와 월럼프 W의 [[AIRBORNE]], E의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Nunu & Willump's W [[SKILL_CHANNEL]] [[DASH]] and R [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Nunu & Willump's W [[AIRBORNE]] and E [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
