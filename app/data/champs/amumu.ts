import type { ChampData } from "../interactions/types";

const amumu: ChampData = {
  id: "amumu",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STUN", "WALL_HOP", "VISION"],
    W: [],
    E: ["E_FLASH"],
    R: ["R_FLASH", "STUN"],
    ETC: [],
  },

   notes: {
    ko: [
    "Q로 날아가면서 R 안써짐", "Q는 두단계로 나뉨.\n투척단계 / 돌진단계\n투척 단계에 CC를 맞아도 붕대가 적중하면 돌진 단계가 발동하여 이동하는것\n단, CC는 남아있음.", "Q로 따라갈 수 있는 최대 거리? 시간?이 있는것으로 추정됨\n약 미드 1~2차 타워 사이거리 정도.", "R은 버튼을 누르고 스킬이 발동하는 데까지 딜레이가 있음.(선딜)"
  ],
    en: ["R cannot be used while Q is in flight", "Q is split into two phases: throwing phase / dash phase.\nEven if hit by CC during the throwing phase, if the bandage connects, the dash phase activates and Amumu still moves.\nHowever, the CC remains active.", "Q appears to have a maximum follow distance/time — roughly the distance between the 1st and 2nd mid lane towers.", "There is a delay (wind-up) between pressing the R button and the skill being activated."]
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
    6: 150,
    11: 125,
    16: 100,
  },

};

export default amumu;
