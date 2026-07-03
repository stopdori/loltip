import type { ChampData } from "../interactions/types";

const orianna: ChampData = {
  id: "orianna",
  skills: {
    P: ["ON_HIT", "DEBUFF_STACK"],
    Q: ["Q_FLASH", "DROP"],
    W: ["MS_UP", "SLOW"],
    E: ["E_FLASH", "SHIELD"],
    R: ["R_FLASH", "AOE", "GRAB"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT", "DEBUFF_STACK"],

    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "DROP"],

    W: ["DMG_MAGIC", "AOE", "MS_UP", "SLOW"],

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "AR_MR_UP"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["DMG_MAGIC", "PROJECTILE", "TARGETED", "PIERCE", "SHIELD"] },
  ] },
  
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "GRAB"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "구체의 시야를 이용해서 시야를 뚫어줘야 함.",
          "오리아나 궁은 전술 핵 버튼임. \n 성급히 사용하면 억제력이 없어져서 구도가 불리해짐. \n 타이밍 정말 신중하게 사용해야 함.",
          "소규모 교전에서는 R을 자주 써도 괜찮음.",
        ], en: [
          "Use the ball's vision to push through fog of war.",
          "Orianna's ult is a tactical nuke button. \n Using it hastily removes your deterrence and puts you at a disadvantage. \n The timing must be used very carefully.",
          "It's fine to use R more freely in small-scale skirmishes.",
        ] },
      note1: {

        ko: [
          "오리아나의 스킬은 구체를 이용해서 시전. \n 구체와 너무 멀어지면 오리아나에게 돌아와 몸에 부착.",

          "P는 [[ON_HIT]] [[DMG_MAGIC]], [[DEBUFF_STACK]]. \n [[DEBUFF_STACK]] 효과로 같은 대상을 공격 시 [[ON_HIT]] 피해 증가. \n 최대 2스택. \n 다른 대상 공격 시 이전 [[DEBUFF_STACK]] 초기화.",

          "Q는 해당 지점에 구체 [[DROP]] 발사. \n 구체에 닿은 적에게 [[DMG_MAGIC]]. \n 두 번째 적부터 피해량 30% 감소. \n 구체 [[DROP]]은 오리아나가 주우면 몸에 부착.",

          "W는 구체 주변에 [[AOE]] [[DMG_MAGIC]]. \n 동시에 [[ZONE]] [[MS_UP]], [[SLOW]].",

          "E의 [[PASSIVE_BONUS]]는 구체를 부착한 대상에게 [[AR_MR_UP]]. \n \n E는 아군 챔피언에게 구체 부착 명령. \n 구체가 아군에게 도착하면 [[SHIELD]]. \n 이동 중에 구체에 닿은 적은 [[DMG_MAGIC]].",

          "R은 [[AOE]] [[DMG_MAGIC]], 구체 방향으로 [[GRAB]]. \n [[TIMING_CAST]]이 꽤 긴 편.",
        ],

        en: [
          "Orianna's skills are all cast using the ball. \n If the ball gets too far away, it returns to Orianna and reattaches to her body.",

          "P is [[ON_HIT]] [[DMG_MAGIC]], [[DEBUFF_STACK]]. \n The [[DEBUFF_STACK]] effect increases [[ON_HIT]] damage when hitting the same target. \n Max 2 stacks. \n Hitting a different target resets the previous [[DEBUFF_STACK]].",

          "Q launches the ball to [[DROP]] at the target location. \n Deals [[DMG_MAGIC]] to enemies it touches. \n Damage is reduced by 30% starting from the second enemy hit. \n If Orianna picks the [[DROP]]ped ball back up, it reattaches to her body.",

          "W deals [[AOE]] [[DMG_MAGIC]] around the ball. \n Also creates a [[ZONE]] that [[MS_UP]]s allies and [[SLOW]]s enemies.",

          "E's [[PASSIVE_BONUS]] grants [[AR_MR_UP]] to whoever is holding the ball. \n \n E orders the ball to attach to an allied champion. \n When the ball reaches the ally, it grants a [[SHIELD]]. \n Enemies touched by the ball while it's traveling take [[DMG_MAGIC]].",

          "R deals [[AOE]] [[DMG_MAGIC]] and [[GRAB]]s toward the ball's direction. \n [[TIMING_CAST]] is fairly long.",
        ]

      },

      note2: {
        ko: [
        "구체에 [[ALLY_TP_OK]] 안됨.", 
        "오리아나 W, R 스킬은 구체가 이동할 때 선입력 해 놓으면 \n 구체가 도착하자마자 발동하는 성질이 있음. \n 오리녹턴 콤보는 이 성질을 응용한 것.", 
        "오리 녹턴 (말파,바이,조이 등등) 연계 방법. \n 1. 아군이 오리 E 사거리 안에 있을 때 \n 2. 아군이 [[DASH]]하는 순간 오리아나가 E를 주고 R 연타 \n 3. 구체가 아군 몸에 부착될 때 R이 발동. \n 순간적으로 구체 범위가 벗어나도 선입력으로 발동. \n \n 정리하면 \n [[DASH]]하는 아군이 오리아나 E 스킬을 보고 [[DASH]]하는 게 중요. \n 반대로 요네, 나피리는 오리아나가 잘 보고 E를 써야 함.",
      ],
        en: [
          "[[ALLY_TP_OK]] onto the ball is not possible.",
          "Orianna's W and R have a property where, if pre-input while the ball is moving, \n they trigger the instant the ball arrives. \n The Orianna-Nocturne combo is built around this property.",
          "Orianna-Nocturne (Malphite, Vi, Zoe, etc.) combo method. \n 1. While an ally is within Orianna's E range \n 2. The instant the ally [[DASH]]es, Orianna gives E and mashes R \n 3. R triggers when the ball attaches to the ally's body. \n Even if the ball's range is briefly exceeded, the pre-input still triggers it. \n \n In short: \n It's important for the [[DASH]]ing ally to watch for Orianna's E and time their [[DASH]] accordingly. \n Conversely, for Yone and Naafiri, Orianna needs to watch them closely to use E.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default orianna;
