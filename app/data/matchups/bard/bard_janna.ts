// app/data/matchups/bard/bard_janna.ts
import type { MatchupSummary } from "../_types";

export const bard_janna: MatchupSummary = {
  champs: ["bard", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: [""],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Bard's E (wall-travel) [[SKILL_CHANNEL]] [[DASH]]."],
    },
  },
};
