import type { ChampData } from "../interactions/types";

const ivern: ChampData = {
  id: "ivern",
  skills: {
    P: [],
    Q: ["ROOT", "WALL_HOP"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "SHIELD", "SLOW"],
    R: ["AIRBORNE", "ALLY_TP_OK"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "MARK", "DASH"],

    W: { phases: [
      { label: { ko: "수풀", en: "Bush" }, tags: ["PASSIVE_BONUS", "TIMING_CAST", "BUFF_STACK", "ZONE"] },
      { label: { ko: "추가효과", en: "" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },


    E: { phases: [
      { label: { ko: "보호막", en: "Shield" }, tags: ["TARGETED"] },
      { label: { ko: "폭발", en: "Burst" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },

    R:    { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SUMMON"] },
      { label: { ko: "데이지", en: "Daisy" }, tags: ["DMG_MAGIC", "TIMING_CAST", "DEBUFF_STACK"] },
      { label: { ko: "데이지 3타", en: "Daisy BA3" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "PROC", "SKILL_RECAST"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "W는 기본 8초 지속.\n아이번팀이 시야를 유지하면 최대 45초 지속.\nW의 수풀 버프는 일반 부쉬도 포함해서 발동함.\n조건은 W범위 만큼의 거리 내의 챔피언이 부쉬안에 있으면 버프를 받음.", "E는 일정시간 후 폭발하는데\n폭발에 상대가 맞으면 [[SLOW]]\n맞은대상이 없으면 추가 보호막 "
      ],
        en: ["[[Q_FLASH]] not possible", "W explodes after a delay.\nHitting an enemy with the explosion applies [[SLOW]].\nIf no enemy is hit, Ivern gains a bonus shield"]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 130,
    16: 120,
  },

};

export default ivern;
