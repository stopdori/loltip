import type { ChampData } from "../interactions/types";

const xayah: ChampData = {
  id: "xayah",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "MS_UP"],
    E: ["E_FLASH", "ROOT"],
    R: ["R_FLASH", "GHOSTING", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],
  },

  notes: {
    ko: [
    "W로 [[AA_RESET]] 안됨\n[[MS_UP]]는 깃털이 상대 챔피언에 닿아야 발동", "E [[ROOT]]은 깃털 3개이상 맞혀야 발동", "자야, 라칸 시너지\n귀환타고 있는 대상에게 다가가서 귀환을 누르면, 앞서 진행한 귀환게이지를 공유받음\n \n자야 W를 라칸이 공유받음\n[[MS_UP]]는 자야가 공격해야 라칸도 증가\n \n라칸 E의 범위가 자야에겐 두배가 됨"
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
    6: 140,
    11: 120,
    16: 100,
  },

};

export default xayah;
