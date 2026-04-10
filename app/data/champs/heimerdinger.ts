import type { ChampData } from "../interactions/types";

const heimerdinger: ChampData = {
  id: "heimerdinger",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP"],
    Q: { phases: [
      { label: { ko: "Q", en: "" }, tags: ["ALLY_TP_OK"] },
      { label: { ko: "강화 Q", en: "" }, tags: ["SLOW", "ALLY_TP_OK"] },
    ] },
    W: [],
    E: ["SLOW", "STUN"],
    R: ["EMPOWERED", "Q", "W", "E"],
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

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SUMMON", "RECHARGE"] },
      { label: { ko: "강화 Q", en: "" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SUMMON", "SLOW"] },
      { label: { ko: "포탑 빔", en: "Turret beam" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
    ] },

    W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE", "VOLLEY_OVERLAP"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["EMPOWERED", "Q", "W", "E"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q 포탑을 깔아서 자리를 잡고 W, E 포킹. \n R [[EMPOWERED]]는 어떤스킬에 쓸지 상황에 따라 다름.",
        ],
        en: [
          "Place Q turrets to hold position and poke with W and E. \n Which skill to use R [[EMPOWERED]] on depends on the situation.",
        ] },
      note1: {

        ko: [
          "P는 Q포탑, 아군포탑 \n 근처(넥서스 크기 정도)에서 [[MS_UP]].",

          "Q는 부품을 사용하여 3개까지 [[RECHARGE]], [[SUMMON]] 가능. \n 부품은 딩거 몸 주변을 회전하고있음. \n \n 포탑은 특정 조건에서 빔 게이지가 충전. \n 100충전을 소모해서 빔 발사. \n 딩거가 멀어지면 포탑이 비활성화. ",

          "W는 5발을 한번에 발사. \n 챔피언에 적중한 발수 하나당 포탑빔 20충전.",

          "E는 [[AOE]][[SLOW]]. \n 중심에 맞으면 [[STUN]]. \n 챔피언에 적중하면 포탑빔 100충전.",

          "R은 다른 스킬들을 [[EMPOWERED]]. \n \n Q [[EMPOWERED]]는 최대 개수 예외 포탑을 [[SUMMON]]. \n [[EMPOWERED]]포탑이 [[CC_IMMUNE]]. \n [[EMPOWERED]]포탑의 [[BA]]는 [[SLOW]]와 20충전. \n \n W [[EMPOWERED]] 5발씩 4번 발사.\n 조건만 맞는다면 최대 400충전 \n \n E는 범위가 증가하고 3번까지 튕김. \n 조건만 맞는다면 3번 다 포탑 100씩 충전",
        ],

        en: [
          "P: Grants [[MS_UP]] near Q turrets or allied towers \n (roughly the size of a Nexus).",

          "Q: Uses a charge to [[SUMMON]] a turret, up to 3 via [[RECHARGE]]. \n Charges orbit Heimerdinger's body. \n \n Turrets build a beam gauge under certain conditions. \n Consuming 100 charges fires a beam. \n Turrets deactivate if Heimerdinger moves too far away.",

          "W: Fires 5 rockets at once. \n Each rocket that hits a champion charges turret beams by 20.",

          "E: [[AOE]] [[SLOW]]. \n Hitting the center applies [[STUN]]. \n Hitting a champion charges turret beams by 100.",

          "R: [[EMPOWERED]]s other skills. \n \n Q [[EMPOWERED]]: [[SUMMON]]s a bonus turret beyond the normal cap. \n The [[EMPOWERED]] turret is [[CC_IMMUNE]]. \n Its [[BA]]s apply [[SLOW]] and charge 20 per hit. \n \n W [[EMPOWERED]]: Fires 5 rockets 4 times. \n Up to 400 charges if all connect. \n \n E [[EMPOWERED]]: Increased range, bounces up to 3 times. \n Each bounce can charge turrets by 100 if conditions are met.",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]] 안됨",
        "Q는 충전 범위, 비활성화 거리는 \n Q포탑 사거리 2배 정도.",
        "딩거 몸 주변에 부품이 회전하는데 \n 회전하는 개수당 Q 사용가능 개수. \n [[EMPOWERED]]Q는 부품을 사용하지 않음.",
        "R은 Q의 [[COOLDOWN]]을 초기화 시키고 \n W, E는 초기화 시키지 않음."
      ],
        en: [
          "[[W_FLASH]], [[E_FLASH]] not possible",
          "Q's charge range and deactivation distance \n are roughly twice the turret's attack range.",
          "The number of charges orbiting Heimerdinger \n equals the number of Q turrets available to place. \n [[EMPOWERED]] Q does not consume a charge.",
          "R resets Q's [[COOLDOWN]] \n but does not reset W or E.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default heimerdinger;
