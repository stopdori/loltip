import type { ChampData } from "../interactions/types";

const draven: ChampData = {
  id: "draven",
  skills: {
    P: [],
    Q: [],
    W: ["AS_UP", "MS_UP"],
    E: ["E_FLASH", "AIRBORNE", "SLOW"],
    R: ["EXECUTE"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q [[AA_RESET]] 안됨", "드레이븐 R로 피해를준 다음 \n대상의 남은 체력이 드레이븐 스택보다 낮으면 처형됨\n예) 대상 체력 1000, 드레이븐 궁 데미지 300, 스택 700 이면 처형",
  ],
    en: ["Q does not [[AA_RESET]]", "After R deals damage, if the target's remaining HP is lower than Draven's stack bonus, they are executed.\nExample: target HP 1000, R damage 300, stack bonus 700 → execute"]
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
    11: 90,
    16: 80,
  },

};

export default draven;
