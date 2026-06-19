import type { ChampData } from "../interactions/types";

const khazix: ChampData = {
  id: "khazix",
  skills: {
    base : {
    P: ["SLOW"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "HEAL"],
    E: ["WALL_HOP"],
    R: ["INVISIBILITY", "MS_UP"],
  },

  alt: {
      
      P: ["SLOW"],
      Q: ["Q_FLASH"],
      W: ["W_FLASH", "HEAL", "SLOW", "REVEALED"],
      E: ["WALL_HOP"],
      R: ["INVISIBILITY", "MS_UP"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: ["HIT_SOUND"],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: ["HIT_SOUND", "REVEALED"],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["ST_CONDITIONAL", "BUFF", "DMG_PHYSICAL", "ON_HIT"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED"],
      W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
      E: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "DASH"],
      R: ["INVISIBILITY", "SKILL_RECAST"],
    },

    alt: {
      P: ["ST_CONDITIONAL", "BUFF", "DMG_PHYSICAL", "ON_HIT"],
      Q: { phases: [
      { label: { ko: "Q 진화 패시브", en: "Evolved Q Passive" }, tags: ["PASSIVE_BONUS", "RANGE_UP", "BA", "Q"] },
      { label: { ko: "Q 진화", en: "Evolved Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SEPARATOR", "DMG_PHYSICAL", "ST_CONDITIONAL", "CDR"] },
    ] },

      W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "VOLLEY", "AOE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
      E: ["RANGE_UP", "E", "SEPARATOR", "SEPARATOR_NEWLINE", "DMG_PHYSICAL", "TIMING_CAST", "AOE", "DASH", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"],
      R: ["INVISIBILITY", "SKILL_RECAST", "X2"],
    },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "한타보다 소규모 교전이 상당히 좋음.", 
          "한타에서는 뒤나 옆으로 도는게 좋음.", 
          "정면에서는 W로 포킹하다가 \n R로 모습을 감추고 [[BUFF]] [[BA]], Q로 폭딜. \n 뒷라인 고립된 대상을 잘 노려야 함."
        ], en: [
          "Small skirmishes are noticeably better than teamfights.",
          "In teamfights, it's good to flank from behind or the side.",
          "From the front, poke with W, then go invisible with R, [[BUFF]] [[BA]], and burst with Q. \n You need to look for isolated targets in the backline."
        ] },
      note1: {

        ko: [
          "P는 [[BUFF]]와 고립 두 가지가 있음. \n 상대 시야에 보이지 않으면 [[BUFF]] \n 버프가 생기고 모습이 보여도 사라지지 않음. \n [[BA]]를 때리면 [[BUFF]] 소모. \n [[BA]]에 [[SLOW]]와 [[DMG_MAGIC]]. \n \n 따로 떨어져 있는 적군을 고립 시킴. \n 고립 범위는 넥서스 크기만큼 \n 고립된 대상에게는 스킬마다 추가 효과.",

          "Q는 단일대상 [[DMG_PHYSICAL]]. \n 고립된 대상에게는 추가 [[DMG_PHYSICAL]]와 [[CDR]] \n \n Q [[EVOLVED]] \n [[BA]]와 Q 사거리 약간 증가.",

          "W는 [[DMG_PHYSICAL]] [[PROJECTILE]] 발사. \n 맞히면 [[AOE]] 피해. \n [[AOE]] 안에 카직스가 있다면 [[HEAL]]. \n \n W [[EVOLVED]] \n [[PROJECTILE]] 3개로 증가. \n [[SLOW]], [[REVEALED]] 추가. \n 고립된 대상에게는 강한 [[SLOW]]",

          "E는 점프하여 착지할 때 [[DMG_PHYSICAL]] \n \n E [[EVOLVED]] \n 점프 사거리 증가. \n 처치 관여 시 [[CDR_RESET]].",

          "R은 스킬을 배우면 QWER 중 하나 [[EVOLVED]]시킬 수 있음. \n R 사용 시 [[MS_UP]], [[INVISIBILITY]]. \n 한번 더 시전 가능. \n \n R [[EVOLVED]] \n [[INVISIBILITY]] 시간 증가. \n 두번 더 시전 가능.",
        ],

        en: [
          "P has two parts: [[BUFF]] and Isolation. \n If you're not in the enemy's vision, you gain [[BUFF]], \n and the buff stays even after you're seen. \n Hitting with [[BA]] consumes the [[BUFF]]. \n [[BA]] applies [[SLOW]] and [[DMG_MAGIC]]. \n \n Isolates an enemy that is separated from allies. \n The isolation range is about the size of the Nexus. \n Isolated targets take extra effects from each skill.",

          "Q deals single-target [[DMG_PHYSICAL]]. \n Isolated targets take extra [[DMG_PHYSICAL]] and grant [[CDR]]. \n \n Q [[EVOLVED]] \n Slightly increases [[BA]] and Q range.",

          "W fires a [[DMG_PHYSICAL]] [[PROJECTILE]]. \n On hit, it deals [[AOE]] damage. \n If Kha'Zix is inside the [[AOE]], he gets [[HEAL]]. \n \n W [[EVOLVED]] \n Increases to 3 [[PROJECTILE]]s. \n Adds [[SLOW]] and [[REVEALED]]. \n Strong [[SLOW]] on isolated targets.",

          "E deals [[DMG_PHYSICAL]] on landing after the jump. \n \n E [[EVOLVED]] \n Increases jump range. \n [[CDR_RESET]] on takedown.",

          "R can evolve one of QWER once learned. \n Using R grants [[MS_UP]] and [[INVISIBILITY]]. \n Can be recast once more. \n \n R [[EVOLVED]] \n Increases [[INVISIBILITY]] duration. \n Can be recast twice more.",
        ]

      },

      note2: {
        ko: [
        "진화에는 진화시간이 있음. \n 카이사와 다르게 진화캔슬이 안됨.",
        "E로 날아가는 도중 스킬 시전 가능",
        "R의 [[INVISIBILITY]] 상태일 때 점멸 써도 안 풀림 \n E(점프)는 풀림",
      ],
        en: [
          "Evolving takes time. \n Unlike Kai'Sa, you cannot cancel the evolve animation.",
          "Skills can be cast while mid-air from E",
          "[[INVISIBILITY]] from R does not break on Flash. \n E (jump) does break it",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default khazix;
