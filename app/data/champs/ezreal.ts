import type { ChampSkill } from "../types";

const ezreal: ChampSkill = {
  id: "ezreal",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "WALL_HOP"],
    R: [],
    ETC: [],
  },

  notes: [
    "P는 스택형 버프여서 스킬들로 유지시켜야 함", "[[E_FLASH]] 판정이 점멸 도착한 곳에서 공격이 나감", "[[R_FLASH]]은 가능하지만, 원래 위치에서 스킬이 발동하기 때문에 불가능이라고 분류하기로 함",
  ],

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default ezreal;
