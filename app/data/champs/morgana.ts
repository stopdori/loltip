import type { ChampSkill } from "../types";

const morgana: ChampSkill = {
  id: "morgana",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["ROOT"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "SHIELD", "CC_IMMUNE"],
    R: ["MS_UP", "REVEALED", "SLOW", "STUN"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "E(블랙쉴드)는 [[SHIELD]]이 유지되는동안 [[CC_IMMUNE]]임\n지속시간이 끝나거나 피해로 쉴드가 벗겨지면 CC면역도 끝임\n \n단, 쉴드가 사라질정도의 충분한 데미지로 CC를 맞히면 그 스킬의 CC까지는 면역임\n예) 애쉬 R 데미지 500, 모르가나 E 보호막 200일때 맞으면 쉴드가 사라지면서 300의 데미지가 들어오지만 CC는 면역","R은 상대가 은신으로 주변에 다가와도 활성화 됨. 사용가능한지는 제보좀 부탁드림\nR에 [[STUN]]은 사슬이 끊기지 않으면 걸림"
  ],

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default morgana;
