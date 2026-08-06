// app/data/matchups/anivia/anivia_camille.ts
import type { MatchupSummary } from "../_types";

export const anivia_camille: MatchupSummary = {
  champs: ["anivia", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 카밀 E의 [[DASH]]을 끊을 수 있음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 E의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 W를 시전 중일 때 뒤로 밀어내면 W의 [[AOE]]도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] can interrupt Camille's E [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Camille's E [[DASH]].", "If Anivia's W [[TERRAIN]] [[AIRBORNE]] knocks Camille back while casting W, the W [[AOE]] also moves with her."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
