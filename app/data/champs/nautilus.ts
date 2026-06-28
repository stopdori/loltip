import type { ChampData } from "../interactions/types";

const nautilus: ChampData = {
  id: "nautilus",
  skills: {
    P: ["ROOT"],
    Q: ["ST_CONDITIONAL", "GRAB", "DASH", "CC_BUFFER"],
    W: ["SHIELD", "AA_RESET"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "ON_HIT", "ROOT"],

    Q: { phases: [
      { label: { ko: "투척단계", en: "Throw" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "GRAB", "CC_BUFFER"] },
      { label: { ko: "그렙단계", en: "Grab"  }, tags: ["DASH"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["SHIELD", "AA_RESET"] },
      { label: { ko: "W 온힛", en: "W On-Hit" }, tags: ["ON_HIT", "AOE", "DMG_MAGIC"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "SLOW"],

    R: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "NON_PROJECTILE", "ZONE", "HOMING", "AIRBORNE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "한타 이니시 담당. \n 정말 신중하게 Q, R을 사용해야 함. \n 적중하는 순간 대부분 한타 시작. \n 불리한 구도인지 유리한 구도인지 잘 생각해야 함.", 
          "R은 되도록 상대 핵심 딜러에 꽂아야 함."
        ], en: [
          "Responsible for teamfight initiation. \n Use Q and R very carefully. \n The moment they land, a fight almost always breaks out. \n Think hard about whether the situation is in your favor.",
          "Try to aim R at the enemy's key damage dealer.",
        ] },
      note1: {

        ko: [
          "P는 대상당 첫 [[BA]]에 추가 [[DMG_PHYSICAL]]와 [[ROOT]]. \n [[COOLDOWN]]이 대상 주변에 보임.",

          "Q는 닻 [[PROJECTILE]]를 날려 [[DMG_MAGIC]]. \n 대상은 [[GRAB]], 동시에 노틸러스가 [[DASH]]. \n 대략 1:3 지점에서 만남. \n \n 설명에는 [[STUN]]이 걸린다고 쓰여있지만 \n 실제로는 [[AIRBORNE]] 시간이 길게 유지. \n 지형지물에 맞히면 [[DASH]]. \n 이때 [[MANA_RESTORE]], [[CDR]] 50%.",

          "W는 최대 체력 비례 [[SHIELD]]. \n [[SHIELD]]가 있는 동안 [[ON_HIT]] [[DMG_MAGIC]]. \n [[DMG_MAGIC]]는 2틱 적용. \n [[ON_HIT]]은 대상 주변 [[AOE]]로 적용.",

          "E는 [[AOE]] 폭발하여 [[DMG_MAGIC]], [[SLOW]]. \n 여러번 맞을 수 있는 3겹의 폭발 피해. \n 폭발이 처음 적중하면 100% \n 두 번째 부터는 50%씩 [[DMG_MAGIC]] 추가.",

          "R은 [[TARGETED]] 스킬로 대상을 추격하는 충격파를 발사. \n 경로에 있는 적들을 [[DMG_MAGIC]], [[AIRBORNE]]. \n 대상에 도착하면 [[AOE]] [[DMG_MAGIC]], [[AIRBORNE]].",
        ],

        en: [
          "P applies bonus [[DMG_PHYSICAL]] and [[ROOT]] on the first [[BA]] per target. \n The [[COOLDOWN]] is visible as a ring around the target.",
          "Q throws an anchor [[PROJECTILE]] dealing [[DMG_MAGIC]]. \n The target is [[GRAB]]bed while Nautilus [[DASH]]es toward them. \n They meet at roughly a 1:3 point along the distance. \n \n The tooltip says [[STUN]], \n but in practice the [[AIRBORNE]] duration is extended. \n Hitting terrain causes [[DASH]]. \n This grants [[MANA_RESTORE]] and 50% [[CDR]].",
          "W grants a [[SHIELD]] based on max health. \n While the [[SHIELD]] is active, [[BA]] applies [[ON_HIT]] [[DMG_MAGIC]]. \n [[DMG_MAGIC]] applies in 2 ticks. \n [[ON_HIT]] damage applies as [[AOE]] around the target.",
          "E explodes in [[AOE]] dealing [[DMG_MAGIC]] and [[SLOW]]. \n Consists of 3 overlapping explosions that can each hit. \n The first explosion deals 100% damage. \n Each additional explosion deals 50% bonus [[DMG_MAGIC]].",
          "R is a [[TARGETED]] skill that fires a shockwave chasing the target. \n Enemies in its path take [[DMG_MAGIC]] and are [[AIRBORNE]]d. \n On reaching the target, deals [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]].",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨.",
        "P의 [[ROOT]] 시간은 레벨 비례.",
        "Q 스킬은 두 단계로 나뉨 투척/그렙 \n 투척단계에 노틸러스가 맞은 CC는 유효하지만 \n 그렙단계가 발동되어 앞으로 이동하는 것. \n 그렙단계에는 CC저항력 없음.",
        "R의 충격파가 적중하기 전에 \n 순간이동, 귀환처럼 아주 멀리 이동하면 충격파가 사라질 수 있음.",
        "R의 [[TIMING_CAST]] 시간에 상대가 [[UNTARGETABLE]], [[STEALTH]]을 사용하면 \n 시전이 취소됨. [[COOLDOWN]]은 날아가지 않음."
      ],
        en: [
          "[[Q_FLASH]] not possible.",
          "P's [[ROOT]] duration scales with level.",
          "Q has two phases: Throw and Grab. \n CC that hits Nautilus during the Throw phase is valid, \n but the Grab phase still triggers, moving him forward. \n There is no CC resistance during the Grab phase.",
          "If the target moves very far before R's shockwave arrives — such as via Teleport or Recall — the shockwave may disappear.",
          "If the target uses [[UNTARGETABLE]] or [[STEALTH]] during R's [[TIMING_CAST]], \n the cast is cancelled. The [[COOLDOWN]] is not lost.",
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

export default nautilus;
