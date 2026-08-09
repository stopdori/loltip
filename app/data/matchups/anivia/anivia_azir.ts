// app/data/matchups/anivia/anivia_azir.ts
import type { MatchupSummary } from "../_types";

export const anivia_azir: MatchupSummary = {
  champs: ["anivia", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 아지르 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Azir's E [[DASH]]."],
    },
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
