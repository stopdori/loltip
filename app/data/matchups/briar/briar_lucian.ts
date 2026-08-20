// app/data/matchups/briar/briar_lucian.ts
import type { MatchupSummary } from "../_types";

export const briar_lucian: MatchupSummary = {
  champs: ["briar", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 루시안 E[[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 루시안 E의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 루시안 E의 [[DASH]]을 따라갈 수 있음. \n 단, 루시안과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Lucian's E [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Lucian's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Lucian."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
