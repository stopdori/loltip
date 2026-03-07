import type { ChampData } from "../interactions/types";

const fiora: ChampData = {
  id: "fiora",
  skills: {
    P: ["MS_UP", "HEAL"],
    Q: ["WALL_HOP"],
    W: ["AS_UP", "MS_UP", "SLOW", "STUN"],
    E: ["AS_UP", "SLOW", "AA_RESET"],
    R: ["R_FLASH", "HEAL", "MS_UP"],
    ETC: [],
  },

  notes: {
    ko: [
   "P는 ''급소''를 찔러야 발동함", "[[Q_FLASH]](찌르기) 안됨", "[[W_FLASH]](응수) 안됨", "W는 [[SLOW]](CC기를 막아내면 [[STUN]])를 검", "W로 상대 스킬을 막았을때 [[STUN]]이 발동되는 것들은 하단 박스에 따로 정리.", "R에 [[MS_UP]]는 P효과 증가임\nR을 걸고 급소를 한번이라도 찌른 후 대상이 처치되면 장판 생성"
  ],
    en: ["P activates only when a ''vital'' is struck", "[[Q_FLASH]](Lunge) not possible", "[[W_FLASH]](Riposte) not possible", "W blocks [[SLOW]] (blocking a CC ability triggers [[STUN]])", "Abilities that trigger [[STUN]] when blocked by W are listed separately in the box below.", "[[MS_UP]] from R enhances P effectiveness\nIf a vital is hit at least once while R is active and the target dies, a geyser is created"]
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
    6: 110,
    11: 90,
    16: 70,
  },

};

export default fiora;
