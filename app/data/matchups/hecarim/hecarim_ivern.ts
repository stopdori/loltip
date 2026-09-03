// app/data/matchups/hecarim/hecarim_ivern.ts
import type { MatchupSummary } from "../_types";

export const hecarim_ivern: MatchupSummary = {
  champs: ["hecarim", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 아이번 Q2의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 아이번 Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Ivern's Q2 [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Ivern's Q [[ROOT]] and R-[[SUMMON]]ed Daisy's 3rd [[BA]] [[AIRBORNE]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
