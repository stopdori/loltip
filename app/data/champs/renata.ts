import type { ChampData } from "../interactions/types"; 
const renata: ChampData = {
  id: "renata",
  skills: {
    P: ["MARK"],
    Q: ["ROOT", "SEPARATOR", "AIRBORNE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["W_FLASH", "TO_ENEMY", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "BURN"],
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
      { label: { ko: "Q2", en: "Q2" }, tags: ["DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "STUN"] },
    ] },

    W: ["BUFF", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "TO_ENEMY", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DURATION_RESET", "SEPARATOR", "ST_CONDITIONAL", "BURN"],

    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "SHIELD"] },
      { label: { ko: "E 적군", en: "E Enemy" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "DMG_MAGIC", "SLOW"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED", "BERSERK"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[MARK]]. \n 한 명의 대상에게만 적용. \n \n [[MARK]]이 생길 때 대상의 최대 체력 비례 [[DMG_MAGIC]]. \n [[MARK]] 대상을 아군이 [[BA]]로 공격하면 \n [[MARK_CONSUME]]하여 동일한 피해.",

          "Q1은 [[PROJECTILE]]를 발사하여 [[ROOT]], [[DMG_MAGIC]]. \n 적중 했다면 Q2 사용 가능. \n \n Q2는 대상을 [[AIRBORNE]] 시키고 지정한 방향으로 [[KNOCKBACK]]. \n 이때 대상과 충돌한 유닛들은 [[DMG_MAGIC]]. \n 챔피언이라면 [[STUN]] 추가. \n \n 즉, 지정 대상은 계속 [[ROOT]], 부딪힌 챔피언은 [[STUN]].",

          "W는 아군 챔피언에게 [[BUFF]]. \n [[BUFF]]는 [[AS_UP]], [[TO_ENEMY]] [[MS_UP]]. \n 5초에 걸쳐 효과 증가. \n [[BUFF]] 대상이 처치 관여 시 [[DURATION_RESET]]. \n \n [[BUFF]] 대상이 죽으면 \n 체력 100%로 되살리고 [[BURN]] 상태 돌입. \n 대상이 처치 관여 시 \n 최대 체력의 20%가 되고 [[BURN]] 종료. [[HEAL]]이 아님.",

          "E는 [[PROJECTILE]]를 발사. \n 적중한 아군은 [[SHIELD]]. \n 적중한 적군은 [[SLOW]], [[DMG_MAGIC]].",

          "R은 엄청 느린 광역 [[PROJECTILE]]를 발사. \n 적중한 적들은 [[AS_UP]], [[BERSERK]]에 빠짐.",
        ],

        en: [
          "P applies [[MARK]] on [[BA]]. \n Only affects one target at a time. \n \n Applying [[MARK]] deals [[DMG_MAGIC]] based on the target's max HP. \n If an ally hits the [[MARK]]ed target with a [[BA]], \n it [[MARK_CONSUME]]s for the same damage.",

          "Q1 fires a [[PROJECTILE]] that [[ROOT]]s and deals [[DMG_MAGIC]]. \n If it hits, Q2 becomes available. \n \n Q2 [[AIRBORNE]]s the target and [[KNOCKBACK]]s them in the chosen direction. \n Units that collide with the target take [[DMG_MAGIC]]. \n Champions hit also get [[STUN]]ned. \n \n In short, the marked target stays [[ROOT]]ed, and the champion it collides with gets [[STUN]]ned.",

          "W grants [[BUFF]] to an ally champion. \n The [[BUFF]] gives [[AS_UP]] and [[MS_UP]] [[TO_ENEMY]]. \n The effect scales up over 5 seconds. \n Getting a takedown while [[BUFF]]ed triggers [[DURATION_RESET]]. \n \n If the [[BUFF]]ed target dies, \n it revives at 100% HP and enters [[BURN]]. \n If the target gets a takedown, \n it settles at 20% max HP and [[BURN]] ends. Not a [[HEAL]].",

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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_renatapassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.19)로 채움(Q 속박 시간은 위키에 없어 게임 데이터 renata.bin.json 값 사용).
  skillTooltip: {
    P: {
      ko: "레나타의 [[BA]] 공격이 적에게 6초 동안 표식([[MARK]])을 남깁니다. \n 대상에게 표식이 없다면 [[TARGET_MAXHP_SCALE]] 비례의 1~2%([[LEVEL_SCALE]] 비례)(+[[AP_SCALE]] 100당 2%)에 해당하는 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 아군 챔피언이 [[BA]] 공격 또는 스킬로 대상을 공격하면 표식을 소모해([[MARK_CONSUME]]), \n [[TARGET_MAXHP_SCALE]] 비례의 1~2%([[LEVEL_SCALE]] 비례)(+[[AP_SCALE]] 100당 2%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 레나타는 한 대상에게만 표식을 남길 수 있습니다.",
      en: "",
    },
    Q: {
      ko: "레나타 글라스크가 의수에서 미사일을 발사해([[PROJECTILE]]) 처음 적중하는 적을 1초간 [[ROOT]]하고, \n 80/125/170/215/260(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 재사용 시: 레나타가 대상을 지정한 방향으로 던져 적중하는 적에게 80/125/170/215/260(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 챔피언을 던진 경우 적중하는 적을 0.5초간 [[STUN]]시킵니다. \n \n 16초의 [[COOLDOWN]].",
      en: "",
    },
    W: {
      ko: "레나타가 아군 챔피언을 강화합니다. \n 강화된 대상은 10/15/20/25/30%(+[[AP_SCALE]] 100당 1%)의 [[AS_SCALE]]를 얻고, \n 적을 향해 이동할 때 10/12.5/15/17.5/20%(+[[AP_SCALE]] 100당 1%)의 [[MS_SCALE]]를 얻습니다. \n 이 효과는 5초에 걸쳐 [[AS_SCALE]]는 20/30/40/50/60%(+[[AP_SCALE]] 100당 2%), \n [[MS_SCALE]]는 20/25/30/35/40%(+[[AP_SCALE]] 100당 2%)까지 증가합니다. \n [[ON_TAKEDOWN]] 효과 지속시간이 초기화됩니다. ([[DURATION_RESET]]) \n \n 대상이 죽으면 체력을 완전히 회복한 후 3초에 걸쳐 부식됩니다. \n \n 부식 중에 [[ON_TAKEDOWN]] 체력이 최대 체력의 20%가 되고 부식이 중단됩니다. \n \n 부식 중인 챔피언의 죽음은 체력 회복 등의 효과로 늦출 수 있지만, 해당 챔피언이 처치에 관여하지 않는 한 죽음을 막을 수 없습니다. \n 챔피언의 죽음은 한 번만 늦출 수 있습니다. \n \n 28/27/26/25/24초의 [[COOLDOWN]].",
      en: "",
    },
    E: {
      ko: "레나타가 화학공학 미사일 두 발을 발사해([[PROJECTILE]]) 적중하는 적과 주변 적에게 65/95/125/155/185(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 2초간 30% [[SLOW]]시킵니다. ([[AOE]]) \n 적중하는 아군에게는 3초간 50/65/80/95/110(+50% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 씌웁니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "",
    },
    R: {
      ko: "레나타가 화학 물질의 파도를 방출합니다. ([[PROJECTILE]]) \n 적중당한 적은 1.25/1.75/2.25초간 [[BERSERK]] 상태에 빠져 근처 유닛을 [[BA]] 공격합니다. (자신의 아군 우선) \n \n [[BERSERK]] 상태에 빠진 적은 [[AS_SCALE]]가 100% 증가합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "",
    },
  },

};

export default renata;