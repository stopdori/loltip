// app/data/matchups/briar/briar_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const briar_tryndamere: MatchupSummary = {
  champs: ["briar", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 트린다미어 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 트린다미어 E의 [[DASH]]을 끊을 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 트린다미어 E의 [[DASH]]을 따라갈 수 있음. \n 단, 트린다미어와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Tryndamere's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Tryndamere's E [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Tryndamere's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Tryndamere."],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
