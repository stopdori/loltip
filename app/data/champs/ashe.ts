import type { ChampData } from "../interactions/types";

const ashe: ChampData = {
  id: "ashe",
  skills: {
    P: ["SLOW"],
    Q: ["AA_RESET", "AS_UP"],
    W: ["W_FLASH"],
    E: ["GLOBAL", "VISION", "REVEALED"],
    R: ["GLOBAL", "STUN", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["SLOW"],
    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["BUFF_STACK"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["ST_CONDITIONAL", "STACK_CONSUME", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
    ] },
   
    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "VOLLEY"],
    E: ["TIMING_CAST", "ZONE", "GLOBAL", "RECHARGE"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "R 폭발", en: "R Burst"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "R의 [[STUN]]로 하나 잘라먹기.", "P의 [[SLOW]]로 최대한 카이팅. \n R의 [[STUN]]로 상대 진입 막기."
        ], en: [] },
      note1: {

        ko: [
          "P의 [[SLOW]]가 [[BA]]와 W에 적용.",
          "Q는 [[BA]]를 4대 때리면 사용 가능.",
          "W는 한 대상에게 한개씩만 데미지를 주고 \n 나머지는 무효.",
          "E는 사거리 무제한 시야 매. \n 수풀 안에도 보여줌.",
          "R은 사거리 무제한 화살. \n 적중한 대상만 [[STUN]] 그리고 범위피해와 [[SLOW]]. \n 화살이 이동한 거리에 따라 최대 3초 [[STUN]]."

        ],

        en: []

      },

      note2: {
        ko: [
        "[[W_FLASH]] 되는데 마우스 방향 잘 조준해야 함.", " W에는 [[SLOW]]가 없음\nP의 [[SLOW]]가 걸리는것", 
      ],
        en: ["[[W_FLASH]] works but mouse aim is important.\nW itself has no [[SLOW]] — the [[SLOW]] comes from P", "E has no range limit and reveals targets inside brushes.", "R's [[STUN]] duration increases with the distance traveled."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default ashe;
