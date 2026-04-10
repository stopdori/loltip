import type { ChampData } from "../interactions/types";

const gwen: ChampData = {
  id: "gwen",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "UNTARGETABLE", "BUFF_FORM"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT"],
    Q: ["PASSIVE_BONUS", "DMG_MAGIC", "DMG_TRUE", "AOE", "PROC"],
    W: ["BUFF_FORM", "ZONE", "SKILL_RECAST", "ST_CONDITIONAL", "UNTARGETABLE"],
    E: ["DMG_MAGIC", "ON_HIT", "DASH"],
    R: ["DMG_MAGIC", "PIERCE", "SKILL_RECAST"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "R로 [[SLOW]]를 걸고 \n E, W로 어그로 핑퐁 하면서 [[BA]]를 때려 \n Q스택을 쌓아 Q의 [[DMG_TRUE]], P의 데미지로 싸우는 느낌.",
        ],
        en: [
          "Use [[SLOW]] from R to stick to the target, \n weave in [[BA]]s while bouncing aggro with E and W, \n then stack Q to deal [[DMG_TRUE]] and P damage.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 최대체력 비례 [[DMG_MAGIC]]와 [[LIFESTEAL]].",

          "[[BA]]를 때리면 체력바 밑에 [[BUFF]]가 생김. (최대 4번) \n Q 사용 시 스택을 소모하여 반복. \n 이때 P효가 발동. \n 중앙에 맞히면 50% [[DMG_TRUE]]. ",

          "W는 [[AR_MR_UP]]. \n 범위 밖에서 [[UNTARGETABLE]]. \n 그웬이 범위를 벗어나거나 [[SKILL_RECAST]] 하면 W가 따라옴.",

          "E는 [[DASH]]하여 [[BA]] [[EMPOWERED]] [[BUFF]] \n [[DMG_MAGIC]] [[ON_HIT]], [[AS_UP]], [[RANGE_UP]].",

          "R은 [[DMG_MAGIC]] [[PIERCE]] [[PROJECTILE]] 한개 발사. \n [[SLOW]]를 걸고 P효과 적용. \n [[SKILL_RECAST]]하면 3발, 다시 [[SKILL_RECAST]] 하면 5발을 날림.",
        ],

        en: [
          "P: [[BA]]s deal [[DMG_MAGIC]] scaling with max HP and apply [[LIFESTEAL]].",

          "Each [[BA]] generates a [[BUFF]] stack below the health bar (up to 4). \n Using Q consumes stacks to repeat the attack. \n P's effect triggers on each hit. \n Hitting the center deals 50% bonus [[DMG_TRUE]].",

          "W grants [[AR_MR_UP]]. \n Gwen is [[UNTARGETABLE]] from outside the zone. \n If Gwen leaves or [[SKILL_RECAST]]s, the zone follows her.",

          "E [[DASH]]es forward and empowers the next [[BA]] with [[BUFF]]: \n [[DMG_MAGIC]] [[ON_HIT]], [[AS_UP]], [[RANGE_UP]].",

          "R fires one [[DMG_MAGIC]] [[PIERCE]] [[PROJECTILE]], applying [[SLOW]] and triggering P. \n [[SKILL_RECAST]] fires 3 needles; another [[SKILL_RECAST]] fires 5.",
        ]

      },

      note2: {
        ko: [
        "W는 범위 밖에서 날아오는 공격들을 맞지않음. \n 레넥톤 Q처럼 근접스킬도 범위 밖에서 맞지않음. \n 그웬에게 시전한 타겟팅 스킬도 날아오다 \n 그웬이 W를 키면 맞지 않음. \n 단, 타워데미지는 무시 불가."
      ],
        en: [
          "W blocks attacks originating from outside its zone. \n Even melee skills (like Renekton's Q) are blocked if cast from outside the zone. \n Targeted abilities already flying toward Gwen are also blocked \n if W is activated before they arrive. \n Tower damage cannot be blocked.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default gwen;
