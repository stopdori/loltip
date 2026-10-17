import type { ChampData } from "../interactions/types";

const kaisa: ChampData = {
  id: "kaisa",
  // 2026-10-16: 기본/진화 2폼 구조 제거(사용자 결정), 진화(alt) 데이터를 단일 폼으로 채택.
  skills: {
    P: [],
    Q: [],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "TRUE_SIGHT"] },
      { label: { ko: "W 진화", en: "W Evolved" }, tags: ["W_FLASH", "TRUE_SIGHT", "SEPARATOR", "ON_CHAMP_HIT", "CDR"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["GHOSTING", "MS_UP", "SEPARATOR", "AS_UP"] },
      { label: { ko: "E 진화", en: "E Evolved" }, tags: ["INVISIBILITY", "GHOSTING", "MS_UP", "SEPARATOR", "AS_UP", "SEPARATOR", "ON_HIT", "CDR"] },
    ] },

    R: ["R_FLASH", "SHIELD", "SEPARATOR", "DASH", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 온힛", en: "P On-hit" }, tags: ["DMG_MAGIC", "ON_HIT", "DEBUFF_STACK"] },
      { label: { ko: "P 디버프 스택 소모", en: "P Debuff Stack Consume" }, tags: ["TARGET_MISSING_HP_SCALE", "DMG_MAGIC"] },
      { label: { ko: "진화", en: "Evolve" }, tags: ["ST_CONDITIONAL", "Q", "W", "E", "EVOLVED"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "X6", "SEPARATOR", "SWARM", "HOMING"] },
      { label: { ko: "Q 진화", en: "Q Evolved" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "X6", "X2", "SEPARATOR", "SWARM", "HOMING"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "TRUE_SIGHT", "SEPARATOR", "DEBUFF_STACK", "X2"] },
      { label: { ko: "W 진화", en: "W Evolved" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "TRUE_SIGHT", "SEPARATOR", "DEBUFF_STACK", "X3", "SEPARATOR_NEWLINE", "SEPARATOR", "ON_CHAMP_HIT", "CDR"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TIMING_CAST", "LOCKED", "GHOSTING", "MS_UP", "SEPARATOR", "AS_UP"] },
      { label: { ko: "E 진화", en: "E Evolved" }, tags: ["TIMING_CAST", "LOCKED", "INVISIBILITY", "GHOSTING", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "AS_UP", "SEPARATOR", "ON_HIT", "CDR"] },
    ] },

    R: ["ST_CONDITIONAL", "ACTIVATION_CONDITION", "SEPARATOR", "SHIELD", "SEPARATOR", "DASH", "WALL_HOP"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "카이사는 Q, W, E 스킬이 조건에 따라 [[EVOLVED]]. \n Q는 [[AD_SCALE]] 100 \n W는 [[AP_SCALE]] 100 \n E는 [[AS_SCALE]] 100 \n 아이템 판매로 능력치가 감소하면 [[EVOLVED]] 취소.",

          "P는 [[BA]] 공격 시 \n [[DEBUFF_STACK]]과 [[ON_HIT]] [[DMG_MAGIC]]. \n 4스택일 때 다음 중첩은 [[STACK_CONSUME]]. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]]. \n \n",

          "Q는 주변 대상에게 6개의 [[PROJECTILE]]를 자동으로 [[SWARM]]하여 발사. \n 각 [[PROJECTILE]]는 [[DMG_PHYSICAL]]. \n 같은 대상 적중 시 [[DMG_PHYSICAL]] 25%로 감소.", 
          "Q [[EVOLVED]]는 [[PROJECTILE]] 12발. \n \n",

          "W는 [[PROJECTILE]] 발사. \n [[DMG_MAGIC]], [[TRUE_SIGHT]], [[DEBUFF_STACK]] 2개.", 
          "W [[EVOLVED]]는 [[DEBUFF_STACK]] 3개와 \n [[ON_CHAMP_HIT]] [[CDR]] 75%. \n \n",

          "E는 시전중에 [[GHOSTING]], [[MS_UP]]. \n 이후 4초간 [[AS_UP]]. \n [[BA]] 공격 시 [[CDR]] 0.5초.", 
          "E [[EVOLVED]]는 시전중에 [[INVISIBILITY]] 추가. \n \n",

          "R은 [[DEBUFF_STACK]]이 있는 대상이 \n R [[AOE]] 내에 있어야 [[ACTIVATION_CONDITION]].", 
          "대상 근처에만 사용할 수 있고 \n [[SHIELD]]를 획득하면서 [[DASH]]. \n [[AA_RESET]] 가능.",
        ],

        en: ["Kai'Sa's Q, W, and E skills are [[EVOLVED]] under certain conditions. \n Q: 100 [[AD_SCALE]] \n W: 100 [[AP_SCALE]] \n E: 100 [[AS_SCALE]] \n If selling items lowers stats below the threshold, the [[EVOLVED]] is canceled.",
          "P: on [[BA]], \n applies [[DEBUFF_STACK]] and [[ON_HIT]] [[DMG_MAGIC]]. \n At 4 stacks, the next stack triggers [[STACK_CONSUME]]. \n [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]]. \n \n",
          "Q automatically fires 6 [[PROJECTILE]]s as a [[SWARM]] at nearby targets. \n Each [[PROJECTILE]] deals [[DMG_PHYSICAL]]. \n Additional hits on the same target deal 25% [[DMG_PHYSICAL]].",
          "Q [[EVOLVED]] fires 12 [[PROJECTILE]]s. \n \n",
          "W fires a [[PROJECTILE]]. \n [[DMG_MAGIC]], [[TRUE_SIGHT]], and 2 [[DEBUFF_STACK]]s.",
          "W [[EVOLVED]] applies 3 [[DEBUFF_STACK]]s, and \n [[ON_CHAMP_HIT]] grants 75% [[CDR]]. \n \n",
          "E grants [[GHOSTING]] and [[MS_UP]] while casting. \n Then [[AS_UP]] for 4 seconds. \n [[BA]]s grant 0.5s [[CDR]].",
          "E [[EVOLVED]] also grants [[INVISIBILITY]] while casting. \n \n",
          "R requires a target with [[DEBUFF_STACK]]s \n inside the R [[AOE]] as its [[ACTIVATION_CONDITION]].",
          "It can only be used near the target, \n and Kai'Sa [[DASH]]es while gaining a [[SHIELD]]. \n Can [[AA_RESET]]."
        ]

      },

      note2: {
        ko: [
        "P의 [[DEBUFF_STACK]]은 \n [[BA]] 1스택. \n W 2스택. W [[EVOLVED]] 3스택. \n 근처 아군이 [[IMMOBILIZING]] 적중 시 1스택. \n 단, [[IMMOBILIZING]]로 인한 획득은 4스택 일 때 발동하지 않음.", 
        "[[EVOLVED]] 캔슬 \n 귀환을 살짝 먼저 누르면서 \n [[EVOLVED]] 버튼을 클릭으로 누르기. \n 또는 마법공학 정거장을 탔을 때 [[EVOLVED]] 시 모션 없음."
      ],
        en: ["P's [[DEBUFF_STACK]]s: \n [[BA]]: 1 stack. \n W: 2 stacks, W [[EVOLVED]]: 3 stacks. \n 1 stack when a nearby ally lands [[IMMOBILIZING]]. \n However, stacks from [[IMMOBILIZING]] don't trigger at 4 stacks.",
          "[[EVOLVED]] cancel: \n press Recall slightly earlier, \n then click the [[EVOLVED]] button. \n Or, [[EVOLVED]]ing while riding a Hexgate has no animation."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 100,
    16: 70,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_kaisapassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.16)로 채움(CDragon 게임 데이터 kaisa.bin.json과 일치 확인).
  // 원문의 "현재: 추가 공격력 N/100" 같은 실시간 진행도 표시는 진화 조건 표기로 대체.
  skillTooltip: {
    P: {
      ko: "[[BA]] 공격 시 4초 동안 상대에게 플라즈마 중첩([[DEBUFF_STACK]])을 쌓고, \n 4~30([[LEVEL_SCALE]] 비례)(+12% [[AP_SCALE]]) + 중첩당 1~8([[LEVEL_SCALE]] 비례)(+3% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 4회 중첩이 쌓인 적을 공격하면 플라즈마를 소모하며, ([[STACK_CONSUME]]) [[TARGET_MISSING_HP_SCALE]] 비례의 15%(+[[AP_SCALE]] 100당 6%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n 주변 아군이 적 챔피언을 [[IMMOBILIZING]] 상태로 만들면 중첩을 1회 적용합니다. \n \n 카이사의 피부가 능력치에 따라 기본 스킬을 [[EVOLVED]]시킵니다. \n - 이케시아 폭우(Q): 추가 [[AD_SCALE]] 100 \n - 공허추적자(W): [[AP_SCALE]] 100 \n - 고속 충전(E): 추가 [[AS_SCALE]] 100%",
      en: "On [[BA]], applies Plasma stacks ([[DEBUFF_STACK]]) to the enemy for 4 seconds, \n dealing an additional 4~30 (based on [[LEVEL_SCALE]]) (+12% [[AP_SCALE]]) + 1~8 (based on [[LEVEL_SCALE]]) (+3% [[AP_SCALE]]) per stack [[DMG_MAGIC]]. \n \n Attacking an enemy with 4 stacks consumes the Plasma ([[STACK_CONSUME]]), dealing [[DMG_MAGIC]] equal to 15% (+6% per 100 [[AP_SCALE]]) of [[TARGET_MISSING_HP_SCALE]]. \n When a nearby ally inflicts [[IMMOBILIZING]] on an enemy champion, 1 stack is applied. \n \n Kai'Sa's skin [[EVOLVED]]s her basic skills based on her stats. \n - Icathian Rain (Q): 100 bonus [[AD_SCALE]] \n - Void Seeker (W): 100 [[AP_SCALE]] \n - Supercharge (E): 100% bonus [[AS_SCALE]]",
    },
    Q: {
      ko: "카이사가 근처 적들을 추격하는([[HOMING]]) 미사일을 6개 발사하며, \n 적중한 적에게 각각 40/55/70/85/100(+55% 추가 [[AD_SCALE]])(+20% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. (최대 90/123.75/157.5/191.25/225(+123.75% 추가 [[AD_SCALE]])(+45% [[AP_SCALE]])) \n 이미 미사일에 맞은 적 챔피언 또는 몬스터에게 추가 적중할 경우 25%의 피해를 입힙니다. \n \n [[EVOLVED]] : 미사일을 12개 발사합니다. \n (조건: 추가 [[AD_SCALE]] 100) \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Kai'Sa fires 6 missiles that seek ([[HOMING]]) nearby enemies, \n each dealing 40/55/70/85/100 (+55% bonus [[AD_SCALE]]) (+20% [[AP_SCALE]]) [[DMG_PHYSICAL]] to enemies hit. (Max 90/123.75/157.5/191.25/225 (+123.75% bonus [[AD_SCALE]]) (+45% [[AP_SCALE]])) \n Additional hits on an enemy champion or monster already hit deal 25% damage. \n \n [[EVOLVED]]: Fires 12 missiles. \n (Condition: 100 bonus [[AD_SCALE]]) \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "카이사가 공허 에너지 광선을 발사해 30/55/80/105/130(+130% [[AD_SCALE]])(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 플라즈마 중첩(P) ([[DEBUFF_STACK]])을 2회 적용하며, \n 4초 동안 처음으로 적중한 적에 대한 [[TRUE_SIGHT]]를 얻습니다. \n \n [[EVOLVED]] : 플라즈마 중첩(P) ([[DEBUFF_STACK]])을 3회 적용합니다. \n 챔피언 적중 시 재사용 대기시간이 75% 감소합니다. ([[CDR]]) \n (조건: [[AP_SCALE]] 100) \n \n 20/18.5/17/15.5/14초의 [[COOLDOWN]].",
      en: "Kai'Sa fires a void energy beam, dealing 30/55/80/105/130 (+130% [[AD_SCALE]]) (+45% [[AP_SCALE]]) [[DMG_MAGIC]] and applying 2 Plasma stacks (P) ([[DEBUFF_STACK]]), \n and gains [[TRUE_SIGHT]] of the first enemy hit for 4 seconds. \n \n [[EVOLVED]]: Applies 3 Plasma stacks (P) ([[DEBUFF_STACK]]). \n Hitting a champion reduces the cooldown by 75%. ([[CDR]]) \n (Condition: 100 [[AP_SCALE]]) \n \n 20/18.5/17/15.5/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "카이사가 공허 에너지를 고속 충전하여 [[MS_SCALE]]가 55/60/65/70/75%(추가 [[AS_SCALE]]에 비례해 최대 110/120/130/140/150%) 증가하고, \n 충전 중에는 [[GHOSTING]] 상태가 되며, 4초 동안 [[AS_SCALE]]가 40/50/60/70/80% 증가합니다. \n \n [[BA]] 공격 시 스킬의 재사용 대기시간이 0.5초 감소합니다. ([[CDR]]) \n \n [[EVOLVED]] : 중전 시 0.5초 동안 [[INVISIBILITY]] 상태가 됩니다. \n (조건: 추가 [[AS_SCALE]] 100%) \n \n 16/14.5/13/11.5/10초의 [[COOLDOWN]].",
      en: "Kai'Sa supercharges her void energy, increasing her [[MS_SCALE]] by 55/60/65/70/75% (up to 110/120/130/140/150% based on bonus [[AS_SCALE]]), \n becomes [[GHOSTING]] while charging, and increases her [[AS_SCALE]] by 40/50/60/70/80% for 4 seconds. \n \n [[BA]]s reduce this skill's cooldown by 0.5 seconds. ([[CDR]]) \n \n [[EVOLVED]]: Becomes [[INVISIBILITY]] for 0.5 seconds while charging. \n (Condition: 100% bonus [[AS_SCALE]]) \n \n 16/14.5/13/11.5/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "카이사가 플라즈마 표식([[DEBUFF_STACK]])이 남은 적 챔피언 근처로 빠르게 [[DASH]]하며, \n 2초 동안 100/150/200(+90/135/180% [[AD_SCALE]])(+120% [[AP_SCALE]])의 [[SHIELD]]를 얻습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Kai'Sa quickly [[DASH]]es near an enemy champion with Plasma marks ([[DEBUFF_STACK]]), \n gaining a 100/150/200 (+90/135/180% [[AD_SCALE]]) (+120% [[AP_SCALE]]) [[SHIELD]] for 2 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default kaisa;
