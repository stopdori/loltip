// app/data/matchups/aurelionsol/aurelionsol_diana.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_diana: MatchupSummary = {
  champs: ["aurelionsol", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 다이애나 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Diana's E [[DASH]]."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[SKILL_CHANNEL]] [[DASH]]."],
    },
  },
};
