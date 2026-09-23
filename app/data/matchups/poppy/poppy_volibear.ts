// app/data/matchups/poppy/poppy_volibear.ts
import type { MatchupSummary } from "../_types";

export const poppy_volibear: MatchupSummary = {
  champs: ["poppy", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    poppy: {
      ko: ["W의 [[ANTI_DASH]]으로 볼리베어 Q의 [[DASH]]을 막을 수 있음. \n 단, 볼리베어 Q는 적중. [[STUN]]도 유효. \n 단, 볼리베어 Q를 초근접에서 적중하면 뽀삐 W의 [[ANTI_DASH]]에 막히지 않음."],
      en: ["Poppy's W stops the dash but not the stun; at extreme close range, both work."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 뽀삐 W의 [[ANTI_DASH]] / E의 [[KNOCKBACK]] / R의 [[AIRBORNE]], [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]] \n 단, 볼리베어 R은 [[DASH]]이지만 [[UNSTOPPABLE]]로 인해, 뽀삐 W의 [[ANTI_DASH]]에 영향을 받지 않음."],
      en: [],
    },
  },
};
