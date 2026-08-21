// app/data/matchups/briar/briar_qiyana.ts
import type { MatchupSummary } from "../_types";

export const briar_qiyana: MatchupSummary = {
  champs: ["briar", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 키아나 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 키아나 W, E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 키아나 물Q의 [[ROOT]] / R의 [[KNOCKBACK]], [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 키아나 물Q의 [[ROOT]] / R의 [[KNOCKBACK]], [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 키아나 W, E의 [[DASH]]을 따라갈 수 있음. \n 단, 키아나와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Qiyana's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Qiyana's W and E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Qiyana's Water Q [[ROOT]] / R [[KNOCKBACK]], [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Qiyana's Water Q [[ROOT]] / R [[KNOCKBACK]], [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Qiyana's W and E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Qiyana."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
