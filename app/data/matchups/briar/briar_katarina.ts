// app/data/matchups/briar/briar_katarina.ts
import type { MatchupSummary } from "../_types";

export const briar_katarina: MatchupSummary = {
  champs: ["briar", "katarina"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 카타리나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 카타리나 E의 [[BLINK]]을 따라갈 수 있음. \n 단, 카타리나와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]], E [[KNOCKBACK]], and R [[FEAR]] can interrupt Katarina's R [[SKILL_CHANNEL]].",
        "R2 [[HOMING]] [[DASH]] can follow Katarina's E [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Katarina."],
    },
    katarina: {
      ko: [],
      en: [],
    },
  },
};
