import type { ChampData } from "../interactions/types";

const quinn: ChampData = {
  id: "quinn",
  skills: {
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["ST_CONDITIONAL", "MARK"] },
      { label: { ko: "표식", en: "Mark" }, tags: ["REVEALED", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME"] },
    ] },

    Q: ["ST_CONDITIONAL", "NEAR_SIGHT", "MARK"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ST_CONDITIONAL", "AS_UP", "MS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["VISION"] },
    ] },
    
    E: ["E_FLASH", "DASH", "WALL_HOP", "KNOCKBACK", "SLOW"],

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["TRANSFORM"] },
      { label: { ko: "R2", en: "R2" }, tags: ["ST_CONDITIONAL", "MARK"] },
    ] },
  },

  vision: {
    P: ["REVEALED"],
    Q: ["REVEALED"],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: [] },
      { label: { ko: "R2", en: "R2" }, tags: ["POSITION_REVEAL"] },
    ] },
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["ST_CONDITIONAL", "MARK"] },
      { label: { ko: "표식", en: "Mark" }, tags: ["REVEALED", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "DMG_PHYSICAL"] },
    ] },

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MARK", "NEAR_SIGHT"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ST_CONDITIONAL", "MARK_CONSUME", "AS_UP", "MS_UP"] },
      { label: { ko: "W", en: "W" }, tags: ["VISION", "AOE"] },
    ] },

    E: ["DMG_PHYSICAL", "TARGETED", "DASH", "SEPARATOR", "MARK", "KNOCKBACK", "SLOW"],

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["TRANSFORM", "SKILL_CHANNEL", "TIMING_CAST", "LOCKED", "SEPARATOR", "SKILL_RECAST"] },
      { label: { ko: "R2", en: "R2" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE", "MARK"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 교전이 정말 강함.",
          "고수분들 제보 부탁드림.",
        ], en: [
          "Really strong in small skirmishes.",
          "Tips from experienced players are welcome.",
        ] },
      note1: {

        ko: [
          "P는 주기적으로 주변 적에게 4초간 [[MARK]]. \n [[MARK]]은 대상을 [[REVEALED]]. \n [[ON_HIT]] 시 [[MARK_CONSUME]]하여 [[DMG_PHYSICAL]]. \n [[MARK]]이 사라지거나 적중하면 [[COOLDOWN]] 상태가 됨.",

          "Q는 [[PROJECTILE]]를 발사. \n 처음 적중한 대상 [[MARK]], [[NEAR_SIGHT]]. \n 이후 [[AOE]] [[DMG_PHYSICAL]]. \n \n 처음 적중한 대상이 챔피언이 아니라면 무장해제. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[MARK_CONSUME]] 시 [[AS_UP]], [[MS_UP]]. \n \n W는 2초간 넓은 [[AOE]] 공중 시야. \n 반경은 미드 1차, 2차 타워 거리만큼. \n \n",

          "E는 대상에게 [[DASH]]하고 반대 방향으로 [[DASH]]. \n 동시에 [[DMG_PHYSICAL]], [[KNOCKBACK]], [[SLOW]], [[MARK]].",

          "R은 [[SKILL_CHANNEL]] [[TRANSFORM]] 하여 [[MS_UP]]. \n 피해를 입으면 [[MS_UP]] 효과 3초간 사라짐. \n (미니언 제외) \n [[IMMOBILIZING]], [[SILENCE]]에 걸리면 R [[TRANSFORM]] 종료. (R2 효과 없음) \n \n R을 [[SKILL_RECAST]] 하거나 [[BA]], Q, E를 사용하면 \n [[TRANSFORM]] 종료하고 [[AOE]] [[DMG_PHYSICAL]].",
        ],

        en: [
          "P periodically applies a 4 second [[MARK]] to nearby enemies. \n [[MARK]] makes the target [[REVEALED]]. \n [[ON_HIT]] triggers [[MARK_CONSUME]] for [[DMG_PHYSICAL]]. \n Once the [[MARK]] expires or hits, it goes on [[COOLDOWN]].",

          "Q fires a [[PROJECTILE]]. \n The first target hit gets [[MARK]] and [[NEAR_SIGHT]]. \n Then deals [[AOE]] [[DMG_PHYSICAL]]. \n \n If the first target hit isn't a champion, it disarms them. \n \n",

          "W's [[PASSIVE_BONUS]] grants [[AS_UP]] and [[MS_UP]] on [[MARK_CONSUME]]. \n \n W grants a wide [[AOE]] aerial vision for 2 seconds. \n The radius is about the distance between mid's 1st and 2nd tower. \n \n",

          "E [[DASH]]es to the target then [[DASH]]es back in the opposite direction. \n Simultaneously deals [[DMG_PHYSICAL]], [[KNOCKBACK]], [[SLOW]], and [[MARK]].",

          "R [[SKILL_CHANNEL]]s into a [[TRANSFORM]] granting [[MS_UP]]. \n Taking damage removes the [[MS_UP]] effect for 3 seconds. \n (excluding minions) \n Getting hit by [[IMMOBILIZING]] or [[SILENCE]] ends R's [[TRANSFORM]]. (no R2 effect) \n \n [[SKILL_RECAST]]ing R or using [[BA]], Q, or E \n ends the [[TRANSFORM]] and deals [[AOE]] [[DMG_PHYSICAL]].",
        ]

      },

      note2: {
        ko: [
        "P는 스킬가속에 영향을 받지 않고 \n [[CRIT]] 확률 비례 [[CDR]].",
        "P가 이미 있는 대상에게는 \n Q, E, R2로 [[MARK]]을 부여하지 않음.",
        "W는 부쉬 안에도 보여줌",
        "E의 [[WALL_HOP]]의 판정은 한번만 발동. \n \n 1. [[DASH]]으로 벽을 넘었다면 \n 반대방향 [[DASH]]으로 벽을 넘을 수 없음. \n 2. [[DASH]]으로 벽을 넘지 않았다면 \n 반대방향 [[DASH]]으로 벽을 넘을 수 있음.",
        "R로 [[TRANSFORM]] 상태에서는 P가 발동하지 않음.",
        "R은 우물에 가면 자동으로 [[ST_IMPACT]]. \n [[SKILL_RECAST]] 반경은 미드 일자부쉬 반절정도"
      ],
        en: [
          "P is unaffected by ability haste and instead gets [[CDR]] proportional to [[CRIT]] chance.",
          "Q, E, and R2 do not apply [[MARK]] to a target that already has P's mark.",
          "W reveals targets inside brushes too.",
          "E's [[WALL_HOP]] only triggers once. \n \n 1. If you crossed a wall with the first [[DASH]], \n you cannot cross a wall with the return [[DASH]]. \n 2. If you didn't cross a wall with the first [[DASH]], \n you can cross a wall with the return [[DASH]].",
          "P does not trigger while [[TRANSFORM]]ed by R.",
          "R automatically [[ST_IMPACT]]s when returning to the fountain. \n The [[SKILL_RECAST]] radius is about half of mid lane's straight brush.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default quinn;
