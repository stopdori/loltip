import type { ChampSkill } from "../types";

const taliyah: ChampSkill = {
  id: "taliyah",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "STUN"],
    R: ["AIRBORNE", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "Q [[SLOW]]는 다진땅 에서 발동한 Q만 발동", "R은 비전투에만 사용가능\n벽에 텔 안타짐"
  ],


  ultCooldown: {
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taliyah;
