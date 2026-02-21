import type { ChampData } from "../interactions/types";

const viktor: ChampData = {
  id: "viktor",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SHIELD"],
    W: ["W_FLASH", "SLOW", "STUN"],
    E: [],
    R: ["R_FLASH", "CANCEL"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q강화는 Q스킬에 [[MS_UP]]", "W강화는 모든스킬에 [[SLOW]] 추가", "E강화는 레이저 2차 폭발", "R강화는 R속도 증가\n처치 관여시 스킬반경 증가", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용"
  ],
    en: []
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default viktor;
