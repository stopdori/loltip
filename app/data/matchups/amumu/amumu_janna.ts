// app/data/matchups/amumu/amumu_janna.ts
import type { MatchupSummary } from "../_types";

export const amumu_janna: MatchupSummary = {
  champs: ["amumu", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "Q의 [[CC_BUFFER]]로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q and R [[STUN]] can interrupt Janna's R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Amumu's Q [[DASH]]."],
    },
  },
};
