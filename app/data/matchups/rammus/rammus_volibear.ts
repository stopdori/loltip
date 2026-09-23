// app/data/matchups/rammus/rammus_volibear.ts
import type { MatchupSummary } from "../_types";

export const rammus_volibear: MatchupSummary = {
  champs: ["rammus", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    rammus: {
      ko: ["Q의 [[KNOCKBACK]], QR의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]", 
        "R의 [[UNSTOPPABLE]]로 람머스 Q의 [[KNOCKBACK]], E의 [[TAUNT]], R의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 E의 [[TAUNT]]은 남아있음."],
      en: [],
    },
  },
  common: {
    ko: ["볼리베어 Q와 람머스 Q가 서로 부딪힐 때 판정이 볼리베어와 람머스 챔피언 크기, 이동속도에 따라 다름. \n 1. 볼리베어 Q의 [[STUN]]만 적중, 람머스 Q의 [[TRANSFORM]]이 해제. \n 2. 볼리베어 Q의 [[STUN]]이 적중, 람머스 Q의 [[KNOCKBACK]]이 적중. \n 3. 볼리베어 Q가 적중하지 않고, 람머스 Q의 [[KNOCKBACK]]만 적중."],
    en: [],
  },  
};
