// app/data/matchups/briar/briar_chogath.ts
import type { MatchupSummary } from "../_types";

export const briar_chogath: MatchupSummary = {
  champs: ["briar", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Cho'Gath's Q [[AIRBORNE]] or W [[SILENCE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Cho'Gath's Q [[AIRBORNE]] and W [[SILENCE]]."],
    },
    chogath: {
      ko: [],
      en: [],
    },
  },
};
