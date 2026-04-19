// app/data/matchups/anivia/anivia_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const anivia_aurelionsol: MatchupSummary = {
  champs: ["anivia", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 아우렐리온 솔 E, R을 시전 중일 때 뒤로 밀어내면 E, R [[AOE]]도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].", "If Anivia's W [[TERRAIN]] [[AIRBORNE]] knocks Aurelion Sol back while casting E or R, the E, R [[AOE]] also moves with him."],
    },
    aurelionsol: {
      ko: [],
      en: [],
    },
  },
};
