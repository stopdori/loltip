// app/data/matchups/alistar/alistar_malzahar.ts
import type { MatchupSummary } from "../_types";

export const alistar_malzahar: MatchupSummary = {
  champs: ["alistar", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 말자하 Q의 [[SILENCE]], R의 [[SKILL_CHANNEL]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Malzahar's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Malzahar's Q [[SILENCE]] and R [[SUPPRESS]]."],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] E의 [[STUN]]을 무시할 수 있음. \n 단, 데미지는 감소되어 유효."],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]]. \n However, damage is still applied (reduced)."],
    },
  },
};
