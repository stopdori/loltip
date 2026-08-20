// app/data/matchups/briar/briar_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const briar_jarvaniv: MatchupSummary = {
  champs: ["briar", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 자르반 QE, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 자르반 EQ의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 자르반 EQ의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 자르반 EQ의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 자르반 EQ, R의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 자르반과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Jarvan IV's EQ or R [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Jarvan IV's EQ [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Jarvan IV's EQ [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Jarvan IV's EQ [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Jarvan IV's EQ [[DASH]], R [[DASH]], and R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Jarvan IV."],
    },
    jarvaniv: {
      ko: ["자르반 R의 [[UNSTOPPABLE]] [[DASH]]로 브라이어 Q, E의 [[STUN]] / W의 [[KNOCKBACK]] / R2의 [[FEAR]]를 무시할 수 있음."],
      en: ["Jarvan IV's R [[UNSTOPPABLE]] [[DASH]] can ignore Briar's Q and E [[STUN]], E [[KNOCKBACK]], and R2 [[FEAR]]."],
    },
  },
  common: {
    ko: [],
    en: [],
  },
};
