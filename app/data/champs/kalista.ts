import type { ChampData } from "../interactions/types";

const kalista: ChampData = {
  id: "kalista",
  skills: {
    P: ["WALL_HOP"],
    Q: ["Q_FLASH", "PIERCE"],
    W: ["TRUE_SIGHT", "ALLY_TP_OK"],
    E: ["SLOW"],
    R: ["AIRBORNE", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],
  },

  notes: {
    ko: ["Q는 대상을 처치하면 [[PIERCE]]됨\nQ를 미니언을 처치하면서 상대 챔피언에게 적중시키면 미니언에 있던 창 스택이 챔피언에게 옮겨감", "R은 상대에게 적중하면 계약자 챔피언의 평타 사거리만큼 뒤로 돌아옴\n그래서 원거리 서폿을 던져도 꽤 안전함\nR로 사라진 아군의 스킬은 계속 유효하고(예 케넨R)\n사라 진 동안 [[INVULNERABLE]]처럼 죽지 않음,\n계약자의 채널링, 정신집중 스킬은 다 끝나고 소환 됨.", "R을 사용했을때 칼리스타가 죽어도 스킬은 유효함."
  ],
    en: ["Q [[PIERCE]]s when it kills a target.\nIf Q kills a minion and hits an enemy champion, the Spear stacks from the minion are transferred to the champion.", "When R hits an enemy, the Oathsworn ally returns based on their basic attack range.\nThrowing a ranged support is therefore relatively safe.\nThe ally's skills remain active while gone (e.g., Kennen's R).\nThe ally does not die while gone, similar to [[INVULNERABLE]].\nThe ally is summoned only after all channeling or concentration skills are completed.", "If Kalista dies while R is active, the skill remains in effect."]
    
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kalista;
