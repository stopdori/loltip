// app/data/matchups/briar/briar_urgot.ts
import type { MatchupSummary } from "../_types";

export const briar_urgot: MatchupSummary = {
  champs: ["briar", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 우르곳 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 우르곳 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 우르곳 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 우르곳 E의 [[GRAB]], [[STUN]] / R의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 우르곳 E의 [[GRAB]], [[STUN]] / R의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 우르곳 E의 [[DASH]]을 따라갈 수 있음. \n 단, 우르곳과 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Urgot's W [[SKILL_CHANNEL]].",
        "Q [[STUN]] cannot interrupt Urgot's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Urgot's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Urgot's E [[GRAB]], [[STUN]] / R [[FEAR]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Urgot's E [[GRAB]], [[STUN]] / R [[FEAR]].",
        "R2 [[HOMING]] [[DASH]] can follow Urgot's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Urgot."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 - 상급 \n 우르곳 R2의 [[SUPPRESS]], [[GRAB]]으로 브라이어가 끌려갈 때 R1의 [[PROJECTILE]]가 적중하면 \n 끌려가던 브라이어가 [[SUPPRESS]]을 풀고 R2를 시전. \n 대상에게 [[UNSTOPPABLE]] [[DASH]]. [[CLIP:https://www.youtube.com/shorts/5H7g7yBA-Us]]"],
    en: ["Unusual interaction - advanced \n If Briar gets hit by R1's [[PROJECTILE]] while being pulled by Urgot's R2 [[SUPPRESS]], [[GRAB]], \n Briar breaks free of the [[SUPPRESS]] and casts R2, \n [[UNSTOPPABLE]] [[DASH]]ing toward the target. [[CLIP:https://www.youtube.com/shorts/5H7g7yBA-Us]]"],
  },
};
