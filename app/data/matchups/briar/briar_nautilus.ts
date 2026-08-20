// app/data/matchups/briar/briar_nautilus.ts
import type { MatchupSummary } from "../_types";

export const briar_nautilus: MatchupSummary = {
  champs: ["briar", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 노틸러스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 노틸러스 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 노틸러스 Q의 [[DASH]]을 따라갈 수 있음. \n 단, 노틸러스와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Nautilus's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Nautilus's Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Nautilus's P [[ROOT]], Q [[GRAB]], or R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Nautilus's P [[ROOT]], Q [[GRAB]], and R [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Nautilus's Q [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Nautilus."],
    },
    nautilus: {
      ko: [],
      en: [],
    },
  },
};
