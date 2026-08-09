// app/data/matchups/anivia/anivia_ksante.ts
import type { MatchupSummary } from "../_types";

export const anivia_ksante: MatchupSummary = {
  champs: ["anivia", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 크산테 일반폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 크산테 E의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])로 크산테 W(일반폼, 변신폼)의 [[DASH]]을 경로를 막아 이동을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt K'Sante's normal form E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt K'Sante's E [[DASH]].", "W [[TERRAIN]] can block K'Sante's W (normal form, transformed form) [[DASH]] path to interrupt its movement."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
