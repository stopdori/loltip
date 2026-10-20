import type { ChampData } from "../interactions/types";

const kalista: ChampData = {
  id: "kalista",
  skills: {
    P: ["DASH", "WALL_HOP"],
    Q: ["Q_FLASH"],
    W: ["SUMMON", "ALLY_TP_OK"],
    E: ["SLOW", "SEPARATOR", "ON_KILL", "MANA_RESTORE", "CDR_RESET"],
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["OF_ALLY", "UNTARGETABLE", "TOWER_DODGE", "INVULNERABLE"] },
      { label: { ko: "R2", en: "R2" }, tags: ["AIRBORNE", "SEPARATOR", "OF_ALLY", "UNSTOPPABLE"] },
    ] },    
  },

  vision: { 
    P: [], 
    Q: [], 
    W: ["REVEALED"], 
    E: ["POSITION_REVEAL"], 
    R: [] 
  },

  gimmick: {
    P: ["DASH", "WALL_HOP"],

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "PIERCE"],

    W:    { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["SUMMON", "RECHARGE"] },
    ] },

    E:    { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "DEBUFF_STACK"] },
      { label: { ko: "E 뽑아 찢기", en: "E Rend" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "SEPARATOR", "ST_CONDITIONAL", "MANA_RESTORE", "CDR_RESET"] },
    ] },

    R:    { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["OF_ALLY", "UNTARGETABLE", "INVULNERABLE", "CC_CLEANSE"] },
      { label: { ko: "R2", en: "R2" }, tags: ["OF_ALLY", "UNTARGETABLE", "UNSTOPPABLE", "LUNGE", "WALL_HOP", "SEPARATOR", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "칼리스타는 아군 1명과 계약. \n 계약은 3분 이후로는 바꿀 수 없음. \n 계약하면 W의 [[PASSIVE_BONUS]]와 R [[ACTIVATION_CONDITION]].",

          "P의 효과로 [[BA]] 공격 후 이동하면 [[DASH]]. \n \n",

          "Q는 [[SINGLE]] [[DMG_PHYSICAL]] [[DEBUFF_STACK]] [[PROJECTILE]] 발사. \n [[ON_KILL]] [[PIERCE]]. \n 처치된 대상이 가지고 있던 [[DEBUFF_STACK]] 전이. \n \n",

          "W의 [[PASSIVE_BONUS]]는 \n 칼리와 계약자가 같은 대상을 [[BA]] 공격 시 \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]].",

          "W는 정찰병 [[SUMMON]]. \n 세 번 왕복 하거나 챔피언을 발견하면 \n 쫓아가서 [[REVEALED]]을 걸고 사라짐. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n [[BA]], [[Q]]의 창이 4초간 무제한 중첩.",

          "E는 사거리 안에 쌓인 창을 뽑어내어 \n 스택당 [[DMG_PHYSICAL]]와 [[SLOW]]. \n 적 하나라도 [[ON_KILL]] [[CDR_RESET]]와 [[MANA_RESTORE]]. \n \n",

          "R은 계약자를 칼리에게 끌어옴. \n 계약자는 걸려있던 CC가 해제되고 \n [[UNTARGETABLE]], [[INVULNERABLE]]으로 칼리스타에게 흡수.", 
          "R2는 계약자가 우클릭으로 지정하여 [[DASH]]. \n 적 챔피언과 부딪히면 [[AOE]] [[AIRBORNE]]. \n 계약자는 [[BA]] [[RANGE_SCALE]]만큼 뒤로 되돌아옴.",
        ],

        en: ["Kalista forms a pact with one ally. \n The pact cannot be changed after 3 minutes. \n The pact enables W's [[PASSIVE_BONUS]] and fulfills R's [[ACTIVATION_CONDITION]].",
          "With P's effect, moving after a [[BA]] makes Kalista [[DASH]]. \n \n",
          "Q fires a [[SINGLE]] [[DMG_PHYSICAL]] [[DEBUFF_STACK]] [[PROJECTILE]]. \n [[ON_KILL]], it [[PIERCE]]s. \n The [[DEBUFF_STACK]]s the killed target had are transferred. \n \n",
          "W's [[PASSIVE_BONUS]]: \n when Kalista and her Oathsworn [[BA]] the same target, \n deals [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]].",
          "W [[SUMMON]]s a sentinel. \n After three round trips or upon spotting a champion, \n it chases them, applies [[REVEALED]], and disappears. \n \n",
          "E's [[PASSIVE_BONUS]]: \n Spears from [[BA]]s and [[Q]] stack without limit for 4 seconds.",
          "E rips out the Spears stacked within range, \n dealing [[DMG_PHYSICAL]] and [[SLOW]] per stack. \n An [[ON_KILL]] on even one enemy grants [[CDR_RESET]] and [[MANA_RESTORE]]. \n \n",
          "R pulls the Oathsworn to Kalista. \n The Oathsworn's active CC is cleansed, \n and they are absorbed into Kalista while [[UNTARGETABLE]] and [[INVULNERABLE]].",
          "In R2, the Oathsworn right-clicks to choose where to [[DASH]]. \n On colliding with an enemy champion, [[AOE]] [[AIRBORNE]]. \n The Oathsworn bounces back by their [[BA]] [[RANGE_SCALE]]."
        ]

      },

      note2: {
        ko: ["P의 [[DASH]] 속도, 거리는 \n 칼리스타의 신발 상태와 \n [[AS_SCALE]], [[MS_SCALE]]에 따라 증가.", 
        "Q도 P의 [[DASH]] 발동 가능.", 
        "Q의 [[DEBUFF_STACK]] 전이 예시 \n 예) 0스택 일 때 미니언 세 마리를 처치하여 [[PIERCE]] 하고 \n 적 챔피언에 적중하면 4스택이 쌓임.", 
        "W 정찰병은 체력 2칸.",
        "E는 에픽 몬스터에게 피해 50%만 적용. \n 스택이 쌓인 적이 근처에 있을 때만 사용 가능.",
        "R을 사용했을 때 칼리스타가 죽어도 스킬은 유효.", 
        "R로 끌려오는 동안 계약자는 \n [[INVULNERABLE]], [[UNTARGETABLE]] 상태이며 CC가 해제됨. \n 계약자의 [[DASH]] 중에는 [[UNSTOPPABLE]].", 
        "R2는 계약자의 [[BA]] 사거리만큼 되돌아와서 \n 원거리 서폿이 [[DASH]]해도 꽤 안전. \n R로 사라진 아군의 스킬은 계속 유효하고(예 케넨R)\n사라 진 동안 [[INVULNERABLE]]처럼 죽지 않음, \n 계약자의 [[SKILL_CHANNEL]] 스킬은 다 완료하고 소환 됨."
      ],
        en: ["P's [[DASH]] speed and distance \n depend on Kalista's boots \n and increase with [[AS_SCALE]] and [[MS_SCALE]].",
          "Q can also trigger P's [[DASH]].",
          "Example of Q's [[DEBUFF_STACK]] transfer \n e.g.) At 0 stacks, killing three minions makes Q [[PIERCE]], and \n hitting an enemy champion then applies 4 stacks.",
          "W's sentinel has 2 health bars.",
          "E deals only 50% damage to epic monsters. \n Can only be used when an enemy with stacks is nearby.",
          "If Kalista dies after using R, the skill still works.",
          "While being pulled by R, the Oathsworn is \n [[INVULNERABLE]] and [[UNTARGETABLE]], and CC is cleansed. \n The Oathsworn is [[UNSTOPPABLE]] during their [[DASH]].",
          "R2 bounces the Oathsworn back by their [[BA]] range, \n so it's fairly safe even when a ranged support [[DASH]]es. \n Skills of the ally who vanished via R stay active (e.g., Kennen R)\nand while gone they don't die, like [[INVULNERABLE]]. \n The Oathsworn is summoned only after finishing any [[SKILL_CHANNEL]] skill."
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. P/Q/W/E/R 모두 DDragon(ko_KR, 16.20.1) 원문을
  // 뼈대로 씀(P 인게임 원문은 CDragon 문자열 테이블에서 해시 키로만 참조돼 찾을 수 없어
  // DDragon description 사용). 수치는 공식 위키(V26.16)로 채움(CDragon 게임 데이터
  // kalista.bin.json과 일치 확인). E 쿨타임은 DDragon cooldownBurn이 0이라 위키 값 사용.
  skillTooltip: {
    P: {
      ko: "칼리스타가 [[BA]]나 꿰뚫는 창(Q)의 준비 동작을 하는 동안 이동 명령을 하면, \n 칼리스타가 [[BA]]와 함께 해당 위치로 도약합니다. ([[DASH]])",
      en: "If Kalista issues a move command while winding up a [[BA]] or Pierce (Q), \n she lunges to that location along with the [[BA]]. ([[DASH]])",
    },
    Q: {
      ko: "칼리스타가 창을 던져 처음 적중한 대상에게 10/75/140/205/270(+105% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 대상 [[ON_KILL]] 창이 계속 뻗어나가 다음으로 적중한 대상에게 뽑아 찢기(E)의 중첩([[DEBUFF_STACK]])을 적용합니다. \n \n 칼리스타는 이 스킬을 사용한 후 전투 태세(P) 효과로 도약([[DASH]])할 수 있습니다. \n \n 9초의 [[COOLDOWN]].",
      en: "Kalista throws a spear, dealing 10/75/140/205/270 (+105% [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first target hit. \n [[ON_KILL]], the spear continues and applies Rend (E) stacks ([[DEBUFF_STACK]]) to the next target hit. \n \n After using this skill, Kalista can lunge ([[DASH]]) via Martial Poise (P). \n \n 9 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 칼리스타와 계약자가 같은 대상을 [[BA]] 공격 시, \n 칼리스타가 [[TARGET_MAXHP_SCALE]] 비례의 10/12/14/16/18%에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n [[ON_TARGET_CD]]은 10초이며 챔피언이 아닌 대상에게는 최대 100/125/150/175/200의 피해를 입힙니다. \n \n 사용 시: 칼리스타가 혼을 하나 보내 지정 영역을 정찰하게 합니다. ([[SUMMON]]) \n 혼은 세 번 왕복하고 사라지며, 발각된 챔피언은 4초 동안 모습이 드러납니다. ([[REVEALED]]) \n \n 90/80/70/60/50초의 [[RECHARGE]] [[COOLDOWN]]. (최대 2회) \n 단, [[RECHARGE]]이 남아 있어도 30초의 고정 [[COOLDOWN]]으로 연속 사용 불가.",
      en: "[[PASSIVE_BONUS]]: When Kalista and her Oathsworn [[BA]] the same target, \n Kalista deals [[DMG_MAGIC]] equal to 10/12/14/16/18% of [[TARGET_MAXHP_SCALE]]. \n The [[ON_TARGET_CD]] is 10 seconds, and it deals up to 100/125/150/175/200 damage to non-champions. \n \n Active: Kalista sends a soul to scout a target area. ([[SUMMON]]) \n The soul makes three round trips and disappears, and champions it spots are revealed for 4 seconds. ([[REVEALED]]) \n \n 90/80/70/60/50 second [[RECHARGE]] [[COOLDOWN]]. (Max 2 charges) \n However, even with [[RECHARGE]] charges left, a fixed 30 second [[COOLDOWN]] prevents consecutive use.",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 칼리스타의 창은 대상의 몸에 4초 동안 유지되며 무제한으로 중첩됩니다. ([[DEBUFF_STACK]]) \n \n 사용 시: 칼리스타가 근처 적에게 박힌 창을 뽑아내며, ([[STACK_CONSUME]]) \n 5/15/25/35/45(+70% [[AD_SCALE]])(+65% [[AP_SCALE]]) + 두 번째 창부터 창 하나당 7/14/21/28/35(+20/27.5/35/42.5/50% [[AD_SCALE]])(+50% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 적중당한 적은 2초 동안 10/18/26/34/42%(+[[AP_SCALE]] 100당 5%) [[SLOW]]됩니다. \n \n 이 스킬로 대상 [[ON_KILL]] 재사용 대기시간이 초기화되고, ([[CDR_RESET]]) 마나를 10/15/20/25/30 돌려받습니다. ([[MANA_RESTORE]]) \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Kalista's spears remain in targets for 4 seconds and stack without limit. ([[DEBUFF_STACK]]) \n \n Active: Kalista rips out the spears in nearby enemies, ([[STACK_CONSUME]]) \n dealing 5/15/25/35/45 (+70% [[AD_SCALE]]) (+65% [[AP_SCALE]]) + 7/14/21/28/35 (+20/27.5/35/42.5/50% [[AD_SCALE]]) (+50% [[AP_SCALE]]) per spear from the second spear onward as [[DMG_PHYSICAL]]. \n Enemies hit are [[SLOW]]ed by 10/18/26/34/42% (+5% per 100 [[AP_SCALE]]) for 2 seconds. \n \n If this skill gets an [[ON_KILL]], its cooldown is reset, ([[CDR_RESET]]) and 10/15/20/25/30 mana is refunded. ([[MANA_RESTORE]]) \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "계약: 아군을 선택하여 게임이 진행되는 동안 영혼을 결속하고, \n 감시하는 혼(W)의 [[PASSIVE_BONUS]]와 운명의 부름(R)을 사용할 수 있게 됩니다. \n \n 칼리스타가 계약자를 옆으로 끌어와 최대 4초간 [[STASIS]] 상태로 만듭니다. \n 계약자는 마우스를 클릭하여 지정한 위치로 날아갈 수 있습니다. ([[DASH]]) \n \n 적 챔피언과 부딪치면 멈추며, 주변 적들을 [[AIRBORNE]]시킵니다. \n 계약자는 챔피언과 부딪치면 최대 공격 사거리만큼 밀려납니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Pact: Choose an ally to bind souls with for the rest of the game, \n unlocking Sentinel (W)'s [[PASSIVE_BONUS]] and Fate's Call (R). \n \n Kalista pulls her Oathsworn to her side and puts them in [[STASIS]] for up to 4 seconds. \n The Oathsworn can click to fly to a target location. ([[DASH]]) \n \n They stop on colliding with an enemy champion, knocking nearby enemies [[AIRBORNE]]. \n On colliding with a champion, the Oathsworn is knocked back up to their max attack range. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default kalista;
