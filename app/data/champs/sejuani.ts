import type { ChampData } from "../interactions/types";
 

 
const sejuani: ChampData = {
 
  id: "sejuani",
 
  skills: {
 
    P: ["AR_MR_UP", "SLOW_IMMUNE"],
 
    Q: ["Q_FLASH", "AIRBORNE", "SEPARATOR", "DASH", "WALL_HOP"],
 
    W: ["W_FLASH", "SLOW", "SEPARATOR", "DEBUFF_STACK", "X2"],
 
    E: ["E_FLASH", "STUN", "AA_RESET"],
 
    R: { phases: [
      { label: { ko: "R 1/4 이내", en: "R Within 1/4 Distance" }, tags: ["R_FLASH", "STUN", "REVEALED"] },
      { label: { ko: "R 1/4 이후", en: "R Beyond 1/4 Distance" }, tags: ["R_FLASH", "STUN", "REVEALED", "SEPARATOR", "SLOW", "ZONE"] },
    ] },
  },
 

 
  vision: {
 
    P: [],
 
    Q: ["HIT_INDICATOR"],
 
    W: ["HIT_SOUND"],
 
    E: ["POSITION_REVEAL"],
 
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["VISION"] },
      { label: { ko: "R 장판", en: "R Zone" }, tags: ["VISION"] },
    ] },
 
  },
 

 
  gimmick: {
 
    P: ["ST_CONDITIONAL", "AR_MR_UP", "SLOW_IMMUNE"],
 
    Q: ["DMG_MAGIC", "PIERCE_MINION", "DASH", "AIRBORNE"],
 
    W: { phases: [
      { label: { ko: "W 1타 부채꼴", en: "W Hit 1 (Cone)" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SEPARATOR", "DEBUFF_STACK"] },
      { label: { ko: "W 2타 직선", en: "W Hit 2 (Line)" }, tags: ["DMG_PHYSICAL", "ST_DELAYED", "AOE", "SEPARATOR", "DEBUFF_STACK"] },
    ] },
 
    E: ["STACK_CONSUME", "DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "HOMING", "STUN"],
 
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE", "STUN"] },
      { label: { ko: "R 장판", en: "R Zone" }, tags: ["ST_CONDITIONAL", "ZONE", "SLOW"] },
      { label: { ko: "R 장판 폭발", en: "R Zone Explosion" }, tags: ["ST_DELAYED", "DMG_MAGIC", "ZONE", "SLOW"] },
    ] },
 
  },
 

 
  notes: {
    skill: {
      note3: {
        ko: [
          "Q로 [[DASH]] 하면서 R로 기습 이니시가 강력함",
          "W로 대치하다가 R로 뒷라인 잘 맞추기",
        ], en: [
          "[[DASH]]ing in with Q then following up with R for a surprise engage is strong",
          "Trade with W, then land R on their backline",
        ] },
      note1: {

        ko: [
          "P는 챔피언, 대형 몬스터에게 \n 10초 정도 피해를 입지 않으면 [[SLOW_IMMUNE]], [[AR_MR_UP]] [[BUFF]]. \n [[BUFF]]가 생기고 피해를 받아도 3초간 유지. \n \n E, R로 [[STUN]]당한 적을 세주아니가 처음 [[BA]] 공격 시 \n 대상의 최대 체력 비례 [[DMG_MAGIC]]. \n \n",

          "Q는 [[DASH]]하여 [[AOE]] [[DMG_MAGIC]], [[AIRBORNE]]. \n 챔피언과 충돌 시 [[DASH]] 중지. \n \n",

          "W는 전방 부채꼴 [[AOE]] [[DMG_PHYSICAL]]. \n 미니언, 정글 몬스터는 [[KNOCKBACK]]. \n \n 연속적으로 전방 직선 [[AOE]] [[DMG_PHYSICAL]]. [[SLOW]]. \n 두 번의 공격 모두 E의 [[DEBUFF_STACK]] 부여. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n ''아군 근접 챔피언'' 이 [[BA]]를 공격하면 [[DEBUFF_STACK]]. \n 4회 쌓인 대상에게 E스킬 사용 가능. \n \n E는 대상에게 [[HOMING]] [[PROJECTILE]]를 발사하여 [[DMG_MAGIC]], [[STUN]]. \n 단, E에 맞은 대상은 8초간 [[DEBUFF_STACK]]이 쌓이지 않음. \n \n",

          "R은 [[PROJECTILE]]를 발사. \n 날아간 거리에 따라 효과가 다름 \n \n 1/4 보다 가까운 거리 \n 적중한 대상 [[DMG_MAGIC]], [[REVEALED]], [[STUN]]. \n \n 1/4 보다 먼 거리 \n 적중한 대상은 강한 [[DMG_MAGIC]]와 [[REVEALED]], [[STUN]] 시간 1.5배 \n 추가로 넓은 [[AOE]] [[ZONE]] 생성. \n 장판은 지속 [[SLOW]]. \n 잠시 후 [[ZONE]]이 폭발하여 동일한 [[DMG_MAGIC]]와 한 번 더 [[SLOW]].",
        ],

        en: [
          "P grants [[SLOW_IMMUNE]] and [[AR_MR_UP]] [[BUFF]] if Sejuani takes no damage \n from champions or large monsters for about 10s. \n Once gained, the [[BUFF]] persists for 3s even after taking damage. \n \n When Sejuani lands her first [[BA]] on a target [[STUN]]ned by E or R, \n deals [[DMG_MAGIC]] based on the target's max health. \n \n",

          "Q [[DASH]]es dealing [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]]. \n Colliding with a champion stops the [[DASH]]. \n \n",

          "W deals a frontal cone [[AOE]] [[DMG_PHYSICAL]]. \n [[KNOCKBACK]]s minions and jungle monsters. \n \n Then a frontal line [[AOE]] [[DMG_PHYSICAL]] and [[SLOW]]. \n Both hits apply E's [[DEBUFF_STACK]]. \n \n",

          "E's [[PASSIVE_BONUS]]: \n when an ''allied melee champion'' [[BA]] attacks a target, it applies [[DEBUFF_STACK]]. \n E can be cast on a target with 4 stacks. \n \n E fires a [[HOMING]] [[PROJECTILE]] at the target, dealing [[DMG_MAGIC]] and [[STUN]]. \n However, a target hit by E cannot gain [[DEBUFF_STACK]] for 8s. \n \n",

          "R fires a [[PROJECTILE]]. \n Its effect differs based on the distance traveled \n \n Within 1/4 of the range \n hits the target with [[DMG_MAGIC]], [[REVEALED]], [[STUN]]. \n \n Beyond 1/4 of the range \n hits the target with stronger [[DMG_MAGIC]] and [[REVEALED]], 1.5x [[STUN]] duration, \n and additionally creates a wide [[AOE]] [[ZONE]]. \n The zone applies persistent [[SLOW]]. \n After a short delay the [[ZONE]] explodes, dealing the same [[DMG_MAGIC]] and applying [[SLOW]] once more.",
        ]

      },

      note2: {

        ko: [
        "Q는 [[PIERCE_MINION]] [[DASH]]이고, \n 챔피언 적중은 한 대상만 가능.",
        "E는 [[PROJECTILE]]가 적중할 때 대상이 약간 뒤로 [[KNOCKBACK]] 되는데 \n [[AIRBORNE]] 효과가 아니라 야스오 R을 사용할 수 없음.",
        "R의 [[DMG_MAGIC]]는 한 번만 입을 수 있음."

      ],

        en: [
        "Q is a [[PIERCE_MINION]] [[DASH]], \n but can only hit one champion.",
        "When E's [[PROJECTILE]] hits, the target is slightly [[KNOCKBACK]]ed, \n but since it's not an [[AIRBORNE]] effect, Yasuo cannot use his R on it.",
        "R's [[DMG_MAGIC]] can only be taken once."
      ]

        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 120,
 
    11: 105,
 
    16: 90,
 
  },
 

 
};
 

 
export default sejuani;
 
