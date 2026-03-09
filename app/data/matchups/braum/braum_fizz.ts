// app/data/matchups/braum/braum_fizz.ts
import type { MatchupSummary } from "../_types";

export const braum_fizz: MatchupSummary = {
  champs: ["braum", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 피즈 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 피즈 W의 적중 데미지는 막고, 독 데미지는 데미지 감소 없이 적용.\n단, 피즈 R은 미끼가 날아온 반대방향으로 브라움 E(방패)를 사용해야 피해가 막아짐", "브라움 P의 [[STUN]]로 피즈 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 피즈 Q를 끊을 수 있음."],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Fizz's basic attacks, Q, W, E, and R\\nHowever, Fizz's W hit damage is blocked but poison damage applies without reduction\\nHowever, Fizz's R damage can only be blocked by using Braum's E(Shield) in the direction opposite to where the lure came from", "Braum's P [[STUN]] cannot interrupt Fizz's Q. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Fizz's Q"],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
