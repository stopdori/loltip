// app/data/matchups/alistar/alistar_jhin.ts
import type { MatchupSummary } from "../_types";

export const alistar_jhin: MatchupSummary = {
  champs: ["alistar", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 진 W의 [[ROOT]], R의 [[SLOW]]를 해제할 수 있음. \n 단, 진 E의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Jhin's R [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Jhin's W [[ROOT]] and R [[SLOW]]. \n However, Jhin's E persistent [[SLOW]] will reapply after being cleansed."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
