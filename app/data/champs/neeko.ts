import type { ChampData } from "../interactions/types";

const neeko: ChampData = {
  id: "neeko",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "INVISIBILITY", "MS_UP", "CLONE"],
    E: ["E_FLASH", "ROOT"],
    R: ["R_FLASH", "BUFF_FORM", "AIRBORNE", "STUN"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: ["VISION"],
    E: ["HIT_INDICATOR"],
    R: [],
  },

  gimmick: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q 폭발", en: "Q Explosive" }, tags: ["DMG_MAGIC", "ZONE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "PROC", "DMG_MAGIC", "ON_HIT", "NON_PROJECTILE", "SEPARATOR", "MS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["CLONE"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE" ,"PIERCE", "ROOT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "ROOT", "X2"],

    R: { phases: [
      { label: { ko: "준비", en: "Wind-up"  }, tags: ["BUFF_FORM", "SKILL_CHANNEL", "TIMING_CAST", "LOCKED"] },
      { label: { ko: "에어본", en: "Airborne" }, tags: ["SKILL_CHANNEL", "TIMING_CAST", "LOCKED", "AIRBORNE"] },
      { label: { ko: "스턴", en: "Stun"     }, tags: ["DMG_MAGIC", "AOE", "STUN"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q, E 포킹 던지면서 W로 시야 밝히다가 \n R을 최대한 많이 맞히기.",
          "변신으로 혼란스럽게 하다 \n W, R, 플, 벨트 콤보로 한타 대박내기.",
        ], en: [
          "Poke with Q and E while using W for vision, \n then land R on as many enemies as possible.",
          "Confuse enemies with disguise, \n then burst teamfights with W, R, Flash, Rocketbelt combo.",
        ] },
      note1: {

        ko: [
          "P는 물체, 생명체 근처에서 쇼마(게이지)를 채우면 변신 가능. \n \n 변신 해제 \n 1. 니코가 피해를 입히는 스킬 사용 시. \n 2. [[IMMOBILIZING]]에 맞았을 때. \n 3. 변신한 대상의 체력이 다 닳았을 때.",

          "Q는 [[PROJECTILE]]를 던져 폭발하여 [[ZONE]] [[DMG_MAGIC]]. \n 챔피언, 대형, 에픽 몬스터를 맞히거나 처치하면 \n 추가 폭발 [[DMG_MAGIC]]. \n 최대 2번 추가 폭발 가능.",

          "W의 [[PASSIVE_BONUS]]는 [[BA]] 공격 시 [[BUFF_STACK]] 획득. \n 2개 쌓이면 활성화 되어 다음 [[BA]] [[EMPOWERED]]. \n [[ON_HIT]] [[DMG_MAGIC]]와 잠깐의 [[MS_UP]]. \n \n W는 잠깐 [[INVISIBILITY]] 되고 [[CLONE]] 생성. \n [[CLONE]]과 니코가 [[MS_UP]]. \n 3초간 [[CLONE]] 유지. \n W를 [[SKILL_RECAST]] 하여 조종 가능. \n \n 분신은 니코의 행동을 따라함 \n Ctrl + 1 하면 3초보다 오래 지속.",

          "E는 [[PIERCE]] [[PROJECTILE]] 발사. [[DMG_MAGIC]], [[ROOT]]. \n 적중하면 [[EMPOWERED]]되어 [[PROJECTILE]] 크기가 커지고 [[ROOT]] 시간 증가. \n 약 2배의 시간.",
          
          "R은 니코 주위에 [[AOE]] [[AURA]] 생성. \n 잠시 뒤 [[AOE]]내의 모든 대상에게 [[AIRBORNE]]. \n 착지할 때 [[DMG_MAGIC]], [[STUN]].",
        ],

        en: [
          "P: Fill the Shimmer gauge near objects or units to transform. \n \n Disguise breaks when: \n 1. Neeko uses a skill that deals damage. \n 2. Hit by [[IMMOBILIZING]]. \n 3. The disguised target's HP reaches zero.",

          "Q throws a [[PROJECTILE]] that explodes for [[ZONE]] [[DMG_MAGIC]]. \n Hitting or killing a champion, large, or epic monster \n triggers an additional explosion [[DMG_MAGIC]]. \n Up to 2 additional explosions.",

          "W [[PASSIVE_BONUS]]: Gain a [[BUFF_STACK]] on [[BA]] hit. \n At 2 stacks, activates and [[EMPOWERED]]s the next [[BA]]. \n Deals [[ON_HIT]] [[DMG_MAGIC]] and briefly grants [[MS_UP]]. \n \n W Active: Briefly turns [[INVISIBILITY]] and creates a [[CLONE]]. \n [[CLONE]] and Neeko both gain [[MS_UP]]. \n [[CLONE]] lasts 3 seconds. \n [[SKILL_RECAST]] W to control it. \n \n The clone mimics Neeko's actions. \n Ctrl + 1 makes it last longer than 3 seconds.",

          "E fires a [[PIERCE]] [[PROJECTILE]] dealing [[DMG_MAGIC]] and [[ROOT]]. \n On hit, becomes [[EMPOWERED]]: [[PROJECTILE]] grows larger and [[ROOT]] duration increases. \n Approximately 2x the duration.",

          "R creates an [[AOE]] [[AURA]] around Neeko. \n After a short delay, launches all targets in [[AOE]] with [[AIRBORNE]]. \n On landing, deals [[DMG_MAGIC]] and applies [[STUN]].",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", 

        "P의 변신 상태에서도 W의 [[PASSIVE_BONUS]] [[ON_HIT]] 효과 발동.", 
        
        "P로 미니언, 몬스터로 변신했을 때 \n 강타에 맞으면 고정 피해가 들어옴.",

        "P로 [[ALLY_TP_OK]] 가능한 대상으로 변신하고 \n W로 [[CLONE]]을 만들어도 [[ALLY_TP_OK]] 불가.", 

        "P로 변신했을 때 아이템 상호작용. \n \n 변신이 풀리지 않는것 \n 슈렐, 솔라리, 미카엘, 기맹, 요오무, 실체화 장비, 수은, 존야 \n \n 변신이 풀리는 것들 \n 구원, 벨트, 란두인, 히드라류. \n \n 변신에 효과가 보이는것들 \n 가엔, 망자의 갑옷, 얼심, 피바라기, 주문검류. \n \n 착용하면 효과가 유효한것들 \n 웬만한 아이템 효과는 다 발휘됨. \n 치감, 스태틱, 고연포, 강심, 멜모셔스 심지어 징수의 총 까지. \n \n 밴시류는 모습이 보이지 않지만 정상작동.", 

        "W의 [[INVISIBILITY]] 도중 점멸 써도 풀리지 않음.",

        "니코 궁 콤보는 R, F(점멸), 벨트가 자연스러움.", 

        "적 챔피언이 [[AIRBORNE]] 단계에서 [[AOE]] 밖에 있다가 \n [[STUN]] 단계에 범위에 들어와있으면 \n [[STUN]], [[DMG_MAGIC]]가 정상적으로 유효.", 
        
      ],
        en: [
          "[[Q_FLASH]] not possible.",

          "W's [[PASSIVE_BONUS]] [[ON_HIT]] effect still activates while disguised via P.",

          "When disguised as a minion or monster via P, \n taking Smite deals fixed damage.",

          "Even when disguised as a valid [[ALLY_TP_OK]] target via P \n and creating a [[CLONE]] with W, [[ALLY_TP_OK]] is not possible.",

          "Item interactions while disguised via P. \n \n Disguise does NOT break: \n Shurelya's, Locket, Mikael's, Knight's Vow, Youmuu's, Materialization items, Quicksilver Sash, Zhonya's \n \n Disguise BREAKS: \n Redemption, Rocketbelt, Randuin's, Hydra-type items. \n \n Visual effects visible while disguised: \n Guardian Angel, Dead Man's Plate, Frozen Heart, Bloodthirster, Spellblade-type items. \n \n Most item effects remain active while disguised. \n Grievous Wounds, Statikk, Rapid Firecannon, Heartsteel, Maw of Malmortius, even The Collector. \n \n Banshee's-type items: shield is invisible but functions normally.",

          "Using Flash during W's [[INVISIBILITY]] does not break it.",

          "The natural Neeko R combo is R → Flash → Rocketbelt.",

          "If an enemy champion is outside the [[AOE]] during the [[AIRBORNE]] phase \n but inside the range during the [[STUN]] phase, \n [[STUN]] and [[DMG_MAGIC]] still apply normally.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 95,
    16: 90,
  },

};

export default neeko;
