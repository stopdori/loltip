// app/data/matchups/amumu/amumu_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const amumu_tahmkench: MatchupSummary = {
  champs: ["amumu", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 탐켄치 W(시전 집중)을 끊을 수 있음.", "아무무 Q로 탐켄치 W의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효.", "아무무 Q의 투척 단계에 탐켄치 R(삼키기)를 사용하고 아무무 Q의 돌진 단계가 발동되어도 벗어날 수 없음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Tahm Kench's W (channel).", "Amumu's Q can be hit by Tahm Kench W's [[AIRBORNE]], but the dash phase will still activate, allowing movement.\nHowever, the damage still applies.", "If Tahm Kench uses R (Devour) during Amumu Q's toss phase and Amumu Q's dash phase activates, Amumu cannot escape."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
