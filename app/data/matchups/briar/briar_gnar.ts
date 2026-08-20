// app/data/matchups/briar/briar_gnar.ts
import type { MatchupSummary } from "../_types";

export const briar_gnar: MatchupSummary = {
  champs: ["briar", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 나르 메가폼 W, R의 [[STUN]] / R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 나르 메가폼 Q, R의 [[STUN]] / R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 나르 미니폼 E / 메가폼 E의 [[DASH]]을 따라갈 수 있음. \n 단, 나르와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Gnar's Mini/Mega form E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Gnar's Mini/Mega form E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Gnar's Mega form W and R [[STUN]] or R's [[KNOCKBACK]].",
        "R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Gnar's Mega form Q and R [[STUN]] or R's [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Gnar's Mini form E or Mega form E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Gnar."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
