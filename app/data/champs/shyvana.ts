import type { ChampData } from "../interactions/types";

const shyvana: ChampData = {
  id: "shyvana",
  skills: {
    P: [],
    Q: ["AS_UP", "AA_RESET"],
    W: ["MS_UP"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "KNOCKBACK", "WALL_HOP", "PSEUDO_UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "분노 100에 R(변신) 사용 가능 \n초당 1 /1.5/ 2 분노 획득. 평타 시 2씩 획득", "R플은 애매함. R플을하면 기능적으로는 되는데 거리가 늘어나지 않음. 하지만 R플 E하면 E모션이 조금 단축돼서 순간적인 폭딜+에어본 가능",
  ],
    en: []
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
    6: 0,
    11: 0,
    16: 0,
  },

};

export default shyvana;
