import type { ChampData } from "../interactions/types";

const lillia: ChampData = {
  id: "lillia",
  skills: {
    P: ["DEBUFF", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q 패시브 버프 스택", en: "Q Passive Buff Stack" }, tags: ["BUFF_STACK", "SEPARATOR", "PER_STACK", "MS_UP"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["Q_FLASH"] },
    ] },

    W: ["CC_BUFFER", "SEPARATOR", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "SLOW"],
    R: ["DROWSY", "SEPARATOR", "SLEEP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DEBUFF", "DOT", "DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK", "SEPARATOR", "PER_STACK", "MS_UP"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR", "DEBUFF", "BUFF_STACK"] },
      { label: { ko: "Q 액티브 가장자리", en: "Q Active Edge" }, tags: ["DMG_TRUE", "ADDITIONAL"] },
    ] },

    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "SEPARATOR", "DEBUFF", "BUFF_STACK"],
    
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DETONATE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "DEBUFF", "BUFF_STACK"],
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "SWARM", "PROJECTILE", "SEPARATOR_NEWLINE", "SEPARATOR", "DROWSY", "BUFF_STACK", "SEPARATOR", "SLEEP", "BUFF_STACK"] },
      { label: { ko: "R 수면 추가 피해", en: "R Sleep Bonus Damage" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
   
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 Q, W, E 스킬에 맞은 대상에게 꿈가루 [[DEBUFF]]. \n [[DEBUFF]]는 [[TARGET_MAXHP_SCALE]] [[DOT]] [[DMG_MAGIC]].", 
          "[[DEBUFF]] 대상이 \n 챔피언, 대형, 에픽 몬스터면 [[DOT]] [[HEAL]]. \n \n",

          "Q의 [[PASSIVE_BONUS]]는 \n 스킬 적중 시 [[MS_UP]] [[BUFF_STACK]]. (최대 4스택)", 
          "Q는 주변 [[AOE]] [[DMG_MAGIC]]. \n 가장자리에 맞으면 [[DMG_TRUE]] 추가. \n \n",

          "W는 [[DASH]] 내려찍기 공격. \n [[AOE]] [[DMG_MAGIC]]. \n 중앙에 맞히면 3배의 [[DMG_MAGIC]]. \n \n",

          "E는 씨앗([[PROJECTILE]]) 발사. \n 적 또는 지형에 부딪힐 때까지 굴러감. \n 적중하면 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n \n",

          "R은 P의 [[DEBUFF]]가 걸려있는 대상에게 [[DROWSY]] 시전. \n [[DROWSY]]은 [[SLEEP]]으로 이어짐. \n 대상이 피해를 받아 깨어나면 [[DMG_MAGIC]] 추가.",
        ],

        en: [
          "P applies a Dream Dust [[DEBUFF]] to targets hit by Q, W, or E. \n The [[DEBUFF]] deals [[DOT]] [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]].",
          "If the [[DEBUFF]]ed target is \n a champion, large monster, or epic monster, grants [[DOT]] [[HEAL]]. \n \n",

          "Q's [[PASSIVE_BONUS]] grants \n an [[MS_UP]] [[BUFF_STACK]] on skill hit. (Max 4 stacks)",
          "Q deals [[AOE]] [[DMG_MAGIC]] around her. \n Hitting with the edge adds [[DMG_TRUE]]. \n \n",

          "W is a [[DASH]]ing slam attack. \n Deals [[AOE]] [[DMG_MAGIC]]. \n Hitting the center deals 3x [[DMG_MAGIC]]. \n \n",

          "E fires a seed ([[PROJECTILE]]). \n It rolls until it hits an enemy or terrain. \n On hit, deals [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n \n",

          "R casts [[DROWSY]] on targets afflicted with P's [[DEBUFF]]. \n [[DROWSY]] leads to [[SLEEP]]. \n When the target is woken by damage, deals additional [[DMG_MAGIC]].",
        ]

      },

      note2: {
        ko: [
        "Q의 [[MS_UP]] [[BUFF_STACK]]은 \n Q, W, E, R 스킬 시전당 1번만 발동. \n 한 번에 여러 명 맞혀도 1스택만 증가.",
        "W의 [[DASH]]은 CC에 끊기지만, \n 모션에 따라 데미지가 들어가는 경우와 들어가지 않는 경우가 있음\n1. 릴리아가 지팡이를 회전할 때 CC를 맞으면\n데미지가 들어가지 않고\n2. 지팡이를 내려칠 때 CC를 맞으면\n이동은 끊기지만 데미지는 들어감."
      ],
        en: [
          "Q's [[MS_UP]] [[BUFF_STACK]] \n triggers only once per Q, W, E, or R cast. \n Hitting multiple targets at once only adds 1 stack.",
          "W's [[DASH]] is interrupted by CC, \n but whether damage lands depends on the motion\n1. If CC lands while Lillia is spinning her staff,\nno damage is dealt\n2. If CC lands while she slams the staff down,\nmovement is interrupted but damage still lands."
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_lilliap_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.20: R 수면 2.5/2.75/3초)로 채움(CDragon 게임 데이터 lillia.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "릴리아의 스킬이 적에게 꿈가루([[DEBUFF]])를 묻혀 3초 동안 [[TARGET_MAXHP_SCALE]] 비례의 5%(+[[AP_SCALE]] 100당 1.25%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n 대상이 대형 정글 몬스터인 경우 릴리아가 지속시간 동안 39(+15% [[AP_SCALE]])의 체력을 [[HEAL]]하며, \n 대상이 챔피언인 경우 6~90([[LEVEL_SCALE]] 비례)(+30% [[AP_SCALE]])의 체력을 [[HEAL]]합니다.",
      en: "Lillia's skills apply Dream Dust ([[DEBUFF]]) to enemies, dealing 5% (+1.25% per 100 [[AP_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_MAGIC]] over 3 seconds. \n If the target is a large jungle monster, Lillia [[HEAL]]s 39 (+15% [[AP_SCALE]]) HP over the duration, \n and if the target is a champion, she [[HEAL]]s 6~90 (based on [[LEVEL_SCALE]]) (+30% [[AP_SCALE]]) HP.",
    },
    Q: {
      ko: "[[PASSIVE_BONUS]]: 릴리아의 스킬이 적중하면 6.5초 동안 [[MS_SCALE]]가 3/4/5/6/7%(+[[AP_SCALE]] 100당 3%) 증가합니다. \n 이 효과는 최대 4회 중첩됩니다. ([[BUFF_STACK]]) \n \n 사용 시: 릴리아가 지팡이를 휘둘러 35/45/55/65/75(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 가장자리에 있는 적에게 35/45/55/65/75(+35% [[AP_SCALE]])의 [[DMG_TRUE]]를 추가로 입힙니다. \n \n 6/5.5/5/4.5/4초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: When Lillia's skills hit, her [[MS_SCALE]] increases by 3/4/5/6/7% (+3% per 100 [[AP_SCALE]]) for 6.5 seconds. \n This effect stacks up to 4 times. ([[BUFF_STACK]]) \n \n Active: Lillia swings her staff, dealing 35/45/55/65/75 (+35% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Enemies at the edge take an additional 35/45/55/65/75 (+35% [[AP_SCALE]]) [[DMG_TRUE]]. \n \n 6/5.5/5/4.5/4 second [[COOLDOWN]].",
    },
    W: {
      ko: "릴리아가 힘을 모은 후 강력한 일격을 가해 80/100/120/140/160(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 중심에 있는 적은 240/300/360/420/480(+105% [[AP_SCALE]])의 피해를 입습니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Lillia winds up and strikes powerfully, dealing 80/100/120/140/160 (+35% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Enemies in the center take 240/300/360/420/480 (+105% [[AP_SCALE]]) damage. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "릴리아가 데굴데굴 씨앗을 날려 적중한 적에게 60/85/110/135/160(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 적의 모습을 드러내며 ([[REVEALED]]) 3초 동안 40% [[SLOW]]시킵니다. \n 씨앗은 적 또는 지형에 부딪힐 때까지 굴러갑니다. \n \n 12초의 [[COOLDOWN]].",
      en: "Lillia lobs a rolling seed, dealing 60/85/110/135/160 (+50% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies hit, \n revealing them ([[REVEALED]]) and [[SLOW]]ing them by 40% for 3 seconds. \n The seed rolls until it hits an enemy or terrain. \n \n 12 second [[COOLDOWN]].",
    },
    R: {
      ko: "릴리아가 꿈가루(P) ([[DEBUFF]])가 묻은 적 챔피언을 1.5초 동안 전부 [[DROWSY]] 상태에 빠뜨립니다. \n 이후 해당 적은 2.5/2.75/3초 동안 [[SLEEP]] 상태에 빠집니다. \n \n 피해를 입어 깨어나면 100/150/200(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Lillia makes all enemy champions afflicted with Dream Dust (P) ([[DEBUFF]]) [[DROWSY]] for 1.5 seconds. \n Afterward, they fall into [[SLEEP]] for 2.5/2.75/3 seconds. \n \n When woken by damage, they take an additional 100/150/200 (+40% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default lillia;
