// app/data/matchups/akshan/akshan_chogath.ts
import type { MatchupSummary } from "../_types";

export const akshan_chogath: MatchupSummary = {
  champs: ["akshan", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 아크샨 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "Q의 [[AIRBORNE]]으로 아크샨 E의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 아크샨 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Akshan's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Akshan's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Akshan's E [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
