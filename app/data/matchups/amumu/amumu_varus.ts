// app/data/matchups/amumu/amumu_varus.ts
import type { MatchupSummary } from "../_types";

export const amumu_varus: MatchupSummary = {
  champs: ["amumu", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 바루스 Q(시전 집중)을 끊을 수 있음.", "아무무 Q로 바루스 R의 [[ROOT]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 R의 [[ROOT]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Varus's Q (channeling).", "Amumu's Q is affected by Varus's R [[ROOT]], but can still move if the dash phase activates.\nHowever, damage is applied and R's [[ROOT]] remains active."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
