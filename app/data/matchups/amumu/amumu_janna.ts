// app/data/matchups/amumu/amumu_janna.ts
import type { MatchupSummary } from "../_types";

export const amumu_janna: MatchupSummary = {
  champs: ["amumu", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 잔나 R(채널링)을 끊을 수 있음.", "아무무 Q로 잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 잔나 Q의 데미지는 유효."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Janna's R (channeling).", "Amumu's Q is affected by Janna's Q [[AIRBORNE]] and R [[KNOCKBACK]], but can still move if the dash phase activates.\nHowever, damage from Janna's Q is applied."],
    },
    janna: {
      ko: [],
      en: [],
    },
  },
};
