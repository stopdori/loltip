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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 스몰더 E(벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 스몰더 R의 [[SLOW]]는 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 스몰더 W의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Smolder's E (wall movement) [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Smolder's R [[SLOW]].", "Smolder's W persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
