import type { ChampData } from "../interactions/types";

const zac: ChampData = {
  id: "zac",
  skills: {
    P: ["REVIVE", "ALLY_TP_OK"],
    Q: ["SLOW", "AIRBORNE", "TETHER"],
    W: [],
    E: ["AIRBORNE", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "SLOW"],
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
      { label: { ko: "조각", en: "Chunks" }, tags: ["DROP"] },
      { label: { ko: "세포 분열", en: "Cell Division" }, tags: ["ST_CONDITIONAL", "SUMMON", "ST_DELAYED", "REVIVE"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE", "TETHER", "DROP"] },
      { label: { ko: "탄성 충돌", en: "Stretching Strikes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE", "DROP", "ROOT", "AIRBORNE"] },
    ] },
  
    W: ["DMG_MAGIC", "AOE", "DROP"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["SKILL_CHARGED", "CANCELLABLE"] },
      { label: { ko: "돌진", en: "Dash" }, tags: ["DASH", "AOE", "DMG_MAGIC", "DROP"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DROP"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]] 안됨", "P의 조각은 자크가 밟으면 [[HEAL]], 상대가 밟으면 사라짐.", "P 쿨타임은 300s\n [[REVIVE]]은 [[GW]]효과 안받음", "E에 [[AIRBORNE]]은 충전시간에 비례", "R에 처음 맞으면 [[AIRBORNE]]\n그 다음은 [[SLOW]]", "R은 CC에 걸려도 사용이 중지되지 않음.", "R 시전 중에는 W만 사용할 수 있음."
      ],
        en: ["[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]] not possible", "P cooldown is 300s.\n[[REVIVE]] is unaffected by [[GW]]", "E [[AIRBORNE]] scales with charge duration", "First hit of R applies [[AIRBORNE]], subsequent hits apply [[SLOW]]"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: ["자크의 조각은 \n Q 적중 시 1개. \n Q 탄성충돌 평타 시 1개. \n W 적중 시 1개. (적중대상 수와 관계X) \n E 적중 대상당 1개씩. \n R 적중횟수당 1개씩 \n (적중대상은 관계X)"], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default zac;
