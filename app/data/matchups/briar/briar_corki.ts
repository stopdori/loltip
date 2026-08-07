// app/data/matchups/briar/briar_corki.ts
import type { MatchupSummary } from "../_types";

export const briar_corki: MatchupSummary = {
  champs: ["briar", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 코르키 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R2의 [[FEAR]]로 코르키 W의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 코르키 W의 [[DASH]]을 따라갈 수 있음. \n 단, 코르키와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Corki's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Corki's W [[DASH]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Corki's W [[DASH]]. \n However, [[HOMING]] ends upon colliding with Corki."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
