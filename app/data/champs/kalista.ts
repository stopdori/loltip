import type { ChampData } from "../interactions/types";

const kalista: ChampData = {
  id: "kalista",
  skills: {
    P: ["ST_CONDITIONAL", "DASH", "WALL_HOP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "DASH", "WALL_HOP"],
    W: ["SUMMON", "ALLY_TP_OK"],
    E: ["SLOW"],
    R: ["AIRBORNE", "UNTARGETABLE", "TOWER_DODGE", "INVULNERABLE"],
  },

  vision: { 
    P: [], 
    Q: [], 
    W: ["REVEALED"], 
    E: ["POSITION_REVEAL"], 
    R: [] 
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DASH", "WALL_HOP"],

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "PIERCE", "SEPARATOR", "ST_CONDITIONAL", "DASH", "WALL_HOP"],

    W:    { phases: [
      { label: { ko: "패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "DMG_MAGIC"] },
      { label: { ko: "센티넬", en: "Sentinel" }, tags: ["SUMMON", "RECHARGE"] },
    ] },

    E:    { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "DEBUFF_STACK"] },
      { label: { ko: "뽑아 찢기", en: "Rend" }, tags: ["ST_CONDITIONAL", "PROC", "DMG_PHYSICAL", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"] },
    ] },

    R:    { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["ST_CONDITIONAL"] },
      { label: { ko: "R2", en: "R2" }, tags: ["ST_DELAYED", "DASH", "AIRBORNE", "UNTARGETABLE", "TOWER_DODGE", "INVULNERABLE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "E로 처치하여 [[CDR_RESET]] 중요함.", "탱커 잘잡음. \n 앞라인부터 쭉쭉 카이팅으로 녹여 나가면 좋음.",
        ], en: ["Killing with E for [[CDR_RESET]] is important.", "Great at taking down tanks.\n Kiting through the frontline one by one is ideal."] },
      note1: {

        ko: [
          "P는 아군 1명과 계약. \n 계약은 바꿀 수 없음.",

          "P의 효과로 [[BA]] 후 우클릭으로 [[DASH]] 가능.",

          "Q로 대상을 처치하면 [[PIERCE]]. \n 이때 대상이 가지고 있던 \n E의 [[DEBUFF]] 스택이 옮겨 감. \n Q로도 P의 [[DASH]] 발동 가능.",

          "W의 [[PASSIVE_BONUS]]는 \n 칼리와 계약자가 같은 대상을 [[BA]]로 때리면 \n 최대체력 비례 [[DMG_MAGIC]].",

          "W는 정찰병 [[SUMMON]]. \n 세 번 왕복 하거나 챔피언을 발견하면 사라짐. \n 챔피언 [[REVEALED]].",

          "E의 [[PASSIVE_BONUS]]는 \n [[BA]], [[Q]]의 창이 4초간 무제한 중첩.",

          "E는 주변에 쌓인 창을 뜯어내어 \n 스택당 [[DMG_PHYSICAL]]와 [[SLOW]]. \n 처치되면 [[CDR_RESET]], [[MANA_RESTORE]].",

          "R은 계약자를 칼리에게 끌어옴. \n 계약자는 [[UNTARGETABLE]], [[TOWER_DODGE]], [[INVULNERABLE]] \n 계약자가 우클릭으로 [[DASH]]할 수 있음. \n 적 챔피언과 부딪히면 \n 적들은 [[AOE]] [[AIRBORNE]] \n 계약자의 [[BA]] 사거리 만큼 뒤로 돌아옴.",
        ],

        en: [
          "P forms a pact with one ally.\n The pact cannot be changed.",

          "With P's effect, you can [[DASH]] by right-clicking after a [[BA]].",

          "Q [[PIERCE]]s when it kills a target.\n The [[DEBUFF]] stacks from E on that target are transferred.\n Q can also trigger P's [[DASH]].",

          "W's [[PASSIVE_BONUS]] deals [[DMG_MAGIC]] based on max health\n when Kalista and her Oathsworn both [[BA]] the same target.",

          "W [[SUMMON]]s a sentinel.\n It disappears after three passes or upon spotting a champion.\n Champions are [[REVEALED]].",

          "E's [[PASSIVE_BONUS]] allows Spears from [[BA]] and [[Q]] to stack infinitely for 4 seconds.",

          "E rips out nearby Spears,\n dealing [[DMG_PHYSICAL]] and [[SLOW]] per stack.\n Kills grant [[CDR_RESET]] and [[MANA_RESTORE]].",

          "R pulls the Oathsworn ally to Kalista.\n The ally becomes [[UNTARGETABLE]], [[TOWER_DODGE]], and [[INVULNERABLE]].\n The ally can [[DASH]] by right-clicking.\n When colliding with enemy champions,\n enemies are knocked [[AOE]] [[AIRBORNE]]\n and the ally returns based on their [[BA]] range.",
        ]

      },

      note2: {
        ko: ["Q는 대상을 처치하면 [[PIERCE]].  \n Q로 미니언을 처치하면서 상대 챔피언에게 적중시키면 \n 미니언에 있던 창 스택이 적 챔피언에게 옮겨 감. \n 예시) 0스택 일 때 미니언 세 마리를 관통 하고 \n 챔피언에 적중하면 4스택이 쌓임.", 
        "R2는 상대에게 적중하면 \n 계약자의 평타 사거리만큼 뒤로 돌아옴 \n 그래서 원거리 서폿을 던져도 꽤 안전함\nR로 사라진 아군의 스킬은 계속 유효하고(예 케넨R)\n사라 진 동안 [[INVULNERABLE]]처럼 죽지 않음,\n계약자의 [[SKILL_CHANNEL]], 정신집중 스킬은 다 완료하고 소환 됨.", "R을 사용했을 때 칼리스타가 죽어도 스킬은 유효."
      ],
        en: ["Q [[PIERCE]]s when it kills a target.\nIf Q kills a minion and hits an enemy champion, the Spear stacks from the minion are transferred to the champion.", "When R2 hits an enemy, the Oathsworn ally returns based on their basic attack range.\nThrowing a ranged support is therefore relatively safe.\nThe ally's skills remain active while gone (e.g., Kennen's R).\nThe ally does not die while gone, similar to [[INVULNERABLE]].\nThe ally is summoned only after all channeling or concentration skills are completed.", "If Kalista dies while R is active, the skill remains in effect."]
    
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default kalista;
