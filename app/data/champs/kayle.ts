import type { ChampData } from "../interactions/types";

const kayle: ChampData = {
  id: "kayle",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["SLOW", "AR_MR_SHRED", "PIERCE"],
    W: ["W_FLASH", "HEAL", "MS_UP"],
    E: ["AA_RESET"],
    R: ["R_FLASH", "INVULNERABLE", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND", "HIT_EFFECT"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "1레벨", en: "1 Lv" }, tags: ["BUFF_STACK", "ON_HIT"] },
      { label: { ko: "11레벨 희열", en: "11 Lv Exalted" }, tags: ["BUFF_STACK", "DMG_MAGIC", "ON_HIT", "AOE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "Q 적중", en: "Q Hit" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "NON_PROJECTILE", "AOE"] },
    ] },
    
    W: ["TIMING_CAST", "TARGETED", "CHAIN"],
    E: { phases: [
      { label: { ko: "1레벨 E", en: "1 Lv E" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "11레벨 E", en: "11 Lv E" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "AOE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "R 심판", en: "R Judgment" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "P효과는 E스킬을 찍어야 발동\nP에 [[MS_UP]]는 5스택일 때 기본 공격 시 발동", "6 / 11 / 16 레벨에 R을 찍으면 강화\n6은 [[RANGE_UP]]\n11은 5스택 일 때 기본공격 시 화염파발동\n화염파는 범위+추뎀 (기본공격은 한대상만)\n16은 추가 [[RANGE_UP]] + 항상 5스택효과"
      ],
        en: ["[[Q_FLASH]] not possible", "P activates after putting points in E.\nP's [[MS_UP]] triggers during autos at 5 stacks", "Leveling R at 6/11/16 provides upgrades:\n6: [[RANGE_UP]]\n11: auto-attacks at 5 stacks fire a flame wave (AoE + bonus damage; basic attacks only hit one target)\n16: additional [[RANGE_UP]] + permanent 5-stack effect"]
        },
    },
  },

  ultCooldown: {
    6: 160,
    11: 120,
    16: 80,
  },

};

export default kayle;
