// app/data/matchups/briar/briar_rengar.ts
import type { MatchupSummary } from "../_types";

export const briar_rengar: MatchupSummary = {
  champs: ["briar", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 렝가 P, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 렝가 P, R의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 렝가 [[EMPOWERED]] E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 렝가 [[EMPOWERED]] E의 [[ROOT]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 렝가 P, R의 [[DASH]]을 따라갈 수 있음. \n 단, 렝가와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Rengar's P and R [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Rengar's P and R [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Rengar's [[EMPOWERED]] E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Rengar's [[EMPOWERED]] E [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow Rengar's P and R [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Rengar."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
