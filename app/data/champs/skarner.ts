import type { ChampData } from "../interactions/types";

const skarner: ChampData = {
  id: "skarner",
  skills: {
    P: [],
    Q: ["Q_FLASH", "AS_UP", "SLOW", "AA_RESET"],
    W: ["W_FLASH", "SLOW", "SHIELD"],
    E: ["SUPPRESS", "STUN", "WALL_HOP"],
    R: ["SUPPRESS"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: ["HIT_INDICATOR"],
    R: ["HIT_INDICATOR", "REVEALED"],
  },

  gimmick: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["TIMING_CAST", "BUFF_STACK"] },
      { label: { ko: "Q1 버프스택", en: "Q1 Buff Stacks" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "ON_HIT", "AOE"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"] },
    ] },
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["SKILL_CHANNEL", "SINGLE", "MOBILITY", "CANCELLABLE", "SKILL_RECAST",] },
      { label: { ko: "E 벽꿍", en: "E Terrain Crush" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "SINGLE", "MOBILITY"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "Q1로 돌주으면 평캔 됨\n그리고 평타 3번이 강화되는데\n마지막 평타가 [[SLOW]]\n던진 돌에 맞아도 [[SLOW]]", "E는 상대에게 부딪히면 [[SUPPRESS]]\n그리고 3티모미터 정도 더 이동 가능\n그 안에 벽에 부딪히면 [[STUN]]", "R은 3명까지 [[SUPPRESS]] 가능\n이때 스카너는 이동이 가능하고\nW스킬과 (점멸을 제외한)스펠 사용 가능\n적중하면 [[MS_UP]]", "Q1을 사용하고 R을 사용하면 자동으로 Q2를 시전하고 R을 시전."
      ],
        en: ["Picking up a rock with Q enables AA cancel.\nThe final empowered auto applies [[SLOW]].\nThe thrown rock also applies [[SLOW]]", "E suppresses on collision, then allows ~3 more units of movement.\nHitting a wall during that window applies [[STUN]]", "R can [[SUPPRESS]] up to 3 targets.\nDuring R, Skarner can move and use W and non-flash summoner spells.\n[[MS_UP]] applies on hit"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default skarner;
