// app/data/matchups/briar/briar_jhin.ts
import type { MatchupSummary } from "../_types";

export const briar_jhin: MatchupSummary = {
  champs: ["briar", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "E의 [[KNOCKBACK]]으로 진 E의 [[TRAP]]을 [[KNOCKBACK]] 할 수 없음.",
        "E의 [[CAST_COMMIT]]으로 진 W의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 진 W의 [[ROOT]]을 무시할 수 있음."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Jhin's R [[SKILL_CHANNEL]].",
        "Briar's E [[KNOCKBACK]] cannot knock back Jhin's E [[TRAP]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Jhin's W [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Jhin's W [[ROOT]]."],
    },
    jhin: {
      ko: ["E로 [[SUMMON]]된 [[TRAP]]을 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 없음."],
      en: ["The [[TRAP]] [[SUMMON]]ed by Jhin's E cannot be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
