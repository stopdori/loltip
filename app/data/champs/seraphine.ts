import type { ChampData } from "../interactions/types";

const seraphine: ChampData = {
  id: "seraphine",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "ROOT", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["R_FLASH", "CHARM"],
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
      { label: { ko: "메아리", en: "Echo" }, tags: ["BUFF_INTERACT", "Q", "W", "E"] },
      { label: { ko: "음표", en: "Harmony" }, tags: ["BUFF_STACK", "SEPARATOR", "ON_HIT", "RANGE_UP", "DMG_MAGIC"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["TIMING_CAST", "PROJECTILE", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"] },
      { label: { ko: "Q 장판", en: "Q Zone" }, tags: ["DMG_MAGIC", "ZONE"] },
    ] },

    W: ["TIMING_CAST", "AOE", "SHIELD", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "AOE", "HEAL", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"],

    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "SLOW", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "ROOT", "SEPARATOR", "ST_CONDITIONAL", "STUN", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"],

    R: ["DMG_MAGIC", "TIMING_CAST", "TIMING_AFTERCAST", "PROJECTILE", "PIERCE", "LOCKED", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "RANGE_UP"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "유지력 = 소나, 세라핀 \n 교전을 길게 가져가면 정말 좋음.",
          "Q, E로 포킹하면서 W의 [[AOE]] [[HEAL]]으로 아군 캐어.",
          "[[R_FLASH]] 기습 이니시가 정말 강력함.",
        ], en: [
          "Sustain = Sona, Seraphine \n Great in extended fights.",
          "Poke with Q, E while using W's [[AOE]] [[HEAL]] to take care of allies.",
          "[[R_FLASH]] surprise engage is extremely powerful.",
        ] },
      note1: {

        ko: [
          "P의 [[BUFF_STACK]]은 두 종류. \n 메아리, 음표. \n \n",
          "메아리 \n 세라핀이 Q, W, E 스킬을 사용할 때마다 [[BUFF_STACK]] 획득. \n 3스택을 모으면 다음 Q, W, E 스킬을 사용할 때 \n [[STACK_CONSUME]]하여 자동으로 한 번 더 발동. \n \n",
          "음표 \n 세라핀이 Q, W, E, R 스킬을 사용할 때마다 \n 자신과 주변 아군이 [[BUFF_STACK]] 획득. 최대 4개. \n 음표당 세라핀의 [[BA]] 25 [[RANGE_UP]]. \n 세라핀이 [[BA]] 공격을 하면 자신과 아군에게 쌓였던 음표 [[BUFF_STACK]]을 모두 소모하여 [[DMG_MAGIC]]. \n \n",

          "Q는 해당 지점에 [[PROJECTILE]]를 발사. \n 도착하면 [[AOE]] [[DMG_MAGIC]]. \n 챔피언, 몬스터는 잃은 체력 비례 [[DMG_MAGIC]]. \n \n",

          "W는 주변 아군 [[SHIELD]]와 [[MS_UP]]. \n 세라핀은 [[SHIELD]]와 2.5배의 [[MS_UP]]. \n 두 [[MS_UP]] 효과는 점차 사라짐. \n \n 세라핀에게 [[SHIELD]]가 있는 상태에서 W를 사용한다면 \n 잃은 체력 비례 [[AOE]] [[HEAL]] 스킬을 추가로 자동으로 시전. \n 단, P의 메아리 효과로 W 스킬이 두 번 사용돼도 \n [[HEAL]] 스킬은 한 번만 발동. \n \n",

          "E는 일직선으로 [[PIERCE]] [[PROJECTILE]]를 발사. \n [[DMG_MAGIC]], 99% [[SLOW]]. \n 이미 [[SLOW]]된 대상은 [[ROOT]] \n [[IMMOBILIZING]] 상태인 대상은 [[STUN]]. \n \n",

          "R은 일직선으로 넓은 [[PIERCE]] [[PROJECTILE]]를 발사. \n 챔피언 (아군, 적군) 적중 시 [[PROJECTILE]]가 더 멀리 날아감 \n 이론상 무한히 연장. \n \n 적군은 [[DMG_MAGIC]], [[CHARM]]. \n 아군은 음표 [[BUFF_STACK]] 최대 중첩.",
        ],

        en: [
          "P's [[BUFF_STACK]] comes in two types. \n Echo and Harmony. \n \n",
          "Echo \n Seraphine gains a [[BUFF_STACK]] each time she casts Q, W, or E. \n At 3 stacks, the next Q, W, or E cast \n [[STACK_CONSUME]]s to automatically cast a second time. \n \n",
          "Harmony \n Whenever Seraphine casts Q, W, E, or R, \n she and nearby allies each gain a [[BUFF_STACK]], up to 4. \n Each stack grants Seraphine's [[BA]] 25 [[RANGE_UP]]. \n When Seraphine lands a [[BA]], she [[STACK_CONSUME]]s all Harmony stacks on herself and allies to deal [[DMG_MAGIC]]. \n \n",

          "Q fires a [[PROJECTILE]] to the target location. \n On arrival it deals [[AOE]] [[DMG_MAGIC]]. \n Against champions and monsters, it deals bonus [[DMG_MAGIC]] based on missing health. \n \n",

          "W grants nearby allies [[SHIELD]] and [[MS_UP]]. \n Seraphine herself gets [[SHIELD]] and 2.5x the [[MS_UP]]. \n Both [[MS_UP]] effects decay over time. \n \n If Seraphine already has a [[SHIELD]] when she casts W, \n it automatically casts an additional [[AOE]] [[HEAL]] based on missing health. \n However, even if Echo causes W to be cast twice, \n the [[HEAL]] only triggers once. \n \n",

          "E fires a [[PIERCE]] [[PROJECTILE]] in a line. \n Deals [[DMG_MAGIC]] and applies a 99% [[SLOW]]. \n Targets already [[SLOW]]ed are [[ROOT]]ed \n targets already [[IMMOBILIZING]] are [[STUN]]ned. \n \n",

          "R fires a wide [[PIERCE]] [[PROJECTILE]] in a line. \n Hitting a champion (ally or enemy) extends the [[PROJECTILE]]'s range \n theoretically infinitely. \n \n Enemies hit take [[DMG_MAGIC]] and are [[CHARM]]ed. \n Allies hit gain the max stack of Harmony [[BUFF_STACK]].",
        ]

      },

      note2: {
        ko: [ 
        "P의 음표 스택은 아군에게도 쌓이는데 \n 사람들이 많이 헷갈리는 부분이 \n 아군에게도 쌓여서 마치 아군에게 긍정적인 영향을 주는 것처럼 보이지만 \n 사실은 세라핀에게만 영향이 가는 [[BUFF_STACK]]. \n 아군은 그냥 [[BUFF]] 축적 저장고 역할. \n \n 세라핀이 음표를 [[STACK_CONSUME]] 할 때 \n 스택을 가지고 있는 아군이 협곡 어디에 있어도 소모하여 적중. \n \n 1. 라이즈 R로 공간이동할 때도 소모. \n \n 2. 모데카이저 R의 이 세계로 갔을 때도 스택을 소모하여 적중. \n 하지만 버그인지 데미지가 약간 덜 들어가고 \n 이 세계에 있는 아군의 음표 버프가 소모되지 않은 것처럼 보이지만 사실은 소모한 것. \n \n",
        "음표 [[BUFF_STACK]]은 샤코 R, 르블랑 P처럼 \n [[CLONE]]에게는 쌓이지 않음. \n \n",
        "P의 메아리 효과로 스킬을 두 번 시전하면 \n 메아리 [[BUFF_STACK]]이 한 개 쌓임. \n 음표 [[BUFF_STACK]]은 두 개 쌓임.",
        "E는 미니언에게 70%의 피해.",
      ],
        en: [
          "Harmony stacks also build up on allies, which is a common point of confusion — \n it looks like they're giving allies a positive effect, \n but it's actually a [[BUFF_STACK]] that only benefits Seraphine. \n Allies just act as a storage pool for the [[BUFF]]. \n \n When Seraphine [[STACK_CONSUME]]s Harmony, \n it hits allies carrying stacks no matter where they are on the map. \n \n 1. It still consumes even if that ally is teleporting via Ryze R. \n \n 2. It still consumes and hits even if that ally is in Mordekaiser R's Realm of Death. \n However, possibly due to a bug, the damage is slightly reduced, \n and it looks as if the ally's Harmony stacks in the Realm weren't consumed — but they actually were. \n \n",
          "Harmony [[BUFF_STACK]]s do not build up on [[CLONE]]s, \n such as those from Shaco R or LeBlanc P. \n \n",
          "When Echo causes a skill to be cast twice, \n it grants 1 Echo [[BUFF_STACK]], \n but 2 Harmony [[BUFF_STACK]]s.",
          "E deals 70% damage to minions.",
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

};

export default seraphine;
