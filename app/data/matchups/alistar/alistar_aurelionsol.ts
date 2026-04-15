// app/data/matchups/alistar/alistar_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const alistar_aurelionsol: MatchupSummary = {
  champs: ["alistar", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 아우솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 아우솔 R의 [[STUN]], [[EMPOWERED]]R(천상강림)의 [[SLOW]], [[AIRBORNE]]을 해제할 수 있음. \n 단, 아우솔 E의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Aurelion Sol's R [[STUN]] and [[EMPOWERED]] R (Fallen Star) [[SLOW]] and [[AIRBORNE]]. \n However, Aurelion Sol's E's persistent [[SLOW]] will reapply after being cleansed."],
    },
    aurelionsol: {
      ko: [],
      en: [],
    },
  },
};
