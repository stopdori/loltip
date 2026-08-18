import type { ChampData } from "../interactions/types";

const bard: ChampData = {
  id: "bard",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP", "SLOW"],
    Q: ["Q_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["DROP", "HEAL", "MS_UP"],
    E: ["E_FLASH", "DASH", "WALL_HOP"],
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
      { label: { ko: "정령", en: "On-Hit"  }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "AOE", "RECHARGE", "SLOW"] },
    ] },
    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE_ONCE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["DROP", "RECHARGE"],
    E: ["DASH", "WALL_HOP"],
    R: ["TIMING_CAST", "ZONE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q, [[Q_FLASH]]로 끊어먹거나. \n 앞에서 어그로끌다 E로 탈출하고 따라오면 Q로 [[STUN]].",
          "적 팀 주요 궁극기를 R로 흡수하거나 \n R로 아군 한타각을 만들어주기.",
        ], en: [
          "Interrupt with Q or [[Q_FLASH]].\nDraw aggro from the front, escape with E, then [[STUN]] with Q as they follow.",
          "Absorb key enemy ultimates with R,\nor use R to create a teamfight opening for your allies.",
        ] },
      note1: {

        ko: [
          "P는 맵에 주기적으로 종 생성. ([[STACKING]]) \n 모으면 여러가지 효과 추가. \n 디테일한 것은 하단 TMI 참고.",
          "Q는 1회만 관통. \n 관통해서 벽이나 다른 적과 충돌하면 둘다 [[STUN]]",
          "W는 바닥에 [[DROP]] 설치. \n 밟으면 [[MS_UP]], [[HEAL]]. \n 설치하고 밟지 않으면 5초동안 효과 점차 증가. \n 상대팀이 밟으면 파괴.",
          "E는 벽에 통로를 뚫어 누구든 [[DASH]]할 수 있음. \n E를 설치하는 거리는 포탑사거리 정도.",
          "R은 광역 존야. \n 잘쓰면 케리아 못쓰면 개트롤."
        ],

        en: [
          "P periodically spawns chimes across the map ([[STACKING]]).\nCollecting them grants various bonus effects.\nSee the notes below for details.",
          "Q pierces once.\nIf it hits a wall or another enemy after piercing, both targets are [[STUN]]ned.",
          "W [[DROP]] places a shrine on the ground.\nStepping on it grants [[MS_UP]] and [[HEAL]].\nIf left unstepped, its effect gradually increases over 5 seconds.\nEnemies can step on it to destroy it.",
          "E creates a tunnel through walls that anyone can [[DASH]] through.\nThe placement range is approximately one turret range.",
          "R is a targeted AoE Zhonya's.\nIn good hands it's a clutch play; misused, it's a teamfight-losing troll.",
        ]

      },

      note2: {
        ko: [
        "고대의 종은 영구적인 [[STACKING]]", 
        "고대의 종 효과표\n링크 이동해서 펼치기 눌러야함. https://namu.wiki/w/바드(리그%20오브%20레전드)#s-5.1", 
        "P([[BUFF_STACK]])의 정령은. 종 5스택부터 생김. \n 정령이 소모되면서 광역피해, [[SLOW]].\n종 스택이 쌓일수록 여러 효과 증가", 
        "E는 게임 시작하고 15초간 사용할 수 없음.", 
        "E(터널)로 이동하는 도중에 공격도 당할 수 있고\n[[AIRBORNE]]류 [[FEAR]], [[CHARM]] 맞으면 벽에서 튀어나옴\n다른 CC는 효과가 유효하지만 \n 이동이 유지되고 도착해서 효과가 남아있음.", 
        "관측한 가장 긴 터널은 블루팀 바텀 2차 3차 포탑거리 정도. \n 더 긴 터널 본적 있으면 제보 부탁.", 
        "R(존야)로 멈출수 없는 종류\n[[SPELL_SHIELD]] 예) 녹턴 W, 시비르 E\n[[CC_IMMUNE]] 예) 모르가나 E(블랙쉴드), \n아이템 쉴드류 예) 밤의 끝자락(밤끝), 밴시의 장막\n[[UNSTOPPABLE]] 예) 말파이트 R"
      ],
        en: [
          "Ancient Chimes grant permanent [[STACKING]]",
          "Chime bonus effects table https://wiki.leagueoflegends.com/en-us/Bard",
          "P's spirit activates at 5 stacks, dealing AoE damage and applying [[SLOW]].\nMore stacks increase various effects.",
          "E is unavailable for the first 15 seconds of the game.",
          "You can be attacked during E travel.\nBeing hit by [[AIRBORNE]], [[FEAR]], or [[CHARM]] ejects you from the tunnel.\nOther CC types apply but you still travel to the end — the CC remains after arrival.",
          "The longest tunnel observed reaches approximately from Blue team's bot lane tier 2 to tier 3 turret.\nLet us know if you've seen a longer one.",
          "R (Tempered Fate) cannot be stopped by:\n[[SPELL_SHIELD]] e.g. Nocturne W\n[[CC_IMMUNE]] e.g. Morgana E (Black Shield)\nItem shields e.g. Night's Edge, Banshee's Veil\n[[UNSTOPPABLE]] e.g. Malphite R",
        ]
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
