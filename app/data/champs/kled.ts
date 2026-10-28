import type { ChampData } from "../interactions/types";

const kled: ChampData = {
  id: "kled",
  skills: {
    base : {
    P: ["TRANSFORM", "SEPARATOR", "UNTARGETABLE", "TOWER_DODGE"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "TETHER", "TRUE_SIGHT"] },
      { label: { ko: "Q 사슬 발동", en: "Q Tether" }, tags: ["GRAB", "SLOW"] },
    ] },
    
    W: ["AS_UP"],
    E: ["MS_UP", "SEPARATOR", "HOMING", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SHIELD", "SEPARATOR", "UNSTOPPABLE", "DASH", "SEPARATOR", "MS_UP", "ZONE"] },
      { label: { ko: "R 대상 돌진", en: "R Target Dash" }, tags: ["HOMING", "DASH", "WALL_HOP", "SEPARATOR", "KNOCKBACK"] },
    ] },
    
  },
  
  alt: {
      // 🔨 변신폼 (근접)
      P: ["TRANSFORM", "SEPARATOR", "TO_ENEMY", "MS_UP"],
      Q: ["Q_FLASH", "SEPARATOR", "ON_CHAMP_HIT", "ENERGY_RESTORE"],      // 변신 Q는 Q플 가능
      W: ["AS_UP"],
      E: [],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["REVEALED", "POSITION_REVEAL"],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["HIT_EFFECT"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: { phases: [
      { label: { ko: "P 폼변환", en: "P Transform" }, tags: ["ST_CONDITIONAL", "TRANSFORM", "UNTARGETABLE", "LUNGE"] },
      { label: { ko: "P 승마폼 버프", en: "P Mounted Buff" }, tags: [] },
    ] },
      
      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "TETHER", "TRUE_SIGHT"] },
      { label: { ko: "Q 사슬 발동", en: "Q Tether" }, tags: ["DMG_PHYSICAL", "GRAB", "SLOW"] },
    ] },
    
      W: { phases: [
      { label: { ko: "W 발동", en: "W Activate" }, tags: ["AS_UP", "SEPARATOR", "BUFF_STACK", "X3"] },
      { label: { ko: "W 온힛", en: "W On-Hit" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "ON_HIT"] },
    ] },

      E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["TARGETED", "AOE", "DMG_PHYSICAL", "HOMING", "DASH", "WALL_HOP", "MARK", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["TARGETED", "SINGLE", "DMG_PHYSICAL", "HOMING", "DASH", "WALL_HOP"] },
    ] },
      
      R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SHIELD", "LOCKED", "SEPARATOR", "UNSTOPPABLE", "DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "MS_UP", "ZONE"] },
      { label: { ko: "R 대상 돌진", en: "R Target Dash" }, tags: ["DMG_MAGIC", "HOMING", "DASH", "WALL_HOP", "SEPARATOR", "KNOCKBACK"] },
    ] },
    },

    alt: {
      P: { phases: [
      { label: { ko: "P 폼변환", en: "P Transform" }, tags: ["ST_CONDITIONAL", "TRANSFORM", "UNTARGETABLE", "LUNGE"] },
      { label: { ko: "P 낙마폼 버프", en: "P Dismounted Buff" }, tags: ["TO_ENEMY", "MS_UP", "SEPARATOR", "BA", "EFFECT_DOWN"] },
    ] },

      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "RECHARGE", "SEPARATOR", "DASH"],

      W: { phases: [
      { label: { ko: "W 발동", en: "W Activate" }, tags: ["AS_UP", "SEPARATOR", "BUFF_STACK", "X3"] },
      { label: { ko: "W 온힛", en: "W On-Hit" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "ON_HIT"] },
    ] },
      E: [],
      R: [],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "클레드 / 스칼(탈것)의 체력은 각각 존재. \n 스칼의 체력이 항상 먼저 감소. \n 스칼의 체력이 0이되면 낙마. ([[TRANSFORM]]) \n 이때, [[UNTARGETABLE]], [[TOWER_DODGE]].", 
          "낙마폼에서 용기([[ENERGY_SCALE]])를 100채우면 승마. ([[TRANSFORM]]) \n 승마 [[COOLDOWN]]은 30초. \n 다시 낙마하면 [[COOLDOWN]]동안 용기가 차지 않음. \n 용기 회복정보는 하단 TMI에 자세히 서술. \n \n \n", 

          "승마폼", 
          "Q는 [[PROJECTILE]] 발사. \n 적중 시 [[DMG_PHYSICAL]]와 [[TETHER]]. \n  [[TETHER]] 발동 시 [[DMG_PHYSICAL]]와 [[GRAB]], [[SLOW]]. \n \n", 

          "W는 [[BA]] 공격 시 W가 활성화. \n [[BUFF_STACK]] 3스택과 [[AS_UP]]. \n 3번째 스택을 소모할 때 \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_PHYSICAL]].",           
          "[[BUFF_STACK]]이 사라지면 [[COOLDOWN]] 시작. \n [[COOLDOWN]]일 때 [[BA]] 공격 시 [[CDR]] 0.5초 \n 챔피언은 [[CDR]] 1.5초. \n \n", 

          "E는 [[DASH]]하여 경로에 [[DMG_PHYSICAL]]. \n 챔피언, 대형 정글몹에게 적중 시 [[MS_UP]]. \n 처음 적중한 챔피언 또는 대형 몬스터에게 [[MARK]]. \n [[MARK]]이 생기면 E [[SKILL_RECAST]] 가능. \n [[SKILL_RECAST]] 하면 [[MARK]] 대상에게 [[DASH]]하여 동일한 효과. \n \n", 

          "R은 도착지점 설정. \n [[SHIELD]]를 얻고 [[UNSTOPPABLE]] [[DASH]] 시작. \n 경로의 모든 아군에게 [[MS_UP]]. \n 처음 마주치는 적 챔피언에게 [[HOMING]] [[DASH]]. \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]와 [[KNOCKBACK]]. \n \n \n",

          "낙마폼", 
          "[[BA]] 데미지 감소. ([[LEVEL_SCALE]] 비례) \n [[TO_ENEMY]] [[MS_UP]]. \n 주변 적 숫자에 비례 [[AR_MR_UP]] 증가.", 
          "Q는 전방에 [[PIERCE]] [[PROJECTILE]] 발사하여 [[DMG_PHYSICAL]]. \n 두번째 대상부터 데미지 감소 80% \n 적 챔피언, 에픽몬스터 적중 시 [[ENERGY_RESTORE]].", 
          "W는 동일.", 
          "E, R 스킬은 사용할 수 없음.",

        ],

        en: [
          "Kled / Skaarl (his mount) each have their own HP. \n Skaarl's HP is always reduced first. \n When Skaarl's HP reaches 0, Kled dismounts. ([[TRANSFORM]]) \n At that moment, [[UNTARGETABLE]] and [[TOWER_DODGE]].",
          "Filling Courage ([[ENERGY_SCALE]]) to 100 in Dismounted form remounts. ([[TRANSFORM]]) \n Remount [[COOLDOWN]] is 30s. \n Dismounting again prevents Courage from filling during the [[COOLDOWN]]. \n Courage gain details are listed in the TMI below. \n \n \n",

          "Mounted Form",
          "Q fires a [[PROJECTILE]]. \n On hit, deals [[DMG_PHYSICAL]] and applies [[TETHER]]. \n  When [[TETHER]] triggers, deals [[DMG_PHYSICAL]] plus [[GRAB]] and [[SLOW]]. \n \n",

          "W activates on a [[BA]] attack. \n Grants 3 [[BUFF_STACK]] stacks and [[AS_UP]]. \n When the 3rd stack is consumed, \n deals [[DMG_PHYSICAL]] based on [[TARGET_MAXHP_SCALE]].",
          "[[COOLDOWN]] starts when the [[BUFF_STACK]] expires. \n While on [[COOLDOWN]], each [[BA]] attack grants 0.5s [[CDR]] \n vs champions, 1.5s [[CDR]]. \n \n",

          "E [[DASH]]es, dealing [[DMG_PHYSICAL]] along the path. \n Hitting a champion or large jungle monster grants [[MS_UP]]. \n Applies [[MARK]] to the first champion or large monster hit. \n Once [[MARK]] is applied, E can be [[SKILL_RECAST]]. \n [[SKILL_RECAST]]ing [[DASH]]es to the [[MARK]]ed target with the same effects. \n \n",

          "R sets a destination. \n Gains [[SHIELD]] and starts an [[UNSTOPPABLE]] [[DASH]]. \n Grants [[MS_UP]] to all allies along the path. \n [[HOMING]] [[DASH]]es to the first enemy champion encountered. \n Deals [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]] and [[KNOCKBACK]]s. \n \n \n",

          "Dismounted Form",
          "[[BA]] damage reduced. (based on [[LEVEL_SCALE]]) \n [[MS_UP]] [[TO_ENEMY]]. \n [[AR_MR_UP]] increases based on the number of nearby enemies.",
          "Q fires a [[PIERCE]] [[PROJECTILE]] forward, dealing [[DMG_PHYSICAL]]. \n Damage reduced by 80% from the second target onward \n Hitting an enemy champion or epic monster grants [[ENERGY_RESTORE]].",
          "W is unchanged.",
          "E and R cannot be used.",

        ]

      },

      note2: {
        ko: [
         "용기 회복([[ENERGY_RESTORE]]) 방법 \n 챔피언 [[BA]] 공격 시 15 \n 챔피언에게 낙마 Q 적중 시 25 \n 에픽 몬스터 [[BA]] 공격 시 5 \n 에픽몬스터에게 낙마 Q 적중 시 12.5 \n 미니언 [[ON_KILL]] 5", 
         "승마폼에 [[MAX_HP_UP]]는 스칼의 체력에 적용.", 
         "재탑승할 때 [[GW]] 영향 받지 않음.", 
         "낙마 Q는 [[TRANSFORM]] 시 [[RECHARGE]] 2회 획득.", 
         "스칼 체력은 400~1400 ([[LEVEL_SCALE]] 비례). \n 재탑승 후 30초 동안은 용기([[ENERGY_SCALE]]) 획득 불가"
      ],
        en: [
         "How to gain Courage ([[ENERGY_RESTORE]]) \n [[BA]] attack on a champion: 15 \n Dismounted Q hit on a champion: 25 \n [[BA]] attack on an epic monster: 5 \n Dismounted Q hit on an epic monster: 12.5 \n Minion [[ON_KILL]]: 5",
         "In Mounted form, [[MAX_HP_UP]] applies to Skaarl's HP.",
         "Not affected by [[GW]] when remounting.",
         "Dismounted Q gains 2 [[RECHARGE]] charges on [[TRANSFORM]].",
         "Skaarl's HP is 400~1400 (based on [[LEVEL_SCALE]]). \n Cannot gain Courage ([[ENERGY_SCALE]]) for 30s after remounting"
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 125,
    16: 110,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. forms.ts 기준 base=승마, alt=낙마.
  // 승마 Q/W/E/R은 DDragon(ko_KR, 16.20.1) 원문, 낙마 Q와 P는 CDragon ko_kr lol.stringtable.json의
  // spell_kledriderq_tooltip / spell_kledpassive_tooltip(인게임 원문). 폼 탭으로 나뉘므로 원문의
  // "탑승 시:"/"미탑승 시:" Q 접두어는 생략. 낙마 E/R은 위키 본문("cannot cast his other abilities") 기준 사용 불가 문구를 앞에 둠.
  // 수치는 공식 위키(V26.21)로 채움(CDragon 게임 데이터 kled.bin.json과 일치 확인).
  skillTooltip: {
    base: {
      P: {
        ko: "승마폼 : 클레드 대신 스칼이 피해를 입습니다. 스칼의 체력이 소진되면 클레드가 스칼에게서 내립니다. (낙마폼 [[TRANSFORM]])",
        en: "Mounted Form: Skaarl takes damage instead of Kled. When Skaarl's HP is depleted, Kled dismounts. (Dismounted Form [[TRANSFORM]])",
      },
      Q: {
        ko: "클레드가 밧줄에 묶인 덫을 던져 30/55/80/105/130(+60% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 첫 번째로 맞힌 적 챔피언이나 대형 정글 몬스터를 붙잡습니다. ([[TETHER]]) \n \n 클레드가 1.75초 동안 붙잡은 적과 근거리를 유지하면, \n 적을 끌어당기며([[GRAB]]) 60/110/160/210/260(+120% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 2.5초 동안 30/35/40/45/50% [[SLOW]]시킵니다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
        en: "Kled throws a bear trap on a rope, dealing 30/55/80/105/130 (+60% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]], \n and latches onto the first enemy champion or large jungle monster hit. ([[TETHER]]) \n \n If Kled stays near the latched enemy for 1.75 seconds, \n he yanks them in ([[GRAB]]), dealing 60/110/160/210/260 (+120% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and [[SLOW]]ing them by 30/35/40/45/50% for 2.5 seconds. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
      },
      W: {
        ko: "[[PASSIVE_BONUS]]: 클레드가 다음 [[BA]] 공격 시 네 번의 [[BA]] 공격 시 또는 4초 동안 [[AS_SCALE]]가 150% 증가합니다. \n \n 네 번째로 적중한 공격은 20/30/40/50/60 + [[TARGET_MAXHP_SCALE]] 비례의 4.5/5/5.5/6/6.5%(+추가 [[AD_SCALE]] 100당 2%)(+[[SELF_BONUS_HP_SCALE]] 100당 0.4%)에 해당하는 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: On Kled's next [[BA]] attack, his [[AS_SCALE]] increases by 150% for four [[BA]] attacks or 4 seconds. \n \n The fourth hit deals an additional 20/30/40/50/60 + 4.5/5/5.5/6/6.5% (+2% per 100 bonus [[AD_SCALE]]) (+0.4% per 100 [[SELF_BONUS_HP_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_PHYSICAL]]. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
      },
      E: {
        ko: "클레드가 [[DASH]]하여 경로 상에 있는 적들에게 35/60/85/110/135(+55% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 미니언과 작은 몬스터를 자신 앞으로 끌어당깁니다. \n \n 이 스킬이 적 챔피언이나 대형 정글 몬스터에게 적중하면 1초 동안 클레드의 [[MS_SCALE]]가 50% 증가합니다. \n 3초 내에 스킬을 [[SKILL_RECAST]]하면 같은 대상에게 다시 [[DASH]]합니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
        en: "Kled [[DASH]]es, dealing 35/60/85/110/135 (+55% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies along the path, \n and pulls minions and small monsters in front of him. \n \n If this skill hits an enemy champion or large jungle monster, Kled's [[MS_SCALE]] increases by 50% for 1 second. \n [[SKILL_RECAST]]ing within 3 seconds [[DASH]]es to the same target again. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
      },
      R: {
        ko: "클레드가 목표 지점으로 [[DASH]]합니다. [[DASH]] 경로 위에 있는 아군은 [[MS_SCALE]]가 빨라집니다. \n 클레드는 돌진하는 동안 최대 200/300/400(+300% 추가 [[AD_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 얻습니다. \n 이 보호막은 돌진이 끝나고 2초 후까지 유지됩니다. \n \n 스칼은 경로상의 첫 번째 적 챔피언에게 돌격해, \n [[TARGET_MAXHP_SCALE]] 비례의 4/6/8%(+추가 [[AD_SCALE]] 100당 3%) ~ 12/18/24%(+추가 [[AD_SCALE]] 100당 9%)에 해당하는 [[DMG_MAGIC]](이동 거리에 비례)를 입히고, 잠시 뒤로 [[KNOCKBACK]]시킵니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "Kled [[DASH]]es to a target location. Allies along the [[DASH]] path gain increased [[MS_SCALE]]. \n While charging, Kled gains a [[SHIELD]] that absorbs up to 200/300/400 (+300% bonus [[AD_SCALE]]) damage. \n The shield lasts until 2 seconds after the charge ends. \n \n Skaarl rams the first enemy champion in the path, \n dealing [[DMG_MAGIC]] equal to 4/6/8% (+3% per 100 bonus [[AD_SCALE]]) ~ 12/18/24% (+9% per 100 bonus [[AD_SCALE]]) of [[TARGET_MAXHP_SCALE]] (based on distance traveled), and briefly [[KNOCKBACK]]s them. \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },

    alt: {
      P: {
        ko: "낙마폼 : 낙마폼에서 클레드의 [[BA]]는 챔피언에게 15/10/5/0%([[LEVEL_SCALE]] 비례) 감소한 피해를 입힙니다. \n \n [[TO_ENEMY]] [[MS_SCALE]]가 70~155([[LEVEL_SCALE]] 비례) 증가합니다. \n 또한 4(+[[SELF_BONUS_HP_SCALE]] 비례의 1%)의 추가 [[AR_SCALE]] 및 [[MR_SCALE]]을 얻으며, 이 수치는 주변 적 챔피언 하나당 30% 증가해 최대 10(+[[SELF_BONUS_HP_SCALE]] 비례의 2.5%)까지 증가합니다. \n \n 클레드의 Q 스킬이 변경되어 전방에 총을 발사하고 뒤로 [[DASH]]합니다. \n E, R 스킬은 사용할 수 없습니다. \n \n 낙마폼 클레드가 챔피언을 공격하면 15의 용기([[ENERGY_SCALE]]), \n 에픽 몬스터와 구조물을 공격하면 5의 용기 \n 미니언을 처치하면 5의 용기를 얻습니다. \n 용기가 최대로 쌓이면 클레드가 30초에 한 번씩 ([[COOLDOWN]]) 스칼 체력의 40/50/60/70%([[LEVEL_SCALE]] 비례)만큼을 가지고 스칼 위에 다시 탑승합니다. (승마폼 [[TRANSFORM]])",
        en: "Dismounted Form: While dismounted, Kled's [[BA]]s deal 15/10/5/0% (based on [[LEVEL_SCALE]]) reduced damage to champions. \n \n His [[MS_SCALE]] [[TO_ENEMY]] increases by 70~155 (based on [[LEVEL_SCALE]]). \n He also gains 4 (+1% of [[SELF_BONUS_HP_SCALE]]) bonus [[AR_SCALE]] and [[MR_SCALE]], increased by 30% per nearby enemy champion, up to 10 (+2.5% of [[SELF_BONUS_HP_SCALE]]). \n \n Kled's Q changes to fire a gun forward and [[DASH]] backward. \n E and R cannot be used. \n \n While dismounted, Kled gains 15 Courage ([[ENERGY_SCALE]]) from attacking champions, \n 5 Courage from attacking epic monsters and structures, \n and 5 Courage from killing minions. \n At max Courage, Kled remounts Skaarl once every 30 seconds ([[COOLDOWN]]) with 40/50/60/70% (based on [[LEVEL_SCALE]]) of Skaarl's HP. (Mounted Form [[TRANSFORM]])",
      },
      Q: {
        ko: "클레드가 산탄총을 발사하여 35/50/65/80/95(+65% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히며 뒤로 밀려납니다. ([[DASH]]) \n 두 번째로 적중한 탄환부터 피해량이 20%로 감소합니다. \n \n 적 챔피언이나 에픽 몬스터가 탄환에 맞을 때마다 스칼의 용기(P)가 회복됩니다. ([[ENERGY_RESTORE]]) \n \n 18/16/14/12/10초의 [[RECHARGE]] [[COOLDOWN]]. (최대 2회) \n 단, [[RECHARGE]]이 남아 있어도 3초의 고정 [[COOLDOWN]]으로 연속 사용 불가.",
        en: "Kled fires his shotgun, dealing 35/50/65/80/95 (+65% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and getting knocked back. ([[DASH]]) \n From the second pellet hit onward, damage is reduced to 20%. \n \n Each time an enemy champion or epic monster is hit by a pellet, Skaarl's Courage (P) is restored. ([[ENERGY_RESTORE]]) \n \n 18/16/14/12/10 second [[RECHARGE]] [[COOLDOWN]]. (Max 2 charges) \n However, even with [[RECHARGE]] charges left, a fixed 3 second [[COOLDOWN]] prevents consecutive casts.",
      },
      W: {
        ko: "[[PASSIVE_BONUS]]: 클레드가 다음 [[BA]] 공격 시 네 번의 [[BA]] 공격 시 또는 4초 동안 [[AS_SCALE]]가 150% 증가합니다. \n \n 네 번째로 적중한 공격은 20/30/40/50/60 + [[TARGET_MAXHP_SCALE]] 비례의 4.5/5/5.5/6/6.5%(+추가 [[AD_SCALE]] 100당 2%)(+[[SELF_BONUS_HP_SCALE]] 100당 0.4%)에 해당하는 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: On Kled's next [[BA]] attack, his [[AS_SCALE]] increases by 150% for four [[BA]] attacks or 4 seconds. \n \n The fourth hit deals an additional 20/30/40/50/60 + 4.5/5/5.5/6/6.5% (+2% per 100 bonus [[AD_SCALE]]) (+0.4% per 100 [[SELF_BONUS_HP_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_PHYSICAL]]. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
      },
      E: {
        ko: "낙마 상태에서는 사용할 수 없습니다.",
        en: "Cannot be used while dismounted.",
      },
      R: {
        ko: "낙마 상태에서는 사용할 수 없습니다.",
        en: "Cannot be used while dismounted.",
      },
    },
  },

};

export default kled;
