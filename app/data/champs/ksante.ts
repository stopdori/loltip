import type { ChampSkill } from "../types";

const ksante: ChampSkill = {
  id: "ksante",

  skills: {
    base: {
      P: [],
      Q: ["Q_FLASH", "SLOW", "STUN", "GRAB"],
      W: ["DMG_REDUCE", "UNSTOPPABLE", "STUN"],
      E: ["SHIELD", "WALL_HOP"],
      R: ["AS_UP", "SUPPRESS", "UNSTOPPABLE", "WALL_HOP"],
      ETC: [],
    },
    alt: {
      P: ["LIFESTEAL", "AR_PEN"],
      Q: ["Q_FLASH", "SLOW", "STUN", "GRAB"],
      W: ["DMG_REDUCE", "UNSTOPPABLE"],
      E: ["SHIELD", "WALL_HOP"],
      R: [],
      ETC: [],
    },
  },

  notes: [
    "이게 크산테다 체력 4700 방어력 329 마저201인 챔피언👤이 [[UNSTOPPABLE]]🚫, 실드🛡, 벽🧱 넘기는 거 있고요. 에어본🌪 있고, 심지어 쿨타임은 1️⃣초밖에 안되고 마나🧙‍♂️는 1️⃣5️⃣ 들고 w는 심지어 변신💫하면 쿨 초기화에다가 패시브는 고정피해🗡가 들어가며 그 다음에 방마저🥋 올리면📈 올릴수록📈 스킬 가속⏰이 생기고! q에 스킬가속⏰이 생기고 스킬 속도🚀가 빨라지고📈 그 다음에 공격력🗡 계수가 있어가지고 W가 그 이익- 으아아아악😱😱 - Showmaker"
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default ksante;
