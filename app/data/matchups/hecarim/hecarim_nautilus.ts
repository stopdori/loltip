// app/data/matchups/hecarim/hecarim_nautilus.ts
import type { MatchupSummary } from "../_types";

export const hecarim_nautilus: MatchupSummary = {
  champs: ["hecarim", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Nautilus's Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Nautilus's P [[ROOT]], Q [[GRAB]], and R [[AIRBORNE]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
