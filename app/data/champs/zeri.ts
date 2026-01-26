import type { ChampSkill } from "../types";

const zeri: ChampSkill = {
  id: "zeri",
  skills: {
    P: ["EXECUTE"],
    Q: ["Q_FLASH", "AD_UP"],
    W: ["SLOW"],
    E: ["WALL_HOP"],
    R: ["R_FLASH", "AS_UP", "MS_UP"],
    ETC: [],
  },

  notes: [
    "Q 쿨타임은 스킬가속, 공속에 영향을 받음\n공속의 초과분 70%가 공격력으로 변환", "W에 [[CRIT]] 적용 가능", "E로 벽 넘으면서 W 써짐\nE를 쓰면 Q가 3번 관통됨", "R은 적 챔피언을 맞혀야 버프됨\n버프 지속시간은 평타, Q, W로\n피해를 입히면 갱신됨 (아이템효과로 안됨)"
  ],

  ultCooldown: {
    6: 80,
    11: 75,
    16: 70,
  },

};

export default zeri;
