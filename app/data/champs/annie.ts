import type { ChampData } from "../interactions/types";

const annie: ChampData = {
  id: "annie",
  skills: {
    P: ["ST_CONDITIONAL", "STUN"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH",],
    E: ["E_FLASH", "MS_UP", "SHIELD"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["MR_PEN"] },
      { label: { ko: "R 엑티브", en: "R Active"  }, tags: ["R_FLASH", "SUMMON", "SEPARATOR", "ALLY_TP_OK"] },
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
    P: ["BUFF_INTERACT", "Q", "W", "E", "R"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SINGLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "STUN"],
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "STUN"],

    E: { phases: [
      { label: { ko: "E 보호막", en: "E Shields" }, tags: ["TARGETED", "MS_UP", "SHIELD"] },
      { label: { ko: "E 반사피해", en: "E Thorns"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },

    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "MR_PEN"] },
      { label: { ko: "티버 소환", en: "Tibbers Summon" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SUMMON", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "STUN", "SEPARATOR", "ALLY_TP_OK"] },
      { label: { ko: "티버", en: "Tibbers"  }, tags: ["DOT", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬을 사용하면 [[BUFF_STACK]] 1개 획득. \n 4개 일 때 다음 Q, W, R 스킬이 [[EMPOWERED]]되어 [[STUN]] 추가. \n \n",

          "Q는 [[TARGETED]] [[PROJECTILE]] 발사하여 [[DMG_MAGIC]].\n 처치 시 [[CDR]] 50%, [[MANA_RESTORE]] 100%. \n [[EMPOWERED]]되면 [[STUN]] 추가. \n \n",

          "W는 원뿔 [[AOE]] [[DMG_MAGIC]]. \n [[EMPOWERED]]되면 [[AOE]] [[STUN]] 추가. \n \n",

          "E는 [[SHIELD]]와 [[MS_UP]]. \n [[SHIELD]]가 남아있을 때 대상당 단 한 번의 반사 [[DMG_MAGIC]]. \n 티버가 [[SUMMON]]되어 있다면 티버에게도 [[SHIELD]] 추가. \n \n",

          "R의 [[PASSIVE_BONUS]]는 [[MR_PEN]].",
          
          "R은 티버 [[SUMMON]]. \n [[SUMMON]]될 때 [[AOE]] [[DMG_MAGIC]]. \n 티버는 주변 [[AOE]] [[DOT]] [[DMG_MAGIC]]와 공격을 할 수 있음. ", 
          "1. 티버가 [[SUMMON]]될 때 \n 2. 애니가 [[STUN]]을 걸 때 \n 3. 애니가 죽을 때 \n 티버가 격노하여 [[SELF_MISSING_HP_SCALE]] 비례 [[HEAL]] 50%, [[AS_UP]], [[MS_UP]]."
        ],

        en: [
          "P gains 1[[BUFF_STACK]] per skill cast. \n At 4 stacks, the next Q/W/R becomes [[EMPOWERED]], adding [[STUN]]. \n \n",

          "Q fires a [[TARGETED]] [[PROJECTILE]], dealing [[DMG_MAGIC]].\n On kill, 50% [[CDR]] and 100% [[MANA_RESTORE]]. \n When [[EMPOWERED]], adds [[STUN]]. \n \n",

          "W deals cone-shaped [[AOE]] [[DMG_MAGIC]]. \n When [[EMPOWERED]], adds [[AOE]] [[STUN]]. \n \n",

          "E grants [[SHIELD]] and [[MS_UP]]. \n While the [[SHIELD]] holds, reflects [[DMG_MAGIC]] once per attacker. \n If Tibbers is [[SUMMON]]ed, he also gains the [[SHIELD]]. \n \n",

          "R's [[PASSIVE_BONUS]] is [[MR_PEN]].",

          "R [[SUMMON]]s Tibbers. \n Deals [[AOE]] [[DMG_MAGIC]] on [[SUMMON]]. \n Tibbers can attack and deals [[AOE]] [[DOT]] [[DMG_MAGIC]] to nearby enemies. ",
          "1. When Tibbers is [[SUMMON]]ed \n 2. When Annie lands a [[STUN]] \n 3. When Annie dies \n Tibbers enrages, healing 50% (scaling with [[SELF_MISSING_HP_SCALE]]), and gaining [[AS_UP]] and [[MS_UP]].",
        ]

      },

      note2: {
        ko: [
        "E의 반사 데미지는 [[SHIELD]]가 남아있을 때, \n 적군이 공격하면 공격한 대상당 한 번씩 피해를 입힘. \n 상대 챔피언의 소환수가 공격하면 소환수 대상마다 적용 \n 주인 챔피언도 별개로 판정."
      ],
        en: ["E's reflected damage triggers once per attacker \n while the [[SHIELD]] holds. \n If an enemy champion's pet attacks, it applies per pet separately, \n and the owner champion is counted separately too."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

  // skillTooltip 근거: DDragon(16.18.1) tooltip은 P/Q/W/E/R 전부 vars/effectBurn이
  // 비어있어(전부 "0") 수치를 못 얻었고, P는 tooltip 문장 자체도 랭크별 수치가 없는
  // 일반화된 설명이라 위키(wiki.leagueoflegends.com/en-us/Annie, V26.04 기준)
  // 정보박스 수치로 전부 새로 채웠다(Notes 섹션 문구는 배제).
  // R의 cooldownBurn(130/115/100)만은 ultCooldown 필드와 일치해 정상이었으나,
  // 마찬가지로 vars/effectBurn이 비어 있어 위키로 나머지 수치를 채웠다.
  // R의 "Recast"는 위키에서도 Toggle/Channel이 아닌 일반 재시전으로 표기되고,
  // CC에 걸려도 시전 자체가 끊기는 채널링/토글 구조가 아니라 SKILL_RECAST로 표기했다.
  skillTooltip: {
    P: {
      ko: "Q/W/E/R 스킬을 시전할 때마다 광기 [[BUFF_STACK]]을 획득. (최대 4개) \n 4스택이 모이면 [[EMPOWERED]] 되어, \n 다음으로 적중시키는 Q/W/R이 스택을 모두 [[STACK_CONSUME]]하며 적중한 대상에게 1.25/1.5/1.75초([[LEVEL_SCALE]])의 [[STUN]]을 부여한다. \n \n 게임 시작 시와 [[REVIVE]] 시 스택이 가득 찬 상태로 시작하고 \n 사망 시 스택을 모두 잃는다.",
      en: "Gains 1[[BUFF_STACK]] of madness whenever she casts Q/W/E/R. (max 4) \n At 4 stacks, becomes [[EMPOWERED]], \n and the next Q/W/R to hit [[STACK_CONSUME]]s them all, [[STUN]]ning the target hit for 1.25/1.5/1.75 seconds([[LEVEL_SCALE]]). \n \n Starts with a full stack at game start and on [[REVIVE]], \n and loses all stacks on death.",
    },
    Q: {
      ko: "지정한 대상에게 불덩이를 날려 80/125/170/215/260(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. \n 이 공격으로 대상을 처치하면 [[MANA_RESTORE]]되고 [[CDR]] 50%.",
      en: "Hurls a fireball at the target, dealing 80/125/170/215/260(+80% [[AP_SCALE]]) [[DMG_MAGIC]]. \n If this kills the target, it [[MANA_RESTORE]]s and [[CDR]]s 50%.",
    },
    W: {
      ko: "애니 앞의 부채꼴 범위로 화염을 방출하여, 범위 내 모든 적에게 70/110/150/190/230(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다.",
      en: "Releases a cone of fire in front of Annie, dealing 70/110/150/190/230(+80% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies within.",
    },
    E: {
      ko: "아군 챔피언 대상(지정 대상이 없으면 자신)에게 3초간 60/95/130/165/200(+40% [[AP_SCALE]])의 [[SHIELD]]와, 1.5초에 걸쳐 감소하는 20~50%([[LEVEL_SCALE]])의 [[MS_UP]]를 부여한다. \n \n 보호막이 유지되는 동안 [[SHIELD]] 대상을 공격하거나 스킬로 피해를 준 적에게는 적 1명당 최초 1회 25/35/45/55/65(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 돌려준다. \n 티버가 [[SUMMON]]되어 있다면 티버도 이 보호막 효과를 항상 함께 얻는다.",
      en: "Grants an allied champion target (herself if none chosen) a [[SHIELD]] of 60/95/130/165/200(+40% [[AP_SCALE]]) for 3 seconds, and 20~50%([[LEVEL_SCALE]]) [[MS_UP]] decaying over 1.5 seconds. \n \n While the shield holds, an enemy that attacks or deals skill damage to the [[SHIELD]]ed target takes 25/35/45/55/65(+40% [[AP_SCALE]]) [[DMG_MAGIC]] returned, once per enemy. \n If Tibbers is [[SUMMON]]ed, he always gains this shield effect too.",
    },
    R: {
      ko: "[[PASSIVE_BONUS]]로 [[MR_PEN]] 10/15/20%를 항상 얻는다. \n 지정 위치에 티버를 [[SUMMON]]해 주변 적에게 150/275/400(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 이후 최대 45초 동안 유지되는 티버가 0.25초마다 주변 [[AOE]] 모든 적에게 2/3/4(+1% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힌다. \n \n 티버는 [[SUMMON]] 되거나, 애니가 챔피언에게 [[STUN]]을 걸거나, \n 애니가 사망한 순간에 격노해 3초에 걸쳐 감소하는 275% [[AS_UP]]와 100% [[MS_UP]]를 얻는다. \n [[SKILL_RECAST]]으로 티버에게 이동 명령을 내릴 수 있음. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "As a [[PASSIVE_BONUS]], always gains 10/15/20% [[MR_PEN]]. \n [[SUMMON]]s Tibbers to the target location, dealing 150/275/400(+75% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies; for the next 45 seconds, the summoned Tibbers deals an additional 2/3/4(+1% [[AP_SCALE]]) [[DMG_MAGIC]] in an [[AOE]] around him to all enemies every 0.25 seconds. \n \n Tibbers becomes enraged when he is [[SUMMON]]ed, when Annie [[STUN]]s a champion, \n or the moment Annie dies, gaining 275% [[AS_UP]] and 100% [[MS_UP]] decaying over 3 seconds. \n [[SKILL_RECAST]] to issue Tibbers a move command. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default annie;
