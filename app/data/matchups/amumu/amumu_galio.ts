// app/data/matchups/amumu/amumu_galio.ts
import type { MatchupSummary } from "../_types";

export const amumu_galio: MatchupSummary = {
  champs: ["amumu", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 갈리오 E의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 갈리오 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "아무무 Q로 갈리오 W의 [[TAUNT]], E의 [[AIRBORNE]], R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[TAUNT]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Galio's E [[DASH]].", "Amumu's R [[STUN]] can interrupt Galio's E [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Galio's W and R [[SKILL_CHANNEL]].", "Amumu's Q can ignore Galio's W [[TAUNT]], E [[AIRBORNE]], and R [[AIRBORNE]] and continue [[DASH]]. \n However, the [[TAUNT]] still applies."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
