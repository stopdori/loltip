import type { ChampData } from "../interactions/types";

const jax: ChampData = {
  id: "jax",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "WALL_HOP"],
    W: ["AA_RESET"],
    E: ["DODGE", "STUN"],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 8중첩까지 가능", "R 배우고는 항상 마음속으로 ''쿵쿵따''를 생각하는게 좋음\nR을 쓰고 나서는 ''쿵따''로 바뀜 \n''따'' 리듬에는 상대를 패셈",
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
    6: 110,
    11: 100,
    16: 90,
  },

};

export default jax;
