// app/data/matchups/aurelionsol/aurelionsol_ekko.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_ekko: MatchupSummary = {
  champs: ["aurelionsol", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Ekko's E [[DASH]] and [[BLINK]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Ekko's E [[DASH]] and [[BLINK]]."],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL]] [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]], [[AIRBORNE]]은 남아있음."],
      en: [],
    },
  },
};
