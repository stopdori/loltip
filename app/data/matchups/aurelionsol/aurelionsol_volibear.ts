// app/data/matchups/aurelionsol/aurelionsol_volibear.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_volibear: MatchupSummary = {
  champs: ["aurelionsol", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["R [[STUN]] and R (Falling Star) [[AIRBORNE]] can cancel Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q receives a [[CDR_RESET]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W(일반, 벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 R의 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
