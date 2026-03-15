import type { ChampData } from "../interactions/types";

const cassiopeia: ChampData = {
  id: "cassiopeia",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "MS_UP"],
    W: ["W_FLASH", "GROUNDED", "SLOW"],
    E: ["E_FLASH", "HEAL"],
    R: ["R_FLASH", "STUN", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "이제 신발 구매가능함", "Q [[MS_UP]]는 맞혀야 증가함", "W에 관련된 판정은 챔피언별로 하단 박스에 정리.", "E는 독이걸린 대상에게 추가 데미지.\n독은 Q, W 뿐만 아니라\n티모 E(평타), R(버섯), 트위치 P, W(독병), 신지드 Q(독구름)의 독에도 적용.", "R은 카시를 바라보고 걸리면 [[STUN]]\n카시를 등지고 걸리면 [[SLOW]]"
  ],
    en: ["Boots can now be purchased", "Q [[MS_UP]] only applies if the shot lands", "Interactions with W are listed in the matchup box below.", "E deals bonus damage to poisoned targets.\nPoison sources include Q, W, as well as\nTeemo E (auto), R (mushroom), Twitch P, W, and Singed Q.", "R applies [[STUN]] to enemies facing Cassiopeia, and [[SLOW]] to those facing away"]
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

export default cassiopeia;
