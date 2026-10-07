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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 

        "E의 [[STUN]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 

        "Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 

        "R의 [[CC_CLEANSE]]로 케인 / 그암 W의 [[SLOW]], 다르킨 W의 [[AIRBORNE]]을 해제할 수 있음. [[EXIST]]"],

      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[EXIST]]", 
        "E [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[CC_CLEANSE]] can remove Kayn / Shadow Assassin W [[SLOW]] and Darkin W [[AIRBORNE]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
