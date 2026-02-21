import type { ChampData } from "../interactions/types";

const akali: ChampData = {
  id: "akali",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["INVISIBILITY", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP", "TRUE_SIGHT"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q의 [[SLOW]]는 사거리 끝에 맞혀야만 걸림", "W는 장막 안에서만 [[INVISIBILITY]]\n[[REVEALED]]이 있는 스킬(예- 리신E)에\n스킬을 맞고 숨으면 보임\n맞기전에 숨으면 안보임\n절대시야(예 - 리신Q)는 무조건 보임", "E를 장막에 맞히고 E2로 되돌아 올 수 있음\n[[UNTARGETABLE]] 대상에게는 E2 사용불가"
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
    6: 120,
    11: 90,
    16: 60,
  },

};

export default akali;
