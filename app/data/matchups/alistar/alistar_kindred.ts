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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 킨드레드 Q의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 킨드레드 E의 [[SLOW]]를 해제할 수 있음.", "W의 [[KNOCKBACK]]으로 킨드레드 R [[ZONE]] 밖으로 밀어낼 수 있음."],
      en: ["Q and W can interrupt Kindred's Q", "E [[STUN]] cannot interrupt Kindred's Q. However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Kindred's E [[SLOW]]", "W [[KNOCKBACK]] can push targets outside Kindred's R range"],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
