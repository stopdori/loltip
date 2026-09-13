import type { ChampData } from "../interactions/types";

const anivia: ChampData = {
  id: "anivia",
  skills: {
    P: ["COOLDOWN", "SEPARATOR", "TRANSFORM", "REVIVE", "AR_MR_UP"],
    Q: ["SLOW", "STUN", "SEPARATOR", "MARK"],
    W: ["W_FLASH", "TERRAIN", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "MARK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["COOLDOWN", "SEPARATOR", "TRANSFORM", "REVIVE", "AR_MR_UP"],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "SLOW", "SEPARATOR", "MARK", "SEPARATOR_NEWLINE", "SEPARATOR", "SKILL_RECAST", "RECAST_DETONATE"] },
      { label: { ko: "Q2 폭발", en: "Q2 Detonate"  }, tags: ["DMG_MAGIC", "AOE", "SLOW", "STUN", "SEPARATOR", "MARK"] },
    ] },

    W: ["TERRAIN", "TIMING_CAST", "LOCKED", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],

    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR_NEWLINE", "SEPARATOR", "MARK_CONSUME", "DMG_MAGIC", "X2"],

    R: { phases: [
      { label: { ko: "R 장판", en: "R Zone" }, tags: ["DOT", "DMG_MAGIC", "TIMING_CAST", "SKILL_CHANNEL", "CAST_MOVE", "ZONE", "SLOW", "SEPARATOR", "SKILL_RECAST", "RECAST_CANCEL"] },
      { label: { ko: "R 장판 최대 크기", en: "R Zone Max Size"  }, tags: ["DOT", "DMG_MAGIC", "X3", "SEPARATOR", "SLOW", "X1.5", "SEPARATOR", "MARK"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 체력이 0이되면 얼음알로 [[TRANSFORM]] 되어 [[REVIVE]]. \n 하늘에서 내려오는 빛이 알에 닿으면 \n 다시 애니비아로 [[TRANSFORM]]. \n \n",

          "Q는 얼음 구체 [[PROJECTILE]] 발사. \n 닿으면 [[DMG_MAGIC]], [[SLOW]], [[MARK]]. \n [[SKILL_RECAST]] 또는 최대 사거리 도달 시 폭발하여 \n 추가 [[DMG_MAGIC]], [[STUN]], [[MARK]]와 [[SLOW]] [[DURATION_RESET]]. \n \n",

          "W([[TERRAIN]])는 가로로 긴 얼음 벽 생성. \n \n",

          "E는 [[PROJECTILE]]를 발사하여 [[DMG_MAGIC]]. \n 얼음 땡 [[MARK]] 대상에게 2배 피해. \n [[MARK]]은 Q, R에서 부여. \n \n",

          "R은 점점 넓어지는 [[ZONE]] 생성. \n 0.5초마다 [[DMG_MAGIC]], [[SLOW]]. \n 최대로 넓어지면 0.25초마다 \n [[DMG_MAGIC]] 3배, [[SLOW]] 1.5배, [[MARK]] 추가."

        ],

        en: [
          "P [[TRANSFORM]]s Anivia into an ice Egg and [[REVIVE]]s when her health hits 0. \n When the descending light touches the Egg, \n she [[TRANSFORM]]s back into Anivia. \n \n",

          "Q fires a [[PROJECTILE]] orb of ice. \n On hit, deals [[DMG_MAGIC]], [[SLOW]], and [[MARK]]. \n [[SKILL_RECAST]] or reaching max range detonates it, \n dealing additional [[DMG_MAGIC]], [[STUN]], [[MARK]], and [[DURATION_RESET]]ing the [[SLOW]]. \n \n",

          "W ([[TERRAIN]]) creates a long horizontal wall of ice. \n \n",

          "E fires a [[PROJECTILE]], dealing [[DMG_MAGIC]]. \n Deals double damage to a target with the Frostbite [[MARK]]. \n [[MARK]] is applied by Q or R. \n \n",

          "R creates a [[ZONE]] that gradually grows larger. \n Deals [[DMG_MAGIC]] and [[SLOW]]s every 0.5 seconds. \n Once fully expanded, every 0.25 seconds \n deals 3x [[DMG_MAGIC]], 1.5x [[SLOW]], and adds [[MARK]].",
        ]

      },

      note2: {
        ko: [ 
          "P(알) [[REVIVE]] 쿨타임은 240s. \n 애니비아와 알은 [[TRANSFORM]] 판정.", "[[GW]] 묻고 알로변해도 풀피. \n [[GW]] 묻고 애니비아로 [[REVIVE]]해도 풀피.", 
          "알은 [[ALLY_TP_OK]] 불가.", 
          "알텔 방법은 알이 되기 전 텔을 타고 알로 [[TRANSFORM]] 되었을 때, \n 텔레포트가 유지되는 것.", 
          "W([[TERRAIN]])는 구조물, 지형지물(바위, 나무)에 사용 가능. \n 즉, 겹쳐서 사용할 수 있음.", 
          "E는 설명이 조금 잘못 나와있음. \n 설명에는 냉각의 [[SLOW]]에 걸린 대상에게 \n 2배 데미지 라고 적혀있지만, \n 2배 데미지는 사실 얼음 땡 [[MARK]]이 걸린 대상에게 발동.", 
          "얼음 땡 [[MARK]]은 Q에는 즉시 \n R에는 다 펼쳐진 [[ZONE]]에서만 부여.", 
          "가끔 RE로 2배 데미지가 안 터질 때 버그라고 생각할 수 있지만 사실은 얼음 땡 [[MARK]]이 걸리기 전에 E를 적중 시킨 것.", 
          "그래서 R을 쓰고 잠깐 기다렸다가 \n [[ZONE]]이 다 펼쳐지는 타이밍에 E의 [[PROJECTILE]]가 적중해야 \n 기대하는 데미지가 나옴."
      ],
        en: [
          "P (Egg) [[REVIVE]] cooldown is 240s. \n Anivia and the Egg count as a [[TRANSFORM]].",
          "[[GW]] on the egg still revives at full HP. \n [[GW]] on Anivia before [[REVIVE]] also revives at full HP.",
          "The Egg cannot [[ALLY_TP_OK]].",
          "The way to TP onto the egg: if Teleport is already channeling before you [[TRANSFORM]] into the Egg, \n the Teleport is maintained.",
          "W ([[TERRAIN]]) can be placed on structures and terrain (rocks, trees). \n In other words, it can overlap with them.",
          "E's tooltip is slightly misleading. \n It says double damage on targets [[SLOW]]ed by chill, \n but the double damage \n actually triggers on targets with the Frostbite [[MARK]].",
          "Frostbite [[MARK]] is applied instantly by Q, \n but only once R's [[ZONE]] has fully expanded.",
          "Sometimes RE fails to trigger double damage, which can seem like a bug, but it's actually because E hit before the Frostbite [[MARK]] was applied.",
          "So after using R, wait briefly \n and time E's [[PROJECTILE]] to land once the [[ZONE]] has fully expanded \n to get the expected damage.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 기존 6/11/16 전부 0으로 돼 있던 걸 위키 기준 실제 R(재시전/토글 재개) 쿨타임
  // 4/3/2초로 수정함 — skillTooltip에서 {{ultCooldown}}으로 참조하기 위한
  // 정정. 다른 필드와 달리 이 파일 자체의 기존 값이 깨져 있었음(원인 불명).
  ultCooldown: {
    6: 4,
    11: 3,
    16: 2,
  },

  // DDragon의 P/Q/W/E/R vars/effectBurn이 전부 비어있거나(패시브) "0"으로
  // 깨져 있어 위키(wiki.leagueoflegends.com/en-us/Anivia, V26.10 기준)
  // 정보박스 수치로 채웠다(Notes 섹션 문구는 배제). cooldownBurn/rangeBurn은
  // DDragon 원본과 위키가 일치해 교차 검증됨(W 17초 랭크 무관, E 4초 고정 등).
  // Q의 냉기 슬로우%가 R 랭크에 비례하는 건 구조화 필드가 따로 없어 평문으로 서술.
  skillTooltip: {
    P: {
      ko: "애니비아가 치명적인 피해를 입으면 죽는 대신 얼음 알로 [[TRANSFORM]] 하여 6초 동안 [[REVIVE]] 상태에 들어간다. \n 알 상태에서는 레벨에 따라 -40~20([[LEVEL_SCALE]])의 [[AR_MR_UP]]을 얻으며, 이 상태에서도 피해를 받아 처치될 수 있다. \n 6초를 버티면 체력을 모두 채운 채 원래 모습으로 부활한다. \n \n 240초의 [[COOLDOWN]].",
      en: "When Anivia takes fatal damage, instead of dying she [[TRANSFORM]]s into an ice egg and enters [[REVIVE]] for 6 seconds. \n While an egg, she gains -40 to 20([[LEVEL_SCALE]]) [[AR_MR_UP]], and can still be killed during this time. \n If she survives the 6 seconds, she revives with full health. \n \n 240 second [[COOLDOWN]].",
    },
    Q: {
      ko: "애니비아가 거대한 얼음 덩어리를 발사해 경로상의 적에게 50/70/90/110/130(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 [[MARK]](얼음 땡)을 적용해 3초간 20~40%(궁극기 랭크 비례)만큼 [[SLOW]]시킨다. \n 사거리 끝에 도달하거나 [[SKILL_RECAST]]하면 그 자리에서 폭발해 60/95/130/165/200(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입히고 1.1/1.2/1.3/1.4/1.5초간 [[STUN]]시킨다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Anivia fires a massive chunk of ice, dealing 50/70/90/110/130(+25% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies in its path, applying [[MARK]] (Chill), and [[SLOW]]ing them by 20~40%(scaling with R's rank) for 3 seconds. \n On reaching max range or on [[SKILL_RECAST]], it detonates on the spot, dealing an additional 60/95/130/165/200(+45% [[AP_SCALE]]) [[DMG_MAGIC]] and [[STUN]]ning for 1.1/1.2/1.3/1.4/1.5 seconds. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "애니비아가 600/700/800/900/1000만큼 폭이 넓어지는 얼음벽을 소환해 모든 이동을 차단한다. \n 벽은 5초 뒤에 녹아 사라진다. \n \n 랭크와 무관하게 17초의 [[COOLDOWN]].",
      en: "Anivia summons a wall of ice, 600/700/800/900/1000 units wide, blocking all movement. \n The wall melts away after 5 seconds. \n \n 17 second [[COOLDOWN]], independent of rank.",
    },
    E: {
      ko: "애니비아가 냉기를 발사해 대상에게 55/80/105/130/155(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. \n Q나 R로 [[SLOW]] 상태(얼음 땡 [[MARK]])에 걸린 적에게는 대신 110/160/210/260/310(+110% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. \n \n 4초의 [[COOLDOWN]].",
      en: "Anivia blasts an enemy with freezing wind, dealing 55/80/105/130/155(+55% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Against a target currently [[SLOW]]ed (Frostbite [[MARK]]) by Q or R, deals 110/160/210/260/310(+110% [[AP_SCALE]]) [[DMG_MAGIC]] instead. \n \n 4 second [[COOLDOWN]].",
    },
    R: {
      ko: "애니비아가 얼음 폭풍을 불러내 [[SLOW]]와 피해를 지속적으로 가하는 [[SKILL_CHANNEL]] 스킬. \n 처음엔 0.5초마다 15/22.5/30(+6.25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 20/30/40%만큼 [[SLOW]]시킨다. \n 1.5초에 걸쳐 범위가 최대로 커지면 이후부터는 0.25초마다 45/67.5/90(+18.75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 [[MARK]](얼음 땡)을 적용하며 30/45/60%만큼 [[SLOW]]시킨다. \n \n 껐다 켤 때 {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "A [[SKILL_CHANNEL]] that summons a driving storm of ice, dealing damage and [[SLOW]]ing continuously. \n Initially deals 15/22.5/30(+6.25% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]s by 20/30/40% every 0.5 seconds. \n After growing to full size over 1.5 seconds, it instead deals 45/67.5/90(+18.75% [[AP_SCALE]]) [[DMG_MAGIC]], applies [[MARK]] (Chill), and [[SLOW]]s by 30/45/60% every 0.25 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]] to turn back on.",
    },
  },

};

export default anivia;
