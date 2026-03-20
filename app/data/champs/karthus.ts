import type { ChampData } from "../interactions/types";

const karthus: ChampData = {
  id: "karthus",
  skills: {
    P: [],
    Q: ["Q_FLASH", "VISION"],
    W: ["W_FLASH", "VISION", "MR_SHRED", "SLOW"],
    E: ["UNINTERRUPTIBLE_CHANNEL"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "카서스는 죽었을 때 P로 인해 죽음을 극복하고 움직일 수 없지만 스킬을 사용 할 수 있음.\n이 때 마나소모를 하지 않음.", "Q는 단일 대상 명중 시 피해가 증가함", "카서스 R 시전중에 점멸쓰면 절대 안됨\n궁 취소됨",
  ],
    en: ["When Karthus dies, P allows him to overcome death — he cannot move but can still cast skills.\nMana is not consumed during this state.", "Q deals increased damage to a single target", "Using flash during R channeling cancels R immediately — never do this"]
  },

  ultCooldown: {
    6: 200,
    11: 180,
    16: 160,
  },

};

export default karthus;
