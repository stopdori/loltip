import type { ChampData } from "../interactions/types";

const kled: ChampData = {
  id: "kled",
  skills: {
    base : {
    P: ["ST_CONDITIONAL", "TRANSFORM", "UNTARGETABLE", "TOWER_DODGE"],
    Q: ["Q_FLASH", "TETHER", "TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "GRAB", "SLOW"],
    W: ["AS_UP"],
    E: ["MS_UP", "DASH", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"],
    R: ["SHIELD", "KNOCKBACK", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],
  },
  
  alt: {
      // 🔨 변신폼 (근접)
      P: ["ST_CONDITIONAL", "TRANSFORM", "MS_UP"],
      Q: ["Q_FLASH"],      // 변신 Q는 Q플 가능
      W: ["AS_UP"],
      E: [],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["REVEALED", "POSITION_REVEAL"],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["HIT_EFFECT"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["ST_CONDITIONAL", "TRANSFORM", "UNTARGETABLE", "TOWER_DODGE"],
      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "TETHER"] },
      { label: { ko: "Q 사슬", en: "Q Tether" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "GRAB", "SLOW"] },
    ] },
      W: ["DMG_PHYSICAL", "ON_HIT"],
      E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["TARGETED", "AOE", "DASH", "MARK", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_CONDITIONAL", "TARGETED", "HOMING", "SINGLE", "DASH"] },
    ] },

      R: ["SKILL_CHANNEL", "MOBILITY", "LOCKED", "HOMING", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"],
    },

    alt: {
      P: [],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "RECHARGE"],
      W: ["DMG_PHYSICAL", "ON_HIT"],
      E: [],
      R: [],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "클레드 고수분들 제보 부탁드립니다.",
        ], en: [
          "Kled experts, please report any corrections.",
        ] },
      note1: {

        ko: [
          "P는 조건부로 승마폼과 낙마폼 [[TRANSFORM]]. \n 스칼 체력이 0이 되면 낙마. \n 낙마 할 때 [[UNTARGETABLE]], [[TOWER_DODGE]]. \n 낙마 했을 때 용기를 100 채우면 다시 승마. \n 승마하면 쿨타임 30초. \n 다시 낙마하면 쿨타임 동안 용기가 차지 않음. \n \n 용기는 \n 챔피언 [[BA]] 15. 에픽 몬스터 [[BA]] 5. \n 챔피언 낙마 Q 25, 에픽 낙마 Q 12.5 \n 미니언 처치 5.", 

          "승마폼 \n Q의 [[TETHER]]이 유지되어야 [[GRAB]], [[SLOW]] 유효. \n \n W는 [[BA]]를 때리면 W가 활성화. \n [[BUFF_STACK]] 3스택과 [[AS_UP]] [[BUFF]]. \n 마지막 스택을 소모할때 최대체력 비례 [[DMG_PHYSICAL]]. \n 쿨타임일 때 [[BA]] 0.5초 챔피언 대상은 1.5초 [[CDR]] \n \n E는 [[DASH]]하고 경로 [[DMG_PHYSICAL]]와 [[MS_UP]] [[BUFF]]. \n 처음 적중한 챔피언 또는 대형 몬스터에게 [[MARK]]. \n [[MARK]]이 생기면 E [[SKILL_RECAST]] 가능. \n [[SKILL_RECAST]] 하면 [[MARK]] 대상에게 [[DASH]]. \n \n R은 설명에는 [[UNSTOPPABLE]]가 없음. \n [[SKILL_CHANNEL]] 중 클레드 체력바 위에 [[UNSTOPPABLE]]. \n 이동거리에 따라 [[SHIELD]]. \n 들이 받으면 최대체력 비례 [[DMG_MAGIC]]와 [[KNOCKBACK]]. \n 상대 챔피언의 시야가 보여야 들이받음. ",

          "낙마폼 \n 적 챔피언에게 이동할 때 [[MS_UP]]. \n 주는 데미지 감소. \n 주변 적 숫자에 비례 [[AR_MR_UP]] 증가. \n \n Q스킬은 샷건으로 대체. \n \n W는 동일. \n \n E, R 스킬은 비활성화.",

        ],

        en: [
          "P conditionally [[TRANSFORM]]s between Mounted and Dismounted forms. \n Dismounts when Skaarl's HP reaches 0. \n While dismounted, [[UNTARGETABLE]] and [[TOWER_DODGE]]. \n Filling Courage to 100 while dismounted remounts. \n Remounting has a 30s cooldown. \n Dismounting again during the cooldown prevents Courage from filling. \n \n Courage: \n Champion [[BA]] 15. Epic monster [[BA]] 5. \n Champion dismounted Q 25, epic dismounted Q 12.5 \n Minion kill 5.",

          "Mounted \n Q's [[TETHER]] must remain connected for [[GRAB]] and [[SLOW]] to apply. \n \n W activates on [[BA]] hit. \n Grants [[BUFF_STACK]] up to 3 stacks and [[AS_UP]] [[BUFF]]. \n Consuming the final stack deals max-HP-scaling [[DMG_PHYSICAL]]. \n On cooldown, [[BA]] reduces it by 0.5s (1.5s vs champions) [[CDR]] \n \n E [[DASH]]es and deals [[DMG_PHYSICAL]] along the path plus [[MS_UP]] [[BUFF]]. \n Applies [[MARK]] to the first champion or large monster hit. \n While [[MARK]] is active, E can be [[SKILL_RECAST]]. \n [[SKILL_RECAST]] [[DASH]]es to the marked target. \n \n R's tooltip doesn't mention [[UNSTOPPABLE]]. \n During [[SKILL_CHANNEL]], [[UNSTOPPABLE]] appears above Kled's health bar. \n Grants [[SHIELD]] based on distance traveled. \n On collision, deals max-HP-scaling [[DMG_MAGIC]] and [[KNOCKBACK]]. \n Requires vision of the enemy champion to collide. ",

          "Dismounted \n [[MS_UP]] when moving toward enemy champions. \n Deals reduced damage. \n [[AR_MR_UP]] increases based on the number of nearby enemies. \n \n Q is replaced by a shotgun-style skill. \n \n W is unchanged. \n \n E and R are disabled.",
        ]

      },

      note2: {
        ko: [
         "승마폼일 때 [[HEAL]]은 스칼의 체력부터.", "[[MAX_HP_UP]]는 스칼에 적용.", "승마할 때 [[GW]] 영향 안 받음.", "낙마폼 주변의 범위는 미드 일자 수풀 크기 정도."
      ],
        en: ["While mounted, [[HEAL]] restores Skaarl's HP first.", "[[MAX_HP_UP]] applies to Skaarl.", "Not affected by [[GW]] while mounted.", "Dismounted form's surrounding range is about the size of mid lane's straight bush."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 125,
    16: 110,
  },

};

export default kled;
