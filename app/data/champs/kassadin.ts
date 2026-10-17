import type { ChampData } from "../interactions/types";

const kassadin: ChampData = {
  id: "kassadin",
  skills: {
    P: ["MAGIC_DR", "GHOSTING"],
    Q: ["Q_FLASH", "MAGIC_SHIELD", "DISRUPT"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ON_HIT"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AA_RESET", "SEPARATOR", "RANGE_UP", "MANA_RESTORE"] },
    ] },
    
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["R_FLASH", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["MAGIC_DR", "GHOSTING"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR_NEWLINE", "SEPARATOR", "MAGIC_SHIELD", "DISRUPT"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ON_HIT", "DMG_MAGIC"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AA_RESET", "SEPARATOR", "DMG_MAGIC", "RANGE_UP", "MANA_RESTORE"] },
    ] },
    
    E: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    R: { phases: [
      { label: { ko: "R 준비 단계", en: "R Wind-up Phase" }, tags: ["TIMING_CAST", "SEPARATOR", "CC_BUFFER"] },
      { label: { ko: "R 블링크 단계", en: "R Blink Phase" }, tags: ["DMG_MAGIC", "AOE", "BUFF_STACK", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "PER_STACK", "DMG_MAGIC", "ADDITIONAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "카사딘은 항상 \n [[MAGIC_DR]]와 [[GHOSTING]]. \n \n",

          "Q는 [[TARGETED]] [[DISRUPT]] [[DMG_MAGIC]] [[PROJECTILE]] 발사. \n 카사딘은 [[MAGIC_SHIELD]] 획득. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[BA]]에 [[ON_HIT]] [[DMG_MAGIC]].",
          "W는 다음 [[BA]]를 [[EMPOWERED]]하여 [[RANGE_UP]]. \n 공격 시 [[DMG_MAGIC]]와 잃은 마나 비례 [[MANA_RESTORE]]. \n [[ON_CHAMP_HIT]] 마나 회복량 5배. \n [[AA_RESET]] 가능. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n 카사딘 근처의 모든 챔피언이 스킬을 사용하면 [[CDR]].",
          "E는 전방 부채꼴 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n \n",

          "R은 [[BLINK]] 하고 [[AOE]] [[DMG_MAGIC]]와 [[BUFF_STACK]]. (최대 4스택) \n [[PER_STACK]] 마나 소모량 2배씩 증가하지만, \n [[DMG_MAGIC]]는 일정량씩 증가.", 
          "[[CC_BUFFER]]로 일부 CC 무시 가능.",
        ],

        en: ["Kassadin always has \n [[MAGIC_DR]] and [[GHOSTING]]. \n \n",
          "Q fires a [[TARGETED]] [[DISRUPT]] [[DMG_MAGIC]] [[PROJECTILE]]. \n Kassadin gains a [[MAGIC_SHIELD]]. \n \n",
          "W's [[PASSIVE_BONUS]] adds [[ON_HIT]] [[DMG_MAGIC]] to [[BA]]s.",
          "W makes the next [[BA]] [[EMPOWERED]] with [[RANGE_UP]]. \n On attack, deals [[DMG_MAGIC]] and grants [[MANA_RESTORE]] based on missing mana. \n [[ON_CHAMP_HIT]], the mana restored is 5x. \n Can [[AA_RESET]]. \n \n",
          "E's [[PASSIVE_BONUS]] grants [[CDR]] \n whenever any champion near Kassadin casts a skill.",
          "E deals frontal cone [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n \n",
          "R [[BLINK]]s and deals [[AOE]] [[DMG_MAGIC]], granting a [[BUFF_STACK]]. (Max 4 stacks) \n Mana cost doubles [[PER_STACK]], but \n [[DMG_MAGIC]] increases by a set amount.",
          "[[CC_BUFFER]] can ignore some CC."
        ]

      },

      note2: {
        ko: [
       "R 스킬은 2단계로 나뉨 준비/순간이동. \n 준비 단계에서 카사딘이 맞은 CC는 유효 하지만 \n [[BLINK]] 단계가 발동되어 이동하는 것. \n [[BLINK]] 단계에는 CC 저항력 없음. \n [[BLINK]] 했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: ["R is split into 2 phases: wind-up / blink. \n CC that hits Kassadin during the wind-up phase still applies, but \n the [[BLINK]] phase still triggers and he moves. \n There is no CC resistance during the [[BLINK]] phase. \n If CC duration remains when he [[BLINK]]s, the CC effect still applies."]
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_voidstone_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.18: Q AP 80%, R 기본 피해 80/95/110)로 채움.
  // ultCooldown이 0/0/0이라 R 쿨타임(5/3.5/2초)은 플레이스홀더 대신 직접 기입.
  skillTooltip: {
    P: {
      ko: "카사딘이 받는 마법 피해가 10% 감소하며, ([[MAGIC_DR]]) [[GHOSTING]] 상태가 됩니다.",
      en: "Kassadin takes 10% less magic damage, ([[MAGIC_DR]]) and becomes [[GHOSTING]].",
    },
    Q: {
      ko: "카사딘이 공허 에너지 구체를 발사하여 65/95/125/155/185(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 정신 집중을 끊습니다. ([[DISRUPT]]) \n 또한 1.5초 동안 80/110/140/170/200(+30% [[AP_SCALE]])의 마법 피해를 흡수하는 [[MAGIC_SHIELD]]를 얻습니다. \n \n 9/8.5/8/7.5/7초의 [[COOLDOWN]].",
      en: "Kassadin fires an orb of void energy, dealing 65/95/125/155/185 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] and interrupting channels. ([[DISRUPT]]) \n He also gains a [[MAGIC_SHIELD]] that absorbs 80/110/140/170/200 (+30% [[AP_SCALE]]) magic damage for 1.5 seconds. \n \n 9/8.5/8/7.5/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 카사딘의 [[BA]]가 [[ON_HIT]] 25(+10% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 액티브: 카사딘이 검을 충전하여 다음 [[BA]]를 [[EMPOWERED]] 하여 [[RANGE_SCALE]]가 50 증가하고, 공격 시 50/75/100/125/150(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 잃은 마나의 4/4.5/5/5.5/6%를 회복합니다. ([[MANA_RESTORE]]) \n 챔피언 공격 시 20/22.5/25/27.5/30%로 증가합니다. \n \n 7초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Kassadin's [[BA]]s deal an additional 25 (+10% [[AP_SCALE]]) [[DMG_MAGIC]] [[ON_HIT]]. \n \n Active: Kassadin charges his blade, making his next [[BA]] [[EMPOWERED]] with 50 increased [[RANGE_SCALE]], dealing 50/75/100/125/150 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] on attack, \n and restoring 4/4.5/5/5.5/6% of his missing mana. ([[MANA_RESTORE]]) \n This increases to 20/22.5/25/27.5/30% when attacking a champion. \n \n 7 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 카사딘 근처에서 스킬을 사용하면 힘의 파동(E)의 재사용 대기시간이 0.75초 감소합니다. ([[CDR]]) \n \n 액티브: 카사딘이 공허의 파동을 발사해 70/100/130/160/190(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 1초 동안 50/55/60/65/70% [[SLOW]]시킵니다. \n \n 21/20/19/18/17초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Whenever a skill is cast near Kassadin, Force Pulse (E)'s cooldown is reduced by 0.75 seconds. ([[CDR]]) \n \n Active: Kassadin releases a wave of void energy, dealing 70/100/130/160/190 (+70% [[AP_SCALE]]) [[DMG_MAGIC]], \n and [[SLOW]]ing enemies by 50/55/60/65/70% for 1 second. \n \n 21/20/19/18/17 second [[COOLDOWN]].",
    },
    R: {
      ko: "카사딘이 근처로 순간이동([[BLINK]])하며 80/95/110(+50% [[AP_SCALE]])(+2% [[MANA_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 15초 동안 지속되는 [[BUFF_STACK]]을 획득하고, \n 사용하면 두 배의 마나를 소모하며, 35/45/55(+7% [[AP_SCALE]])(+1% [[MANA_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 마나 소모량 및 피해량 증가는 최대 4회까지 중첩됩니다. \n \n 5/3.5/2초의 [[COOLDOWN]].",
      en: "Kassadin teleports ([[BLINK]]) to a nearby location, dealing 80/95/110 (+50% [[AP_SCALE]]) (+2% [[MANA_SCALE]]) [[DMG_MAGIC]]. \n \n He gains a [[BUFF_STACK]] lasting 15 seconds, \n and each subsequent cast costs double mana and deals an additional 35/45/55 (+7% [[AP_SCALE]]) (+1% [[MANA_SCALE]]) [[DMG_MAGIC]]. \n \n The mana cost and damage increase stack up to 4 times. \n \n 5/3.5/2 second [[COOLDOWN]].",
    },
  },

};

export default kassadin;
