// app/data/matchups/briar/briar_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const briar_twistedfate: MatchupSummary = {
  champs: ["briar", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 트위스티드 페이트 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 트위스티드 페이트 W의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 트위스티드 페이트 W의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 트위스티드 페이트 R2의 [[BLINK]]을 따라갈 수 있음. \n 단, 트위스티드 페이트와 충돌하면 [[HOMING]] 종료. [[CLIP:https://www.youtube.com/shorts/uW-o-Gx7yfo]]"],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Twisted Fate's W [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Twisted Fate's W [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Twisted Fate's R2 [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Twisted Fate. [[CLIP:https://www.youtube.com/shorts/uW-o-Gx7yfo]]"],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
