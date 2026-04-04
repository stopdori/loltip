import type { ChampData } from "../interactions/types";

const zeri: ChampData = {
  id: "zeri",
  skills: {
    P: ["EXECUTE"],
    Q: ["Q_FLASH", "AD_UP"],
    W: ["SLOW"],
    E: ["WALL_HOP"],
    R: ["R_FLASH", "AS_UP", "MS_UP"],
  },

  vision: {
    P: [],
    Q: [],
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: [] },
      { label: { ko: "W 벽", en: "W Terrain" }, tags: ["VISION"] },
    ] },
    
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_BONUS", "DMG_MAGIC", "ON_HIT"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q 강화", en: "Empowered Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "W 벽", en: "W Terrain" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "NON_PROJECTILE", "ZONE"] },
    ] },

    E: ["BUFF_FORM", "DASH"],
    R: ["BUFF_FORM", "DMG_MAGIC", "TIMING_CAST", "AOE"],
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "Q 쿨타임은 스킬가속, 공속에 영향을 받음 \n 공속의 초과분 70%가 공격력으로 변환", "W에 [[CRIT]] 적용 가능", "E로 벽 넘으면서 W 써짐\nE를 쓰면 Q가 3번 관통됨", "R은 적 챔피언을 맞혀야 버프됨. \n 버프 지속시간은 평타, Q, W로 \n 피해를 주면 갱신 (아이템효과로 안됨)", "E [[DASH]] 중에 R 사용하면 모션캔슬 가능."
      ],
        en: ["Q cooldown is affected by ability haste and attack speed.\n70% of excess attack speed converts to AD", "[[CRIT]] can apply to W", "Using E then W fires W through the wall.\nE grants Q 3 pierce charges", "R buffs only trigger when hitting an enemy champion.\nBuff duration is refreshed by basic attacks, Q, or W damage (not item effects)"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 80,
    11: 75,
    16: 70,
  },

};

export default zeri;
