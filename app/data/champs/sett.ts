import type { ChampData } from "../interactions/types";

const sett: ChampData = {
  id: "sett",
  skills: {
    P: ["HEAL"],
    Q: ["MS_UP", "AA_RESET"],
    W: ["W_FLASH", "SHIELD", "UNINTERRUPTIBLE_CHANNEL"],
    E: ["GRAB", "SLOW", "STUN"],
    R: ["R_FLASH", "SUPPRESS", "SLOW", "WALL_HOP", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]] 안됨", "Q의 적 챔피언을 향해 다가갈때 [[MS_UP]]는 특정범위 내에 있는 적의 모습이 보여야 발동.\n상대가 부쉬 안, [[STEALTH]]류로 숨어있으면 발동하지 않음.", "W는 중심에 맞히면 고정 데미지\nW는 신중하게 쓰는게 좋음", "E [[STUN]]은 조건부로, 양쪽을 박치기 해야함\n미니언이랑 부딪혀도 [[STUN]]이 걸림", "R은 탱커에게 쓰면 착지 데미지가 쌔짐 "
  ],
    en: ["[[E_FLASH]] not possible", "Q's [[MS_UP]] while chasing only triggers if the enemy is visible within range.\nDoes not activate if the enemy is in a bush or hidden by [[STEALTH]].", "W center hit deals true damage.\nUse W carefully", "E [[STUN]] is conditional — both targets must collide with each other.\nMinions can also be the collision partner for [[STUN]]", "R landing damage is amplified on tanks"]
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default sett;
