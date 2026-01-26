import type { ChampSkill } from "../types";

const tryndamere: ChampSkill = {
  id: "tryndamere",
  skills: {
    P: ["CRIT"],
    Q: ["AD_UP", "HEAL"],
    W: ["AD_DOWN", "SLOW"],
    E: ["WALL_HOP"],
    R: ["INVULNERABLE"],
    ETC: [],
  },

  notes: [
    "[[E_FLASH]] 안됨", "P에 [[CRIT]] 증가는 분노 비례", "Q에 [[AD_UP]]는 잃은체력 비례", "W는 근처에 적 챔피언이 있을때 활성화 됨\n근처 부쉬안, [[INVISIBILITY]] 적을 확인하려면 W 활성화를 보면 됨\n적 챔피언이 뒤를 보였을 때 사용하면 [[SLOW]]추가 적용", "E의 쿨타임은 치명타 터지면 감소\n챔피언에 터지면 2배 감소", "R은 모든CC(침묵 포함) 걸려도 사용 가능\n단) 본인 W, E스킬 시전중에는 불가능"
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default tryndamere;
