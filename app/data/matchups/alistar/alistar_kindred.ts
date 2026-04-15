// app/data/matchups/alistar/alistar_kindred.ts
import type { MatchupSummary } from "../_types";

export const alistar_kindred: MatchupSummary = {
  champs: ["alistar", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 킨드레드 Q의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 킨드레드 E의 [[SLOW]]를 해제할 수 있음.", "알리스타 W의 [[KNOCKBACK]]으로 킨드레드 R [[ZONE]] 밖으로 밀어낼 수 있음."],
      en: ["Alistar's Q and W can interrupt Kindred's Q", "Alistar's E [[STUN]] cannot interrupt Kindred's Q. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Kindred's E [[SLOW]]", "Alistar's W [[KNOCKBACK]] can push targets outside Kindred's R range"],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
