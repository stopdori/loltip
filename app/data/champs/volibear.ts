import type { ChampData } from "../interactions/types";

const volibear: ChampData = {
  id: "volibear",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH","MS_UP", "STUN", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SHIELD", "SLOW"],
    R: ["MAX_HP_UP", "SLOW", "UNSTOPPABLE"],
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
    Q: { phases: [
      { label: { ko: "추격단계", en: "Chase"  }, tags: [] },
      { label: { ko: "공격단계", en: "Strike" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
    ] },

    W: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "ON_HIT", "MARK", "MARK_CONSUME"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "ZONE"] },
      { label: { ko: "E 보호막", en: "E Shield" }, tags: ["ST_CONDITIONAL"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 점프", en: "R Dash" }, tags: ["BUFF_FORM", "DASH", "UNSTOPPABLE", "RANGE_UP", "W"] },
      { label: { ko: "R 착지", en: "R C" }, tags: ["DMG_PHYSICAL", "AOE"] },
    ] },
   
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
        "[[R_FLASH]] 안됨", "P는 최대 5스택", "Q의 적 챔피언을 향해 다가갈때 [[MS_UP]]는 특정범위 내에 있는 적의 모습이 보여야 발동.\n상대가 부쉬 안, [[STEALTH]]류로 숨어있으면 발동하지 않음.", "Q스킬은 두단계로 나뉨 추격/공격\n추격단계에 볼리베어가 맞은 CC는 유효하여 Q스킬이 해제되지만, 쿨타임을 돌려줌\n공격단계가 발동되면 CC를 맞아도 스킬이 유효함", "Q로 얇은벽 넘어의 적을 공격하면 벽 넘어짐", "W에 [[HEAL]]은 W로 2번 때려야 발동", "R은 [[MAX_HP_UP]]여서 풀피에도 유효함\n[[GW]]영향도 안받음", "R타워 비활성화\n이미 발사한 타워공격을 무효화 시킬 수 없음\n타워 어그로를 해제할 수 없음",
      ],
        en: ["[[R_FLASH]] not possible", "P stacks up to 5", "Q's [[MS_UP]] while chasing only triggers if the enemy is visible within range.\nDoes not activate if the enemy is in a bush or hidden by [[STEALTH]].", "Q has two phases: charge / strike.\nCC during the charge phase cancels Q but refunds the cooldown.\nOnce the strike phase activates, CC is ignored", "Q over a thin wall toward an enemy wall-hops", "W [[HEAL]] requires hitting with W twice", "R is [[MAX_HP_UP]] so it's effective even at full HP and ignores [[GW]]", "R disables towers.\nAlready-fired tower shots cannot be nullified.\nTower aggro cannot be removed"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 135,
    16: 110,
  },

};

export default volibear;
