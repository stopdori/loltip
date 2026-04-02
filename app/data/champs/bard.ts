import type { ChampData } from "../interactions/types";

const bard: ChampData = {
  id: "bard",
  skills: {
    P: ["MS_UP", "SLOW"],
    Q: ["Q_FLASH", "SLOW", "STUN"],
    W: ["HEAL", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "패시브", en: "Passives" }, tags: ["STACKING"] },
      { label: { ko: "정령", en: "On-Hit"  }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "AOE", "RECHARGE"] },
    ] },
    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE"],
    W: ["ZONE", "RECHARGE"],
    E: ["DASH"],
    R: ["TIMING_CAST", "ZONE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "고대의 종은 영구적인 [[STACKING]]", "고대의 종 효과표\n링크 이동해서 펼치기 눌러야함. https://namu.wiki/w/바드(리그%20오브%20레전드)#s-5.1", "P([[BUFF_STACK]])의 [[SLOW]]는 5스택부터 정령이 소모되면서.\n종 스택이 쌓일수록 여러 효과 증가", "Q는 그냥 맞히면 [[SLOW]]\n관통해서 다른 적이나 벽에 닿으면 [[STUN]]", "W는 땅에 깔아두고 시간이 지나면 효과증가\n상대편이 밟으면 사라짐", "E는 게임 시작하고 15초간 사용할 수 없음.", "E(터널)로 이동하는 도중에 공격도 당할 수 있고\n[[AIRBORNE]]류 [[FEAR]], [[CHARM]] 맞으면 벽에서 튀어나옴\n다른 CC 종류는 유효하지만 끝까지 이동하고 도착해서도 남아있음.", "R(존야)로 멈출수 없는 종류\n[[SPELL_SHIELD]] 예) 녹턴 W(쉴드)\n[[CC_IMMUNE]] 예) 모르가나 E(블랙쉴드), \n아이템 쉴드류 예) 밤의 끝자락(밤끝), 밴시의 장막\n[[UNSTOPPABLE]] 예) 말파이트 R"
      ],
        en: ["Ancient Chimes grant permanent [[STACKING]]", "Chime bonus effects table\n(expand after clicking the link): https://namu.wiki/w/바드(리그%20오브%20레전드)#s-5.1", "P's [[SLOW]] activates at 5 stacks when a spirit is consumed.\nMore stacks increase various effects", "Q applies [[SLOW]] on a straight hit.\nPiercing through another enemy or hitting a wall applies [[STUN]]", "W gains power over time when left on the ground.\nEnemies stepping on it destroy it", "You can be attacked during E travel.\nBeing hit by [[AIRBORNE]], [[FEAR]], or [[CHARM]] ejects you from the tunnel.\nOther CC types apply but you still travel to the end — the CC remains after arrival.", "R (Tempered Fate) cannot be stopped by:\n[[SPELL_SHIELD]] e.g. Nocturne W\n[[CC_IMMUNE]] e.g. Morgana E (Black Shield)\nItem shields e.g. Night's Edge, Banshee's Veil\n[[UNSTOPPABLE]] e.g. Malphite R"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default bard;
