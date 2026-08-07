// app/data/matchups/briar/briar_ekko.ts
import type { MatchupSummary } from "../_types";

export const briar_ekko: MatchupSummary = {
  champs: ["briar", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 에코 E의 [[DASH]]을 끊을 수 있음. \n 단, 에코 E의 [[BLINK]]은 끊을 수 없음.",
        "E의 [[CAST_COMMIT]]으로 에코 W의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 에코 W의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 에코 E의 [[DASH]], [[BLINK]]을 따라갈 수 있음. \n 단, 에코와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ekko's E [[DASH]] or [[BLINK]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Ekko's E [[DASH]]. \n However, they cannot interrupt Ekko's E [[BLINK]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Ekko's W [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ekko's W [[STUN]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Ekko's E [[DASH]] and [[BLINK]]. \n However, [[HOMING]] ends upon colliding with Ekko."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
