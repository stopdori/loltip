import type { ChampData } from "../interactions/types";

const gnar: ChampData = {
  id: "gnar",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["AS_UP", "MS_UP", "BUFF_FORM"],
      Q: ["SLOW"],                // 인간 Q는 Q플 X
      W: ["MS_UP"],
      E: ["E_FLASH", "AS_UP", "SLOW", "WALL_HOP"],
      R: ["MS_UP"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MAX_HP_UP", "BUFF_FORM"],
      Q: ["Q_FLASH", "SLOW"],      // 변신 Q는 Q플 가능
      W: ["STUN"],
      E: ["SLOW", "WALL_HOP"],
      R: ["AIRBORNE", "SLOW", "STUN"],
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
  },

  gimmick: {
    base: {
      P: ["BUFF_FORM"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE"],
      W: ["PASSIVE_BONUS", "DMG_MAGIC", "PROC"],
      E: ["DMG_PHYSICAL", "DASH"],
      R: [],
    },
    alt: {
      P: ["BUFF_FORM"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"],
      W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"],
      E: ["DMG_PHYSICAL", "DASH", "AOE"],
      R: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "나르 변신은 분노가 100이 되고\n스킬을 사용하면 발동\n미니 E(점프)로 적을 밟으면 2단점프 하면서 변신", "미니폼\nP의 [[MS_UP]]는 미니폼일 때 항시 적용\n[[Q_FLASH]] 안됨\nE는 대상을 맞혀야 [[SLOW]]. 미니언도 밟아짐\nR은 W의 [[MS_UP]]효과를 증가시킴", "메가폼\nP는 [[MAX_HP_UP]]여서 [[GW]]효과 안받음\n[[W_FLASH]] 안됨\nR은 벽에 부딪혀야 [[STUN]]"
      ],
        en: ["Gnar transforms when rage reaches 100 and a skill is used.\nMini E (hop) landing on a target double-jumps and triggers the transform", "Mini form:\nP [[MS_UP]] is always active in mini form.\n[[Q_FLASH]] not possible.\nE applies [[SLOW]] on hit — minions can also be hopped on.\nR amplifies W [[MS_UP]]", "Mega form:\nP is [[MAX_HP_UP]] so [[GW]] has no effect.\n[[W_FLASH]] not possible.\nR requires hitting a wall for [[STUN]]"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 90,
    11: 60,
    16: 30,
  },
};

export default gnar;
