// app/data/matchups/briar/briar_ezreal.ts
import type { MatchupSummary } from "../_types";

export const briar_ezreal: MatchupSummary = {
  champs: ["briar", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]], E의 [[KNOCKBACK]], R2의 [[FEAR]]로 이즈리얼 E의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R2의 [[HOMING]] [[DASH]]으로 이즈리얼 E의 [[BLINK]]을 따라갈 수 있음. \n 단, 이즈리얼과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]], E [[KNOCKBACK]], and R2 [[FEAR]] cannot interrupt Ezreal's E [[BLINK]]. \n However, the [[STUN]] still applies.",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Ezreal's E [[BLINK]]. \n However, [[HOMING]] ends upon colliding with Ezreal."],
    },
    ezreal: {
      ko: [],
      en: [],
    },
  },
};
