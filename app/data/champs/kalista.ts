import type { ChampSkill } from "../types";

const kalista: ChampSkill = {
  id: "kalista",
  skills: {
    P: ["WALL_HOP"],
    Q: ["Q_FLASH"],
    W: ["TRUE_SIGHT", "ALLY_TP_OK"],
    E: ["SLOW"],
    R: ["AIRBORNE", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],
  },

  notes: ["Q를 미니언을 처치하면서 상대 챔피언에게 적중시키면 미니언에 있던 창 스택이 챔피언에게 옮겨감", "R은 상대에게 적중하면 날아간 챔피언의 평타 사거리만큼 뒤로 돌아옴\n그래서 원거리 서폿을 던져도 꽤 안전함"
  ],

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kalista;
