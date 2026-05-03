// app/data/matchups/aurelionsol/aurelionsol_azir.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_azir: MatchupSummary = {
  champs: ["aurelionsol", "azir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 아지르 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Azir's E [[DASH]]."],
    },
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 아우렐리온 솔 Q, W의 [[SKILL_CHAANEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]]."],
    },
  },
};
