import type { ChampData } from "../interactions/types";

const olaf: ChampData = {
  id: "olaf",
  skills: {
    P: ["ST_CONDITIONAL", "AS_UP", "LIFESTEAL"],

    Q: ["AR_SHRED", "SLOW", "DROP"],

    W: ["AA_RESET", "AS_UP", "SHIELD"],

    E: ["E_FLASH"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["AR_MR_UP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM", "AD_UP", "CC_CLEANSE", "CC_IMMUNE", "SEPARATOR", "ST_CONDITIONAL", "TO_ENEMY", "MS_UP"] },
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
    P: ["ST_CONDITIONAL", "AS_UP", "LIFESTEAL"],

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "AR_SHRED", "SLOW", "DROP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    W: ["AS_UP", "SHIELD"],

    E: ["DMG_TRUE", "TIMING_CAST", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "AR_MR_UP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM", "AD_UP", "CC_CLEANSE", "CC_IMMUNE", "SEPARATOR", "ST_CONDITIONAL", "TO_ENEMY", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BA", "E", "DURATION_EXT"] },
     ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 잃은 체력 비례 [[AS_UP]], [[LIFESTEAL]] 획득.",

          "Q는 도끼 [[PROJECTILE]]를 투척. \n [[DMG_PHYSICAL]], [[AR_SHRED]], 이동 거리 비례 [[SLOW]]. \n 해당 지점에 도끼 [[DROP]] 생성. \n 닿으면 2.5초로 [[CDR]]. \n 2.5초 남은 상태에서 닿으면 [[CDR_RESET]].",

          "W는 [[AS_UP]], 잃은 체력 비례 [[SHIELD]].",

          "E는 [[TARGETED]] [[DMG_TRUE]]. \n 처치 시 소모 값 회복. \n 마나 대신 체력을 소모. \n [[BA]] 공격 시 [[CDR]] 1초. \n 몬스터 [[BA]] 공격 시 [[CDR]] 2초.",

          "R의 [[PASSIVE_BONUS]]는 [[AR_MR_UP]]. \n \n R은 지속시간 3초 [[AD_UP]], [[CC_CLEANSE]], 3초간 [[CC_IMMUNE]]. \n [[BA]], E로 챔피언 공격 시 지속시간 2.5초 연장. \n 처음 1초간 [[TO_ENEMY]] [[MS_UP]].",
        ],

        en: [
          "P grants [[AS_UP]] and [[LIFESTEAL]] scaling with missing HP.",
          "Q throws an axe [[PROJECTILE]]. \n Deals [[DMG_PHYSICAL]], applies [[AR_SHRED]], and [[SLOW]] scaling with distance traveled. \n Creates a [[DROP]] at the landing location. \n Picking it up sets the cooldown to 2.5s. \n Picking it up with 2.5s remaining [[CDR_RESET]]s the cooldown.",
          "W grants [[AS_UP]] and a [[SHIELD]] scaling with missing HP.",
          "E is a [[TARGETED]] [[DMG_TRUE]]. \n Refunds the cost on kill. \n Costs HP instead of mana. \n [[BA]] on any target reduces cooldown by 1s. \n [[BA]] on monsters reduces cooldown by 2s.",
          "R's [[PASSIVE_BONUS]] is [[AR_MR_UP]]. \n \n R grants [[AD_UP]] and [[CC_CLEANSE]] for 3s, and [[CC_IMMUNE]] for 3s. \n Attacking a champion with [[BA]] or E extends duration by 2.5s. \n [[MS_UP]] [[TO_ENEMY]] for the first 1s.",
        ]

      },

      note2: {
        ko: [
        "P의 [[BUFF]], W의 [[SHIELD]]는 체력이 30%일 때 최대.",
        "Q는 최소 투척 거리가 있음. \n 벽에 붙어서 벽으로 던지면 바로 주울 수 있음.",
        "[[Q_FLASH]]은 가능하지만 최대 사거리가 늘어나지는 않음. \n [[Q_FLASH]]을 가까운 거리에 던지면 \n 엉뚱하게 날아갈 수 있음.",
        "Q [[DROP]]에 [[ALLY_TP]] 불가.",
        "E의 시전 속도는 공격 속도에 비례"
      ],
        en: [
          "P [[BUFF]] and W [[SHIELD]] are maximized at 30% HP.",
          "Q has a minimum throw distance. \n Throwing it into a wall while standing next to it lets you pick it up immediately.",
          "[[Q_FLASH]] is possible, but does not extend max range. \n Throwing [[Q_FLASH]] at close range \n may cause the axe to fly in an unintended direction.",
          "[[ALLY_TP]] to Q [[DROP]] is not possible.",
          "E's cast speed scales with attack speed.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1) 원문을 뼈대로,
  // P는 CDragon stringtable에 기본 툴팁 키가 없고(spell_olafpassive_jade_tooltip은 공격 속도만 서술)
  // DDragon description이 공격 속도+생명력 흡수를 모두 다뤄 DDragon description을 뼈대로 씀.
  // 수치는 공식 위키(V26.13)로 채움(CDragon 게임 데이터 olaf.bin.json과 대조).
  skillTooltip: {
    P: {
      ko: "올라프가 잃은 체력에 비례해([[SELF_MISSING_HP_SCALE]]) 최대 50~107.84%([[LEVEL_SCALE]] 비례)의 [[AS_SCALE]]와, \n 최대 8~27.67%([[LEVEL_SCALE]] 비례)의 생명력 흡수([[LIFESTEAL]])를 얻습니다.",
      en: "",
    },
    Q: {
      ko: "올라프가 도끼를 던져([[PROJECTILE]]) 70/120/170/220/270(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 최대 3초 동안 30/35/40/45/50% [[SLOW]]시킵니다. (지속시간은 도끼가 날아간 거리에 비례합니다.) ([[DISTANCE_SCALE]]) \n 도끼에 맞은 적 챔피언은 4초 동안 방어력이 20% 감소합니다. ([[AR_SHRED]]) \n \n 올라프가 도끼를 집으면 이 스킬의 재사용 대기시간이 2.5초로 감소하거나, \n 2.5초가 지나면 스킬을 바로 재사용할 수 있습니다. ([[CDR]]) \n \n 9초의 [[COOLDOWN]].",
      en: "",
    },
    W: {
      ko: "5초 동안 올라프의 [[AS_SCALE]]가 40/50/60/70/80% 증가하고, \n 2.5초 동안 10/40/70/100/130+잃은 체력의 17.5%에 해당하는 [[SHIELD]]를 얻습니다. ([[SELF_MISSING_HP_SCALE]]) \n (체력이 30% 밑으로 떨어지면 최대 10/40/70/100/130(+[[SELF_MAXHP_SCALE]] 비례의 12.5%)) \n \n 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "",
    },
    E: {
      ko: "올라프가 맹렬한 기세로 도끼를 휘둘러 70/115/160/205/250(+50% [[AD_SCALE]])의 [[DMG_TRUE]]를 입힙니다. \n 적 [[ON_KILL]] 소모값을 되돌려받습니다. \n \n [[BA]] 공격 시 이 스킬의 재사용 대기시간이 1초 감소합니다. \n 몬스터 공격 시 2초 감소합니다. ([[CDR]]) \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "",
    },
    R: {
      ko: "[[PASSIVE_BONUS]]: 올라프의 [[AR_SCALE]]이 10/15/20, [[MR_SCALE]]이 10/15/20 증가합니다. \n \n 사용 시: 올라프가 자신에게 걸린 모든 이동 불가 및 방해 효과를 정화하고, \n 3초 동안 해당 효과에 면역 상태가 됩니다. ([[CC_IMMUNE]]) \n 활성화 중 올라프가 10/20/30(+25% [[AD_SCALE]])의 [[AD_SCALE]]을 얻습니다. \n [[BA]] 공격이나 무모한 강타(E)로 챔피언을 적중하면 이 스킬의 지속시간을 2.5초 연장합니다. ([[DURATION_EXT]]) \n \n 또한 1초 동안 적 챔피언을 향해 이동할 때 [[MS_SCALE]]가 20/45/70% 증가합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "",
    },
  },

};

export default olaf;
