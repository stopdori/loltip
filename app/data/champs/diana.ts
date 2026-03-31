import type { ChampData } from "../interactions/types";

const diana: ChampData = {
  id: "diana",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "VISION"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "GRAB"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "PROC"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],
    W: ["DMG_MAGIC", "PROJECTILE", "SINGLE"],
    E: ["DMG_MAGIC", "TARGETED", "DASH"],
    R: { phases: [
      { label: { ko: "달", en: "Moon" }, tags: ["TIMING_CAST"] },
      { label: { ko: "달 낙하", en: "Fall" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 평타를 때리면 [[BUFF_STACK]]이 다이애나에게 쌓이고, 3스택이 쌓이면 다음 공격이 강화됨.", "P는 레벨별 [[AS_UP]]이 있고\n스킬 사용시 [[AS_UP]] 추가로 있음", "W 구체를 다 터뜨리면 추가 [[SHIELD]] 얻음", "EQ로 E 초기화 안됨", "R은 한 명이라도 R에 적중해야 달을 소환해서 터뜨릴 수 있음."
      ],
        en: ["P gains [[BUFF_STACK]] stacks on basic attacks. At 3 stacks, the next attack is empowered.", "P has a level-based [[AS_UP]] plus additional [[AS_UP]] from using skills", "Fully detonating all W spheres grants a bonus [[SHIELD]]", "E+Q does not reset E", "R requires hitting at least one enemy to summon and detonate the moon."]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default diana;
