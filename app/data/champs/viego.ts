import type { ChampData } from "../interactions/types";

const viego: ChampData = {
  id: "viego",
  skills: {
    P: ["HEAL", "MS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "STUN", "AA_RESET"],
    E: ["CAMOUFLAGE", "AS_UP", "MS_UP"],
    R: ["WALL_HOP", "KNOCKBACK", "SLOW", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF_FORM"],
    Q: { phases: [
      { label: { ko: "Q 패시브 평타 강화", en: "Q Passive BA" }, tags: ["PASSIVE_BONUS", "BA", "DMG_PHYSICAL"] },
      { label: { ko: "Q 패시브 디버프", en: "Q Passive Debuff" }, tags: ["DEBUFF_INTERACT", "Q", "W"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "DEBUFF_STACK"] },
    ] },
    
    W: ["DMG_MAGIC", "SKILL_CHARGED", "DEBUFF_STACK"],
    E: ["ZONE", "BUFF_STACK", "CAMOUFLAGE"],
    
    R: { phases: [
      { label: { ko: "준비단계", en: "Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "순간이동단계", en: "Blink" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "BLINK", "SINGLE", "AOE", "UNSTOPPABLE"] },
      { label: { ko: "순간이동단계 재사용", en: "Blink Recast" }, tags: ["ST_CONDITIONAL", "SKILL_RECAST", "R"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "P로 챔피언을 지배했다면\n적에게 다가갈 때 [[MS_UP]]", "벽에 E쓰면 암흑시야여도 보임\n정글링할때 벽에 E를 쓰면\n상대가 내 위치를 알 수 있음.", "R2 설명에 [[UNSTOPPABLE]]가 없지만, 스킬로 날아갈 때 비에고 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.", "R의 [[SLOW]]는 체력이 가장 낮은 적 챔피언에게만 적용", "R을 사용가능 할때, 사용하지 않고 영혼을 흡수하고 R을 사용하면, R의 쿨타임이 3초.", "R 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 비에고가 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: ["P grants [[MS_UP]] when approaching an enemy after possessing a champion", "Using E near a wall reveals Viego's position even through fog of war — be careful when jungling", "R [[SLOW]] only applies to the enemy champion with the lowest HP"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default viego;
