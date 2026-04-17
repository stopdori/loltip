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
      ko: ["아무무 Q, R의 [[STUN]]로 야스오 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 야스오 Q3의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, 아무무가 Q로 탈출하지만 아직은 [[AIRBORNE]] 상태여서 야스오가 R을 사용 할 수 있음.(특이한 판정)"],
      en: ["Amumu's Q and R [[STUN]] can interrupt Yasuo's E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Yasuo's Q3 [[AIRBORNE]] and continue [[DASH]]. \n However, Amumu escapes with Q but is still in [[AIRBORNE]] state, so Yasuo can use R. (unusual interaction)"],
    },
    yasuo: {
      ko: ["야스오 W(장막)로 아무무 Q를 막을 수 있음. (투사체 삭제)"],
      en: ["Yasuo's W (Wind Wall) can block Amumu's Q. (projectile destroyed)"],
    },
  },
};
