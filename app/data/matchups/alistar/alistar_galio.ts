// app/data/matchups/alistar/alistar_galio.ts
import type { MatchupSummary } from "../_types";

export const alistar_galio: MatchupSummary = {
  champs: ["alistar", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 갈리오 E(돌진단계)의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 갈리오 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "알리스타 E의 [[STUN]]로 갈리오 E를 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 갈리오 W의 [[TAUNT]], E, R의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Galio's E (advance) [[DASH]] and R [[SKILL_CHANNEL]].", "Alistar's E [[STUN]] can interrupt Galio's R [[SKILL_CHANNEL]].", "Alistar's E [[STUN]] cannot interrupt Galio's E [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Galio's W [[TAUNT]] and E and R [[AIRBORNE]]."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
