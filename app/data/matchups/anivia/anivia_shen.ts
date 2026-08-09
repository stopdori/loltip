// app/data/matchups/anivia/anivia_shen.ts
import type { MatchupSummary } from "../_types";

export const anivia_shen: MatchupSummary = {
  champs: ["anivia", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 쉔 E(도발)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 쉔 E(도발)의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 쉔 R을 [[SKILL_CHANNEL]] 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Shen's E (Shadow Dash) [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Shen's E (Shadow Dash) [[DASH]].", "Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Shen's R [[SKILL_CHANNEL]]."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
