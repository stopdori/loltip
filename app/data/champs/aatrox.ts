import type { ChampData } from "../interactions/types";

const aatrox: ChampData = {
  id: "aatrox",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "SLOW", "TETHER", "TRUE_SIGHT"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP", "LIFESTEAL"],
    R: ["MS_UP", "BUFF_FORM"],
  },
  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT"],
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SKILL_RECAST"] },
      { label: { ko: "Q3", en: "Q3"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
    ] },
    W: { phases: [
      { label: { ko: "투사체", en: "Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "SINGLE"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "SINGLE"] },
] },
    E: ["PASSIVE_BONUS", "DASH"],
    R: ["BUFF_FORM"],
  },

  notes: {
    skill: {
      note2: {
        ko: ["Q는 끝에 맞히면 [[AIRBORNE]].", "Q는 Q2 또는 Q3를 사용하지 않으면,\nQ1 쿨타임이 더 빨리 돌아옴.", "W는 스킬설명에 [[TRUE_SIGHT]]가 없는데\n효과가 똑같이 작동함.", "E스킬 [[PASSIVE_BONUS]]에는 챔피언을 대상으로\n모든피해 [[LIFESTEAL]]이 붙어있음.\n그래서 평타, Q, W, 아이템효과 등등 다 적용.",
      ],
        en: ["Q deals [[AIRBORNE]] only when hitting at the edge", "If Q2 or Q3 is not used, Q1's cooldown returns faster.", "W has no [[TRUE_SIGHT]] in the tooltip,\nbut the effect works the same", "E's base effect includes [[LIFESTEAL]] on all damage to champions,\nso it applies to basic attacks, Q, W, item effects, etc."]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default aatrox;
