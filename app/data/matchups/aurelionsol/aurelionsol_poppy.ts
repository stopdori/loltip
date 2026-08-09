// app/data/matchups/aurelionsol/aurelionsol_poppy.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_poppy: MatchupSummary = {
  champs: ["aurelionsol", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Poppy's E [[DASH]].",
        "R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Poppy's R [[SKILL_CHARGED]]."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 아우렐리온 솔 W(비행)의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음."],
      en: ["Poppy's W [[ANTI_DASH]] can block Aurelion Sol's W (flight) [[DASH]] and apply the [[GROUNDED]] debuff."],
    },
  },
};
