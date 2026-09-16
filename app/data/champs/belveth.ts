import type { ChampData } from "../interactions/types";

const belveth: ChampData = {
  id: "belveth",
  skills: {
    P: ["ST_CONDITIONAL", "AS_UP", "GHOSTING"],
    Q: ["DASH", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],
    W: ["AIRBORNE", "SLOW"],
    E: ["DMG_REDUCE", "OMNIVAMP"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["DROP", "SEPARATOR", "PASSIVE_BONUS", "MARK"] },
      { label: { ko: "R 액티브", en: "R Active"  }, tags: ["SLOW", ] },
      { label: { ko: "R 본모습", en: "R True Form"  }, tags: ["BUFF_FORM", "MAX_HP_UP", "AS_UP", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "Q", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
      { label: { ko: "R 공허 빨판상어 소환", en: "Summon Void Remora" }, tags: ["ST_CONDITIONAL", "SUMMON", "SEPARATOR", "ALLY_TP_OK"] },
    ] },
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
      { label: { ko: "P 패시브", en: "P Passive" }, tags: ["STACKING", "AS_UP"] },
      { label: { ko: "P 버프스택", en: "P Buff Stacks" }, tags: ["ST_CONDITIONAL", "AS_UP", "GHOSTING"] },
    ] },

    Q: ["DMG_PHYSICAL", "DASH", "AOE", "RECHARGE", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],

    W: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "AOE", "AIRBORNE", "SLOW"],
    
    E: ["DMG_PHYSICAL", "SKILL_CHANNEL", "NON_PROJECTILE", "SINGLE", "HOMING", "CANCELLABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_REDUCE", "OMNIVAMP"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["DROP", "SEPARATOR", "PASSIVE_BONUS", "MARK", "DMG_TRUE"] },
      { label: { ko: "R 액티브", en: "R Active"  }, tags: ["ST_CONDITIONAL", "DMG_TRUE", "TIMING_AFTERCAST", "LOCKED", "AOE", "SLOW", "SEPARATOR", "MOBILITY"] },
      { label: { ko: "R 본모습", en: "R True Form"  }, tags: ["BUFF_FORM", "MAX_HP_UP", "AS_UP", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "Q", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
      { label: { ko: "R 공허 빨판상어 소환", en: "R Summon Void Remora" }, tags: ["ST_CONDITIONAL", "SUMMON", "DMG_PHYSICAL", "SEPARATOR", "ALLY_TP_OK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 연보라 [[STACKING]]과 스킬 사용 시 [[BUFF]]효과로 나뉨.",

          "연보라 [[STACKING]]은 \n 대형 정글, 오브젝트, 대포를 3초 이내 [[ON_TAKEDOWN]] 시 1개. \n 챔피언은 2개 획득. \n [[STACKING]]당 영구적으로 [[AS_UP]]. \n 이 효과는 [[AS_SCALE]] 최대 상한을 초과할 수 있음.",

          "[[BUFF]] 효과는 \n 스킬 사용 시 [[AS_UP]], [[GHOSTING]]. \n \n",

          "Q는 ↗,↘,↙,↖ 방향으로 [[DASH]]하여 [[DMG_PHYSICAL]]. \n 방향마다 [[COOLDOWN]]이 따로 존재. \n 추가 [[AS_SCALE]]에 비례한 [[CDR]]. \n \n", 

          "W는 전방 [[AOE]] [[DMG_MAGIC]], [[AIRBORNE]], [[SLOW]]. \n 적 챔피언을 맞히면 \n 맞힌 방향의 Q [[CDR_RESET]]. \n \n", 

          "E는 제자리에서 [[SKILL_CHANNEL]] 공격과 [[DMG_REDUCE]] 획득. \n [[AOE]] 안의 체력이 가장 낮은 챔피언을 우선 [[ON_HIT]] 공격. \n 공격 횟수는 총 6회 + 추가 [[AS_SCALE]] 비례. \n 각 공격은 [[LIFESTEAL]]과 [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_PHYSICAL]]. \n \n",

          "R의 [[PASSIVE_BONUS]]는 \n 적 공격 시 5초간 [[MARK]]. \n 이미 [[MARK]]이 있는 대상이라면 [[DMG_TRUE]] 추가와 \n [[MARK]] [[DURATION_RESET]]. \n [[DMG_TRUE]]는 무한히 중첩 가능. \n (에픽 몬스터는 최대 8중첩)",  
          "R의 공허 산호는 \n 챔피언이나 에픽몬스터 [[ON_TAKEDOWN]] 시 [[DROP]]. \n (바론·전령·유충은 [[EMPOWERED]]된 [[DROP]])", 
          "R은 근처에 공허 산호([[DROP]])가 있어야 [[ACTIVATION_CONDITION]]. \n R을 [[DROP]]에 사용하면 [[DASH]]하여 [[AOE]] [[SLOW]]. \n 잠시 후 [[DETONATE]]하여 [[AOE]] [[DMG_TRUE]]와 본모습으로 [[TRANSFORM]].",
          "본모습은 [[MAX_HP_UP]], [[RANGE_UP]], [[AS_UP]]. \n 이미 본모습일 때 R을 사용하면 \n [[MAX_HP_UP]] 대신 [[HEAL]]. \n 본모습은 45초 지속시간. \n 연보라 [[STACKING]] 40개에 90초, 80개에 무제한. \n 본모습은 사망 시 해제.",
          "[[EMPOWERED]]된 [[DROP]](바론·전령·유충)으로 본모습이 되면 \n 주변에서 처치된 미니언(아군·적 모두)이 \n 공허 빨판 상어로 [[SUMMON]].",
        ],

        en: [
          "P is split into Lavender [[STACKING]] and a [[BUFF]] effect on skill use.",

          "Lavender [[STACKING]] \n grants 1 stack for [[ON_TAKEDOWN]] on large jungle monsters, objectives, or cannon minions within 3 seconds. \n Champions grant 2 stacks. \n Each [[STACKING]] permanently grants [[AS_UP]]. \n This effect can exceed the normal [[AS_SCALE]] cap.",
          "The [[BUFF]] effect \n grants [[AS_UP]] and [[GHOSTING]] on skill use. \n \n",

          "Q [[DASH]]es in one of four directions (↗↘↙↖) dealing [[DMG_PHYSICAL]]. \n Each direction has its own separate [[COOLDOWN]]. \n Grants [[CDR]] scaling with bonus [[AS_SCALE]]. \n \n",

          "W deals [[AOE]] [[DMG_MAGIC]] in front, applying [[AIRBORNE]] and [[SLOW]]. \n Hitting an enemy champion \n [[CDR_RESET]]s the Q on the direction it was hit from. \n \n",

          "E [[SKILL_CHANNEL]]s in place, attacking and gaining [[DMG_REDUCE]]. \n Prioritizes [[ON_HIT]] attacks on the lowest-health champion within the [[AOE]]. \n Attacks 6 times total, plus more scaling with bonus [[AS_SCALE]]. \n Each attack applies [[LIFESTEAL]] and [[DMG_PHYSICAL]] scaling with [[TARGET_MISSING_HP_SCALE]]. \n \n",

          "R's [[PASSIVE_BONUS]] \n applies a 5 second [[MARK]] when attacking an enemy. \n If the target is already [[MARK]]ed, adds bonus [[DMG_TRUE]] and \n [[DURATION_RESET]]s the [[MARK]]. \n The [[DMG_TRUE]] can stack infinitely. \n (Capped at 8 stacks against epic monsters)",
          "R's Void Coral \n [[DROP]]s on [[ON_TAKEDOWN]] of a champion or epic monster. \n (Baron/Herald/Voidgrubs leave an [[EMPOWERED]] [[DROP]])",
          "R meets its [[ACTIVATION_CONDITION]] only when a Void Coral ([[DROP]]) is nearby. \n Using R on the [[DROP]] [[DASH]]es to it, applying [[AOE]] [[SLOW]]. \n Shortly after, it [[DETONATE]]s for [[AOE]] [[DMG_TRUE]] and [[TRANSFORM]]s her into true form.",
          "True form grants [[MAX_HP_UP]], [[RANGE_UP]], and [[AS_UP]]. \n Using R again while already in true form \n grants [[HEAL]] instead of [[MAX_HP_UP]]. \n True form lasts 45 seconds. \n 90 seconds at 40 Lavender [[STACKING]], unlimited at 80. \n True form ends on death.",
          "Entering true form via an [[EMPOWERED]] [[DROP]] (Baron/Herald/Voidgrubs) \n causes nearby minions that die (both allied and enemy) \n to be [[SUMMON]]ed as Void Remoras.",
        ]

      },

      note2: {
        ko: [
        "P의 연보라 [[STACKING]]은 적 챔피언, 에픽 [[ON_TAKEDOWN]] 시 2스택. \n 대포, 대형 정글 [[ON_TAKEDOWN]] 시 1스택. \n R로 공허 산호([[DROP]])를 주울 때 1스택.", 
        "E는 시야에 보이지 않아도 공격. \n [[INVISIBILITY]]으로 보이지 않아도 공격.", 
        "R은 [[SKILL_CHANNEL]]이 아닌 [[TIMING_AFTERCAST]]이 긴것.",
        "본모습일 때 연보라 [[STACKING]]을 늘려서 지속시간이 늘어 난다면 \n 다음 R의 [[TRANSFORM]] 부터 적용.", 
        "연보라 [[STACKING]]이 80개 이상일 때 \n 본모습 지속시간이 무제한이지만 사망 시 해제."
      ],
        en: [
          "P's Lavender [[STACKING]]: 2 stacks on [[ON_TAKEDOWN]] of an enemy champion or epic monster. \n 1 stack on [[ON_TAKEDOWN]] of a cannon minion or large jungle monster. \n 1 stack when picking up Void Coral ([[DROP]]) with R.",
          "E can attack targets even without vision of them. \n It can attack targets hidden by [[INVISIBILITY]] too.",
          "R has a long [[TIMING_AFTERCAST]], not a [[SKILL_CHANNEL]].",
          "If Lavender [[STACKING]] increases true form duration while already in true form, \n it applies starting from the next R [[TRANSFORM]].",
          "At 80+ Lavender [[STACKING]], \n true form duration is unlimited, but it ends on death.",
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

  // skillTooltip 근거: DDragon P/Q/W/E/R 전부 vars가 빈 배열이라 위키
  // (wiki.leagueoflegends.com/en-us/Bel'Veth, V26.16 기준) 정보박스로 채웠다
  // (Notes 섹션 제외). ultCooldown이 0/0/0인 건 깨진 값이 아니라 실제로 맞는
  // 값으로 판단됨 — R은 랭크별 쿨타임이 아니라 보주(Void Coral)를 소모해야만
  // 쓸 수 있는 자원 기반 스킬이라 DDragon cooldownBurn도 랭크 무관 고정 "1"
  // (판정용 딜레이일 뿐)이었다. 그래서 R에 {{ultCooldown}}을 쓰지 않고 실제
  // 발동 조건을 그대로 서술했다(anivia처럼 무조건 위키 값으로 덮어쓰지 않음).
  // 진화형 지속시간의 45→90초 전환 스택 수는 위키에도 명시가 없어("45/90/
  // 무한, 라벤더 스택 비례"라고만 나옴) 80스택 영구 전환만 정확히 반영했다.
  skillTooltip: {
    P: {
      ko: "벨베스가 대형 미니언·몬스터 처치하거나, 챔피언을(3초 이내) [[ON_TAKEDOWN]] 시 [[STACKING]](연보라)을 얻는다(대형 미니언·몬스터 1개, 챔피언·에픽 몬스터 2개, 상한 없음). \n 1개당 [[LEVEL_SCALE]] 0.1~2%의 [[AS_UP]]를 얻으며, 최대 [[AS_SCALE]] 상한을 무시하고 쌓인다. \n \n 스킬을 시전할 때마다 3초간 [[GHOSTING]] 상태와 20%의 [[AS_UP]]를 얻으며, 재시전 시 [[DURATION_RESET]].",
      en: "Bel'Veth gains [[STACKING]] (Lavender) for killing large minions/monsters or [[ON_TAKEDOWN]] of a champion (within 3 seconds) (1 for large minions/monsters, 2 for champions/epic monsters, no cap). \n Each stack grants [[LEVEL_SCALE]] 0.1~2% [[AS_UP]], stacking past the normal [[AS_SCALE]] cap. \n \n Casting any skill grants [[GHOSTING]] and 20% [[AS_UP]] for 3 seconds, [[DURATION_RESET]]ing on recast.",
    },
    Q: {
      ko: "벨베스가 지정 방향으로 [[DASH]]하며 경로상의 적에게 12/14/16/18/20(+105% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힌다.(몬스터 상대로는 70의 고정 피해 추가) \n \n 4방향(대각선) 각각 독립적인 [[COOLDOWN]]을 갖는다. \n 추가 [[AS_SCALE]]에 비례하여 [[COOLDOWN]]이 함께 줄어든다.\n \n 16/15/14/13/12초의 [[COOLDOWN]]. ",
      en: "Bel'Veth [[DASH]]es in the chosen direction, dealing 12/14/16/18/20 (+105% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies along the path. (Deals an additional flat 70 damage against monsters) \n \n Each of the 4 diagonal directions has an independent [[COOLDOWN]]. \n The [[COOLDOWN]] also decreases with bonus [[AS_SCALE]]. \n \n 16/15/14/13/12 second [[COOLDOWN]].",
    },
    W: {
      ko: "벨베스가 꼬리를 내리쳐 적에게 80/140/200/260/320(+150% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 0.6/0.7/0.8/0.9/1초간 [[AIRBORNE]]시키며 2초간 30%만큼 [[SLOW]]시킨다. \n 적 챔피언을 맞히면 그 방향의 [[Q]]가 [[CDR_RESET]]된다. \n \n 12/11/10/9/8초의 [[COOLDOWN]].",
      en: "Bel'Veth slams her tail, dealing 80/140/200/260/320 (+150% [[AP_SCALE]]) [[DMG_MAGIC]] and applying [[AIRBORNE]] for 0.6/0.7/0.8/0.9/1 second and [[SLOW]] by 30% for 2 seconds. \n Hitting an enemy champion [[CDR_RESET]]s the [[Q]] for that direction. \n \n 12/11/10/9/8 second [[COOLDOWN]].",
    },
    E: {
      ko: "벨베스가 1.5초간 제자리에서 [[SKILL_CHANNEL]]하여, 20/30/40/50/60%의 [[DMG_REDUCE]]를 획득하고. \n [[AOE]] 안의 체력이 가장 낮은 적을 6회(추가 [[AS_SCALE]] 40%당 +1회) 공격한다. 공격마다 20/25/30/35/40%의 [[LIFESTEAL]]과 (10/12/14/16/18~20/24/28/32/36(+12~24% [[AD_SCALE]]) ([[TARGET_MISSING_HP_SCALE]] 비례)의 [[DMG_PHYSICAL]]를 입힌다. \n ([[LIFESTEAL]], [[DMG_PHYSICAL]]은 몬스터 상대로 2배) \n 다른 행동을 하면 자동으로 종료된다. \n \n 24/21/18/15/12초의 [[COOLDOWN]].",
      en: "Bel'Veth [[SKILL_CHANNEL]]s in place for 1.5 seconds, gaining 20/30/40/50/60% [[DMG_REDUCE]]. \n Attacks the lowest-health enemy within the [[AOE]] 6 times (+1 per 40% bonus [[AS_SCALE]]). Each attack applies 20/25/30/35/40% [[LIFESTEAL]] and deals 10/12/14/16/18~20/24/28/32/36 (+12~24% [[AD_SCALE]]) [[DMG_PHYSICAL]] (scaling with [[TARGET_MISSING_HP_SCALE]]). \n ([[LIFESTEAL]] and [[DMG_PHYSICAL]] are doubled against monsters) \n Ends automatically if another action is taken. \n \n 24/21/18/15/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "R [[PASSIVE_BONUS]]는 평타 적중 시 대상에게 5초간 [[MARK]]을 걸고, [[MARK]]된 대상에게 공격마다 2/4/6(+3% 추가 [[AD_SCALE]])의 [[DMG_TRUE]]를 입히며, [[MARK]]이 사라지기 전까지 이 중첩은 무한히 증가한다. \n (에픽 몬스터 상대로는 8스택 상한). \n 챔피언이나 에픽 몬스터를 처치하면 사체에서 15초간 유지되는 공허 산호를 [[DROP]]한다 (바론·전령·유충은 [[EMPOWERED]]된 [[DROP]]). \n \n R은 근처에 [[DROP]]이 있어야 [[ACTIVATION_CONDITION]] 된다. \n 지정한 [[DROP]]에 [[DASH]]하여 흡수한다. (존재하는 모든 [[DROP]]을 한 번에 흡수, 흡수한 개수만큼 연보라 [[STACKING]] 획득) \n 흡수하는 동안 주변 적을 경과 시간에 비례해 25~96%만큼 [[SLOW]]시킨 뒤 폭발해 150/200/250(+150% [[AP_SCALE]])(+[[TARGET_MISSING_HP_SCALE]] 20%)의 [[DMG_TRUE]]를 입힌다. \n(몬스터 상대로는 최대 1500 고정 상한). \n \n 이후 본모습 으로 [[TRANSFORM]]하여 지속시간은 연보라 [[STACKING]]에 비례한다. (기본 45초, 40스택에 90초, 80스택에 무한초) 동안 100/250/400(+150% 추가 [[AD_SCALE]])(+150% [[AP_SCALE]])의 [[MAX_HP_UP]], 25/75/125의 [[RANGE_UP]], 6/13/20%의 [[AS_UP]]를 얻으며 \n [[Q]]의 [[DASH]]으로 [[WALL_HOP]]를 할 수 있게 된다. \n \n 본모습 동안 추가로 [[DROP]]을 흡수하면 [[DURATION_EXT]] 되고 같은 [[MAX_HP_UP]] 대신 400만큼 [[HEAL]]된다. \n \n [[EMPOWERED]]된 [[DROP]]을 흡수했다면, 본모습인 동안 근처에서 죽는 미니언(아군·적 모두)이 공허 빨판 상어로 [[SUMMON]]된다.",
      en: "R's [[PASSIVE_BONUS]] applies a 5 second [[MARK]] to the target on basic attack hit, dealing 2/4/6 (+3% bonus [[AD_SCALE]]) [[DMG_TRUE]] per attack against [[MARK]]ed targets, stacking infinitely until the [[MARK]] expires. \n (Capped at 8 stacks against epic monsters). \n Killing a champion or epic monster drops a Void Coral from the corpse that lasts 15 seconds ([[EMPOWERED]] [[DROP]] from Baron/Herald/Voidgrubs). \n \n R meets its [[ACTIVATION_CONDITION]] only when a [[DROP]] is nearby. \n [[DASH]]es to the targeted [[DROP]] and absorbs it. (Absorbs every existing [[DROP]] at once, gaining Lavender [[STACKING]] equal to the number absorbed) \n While absorbing, [[SLOW]]s nearby enemies by 25~96% scaling with elapsed time, then explodes for 150/200/250 (+150% [[AP_SCALE]]) (+20% [[TARGET_MISSING_HP_SCALE]]) [[DMG_TRUE]]. \n (Capped at a flat 1500 against monsters). \n \n She then [[TRANSFORM]]s into true form, lasting a duration that scales with Lavender [[STACKING]] (45 seconds base, 90 seconds at 40 stacks, unlimited at 80 stacks), gaining 100/250/400 (+150% bonus [[AD_SCALE]]) (+150% [[AP_SCALE]]) [[MAX_HP_UP]], 25/75/125 [[RANGE_UP]], and 6/13/20% [[AS_UP]], \n and her [[Q]]'s [[DASH]] gains [[WALL_HOP]]. \n \n Absorbing another [[DROP]] during true form [[DURATION_EXT]]s it and grants 400 [[HEAL]] instead of [[MAX_HP_UP]] again. \n \n If an [[EMPOWERED]] [[DROP]] was absorbed, minions that die nearby (both allied and enemy) during true form are [[SUMMON]]ed as Void Remoras.",
    },
  },

};

export default belveth;
