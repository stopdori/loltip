import type { ChampSkill } from "../types";

const talon: ChampSkill = {
  id: "talon",
  skills: {
    P: [],
    Q: ["Q_FLASH", "CRIT", "AA_RESET", "HEAL"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "INVISIBILITY", "MS_UP"],
    ETC: [],
  },

  notes: [
    "근접 Q는 [[CRIT]]\nQ로 대상을 처치하면 [[HEAL]]", "W [[SLOW]]는 돌아올 때", "R [[INVISIBILITY]]중에 점멸써도 안풀림", "내 탈론이 약한 이유는 R을 재사용으로 해제해서 그럴 수 있음.\n평타나 Q로 대상에게 해제해야 딜이 쌤",
  ],
  
  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default talon;
