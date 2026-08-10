// app/data/matchups/aurora/aurora_qiyana.ts
import type { MatchupSummary } from "../_types";

export const aurora_qiyana: MatchupSummary = {
  champs: ["aurora", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계, 돌진단계)는 키아나 물Q의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 키아나 물Q의 [[ROOT]], R의 [[KNOCKBACK]] [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음.", 
        "E(준비단계)의 [[CC_BUFFER]]로 키아나 R의 [[KNOCKBACK]] [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, R의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동."],
      en: ["E (wind-up phase, dash phase) is affected by Qiyana's Water Q [[ROOT]] differently depending on the phase. \n If [[ROOT]]ed during the wind-up phase, the [[DASH]] does not activate. \n If [[ROOT]]ed during the dash phase, she ignores it and continues the [[DASH]]. However, the [[ROOT]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Qiyana's Water Q [[ROOT]] and R [[KNOCKBACK]] and [[STUN]] and continue [[DASH]]. \n However, the [[ROOT]] still applies.",
        "E (wind-up phase) [[CC_BUFFER]] can ignore Qiyana's R [[KNOCKBACK]] and [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies. \n However, the [[DASH]] activates while being knocked back by R's [[KNOCKBACK]]."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
