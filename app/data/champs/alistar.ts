import type { ChampSkill } from "../types";

const alistar: ChampSkill = {
  id: "alistar",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "WALL_HOP", "KNOCKBACK"],
    E: ["GHOSTING", "STUN"],
    R: ["CC_CLEANSE", "DMG_REDUCE"],
    ETC: [],
  },
   notes: [
    "P의 [[HEAL]]은 CC를 맞히면 1스택\n근처 적 미니언이 죽으면 1스택\n적 챔피언 7스택, 에픽몬스터 7스택\n7스택이 차면 나와 근처아군 1명을 [[HEAL]]", "W 스마트키 해제하고 쓰면 쿵쾅이 더 쉬움", "R은 CC를 맞고 쓰면 좋음\nR에 [[TENACITY]] 없음"
  ],
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default alistar;
