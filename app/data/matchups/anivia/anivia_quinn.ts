// app/data/matchups/anivia/anivia_quinn.ts
import type { MatchupSummary } from "../_types";

export const anivia_quinn: MatchupSummary = {
  champs: ["anivia", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 퀸 E의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 퀸 R의 [[TRANSFORM]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Quinn's E [[DASH]].", "Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Quinn's R [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
