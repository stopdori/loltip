// app/data/matchups/briar/briar_smolder.ts
import type { MatchupSummary } from "../_types";

export const briar_smolder: MatchupSummary = {
  champs: ["briar", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R2의 [[FEAR]]로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R1의 [[DISRUPT]]로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]]", 
        "R2의 [[HOMING]] [[DASH]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 따라갈 수 있음. [[EXIST]] \n 단, 스몰더와 충돌하면 [[HOMING]] 종료."],

      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R2 [[FEAR]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R1 [[DISRUPT]] cannot interrupt Smolder's E [[IGNORE_TERRAIN]]. [[NOT_EXIST]]", 
        "R2 [[HOMING]] [[DASH]] can follow Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, the [[HOMING]] ends upon colliding with Smolder."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
