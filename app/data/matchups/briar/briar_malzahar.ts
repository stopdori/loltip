// app/data/matchups/briar/briar_malzahar.ts
import type { MatchupSummary } from "../_types";

export const briar_malzahar: MatchupSummary = {
  champs: ["briar", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 말자하 Q의 [[SILENCE]], R의 [[SUPPRESS]]을 무시할 수 있음."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Malzahar's Q [[SILENCE]] or R [[SUPPRESS]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Malzahar's Q [[SILENCE]] and R [[SUPPRESS]]."],
    },
    malzahar: {
      ko: ["W로 [[SUMMON]]된 공허충을 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 있음."],
      en: ["The Voidling [[SUMMON]]ed by Malzahar's W can be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
