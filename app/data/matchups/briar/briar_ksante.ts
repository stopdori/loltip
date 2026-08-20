// app/data/matchups/briar/briar_ksante.ts
import type { MatchupSummary } from "../_types";

export const briar_ksante: MatchupSummary = {
  champs: ["briar", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 크산테 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 크산테 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]], R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]], R의 [[SUPPRESS]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 크산테 W, E의 [[DASH]], R의 [[UNSTOPPABLE]] [[BLINK]]을 따라갈 수 있음. \n 단, 크산테와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt K'Sante's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt K'Sante's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by K'Sante's Q3 [[GRAB]], W [[KNOCKBACK]], or R [[SUPPRESS]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore K'Sante's Q3 [[GRAB]], W [[KNOCKBACK]], and R [[SUPPRESS]].",
        "R2 [[HOMING]] [[DASH]] can follow K'Sante's W and E [[DASH]] and R [[UNSTOPPABLE]] [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with K'Sante."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
