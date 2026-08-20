// app/data/matchups/briar/briar_irelia.ts
import type { MatchupSummary } from "../_types";

export const briar_irelia: MatchupSummary = {
  champs: ["briar", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 이렐리아 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 이렐리아 Q의 [[CDR_RESET]] 조건도 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 이렐리아 Q의 [[DASH]]을 끊을 수 있음. \n 또한, 이렐리아 Q의 데미지, [[CDR_RESET]] 조건 무효.",
        "E의 [[CAST_COMMIT]]으로 이렐리아 E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 이렐리아 E의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 이렐리아 Q의 [[DASH]]을 따라갈 수 있음. \n 단, 이렐리아와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Irelia's Q [[DASH]]. \n However, the [[STUN]] still applies. \n Also, Irelia's Q [[CDR_RESET]] condition still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Irelia's Q [[DASH]]. \n Also, this negates Irelia's Q damage and [[CDR_RESET]] condition.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Irelia's E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Irelia's E [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Irelia's Q [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Irelia."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
