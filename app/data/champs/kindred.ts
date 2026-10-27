import type { ChampData } from "../interactions/types";

const kindred: ChampData = {
  id: "kindred",
  skills: {
    P: [],
    Q: ["AA_RESET", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "AS_UP"],
    W: ["W_FLASH", "SEPARATOR", "ON_HIT", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["INVULNERABLE", "SEPARATOR", "HEAL"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "STACKING"],
    Q: { phases: [
      { label: { ko: "Q 돌진 단계", en: "Q Dash Phase" }, tags: ["AA_RESET", "AS_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "Q 발사 단계", en: "Q Shot Phase" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "VOLLEY", "HOMING", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK"] },
      { label: { ko: "W 패시브 온힛", en: "W Passive On-hit" }, tags: ["STACK_CONSUME", "ON_HIT", "HEAL"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["ZONE", "DOT", "DMG_MAGIC"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TIMING_CAST", "TARGETED", "PROJECTILE", "SLOW", "DEBUFF"] },
      { label: { ko: "E 디버프 발동", en: "E Debuff Trigger" }, tags: ["TARGET_MISSING_HP_SCALE", "DMG_PHYSICAL"] },
    ] },

    R: { phases: [
      { label: { ko: "R 축복의 지대", en: "R Zone of Blessing" }, tags: ["TIMING_AFTERCAST", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "INVULNERABLE", "UNHEALABLE"] },
      { label: { ko: "R 회복", en: "R Heal" }, tags: ["HEAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 조건에 따라 [[MARK]]([[STACKING]]) 획득. \n 1. 챔피언을 지정하는 [[MARK]]은 [[COOLDOWN]]. \n 2. 정글에 지정되는 [[MARK]]은 규칙이 있음. \n 하단 TMI에 자세하게 서술.", 
          "[[MARK]]당 Q, W, E 스킬 효과 [[EMPOWERED]]와 \n 4스택 획득 시 [[BA]], Q의 [[RANGE_UP]] 75. \n 이후 3스택마다 [[RANGE_UP]] 25. \n 최대 [[RANGE_SCALE]] 750. (25스택). \n \n",

          "Q는 도약([[DASH]]) 하여 \n [[DMG_PHYSICAL]] [[SWARM]] [[PROJECTILE]] 발사. (최대 3발) \n [[AS_UP]] [[BUFF]] 획득. ( [[MARK]]당 5% 증가 ) \n \n",

          "W의 [[PASSIVE_BONUS]]는 \n 킨드레드가 이동하거나 공격하면 [[BUFF_STACK]] 획득. \n 100스택 달성 시 다음 [[BA]] [[EMPOWERED]]. \n [[ON_HIT]] [[HEAL]].", 
          "W는 늑대가 공격하는 [[ZONE]]을 생성. \n 늑대는 킨드가 공격한 대상을 우선적으로 공격하여 [[DMG_MAGIC]]. \n [[MARK]]당 [[TARGET_CURRENT_HP_SCALE]] 비례 [[DMG_MAGIC]] 증가. \n [[ZONE]] 위에서 Q를 사용하면 Q [[CDR]]. \n \n",

          "E는 [[TARGETED]] [[PROJECTILE]] 발사. \n [[SLOW]]와 [[DEBUFF]] 부여. \n [[DEBUFF]]는 3번 [[BA]] 공격 시 [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_PHYSICAL]]. \n [[MARK]]당 [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_PHYSICAL]] 증가. \n \n",

          "R은 축복의 지대를 생성. ([[INVULNERABLE]] [[ZONE]]) \n 모든 유닛의 체력이 10% 밑으로 떨어지지 않음. \n 10%가 되면 [[HEAL]] 불가. \n [[ZONE]]이 사라지면서 모든 유닛 [[HEAL]].",
        ],

        en: ["P gains a [[MARK]] ([[STACKING]]) under certain conditions. \n 1. Champion-targeting [[MARK]]s have a [[COOLDOWN]]. \n 2. Jungle [[MARK]]s follow specific rules. \n Detailed in the TMI below.",
          "Each [[MARK]] makes Q, W, and E effects [[EMPOWERED]], and \n at 4 stacks, [[BA]]s and Q gain [[RANGE_UP]] 75. \n After that, [[RANGE_UP]] 25 every 3 stacks. \n Max [[RANGE_SCALE]] 750. (25 stacks) \n \n",
          "Q leaps ([[DASH]]) and \n fires a [[DMG_PHYSICAL]] [[SWARM]] of [[PROJECTILE]]s. (Up to 3) \n Gains an [[AS_UP]] [[BUFF]]. (+5% per [[MARK]]) \n \n",
          "W's [[PASSIVE_BONUS]]: \n Kindred gains [[BUFF_STACK]]s when moving or attacking. \n At 100 stacks, the next [[BA]] becomes [[EMPOWERED]]. \n [[ON_HIT]] [[HEAL]].",
          "W creates a [[ZONE]] where the wolf attacks. \n The wolf prioritizes targets Kindred attacked, dealing [[DMG_MAGIC]]. \n Each [[MARK]] increases [[DMG_MAGIC]] based on [[TARGET_CURRENT_HP_SCALE]]. \n Using Q on the [[ZONE]] grants Q [[CDR]]. \n \n",
          "E fires a [[TARGETED]] [[PROJECTILE]]. \n Applies [[SLOW]] and a [[DEBUFF]]. \n The [[DEBUFF]] deals [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]] after 3 [[BA]]s. \n Each [[MARK]] increases [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]]. \n \n",
          "R creates a Zone of Blessing. ([[INVULNERABLE]] [[ZONE]]) \n No unit's health can drop below 10%. \n At 10%, [[HEAL]] is not possible. \n When the [[ZONE]] disappears, all units [[HEAL]]."
        ]

      },

      note2: {
        ko: [
        "챔피언 지정 [[MARK]]은 \n 챔피언과의 전투 중에는 지정할 수 없음. (일반 전투 X) \n 갱 가기 직전에 지정하고 가는 것이 좋음. \n 한번 수확한 챔피언은 한동안 지정할 수 없음.", 
        "정글 [[MARK]]은 킨드레드의 [[MARK]] [[STACKING]] 개수에따라 \n 생성 규칙이 몇가지 있음.", 
        "0스택 - 바위게에 고정 생성. ( 단, 위, 아래는 랜덤 ) \n 1~3스택 - 바위게, 상대 칼날부리, 두꺼비 \n 4~7스택 - 버프몹, 늑대, 돌거북 \n 8스택 이상 - 에픽 몬스터", 
        "정글 [[MARK]]이 생성되었지만 수확하지 않고 45초가 지나면 \n 다른 정글몹으로 [[MARK]] 변경. \n 단, 조건에 맞는 정글이 없을 시 \n 조건에 맞는 정글이 등장 할 때 [[MARK]] 생성.", 
        "정글 [[MARK]] 수확 성공 시 45초뒤에 다른곳에서 생성.", 
        "그래서 규칙을 잘 알고 있으면 \n [[MARK]]이 생기는 위치에서 대기하거나 \n [[MARK]]을 원하는 위치에 생성시킬 수 있음.", "챔피언을 지정하는 [[MARK]]은 스킬가속의 영향을 받지 않음. \n \n", 

        "Q는 두단계로 나뉨. 돌진/발사 \n 돌진 단계 중에 [[AIRBORNE]]류, [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 \n 발사 단계를 하지 않음.",
        "Q가 [[COOLDOWN]]일 때 W를 사용해도 Q [[CDR]] 적용.",
        "Q, W는 상대가 보여야 공격이 닿음. \n W로 [[BUSH]] 안쪽을 보고 싶으면 부쉬안에 W 사용.",
        "W의 늑대 [[AS_SCALE]]는 \n 킨드레드 [[AS_SCALE]]에 비례.",
        "R은 체력이 10% 일 때 [[HEAL]] 불가. \n 하지만, [[MAX_HP_UP]]는 적용."
      ],
        en: ["Champion-targeting [[MARK]]s \n cannot be set while fighting that champion. (Not general combat) \n It's best to mark right before going for a gank. \n A champion that has been harvested cannot be marked again for a while.",
          "Jungle [[MARK]]s follow several spawn rules \n depending on Kindred's [[MARK]] [[STACKING]] count.",
          "0 stacks - always spawns on a Scuttle Crab. (Top or bottom is random) \n 1~3 stacks - Scuttle Crab, enemy Raptors, Gromp \n 4~7 stacks - buff monsters, Wolves, Krugs \n 8+ stacks - epic monsters",
          "If a jungle [[MARK]] spawns but isn't harvested within 45 seconds, \n the [[MARK]] moves to another jungle monster. \n However, if no qualifying jungle monster exists, \n the [[MARK]] spawns when one appears.",
          "After a jungle [[MARK]] is harvested, a new one spawns elsewhere 45 seconds later.",
          "So if you know the rules well, \n you can wait where the [[MARK]] will appear \n or make the [[MARK]] spawn where you want.",
          "Champion-targeting [[MARK]]s are not affected by ability haste. \n \n",
          "Q is split into two phases: dash / shot. \n If hit by [[AIRBORNE]]-type CC, [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, \n the shot phase does not occur.",
          "Using W while Q is on [[COOLDOWN]] still applies Q's [[CDR]].",
          "Q and W only hit if the target is visible. \n To see inside a [[BUSH]] with W, cast W inside the bush.",
          "The wolf's [[AS_SCALE]] from W \n scales with Kindred's [[AS_SCALE]].",
          "R can't [[HEAL]] at 10% health. \n However, [[MAX_HP_UP]] still applies."
        ]
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_kindredpassivemanager_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.20)로 채우고, 위키에서 안 잡힌 표식 단계(4개 → 사거리 +75, 이후 3개마다 +25)는
  // CDragon 게임 데이터 kindred.bin.json(InitialMarkThreshold/RangeIncrease/FirstTierMultiplier)로 확인.
  skillTooltip: {
    P: {
      ko: "킨드레드는 소지품 창 위의 챔피언 초상화를 클릭하여 사냥할 챔피언을 선택할 수 있습니다. \n 또한 일정 시간마다 정글 몬스터에게 표식을 자동으로 지정합니다. \n \n 킨드레드가 사냥 대상 [[ON_TAKEDOWN]] 표식([[STACKING]]) 중첩이 쌓이고 공격이 강화됩니다. \n \n 4스택이 쌓이면 킨드레드의 [[RANGE_SCALE]]가 75 증가합니다. \n 이후 3스택이 중첩될 때마다 [[RANGE_SCALE]]가 25만큼 증가합니다. (4, 7, 11, 14 ~) \n \n 표식이 중첩되면 킨드레드의 기본 스킬이 [[EMPOWERED]]됩니다. \n \n - 화살 세례(Q) 사용 시 표식당 5%의 [[AS_SCALE]]를 얻습니다. \n \n - 늑대의 광기(W) 사용 시 표식당 [[TARGET_CURRENT_HP_SCALE]] 비례의 1%에 해당하는 추가 피해를 입힙니다. \n \n - 차오르는 공포(E) 사용 시 표식당 [[TARGET_MISSING_HP_SCALE]] 비례의 0.5%에 해당하는 추가 피해를 입힙니다.",
      en: "Kindred can choose a champion to hunt by clicking their portrait above the inventory. \n They also periodically mark jungle monsters automatically. \n \n When Kindred gets an [[ON_TAKEDOWN]] on a hunted target, they gain mark ([[STACKING]]) stacks and their attacks are empowered. \n \n At 4 stacks, Kindred's [[RANGE_SCALE]] increases by 75. \n After that, every 3 stacks increases [[RANGE_SCALE]] by 25. (4, 7, 11, 14 ~) \n \n As marks stack, Kindred's basic skills become [[EMPOWERED]]. \n \n - Dance of Arrows (Q) grants 5% [[AS_SCALE]] per mark. \n \n - Wolf's Frenzy (W) deals additional damage equal to 1% of [[TARGET_CURRENT_HP_SCALE]] per mark. \n \n - Mounting Dread (E) deals additional damage equal to 0.5% of [[TARGET_MISSING_HP_SCALE]] per mark.",
    },
    Q: {
      ko: "킨드레드가 뛰어올라([[DASH]]) 최대 3명의 적에게 화살을 발사하여 40/65/90/115/140(+75% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 4초 동안 [[AS_SCALE]]가 35%(+ 표식당 5%)만큼 증가합니다. \n \n 늑대의 광기(W) 범위 안에 있는 동안 이 스킬의 재사용 대기시간이 4/3.5/3/2.5/2초로 감소합니다. ([[CDR]]) \n \n 9초의 [[COOLDOWN]].",
      en: "Kindred leaps ([[DASH]]) and fires arrows at up to 3 enemies, dealing 40/65/90/115/140 (+75% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]], \n and their [[AS_SCALE]] increases by 35% (+5% per mark) for 4 seconds. \n \n While inside Wolf's Frenzy (W), this skill's cooldown is reduced to 4/3.5/3/2.5/2 seconds. ([[CDR]]) \n \n 9 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 킨드레드가 이동하고 공격할 때마다 중첩([[BUFF_STACK]])이 쌓입니다. \n 100회 중첩 상태에서 다음 [[BA]] 공격 시 [[SELF_MISSING_HP_SCALE]]에 비례해 47~81([[LEVEL_SCALE]] 비례)의 체력을 [[HEAL]]합니다. \n \n 사용 시: 킨드레드가 지대를 지정하고([[ZONE]]) 늑대에게 명령을 내려 양이 마지막으로 공격한 적을 물게 합니다. \n 늑대의 공격은 25/30/35/40/45(+20% 추가 [[AD_SCALE]])(+20% [[AP_SCALE]]) + [[TARGET_CURRENT_HP_SCALE]] 비례의 1.5%(+ 표식당 1%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 18/17/16/15/14초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Kindred builds stacks ([[BUFF_STACK]]) as they move and attack. \n At 100 stacks, their next [[BA]] [[HEAL]]s them for 47~81 (based on [[LEVEL_SCALE]]) health based on [[SELF_MISSING_HP_SCALE]]. \n \n Active: Kindred designates an area ([[ZONE]]) and commands Wolf to bite the enemy Lamb last attacked. \n Wolf's attacks deal 25/30/35/40/45 (+20% bonus [[AD_SCALE]]) (+20% [[AP_SCALE]]) + 1.5% (+1% per mark) of [[TARGET_CURRENT_HP_SCALE]] [[DMG_MAGIC]]. \n \n 18/17/16/15/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "킨드레드가 적을 약화시켜 1.5초 동안 30%(+[[AP_SCALE]] 100당 5%) [[SLOW]]시킵니다. \n \n 4초 내에 대상을 세 번 공격하면 늑대가 적을 덮쳐, \n 추가로 80/110/140/170/200(+100% 추가 [[AD_SCALE]]) + [[TARGET_MISSING_HP_SCALE]] 비례의 5%(+ 표식당 0.5%)에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n \n 14/12.5/11/9.5/8초의 [[COOLDOWN]].",
      en: "Kindred cripples an enemy, [[SLOW]]ing them by 30% (+5% per 100 [[AP_SCALE]]) for 1.5 seconds. \n \n Attacking the target three times within 4 seconds makes Wolf pounce on them, \n dealing an additional 80/110/140/170/200 (+100% bonus [[AD_SCALE]]) + 5% (+0.5% per mark) of [[TARGET_MISSING_HP_SCALE]] [[DMG_PHYSICAL]]. \n \n 14/12.5/11/9.5/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "킨드레드가 4초 동안 땅을 축복하여([[ZONE]]) 해당 영역 안에 있는 아군, 적, 중립 몬스터를 포함한 모든 유닛이 사망하지 않습니다. \n 체력이 10%로 떨어지면 유닛들이 해당 영역 안에 있는 동안 피해를 받거나 치유되지 않습니다. \n \n 축복이 끝나면 영역 안에 있는 모든 유닛이 체력을 225/300/375 [[HEAL]]합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Kindred blesses the ground for 4 seconds ([[ZONE]]), preventing all units in the area, including allies, enemies, and neutral monsters, from dying. \n When their health drops to 10%, units cannot take damage or be healed while inside the area. \n \n When the blessing ends, all units inside the area [[HEAL]] for 225/300/375 health. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default kindred;
