// app/data/matchups/anivia/anivia_naafiri.ts
import type { MatchupSummary } from "../_types";

export const anivia_naafiri: MatchupSummary = {
  champs: ["anivia", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 나피리 E, R의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Naafiri's E or R [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Naafiri's R [[SKILL_CHANNEL]].", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Naafiri's E or R [[DASH]]."],
    },
    naafiri: {
      ko: ["나피리 R을 애니비아에게 사용했을 때, 애니비아가 P(알)로 변해도 나피리 R은 P(알)을 추격."],
      en: ["If Anivia transforms into P (Egg) while Naafiri's R is targeting her, Naafiri's R continues to chase the Egg."],
    },
  },
};
