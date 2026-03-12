import type { ChampData } from "../interactions/types";

const poppy: ChampData = {
  id: "poppy",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ANTI_DASH", "MS_UP", "GROUNDED"],
    E: ["E_FLASH", "STUN", "WALL_HOP"],
    R: ["R_FLASH", "AIRBORNE", ],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 방패를 주워야 방어막이 생김", "[[E_FLASH]]은 [[INSEC_KICK]] 안됨", "[[R_FLASH]]은 짧게 모은것만 됨\n충전하면 불가\n충전하면 넥서스방향으로 날려보냄", "뽀삐가 W로 상대 이동스킬을 저지하면\n더이상 이동기를 사용하지 못하게 만듦\n[[GROUNDED]]를 [[CC_CLEANSE]]하면 이동기 사용 가능", "예) 레넥톤이 뽀삐에 붙어서 E를 쓰면 스킬이 유효하고 E 쿨타임을 돌려줌. 그리고나서 뽀삐 W에 막혀 [[AIRBORNE]]과 [[GROUNDED]]가 걸림\n이때 레넥톤이 [[CC_CLEANSE]]를 사용하면 레넥톤 E 사용 가능", "E는 이동기 중에서도 판정이 최고"
  ],
    en: ["P requires picking up the shield to gain the barrier", "[[E_FLASH]] does not [[INSEC_KICK]]", "[[R_FLASH]] only works with a short charge.\nFull charge version fires toward the nexus instead", "When Poppy's W interrupts a dash, the target can no longer use movement abilities.\n[[GROUNDED]] can be removed by [[CC_CLEANSE]] to re-enable movement skills", "Example: Renekton dashes into Poppy with E — the skill activates and the cooldown runs. Then Poppy's W blocks him, applying [[AIRBORNE]] and [[GROUNDED]].\nIf Renekton uses [[CC_CLEANSE]], E becomes usable again", "E has the highest interrupt priority among movement abilities"]
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
    6: 140,
    11: 120,
    16: 100,
  },

};

export default poppy;
