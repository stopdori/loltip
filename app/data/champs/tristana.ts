import type { ChampSkill } from "../types";

const tristana: ChampSkill = {
  id: "tristana",
  skills: {
    P: ["RANGE_UP"],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW", "WALL_HOP"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "KNOCKBACK", "STUN"],
    ETC: [],
  },

  notes: [
    "W 초기화는\n챔피언 처치 관여 또는\nE 최대중첩(4스택)이 폭발했을 때", "[[R_FLASH]]은 [[INSEC_KICK]] 됨"
  ],


  ultCooldown: {
    6: 100,
    11: 100,
    16: 100,
  },

};

export default tristana;
