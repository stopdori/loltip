// app/data/matchups/alistar/alistar_kayn.ts
import type { MatchupSummary } from "../_types";

export const alistar_kayn: MatchupSummary = {
  champs: ["alistar", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 케인 Q의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 케인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 케인 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 케인(기본/그암) W의 [[SLOW]], 케인(다르킨) W의 [[AIRBORNE]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Kayn's Q [[DASH]].", "Alistar's E [[STUN]] cannot interrupt Kayn's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Kayn's E [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Kayn's W (Shadow Assassin/Rhaast) [[SLOW]] and W (Darkin) [[AIRBORNE]]."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
