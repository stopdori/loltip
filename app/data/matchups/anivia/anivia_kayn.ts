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
      ko: ["애니비아 Q의 [[STUN]]로 케인(일반, 그암, 다르킨) Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 케인 R은 맞지도 않음.", 
        "애니비아 W의 [[AIRBORNE]]로 케인 Q의 [[DASH]] E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Kayn's (base, Shadow Assassin, Rhaast) Q [[DASH]]. \n However, [[STUN]] still applies. \n Note: Kayn's R cannot be hit by Anivia's Q at all.", "Anivia's W [[AIRBORNE]] can interrupt Kayn's Q [[DASH]] and E [[SKILL_CHANNEL]]."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
