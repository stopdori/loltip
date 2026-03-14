// app/data/matchups/amumu/amumu_taliyah.ts
import type { MatchupSummary } from "../_types";

export const amumu_taliyah: MatchupSummary = {
  champs: ["amumu", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 탈리야 R(시전 집중, 서핑)을 끊을 수 있음.", "아무무 Q로 탈리야 W의 [[AIRBORNE]], E의 [[STUN]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, E의 데미지가 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Taliyah's R (channeling and surfing).", "Amumu's Q is affected by Taliyah's W [[AIRBORNE]], E [[STUN]], and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, E's damage is applied and [[STUN]] remains active."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
