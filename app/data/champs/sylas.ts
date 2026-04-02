import type { ChampData } from "../interactions/types";

const sylas: ChampData = {
  id: "sylas",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: ["W_FLASH", "LIFESTEAL", "WALL_HOP"],
    E: ["AIRBORNE", "WALL_HOP", "CC_BUFFER"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL", "HIT_EFFECT"],
    W: ["POSITION_REVEAL"],
    E: { phases: [
      { label: { ko: "", en: "" }, tags: [] },
      { label: { ko: "", en: "" }, tags: ["HIT_INDICATOR"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1 강탈", en: "R1 Hijack" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R2", en: "R2" }, tags: [] },
    ] },
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 버프스택", en: "P Buff Stack" }, tags: ["BUFF_INTERACT", "Q", "W", "E", "R"] },
      { label: { ko: "P 온힛", en: "P 온힛" }, tags: ["DMG_MAGIC", "ON_HIT", "AOE", "STACK_CONSUME"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BUFF_STACK"] },
      { label: { ko: "Q 폭발", en: "Q Explodes" }, tags: ["DMG_MAGIC", "ZONE"] },
    ] },
    
    W: ["DMG_MAGIC", "TARGETED", "DASH", "BUFF_STACK"],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["BUFF_STACK"] },
      { label: { ko: "E2", en: "E2" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DASH", "BUFF_STACK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1 강탈", en: "R1 Hijack" }, tags: ["TIMING_CAST", "TARGETED", "PROJECTILE", "BUFF_STACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["BUFF_STACK"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]], [[E_FLASH]] 안됨", "P는 평캔이 아니고, 공속증가임", "E는 E1, E2로 나뉘는데\nE2는 투척/돌진단계로 나뉨\n투척단계에 CC를 맞으면 무시하고 돌진단계를 발동\n돌진단계에 [[HARD_CC]]를 맞으면 끊길 수 있음", "R을 훔칠 때 사일러스가 [[HARD_CC]]에 걸리면 훔치기 취소.\n쿨타임은 소모됨.", "R은 챔피언별로 아래 박스에 정리"
      ],
        en: ["[[Q_FLASH]] and [[E_FLASH]] not possible", "P is not an AA cancel — it increases attack speed", "E splits into E1 and E2.\nE2 has a throw / dash phase.\nCC during the throw phase is ignored and the dash still triggers.\nHard CC during the dash can interrupt it", "R is detailed per champion in the box below"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 80,
    11: 55,
    16: 30,
  },

};

export default sylas;
