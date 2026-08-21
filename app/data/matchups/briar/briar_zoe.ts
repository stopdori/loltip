// app/data/matchups/briar/briar_zoe.ts
import type { MatchupSummary } from "../_types";

export const briar_zoe: MatchupSummary = {
  champs: ["briar", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 조이 R1, R2의 [[BLINK]]을 끊을 수 없음.",
        "E의 [[CAST_COMMIT]]으로 조이 E의 [[SLEEP]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 조이 E의 [[SLEEP]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 조이 R1의 [[BLINK]], R2의 [[UNSTOPPABLE]] [[BLINK]]을 따라갈 수 있음. \n 단, 조이와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[FEAR]] cannot interrupt Zoe's R1 and R2 [[BLINK]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Zoe's E [[SLEEP]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Zoe's E [[SLEEP]].",
        "R2 [[HOMING]] [[DASH]] can follow Zoe's R1 [[BLINK]] and R2 [[UNSTOPPABLE]] [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Zoe."],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
