import type { ChampData } from "../interactions/types";

const sion: ChampData = {
  id: "sion",
  skills: {
    P: ["REVIVE"],
    Q: ["SLOW", "AIRBORNE", "STUN"],
    W: ["HEAL", "SHIELD"],
    E: ["E_FLASH", "SLOW", "AR_SHRED"],
    R: ["R_FLASH", "UNSTOPPABLE", "SLOW", "AIRBORNE", "STUN"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[W_FLASH]] 안됨", "Q는 충전을 하면 바닥에 범위가 차오르는데\n1초이상 충전시 [[AIRBORNE]], [[STUN]] 추가", "Q를 직접 발사하지 않고 다른 방해받으면\n스킬이 무효화", "W는 최대체력 증가여서 [[GW]]효과 안받음", "R은 이동거리 비례해서 데미지, [[STUN]]이 증가\n상대와 부딪히면 [[AIRBORNE]], 이후 착지하고 [[STUN]]"
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
    6: 140,
    11: 100,
    16: 60,
  },

};

export default sion;
