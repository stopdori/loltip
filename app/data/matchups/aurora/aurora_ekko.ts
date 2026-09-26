// app/data/matchups/aurora/aurora_ekko.ts
import type { MatchupSummary } from "../_types";

export const aurora_ekko: MatchupSummary = {
  champs: ["aurora", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 에코 W의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Ekko's W [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 오로라 W, E, R의 [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, R의 [[UNTARGETABLE]] [[DASH]](경계 이동)은 따라갈 수 없음. [[NOT_EXIST]]", 
        "W의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
