// app/data/matchups/anivia/anivia_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const anivia_caitlyn: MatchupSummary = {
  champs: ["anivia", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 케틀 E(투망)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 케틀 E(투망)의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 케틀 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Caitlyn's E (net) [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Caitlyn's E (net) [[DASH]].", "Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Caitlyn's R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 없음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
