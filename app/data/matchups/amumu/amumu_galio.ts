// app/data/matchups/amumu/amumu_galio.ts
import type { MatchupSummary } from "../_types";

export const amumu_galio: MatchupSummary = {
  champs: ["amumu", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 갈리오 E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 갈리오 E(돌진 단계)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 갈리오 W(도발), R(시전 집중)을 끊을 수 있음.", "아무무 Q로 갈리오 W의 [[TAUNT]], E의 [[AIRBORNE]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 갈리오 W, E, R의 데미지는 유효하고 W의 [[TAUNT]], E의 [[AIRBORNE]], R의 [[AIRBORNE]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Galio's E, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Galio's E (dash phase).", "Amumu's Q and R [[STUN]] can interrupt Galio's W (taunt) and R (channeling).", "Amumu's Q is affected by Galio's W [[TAUNT]], E [[AIRBORNE]], and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage from Galio's W, E, and R is applied and W's [[TAUNT]], E's [[AIRBORNE]], and R's [[AIRBORNE]] remain active."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
