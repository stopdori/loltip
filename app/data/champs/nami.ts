import type { ChampData } from "../interactions/types";

const nami: ChampData = {
  id: "nami",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SUSPENDING"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["AIRBORNE", "SLOW"],
  },

  vision: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: [] },
      { label: { ko: "Q 적중", en: "Q Hit" }, tags: ["VISION"] },
    ] },
    W: ["POSITION_REVEAL"],
    E: [],
    R: ["VISION"],
  },

  gimmick: {
    P: ["BUFF_STACK",],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ZONE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "CHAIN"],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TARGETED"] },
      { label: { ko: "E 버프", en: "E Buff" }, tags: ["ON_HIT", "SINGLE"] },
    ] },
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "Q는 놀랍게도 [[SUSPENDING]]", "W는 아군 적군 아군 순서,\n또는 적군 아군 적군 순서로 [[CHAIN]].\n같은 대상에게 튕기지 않음.\nW는 상대에게 [[CHAIN]] 될 때, 시야가 보여야 유효.", "R을 아군도 같이 맞추면 P의 버프 발동.\n이때 아군에게 패시브가 두배로 발동됨",
      ],
        en: ["Q is surprisingly [[SUSPENDING]]", "Having allies hit by R together doubles P's effect on them"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default nami;
