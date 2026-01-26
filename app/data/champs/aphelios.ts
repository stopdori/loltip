import type { ChampSkill } from "../types";

const aphelios: ChampSkill = {
  id: "aphelios",
  skills: {
    P: ["AD_UP", "AS_UP", "AR_PEN"],
    Q: ["Q_FLASH", "LIFESTEAL", "SHIELD", "ALLY_TP_OK"],
    W: [],
    E: [],
    R: [],
    ETC: [],
  },

  notes: [
    "무기순서 만절중화반 또는 초빨보파흰", "절단검(빨강)만 Q[[LIFESTEAL]]이 최대체력이면 [[SHIELD]]으로 생김 \n반월검(흰색) 포탑에 [[ALLY_TP_OK]]",
  ],

  
  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default aphelios;
