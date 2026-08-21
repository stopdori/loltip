// app/data/matchups/briar/briar_yasuo.ts
import type { MatchupSummary } from "../_types";

export const briar_yasuo: MatchupSummary = {
  champs: ["briar", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 야스오 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 야스오 Q3, R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 야스오 Q3, R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 야스오 E의 [[SKILL_CHANNEL]] [[DASH]], R의 [[UNSTOPPABLE]] [[BLINK]]을 따라갈 수 있음. \n 단, 야스오와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Yasuo's E [[SKILL_CHANNEL]] [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Yasuo's Q3, R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Yasuo's Q3, R [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Yasuo's E [[SKILL_CHANNEL]] [[DASH]] and R [[UNSTOPPABLE]] [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Yasuo."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]이 브라이어 E, R1의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W [[WINDSHIELD]] can block Briar's E and R1 [[PROJECTILE]]."],
    },
  },
};
