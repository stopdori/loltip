// app/data/matchups/amumu/amumu_hecarim.ts
import type { MatchupSummary } from "../_types";

export const amumu_hecarim: MatchupSummary = {
  champs: ["amumu", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 헤카림 R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 Q, R의 [[STUN]]로 헤카림 W를 끊을 수 없음.", "아무무 Q로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시할 수 있음.\n단, 데미지는 유효하고 R의 [[FEAR]]는 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Hecarim's R, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's Q and R [[STUN]] cannot interrupt Hecarim's W.", "Amumu's Q can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]] during the dash phase.\nHowever, damage is applied and R's [[FEAR]] remains active."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
