// app/data/matchups/ekko/ekko_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ekko_lissandra: MatchupSummary = {
  champs: ["ekko", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 리산드라 E2의 [[BLINK]]을 따라갈 수 있음. [[EXIST]] \n 단, 따라가는 판정은 리산드라 E2 타이밍에 따라 다름.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["E (teleport phase) [[HOMING]] [[BLINK]] can follow Lissandra's E2 [[BLINK]]. [[EXIST]] \n However, whether it follows depends on the timing of Lissandra's E2.", 
        "E (wind-up phase) [[CC_BUFFER]] can ignore Lissandra's W [[ROOT]] and R [[STUN]] and continue [[BLINK]]. [[EXIST]] \n However, the [[ROOT]] and [[STUN]] still apply after the [[BLINK]] ends."],
    },
    lissandra: {
      ko: ["R [[STUN]]의 [[KNOCKDOWN]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "W의 [[ROOT]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]], R [[STUN]]의 [[KNOCKDOWN]]으로 에코 E(평타)의 [[BLINK]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]], [[STUN]]은 남아있음.", 
      "에코 W의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["R [[STUN]]'s [[KNOCKDOWN]] can interrupt Ekko's E (roll) [[DASH]]. [[EXIST]]", 
        "W [[ROOT]] cannot interrupt Ekko's E (roll) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] and R [[STUN]]'s [[KNOCKDOWN]] cannot interrupt Ekko's E (basic attack) [[BLINK]]. [[NOT_EXIST]] \n However, the [[ROOT]] and [[STUN]] still apply.", 
        "When hit by Ekko's W [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
  common: {
    ko: ["[[TIP]]에코 E의 [[HOMING]] [[BLINK]]으로 리산드라 E2를 따라가는 판정은 리산드라 E2 타이밍에 달려있음. \n \n 1. 에코가 따라가는 경우 \n 리산드라가 에코의 경직 단계를 보고 E2를 사용하면 따라감. \n \n 2. 에코가 따라가지 못하는 경우 \n 에코의 경직 단계가 발동하기 전, 또는 순간이동 단계가 발동하고 나서 E2 사용하면 따라가지 못함."],
    en: ["[[TIP]] Whether Ekko's E [[HOMING]] [[BLINK]] can follow Lissandra's E2 depends on the timing of Lissandra's E2. \n \n 1. When Ekko can follow \n If Lissandra uses E2 after seeing Ekko's wind-up phase, Ekko follows her. \n \n 2. When Ekko cannot follow \n If Lissandra uses E2 before Ekko's wind-up phase begins, or after the teleport phase activates, Ekko cannot follow her."],
  },
};
