// app/data/matchups/briar/briar_varus.ts
import type { MatchupSummary } from "../_types";

export const briar_varus: MatchupSummary = {
  champs: ["briar", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 바루스 R의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 바루스 R의 [[ROOT]]을 무시할 수 있음."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Varus's Q [[SKILL_CHARGED]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Varus's R [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Varus's R [[ROOT]]."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
