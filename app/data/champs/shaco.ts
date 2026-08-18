import type { ChampData } from "../interactions/types";

const shaco: ChampData = {
  id: "shaco",
  skills: {
    P: ["ST_CONDITIONAL"],
    Q: ["Q_FLASH", "INVISIBILITY", "CRIT", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR", "CC_BUFFER"],
    W: ["W_FLASH", "SUMMON", "ALLY_TP_OK", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "CLONE", "TOWER_DODGE", "BLINK", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "FEAR", "ALLY_TP_OK"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: [],
    R: ["VISION"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "ON_HIT", "DMG_PHYSICAL", "SEPARATOR", "E", "ST_CONDITIONAL", "DMG_MAGIC"],

    Q: { phases: [
      { label: { ko: "위장 단계", en: "Stealth Phase" }, tags: ["TIMING_CAST", "INVISIBILITY", "CC_BUFFER"] },
      { label: { ko: "순간이동 단계", en: "Blink Phase" }, tags: ["BLINK", "SEPARATOR", "DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "CRIT"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 상자", en: "W Box" }, tags: ["TIMING_CAST", "SUMMON", "TRAP"] },
      { label: { ko: "발동", en: "W Active" }, tags: ["AOE", "FEAR", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "SWARM"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT", "SLOW"] },
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SLOW"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "CLONE", "LOCKED"] },
      { label: { ko: "폭발", en: "Burst" }, tags: ["ST_CONDITIONAL", "AOE", "FEAR", "SEPARATOR", "SUMMON", "TRAP"] },
      { label: { ko: "상자", en: "Box" }, tags: ["DMG_MAGIC", "PROJECTILE", "SWARM"] },
    ] },
    
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "잘 하는법을 모르겠음 \n 고수분들 제보 부탁드립니다.",
        ], en: [
          "Not sure how to play this well. \n Tips from skilled players are welcome.",
        ] },
      note1: {

        ko: [
          "P는 샤코가 뒤에서 공격 시 추가 피해. \n \n [[BA]]는 [[DMG_PHYSICAL]] 추가. \n \n E는 [[DMG_MAGIC]] 추가. \n 체력이 30% 이하라면 [[DMG_MAGIC]] 추가. \n \n",

          "Q는 [[INVISIBILITY]] 상태가 되고 [[BLINK]]. \n [[INVISIBILITY]] 상태에서 [[BA]] 공격 시 [[ON_HIT]] [[DMG_PHYSICAL]]. \n 뒤에서 공격 시 [[CRIT]]로 적용. 단, 160%의 피해. \n \n",

          "W는 상자를 [[SUMMON]]. \n 잠시 후 상자가 [[STEALTH]]. \n [[SUMMON]] 지속시간은 주문력 비례로 증가. \n \n 적이 [[AOE]]에 들어오면 활성화 하여 [[AOE]] [[FEAR]] \n ( 챔피언은 0.5초, 미니언, 몬스터는 2초 ) \n 주변 모든 대상에게 [[PROJECTILE]]를 발사하여 [[DMG_MAGIC]]. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n E 스킬이 사용 가능한 상태라면 [[BA]]에 [[SLOW]] 추가.",

          "E는 단검 [[PROJECTILE]] 발사. \n [[DMG_MAGIC]], [[SLOW]]. \n 대상의 체력이 30% 이하라면 [[DMG_MAGIC]] 추가. \n \n",
          
          "R은 샤코가 잠시 사라졌다가 [[CLONE]]과 함께 등장. \n [[CLONE]]은 샤코의 60% 데미지와 \n 받는 피해량 50% 증가. \n \n [[CLONE]]이 처치되거나 시간이 다 되면 \n 폭발하여 [[AOE]] [[DMG_MAGIC]], [[FEAR]] (1초). \n 동시에 활성화 된 상자 3개를 [[SUMMON]] \n W와 똑같이 공격.",
        ],

        en: [
          "P deals bonus damage when Shaco attacks from behind. \n \n [[BA]] adds [[DMG_PHYSICAL]]. \n \n E adds [[DMG_MAGIC]]. \n If below 30% health, adds extra [[DMG_MAGIC]]. \n \n",

          "Q grants [[INVISIBILITY]] and [[BLINK]]s. \n Attacking with [[BA]] while [[INVISIBILITY]] applies [[ON_HIT]] [[DMG_PHYSICAL]]. \n Attacking from behind applies as [[CRIT]], but only for 160% damage. \n \n",

          "W [[SUMMON]]s a box. \n After a short delay, the box goes [[STEALTH]]. \n [[SUMMON]] duration increases with ability power. \n \n When an enemy enters the [[AOE]], it activates, applying [[AOE]] [[FEAR]] \n (0.5s on champions, 2s on minions/monsters) \n and fires [[PROJECTILE]]s at all nearby targets for [[DMG_MAGIC]]. \n \n",

          "E's [[PASSIVE_BONUS]]: \n if E is off cooldown, adds [[SLOW]] to [[BA]].",

          "E fires a dagger [[PROJECTILE]]. \n [[DMG_MAGIC]], [[SLOW]]. \n If the target is below 30% health, adds extra [[DMG_MAGIC]]. \n \n",

          "R makes Shaco vanish briefly, then reappear with a [[CLONE]]. \n The [[CLONE]] deals 60% of Shaco's damage \n and takes 50% increased damage. \n \n When the [[CLONE]] dies or its duration ends, \n it explodes for [[AOE]] [[DMG_MAGIC]] and [[FEAR]] (1s). \n It also [[SUMMON]]s 3 activated boxes \n that attack just like W.",
        ]

      },

      note2: {
        ko: [
        "Q 스킬은 2단계로 나뉨 위장/순간이동. \n 위장단계에서 샤코가 맞은 CC는 유효 하지만 \n [[BLINK]]단계가 발동되어 이동하는 것. \n [[BLINK]]단계에는 CC 저항력 없음. \n 순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효.",          
        "Q의 [[INVISIBILITY]] 상태에서 \n W, R, 소환사 주문을 사용해도 [[INVISIBILITY]] 유지. \n E는 [[INVISIBILITY]] 해제.",
        "W의 상자는 하나만 공격할 때 더 강함.", 
        "E의 [[PROJECTILE]]를 상대 뒤에서 발사했을 때 \n 대상이 [[PROJECTILE]]를 맞기 전에 샤코 방향을 바라보면 \n P의 [[DMG_MAGIC]] 추가 효과 없음.",
        "R의 [[CLONE]]은 컨트롤 우클릭 또는 R [[SKILL_RECAST]]으로 조종가능. \n 최대 조종 범위가 있고 범위를 넘어가면 샤코에게 [[BLINK]].",
        "R의 [[CLONE]]에는 [[ALLY_TP_OK]] 불가. \n 폭발하고 [[SUMMON]]된 상자에는 [[ALLY_TP_OK]] 가능.",
      ],
        en: [
          "Q has two phases: stealth and blink. \n CC applied to Shaco during the stealth phase is still valid, \n but the [[BLINK]] phase triggers and moves him. \n There is no CC resistance during the [[BLINK]] phase. \n If the CC's duration is still remaining after the blink, the CC effect still applies.",
          "While in Q's [[INVISIBILITY]], \n using W, R, or summoner spells keeps [[INVISIBILITY]] active. \n E breaks [[INVISIBILITY]].",
          "W's box is stronger when it attacks a single target.",
          "If E's [[PROJECTILE]] is fired from behind the target, \n but the target turns to face Shaco before getting hit, \n P's bonus [[DMG_MAGIC]] does not apply.",
          "R's [[CLONE]] can be controlled with Ctrl+right-click or R [[SKILL_RECAST]]. \n There is a max control range, and exceeding it makes the clone [[BLINK]] back to Shaco.",
          "[[ALLY_TP_OK]] is not possible onto R's [[CLONE]]. \n But the boxes [[SUMMON]]ed after it explodes allow [[ALLY_TP_OK]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default shaco;
