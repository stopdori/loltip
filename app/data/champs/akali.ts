import type { ChampData } from "../interactions/types";

const akali: ChampData = {
  id: "akali",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["INVISIBILITY", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL", "FEEDBACK_INDICATOR"],
    W: [],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "E2", en: "E2" }, tags: ["POSITION_REVEAL"] },
    ] },
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R2", en: "R2" }, tags: ["POSITION_REVEAL"] },
    ] },
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "BUFF_STACK"],
    W: ["ZONE"],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DASH", "MARK", "BUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "DASH", "BUFF_STACK"]},
    ] },
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "BUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "R2", en: "R2"  }, tags: ["DMG_MAGIC", "AOE", "DASH", "BUFF_STACK"] },
    ] },
  },

  notes: {
    ko: [
    "Q의 [[SLOW]]는 사거리 끝에 맞혀야만 유효.", "W는 장막 안에서만 [[INVISIBILITY]].\n[[REVEALED]]이 있는 스킬(예- 리신E)에\n스킬을 맞고 숨으면 보임.\n맞기전에 숨으면 안보임.\n절대시야(예 - 리신Q)는 무조건 보임.", "E1은 [[TRUE_SIGHT]].\n[[INVISIBILITY]] 대상에게 E2를 사용해서 E1 표창이 사라지면 더 이상 모습이 보이지 않음.", "E1를 장막에 맞히고 E2로 되돌아 올 수 있음.\n[[UNTARGETABLE]] 대상에게는 E2 사용불가.\n예) 피즈 E(재간둥이), 블라디 W(웅덩이)"
  ],
    en: ["Q's [[SLOW]] only applies when hitting at max range", "W grants [[INVISIBILITY]] only inside the shroud.\nIf hit by a [[REVEALED]] ability (e.g. Lee Sin E) after hiding, you become visible.\nHiding before being hit keeps you hidden.\nTrue sight (e.g. Lee Sin Q) always reveals you", "E1 can be thrown into the shroud and recalled with E2.\nE2 cannot target [[UNTARGETABLE]] units\ne.g. Fizz E (Playful/Trickster), Vladimir W (Sanguine Pool)"]
  },

  ultCooldown: {
    6: 120,
    11: 90,
    16: 60,
  },

};

export default akali;
