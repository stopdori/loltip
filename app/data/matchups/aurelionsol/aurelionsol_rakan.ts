// app/data/matchups/aurelionsol/aurelionsol_rakan.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_rakan: MatchupSummary = {
  champs: ["aurelionsol", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Rakan's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Rakan's W and E [[DASH]]."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]], R의 [[CHARM]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["R [[CHARM]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[SKILL_CHANNEL]] [[DASH]]. [[EXIST]]"],
    },
  },
};
