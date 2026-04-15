// app/data/matchups/alistar/alistar_ksante.ts
import type { MatchupSummary } from "../_types";

export const alistar_ksante: MatchupSummary = {
  champs: ["alistar", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 크산테 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 크산테 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 크산테 Q의 [[SLOW]], Q3의 [[STUN]] [[GRAB]], W의 [[STUN]], R의 [[SUPPRESS]]를 해제할 수 있음. \n 단, 크산테 R은 알리가 해제하고 스킬을 사용하거나 점멸을 써도 끝까지 이동."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt K'Sante's E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt K'Sante's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse K'Sante's Q [[SLOW]], Q3 [[STUN]] and [[GRAB]], W [[STUN]], and R [[SUPPRESS]]. \n However, K'Sante's R will still complete its movement even after being cleansed, regardless of skills or Flash used."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
