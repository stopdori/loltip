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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]]R(천상강림)의 [[SLOW]], [[AIRBORNE]]을 해제할 수 있음. \n 단, 아우렐리온 솔 E의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Aurelion Sol's R [[STUN]] and [[EMPOWERED]] R (Fallen Star) [[SLOW]] and [[AIRBORNE]]. \n However, Aurelion Sol's E's persistent [[SLOW]] will reapply after being cleansed."],
    },
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Alistar's W [[DASH]]."],
    },
  },
};
