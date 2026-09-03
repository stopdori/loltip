import type { ChampData } from "../interactions/types";

const hecarim: ChampData = {
  id: "hecarim",
  skills: {
    P: ["AD_UP"],
    Q: [],
    W: ["HEAL", "AURA"],
    E: ["DASH", "WALL_HOP", "MS_UP", "KNOCKBACK", "GHOSTING"],
    R: ["DASH", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
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
    Q: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"],
    W: ["BUFF_FORM", "DMG_MAGIC", "AURA"],
    E: ["BUFF_FORM", "DASH", "DMG_PHYSICAL", "TIMING_AFTERCAST", "ON_HIT"],
    R: { phases: [
      { label: { ko: "R 충돌", en: "R Collision" }, tags: ["DMG_MAGIC", "DASH", "UNSTOPPABLE", "FEAR"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "상대 앞라인에 Q를 대충 긇어서 Q 스택을 쌓다가. \n R로 상대 딜러라인에 [[UNSTOPPABLE]] [[DASH]]으로 날아가면서 \n E를 키고 Q를 긁으면서 R로 광역 [[FEAR]]를 걸고 \n E의 [[EMPOWERED]][[BA]]의 [[KNOCKBACK]]으로 딜러 납치.",
        ],
        en: [
          "Graze Q on the enemy frontline to stack Q charges. \n Then use R's [[UNSTOPPABLE]] [[DASH]] to fly into the enemy backline, \n activate E and keep grazing Q while R spreads [[FEAR]] in an area, \n then kidnap a carry with E's [[EMPOWERED]] [[BA]] [[KNOCKBACK]].",
        ] },
      note1: {

        ko: [

          "P는 이속비례 [[AD_UP]].",

          "Q는 적중하면 [[BUFF]]스택. 최대 3개. \n [[BUFF]]는 Q [[CDR]]과 데미지 증가.",

          "W는 [[AR_MR_UP]]와 [[AURA]]로 [[DOT]] [[DMG_MAGIC]]. \n [[AURA]] 내에서 헤카림이 받은 피해와 아군이 받은 피해에 따라 \n 헤카림이 [[HEAL]].",

          "E는 [[MS_UP]]와 [[GHOSTING]]와 [[BUFF]]가 생기고 \n 이동할수록 [[BUFF]]가 100까지 쌓임. \n [[BUFF]]가 쌓일수록 추가 [[MS_UP]]와 데미지 증가. \n 다음 [[BA]]가 [[EMPOWERED]]되어 적을 [[KNOCKBACK]].",

          "R은 [[UNSTOPPABLE]] [[DASH]]. \n 헤카림을 뒤따르는 5개의 유령 [[PROJECTILE]] 발사. \n[[PROJECTILE]]는 [[PIERCE]] [[DMG_MAGIC]]. \n 헤카림 도착지점에 [[AOE]] [[DMG_MAGIC]] [[FEAR]]. \n 이동거리에 따라 [[FEAR]] 시간 증가. \n \n [[DASH]] 중에 Q, W, E를 사용할 수 있음.",
        ],

        en: [
          "P: Hecarim gains [[AD_UP]] based on bonus movement speed.",

          "Q: Hitting enemies grants a [[BUFF]] stack (up to 3). \n Stacks reduce Q [[CDR]] and increase damage.",

          "W: Grants [[AR_MR_UP]] and deals [[DOT]] [[DMG_MAGIC]] as an [[AURA]]. \n [[HEAL]]s Hecarim based on damage taken by him and nearby allies within the [[AURA]].",

          "E: Grants [[MS_UP]], [[GHOSTING]], and a [[BUFF]] that stacks up to 100 as Hecarim moves. \n More stacks = additional [[MS_UP]] and increased damage. \n Empowers the next [[BA]] to [[KNOCKBACK]] the target.",

          "R: [[UNSTOPPABLE]] [[DASH]]. \n Fires 5 ghost [[PROJECTILE]]s that follow Hecarim. \n The [[PROJECTILE]]s deal [[PIERCE]] [[DMG_MAGIC]]. \n Deals [[AOE]] [[DMG_MAGIC]] and applies [[FEAR]] at Hecarim's destination. \n [[FEAR]] duration scales with travel distance. \n \n Q, W, and E can be used during the [[DASH]].",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "P의 효과로 [[MS_UP]]는 [[AD_UP]] \n E를 쓰고 스택을 쌓을수록 [[AD_UP]]. \n 이때 평타를 바로 때리지 말고 \n Q를 먼저 쓰다가 평타를 늦게 때리는 게 좋음. \n Q는 AD계수가 있음.", "R은 AD계수가 없어서 E의 [[MS_UP]]로 P효과가 증가해도 \n 아무런 영향이 없기 때문에 \n ER을 쓰는 것 보다 R을 쓰고 도중에 E를 켜서 \n E 스택을 쌓고 도착해서 [[EMPOWERED]][[BA]]로 \n 상대를 [[KNOCKBACK]]으로 납치하는게 좋음."
      ],
        en: [
          "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] all not possible",
          "P grants [[AD_UP]] from bonus movement speed. \n Using E and stacking its buff further increases [[AD_UP]]. \n Avoid auto-attacking immediately — \n use Q first, then delay the [[BA]] for more value. \n Q has an AD ratio.",
          "R has no AD ratio, so P's [[AD_UP]] from E's [[MS_UP]] does not affect R damage. \n Instead of E then R, cast R first and activate E mid-dash \n to build E stacks before arriving, \n then kidnap the target with an [[EMPOWERED]] [[BA]] [[KNOCKBACK]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default hecarim;
