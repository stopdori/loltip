import type { ChampData } from "../interactions/types";

const mel: ChampData = {
  id: "mel",
  skills: {
    P: ["EXECUTE"],
    Q: ["Q_FLASH"],
    W: ["REFLECT", "INVULNERABLE", "MS_UP",],
    E: ["E_FLASH", "ROOT", "SLOW"],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "W는 챔피언별로 아래 박스에 정리\n하단 박스를 참고하셈", "E [[ROOT]]은 중심부만 걸림",
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default mel;
