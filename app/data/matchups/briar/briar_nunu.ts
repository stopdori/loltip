// app/data/matchups/briar/briar_nunu.ts
import type { MatchupSummary } from "../_types";

export const briar_nunu: MatchupSummary = {
  champs: ["briar", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 누누와 월럼프 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 누누와 월럼프 W의 [[AIRBORNE]], E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 누누와 월럼프 W의 [[AIRBORNE]], E의 [[ROOT]]을 무시할 수 있음."],
      en: ["Q and E [[STUN]], E [[KNOCKBACK]], and R [[FEAR]] can interrupt Nunu & Willump's W and R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Nunu & Willump's W [[AIRBORNE]] or E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Nunu & Willump's W [[AIRBORNE]] and E [[ROOT]]."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
