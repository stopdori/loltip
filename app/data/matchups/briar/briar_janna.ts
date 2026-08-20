// app/data/matchups/briar/briar_janna.ts
import type { MatchupSummary } from "../_types";

export const briar_janna: MatchupSummary = {
  champs: ["briar", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R [[FEAR]] can interrupt Janna's R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Janna's Q [[AIRBORNE]] or R [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]]."],
    },
    janna: {
      ko: [],
      en: [],
    },
  },
};
