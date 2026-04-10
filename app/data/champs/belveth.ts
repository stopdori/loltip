import type { ChampData } from "../interactions/types";

const belveth: ChampData = {
  id: "belveth",
  skills: {
    P: ["AS_UP", "GHOSTING"],
    Q: ["DASH", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],
    W: ["AIRBORNE", "SLOW"],
    E: ["DMG_REDUCE", "LIFESTEAL"],
    R: ["ST_CONDITIONAL", "BUFF_FORM", "MS_UP", "WALL_HOP", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "ALLY_TP_OK"],
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
      { label: { ko: "패시브", en: "Passive" }, tags: ["STACKING", "AS_UP"] },
      { label: { ko: "버프스택", en: "Buff Stacks" }, tags: ["ST_CONDITIONAL", "AS_UP", "GHOSTING"] },
    ] },

    Q: ["DMG_PHYSICAL", "DASH", "AOE", "RECHARGE", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],
    W: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "AOE", "AIRBORNE", "SLOW"],
    E: ["DMG_PHYSICAL", "SKILL_CHANNEL", "NON_PROJECTILE", "SINGLE", "HOMING", "CANCELLABLE", "SKILL_RECAST"],
    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "DMG_TRUE", "PROC"] },
      { label: { ko: "공허 빨판상어 소환", en: "Summon Void Remora" }, tags: ["ST_CONDITIONAL", "SUMMON", "DMG_PHYSICAL", "ALLY_TP_OK"] },
      { label: { ko: "액티브", en: "Active"  }, tags: ["ST_CONDITIONAL", "BUFF_FORM", "CAST_COMMIT", "LOCKED", "AOE", "DMG_TRUE", "MOBILITY"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "한타가 별로 좋지않음. \n 소규모 교전을 많이 해야함.",
          "Q로 왔다갔다 어그로 끌다가 E로 버티기 \n R로 공허 산호 먹고 변신", "하나만 주구장창 때려서 [[DMG_TRUE]] 누적하기.",
        ], en: [
          "Not strong in full teamfights.\nFocus on frequent small skirmishes.",
          "Dash around with Q to draw aggro, sustain with E,\nthen collect Void Coral with R to transform.",
          "Keep attacking the same target to stack [[DMG_TRUE]].",
        ] },
      note1: {

        ko: [
          "P의 [[STACKING]]은 [[AS_UP]] \n 챔피언, 대형 정글, 오브젝트, 대포 킬 관여시 증가. \n 대상 주변에 보라색띠가 있으면 조건 충족.",
          "P는 스킬을 사용하면 \n 체력바 밑 스택이 2개 생김. 최대 6개 \n 스택이 있으면 [[AS_UP]], [[GHOSTING]], [[BA]]  강화.",
          "Q는 ↗,↘,↙,↖ 4방향 사용 가능. \n 방향마다 쿨타임이 따로.", 
          "W로 적 챔피언을 맞히면 \n 맞힌 방향의 Q 쿨타임 초기화.", 
          "E는 [[DMG_REDUCE]], [[LIFESTEAL]] \n 체력이 낮은대상 부터 공격",
          "R은 [[PASSIVE_BONUS]]로 \n 같은 대상을 두 대 때릴 때마다 [[DMG_TRUE]] 중첩. \n 1000번 때리면 500번 중첩.", 
          "R은 킬관여 시 공허 산호가 떨어지고 \n R을 사용하면 벨베스가 본모습으로 변신하면서 \n 여러가지 버프와 주변에 광역 [[SLOW]], [[DMG_TRUE]]. \n 본모습일 때 Q로 [[WALL_HOP]] 가능.",
        ],

        en: [
          "P [[STACKING]] grants [[AS_UP]].\nStacks on kill participation against champions, epic monsters, objectives, and cannons.\nA purple ring around a target means the condition is met.",
          "Using a skill generates 2 stacks below the health bar (max 6).\nHaving stacks enhances [[AS_UP]], [[GHOSTING]], and [[BA]].",
          "Q can be used in 4 directions: ↗↘↙↖.\nEach direction has its own cooldown.",
          "Hitting an enemy champion with W resets the Q cooldown for the direction it was hit from.",
          "E grants [[DMG_REDUCE]] and [[LIFESTEAL]].\nPrioritizes attacking the lowest-health target.",
          "R's [[PASSIVE_BONUS]] stacks [[DMG_TRUE]] every 2 hits on the same target.\n1000 hits = 500 stacks.",
          "On kill participation, Void Coral drops.\nActivating R transforms Bel'Veth into her true form, granting various buffs, AoE [[SLOW]], and [[DMG_TRUE]] nearby.\nIn true form, Q enables [[WALL_HOP]].",
        ]

      },

      note2: {
        ko: [
        "P [[STACKING]]은 적 챔피언, 에픽 킬 관여시 2스택. \n 대포, 정글몹 킬 관여 시 1스택. \n R로 공허산호 주울 때 1스택.\n 대상 주변에 보랏빛 띠가 생기면 조건 충족.", "R(본모습) 상태일 때 주변에서 죽는 미니언들은 \n 공허 빨판상어로 소환됨. \n 적군, 아군 미니언 모두 태어남. \n 빨판상어에 [[ALLY_TP_OK]] 가능.", "[[W_FLASH]] 안됨", "E 시전중에 CC맞으면 풀림"
      ],
        en: [
          "P [[STACKING]] grants 2 stacks on champion/epic kills, 1 stack on cannon/jungle kills, and 1 stack when picking up Void Coral.\nA purple ring around a target means the condition is met.",
          "Minions that die near Bel'Veth in R (true form) are reborn as Void Remoras — both allied and enemy minions.\n[[ALLY_TP_OK]] onto Remoras is possible.",
          "[[W_FLASH]] not possible",
          "E cancels if hit by CC during cast",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default belveth;
