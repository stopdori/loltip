import type { ChampData } from "../interactions/types";

const fiddlesticks: ChampData = {
  id: "fiddlesticks",
  skills: {
    P: [],
    Q: ["Q_FLASH", "FEAR"],
    W: ["LIFESTEAL"],
    E: ["E_FLASH", "SLOW", "SILENCE"],
    R: ["WALL_HOP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["SUMMON"],
    Q: ["PASSIVE_BONUS", "DMG_MAGIC", "TARGETED", "PROJECTILE", "AOE"],
    W: ["DMG_MAGIC", "SKILL_CHANNEL", "SWARM", "DOT", "CANCELLABLE"],
    E: ["DMG_MAGIC", "AOE"],
    R: { phases: [
      { label: { ko: "R 시전집중",     en: "R Channeling" }, tags: ["SKILL_CHANNEL"] },
      { label: { ko: "순간이동", en: "Blink"   }, tags: ["BUFF_FORM", "ST_CONDITIONAL", "DMG_MAGIC", "AOE", "DOT", "BLINK", "LOCKED"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "허수아비에 텔 안됨", "Q [[FEAR]]는 지속효과임 \n비전투, 시야 밖, 허수아비인 척(2초 동안 가만히 서있기)을 하면 [[FEAR]] 조건이 성립됨\n이 때 스킬피해(Q,W,E,R 다 가능)를 입히면 [[FEAR]]가 발동함\n[[FEAR]]는 상대챔피언 개별로 쿨타임이 돔\n쿨타임은 대상 주변에 원형 쿨타임이 생김", "W를 방해받지 않고 끝까지 사용하면 쿨타임 60%를 돌려줌."
      ],
        en: ["Cannot TP onto the effigy", "Q [[FEAR]] is a persistent passive.\nBeing out of combat, outside vision, or standing still for 2s (pretending to be the effigy) activates the condition.\nDealing damage with a skill then triggers [[FEAR]].\n[[FEAR]] has a per-champion cooldown shown as a circular timer around the target", "Completing the full W channel without interruption refunds 60% of its cooldown."]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 110,
    16: 80,
  },

};

export default fiddlesticks;
