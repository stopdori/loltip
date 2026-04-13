import type { ChampData } from "../interactions/types";

const kaisa: ChampData = {
  id: "kaisa",
  skills: {
    base : {
    P: [],
    Q: [],
    W: ["W_FLASH", "REVEALED"],
    E: ["AS_UP", "MS_UP", "GHOSTING"],
    R: ["R_FLASH", "SHIELD", "DASH", "WALL_HOP"],
  },

  alt: {
      
      P: [],
      Q: [],
      W: ["W_FLASH", "REVEALED", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      E: ["AS_UP", "MS_UP", "GHOSTING", "INVISIBILITY"],
      R: ["R_FLASH", "SHIELD", "DASH", "WALL_HOP"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: ["TRUE_SIGHT"],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: ["TRUE_SIGHT"],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["DMG_MAGIC", "ON_HIT", "DEBUFF_STACK", "PROC"],
      Q: ["DMG_PHYSICAL", "PROJECTILE", "HOMING"],
      W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "X2", "PROC", "TRUE_SIGHT"],
      E: ["TIMING_CAST", "LOCKED", "MOBILITY"],
      R: ["ST_CONDITIONAL", "DASH"],
    },
    alt: {
      P: ["DMG_MAGIC", "ON_HIT", "DEBUFF_STACK", "PROC"],
      Q: ["DMG_PHYSICAL", "PROJECTILE", "HOMING"],
      W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "X2", "PROC", "TRUE_SIGHT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      E: ["TIMING_CAST", "LOCKED", "MOBILITY", "INVISIBILITY"],
      R: ["ST_CONDITIONAL", "DASH"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "W로 포킹 하다가 \n 앞라인부터 패기 \n 상대 뒷라인 CC걸리면 \n 뒤로 날아가서 쓸어담기.",
        ], en: ["Poke with W,\n then engage the frontline.\n If the enemy backline gets CC'd,\n fly in from behind to clean up."] },
      note1: {

        ko: [
          "능력치에 따라 스킬이 [[EVOLVED]] 가능. \n Q는 공격력 100 \n W는 주문력 100 \n E는 공속 100 \n 아이템 판매로 능력치가 감소하면 [[EVOLVED]] 취소.",

          "상대에게 [[DEBUFF]]스택을 쌓아 4스택에 터뜨림. \n 잃은체력 비례 [[DMG_MAGIC]]. \n [[BA]]는 1스택과  [[ON_HIT]] [[DMG_MAGIC]] \n [[W]]는 2스택. \n [[BA]]에는 [[ON_HIT]] [[DMG_MAGIC]] 추가. \n 근처 아군이 이동불가 CC를 맞히면 1스택.",

          "Q는 미사일 다발 6개를 주변에 뿌림. \n 같은대상 적중시 데미지 25%. \n [[EVOLVED]] 시 12발.",

          "W는 [[SINGLE]] [[PROJECTILE]] \n [[TRUE_SIGHT]]와 [[DEBUFF]] 2스택. \n [[EVOLVED]] 시 챔피언 적중하면, [[CDR]].",

          "E는 시전중에 [[GHOSTING]]. \n [[EVOLVED]] 시 [[INVISIBILITY]] 추가. \n 시전 끝나면 [[AS_UP]], [[MS_UP]] [[BUFF]]. \n [[BA]] 시 0.5 [[CDR]].",

          "R은 [[DEBUFF]]스택이 있는 대상 근처로 [[DASH]]하고 [[SHIELD]].",
        ],

        en: [
          "Skills can be [[EVOLVED]] based on stats.\n Q — 100 bonus AD\n W — 100 AP\n E — 100% AS\n Selling items that drop below the threshold cancels the [[EVOLVED]].",

          "Builds [[DEBUFF]] stacks on enemies, detonating at 4 stacks.\n Deals [[DMG_MAGIC]] based on missing health.\n [[BA]] applies 1 stack and [[ON_HIT]] [[DMG_MAGIC]].\n [[W]] applies 2 stacks.\n Nearby allies applying immobilizing CC also grant 1 stack.",

          "Q fires 6 missiles around Kai'Sa.\n Each subsequent hit on the same target deals 25% damage.\n [[EVOLVED]]: fires 12 missiles.",

          "W is a [[SINGLE]] [[PROJECTILE]]\n that applies [[TRUE_SIGHT]] and 2 [[DEBUFF]] stacks.\n [[EVOLVED]]: hitting a champion grants [[CDR]].",

          "E applies [[GHOSTING]] while casting.\n [[EVOLVED]]: also grants [[INVISIBILITY]].\n After the cast, grants [[AS_UP]] and [[MS_UP]] [[BUFF]].\n Each [[BA]] reduces cooldown by 0.5s.",

          "R [[DASH]]es to a nearby target with [[DEBUFF]] stacks and grants a [[SHIELD]].",
        ]

      },

      note2: {
        ko: [
        "[[EVOLVED]] 캔슬 \n 귀환을 살짝 먼저 누르면서 \n [[EVOLVED]] 버튼을 클릭으로 누르기."
      ],
        en: ["To cancel an [[EVOLVED]]:\n Start recalling, then click the [[EVOLVED]] button."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 100,
    16: 70,
  },

};

export default kaisa;
