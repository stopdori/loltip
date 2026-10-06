// app/data/matchups/aurora/aurora_mel.ts
import type { MatchupSummary } from "../_types";

export const aurora_mel: MatchupSummary = {
  champs: ["aurora", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["멜 E의 [[ROOT]]에 걸리면 오로라 W, R을 사용할 수 없음. [[NOT_EXIST]] \n 단, 오로라 E는 사용할 수 있지만 [[DASH]]은 발동하지 않음.", 
        "E(준비단계, 돌진단계)는 멜 E의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 멜 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음.",],
      en: ["When hit by Mel's E [[ROOT]], Aurora cannot use W or R. [[NOT_EXIST]] \n However, Aurora can use E, but the [[DASH]] does not activate.", 
        "E (wind-up phase, dash phase) is affected by Mel's E [[ROOT]] differently depending on the phase. \n If [[ROOT]]ed during the wind-up phase, the [[DASH]] does not activate. \n If [[ROOT]]ed during the dash phase, she ignores it and continues the [[DASH]]. However, the [[ROOT]] still applies.", 
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Mel's E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 오로라 평타, Q1, Q2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q2의 [[PROJECTILE]]는 멜의 [[PROJECTILE]]로 변경되고, 즉시 멜에게 돌아가서 사실상 사라짐. \n 단, [[REFLECT]]된 [[PROJECTILE]]와 멜 사이에 적이 있으면 적중할 수 있음.", 
        "W의 [[REFLECT]]로 오로라 E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 오로라 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Aurora's basic attacks, Q1, and Q2 [[PROJECTILE]]. [[EXIST]] \n However, Q2's [[PROJECTILE]] turns into Mel's [[PROJECTILE]] and immediately returns to Mel, effectively disappearing. \n However, enemies between the [[REFLECT]]ed [[PROJECTILE]] and Mel can be hit.", 
        "W [[REFLECT]] cannot [[REFLECT]] Aurora's E or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Aurora's W and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
