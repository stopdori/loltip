// app/data/matchups/briar/briar_elise.ts
import type { MatchupSummary } from "../_types";

export const briar_elise: MatchupSummary = {
  champs: ["briar", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 엘리스 인간폼 E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 엘리스 인간폼 E의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 엘리스 거미폼 Q의 [[DASH]], E의 [[UNTARGETABLE]]를 따라갈 수 있음. \n 단, 엘리스와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Elise's Spider Form Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Elise's Spider Form Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Elise's Human Form E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Elise's Human Form E [[STUN]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Elise's Spider Form Q [[DASH]] and E [[UNTARGETABLE]]. \n However, [[HOMING]] ends upon colliding with Elise."],
    },
    elise: {
      ko: [],
      en: [],
    },
  },
};
