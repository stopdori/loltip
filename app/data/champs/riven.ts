import type { ChampData } from "../interactions/types";
 

 
const riven: ChampData = {
 
  id: "riven",
 
  skills: {
 
    P: [],
 
    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DASH", "SEPARATOR", "ST_CONDITIONAL", "AA_RESET"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DASH", "WALL_HOP", "AIRBORNE", "SEPARATOR", "ST_CONDITIONAL", "AA_RESET"] },
    ] },
 
    W: ["STUN"],
 
    E: ["E_FLASH", "SHIELD", "DASH"],
 
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["R_FLASH", "AD_UP", "SEPARATOR", "BA", "RANGE_UP"] },
      { label: { ko: "R2", en: "R2" }, tags: ["R_FLASH"] },
    ] },
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: [],
 
    W: [],
 
    E: [],
 
    R: [],
 
  },
 

 
  gimmick: {
 
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["BUFF_INTERACT", "P", "Q", "W", "E", "R"] },
      { label: { ko: "P 버프스택", en: "P Buff Stack" }, tags: ["STACK_CONSUME", "SEPARATOR", "DMG_PHYSICAL", "ON_HIT"] },
    ] },
     
    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "AIRBORNE", "SEPARATOR", "BUFF_STACK"] },
    ] },
 
    W: ["DMG_PHYSICAL", "TIMING_AFTERCAST", "AOE", "STUN", "SEPARATOR", "BUFF_STACK"],
 
    E: ["SHIELD", "DASH", "SEPARATOR", "BUFF_STACK"],
 
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["TIMING_CAST", "AD_UP", "SEPARATOR", "BA", "RANGE_UP", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "SEPARATOR", "BUFF_STACK"] },
    ] },
 
  },
 

 
  notes: {
    skill: {
      note3: { 
        ko: [
          "ER로 R의 [[TIMING_CAST]]을 없애야 함.", 
          "점멸 Q3 또는 점멸 W로 \n 상대 뒷라인을 한순간에 물어 터뜨려야함. \n R2는 대상의 잃은체력 비례 데미지어서 콤보 마지막에 써야함.",
        ], en: [
          "Use E into R to remove R's [[TIMING_CAST]].",
          "Use Flash Q3 or Flash W \n to instantly dive and burst the enemy backline. \n R2 deals damage based on missing HP, so save it for the end of the combo.",
        ] },
      note1: {

        ko: [
          "P는 스킬을 사용할 때마다 [[BUFF_STACK]]. 최대 3회. \n [[BUFF_STACK]]은 [[BA]] 공격 시 [[STACK_CONSUME]]하여 [[DMG_PHYSICAL]]. \n \n",

          "Q1, Q2는 [[DASH]]하여 [[AOE]] [[DMG_PHYSICAL]].", 
          "Q3는 [[DASH]]하여 [[AOE]] [[DMG_PHYSICAL]], [[AIRBORNE]]. \n Q3만 [[WALL_HOP]] 가능. \n \n",

          "W는 [[AOE]] [[DMG_PHYSICAL]], [[STUN]]. \n \n",

          "E는 [[DASH]]하여 [[SHIELD]]. \n \n",

          "R1은 [[AD_UP]], [[BA]] [[RANGE_UP]]", "R2는 [[PIERCE]] [[PROJECTILE]] 발사. \n 대상의 잃은 체력 비례 [[DMG_PHYSICAL]].",
        ],

        en: [
          "P grants a [[BUFF_STACK]] each time a skill is used. Max 3 stacks. \n [[STACK_CONSUME]]s on [[BA]] hit to deal bonus [[DMG_PHYSICAL]]. \n \n",

          "Q1 and Q2 [[DASH]] and deal [[AOE]] [[DMG_PHYSICAL]].",
          "Q3 [[DASH]]es and deals [[AOE]] [[DMG_PHYSICAL]] and [[AIRBORNE]]. \n Only Q3 allows [[WALL_HOP]]. \n \n",

          "W deals [[AOE]] [[DMG_PHYSICAL]] and applies [[STUN]]. \n \n",

          "E [[DASH]]es and grants [[SHIELD]]. \n \n",

          "R1 grants [[AD_UP]] and [[BA]] [[RANGE_UP]]", "R2 fires a [[PIERCE]] [[PROJECTILE]]. \n Deals [[DMG_PHYSICAL]] based on the target's missing HP.",
        ]

      },

      note2: {

        ko: [
       "Q1, Q2, Q3는 바라보는 방향으로 [[DASH]]. \n 단, 마우스 커서로 적을 조준하면 그 방향으로 [[DASH]].",
       "R1은 [[TIMING_CAST]] 모션이 있음. \n E의 [[DASH]] 중에 R1을 사용하면 [[TIMING_CAST]] 모션이 없음."

      ],

        en: [
          "Q1, Q2, and Q3 [[DASH]] toward the direction Riven is facing. \n However, if the mouse cursor is aimed at an enemy, it [[DASH]]es toward that direction instead.",
          "R1 has a [[TIMING_CAST]] animation. \n Using R1 during E's [[DASH]] removes the [[TIMING_CAST]] animation.",
        ]

        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 120,
 
    11: 90,
 
    16: 60,
 
  },
 

 
};
 

 
export default riven;
 

