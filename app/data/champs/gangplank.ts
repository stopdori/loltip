import type { ChampData } from "../interactions/types";

const gangplank: ChampData = {
  id: "gangplank",
  skills: {
    P: ["MS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["Q_FLASH"],
    W: ["HEAL", "CC_CLEANSE"],
    E: ["E_FLASH", "SUMMON", "AR_PEN", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    R: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DOT_DMG_TRUE", "ON_HIT", "DOT", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE"],
    W: ["CC_CLEANSE"],

    E: { phases: [
      { label: { ko: "화약통", en: "Powder Keg" }, tags: ["TIMING_CAST", "ZONE", "SUMMON", "RECHARGE"] },
      { label: { ko: "화약통 폭발", en: "Keg Explosion" }, tags: ["DMG_PHYSICAL", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DOT", "LOCKED"] },
      { label: { ko: "R 강화 : 가차없는 포격", en: "Fire at Will" }, tags: ["ST_CONDITIONAL"] },
      { label: { ko: "R 강화 : 죽음의 여신", en: "Death's Daughter" }, tags: ["ST_CONDITIONAL", "ZONE", "DMG_TRUE"] },
      { label: { ko: "R 강화 : 사기진작", en: "Raise Morale" }, tags: ["ST_CONDITIONAL", "ZONE", "BUFF"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "R로 [[SLOW]] 걸고. 기습 화약통으로 딜러라인 박살내기.", "자리잡고 화약통으로 앞라인 같이 밀어내기. \n [[AR_PEN]]과 [[DMG_TRUE]]로 탱커를 나름 잘 팸."
        ], en: [
          "Apply [[SLOW]] with R, then burst the enemy carry with a surprise keg chain.",
          "Hold position and push the frontline back with kegs. \n [[AR_PEN]] and [[DMG_TRUE]] make tanks surprisingly easy to pressure.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[ON_HIT]]. \n 발동하면 [[MS_UP]], [[DOT_DMG_TRUE]]. \n E(화약통)을 [[BA]]나 Q로 터뜨리면 P의 쿨타임 초기화.",

          "Q는 [[SINGLE]]대상 [[DMG_PHYSICAL]] [[PROJECTILE]]. \n 대상을 처치하면 추가 골드와 은화를 얻음. \n 은화로 상점에서 R을 강화할 수 있음. \n E를 Q로 터뜨리면 Q로 처치한걸로 간주.",

          "W는 [[HEAL]]과 [[CC_CLEANSE]].",

          "E는 갱플과 상대가 공격할 수 있는 화약통 [[SUMMON]]. \n 화약통의 체력은 3칸. \n \n 화약통은 상대가 막타 치면 파괴. \n 갱플이 터뜨리면 화약통 폭발. \n 화약통의 범위가 겹쳐있다면 [[CHAIN]] 폭발. \n 폭발하면 [[AR_PEN]] [[AOE]] [[DMG_PHYSICAL]].",

          "R은 [[GLOBAL]] 어디든 깔수있는 [[ZONE]]. [[AOE]] [[DOT]]. \n 3번씩 4세트 떨어짐. \n 포탄이 떨어질 때 [[DMG_MAGIC]]와 [[SLOW]]. \n 포탄에 직접적으로 맞지 않아도 범위 전체 적용.", "강화는 3종류 \n 1. 가운데 범위 [[DMG_TRUE]], \n 2. 3번씩 2세트 추가. \n 3. [[ZONE]]에 아군 [[MS_UP]]."
          
        ],

        en: [
          "P's [[BA]] applies [[ON_HIT]], granting [[MS_UP]] and [[DOT_DMG_TRUE]]. \n Detonating a keg with [[BA]] or Q resets P's cooldown.",
          "Q is a [[SINGLE]]-target [[DMG_PHYSICAL]] [[PROJECTILE]]. \n Killing a target grants bonus gold and silver serpents. \n Silver serpents can be used in the shop to upgrade R. \n Killing with a Q-triggered keg counts as a Q kill.",
          "W provides [[HEAL]] and [[CC_CLEANSE]].",
          "E summons a powder keg that both Gangplank and enemies can attack. \n The keg has 3 HP. \n \n Enemies destroying it defuse it. \n Gangplank detonating it causes an explosion. \n If keg ranges overlap, they [[CHAIN]] explode. \n Explosions deal [[AR_PEN]] [[AOE]] [[DMG_PHYSICAL]].",
          "R places a [[GLOBAL]] [[ZONE]] anywhere on the map with [[AOE]] [[DOT]]. \n Drops in 3 sets of 4 cannonballs. \n Each cannonball deals [[DMG_MAGIC]] and [[SLOW]] on impact. \n Effects apply to the entire zone, not just direct hits.",
          "3 upgrade types: \n 1. Death's Daughter: adds a center [[DMG_TRUE]] cannon on first volley. \n 2. Fire at Will: adds 2 extra sets of 3 cannonballs. \n 3. Raise Morale: grants ally [[MS_UP]] within the [[ZONE]].",
        ]

      },

      note2: {
        ko: [ 
        "E(화약통)는 체력바 밑에 사용할 수 있는 화약통 갯수 표시. \n 시간이 지날수록 체력이 1칸까지 감소. \n 적이 범위에 겹쳐있어도 데미지는 한 번만 받음.", 
        "R은 간격이 좀 있는 지속[[SLOW]].",
        "R의 [[EMPOWERED]]는 3종류. 개당 500 은화 \n 죽음의 여신: \n 처음 포격시 중앙에 [[AOE]] [[DMG_TRUE]] 포탄 하나 추가. \n 가차없는 포격: \n 3번씩 2세트 추가 포격. 뒷부분 2세트 사이에 추가. \n 사기진작: \n 범위 안의 아군 [[MS_UP]]. 벗어나도 2초간 지속."
      ],
        en: ["Powder keg count is shown below the mana bar. \n Keg HP decreases to 1 over time. \n Overlapping enemies only take damage once.", "R applies persistent [[SLOW]] with brief intervals between pulses.", "R has 3 [[EMPOWERED]] upgrades — 500 silver serpents each: \n Death's Daughter: adds a center [[AOE]] [[DMG_TRUE]] cannonball on the first volley. \n Fire at Will: adds 2 extra sets of 3 cannonballs, inserted after the last 2 sets. \n Raise Morale: grants ally [[MS_UP]] within the zone, persisting for 2 seconds after leaving."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default gangplank;
