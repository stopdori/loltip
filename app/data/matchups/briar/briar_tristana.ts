// app/data/matchups/briar/briar_tristana.ts
import type { MatchupSummary } from "../_types";

export const briar_tristana: MatchupSummary = {
  champs: ["briar", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 트리스타나 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 트리스타나 점프단계 W의 [[DASH]] 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 트리스타나 R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 트리스타나 R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 트리스타나 W의 [[DASH]]을 따라갈 수 있음. \n 단, 트리스타나와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Tristana's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Tristana's W [[DASH]] (jump phase).",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Tristana's R [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Tristana's R [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Tristana's W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Tristana."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
