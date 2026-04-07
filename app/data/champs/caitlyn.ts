import type { ChampData } from "../interactions/types";

const caitlyn: ChampData = {
  id: "caitlyn",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "ROOT"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP", "SLOW"],
    R: ["TRUE_SIGHT"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: ["PROC", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED"],
    
    W: { phases: [
      { label: { ko: "덫", en: "TRAP" }, tags: ["TIMING_CAST", "TRAP", "MARK", "RECHARGE", "ROOT"] },
      { label: { ko: "헤드샷", en: "Head Shot"  }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
    ] },

    E: { phases: [
      { label: { ko: "투망", en: "Neat" }, tags: ["DMG_MAGIC", "PROJECTILE", "MARK", "DASH", "SLOW"] },
      { label: { ko: "헤드샷", en: "Head Shot"  }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["LOCKED", "SKILL_CHANNEL", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "투사체", en: "Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "HOMING", "PIERCE_MINION", "SINGLE"] },
    ] },

  },

  notes: {
    skill: {
      note3: {
        ko: [
          "무조건 카이팅 \n 기회봐서 딜러진 한대씩 쏘기", "맞딜은 생각보다 강한편이 아님. \n 긴 사거리로 한대씩 때리기.", "한타에서 Q, R은 생각보다 딜로스가 큼. \n 평타 위주로", "W([[TRAP]])로 지역 장악 또는 \n 발밑에 한 개씩 깔아서 생존 신경 쓰기."
        ], en: [
          "Always kite.\nLook for openings to snipe the enemy carries one by one.",
          "Her dueling damage is not as strong as you'd expect.\nUse the long range to poke one hit at a time.",
          "In teamfights, Q and R can waste a surprising amount of DPS.\nFocus on auto-attacking.",
          "Use W ([[TRAP]]) to control zones,\nor place one at your feet at a time to stay safe.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]를 때릴 때마다 [[BUFF_STACK]].\n 수풀에서는 2개씩 참. \n 5스택 마다 헤드샷.",
          "Q는 처음대상 이후 감소된 피해. \n W([[TRAP]])에 걸린 대상에겐 항상 100% Q딜이 들어감",
          "W([[TRAP]])는 찍을수록 \n 최대 [[RECHARGE]]개수와 설치개수 증가. 3/4/5 \n \n W를 밟은 상대는 [[REVEALED]]. \n 평타 사거리가 두배로 늘어나고 \n 헤드샷 한 대 때릴 수 있음.",
          "E는 투망을 앞으로 쏘고 뒤로 [[DASH]] \n 일반적인 돌진기와 다르게 반대로 써야 함. \n 투망에 맞은 대상에게 사거리가 두배로 늘어나고 \n 헤드샷을 한 대 쏠 수 있음.",
          "R은 조준하는 대상에게 [[TRUE_SIGHT]]. \n 탄환은 [[CRIT]]와 [[CRIT]]데미지에 비례 \n 탄환을 같은 팀이 막아줄 수 있음.",
        ],

        en: [
          "P stacks [[BUFF_STACK]] with each [[BA]].\nAuto-attacks from a bush charge 2 stacks.\nEvery 5 stacks triggers a Headshot.",
          "Q damage decreases per additional target pierced.\nHowever, targets trapped by W ([[TRAP]]) always take 100% Q damage.",
          "Leveling up W ([[TRAP]]) increases the max [[RECHARGE]] and placed trap count (3/4/5).\nTargets who step on a trap are [[REVEALED]].\nAuto-attack range doubles and a Headshot can be fired.",
          "E fires a net forward and [[DASH]]es backward.\nUnlike most dash skills, it needs to be used in reverse.\nTargets hit by the net grant doubled auto-attack range and a free Headshot.",
          "R applies [[TRUE_SIGHT]] to the target while aiming.\nThe bullet's damage scales with [[CRIT]] and critical damage.\nAllied champions can block the bullet.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨.",
        "W(덫)에 텔 안됨", 
        "E를 적중시키면 [[AA_RESET]] 됨",
      ],
        en: [
          "[[Q_FLASH]] not possible",
          "Cannot TP onto W (traps)",
          "E applies [[AA_RESET]] on hit",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 90,
    11: 90,
    16: 90,
  },

};

export default caitlyn;
