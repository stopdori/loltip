// app/data/matchups/alistar/alistar_lissandra.ts
import type { MatchupSummary } from "../_types";

export const alistar_lissandra: MatchupSummary = {
  champs: ["alistar", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 리산드라 Q의 [[SLOW]], W의 [[ROOT]], R의 [[STUN]]을 해제할 수 있음.", 
        "R의 [[CC_CLEANSE]]로 리산드라 P, R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["R [[CC_CLEANSE]] can remove Lissandra's Q [[SLOW]], W [[ROOT]], and R [[STUN]].", 
        "R [[CC_CLEANSE]] removes Lissandra's P and R lingering [[SLOW]], but it is reapplied."],
    },
    lissandra: {
      ko: ["리산드라 W의 [[ROOT]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Alistar's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Alistar's W [[DASH]]. [[EXIST]]", 
        "When hit by Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], or E [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
