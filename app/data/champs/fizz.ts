import type { ChampSkill } from "../types";

const fizz: ChampSkill = {
  id: "fizz",
  skills: {
    P: ["GHOSTING"],
    Q: ["Q_FLASH", "WALL_HOP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "SLOW", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    R: ["R_FLASH", "SLOW", "AIRBORNE"],
    ETC: [],
  },

  notes: [
    "Q를 벽넘어 대상에게 시전해야만 벽이 넘어짐", "E에 [[SLOW]]는 재사용 없이 착지해야 적용 됨", "R은 마우스 멀리놓고 사용해야 멀리 날아감",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default fizz;
