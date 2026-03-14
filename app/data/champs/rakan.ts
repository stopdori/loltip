import type { ChampData } from "../interactions/types";

const rakan: ChampData = {
  id: "rakan",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "HEAL"],
    W: ["AIRBORNE", "WALL_HOP"],
    E: ["E_FLASH", "SHIELD", "WALL_HOP"],
    R: ["MS_UP", "CHARM"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[R_FLASH]] 안됨", "W는 두단계로 나뉨.\n돌진단계/도약단계\n돌진단계에 [[HARD_CC]]를 맞으면 도약단계가 발동하지 않음.", "R은 첫 대상에 닿으면 잠깐 [[MS_UP]] 추가", "자야, 라칸 시너지\n귀환타고 있는 대상에게 다가가서 귀환을 누르면, 앞서 진행한 귀환게이지를 공유받음\n \n자야 W를 라칸이 공유받음\n[[MS_UP]]는 자야가 공격해야 라칸도 증가\n \n라칸 E의 범위가 자야에겐 두배가 됨"
  ],
    en: ["[[W_FLASH]] and [[R_FLASH]] not possible", "W is split into two phases: dash phase / leap phase.\nIf hit by [[HARD_CC]] during the dash phase, the leap phase will not activate.", "R briefly applies bonus [[MS_UP]] upon hitting the first target", "Xayah & Rakan synergy:\nIf Rakan walks up to a recalling Xayah and presses recall, he shares her recall progress.\nRakan gains Xayah's W.\n[[MS_UP]] requires Xayah to attack to trigger on Rakan.\nRakan's E range is doubled when targeting Xayah"]
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
    6: 130,
    11: 110,
    16: 90,
  },

};

export default rakan;
