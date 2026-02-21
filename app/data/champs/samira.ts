import type { ChampData } from "../interactions/types";

const samira: ChampData = {
  id: "samira",
  skills: {
    P: ["MS_UP", "AIRBORNE"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "WINDSHIELD"],
    E: ["E_FLASH", "AS_UP", "WALL_HOP"],
    R: ["LIFESTEAL"],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 랭크마다 [[MS_UP]]\n[[AIRBORNE]]이 걸린 대상 기본공격 시 대상에게 [[AIRBORNE]]을 다시 검 (적 챔피언마다 쿨타임)\n설명에 최대사거리까지 돌진이라 나와있지만 그런건 없음 그냥 평타사거리", "W는 챔피언별로 아래 박스에 정리", "R 쿨타임 5초임\n스택을 잘 쌓으면 자주 사용함\nR은 치명타 적용 가능"
  ],
    en: []
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
    6: 5,
    11: 5,
    16: 5,
  },

};

export default samira;
