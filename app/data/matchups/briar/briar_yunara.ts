// app/data/matchups/briar/briar_yunara.ts
import type { MatchupSummary } from "../_types";

export const briar_yunara: MatchupSummary = {
  champs: ["briar", "yunara"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 유나라 RE의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 유나라 RE의 [[DASH]]을 끊을 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 유나라 RE의 [[DASH]]을 따라갈 수 있음. \n 단, 유나라와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Yunara's RE [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Yunara's RE [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Yunara's RE [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Yunara."],
    },
    yunara: {
      ko: [],
      en: [],
    },
  },
};
