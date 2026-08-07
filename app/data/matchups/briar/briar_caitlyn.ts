// app/data/matchups/briar/briar_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const briar_caitlyn: MatchupSummary = {
  champs: ["briar", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 케이틀린 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 케이틀린 W의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 케이틀린 E의 [[DASH]]을 따라갈 수 있음. \n 단, 케이틀린과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Caitlyn's E [[DASH]].",
        "E [[CAST_COMMIT]] allows maintaining the cast even if hit by Caitlyn's W [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow Caitlyn's E [[DASH]]. \n However, [[HOMING]] ends upon colliding with Caitlyn."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
