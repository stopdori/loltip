// app/data/matchups/briar/briar_kalista.ts
import type { MatchupSummary } from "../_types";

export const briar_kalista: MatchupSummary = {
  champs: ["briar", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 칼리스타 P의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 칼리스타 R2의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 칼리스타 R2의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 칼리스타 P의 [[DASH]], R1의 [[UNTARGETABLE]], R2의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 대상과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Kalista's P [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Kalista's P [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Kalista's R2 [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Kalista's R2 [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Kalista's P [[DASH]], R1 [[UNTARGETABLE]], and R2 [[UNTARGETABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with the target."],
    },
    kalista: {
      ko: ["W로 [[SUMMON]]된 감시하는 혼을 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 없음."],
      en: ["The Sentinel [[SUMMON]]ed by Kalista's W cannot be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
