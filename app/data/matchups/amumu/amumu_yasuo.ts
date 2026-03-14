// app/data/matchups/amumu/amumu_yasuo.ts
import type { MatchupSummary } from "../_types";

export const amumu_yasuo: MatchupSummary = {
  champs: ["amumu", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 야스오 E(이동)을 끊을 수 있음.", "아무무 Q,R의 [[STUN]]로 야스오 R을 멈출 수 없음.", "아무무 Q로 야스오 Q3의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효.\n단, 아무무가 Q로 탈출하지만 아직은 [[AIRBORNE]] 상태여서 야스오가 R을 사용 할 수 있음.\n단, 데미지는 유효"],
      en: ["Amumu's Q and R [[STUN]] can interrupt Yasuo's E (movement).", "Amumu's Q and R [[STUN]] cannot stop Yasuo's R.", "Amumu's Q is affected by Yasuo's Q3 [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied.\nNote: Even though Amumu escapes with Q, Amumu is still in [[AIRBORNE]] state, so Yasuo can use R.\nHowever, damage is applied."],
    },
    yasuo: {
      ko: ["야스오 W(장막)로 아무무 Q를 막을 수 있음. (투사체 삭제)"],
      en: ["Yasuo's W (Wind Wall) can block Amumu's Q. (projectile destroyed)"],
    },
  },
};
