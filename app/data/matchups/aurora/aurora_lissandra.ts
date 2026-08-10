// app/data/matchups/aurora/aurora_lissandra.ts
import type { MatchupSummary } from "../_types";

export const aurora_lissandra: MatchupSummary = {
  champs: ["aurora", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계, 돌진단계)는 리산드라 W의 [[ROOT]], R의 [[STUN]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]], [[STUN]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]], [[STUN]]이 걸리면 무시하고 [[DASH]]이 발동함. 단, [[ROOT]], [[STUN]]은 남아있음. \n 리산드라 R은 [[STUN]]이지만 [[ROOT]]처럼 특이한 판정을 보일때가 꽤 있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]], [[STUN]]은 남아있음."],
      en: ["E (wind-up phase, dash phase) is affected by Lissandra's W [[ROOT]] and R [[STUN]] differently depending on the phase. \n If [[ROOT]]ed or [[STUN]]ned during the wind-up phase, the [[DASH]] does not activate. \n If [[ROOT]]ed or [[STUN]]ned during the dash phase, she ignores it and the [[DASH]] activates. However, the [[ROOT]] and [[STUN]] still apply. \n Lissandra's R is a [[STUN]], but it often behaves oddly like a [[ROOT]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Lissandra's W [[ROOT]] and R [[STUN]] and continue [[DASH]]. \n However, the [[ROOT]] and [[STUN]] still apply."],
    },
    lissandra: {
      ko: [],
      en: [],
    },
  },
};
