import type { ChampData } from "../interactions/types";

const katarina: ChampData = {
  id: "katarina",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["GW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "CHAIN"],
    W: ["ZONE"],
    E: ["DMG_MAGIC", "ON_HIT", "BLINK"],
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "PROJECTILE", "SWARM", "SINGLE", "CANCELLABLE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "단검에 텔 안됨", "Q는 범위내 3번만 연쇄\n챔피언 우선", "E스킬은 대상 근처에 사용하면 평타만, 대상에게 순간이동하면 추가 데미지.", "R은 움직이면 취소됨."
      ],
        en: ["Cannot TP onto daggers", "E teleports Katarina near the target and strikes.\nCasting on the target or nearby ground moves her to that position"]
        },
    },
  },

  ultCooldown: {
    6: 75,
    11: 60,
    16: 45,
  },

};

export default katarina;
