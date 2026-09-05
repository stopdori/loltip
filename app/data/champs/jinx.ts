import type { ChampData } from "../interactions/types";

const jinx: ChampData = {
  id: "jinx",
  skills: {
    P: ["ST_CONDITIONAL", "AS_UP", "MS_UP"],

    Q: { phases: [
      { label: { ko: "미니건", en: "Minigun" }, tags: ["TRANSFORM", "AS_UP"] },
      { label: { ko: "로켓", en: "Rocket" }, tags: ["TRANSFORM"] },
    ] },
    
    W: ["SLOW", "REVEALED"],
    E: ["VISION", "ROOT"],
    R: ["VISION"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],

    Q:    { phases: [
      { label: { ko: "폼변환", en: "Form Swap" }, tags: ["SKILL_TOGGLE", "TRANSFORM"] },
      { label: { ko: "미니건", en: "Minigun" }, tags: ["BUFF_FORM", "EMPOWERED", "BA", "PROJECTILE", "ON_HIT", "SINGLE", "BUFF_STACK"] },
      { label: { ko: "로켓", en: "Rocket" }, tags: ["BUFF_FORM", "EMPOWERED", "BA", "PROJECTILE", "ON_HIT", "AOE"] },
    ] },

    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SLOW"],
    E: ["PROJECTILE", "TRAP", "ST_DELAYED", "SEPARATOR", "ST_CONDITIONAL", "AOE", "DMG_MAGIC"],
    R: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "무조건 카이팅 \n 로켓, W로 카이팅, E로 진입방해 하면서 \n 앞라인을 꾸준하게 때리다 \n 막타 하나 터지면 슈퍼캐리.",
        ], en: ["Always kite. \n Kite with Rocket and W, use E to block enemies, \n keep poking the frontline, \n and finishing one off turns the fight around."] },
      note1: {

        ko: [
          "P는 3초 안에 챔피언, 에픽, 구조물 파괴에 관여하면 \n [[AS_UP]], [[MS_UP]]. \n [[AS_UP]]는 중첩 가능. \n \n ",

          "Q는 총을 바꿈. \n \n 미니건은 [[BA]] 시 [[AS_UP]] [[BUFF]] 최대 3스택. \n \n 로켓은 징크스의 [[CRIPPLE]]이지만 [[RANGE_UP]]. \n [[BA]] 시 마나를 소모하여 [[AOE]] 공격. \n \n ",

          "W는 맞히면 [[SLOW]]와 [[REVEALED]].",

          "E는 3개의 [[TRAP]]을 던지고 \n [[ST_DELAYED]]되어 적 챔피언이 닿으면 [[ROOT]].",

          "R은 [[GLOBAL]] 사거리의 미사일 발사. \n 날아가고 1초뒤 피해량 증가. \n 적중하면 잃은체력 비례 [[AOE]] [[DMG_PHYSICAL]].",
        ],

        en: [
          "P grants [[AS_UP]] and [[MS_UP]] \n when involved in killing a champion, epic monster, or structure within 3 seconds. \n [[AS_UP]] can stack. \n \n ",

          "Q swaps weapons. \n \n Minigun stacks up to 3 [[BUFF]] of [[AS_UP]] per [[BA]]. \n \n Rocket reduces Jinx's [[CRIPPLE]] but increases [[RANGE_UP]]. \n [[BA]] consumes mana and deals [[AOE]] damage. \n \n ",

          "W applies [[SLOW]] and [[REVEALED]] on hit.",

          "E throws 3 [[TRAP]]s that are [[ST_DELAYED]], \n applying [[ROOT]] when an enemy champion triggers them.",

          "R fires a [[GLOBAL]] range missile. \n Damage increases 1 second after launch. \n On hit, deals [[AOE]] [[DMG_PHYSICAL]] scaling with missing HP.",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", 
        "Q는 미니건 ([[MS_UP]])\n생선 대가리(스플, 사거리증가)", 
        "E의 [[ROOT]]은 다른 스킬들의 [[ROOT]]보다 판정이 좋음\n이동기 계열을 꽤 많이 끊음", 
        "E는 발동하거나 시간이 다 되어 폭발할 때 \n [[AOE]] 피해이고 미니언이나 정글도 맞음.",
      ],
        en: ["[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] all not possible", "Q: Minigun ([[AS_UP]])\nFishbones (splash damage, increased range)", "E's [[ROOT]] has better hitbox detection than most roots\nand interrupts many dashes", "E deals [[AOE]] damage when triggered or when the timer expires, \n hitting minions and jungle monsters too."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 85,
    11: 65,
    16: 45,
  },

};

export default jinx;
