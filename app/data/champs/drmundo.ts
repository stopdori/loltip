import type { ChampData } from "../interactions/types";

const drmundo: ChampData = {
  id: "drmundo",
  skills: {
    P: ["CC_IMMUNE", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    W: ["HEAL"],
    E: ["AA_RESET"],
    R: ["HEAL", "HP_REGEN", "MS_UP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "CC_IMMUNE", "SEPARATOR", "ST_CONDITIONAL", "DROP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SLOW"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "DOT", "SKILL_RECAST"] },
      { label: { ko: "W2", en: "W2" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "AD_UP"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT", "NON_PROJECTILE"] },
    ] },
    
    R: ["BUFF_FORM"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "앞선에서 왔다갔다 하면서 Q로 포킹하다. \n W 키고 비비다 R을 키고 버텨주기.",
        ], en: [
          "Poke back and forth in the frontline with Q. \n Turn on W, get in their face, then activate R and tank it out.",
        ] },
      note1: {

        ko: [
          "P의 [[CC_IMMUNE]]은 쿨타임마다 1번 적용. \n 4%의 체력이 깎이고 바닥에 화학통을 떨어뜨림. \n 주우면 4% 돌려받고 + [[HEAL]]에 P [[CDR]]. \n 적이 주우면 파괴.",
          "Q는 체력을 소모해서 사용. \n 적 챔피언에게 [[SLOW]]와 소모량만큼 [[HEAL]]. \n 비 챔피언은 반절만큼 [[HEAL]].",
          "W는 3초간 지속. \n 처음 0.75초에 맞은 피해의 90% 정도를 \n 회색 체력으로 저장. \n 나머지 2.25초 동안은 25%로 저장. \n \n [[SKILL_RECAST]] 또는 3초 뒤에 폭발. \n 적 챔피언이 맞으면 회색체력의 100%를 [[HEAL]]. \n 맞지 않으면 50%만큼 [[HEAL]].",
          "E의 [[PASSIVE_BONUS]]는 체력비례 [[AD_UP]].",
          "E는 [[AA_RESET]] 가능. \n 문도의 체력이 낮을수록 위력 증가. \n 대상이 처치되면 뒤로 밀려나면서 동일한 피해를 줌. \n 챔피언도 밀려남.",
          "R은 잃은체력의 20% 정도를 [[MAX_HP_UP]]로 획득. \n + 10초에 걸쳐 최대체력 비례 [[HP_REGEN]]. \n \n 3렙궁은 범위내 적 챔피언 하나당 5%씩 효과 증가.",
        ],

        en: [
          "P's [[CC_IMMUNE]] triggers once per cooldown. \n It costs 4% max HP and drops a canister on the ground. \n Picking it up restores 4% HP and [[HEAL]]s, reducing P's cooldown. \n Enemies picking it up destroy it.",
          "Q costs HP to use. \n Hitting an enemy champion applies [[SLOW]] and [[HEAL]]s for the HP cost. \n Non-champions heal for only half.",
          "W lasts 3 seconds. \n Damage taken in the first 0.75s stores ~90% as grey HP. \n Damage in the remaining 2.25s stores 25%. \n \n Detonates via [[SKILL_RECAST]] or after 3s. \n Hitting an enemy champion [[HEAL]]s 100% of grey HP. \n Missing heals 50% instead.",
          "E's [[PASSIVE_BONUS]] grants [[AD_UP]] based on max HP.",
          "E allows [[AA_RESET]]. \n Damage increases the lower Dr. Mundo's HP is. \n If the target is killed, they are knocked back and nearby enemies take the same damage. \n This includes champions.",
          "R grants ~20% of missing HP as [[MAX_HP_UP]]. \n Then [[HEAL]]s based on max HP over 10 seconds. \n \n At rank 3, each nearby enemy champion increases the effect by 5%.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨.",
        "W는 대충 W키고 상대에게 비벼라.",
      ],
        en: [
          "[[Q_FLASH]] not possible.",
          "For W, just turn it on and get in the enemy's face.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default drmundo;
