// app/data/matchups/anivia/anivia_poppy.ts
import type { MatchupSummary } from "../_types";

export const anivia_poppy: MatchupSummary = {
  champs: ["anivia", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 뽀삐 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Poppy's E [[DASH]].", "Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Poppy's R [[SKILL_CHANNEL]]."],
    },
    poppy: {
      ko: ["뽀삐 R(충전)에 애니비아가 날아가는 도중에 P(알)로 변해도 딱히 뭐가 없음."],
      en: ["Nothing special happens if Anivia transforms into P (Egg) while being launched by Poppy's R."],
    },
  },
};
