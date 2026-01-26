import type { ChampSkill } from "../types";

const qiyana: ChampSkill = {
  id: "qiyana",
  skills: {
    base : {
    P: [],
    Q: ["Q_FLASH", "INVISIBILITY", "MS_UP"],
    W: ["AS_UP", "WALL_HOP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN"],
    ETC: [],
  },

  alt: {
      // 🔨 W스킬 기반
      P: [],
    Q: ["Q_FLASH", "ROOT", "SLOW"],
    W: ["AS_UP", "WALL_HOP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN"],
    ETC: [],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "WALL_HOP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN"],
    ETC: [],
    },
  },

  notes: [
    "P 초기화를 위해 W로 다른 속성을 집어 때려야 함", "땅Q는 50%미만 대상에게 추가데미지", "R은 판정이 특이함\nR은 일반적으로 벽에 닿으면 폭발하여 [[STUN]]을 걸지만\nR경로에 강가,부쉬가 있으면 폭발하여 벽에 닿지않아도 데미지와 [[STUN]]이 들어감\n예)R로 넉백을 했는데 착지점이 강가,부쉬 끝나고 그냥 맨땅이라면 기절은커녕 데미지도 없음"
  ],

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default qiyana;
