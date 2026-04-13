// app/data/matchups/ahri/ahri_janna.ts
import type { MatchupSummary } from "../_types";

export const ahri_janna: MatchupSummary = {
  champs: ["ahri", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Janna's R [[SKILL_CHANNEL]]."],
    },
    janna: {
      ko: ["잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
