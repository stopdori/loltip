// app/data/matchups/ekko/ekko_fizz.ts
import type { MatchupSummary } from "../_types";

export const ekko_fizz: MatchupSummary = {
  champs: ["ekko", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 피즈 Q의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 피즈 R의 [[AIRBORNE]], [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]], [[KNOCKBACK]]([[AIRBORNE]])은 남아있음."],
      en: [""],
    },
    fizz: {
      ko: ["E(재간 둥이)의 [[UNTARGETABLE]]로 에코 Q의 [[PROJECTILE]] / W의 [[SLOW]], [[STUN]] / R의 [[AOE]] 데미지를 피할 수 있음."],
      en: [],
    },
  },
  common: {
    ko: ["에코 E의 공격 대상이 됐을 때, 피즈 E(재간 둥이)를 사용하면 \n 피즈가 [[UNTARGETABLE]]가 되어 에코 E의 [[BLINK]] 공격이 발동하지 않음. [[CLIP:https://www.youtube.com/shorts/AVSuM1qvvQQ]]"],
    en: [],
  },
};
