import type { ChampData } from "../interactions/types";

const blitzcrank: ChampData = {
  id: "blitzcrank",
  skills: {
    P: ["SHIELD"],
    Q: ["GRAB"],
    W: ["AS_UP", "MS_UP"],
    E: ["AA_RESET", "AIRBORNE"],
    R: ["R_FLASH", "SHIELD_BREAK", "SILENCE", "UNINTERRUPTIBLE_CAST"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "Q(그랩) 빠지면 그냥 깡통임.\nQ를 아끼는것도 좋은 전략.", "W는 지속시간이 종료되면 자체 이속감소가 걸림"
  ],
    en: ["[[Q_FLASH]] not possible", "Without Q (Rocket Grab), Blitzcrank is just a tin can.\nSaving Q is also a valid strategy.", "W applies a self [[SLOW]] when its duration expires"]
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
    6: 60,
    11: 40,
    16: 20,
  },

};

export default blitzcrank;
