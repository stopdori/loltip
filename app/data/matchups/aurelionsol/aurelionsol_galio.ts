// app/data/matchups/aurelionsol/aurelionsol_galio.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_galio: MatchupSummary = {
  champs: ["aurelionsol", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["아우렐리온 솔 R의 [[STUN]]으로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "아우렐리온 솔 R(천상강림)의 [[AIRBORNE]]으로 갈리오 E의 [[DASH]]을 끊을 수 있음.", 
        "아우렐리온 솔 R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 갈리오 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Aurelion Sol's R [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Aurelion Sol's R (Falling Star) [[AIRBORNE]] can interrupt Galio's E [[DASH]].",
        "Aurelion Sol's R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Galio's R [[SKILL_CHANNEL]]."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
