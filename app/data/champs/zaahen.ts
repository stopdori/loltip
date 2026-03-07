import type { ChampData } from "../interactions/types";

const zaahen: ChampData = {
  id: "zaahen",
  skills: {
    P: ["AD_UP", "REVIVE"],
    Q: ["HEAL", "AA_RESET", "AIRBORNE"],
    W: ["W_FLASH", "GRAB"],
    E: ["E_FLASH",],
    R: ["AR_PEN", "DMG_REDUCE", "LIFESTEAL", "WALL_HOP", "PSEUDO_UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]]은 정말 어렵게 되긴함", "P는 12스택 다 채우면 [[AD_UP]] 효과 두배\nP를 다 채워야 [[REVIVE]] 가능", "Q의 [[AIRBORNE]]은 Q2에만 적용", "R에 [[AR_PEN]]은 기본지속"
  ],
    en: ["[[E_FLASH]] works but is very difficult", "P at 12 stacks doubles [[AD_UP]].\nFull stacks required for [[REVIVE]]", "Q [[AIRBORNE]] only applies on Q2", "R [[AR_PEN]] is a passive effect"]
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
    11: 95,
    16: 80,
  },

};

export default zaahen;
