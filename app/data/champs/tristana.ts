import type { ChampData } from "../interactions/types";

const tristana: ChampData = {
  id: "tristana",
  skills: {
    P: ["RANGE_UP"],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW", "WALL_HOP"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "KNOCKBACK", "STUN"],
    ETC: [],
  },

  notes: {
    ko: [
    "W스킬은 두단계로 나뉨 준비/점프\n준비단계에 트리스타나가 맞은 CC는 유효하지만\n점프단계가 발동되어 앞으로 이동하는것\n점프단계에는 CC저항력 없음", "W 초기화는\n챔피언 처치 관여 또는\nE 최대중첩(4스택)이 폭발했을 때", "[[R_FLASH]]은 [[INSEC_KICK]] 됨"
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
    6: 100,
    11: 100,
    16: 100,
  },

};

export default tristana;
