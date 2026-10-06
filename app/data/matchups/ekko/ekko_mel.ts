// app/data/matchups/ekko/ekko_mel.ts
import type { MatchupSummary } from "../_types";

export const ekko_mel: MatchupSummary = {
  champs: ["ekko", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 멜 E의 [[ROOT]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E (buffer phase) [[CC_BUFFER]] can ignore Mel's E [[ROOT]] and continue [[BLINK]]. [[EXIST]] \n However, the [[ROOT]] still applies after the [[BLINK]] ends."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 에코 Q(가는, 오는)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q(오는)의 [[PROJECTILE]]는 멜의 [[PROJECTILE]]로 변경되고, 즉시 멜에게 돌아가서 사실상 사라짐. \n 단, [[REFLECT]]된 [[PROJECTILE]]와 멜 사이에 적이 있으면 적중할 수 있음.", 
        "W의 [[REFLECT]]로 에코 평타, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Ekko's Q (outgoing, returning) [[PROJECTILE]]. [[EXIST]] \n However, the Q (returning) [[PROJECTILE]] turns into Mel's [[PROJECTILE]] and immediately returns to Mel, effectively disappearing. \n However, enemies between the [[REFLECT]]ed [[PROJECTILE]] and Mel can be hit.", 
        "W [[REFLECT]] cannot [[REFLECT]] Ekko's basic attacks, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Ekko's E (roll) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
