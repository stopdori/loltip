import type { ChampData } from "../interactions/types";

const neeko: ChampData = {
  id: "neeko",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "INVISIBILITY"],
    E: ["E_FLASH", "ROOT"],
    R: ["R_FLASH", "SUSPENDING", "STUN"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "니코 P(변신)로 (덫,와드 등등)변신하고 W로 소환한 분신에 텔 안타짐", "W는 Ctrl+1 감정표현으로 오래 남길 수 있음", "E는 관통해서 맞히면 [[ROOT]]이 조금 더 길게 걸림", "니코 궁콤보는 R F(점멸) 벨트가 자연스러움", "니코 R은 세단계로 이루어짐\n준비단계\n[[SUSPENDING]]단계 니코가 점프하여 적 챔피언들을 [[SUSPENDING]]시킴\n[[STUN]]단계 니코가 착지하면서 범위에 [[STUN]]", "적 챔피언이 [[SUSPENDING]]단계에 범위밖에 있다가 [[STUN]]단계에 범위에 들어와있으면 [[STUN]]과 피해가 들어감"
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
    11: 95,
    16: 90,
  },

};

export default neeko;
