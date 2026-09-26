// app/data/matchups/caitlyn/caitlyn_ekko.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_ekko: MatchupSummary = {
  champs: ["caitlyn", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 에코 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음. \n 단, [[ROOT]]된 동안 에코 E [[BA]] [[BLINK]]이 발동하지 않음. [[CLIP:https://www.youtube.com/shorts/ps0KG0jhZ5M]]"],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Ekko's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply. \n However, Ekko's E [[BA]] [[BLINK]] does not activate while [[ROOT]]ed. [[CLIP:https://www.youtube.com/shorts/ps0KG0jhZ5M]]"],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 케이틀린 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 케이틀린 W의 [[ROOT]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[ROOT]]은 남아있음."],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]] 케이틀린 W(덫)의 [[ROOT]]과 에코 E의 판정의 정리. \n [[ROOT]]이 걸리는 타이밍에 따라 에코 E(구르기 단계, 경직 단계)의 판정이 달라짐. \n \n 1. 구르기 단계에 [[ROOT]]에 걸리면 [[ROOT]]이 종료 되어야 경직 단계(에코가 대상을 공격할 때 잠시 멈추는 단계)가 발동. \n 2. 경직 단계에 [[ROOT]]에 걸리면 [[BLINK]] 단계가 발동. \n 대상에게 [[HOMING]] [[BLINK]]와 데미지 유효."],
    en: [],
  },
};
