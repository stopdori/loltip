// app/data/matchups/briar/briar_skarner.ts
import type { MatchupSummary } from "../_types";

export const briar_skarner: MatchupSummary = {
  champs: ["briar", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R1의 [[DISRUPT]] / R2의 [[FEAR]]로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "E의 [[CAST_COMMIT]]으로 스카너 E의 [[STUN]] / E, R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음. [[EXIST]]", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 스카너 E의 [[STUN]] / E, R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]]", 
        "R2의 [[HOMING]] [[DASH]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 따라갈 수 있음. [[EXIST]] \n 단, 스카너와 충돌하면 [[HOMING]] 종료."],

      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R1 [[DISRUPT]] / R2 [[FEAR]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "E [[CAST_COMMIT]] keeps the cast going even when hit by Skarner's E [[STUN]] / E, R [[SUPPRESS]]. [[EXIST]]", 
        "R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Skarner's E [[STUN]] / E, R [[SUPPRESS]]. [[EXIST]]", 
        "R2 [[HOMING]] [[DASH]] can follow Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, the [[HOMING]] ends upon colliding with Skarner."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
