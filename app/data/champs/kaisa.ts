import type { ChampData } from "../interactions/types";

const kaisa: ChampData = {
  id: "kaisa",
  skills: {
    base : {
    P: [],
    Q: [],
    W: ["W_FLASH", "REVEALED"],
    E: ["AS_UP", "MS_UP", "GHOSTING"],
    R: ["R_FLASH", "SHIELD", "WALL_HOP"],
  },

  alt: {
      
      P: [],
      Q: [],
      W: ["W_FLASH", "REVEALED"],
      E: ["AS_UP", "MS_UP", "GHOSTING", "INVISIBILITY"],
      R: ["R_FLASH", "SHIELD", "WALL_HOP"],
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
      P: ["DMG_MAGIC", "ON_HIT", "DEBUFF_STACK", "PROC"],
      Q: ["DMG_PHYSICAL", "PROJECTILE", "HOMING"],
      W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK"],
      E: ["TIMING_CAST", "LOCKED"],
      R: ["ST_CONDITIONAL", "DASH"],
    },
    alt: {
      P: ["DMG_MAGIC", "ON_HIT", "DEBUFF_STACK", "PROC"],
      Q: ["DMG_PHYSICAL", "PROJECTILE", "HOMING"],
      W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK"],
      E: ["TIMING_CAST", "LOCKED"],
      R: ["ST_CONDITIONAL", "DASH"],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "진화 기준\nQ 추가 공격력100\nW 주문력 100\nE 공격속도 100%", "P의 [[DEBUFF_STACK]]은 스택이 쌓인 대상을 평타로 공격할때 마다 추가 데미지도 있고, 스택이 다 쌓이면 표식폭발 데미지도 있음.", "진화 W는 상대 챔피언을 맞히면\n쿨타임 감소"
      ],
        en: ["Evolutions:\nQ — 100 bonus AD\nW — 100 AP\nE — 100% AS", "Evolved W reduces its cooldown when hitting an enemy champion"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 100,
    16: 70,
  },

};

export default kaisa;
