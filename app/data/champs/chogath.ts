import type { ChampData } from "../interactions/types";

const chogath: ChampData = {
  id: "chogath",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW"],
    W: ["W_FLASH", "SILENCE"],
    E: ["AA_RESET", "SLOW"],
    R: ["R_FLASH", "MAX_HP_UP", "EXECUTE"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "ST_DELAYED", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "SLOW"],
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SILENCE"],
    E: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "BUFF_STACK", "SLOW"],
    R: ["DMG_TRUE", "TIMING_CAST", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "STACKING"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q는 맞추기 어려운 스킬이지만 \n 맞히기만 하면 정말 강력한 스킬. \n 그래서 대치중에 앞라인에서 Q, W로 견제.",
          "앞에서 W의 [[SILENCE]]로 버텨주면서 \n 상대 딜러 라인에 Q의 [[AIRBORNE]]으로 각 만들어 주기.",
        ], en: [
          "Q is hard to land, but extremely powerful when it connects.\nUse it to poke from the frontline with Q and W during standoffs.",
          "Hold the frontline with W's [[SILENCE]]\nwhile creating openings for your team with Q's [[AIRBORNE]] onto the enemy carries.",
        ] },
      note1: {

        ko: [
          "P의 효과로 적을 처치하면 [[HEAL]]과 [[MANA_RESTORE]].",
          "Q는 광역 [[AIRBORNE]]에 끝나면 [[SLOW]]. \n [[TIMING_CAST]]과 [[ST_DELAYED]]이 같이있는 정말 느린스킬.",
          "W는 광역 [[SILENCE]]. \n 스킬을 찍을수록 [[SILENCE]] 시간 증가.",
          "E를 쓰고 [[BA]]를 때리면 [[PROJECTILE]] 발사. \n 이 [[PROJECTILE]]는 [[PIERCE]]에 [[SLOW]].",
          "R은 [[DMG_TRUE]] [[ST_CONDITIONAL]] [[STACKING]]. \n R로 대상을 처치하면 [[BUFF_STACK]]이 쌓임. \n 몸집이 커지고 [[MAX_HP_UP]], [[BA]] [[RANGE_UP]]. \n \n [[BUFF_STACK]]은 미니언, 정글몹에서 최대 6. \n 챔피언, 에픽몬스터 대상으로는 무제한 [[STACKING]].",
        ],

        en: [
          "P: killing an enemy triggers [[HEAL]] and [[MANA_RESTORE]].",
          "Q deals AoE [[AIRBORNE]], then [[SLOW]]s when it ends.\nWith both [[TIMING_CAST]] and [[ST_DELAYED]], it's a very slow skill.",
          "W applies AoE [[SILENCE]].\nSilence duration increases with rank.",
          "Using E then auto-attacking fires a bonus [[PROJECTILE]].\nThe [[PROJECTILE]] [[PIERCE]]s and applies [[SLOW]].",
          "R deals [[DMG_TRUE]] and is [[ST_CONDITIONAL]] with [[STACKING]].\nKilling a target with R adds a [[BUFF_STACK]], growing Cho'Gath and granting [[MAX_HP_UP]] and [[RANGE_UP]].\n\nStacks cap at 6 from minions and jungle monsters.\nStacks from champions and epic monsters are unlimited.",
        ]

      },

      note2: {
        ko: [       
        "E는 [[BUFF_STACK]] 3개를 초가스에게 부여하는것. \n 이때 [[BA]]를 때리면 버프스택을 소모해서 \n [[PROJECTILE]]를 추가로 발사하는 것. \n 이 [[PROJECTILE]]은 [[PIERCE]]에 [[SLOW]]."
      ],
        en: [
          "E grants Cho'Gath 3 [[BUFF_STACK]] stacks.\nConsuming stacks via auto-attacks fires bonus [[PROJECTILE]]s that [[PIERCE]] and apply [[SLOW]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 80,
    11: 70,
    16: 60,
  },

};

export default chogath;
