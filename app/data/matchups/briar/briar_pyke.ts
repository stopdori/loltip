// app/data/matchups/briar/briar_pyke.ts
import type { MatchupSummary } from "../_types";

export const briar_pyke: MatchupSummary = {
  champs: ["briar", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "Q의 [[STUN]]로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 파이크 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 파이크 Q의 [[GRAB]], E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 파이크 E의 [[DASH]], R의 [[BLINK]]을 따라갈 수 있음. \n 단, 파이크와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Pyke's Q [[SKILL_CHARGED]].",
        "Q [[STUN]] cannot interrupt Pyke's E [[DASH]] and R [[BLINK]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Pyke's E [[DASH]] and R [[BLINK]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Pyke's Q [[GRAB]] and E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Pyke's Q [[GRAB]] and E [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Pyke's E [[DASH]] and R [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Pyke."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
