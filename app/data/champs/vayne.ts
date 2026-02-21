import type { ChampData } from "../interactions/types";

const vayne: ChampData = {
  id: "vayne",
  skills: {
    P: ["MS_UP"],
    Q: ["AA_RESET"],
    W: [],
    E: ["E_FLASH", "KNOCKBACK", "STUN"],
    R: ["INVISIBILITY"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "P는 상대 챔피언에 접근할 때 적용", "Q를 벽에 붙어서 구르면 평캔 엄청빠름", "E에 [[STUN]]은 [[KNOCKBACK]]으로 벽에 부딪혀야 발동\n[[E_FLASH]]은 [[INSEC_KICK]] 가능", "R중에 Q로 [[INVISIBILITY]] 했을 때\n점멸써도 안풀림",
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
    6: 100,
    11: 85,
    16: 70,
  },

};

export default vayne;
