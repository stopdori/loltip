import type { ChampData } from "../interactions/types";

const khazix: ChampData = {
  id: "khazix",
  skills: {
    base : {
    P: ["SLOW"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "HEAL"],
    E: ["WALL_HOP"],
    R: ["INVISIBILITY", "MS_UP"],
  },

  alt: {
      
      P: ["SLOW"],
      Q: ["Q_FLASH"],
      W: ["W_FLASH", "HEAL", "SLOW", "REVEALED"],
      E: ["WALL_HOP"],
      R: ["INVISIBILITY", "MS_UP"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: ["HIT_SOUND"],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: ["HIT_SOUND", "REVEALED"],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ON_HIT"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED"],
      W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"],
      E: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "DASH"],
      R: ["SKILL_RECAST"],
    },

    alt: {
      P: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ON_HIT"],
      Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "Q 진화", en: "Q Evolved" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "Q 고립", en: "Q Isolated" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL"] },
    ] },

      W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "VOLLEY", "AOE"],
      E: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "DASH"],
      R: ["SKILL_RECAST"],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P의 [[SLOW]]와 추가 피해는,\n내 모습이 상대에게 안 보일 때 발동", "진화\n모든 진화는 진화시간이 있음.\n카이사와 다르게 진화캔슬이 안됨.\n\nQ는 평타, Q의 [[RANGE_UP]]하고 데미지가 쌔지고,\n고립된 대상에게 사용하면 쿨타임을 반절정도 돌려 줌.\n\nW는 투사체가 3발로 증가하고,\n[[SLOW]]가 걸리며, 대상이 [[REVEALED]].\n\nE는 점프 거리가 두배정도 늘어나고\n킬 관여시 쿨타임 초기화.\n\nR은 [[INVISIBILITY]] 시간이 늘어나고 한번 더 [[SKILL_RECAST]] 가능.", "W의 [[HEAL]]은 폭발 범위내에 카직스가 서 있어야 발동.", "E로 날아가는 도중 스킬 시전 가능", "R의 [[INVISIBILITY]] 상태일 때 점멸 써도 안 풀림\nE(점프)는 풀림",
      ],
        en: ["P's [[SLOW]] activates when Kha'Zix is invisible to the target", "W [[HEAL]] only activates when standing inside the explosion radius", "[[INVISIBILITY]] does not break on flash.\nE (jump) does break it", "Skills can be cast while mid-air from E"]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default khazix;
