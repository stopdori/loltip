// app/data/matchups/briar/briar_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const briar_fiddlesticks: MatchupSummary = {
  champs: ["briar", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]], E의 [[KNOCKBACK]], R2의 [[FEAR]]로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 피들스틱 P, Q의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 피들스틱 P, Q의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 피들스틱 R의 [[BLINK]]을 따라갈 수 있음. \n 단, 피들스틱과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]], E [[KNOCKBACK]], and R2 [[FEAR]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Fiddlesticks's P or Q [[FEAR]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Fiddlesticks's P and Q [[FEAR]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Fiddlesticks's R [[BLINK]]. \n However, [[HOMING]] ends upon colliding with Fiddlesticks."],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
