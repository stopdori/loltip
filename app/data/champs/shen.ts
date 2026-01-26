import type { ChampSkill } from "../types";

const shen: ChampSkill = {
  id: "shen",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW", "AS_UP"],
    W: ["PROTECTIVE_ZONE"],
    E: ["E_FLASH", "TAUNT", "WALL_HOP"],
    R: ["SHIELD", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "쉔과 검 사이에 상대 챔프를 두는게 핵심\n검을 적중시켜야 [[SLOW]], [[AS_UP]] 발동\n여기서 [[SLOW]]는 쉔에게 멀어질 때만", "W를 발동하고 범위 내에 쉔이나 아군이 없으면 비활성화\n들어오는 순간 발동함", "R로 아군에게 이동 할 때, 검도 같이 옴"
  ],

  ultCooldown: {
    6: 200,
    11: 180,
    16: 160,
  },

};

export default shen;
