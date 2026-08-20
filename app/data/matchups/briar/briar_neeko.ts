// app/data/matchups/briar/briar_neeko.ts
import type { MatchupSummary } from "../_types";

export const briar_neeko: MatchupSummary = {
  champs: ["briar", "neeko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 니코 E의 [[ROOT]] / R의 [[AIRBORNE]], [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 니코 E의 [[ROOT]] / R의 [[AIRBORNE]], [[STUN]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Neeko's E [[ROOT]] or R [[AIRBORNE]] and [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Neeko's E [[ROOT]] and R [[AIRBORNE]] and [[STUN]]."],
    },
    neeko: {
      ko: [],
      en: [],
    },
  },
};
