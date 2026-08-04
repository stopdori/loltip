// app/data/matchups/alistar/alistar_taliyah.ts
import type { MatchupSummary } from "../_types";

export const alistar_taliyah: MatchupSummary = {
  champs: ["alistar", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 탈리야 [[EMPOWERED]] Q의 [[SLOW]], W의 [[AIRBORNE]], E의 [[STUN]], R의 [[AIRBORNE]] 를 해제할 수 있음.", 
        "R의 [[CC_CLEANSE]]로 탈리야 E의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Taliyah's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Taliyah's [[EMPOWERED]] Q [[SLOW]], W [[AIRBORNE]], E [[STUN]], and R [[AIRBORNE]].", "Taliyah's E persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
