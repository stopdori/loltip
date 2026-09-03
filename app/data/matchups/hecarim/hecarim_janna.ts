// app/data/matchups/hecarim/hecarim_janna.ts
import type { MatchupSummary } from "../_types";

export const hecarim_janna: MatchupSummary = {
  champs: ["hecarim", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Hecarim's E [[DASH]]."],
    },
  },
};
