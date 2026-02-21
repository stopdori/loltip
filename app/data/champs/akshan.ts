import type { ChampData } from "../interactions/types";

const akshan: ChampData = {
  id: "akshan",
  skills: {
    P: ["SHIELD", "MS_UP"],
    Q: ["Q_FLASH",],
    W: ["CAMOUFLAGE", "MS_UP", "REVIVE"],
    E: [],
    R: ["R_FLASH"],
    ETC: [],
  },
  notes: {
    ko: [
    "Q는 대상에 적중하면 [[PIERCE]]하고\n사거리 추가\n적중하지 않을 때 까지 반복", "W의 [[REVIVE]]은 특정조건에 발동.\n악당은 아군 챔피언을 처치하면 60초간 표식이 생김.\n악당을 3초 내에 처치/관여하면, 그에게 죽었던 아군만 즉시 [[REVIVE]]\n다른 악당표식은 사라짐", "E는 벽을 타고, 우클릭 착지보다 상대 근처에서 E 재사용으로 착지해야 딜로스 적음", "R을 시전중 E로 벽타기 가능", "R을 상대에게 시전 했는데 [[CAMOUFLAGE]], [[INVISIBILITY]]을 하면\n모습은 보이지 않지만 R은 날아감"
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
    6: 100,
    11: 85,
    16: 70,
  },

};

export default akshan;
