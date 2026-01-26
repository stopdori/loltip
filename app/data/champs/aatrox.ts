import type { ChampSkill } from "../types";

const aatrox: ChampSkill = {
  id: "aatrox",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "SLOW", "SUPPRESSION", "TRUE_SIGHT"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP", "LIFESTEAL"],
    R: ["MS_UP"],
    ETC: [],
  },
  notes: [
    "Q는 끝에 맞혀야 [[AIRBORNE]]임", "W는 맞히면 [[INVISIBILITY]]도 드러낼 수 있음", "E스킬 기본효과에는 챔피언을 대상으로\n모든피해 [[LIFESTEAL]]이 붙어있음\n그래서 평타, Q, W, 발분 등등 다 적용됨",
  ],
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default aatrox;
