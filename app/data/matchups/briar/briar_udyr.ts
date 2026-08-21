// app/data/matchups/briar/briar_udyr.ts
import type { MatchupSummary } from "../_types";

export const briar_udyr: MatchupSummary = {
  champs: ["briar", "udyr"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 우디르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 우디르 E는 정말 찰나이지만 [[DASH]] 판정.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 우디르 E의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 우디르 E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 우디르 E의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 우디르 E의 [[DASH]]을 따라갈 수 있음. \n 단, 우디르와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Udyr's E [[DASH]]. \n However, the [[STUN]] still applies. \n Udyr's E is a very brief moment, but it still registers as a [[DASH]].",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Udyr's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Udyr's E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Udyr's E [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Udyr's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Udyr."],
    },
    udyr: {
      ko: [],
      en: [],
    },
  },
};
