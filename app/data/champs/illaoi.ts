import type { ChampData } from "../interactions/types";

const illaoi: ChampData = {
  id: "illaoi",
  skills: {
    P: ["HEAL", "ALLY_TP_OK"],
    Q: ["PSEUDO_UNSTOPPABLE"],
    W: ["AA_RESET", "WALL_HOP"],
    E: ["E_FLASH", "SLOW", "PSEUDO_UNSTOPPABLE"],
    R: ["R_FLASH", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "촉수 공격 한대당 잃은체력 회복임\n그래서 사실상 Q, W, E, R 다 [[HEAL]] 됨", "일라오이 E는 미니언 관통 불가\n상대 챔피언을 맞히면 상대의 영혼을 추출함\n영혼을 공격하면 피해가 육체에게 전이됨\n영혼의 체력이 0이 되거나 범위를 벗어나면 육체에게 돌아가고 [[SLOW]]와 표식"
  ],
    en: ["[[Q_FLASH]] not possible", "Each tentacle hit heals based on missing HP, so effectively Q, W, E, R all [[HEAL]]", "Illaoi's E cannot pierce minions.\nHitting an enemy champion extracts their soul.\nDamaging the soul transfers damage to the body.\nIf the soul reaches 0 HP or leaves the area, it returns to the body applying [[SLOW]] and a mark"]
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
    11: 95,
    16: 70,
  },

};

export default illaoi;
