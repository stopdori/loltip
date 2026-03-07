import type { ChampData } from "../interactions/types";

const nilah: ChampData = {
  id: "nilah",
  skills: {
    P: [],
    Q: ["Q_FLASH", "AA_RESET", "AS_UP", "AR_PEN", "LIFESTEAL", "SHIELD"],
    W: ["DODGE", "DMG_REDUCE", "GHOSTING", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "GRAB", "LIFESTEAL", "SHIELD"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q 기본지속효과에\n[[AR_PEN]], 챔피언 기본공격 시 [[HEAL]], 최대체력일 때 [[SHIELD]] 생성 모두 치명타비례", "W는 닐라와 닿은 아군도 효과를 받아 감\nW에 [[DMG_REDUCE]]는 마법피해만임", "E는 아군에게도 사용 가능", "R은 그랩 될 때 효과들이 발동\nR에 닿은 아군도 [[HEAL]]시킴",
  ],
    en: ["Q's passive base effects — [[AR_PEN]], [[HEAL]] on champion attacks, and [[SHIELD]] at max HP — all scale with crit", "W also applies its effects to allies touching Nilah.\nW's [[DMG_REDUCE]] is magic damage only", "E can target allies", "R effects trigger when enemies are grabbed.\nAllies touched by R are also [[HEAL]]ed"]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default nilah;
