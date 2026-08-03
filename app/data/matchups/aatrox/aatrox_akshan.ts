// app/data/matchups/aatrox/aatrox_akshan.ts
import type { MatchupSummary } from "../_types";

export const aatrox_akshan: MatchupSummary = {
  champs: ["aatrox", "akshan"],
  summary: {
    ko: ["아트록스 W로 아크샨 은신 보임"],
    en: ["Aatrox's W reveals Akshan's stealth"],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 아크샨 E, R의 [[SKILL_CHANNEL]] 끊을 수 있음.", 
        "W의 [[TRUE_SIGHT]]가 아크샨 W의 [[CAMOUFLAGE]] 모습을 보여줌."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Akshan's E and R [[SKILL_CHANNEL]].",
        "W [[TRUE_SIGHT]] reveals Akshan's W [[CAMOUFLAGE]]."],
    },
    akshan: {
      ko: [],
      en: [],
    },
  },
};
