import type { ChampData } from "../interactions/types";

const akali: ChampData = {
  id: "akali",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
    W: ["MS_UP", "SEPARATOR", "ST_CONDITIONAL", "INVISIBILITY"],
    E: ["E_FLASH", "DASH", "WALL_HOP", "TRUE_SIGHT"],
    R: ["R_FLASH", "DASH", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL", "HIT_INDICATOR"],
    W: [],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "E2", en: "E2" }, tags: ["POSITION_REVEAL"] },
    ] },
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R2", en: "R2" }, tags: ["POSITION_REVEAL"] },
    ] },
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["BUFF_INTERACT", "Q", "E", "R"] },
      { label: { ko: "온힛", en: "On-hit" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],

    W: ["ZONE", "SEPARATOR", "ST_CONDITIONAL", "INVISIBILITY"],

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DASH", "MARK", "BUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "TIMING_CAST", "HOMING", "DASH", "BUFF_STACK"]},
    ] },
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "BUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "R2", en: "R2"  }, tags: ["DMG_MAGIC", "AOE", "DASH", "BUFF_STACK"] },
    ] },
  },

  notes: {
    skill: {
      note1: {

        ko: [
        "스킬 맞히고 생기는 장판을 아칼리가 벗어나면 \n 평타 강화 ([[RANGE_UP]], [[DMG_MAGIC]]).",
        "Q는 끝에 맞혀야 함. \n 끝에 맞히면 [[SLOW]]",
        "W(장막)를 사용하면 \n 최대기력 100증가, 현재기력 100 추가. \n\n W에 숨으면 [[INVISIBILITY]] \n W에 E1을 꽂아둘 수 있음. \n E2도 사용할 수 있음.(지속시간 짧음)",
        "E1, E2 데미지가 정말 쌤 \n E1을 맞힌 대상에게 E2로 날아갈 수 있음.",
        "R은 돌진하는 경로 대상들에게 피해. \n R2는 잃은체력 비례 피해증가.",

        ],

        en: [
        "Leaving the zone created on hit empowers Akali's next auto \n ([[RANGE_UP]], [[DMG_MAGIC]]).",
        "Q's bonus effects only apply at max range. \n Only max range hit applies [[SLOW]].",
        "W grants +100 max energy and +100 current energy. \n\n Inside the shroud: [[INVISIBILITY]]. \n E1 can be thrown into the shroud. \n E2 can also be used inside (short duration).",
        "E1 and E2 both deal significant damage. \n E2 can dash to the target marked by E1.",
        "R dashes through enemies in its path, dealing damage. \n R2 deals increased damage based on missing HP.",
        ]

      },

      note2: {
        ko: [
        "스킬을 맞혔을 때 장판은 상대 중심으로 생김.", "W는 장막 안에서만 [[INVISIBILITY]]. \n\n [[REVEALED]]이 있는 스킬 (예 - 리신E) \n 스킬을 맞고 숨으면 보임. \n 맞기전에 숨으면 안보임. \n [[TRUE_SIGHT]](예 - 리신 Q)는 무조건 보임.", "E1은 [[TRUE_SIGHT]]. \n E1을 [[INVISIBILITY]] 대상에게 맞히면 보이고 \n E2로 도착하면 더 이상 모습이 보이지 않음. \n\n E2는 [[UNTARGETABLE]] 대상에게는 사용 불가.",
      ],
        en: ["The zone spawns centered on the enemy hit.", "W grants [[INVISIBILITY]] only inside the shroud.\n\nIf hit by a [[REVEALED]] ability (e.g. Lee Sin E) after hiding, you become visible.\nHiding before being hit keeps you hidden.\n[[TRUE_SIGHT]] (e.g. Lee Sin Q) always reveals you.", "E1 applies [[TRUE_SIGHT]].\nIf E1 hits an [[INVISIBILITY]] target, they become visible —\nbut once E2 arrives, they are no longer revealed.\n\nE2 cannot target [[UNTARGETABLE]] units."]
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

export default akali;
