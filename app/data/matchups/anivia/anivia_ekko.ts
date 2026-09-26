// app/data/matchups/anivia/anivia_ekko.ts
import type { MatchupSummary } from "../_types";

export const anivia_ekko: MatchupSummary = {
  champs: ["anivia", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 에코 E(구르기)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Ekko's E (roll) [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Ekko's E (roll) [[DASH]]."],
    },
    ekko: {
      ko: ["W의 [[STUN]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]], [[AIRBORNE]]은 남아있음."],
      en: [],
    },
  },
};
