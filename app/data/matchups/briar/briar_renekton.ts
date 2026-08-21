// app/data/matchups/briar/briar_renekton.ts
import type { MatchupSummary } from "../_types";

export const briar_renekton: MatchupSummary = {
  champs: ["briar", "renekton"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 레넥톤 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 레넥톤 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 레넥톤 W의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 레넥톤 W의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 레넥톤 E의 [[DASH]]을 따라갈 수 있음. \n 단, 레넥톤과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Renekton's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Renekton's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Renekton's W [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Renekton's W [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Renekton's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Renekton."],
    },
    renekton: {
      ko: [],
      en: [],
    },
  },
};
