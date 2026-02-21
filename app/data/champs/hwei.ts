import type { ChampData } from "../interactions/types";

const hwei: ChampData = {
  id: "hwei",

  skills: {
    base: {
      // 🔫 Q스킬 기반
      P: [],
      Q: ["Q_FLASH"],
      W: ["W_FLASH"],
      E: ["SLOW"],
      R: ["R_FLASH", "SLOW"],
      ETC: [],
    },

    alt: {
      // 🔨 W스킬 기반
      P: [],
      Q: ["MS_UP"],
      W: ["W_FLASH", "SHIELD"],
      E: ["MANA_RESTORE"],
      R: ["R_FLASH", "SLOW"],
      ETC: [],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
      Q: ["Q_FLASH", "FEAR"],
      W: ["W_FLASH", "ROOT"],
      E: ["E_FLASH", "AIRBORNE", "SLOW"],
      R: ["R_FLASH", "SLOW"],
      ETC: [],
    },
  },

  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "흐웨이 스킬은 색상별로 외우면 좋음", "Q스킬 (빨강 - 딜)\nQW는 CC걸린 대상 또는 고립된 대상에게 추가데미지를 줌", "W스킬 (파랑 - 유틸)", "E스킬 (보라 - CC)\nEW는 날아가서 펼쳐지는데 시간이 걸림\n펼처지고도 범위내에 상대 챔피언이 있다면\n상대를 따라가는 유도투사체를 발사함\n투사체는 다른대상에게 막힐 수 있음\n(미니언 ,정글몹, 등등 포함)"
  ],
    en: []
  },


  ultCooldown: {
    6: 140,
    11: 115,
    16: 80,
  },
};

export default hwei;