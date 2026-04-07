import type { ChampData } from "../interactions/types";

const blitzcrank: ChampData = {
  id: "blitzcrank",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["GRAB"],
    W: ["BUFF_FORM", "AS_UP", "MS_UP", "SEPARATOR", "ST_DELAYED", "MS_DOWN"],
    E: ["AA_RESET", "AIRBORNE"],
    R: ["R_FLASH", "SILENCE", "SHIELD_BREAK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "GRAB"],
    W: ["BUFF_FORM", "MS_UP", "AS_UP", "SEPARATOR", "ST_DELAYED", "MS_DOWN"],
    E: ["DMG_PHYSICAL", "ON_HIT"],
    R: { phases: [
      { label: { ko: "낙뢰", en: "Lightning Strike" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "SINGLE"] },
      { label: { ko: "R 액티브", en: "R Active"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SILENCE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "블랭은 Q([[GRAB]])이 알파이자 오메가. \n [[GRAB]]으로 잘라먹거나 \n 딜러진을 끌어야 함.", "아군 딜러진에 붙는 적들을 [[GRAB]]으로 떼어놓거나 \n E로 [[AIRBORNE]], R의 [[SILENCE]]으로 방해."
        ], en: [] },
      note1: {

        ko: [
          "체력이 30%로 떨어지면 [[SHIELD]]. \n 최대 마나의 35%.",
          "Q([[GRAB]])는 대상보다 멀리 조준하면 조금 잘 끌수 있음. \n Q 빠지면 그냥 깡통임. \n Q를 들고 있는 것도 좋은 전략. \n ",
          "W는 [[MS_UP]], [[AS_UP]] \n 지속시간 끝나면 블랭 [[MS_DOWN]].",
          "E는 [[BA]]강화 [[AIRBORNE]]. \n [[AA_RESET]]가능.",
          "R을 들고있을 때 [[BA]]로 때리면 1초뒤에 낙뢰. \n 평E 하면 2번에걸쳐 낙뢰가 떨어짐. \n 쿨타임에는 불가. \n R을 사용하면 광역 피해, [[SILENCE]], [[SHIELD_BREAK]].",
        ],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "R의 [[PASSIVE_BONUS]] 낙뢰는 구인수효과에 영향을 받지만, 1초의 쿨타임은 계속 적용되어 두번에 걸쳐 낙뢰가 떨어짐. (1초, 1초)"
      ],
        en: ["[[Q_FLASH]] not possible", "Without Q (Rocket Grab), Blitzcrank is just a tin can.\nSaving Q is also a valid strategy.", "W applies a self [[SLOW]] when its duration expires"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 60,
    11: 40,
    16: 20,
  },

};

export default blitzcrank;
