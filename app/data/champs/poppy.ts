import type { ChampData } from "../interactions/types";

const poppy: ChampData = {
  id: "poppy",
  skills: {
    P: ["ON_HIT", "DROP", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
    Q: ["Q_FLASH", "SLOW", "SEPARATOR", "ZONE", "SLOW"],
    W: ["MS_UP", "SEPARATOR", "AURA", "ANTI_DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "SLOW", "GROUNDED"],
    E: ["E_FLASH", "KNOCKBACK", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: { phases: [
      { label: { ko: "R 길게", en: "R Charged" }, tags: ["UNTARGETABLE", "KNOCKBACK"] },
      { label: { ko: "R 짧게", en: "R Tap" }, tags: ["R_FLASH", "AIRBORNE"] },
    ] },

  },

  vision: {
    P: ["POSITION_REVEAL"],
    Q: ["HIT_SOUND"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["REVEALED"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 방패투척", en: "P Projectile" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "DROP"] },
      { label: { ko: "P 방패", en: "P Shield" }, tags: ["ST_CONDITIONAL", "SHIELD"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q ", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "ZONE", "SLOW"] },
      { label: { ko: "Q 폭발", en: "Q Burst" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ZONE", "SLOW"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AR_MR_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["MS_UP", "SEPARATOR", "AURA", "ANTI_DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "AIRBORNE", "SLOW", "GROUNDED"] },
    ] },

    E: ["DMG_PHYSICAL", "TARGETED", "DASH", "KNOCKBACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "STUN"],

    R: { phases: [
      { label: { ko: "R 길게", en: "R Charged" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "SKILL_CHARGED", "PROJECTILE", "PIERCE", "SEPARATOR_NEWLINE", "SEPARATOR", "CANCELLABLE", "SEPARATOR", "UNTARGETABLE", "KNOCKBACK"] },
      { label: { ko: "R 짧게", en: "R Tap" }
      , tags: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "잘하는법 모르겠음 \n 고수분들의 제보 부탁드립니다.",
        ], en: [
          "Not sure how to play this well. \n Tips from experienced players are welcome.",
        ] },
      note1: {

        ko: [
          "P는 레벨 비례 [[COOLDOWN]]. \n 준비되면 [[BA]] [[RANGE_UP]] 350. \n [[PROJECTILE]] 발사 [[DMG_MAGIC]], [[DROP]]. \n 주우면 최대 체력 비례 20% [[SHIELD]] 획득. \n \n 대상이 처치되면 [[DROP]]이 생기지 않고 즉시 효과 발동. \n \n",

          "Q는 대상의 최대 체력 비례 [[AOE]] [[DMG_PHYSICAL]]와 [[SLOW]] [[ZONE]] 생성. \n [[ZONE]]은 잠시 뒤 폭발하여 한번 더 같은 피해. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[AR_MR_UP]] %로 증가. \n 체력 40% 이하일 때 효과 2배. \n \n W는 [[MS_UP]]와 [[ANTI_DASH]] [[AURA]] 생성. \n [[DASH]]이 막힌 대상은 [[GROUNDED]], [[SLOW]], [[DMG_MAGIC]]. \n \n 디테일한 판정은 챔피언별로 상호작용 박스에 정리. \n \n",

          "E는 [[TARGETED]] 대상에게 [[DASH]]하여 [[DMG_PHYSICAL]], [[KNOCKBACK]]. \n [[KNOCKBACK]]이 벽에 닿으면 [[STUN]], [[DMG_PHYSICAL]] 추가. \n \n",

          "R은 길게, 짧게 누르는 효과가 다름. \n \n R을 [[SKILL_CHARGED]]중일 때 뽀삐의 [[MS_DOWN]]. \n R을 발사하면 [[PIERCE]] [[PROJECTILE]]를 날려 맞은 대상은 [[DMG_PHYSICAL]]. \n 동시에 [[UNTARGETABLE]] [[AIRBORNE]] 상태로 만들고 \n 상대 넥서스 방향으로 날려버림. \n 날아가는 거리는 [[SKILL_CHARGED]] 시간 비례. \n \n [[SKILL_CHARGED]]을 오래도록 발사하지 않으면 취소. \n 30초의 [[COOLDOWN]]. \n \n 짧은 R은 [[AOE]] [[AIRBORNE]]과 절반의 [[DMG_PHYSICAL]].",
        ],

        en: [
          "P has a level-based [[COOLDOWN]]. \n Once ready, the next [[BA]] gains [[RANGE_UP]] of 350. \n Fires a [[PROJECTILE]] for [[DMG_MAGIC]] and creates a [[DROP]]. \n Picking it up grants a [[SHIELD]] worth 20% max HP. \n \n If the target is killed, no [[DROP]] is created and the effect triggers instantly. \n \n",

          "Q deals [[AOE]] [[DMG_PHYSICAL]] based on the target's max HP and creates a [[SLOW]] [[ZONE]]. \n The [[ZONE]] explodes shortly after for the same damage again. \n \n",

          "W's [[PASSIVE_BONUS]] increases [[AR_MR_UP]] by a %. \n Doubled when below 40% HP. \n \n W creates an [[MS_UP]] and [[ANTI_DASH]] [[AURA]]. \n Targets blocked from [[DASH]]ing are [[GROUNDED]], [[SLOW]]ed, and take [[DMG_MAGIC]]. \n \n Detailed rulings are covered per champion in the interaction box. \n \n",

          "E [[DASH]]es to a [[TARGETED]] enemy for [[DMG_PHYSICAL]] and [[KNOCKBACK]]. \n If the [[KNOCKBACK]] hits terrain, it adds [[STUN]] and bonus [[DMG_PHYSICAL]]. \n \n",

          "R has different effects when charged or tapped. \n \n While [[SKILL_CHARGED]], Poppy suffers [[MS_DOWN]]. \n Releasing it fires a [[PIERCE]] [[PROJECTILE]], dealing [[DMG_PHYSICAL]] to whoever it hits. \n It also makes them [[UNTARGETABLE]] and [[AIRBORNE]], \n knocking them toward the enemy nexus. \n Travel distance scales with [[SKILL_CHARGED]] duration. \n \n Cancels if held too long without releasing. \n Has a 30 second [[COOLDOWN]]. \n \n The tapped R deals [[AOE]] [[AIRBORNE]] and half the [[DMG_PHYSICAL]].",
        ]

      },

      note2: {
        ko: [
        "[[E_FLASH]]로 [[INSEC_KICK]] 불가.", 
        "Q는 지속[[SLOW]].", 
        "[[R_FLASH]]은 짧은 R만 가능.", 
        "W의 [[ANTI_DASH]]에 저지 당할 때 \n 몸이 이미 겹쳐져 있다면 각종 효과는 발동한 것으로 판정. \n \n 예) 레넥톤이 뽀삐에 붙어서 E를 쓰면 스킬이 유효하고 E [[CDR_RESET]]. \n 그리고 나서 뽀삐 W의 [[ANTI_DASH]]에 막혀 [[AIRBORNE]]과 [[GROUNDED]]. \n 이때 레넥톤이 [[CC_CLEANSE]]를 사용하면 레넥톤 E 사용 가능.", 
        "뽀삐 E는 [[DASH]] 중에서도 판정이 최고인 편."
      ],
        en: [
          "[[E_FLASH]] cannot [[INSEC_KICK]].",
          "Q applies a continuous [[SLOW]].",
          "[[R_FLASH]] only works with the tapped R.",
          "When blocked by W's [[ANTI_DASH]], \n if the bodies are already overlapping, various effects are ruled as having triggered. \n \n Ex) If Renekton dashes into Poppy with E, the skill activates and E gets [[CDR_RESET]]. \n Then he's blocked by Poppy W's [[ANTI_DASH]], applying [[AIRBORNE]] and [[GROUNDED]]. \n If Renekton then uses [[CC_CLEANSE]], his E becomes usable again.",
          "Poppy's E has one of the highest interrupt priorities among [[DASH]]es.",
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

export default poppy;
