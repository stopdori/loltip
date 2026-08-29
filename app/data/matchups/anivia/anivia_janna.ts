// app/data/matchups/anivia/anivia_janna.ts
import type { MatchupSummary } from "../_types";

export const anivia_janna: MatchupSummary = {
  champs: ["anivia", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Janna's R [[SKILL_CHANNEL]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
