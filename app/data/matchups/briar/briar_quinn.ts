// app/data/matchups/briar/briar_quinn.ts
import type { MatchupSummary } from "../_types";

export const briar_quinn: MatchupSummary = {
  champs: ["briar", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 퀸 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 퀸 E의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 퀸 E의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 퀸 E의 [[DASH]]을 따라갈 수 있음. \n 단, 퀸과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Quinn's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Quinn's E [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Quinn's E [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Quinn's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Quinn."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
