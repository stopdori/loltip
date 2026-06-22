import type { ChampData } from "../interactions/types";

const lucian: ChampData = {
  id: "lucian",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
    E: ["DASH", "WALL_HOP"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION", "REVEALED"],
    E: [],
    R: ["HIT_INDICATOR"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "빛의 사수", en: "Lightslinger" }, tags: ["BUFF_INTERACT", "Q", "W", "E", "R", "SEPARATOR", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "경계", en: "Vigilance" }, tags: ["BUFF_INTERACT", "W", "SEPARATOR", "DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
    ] },

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "NON_PROJECTILE", "AOE", "BUFF"],
    W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "MARK", "BUFF", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "BUFF", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK", "X2"],
    E: ["DASH", "BUFF"],
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "CANCELLABLE", "BUFF"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "일반적인 원딜과 크게 다르지 않지만 \n 지속딜 보다 폭딜이 강한 원딜. \n 폭딜 넣고 잠깐 거리를 벌리는 게 좋음.",
        ], en: [
          "Not very different from a typical ADC, \n but burst damage is stronger than sustained damage. \n It's good to burst then create some distance briefly.",
        ] },
      note1: {

        ko: [
          "P는 버프가 두 가지. \n \n 빛의 사수 [[BUFF]] \n 스킬을 사용하면 [[BUFF]]. \n [[BUFF]]를 소모하여 [[BA]] 한대에 두번 공격. \n 두 번째 공격은 50% [[DMG_PHYSICAL]]. \n 미니언은 100% [[DMG_PHYSICAL]]. \n \n 경계 [[BUFF_STACK]] \n 주변 아군이 루시안에게 [[HEAL]] 또는 [[SHIELD]]를 주거나 \n 적 챔피언을 [[IMMOBILIZING]]로 만들면 [[BUFF_STACK]] [[X2]]. 최대 4스택. \n 소모하여 [[BA]]에 [[DMG_MAGIC]] 추가.",

          "Q는 루시안과 대상의 궤적 \n 그리고 그 뒤쪽에까지 [[AOE]] [[DMG_PHYSICAL]].",

          "W는 적중하거나 끝에 도달하면 폭발하여 \n [[REVEALED]], [[DEBUFF]], [[DMG_MAGIC]]. \n [[DEBUFF]]는 루시안이나 아군이 피해를 입히면 루시안 [[MS_UP]]. \n 아군이 입히면 P의 경계 [[BUFF_STACK]]도 함께 발동.",

          "E는 [[DASH]]. \n P의 두번 공격 [[BUFF]]를 소모하여 [[BA]]치면 \n 1초 [[CDR]]. 챔피언이면 2초 [[CDR]].",

            "R은 설정한 방향으로 탄환 세례 발사하여 [[DMG_PHYSICAL]]. \n R 시전 중에 E 사용 가능.",
        ],

        en: [
          "P has two buffs. \n \n Lightslinger [[BUFF]] \n Using a skill grants [[BUFF]]. \n Consume [[BUFF]] to attack twice with one [[BA]]. \n The second hit deals 50% [[DMG_PHYSICAL]]. \n 100% [[DMG_PHYSICAL]] against minions. \n \n Vigilance [[BUFF_STACK]] \n If a nearby ally [[HEAL]]s or [[SHIELD]]s Lucian, \n or [[IMMOBILIZING]]s an enemy champion, gain [[BUFF_STACK]] [[X2]]. Max 4 stacks. \n Consume it to add [[DMG_MAGIC]] to [[BA]].",

          "Q deals [[AOE]] [[DMG_PHYSICAL]] along the line between Lucian and the target \n and the area behind it.",

          "W explodes on hit or at max range, \n applying [[REVEALED]], [[DEBUFF]], and [[DMG_MAGIC]]. \n If Lucian or an ally damages the [[DEBUFF]]ed target, Lucian gains [[MS_UP]]. \n If an ally deals the damage, P's Vigilance [[BUFF_STACK]] also triggers.",

          "E is a [[DASH]]. \n Landing a [[BA]] while consuming P's double-attack [[BUFF]] \n grants 1s [[CDR]]. 2s [[CDR]] if it hits a champion.",

          "R fires a barrage of bullets in a set direction for [[DMG_PHYSICAL]]. \n E can be used while R is being cast.",
        ]

      },

      note2: {
        ko: [
        "Q는 시전속도가 레벨 비례.",
        "R의 [[PROJECTILE]] 수는 [[CRIT]]와 [[CRIT]] 피해량 비례. "
      ],
        en: [
        "Q's cast speed scales with level.",
        "The number of [[PROJECTILE]]s in R scales with [[CRIT]] chance and [[CRIT]] damage. "
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default lucian;
