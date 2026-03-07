import type { ChampData } from "../interactions/types";

const warwick: ChampData = {
  id: "warwick",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["LIFESTEAL", "WALL_HOP"],
    W: ["AS_UP", "MS_UP"],
    E: ["DMG_REDUCE", "FEAR"],
    R: ["LIFESTEAL", "SUPPRESS", "WALL_HOP", "PSEUDO_UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]], [[R_FLASH]] 안됨", "[[Q_FLASH]]은 짧은Q, 긴Q 둘 다 됨\n긴[[Q_FLASH]] 타이밍은 사거리 밖에서 Q를 누르면서 점멸로 Q 사거리 안에 들어가지는 타이밍에 점멸을 쓰면 됨",
    "상대 이동기 타이밍에 맞춰서\nQ를 길게 누르면 상대를 따라감", "W는 체력 50% 이하인 대상에게 적용\n25% 이하인 대상에게는 2배", "R의 [[PSEUDO_UNSTOPPABLE]]는 도약단계에\nR의 [[SUPPRESS]]은 공격단계에"
  ],
    en: ["[[E_FLASH]] and [[R_FLASH]] not possible", "Both short and long [[Q_FLASH]] work.\nFor long Q flash: press Q outside range then flash into Q range at the moment Q would fire", "Hold Q when the target uses a movement ability to track them", "W applies to targets below 50% HP.\n2x effect below 25% HP", "R [[PSEUDO_UNSTOPPABLE]] is during the leap phase.\nR [[SUPPRESS]] is during the attack phase"]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 110,
    11: 90,
    16: 70,
  },

};

export default warwick;
