// app/data/matchups/ambessa/ambessa_poppy.ts
import type { MatchupSummary } from "../_types";

export const ambessa_poppy: MatchupSummary = {
  champs: ["ambessa", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 뽀삐 E, R(시전 집중)을 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 뽀삐 E의 [[KNOCKBACK]] [[STUN]](조건부), R의 [[AIRBORNE]], R(충전)의 홈런을 무시할 수 있음.\n단, 뽀삐 E의 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Poppy's E and R (channeling).", "Ambessa's R [[UNSTOPPABLE]] can ignore Poppy's E [[KNOCKBACK]] [[STUN]] (conditional), R [[AIRBORNE]], and R (charged) home run.\nHowever, Poppy's E [[STUN]] still applies."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 암베사 R의 [[BLINK]]을 막을 수 없음.", "뽀삐 W의 [[ANTI_DASH]]로 암베사 P의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.\n 단, [[GROUNDED]]에 걸렸을 때, 암베사의 R도 [[BLINK]]여서 사용 할 수 없음."],
      en: [],
    },
  },
};
