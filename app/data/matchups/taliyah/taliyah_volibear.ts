// app/data/matchups/taliyah/taliyah_volibear.ts
import type { MatchupSummary } from "../_types";

export const taliyah_volibear: MatchupSummary = {
  champs: ["taliyah", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    taliyah: {
      ko: ["W의 [[KNOCKBACK]], E의 [[STUN]], R의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 탈리야 R1의 [[SKILL_CHANNEL]], R2의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 탈리야 W의 [[KNOCKBACK]], R([[TERRAIN]])의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
