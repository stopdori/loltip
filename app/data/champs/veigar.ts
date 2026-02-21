import type { ChampData } from "../interactions/types";

const veigar: ChampData = {
  id: "veigar",
  skills: {
    P: ["AP_UP"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "STUN"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[AP_UP]]는 스택당 1주문력 영구 증가\n스킬 적중 시 1스택\n킬 관여 시 5스택", "적 처치 시 1스택(대형은 2)은 Q로만 가능", "W는 50스택당 쿨타임감소 10%(곱연산)\n이론상 노쿨 가능", "E의 [[STUN]]은 지평선 외곽에 닿아야 발동", "R은 대상 체력이 33%이하일 때 최대"
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

export default veigar;
