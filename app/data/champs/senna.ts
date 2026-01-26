import type { ChampSkill } from "../types";

const senna: ChampSkill = {
  id: "senna",
  skills: {
    P: ["MS_UP", "SLOW", "AD_UP", "RANGE_UP", "CRIT", "LIFESTEAL"],
    Q: ["Q_FLASH", "SLOW", "HEAL"],
    W: ["W_FLASH", "ROOT"],
    E: ["E_FLASH", "CAMOUFLAGE", "UNTARGETABLE", "MS_UP"],
    R: ["SHIELD"],
    ETC: [],
  },

  notes: [
    "P의 [[MS_UP]], [[SLOW]]는 챔피언 대상으로\n스택을 터뜨렸을 때만 발동", "P 망령들에 텔 안타짐\n[[CRIT]]가 100% 넘어가면\nP의 [[CRIT]] 수치가 생명력 흡수로 변환됨", "W는 광역 [[ROOT]]임", "E는 아군이 E속에 들어갔다 나오면 망령이 되는데, 망령일 때 [[UNTARGETABLE]], [[MS_UP]]가 됨"
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default senna;
