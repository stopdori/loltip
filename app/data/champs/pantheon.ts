import type { ChampData } from "../interactions/types";

const pantheon: ChampData = {
  id: "pantheon",
  skills: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q 짧게 / Q 길게", en: "Q Tap / Q Charged" }, tags: ["Q_FLASH", "CRIT", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W / W 강화", en: "W / W Empowered" }, tags: ["W_FLASH", "STUN", "WALL_HOP", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E / E 강화", en: "E / E Empowered" }, tags: ["INVULNERABLE", "BUFF_FORM", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"] }
    ] },
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["AR_PEN"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BLINK", "WALL_HOP", "BUFF_STACK", "X5", "SEPARATOR", "ST_CONDITIONAL", "SLOW"] },
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
    P: ["BUFF_INTERACT", "Q", "W", "E", "R"],
    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Tap" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "SEPARATOR", "ST_CONDITIONAL", "CRIT"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["DMG_PHYSICAL", "SKILL_CHARGED", "PROJECTILE", "PIERCE", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "SEPARATOR", "ST_CONDITIONAL", "CRIT"] },
    ] },

    W: { phases: [
      { label: { ko: "W / W 강화", en: "W / W Empowered" }, tags: ["DMG_PHYSICAL", "TARGETED", "DASH", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"] },
      { label: { ko: "W 강화평타", en: "W Improved BA" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "LOCKED", "ON_HIT", "BUFF_STACK", "X3"] },
    ] },

    E: { phases: [
      { label: { ko: "E / E 강화", en: "E / E Empowered" }, tags: ["BUFF_FORM", "DMG_PHYSICAL", "AOE", "DOT", "CANCELLABLE", "BUFF_STACK"] },
      { label: { ko: "E 방패타격", en: "E Slams" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "AR_PEN"] },
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "LOCKED"] },
      { label: { ko: "R 창", en: "R Spear" }, tags: ["DMG_PHYSICAL", "NON_PROJECTILE", "AOE", "SLOW"] },
      { label: { ko: "R 착지", en: "R Crashes Down" }, tags: ["DMG_PHYSICAL", "LOCKED", "MOBILITY", "BUFF_STACK", "X5"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 교전이 상당히 강력함. \n W의 [[STUN]]로 하나 점찍어 잡는게 정말 좋음.", 
          "R은 준 [[GLOBAL]] 스킬로 \n 사이드 도는 상대를 잘 잘라먹을 수 있음.",
          "한타에서 R로 진입해서 E의 [[INVULNERABLE]]으로 어그로 끌기.",
          "앞라인에서 짧은 Q로 살짝씩 견제만 하다가 \n 삐져나온 한명 W의 [[STUN]]로 끊어먹기."
        ], en: [
          "Quite strong in small skirmishes. \n W's [[STUN]] is great for picking off a single target.",
          "R is a near-[[GLOBAL]] ability, \n great for cutting off enemies rotating to the side.",
          "Engage with R in teamfights and use E's [[INVULNERABLE]] to draw aggro.",
          "Poke lightly with short Q from the frontline, \n then pick off anyone who overextends with W's [[STUN]].",
        ] },
      note1: {

        ko: [
          "P는 스킬, [[BA]] 공격 시 [[BUFF_STACK]]. \n 5개 일 때 스킬을 사용하면 [[STACK_CONSUME]]하여 [[EMPOWERED]] 스킬.",

          "Q는 짧게, 길게 [[SKILL_CHARGED]]할 때 효과가 다름. \n 짧은 Q는 [[NON_PROJECTILE]] [[AOE]] [[DMG_PHYSICAL]], [[BUFF_STACK]], Q [[CDR]]. \n 긴 Q는 [[PROJECTILE]]를 발사 [[DMG_PHYSICAL]], [[BUFF_STACK]]. \n 긴 Q는 두번째 대상부터 감소한 [[DMG_PHYSICAL]]. \n \n 체력이 20% 이하 대상에겐 2배 이상의 [[DMG_PHYSICAL]]. \n [[EMPOWERED]] Q는 [[DMG_PHYSICAL]] 추가.",

          "W는 대상에게 [[DASH]]. \n 대상의 최대 체력 비례 [[DMG_PHYSICAL]], [[BUFF_STACK]], [[STUN]]. \n \n [[EMPOWERED]] W는 [[BA]] 3대를 빠르게 공격 \n [[DMG_PHYSICAL]], [[BUFF_STACK]][[X3]]",

          "E는 시전 방향으로 방패. \n 방패방향의 피해 [[INVULNERABLE]]. \n [[BUFF_STACK]], 지속 [[DMG_PHYSICAL]], 마지막에 강한 [[DMG_PHYSICAL]]. \n \n E [[EMPOWERED]]는 4초 [[AR_MR_UP]], 짧고 강한 [[MS_UP]].",

          "R의 [[PASSIVE_BONUS]]는 [[AR_PEN]]. \n \n R은 판테온이 점프 준비 [[SKILL_CHANNEL]]. \n 점프하여 좁은 범위에 [[NON_PROJECTILE]] 창을 던져 [[DMG_PHYSICAL]], [[SLOW]]. \n 판테온이 강하하여 광역 [[AOE]] [[DMG_MAGIC]]. \n 범위 바깥쪽으로 갈수록 피해 감소. 최소 50% \n 강하할 때 P의 [[BUFF_STACK]] 즉시 최대 획득.",
        ],

        en: [
          "P grants a [[BUFF_STACK]] on ability or [[BA]] hits. \n At 5 stacks, casting a skill triggers [[STACK_CONSUME]] for an [[EMPOWERED]] ability.",

          "Q has different effects depending on whether it's tapped or [[SKILL_CHARGED]]. \n Short Q is [[NON_PROJECTILE]] [[AOE]] [[DMG_PHYSICAL]], grants [[BUFF_STACK]], and reduces Q's [[CDR]]. \n Long Q fires a [[PROJECTILE]] for [[DMG_PHYSICAL]], grants [[BUFF_STACK]]. \n Long Q deals reduced [[DMG_PHYSICAL]] from the second target onward. \n \n Deals over double [[DMG_PHYSICAL]] against targets below 20% HP. \n [[EMPOWERED]] Q deals bonus [[DMG_PHYSICAL]].",

          "W [[DASH]]es to the target. \n Deals [[DMG_PHYSICAL]] based on the target's max HP, grants [[BUFF_STACK]], and [[STUN]]s. \n \n [[EMPOWERED]] W quickly attacks with 3 [[BA]]s, \n dealing [[DMG_PHYSICAL]] and granting [[BUFF_STACK]][[X3]]",

          "E raises a shield in the cast direction. \n [[INVULNERABLE]] to damage from the shield's direction. \n Grants [[BUFF_STACK]], deals continuous [[DMG_PHYSICAL]], and a strong [[DMG_PHYSICAL]] at the end. \n \n [[EMPOWERED]] E grants 4 seconds of [[AR_MR_UP]] and a brief but strong [[MS_UP]].",

          "R's [[PASSIVE_BONUS]] is [[AR_PEN]]. \n \n R makes Pantheon [[SKILL_CHANNEL]] to prepare a jump. \n He leaps and throws a [[NON_PROJECTILE]] spear in a narrow area, dealing [[DMG_PHYSICAL]] and [[SLOW]]. \n Pantheon then crashes down for [[AOE]] [[DMG_MAGIC]]. \n Damage decreases toward the edge of the area, to a minimum of 50%. \n Instantly gains max [[BUFF_STACK]] of P upon landing.",
        ]

      },

      note2: {
        ko: [
        "E의 [[INVULNERABLE]]은 바라보는 방향만 적용. \n 단, 타워 데미지는 막을 수 없음.",
        "R로 점프해서 사라진 후 착지 전까지 [[INVULNERABLE]] 판정."
      ],
        en: [
          "E's [[INVULNERABLE]] only applies in the direction Pantheon is facing. \n However, it cannot block tower damage.",
          "Becomes [[INVULNERABLE]] after jumping with R until landing.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 180,
    11: 165,
    16: 150,
  },

};

export default pantheon;
