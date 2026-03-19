import type { ChampData } from "../interactions/types";

const taliyah: ChampData = {
  id: "taliyah",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "STUN", "UNINTERRUPTIBLE_CAST"],
    R: ["AIRBORNE", "WALL_HOP", "UNINTERRUPTIBLE_CAST"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q [[SLOW]]는 다진땅 에서 발동한 Q만 발동", "R의 [[UNINTERRUPTIBLE_CAST]]는 R1에만 해당.", "R은 비전투에만 사용 가능\n서핑 타는법은 R1을 누르고 일정시간 내에 R2를 눌러야 서핑 가능.\nR은 타고있을 때 데미지 들어오면 내려짐", "R로 전령 박치기 막을 수 있음", "R(벽)에 텔 안타짐"
  ],
    en: ["Q [[SLOW]] only applies from Q cast on Worked Ground", "R is only usable out of combat.\nCannot TP onto R wall.\nR can block Void Herald charge.\nTaking damage while riding R dismounts Taliyah"]
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
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taliyah;
