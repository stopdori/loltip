import type { ChampSkill } from "../types";

const neeko: ChampSkill = {
  id: "neeko",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "INVISIBILITY"],
    E: ["E_FLASH", "ROOT"],
    R: ["R_FLASH", "AIRBORNE", "STUN"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "니코 P(변신)로 (덫,와드 등등)변신하고 W로 소환한 분신에 텔 안타짐", "W는 Ctrl+1 감정표현으로 오래 남길 수 있음", "E는 관통해서 맞히면 [[ROOT]]이 더 길게 걸림", "니코 궁콤보는 R F(점멸) 벨트가 자연스러움", "니코 R에 [[AIRBORNE]] 중에 정화 써지지만 다른행동 불가능 사실상 의미없는듯?"
  ],


  ultCooldown: {
    6: 120,
    11: 95,
    16: 90,
  },

};

export default neeko;
