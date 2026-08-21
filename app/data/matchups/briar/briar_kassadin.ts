// app/data/matchups/briar/briar_kassadin.ts
import type { MatchupSummary } from "../_types";

export const briar_kassadin: MatchupSummary = {
  champs: ["briar", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]], E의 [[KNOCKBACK]], R2의 [[FEAR]]로 카사딘 R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]], [[FEAR]]는 남아있음.", 
        "E의 [[CAST_COMMIT]]으로 카사딘 Q의 [[DISRUPT]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 카사딘 Q의 [[DISRUPT]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 카사딘 R의 [[BLINK]]을 따라갈 수 있음. \n 단, 카사딘과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]], E [[KNOCKBACK]], and R2 [[FEAR]] cannot interrupt Kassadin's R [[BLINK]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Kassadin's Q [[DISRUPT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Kassadin's Q [[DISRUPT]].",
        "R2 [[HOMING]] [[DASH]] can follow Kassadin's R [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Kassadin."],
    },
    kassadin: {
      ko: [],
      en: [],
    },
  },
};
