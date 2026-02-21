import type { ChampData } from "../interactions/types";

const alistar: ChampData = {
  id: "alistar",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "WALL_HOP", "KNOCKBACK"],
    E: ["GHOSTING", "STUN"],
    R: ["CC_CLEANSE", "DMG_REDUCE"],
    ETC: [],
  },
   notes: {
    ko: [
    "P의 [[HEAL]]은 CC를 맞히면 1스택\n근처 적 미니언이 죽으면 1스택\n적 챔피언 7스택, 에픽몬스터 7스택\n7스택이 차면 나와 근처아군 1명을 [[HEAL]]", "W 스마트키 해제하고 쓰면 쿵쾅이 더 쉬움", "R은 CC를 맞고 쓰면 좋음\nR에 [[TENACITY]] 없음\nR의 [[CC_CLEANSE]]로 범위 지속적인 CC를 해제하면 다시 걸림 (예, 코그모 E의 [[SLOW]], 그브 W의 [[SLOW]])", "R로 [[AIRBORNE]]류를 해제하면 이동은 불가능하지만 스킬은 사용 가능\n단, W는 버그인지 모르겠는데 돌진은 되지만 스킬이 무효임. 대상이 밀려나지도 데미지도 들어가지 않음"
  ],

    en: []
  },

vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
    ETC: [],
  },
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default alistar;
