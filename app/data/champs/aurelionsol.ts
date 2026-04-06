import type { ChampData } from "../interactions/types";

const aurelionsol: ChampData = {
  id: "aurelionsol",
  skills: {
    P: ["STACKING"],
    Q: [],
    W: ["MS_UP", "GHOSTING", "DASH", "WALL_HOP"],
    E: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["R_FLASH", "STUN"] },
      { label: { ko: "천상강림", en: "Falling Star" }, tags: ["R_FLASH", "AIRBORNE", "SLOW"] },
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
    P: ["STACKING"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "SKILL_STEERABLE", "NON_PROJECTILE", "DOT", "SINGLE"] },
      { label: { ko: "Q 폭발", en: "Q Burst" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },
    W: ["SKILL_CHANNEL", "TIMING_CAST", "DASH", "WALL_HOP"],
    E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DOT", "SLOW"],
    R: { phases: [
      { label: { ko: "R", en: "The Skies Descend" }, tags: ["DMG_MAGIC", "PROJECTILE", "ZONE", "STUN"] },
      { label: { ko: "천상강림", en: "Falling Star" }, tags: ["DMG_MAGIC", "PROJECTILE", "ZONE", "AIRBORNE"] },
      { label: { ko: "천상강림 충격파", en: "Waves" }, tags: ["DMG_MAGIC", "AOE", "SLOW"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "작성자가 잘 다루지 못함. \n 고수분들 훈수 부탁드림.",
        ], en: [
          "Author doesn't play this one well. \n Tips from experts are welcome.",
        ] },
      note1: {

        ko: [
          "P의 별가루 [[STACKING]]으로 스킬 강화.",
          "Q는 버튼을 누르면서 마우스를 움직여 사용. \n 적 챔피언에게 6각형 디버프가 생기고 \n 다 차면 폭발피해. \n 1초당 2의 별가루.",
          "W는 날아가는 도중 움직이면 내려짐. \n Q, E, R은 사용해도 내리지 않음. \n 킬 관여 시 쿨감.",
          "E는 중앙 블랙홀에 조건부 [[EXECUTE]] \n 블랙홀에 챔피언이 닿으면 초당 별가루 1. \n E 범위에서 미니언, 몬스터가 죽으면 마리당 1. \n 막타치지 않아도 오름.",
          "R은 범위 [[STUN]] \n 강화 R(천상강림)은 중앙범위 [[AIRBORNE]] \n 넓은 범위 충격파는 [[SLOW]] \n\n 일반 R은 챔피언당 별가루 5. \n 강화 R은 없음.",

        ],

        en: [
          "Skills are empowered by P's Stardust [[STACKING]].",
          "Hold Q and move the mouse to aim. \n A hexagonal debuff builds on enemy champions \n and explodes when full. \n Grants 2 Stardust per second.",
          "Moving during W flight cancels it. \n Using Q, E, or R does not cancel flight. \n Kill participation while W is on cooldown reduces its cooldown.",
          "E has a conditional [[EXECUTE]] in the center black hole. \n Champions touching the black hole grant 1 Stardust per second. \n Minions and monsters dying in E's range grant 1 Stardust each. \n No last hit required.",
          "R applies area [[STUN]]. \n Empowered R (Falling Star) applies [[AIRBORNE]] in the center \n and [[SLOW]] in the wider shockwave. \n\n Normal R grants 5 Stardust per champion hit. \n Empowered R does not.",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨", 
        "P는 [[STACKING]](별가루)당\nQ(데미지), W(비행거리), E(처형기준), R(범위) 증가.", "Q는 잠깐 맞으면 별가루가 오르지 않음. \n 1초이상 지속시 초당 2.", 
        "W(비행) 도중 Q를 사용하면 방향 그대로 비행하지만, 비행속도가 느려지고 마우스를 따라 사용 할 수 있음. \n Q를 떼면 방향 그대로 다시 빠르게 비행. \n W 도중 Q, E, R을 사용해도 비행이 해제되지 않음. \n 벽 위에서 내리면 벽에서 가까운 땅으로 밀려남.", 
        "E는 블랙홀과 강착원반으로 나뉨. \n 블랙홀은 중앙부분의 구체. \n 강착원반은 주변 테두리 \n 적 챔피언이 E의 블랙홀 부분에 닿으면 초당 1스택. \n 블랙홀에 잠깐 스쳐도 별가루가 오름. \n E 범위에서 미니언, 정글몹이 죽으면 1스택. \n (막타 치지 않아도 괜찮음.)\nE스킬이 종료될 때 별가루가 한번에 증가", "R은 스킬을 배우고 나서 \n 75스택을 추가로 쌓으면 강화. \n 강화된 R을 사용하면 일반 R로 돌아갔다가 \n 다시 75스택을 모으면 강화.",
      ],
        en: ["[[R_FLASH]] works by casting R outside its range, then flashing.", "Each Stardust stack increases: \nQ (damage), W (flight distance), E (execute threshold), R (area).", "Brief hits with Q do not grant Stardust. \n Continuously hitting for 1+ second grants 2 per second.", "Using Q during W flight keeps the direction but slows flight speed, allowing mouse control. \n Releasing Q resumes fast flight in the same direction. \n Using Q, E, or R during W flight does not cancel it. \n Landing on a wall pushes you to the nearest ground.", "E is divided into a Black Hole and an Accretion Disk. \n The Black Hole is the center sphere; the Accretion Disk is the surrounding ring. \n Enemy champions touching the Black Hole grant 1 Stardust per second. \n Even briefly grazing the Black Hole grants Stardust. \n Minions and jungle monsters dying inside E grant 1 stack (no last hit required). \n Stardust is granted all at once when E ends.", "R becomes empowered after gaining 75 additional Stardust stacks once it is learned. \n After using the empowered R, it reverts to normal \n and must accumulate 75 stacks again to empower."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default aurelionsol;
