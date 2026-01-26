import type { ChampSkill } from "../types";

const zoe: ChampSkill = {
  id: "zoe",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["SLEEP", "MR_SHRED"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "첫 [[Q_FLASH]]은 불가능하고\n두번째는 [[Q_FLASH]] 가능함", "[[E_FLASH]] 안됨", "P를 Q1타, 2타, W, E, R 등으로 계속 돌려서 싸우는게 핵심", "Q는 투사체 이동거리에 따라 데미지 증가\n(상한선 있는듯)", "W로 점멸을 주웠을 때\n조이의 점멸을 사용해도 W부터 사용됨", "E는 벽을타고 계속 날아감\n아무도 맞지 않으면 바닥에 덫으로 남음", "E에 [[SLEEP]]은 평타, 스킬 데미지에 2배로 피해를 주는데 아군이 때려도 2배 적용 됨"
  ],
  
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default zoe;
