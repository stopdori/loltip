// app/data/matchups/ekko/ekko_ksante.ts
import type { MatchupSummary } from "../_types";

export const ekko_ksante: MatchupSummary = {
  champs: ["ekko", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 크산테 E의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 크산테 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 크산테 Q3의 [[GRAB]], W의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]]([[GRAB]], [[KNOCKBACK]])은 남아있음.", 
      "E(경직 단계)의 [[CC_BUFFER]]로 크산테 R의 [[SUPPRESS]]을 무시하고 [[BLINK]] 할 수 없음. [[NOT_EXIST]] \n 에코의 [[BLINK]]이 발동해도 다시 크산테에게 끌려감."],
      en: [""],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
