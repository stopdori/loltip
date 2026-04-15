// app/data/matchups/alistar/alistar_gnar.ts
import type { MatchupSummary } from "../_types";

export const alistar_gnar: MatchupSummary = {
  champs: ["alistar", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 나르 인간폼 /메가폼 E의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 나르 인간폼 / 메가폼 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 나르 인간폼 Q, E의 [[SLOW]] \n 메가폼 Q, E, R의 [[SLOW]] / W, R의 [[STUN]] / R의 [[AIRBORNE]] 을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Gnar's mini/mega form E [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Gnar's mini/mega form E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Gnar's mini form Q and E [[SLOW]]. \n Mega form Q, E, and R [[SLOW]], W and R [[STUN]], and R [[AIRBORNE]]."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
