import type { ChampData } from "../interactions/types";

const taliyah: ChampData = {
  id: "taliyah",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "STUN"],
    R: ["AIRBORNE", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q [[SLOW]]는 다진땅 에서 발동한 Q만 발동", "R은 비전투에만 사용 가능\nR벽에 텔 안타짐\nR로 전령 박치기 막을 수 있음\nR은 타고있을 때 데미지 들어오면 내려짐"
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
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taliyah;
