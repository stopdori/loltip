import type { ChampData } from "../interactions/types";

const galio: ChampData = {
  id: "galio",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["SHIELD", "DMG_REDUCE", "TAUNT"],
    E: ["AIRBORNE", "CC_BUFFER"],
    R: ["R_FLASH", "SHIELD", "AIRBORNE", "WALL_HOP", "UNINTERRUPTIBLE_CHANNEL"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]] 안됨. 막혔음\nW는 스마트키를 풀고 쓰시면 좋음", "[[E_FLASH]] 안됨.", "E 스킬은 2단계로 나뉨 후진/돌진.\n후진단계에서 갈리오가 맞은 CC는 유효 하지만\n돌진단계가 발동되어 앞으로 이동하는 것.\n돌진단계에는 CC 저항력 없음.", "R은 점프를 준비할때 CC저항력이 없지만, 착지하고 아주 잠시동안 ''시전 집중'' 상태에 돌입하는데 이 상태를 [[UNINTERRUPTIBLE_CHANNEL]]으로 표시.\n이때 걸린 CC는 무시. [[SUPPRESS]] 포함."
  ],
    en: ["[[W_FLASH]] not possible (patched).\nDisabling smartcast on W is recommended", "[[E_FLASH]] not possible", "E has two phases: wind-up / dash.\nCC hit during wind-up is valid, but Galio still dashes forward.\nThere is no CC immunity during the dash phase.", "R has no CC immunity during the jump wind-up, but briefly enters a 'channeling focus' state upon landing, marked as [[UNINTERRUPTIBLE_CHANNEL]].\nCC applied during this state is ignored, including [[SUPPRESS]]."]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 180,
    11: 160,
    16: 140,
  },

};

export default galio;
