import type { ChampData } from "../interactions/types";

const aurelionsol: ChampData = {
  id: "aurelionsol",
  skills: {
    base: {
    P: [],
    Q: [],
    W: ["MS_UP", "GHOSTING", "WALL_HOP"],
    E: ["SLOW", "EXECUTE"],
    R: ["R_FLASH", "STUN"],
    ETC: [],
  },

  alt: {
      // 🔨 변신폼 (근접)
    P: [],
    Q: [],
    W: ["MS_UP", "GHOSTING", "WALL_HOP"],
    E: ["SLOW", "EXECUTE"],
    R: ["R_FLASH", "STUN", "AIRBORNE", "SLOW"],
    ETC: [],
    },
  },

  notes: {
    ko: [
    "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨", "P는 스택(별가루)당\nQ(데미지), W(비행거리), E(처형기준), R(범위) 증가.", "Q는 채널링 스킬.\nQ를 누르면서 마우스를 회전하면 솔이 머리를 돌림.\n스택(별가루)은 적 챔피언을 1초이상 타격 시 초당 2개 증가. 잠깐 맞으면 오르지 않음.", "W(비행) 도중 우클릭하면 내려짐.\n비행 도중 Q를 사용하면 방향 그대로 비행하지만, 비행속도가 느려지고 마우스를 따라 사용 할 수 있음.\nQ를 떼면 방향 그대로 다시 빠르게 비행함.\nW(비행) 도중 E, R을 사용해도 비행이 해제되지 않음.\n벽 위에서 내리면 벽에서 가까운 땅으로 밀려남.", "E의 잡아당기는 CC는 [[AIRBORNE]]류가 아님\n적 챔피언을 E스킬로 타격하면 초당 1스택.\nE는 스쳐도 P(별가루)가 오름.\nE범위 내의 미니언, 정글몹이 죽으면 1스택.(막타X)\nE스킬이 종료될 때 별가루가 한번에 증가", "R은 적 챔피언 타격당 P(별가루) 5스택.\nR(천상강림)로 맞혀서 P(별가루)가 증가하지 않음.\nR(천상강림)은 범위에 맞혀야 [[AIRBORNE]]"
  ],
    en: ["[[R_FLASH]] works by using R outside range then flashing", "Each Stardust stack increases:\nQ (damage), W (flight distance), E (execute threshold), R (area).", "Q is a channeled skill.\nRotate your mouse while holding Q to aim Sol's head.\nStardust gains 2 stacks per second when hitting an enemy champion for 1+ second — brief hits do not count.", "Right-clicking during W (flight) cancels it.\nUsing Q during flight keeps your direction but slows flight speed, and you can aim with your mouse.\nReleasing Q resumes fast flight in the same direction.\nUsing E or R during W flight does not cancel the flight.\nLanding on a wall pushes you to the nearest ground.", "E's pull CC is not [[AIRBORNE]] type.\nHitting an enemy champion with E grants 1 Stardust per second.\nGrazing with E still grants P (Stardust).\nMinions/jungle monsters dying inside E range grant 1 stack (no last hit required).\nStardust is granted all at once when E ends.", "R grants 5 P (Stardust) per champion hit.\nHits from R (Falling Stars) itself do not grant P (Stardust).\nR requires hitting with the AOE zone to apply [[AIRBORNE]]."]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default aurelionsol;
