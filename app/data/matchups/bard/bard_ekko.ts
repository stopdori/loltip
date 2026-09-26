// app/data/matchups/bard/bard_ekko.ts
import type { MatchupSummary } from "../_types";

export const bard_ekko: MatchupSummary = {
  champs: ["bard", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 에코 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 에코 E의 [[DASH]]을 끊을 수 있음. \n 단, 에코 E의 대기 단계에 존야를 맞으면 에코가 존야상태가 되지만 [[BLINK]]으로 대상을 따라가서 공격."],
      en: [""],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 바드 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, 대상과 충돌하면 [[HOMING]] [[BLINK]] 종료.", 
        "W의 [[STUN]]로 바드 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "E(경직 단계)의 [[CC_BUFFER]]로 바드 Q의 [[STUN]], R(존야)의 [[STASIS]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, R(존야)의 [[STASIS]]을 무시하는 경우는 에코 E의 공격 대상이 존야 상태가 아닐때만 가능. \n 단, [[BLINK]] 종료 후 [[STUN]], [[STASIS]]은 남아있음."],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]] 특이한 판정 \n 에코 E(경직 단계)의 [[CC_BUFFER]]로 바드 R(존야)의 [[STASIS]]을 무시할 때 판정이 다른 경우. \n \n 1. 에코는 바드 R(존야)의 [[STASIS]]에 걸리고 에코의 공격 대상은 걸리지 않은 경우. \n 에코가 대상에게 [[BLINK]]하고 데미지도 유효. [[EXIST]] \n \n 2. 에코와 공격 대상 모두 바드 R(존야)의 [[STASIS]]에 걸리는 경우. \n 에코가 대상에게 [[BLINK]]할 수 없음. [[NOT_EXIST]] [[CLIP:https://www.youtube.com/shorts/xsmHj32QCfs]]"],
    en: [],
  },
};
