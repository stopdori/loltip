import type { ChampSkill } from "../types";

const poppy: ChampSkill = {
  id: "poppy",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ANTI_DASH", "MS_UP"],
    E: ["E_FLASH", "STUN", "WALL_HOP"],
    R: ["R_FLASH", "AIRBORNE", ],
    ETC: [],
  },

  notes: [
    "P는 방패를 주워야 방어막이 생김", "[[E_FLASH]]은 [[INSEC_KICK]] 안됨", "[[R_FLASH]]은 짧게 모은것만 됨\n차징하면 불가\n차징하면 넥서스방향으로 날려보냄", "\n ", "뽀삐가 W로 상대 이동스킬 사용하지 못하게 만들었을 때, CC해제로 풀면 이동기를 사용할수있게 되는지 궁금함 제보부탁드림\n예) 바이 Q를 뽀삐 W로 막았는데 바이가 정화로 이동불가를 풀고 R로 날아갈수있는지 등등"
  ],


  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default poppy;
