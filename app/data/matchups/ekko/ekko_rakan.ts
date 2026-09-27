// app/data/matchups/ekko/ekko_rakan.ts
import type { MatchupSummary } from "../_types";

export const ekko_rakan: MatchupSummary = {
  champs: ["ekko", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 라칸 W, E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]",  
        "W의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]], [[CHARM]]은 남아있음."],
      en: ["E (Blink phase) [[HOMING]] [[BLINK]] can follow Rakan's W and E [[DASH]]. [[EXIST]]",
        "W [[STUN]] can interrupt Rakan's W and E [[DASH]]. [[EXIST]]",
        "E (Buffer phase) [[CC_BUFFER]] can ignore Rakan's W [[AIRBORNE]] and R [[CHARM]] and [[BLINK]]. [[EXIST]] \n However, after the [[BLINK]] ends, the [[AIRBORNE]] and [[CHARM]] still apply."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음. [[EXIST]]",
        "R의 [[CHARM]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Ekko's E (Roll phase) [[DASH]]. [[EXIST]]", "R [[CHARM]] cannot interrupt Ekko's E (Roll phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
