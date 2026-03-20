import type { ChampData } from "../interactions/types";

const qiyana: ChampData = {
  id: "qiyana",
  skills: {
    base : {
    P: [],
    Q: ["Q_FLASH", "INVISIBILITY", "MS_UP", "UNINTERRUPTIBLE_CAST"],
    W: ["AS_UP", "WALL_HOP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN", "UNINTERRUPTIBLE_CAST"],
  },

  alt: {
      // 🔨 W스킬 기반
      P: [],
    Q: ["Q_FLASH", "ROOT", "SLOW", "UNINTERRUPTIBLE_CAST"],
    W: ["AS_UP", "WALL_HOP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN", "UNINTERRUPTIBLE_CAST"],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
    Q: ["Q_FLASH", "UNINTERRUPTIBLE_CAST"],
    W: ["AS_UP", "WALL_HOP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN", "UNINTERRUPTIBLE_CAST"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  notes: {
    ko: [
    "P 초기화를 위해 W로 다른 속성을 집어 때려야 함", "땅Q는 50%미만 대상에게 추가데미지", "R은 판정이 특이함\nR은 일반적으로 벽에 닿으면 폭발하여 [[STUN]]을 걸지만\nR경로에 강가,부쉬가 있으면 폭발하여 벽에 닿지않아도 데미지와 [[STUN]]이 들어감\n예)R로 넉백을 했는데 착지점이 강가,부쉬가 끝나고 그냥 맨땅이라면 [[STUN]]은커녕 데미지도 없음"
  ],
    en: ["P resets by hitting a different element with W", "Earth Q deals bonus damage to targets below 50% HP", "R has unique hit detection.\nNormally R explodes on wall contact to apply [[STUN]],\nbut if river or brush is in R's path, it explodes and deals damage + [[STUN]] without hitting a wall.\nExample: if the knockback lands on flat ground after passing river/brush, neither the damage nor [[STUN]] will apply"]
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default qiyana;
