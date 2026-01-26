import type { ChampSkill } from "../types";

const orianna: ChampSkill = {
  id: "orianna",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "SLOW"],
    E: ["E_FLASH", "SHIELD"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "공에 텔 안타짐", "공을 들고있는 대상은 방마저 증가가 있음", "오리녹턴(말파,요네,조이 등등) 연계는\n아군이 오리 E 사거리 안에 있다가 아군이 날아가는 순간에 오리가 E를 주고 R을 연타하면 공이 도착해서 발동함",
  ],

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default orianna;
