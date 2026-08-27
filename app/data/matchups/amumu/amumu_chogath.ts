// app/data/matchups/amumu/amumu_chogath.ts
import type { MatchupSummary } from "../_types";

export const amumu_chogath: MatchupSummary = {
  champs: ["amumu", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[CC_BUFFER]]로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[AIRBORNE]], [[SILENCE]]은 남아있음."],
      en: ["Q [[CC_BUFFER]] can ignore Cho'Gath's Q [[AIRBORNE]] and W [[SILENCE]] and continue [[DASH]]. \n However, the [[AIRBORNE]] and [[SILENCE]] still apply."],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Amumu's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
