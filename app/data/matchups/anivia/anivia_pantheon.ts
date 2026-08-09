// app/data/matchups/anivia/anivia_pantheon.ts
import type { MatchupSummary } from "../_types";

export const anivia_pantheon: MatchupSummary = {
  champs: ["anivia", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 판테온 W의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Pantheon's W [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Pantheon's W [[DASH]].", "Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Pantheon's R [[SKILL_CHANNEL]]."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
