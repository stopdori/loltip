// app/data/matchups/amumu/amumu_sett.ts
import type { MatchupSummary } from "../_types";

export const amumu_sett: MatchupSummary = {
  champs: ["amumu", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 세트 W(시전 집중)를 끊을 수 없음.", "아무무 Q로 세트 E의 [[GRAB]] [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 E의 [[STUN]]도 남아있음.", "아무무 Q의 투척 단계에 세트 R의 [[SUPPRESS]]에 걸리고 아무무 Q의 돌진 단계가 발동되면 이동 가능([[SUPPRESS]]에서 빠져나옴).", "아무무 Q의 돌진 단계에 세트 R의 [[SUPPRESS]]에 탈출 불가."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Sett's W (channeling).", "Amumu's Q is affected by Sett's E [[GRAB]] [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and E's [[STUN]] remains active.", "If Amumu is hit by Sett's R [[SUPPRESS]] during Q's throw phase, Amumu can still move when the dash phase activates (escaping [[SUPPRESS]]).", "If Amumu is hit by Sett's R [[SUPPRESS]] during Q's dash phase, Amumu cannot escape."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
