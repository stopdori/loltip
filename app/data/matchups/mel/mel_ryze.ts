// app/data/matchups/mel/mel_ryze.ts
import type { MatchupSummary } from "../_types";

export const mel_ryze: MatchupSummary = {
  champs: ["mel", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 라이즈 평타, Q(직접, [[CHAIN]]로 간접), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, E의 [[MARK]](주문전이)은 Q를 [[REFLECT]]하여 [[MARK_CONSUME]]를 할 수 있음.", 
        "W의 [[REFLECT]]로 라이즈가 다른대상에게 사용하는 E의 [[CHAIN]] [[PROJECTILE]](주문전이)를 막을 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 라이즈 W, EW를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 라이즈 R의 [[SKILL_CHANNEL_MOVEMENT]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Ryze's basic attacks, Q (direct, and indirect via [[CHAIN]]), and E [[PROJECTILE]]. [[EXIST]] \n However, E's [[MARK]] (Flux) can be [[MARK_CONSUME]]d by [[REFLECT]]ing Q.", 
        "W [[REFLECT]] can block the E [[CHAIN]] [[PROJECTILE]] (Flux) that Ryze uses on other targets. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Ryze's W or EW. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Ryze's R [[SKILL_CHANNEL_MOVEMENT]]. [[EXIST]]"],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
