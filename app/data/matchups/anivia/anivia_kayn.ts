// app/data/matchups/anivia/anivia_kayn.ts
import type { MatchupSummary } from "../_types";

export const anivia_kayn: MatchupSummary = {
  champs: ["anivia", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 

        "Q의 [[STUN]], W의 [[AIRBORNE]]으로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 

        "W의 [[AIRBORNE]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["Q [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "Q [[STUN]] and W [[AIRBORNE]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "W [[AIRBORNE]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
