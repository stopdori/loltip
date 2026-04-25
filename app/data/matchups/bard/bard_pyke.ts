// app/data/matchups/bard/bard_pyke.ts
import type { MatchupSummary } from "../_types";

export const bard_pyke: MatchupSummary = {
  champs: ["bard", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 파이크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "바드 R(존야)로 Q의 [[SKILL_CHARGED]], 파이크 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    pyke: {
      ko: ["파이크 R의 [[CC_BUFFER]]로 바드 R(존야)를 무시하고 [[BLINK]] 단계가 발동함. \n [[BLINK]], 데미지, [[EXECUTE]], [[CDR_RESET]] 전부 유효."],
      en: [],
    },
  },
};
