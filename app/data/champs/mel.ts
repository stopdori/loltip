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
    "멜 P가 상대에게 충분히 쌓였을때 체력바가 빨갛게 변하는데, 이때 멜이 평타를 친다면 처형.\n(스킬과는 상관 없음)", "W는 챔피언별로 아래 박스에 정리\n하단 박스를 참고", "E [[ROOT]]은 중심부만 걸림", "R로 상대가 처형인지 아닌지 구분하는 방법은\n하단 R의 아이콘이 황금색 테두리가 생기는지 확인"
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
