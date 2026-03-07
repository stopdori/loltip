import type { ChampData } from "../interactions/types";

const ahri: ChampData = {
  id: "ahri",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "CHARM"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[HEAL]]은 9스택이 되면 발동\n스택은 미니언, 몬스터 처치시 1획득\n3초이내 킬관여 시 18스택 정도 효과 즉시발동\n(이때 스택이 날아가지 않음)", "R 지속시간동안 킬 관여 시\nR 횟수가 +1 되고, 지속시간 증가"
  ],
    en: ["P's [[HEAL]] activates at 9 stacks.\nGain 1 stack from killing minions or monsters.\nKill participation within 3s triggers ~18 stacks instantly\n(stacks are not consumed when triggered this way)", "Kill participation during R's duration\ngrants +1 R charge and extends its duration"]
  },

vision: {
    P: [],
    Q: [],
    W: [],
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

export default ahri;
