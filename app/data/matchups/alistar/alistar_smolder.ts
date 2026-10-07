// app/data/matchups/alistar/alistar_smolder.ts
import type { MatchupSummary } from "../_types";

export const alistar_smolder: MatchupSummary = {
  champs: ["alistar", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[CC_CLEANSE]]로 스몰더 R의 [[SLOW]]는 해제할 수 있음. [[EXIST]]", 
        "R의 [[CC_CLEANSE]]로 스몰더 W의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[CC_CLEANSE]] can remove Smolder's R [[SLOW]]. [[EXIST]]", 
        "Even if R [[CC_CLEANSE]] removes Smolder's W persistent [[SLOW]], it is applied again."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
