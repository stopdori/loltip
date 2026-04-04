import type { ChampData } from "../interactions/types";

const aurelionsol: ChampData = {
  id: "aurelionsol",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "GHOSTING", "WALL_HOP"],
    E: ["SLOW", "EXECUTE"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["R_FLASH", "STUN"] },
      { label: { ko: "천상강림", en: "Falling Star" }, tags: ["R_FLASH", "STUN", "AIRBORNE", "SLOW"] },
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
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "SKILL_CHARGED", "NON_PROJECTILE", "DOT", "SINGLE"] },
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
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨", "P는 [[STACKING]](별가루)당\nQ(데미지), W(비행거리), E(처형기준), R(범위) 증가.", "Q는 [[SKILL_CHANNEL]] 스킬.\nQ를 누르면서 마우스를 회전하면 솔이 머리를 돌림.\n스택(별가루)은 적 챔피언을 1초이상 타격 시 초당 2개 증가. 잠깐 맞으면 오르지 않음.", "W(비행) 도중 우클릭하면 내려짐.\n비행 도중 Q를 사용하면 방향 그대로 비행하지만, 비행속도가 느려지고 마우스를 따라 사용 할 수 있음.\nQ를 떼면 방향 그대로 다시 빠르게 비행함.\nW(비행) 도중 E, R을 사용해도 비행이 해제되지 않음.\n벽 위에서 내리면 벽에서 가까운 땅으로 밀려남.", "E의 잡아당기는 CC는 [[AIRBORNE]]류가 아님\n적 챔피언을 E스킬로 타격하면 초당 1스택.\nE는 스쳐도 P(별가루)가 오름.\nE범위 내의 미니언, 정글몹이 죽으면 1스택.(막타X)\nE스킬이 종료될 때 별가루가 한번에 증가", "R은 적 챔피언 타격당 P(별가루) 5스택.\nR(천상강림)로 맞혀서 P(별가루)가 증가하지 않음.\nR(천상강림)은 범위에 맞혀야 [[AIRBORNE]]"
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
