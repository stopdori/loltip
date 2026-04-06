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
    W: ["SKILL_CHANNEL", "TIMING_CAST", "DASH"],
    E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DOT"],
    R: { phases: [
      { label: { ko: "R", en: "The Skies Descend" }, tags: ["DMG_MAGIC", "PROJECTILE", "ZONE"] },
      { label: { ko: "천상강림", en: "Falling Star" }, tags: ["DMG_MAGIC", "PROJECTILE", "ZONE"] },
      { label: { ko: "천상강림 충격파", en: "Waves" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "작성자가 잘 다루지 못함. \n 고수분들 훈수 부탁드림.",
        ], en: [] },
      note1: {

        ko: [
          "P의 별가루 [[STACKING]]으로 스킬 강화.",
          "Q는 버튼을 누르면서 마우스를 움직여 사용. \n 적 챔피언에게 6각형 디버프가 생기고 \n 다 차면 폭발피해. \n 1초당 2의 별가루.",
          "W는 날아가는 도중 움직이면 내려짐. \n Q, E, R은 사용해도 내리지 않음. \n 쿨타임 일 때 킬 관여시 쿨감.",
          "E는 중앙 블랙홀에 조건부 [[EXECUTE]] \n 블랙홀에 챔피언이 닿으면 초당 별가루 1. \n E 범위에서 미니언, 몬스터가 죽으면 마리당 1. \n 막타치지 않아도 오름.",
          "R은 범위 [[STUN]] \n 강화 R(천상강림)은 중앙범위 [[AIRBORNE]] \n 넓은 범위 충격파는 [[SLOW]] \n\n 일반 R은 챔피언당 별가루 5. \n 강화 R은 없음.",
          
        ],

        en: []

      },

      note2: {
        ko: [
        "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨", 
        "P는 [[STACKING]](별가루)당\nQ(데미지), W(비행거리), E(처형기준), R(범위) 증가.", "Q는 잠깐 맞으면 별가루가 오르지 않음. \n 1초이상 지속시 초당 2.", 
        "W(비행) 도중 Q를 사용하면 방향 그대로 비행하지만, 비행속도가 느려지고 마우스를 따라 사용 할 수 있음. \n Q를 떼면 방향 그대로 다시 빠르게 비행. \n W 도중 Q, E, R을 사용해도 비행이 해제되지 않음. \n 벽 위에서 내리면 벽에서 가까운 땅으로 밀려남.", 
        "E는 블랙홀과 강착원반으로 나뉨. \n 블랙홀은 중앙부분의 구체. \n 강착원반은 주변 테두리 \n 적 챔피언이 E의 블랙홀 부분에 닿으면 초당 1스택. \n 블랙홀에 잠깐 스쳐도 별가루가 오름. \n E 범위에서 미니언, 정글몹이 죽으면 1스택. \n (막타 치지 않아도 괜찮음.)\nE스킬이 종료될 때 별가루가 한번에 증가", "R은 스킬을 배우고 나서 \n 75스택을 추가로 쌓으면 강화. \n 강화된 R을 사용하면 일반 R로 돌아갔다가 \n 다시 75스택을 모으면 강화.",
      ],
        en: ["[[R_FLASH]] works by using R outside range then flashing", "Each Stardust stack increases:\nQ (damage), W (flight distance), E (execute threshold), R (area).", "Q is a channeled skill.\nRotate your mouse while holding Q to aim Sol's head.\nStardust gains 2 stacks per second when hitting an enemy champion for 1+ second — brief hits do not count.", "Right-clicking during W (flight) cancels it.\nUsing Q during flight keeps your direction but slows flight speed, and you can aim with your mouse.\nReleasing Q resumes fast flight in the same direction.\nUsing E or R during W flight does not cancel the flight.\nLanding on a wall pushes you to the nearest ground.", "E's pull CC is not [[AIRBORNE]] type.\nHitting an enemy champion with E grants 1 Stardust per second.\nGrazing with E still grants P (Stardust).\nMinions/jungle monsters dying inside E range grant 1 stack (no last hit required).\nStardust is granted all at once when E ends.", "R grants 5 P (Stardust) per champion hit.\nHits from R (Falling Stars) itself do not grant P (Stardust).\nR requires hitting with the AOE zone to apply [[AIRBORNE]]."]
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
