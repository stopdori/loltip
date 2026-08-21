// app/data/matchups/briar/briar_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const briar_tahmkench: MatchupSummary = {
  champs: ["briar", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]], R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음. [[CLIP:https://www.youtube.com/shorts/_q5MQmJtV6c]]", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 탐켄치 E의 [[AIRBORNE]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 탐켄치 E의 [[DASH]], R의 [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 탐켄치와 충돌하면 [[HOMING]] 종료."],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Tahm Kench's Q [[STUN]], W [[AIRBORNE]], R [[SUPPRESS]]. [[CLIP:https://www.youtube.com/shorts/_q5MQmJtV6c]]",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Tahm Kench's E [[AIRBORNE]] / R [[SILENCE]], [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Tahm Kench's E [[DASH]] and R [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Tahm Kench."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["특이한 판정 - 상급 \n 탐켄치 R의 [[SUPPRESS]]으로 브라이어가 삼켜졌을 때 R1의 [[PROJECTILE]]가 적중하면 \n 브라이어가 뱃속에서 나올 때 R2를 시전. \n 대상에게 [[UNSTOPPABLE]] [[DASH]]. [[CLIP:https://www.youtube.com/shorts/Vs4UZa080h0]]",
        "특이한 판정 - 상급 \n 브라이어 E의 [[CAST_COMMIT]]으로 탐켄치 R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음. \n 단, 뱃속의 브라이어가 E를 발사할 수 있음. \n 탐켄치가 적군이라면 밀려남. [[CLIP:https://www.youtube.com/shorts/_q5MQmJtV6c]]"],
      en: ["Unusual interaction - advanced \n If Briar is swallowed by Tahm Kench's R [[SUPPRESS]] and gets hit by R1's [[PROJECTILE]], \n Briar casts R2 as she comes out of his stomach, \n [[UNSTOPPABLE]] [[DASH]]ing toward the target. [[CLIP:https://www.youtube.com/shorts/Vs4UZa080h0]]",
        "Unusual interaction - advanced \n Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Tahm Kench's R [[SUPPRESS]]. \n However, Briar can still fire E from inside his stomach. \n If Tahm Kench is an enemy, he gets knocked back. [[CLIP:https://www.youtube.com/shorts/_q5MQmJtV6c]]"],
  },
};
