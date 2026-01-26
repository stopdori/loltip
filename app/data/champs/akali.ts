import type { ChampSkill } from "../types";

const akali: ChampSkill = {
  id: "akali",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["INVISIBILITY", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP", "VISION"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "Q [[SLOW]]는 사거리 끝에 맞혀야만 걸림", "W는 [[REVEALED]]이 있는 스킬(예- 리신E)에\n맞기전에 숨으면 안보임\n스킬을 맞고 숨으면 보임\n절대시야(예 - 리신Q)는 무조건 보임", "E는 W(장막)에도 맞혀놓고 돌아올 수 있음\nE는 상대가 맞으면 시야가 보임\n단) 상대가 은신한다면 시야도 사라지고 재사용도 안됨"
  ],

  ultCooldown: {
    6: 120,
    11: 90,
    16: 60,
  },

};

export default akali;
