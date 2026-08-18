import type { ChampData } from "../interactions/types"; 
const renata: ChampData = {
  id: "renata",
  skills: {
    P: ["MARK"],
    Q: ["ROOT", "SEPARATOR", "AIRBORNE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["W_FLASH", "MS_TO_ENEMY", "SEPARATOR", "ST_CONDITIONAL", "BURN"],
    E: ["SHIELD", "SLOW"],
    R: ["R_FLASH", "BERSERK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "표식 부여평타", en: "Mark Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT", "MARK"] },
      { label: { ko: "아군 평타", en: "Ally Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT", "MARK_CONSUME"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "STUN"] },
    ] },

    W: ["BUFF", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "MS_TO_ENEMY", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DURATION_RESET", "SEPARATOR", "ST_CONDITIONAL", "BURN"],

    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "SHIELD"] },
      { label: { ko: "E 적군", en: "E Enemy" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "DMG_MAGIC", "SLOW"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED", "BERSERK"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "Q로 상대 견제하면서 \n 아군에게 W, E 잘 써주기.",
          "R을 얼마나 잘 쓰냐에 따라 한타가 완전 뒤바뀜.",
        ], en: [
          "Poke the enemy with Q while landing W and E on allies well.",
          "How well you land R can completely swing a teamfight.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[MARK]]. \n 한 명의 대상에게만 적용. \n \n [[MARK]]이 생길 때 대상의 최대 체력 비례 [[DMG_MAGIC]]. \n [[MARK]] 대상을 아군이 [[BA]]로 공격하면 \n [[MARK_CONSUME]]하여 동일한 피해.",

          "Q1은 [[PROJECTILE]]를 발사하여 [[ROOT]], [[DMG_MAGIC]]. \n 적중 했다면 Q2 사용 가능. \n \n Q2는 대상을 [[AIRBORNE]] 시키고 지정한 방향으로 [[KNOCKBACK]]. \n 이때 대상과 충돌한 유닛들은 [[DMG_MAGIC]]. \n 챔피언이라면 [[STUN]] 추가. \n \n 즉, 지정 대상은 계속 [[ROOT]], 부딪힌 챔피언은 [[STUN]].",

          "W는 아군 챔피언에게 [[BUFF]]. \n [[BUFF]]는 [[AS_UP]], [[MS_TO_ENEMY]]. \n 5초에 걸쳐 효과 증가. \n [[BUFF]] 대상이 처치 관여 시 [[DURATION_RESET]]. \n \n [[BUFF]] 대상이 죽으면 \n 체력 100%로 되살리고 [[BURN]] 상태 돌입. \n 대상이 처치 관여 시 \n 최대 체력의 20%가 되고 [[BURN]] 종료. [[HEAL]]이 아님.",

          "E는 [[PROJECTILE]]를 발사. \n 적중한 아군은 [[SHIELD]]. \n 적중한 적군은 [[SLOW]], [[DMG_MAGIC]].",

          "R은 엄청 느린 광역 [[PROJECTILE]]를 발사. \n 적중한 적들은 [[AS_UP]], [[BERSERK]]에 빠짐.",
        ],

        en: [
          "P applies [[MARK]] on [[BA]]. \n Only affects one target at a time. \n \n Applying [[MARK]] deals [[DMG_MAGIC]] based on the target's max HP. \n If an ally hits the [[MARK]]ed target with a [[BA]], \n it [[MARK_CONSUME]]s for the same damage.",

          "Q1 fires a [[PROJECTILE]] that [[ROOT]]s and deals [[DMG_MAGIC]]. \n If it hits, Q2 becomes available. \n \n Q2 [[AIRBORNE]]s the target and [[KNOCKBACK]]s them in the chosen direction. \n Units that collide with the target take [[DMG_MAGIC]]. \n Champions hit also get [[STUN]]ned. \n \n In short, the marked target stays [[ROOT]]ed, and the champion it collides with gets [[STUN]]ned.",

          "W grants [[BUFF]] to an ally champion. \n The [[BUFF]] gives [[AS_UP]] and [[MS_TO_ENEMY]]. \n The effect scales up over 5 seconds. \n Getting a takedown while [[BUFF]]ed triggers [[DURATION_RESET]]. \n \n If the [[BUFF]]ed target dies, \n it revives at 100% HP and enters [[BURN]]. \n If the target gets a takedown, \n it settles at 20% max HP and [[BURN]] ends. Not a [[HEAL]].",

          "E fires a [[PROJECTILE]]. \n Allies hit gain [[SHIELD]]. \n Enemies hit take [[SLOW]] and [[DMG_MAGIC]].",

          "R fires an extremely slow, wide-area [[PROJECTILE]]. \n Enemies hit gain [[AS_UP]] and fall into [[BERSERK]].",
        ]

      },

      note2: {
        ko: [
        "Q1을 적중 시켰을 때 레나타가 [[STUN]], [[SILENCE]], [[AIRBORNE]] 등등 \n CC에 걸리면 Q2를 사용할 수 없음. \n CC가 끝나고도 Q1이 남아있다면 Q2 사용 가능.", "W는 [[HEAL]]이 아니라서 [[GW]] 영향을 받지 않음."
      ],
        en: [
          "If Renata gets [[STUN]]ned, [[SILENCE]]d, [[AIRBORNE]]ed, or hit by other CC \n after landing Q1, she can't use Q2. \n If Q1 is still active once the CC ends, Q2 becomes usable again.",
          "W is not a [[HEAL]], so it's unaffected by [[GW]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 150,
    11: 130,
    16: 110,
  },

};

export default renata;