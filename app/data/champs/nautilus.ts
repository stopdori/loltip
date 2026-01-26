import type { ChampSkill } from "../types";

const nautilus: ChampSkill = {
  id: "nautilus",
  skills: {
    P: ["ROOT"],
    Q: ["GRAB", "STUN"],
    W: ["SHIELD", "AA_RESET"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "AIRBORNE", "STUN"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨\nQ는 벽이나 구조물에 적중하면 이동 가능함"
  ],


  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default nautilus;
