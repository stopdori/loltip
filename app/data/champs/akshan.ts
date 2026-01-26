import type { ChampSkill } from "../types";

const akshan: ChampSkill = {
  id: "akshan",
  skills: {
    P: ["SHIELD", "MS_UP"],
    Q: ["Q_FLASH",],
    W: ["STEALTH", "MS_UP"],
    E: [],
    R: ["R_FLASH", "VISION"],
    ETC: [],
  },
  notes: [
    "Q는 대상에 적중하면 [[PIERCE]]하고, 사거리가 증가","E는 벽을 타고, 우클릭 착지보다 상대 근처에서 E 재사용으로 착지해야 딜로스 적음", "R을 시전중 E로 벽타기 가능", "R을 상대에게 시전 했는데 [[STEALTH]], [[INVISIBILITY]]를 하면, 모습은 보이지 않지만 R은 날아감"
  ],
  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default akshan;
