// app/data/matchups/briar/briar_gragas.ts
import type { MatchupSummary } from "../_types";

export const briar_gragas: MatchupSummary = {
  champs: ["briar", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 그라가스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 그라가스 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 그라가스 E, R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 그라가스 E, R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 그라가스 E의 [[DASH]]을 따라갈 수 있음. \n 단, 그라가스와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Gragas's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Gragas's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Gragas's E and R [[KNOCKBACK]].",
        "R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Gragas's E and R [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Gragas's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Gragas."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
