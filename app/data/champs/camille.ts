import type { ChampSkill } from "../types";

const camille: ChampSkill = {
  id: "camille",
  skills: {
    P: ["SHIELD"],
    Q: ["MS_UP", "AA_RESET"],
    W: ["W_FLASH", "HEAL", "SLOW"],
    E: ["AS_UP", "STUN", "WALL_HOP"],
    R: ["R_FLASH", "WALL_HOP", "UNSTOPPABLE", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],
  },

  notes: [
    "P는 카밀이 입는 피해의 유형이 물리/마법 피해중 높은쪽의 쉴드를 받음\n예)카밀 방어력/마법저항력이 30/50 일때\n상대스킬로 100/100 물리/마법 피해가 들어온다면\n결과적으로 물리데미지가 더 많이 들어와서 >>>> 물리쉴드", "W는 바깥쪽에 맞혀야지만 [[HEAL]]과 [[SLOW]] 효과 발동", "E(갈고리)는 웬만한 생성된 벽에도 다됨\n[[AS_UP]]과 [[STUN]]은 부딪혀야지만 발동",
  ],

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default camille;
