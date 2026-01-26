import type { ChampSkill } from "../types";

const galio: ChampSkill = {
  id: "galio",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["SHIELD", "DMG_REDUCE", "TAUNT"],
    E: ["AIRBORNE"],
    R: ["R_FLASH", "SHIELD", "AIRBORNE", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "[[W_FLASH]] 막혔습니다\nW는 스마트키를 풀고 쓰시면 좋음", "[[E_FLASH]] 될거같은데 안됨\nE스킬은 좀 특별한데, 조건부 cc면역같은 기능이 있음\nE스킬은 두단계로 나뉨 후진/전진\n후진 타이밍에 cc를 맞으면 무시함\n예) 블리츠 그랩, 노틸 궁에어본 등등",
  ],

  ultCooldown: {
    6: 180,
    11: 160,
    16: 140,
  },

};

export default galio;
