// app/data/matchups/briar/briar_morgana.ts
import type { MatchupSummary } from "../_types";

export const briar_morgana: MatchupSummary = {
  champs: ["briar", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 모르가나 Q의 [[ROOT]], R의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 모르가나 Q의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Morgana's Q [[ROOT]] or R [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Morgana's Q [[ROOT]] and R [[STUN]]."],
    },
    morgana: {
      ko: [],
      en: [],
    },
  },
};
