// app/data/matchups/chogath/chogath_quinn.ts
import type { MatchupSummary } from "../_types";

export const chogath_quinn: MatchupSummary = {
  champs: ["chogath", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "Q의 [[AIRBORNE]]으로 퀸 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]].",
        "Q [[AIRBORNE]] can interrupt Quinn's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
