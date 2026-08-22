import type { ChampData } from "../interactions/types";

const fiora: ChampData = {
  id: "fiora",
  skills: {
    P: ["MARK", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "HEAL"],
    Q: ["DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    W: ["INVULNERABLE", "CC_IMMUNE", "AS_DOWN", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    E: ["AA_RESET", "AS_UP", "SLOW", "CRIT"],
    R: ["R_FLASH", "MARK", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["MARK", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT", "DMG_TRUE", "HEAL"],
    Q: ["DMG_PHYSICAL", "ON_HIT", "DASH", "SEPARATOR", "ST_CONDITIONAL", "Q", "CDR"],

    W: ["INVULNERABLE", "CC_IMMUNE", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_MAGIC", "SKILL_CHANNEL", "PROJECTILE", "PIERCE_MINION", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["AA_RESET", "BUFF_STACK"] },
      { label: { ko: "1타", en: "1st Hit" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "ON_HIT", "SLOW", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "2타", en: "2nd Hit" }, tags: ["STACK_CONSUME", "DMG_PHYSICAL", "ON_HIT", "CRIT"] },
    ] },

    R: { phases: [
      { label: { ko: "R 시전", en: "R Active" }, tags: ["TARGETED", "MARK", "X4", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT", "DMG_TRUE", "HEAL"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ZONE", "HEAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "사이드가 정말 강함. \n 1:1은 안진다는 마인드로 하다 \n 상대가 몰려 오면 드리블 Like 호날두 ㄱㄱ",
          "한타는 선진입이 생각보다 별로고 2선 진입이 괜찮음.",
          "R을 상대 핵심 딜러진에 걸고 물고 늘어지기 \n W로 CC 잘 흡수하기.",
          "피오라 고수의 제보를 기다림."
        ], en: [
          "Extremely strong in the sidelane. \n Play with the mindset of never losing 1v1, \n and when enemies collapse, dribble past them like Ronaldo.",
          "In teamfights, diving in first is less ideal than expected — second-line flanking works better.",
          "Cast R on the enemy carry and stick to them. \n Use W to absorb CC.",
          "Waiting for tips from Fiora experts.",
        ] },
      note1: {

        ko: [
          "P는 근처 적 챔피언의 급소 [[DEBUFF]]를 드러냄. \n 특정 방향에서 공격하면 \n [[DMG_TRUE]], [[MS_UP]], [[HEAL]]. \n 급소가 사라지거나 발동하면 새로운 방향에서 생김. \n \n",

          "Q는 [[DASH]]하고 도착할 때 근처 적을 공격. \n와드, 타워도 공격 가능하지만 챔피언 우선공격. \n Q로 공격하면 50% [[CDR]]. \n \n",

          "W는 자세를 취할 때 [[INVULNERABLE]], [[CC_IMMUNE]]. \n 단, 타워 데미지 제외. \n \n 잠시 후 전방으로 [[PIERCE_MINION]] [[SINGLE]] [[PROJECTILE]] 발사. \n [[SLOW]], [[DMG_MAGIC]]. \n \n 준비중에 [[IMMOBILIZING]]를 무효화 했다면 \n [[SLOW]] 대신 [[STUN]]. \n 디테일한 판정은 챔피언별로 하단 박스에 정리. \n \n",

          "E는 2번의 [[BA]] [[EMPOWERED]]와 [[AS_UP]]. \n 1타 [[SLOW]], 2타 [[CRIT]]. \n [[AA_RESET]] 가능. \n \n",

          "R의 [[PASSIVE_BONUS]] P의 [[MS_UP]]효과 증가.", "R을 사용하면 급소 4개와 주변 범위가 생기고. \n 범위 내에서 P의 [[MS_UP]] 계속 활성화. \n 급소 4개를 터뜨리면 광역 [[HEAL]] [[ZONE]] 생성. \n 급소를 한번이라도 찔리고 대상이 죽어도 발동.",
        ],

        en: [
          "P reveals a vital [[DEBUFF]] on nearby enemy champions. \n Striking it from the indicated direction deals [[DMG_TRUE]], grants [[MS_UP]] and [[HEAL]]. \n When a vital disappears or is triggered, a new one spawns from a different direction.",
          "Q [[DASH]]es and strikes a nearby enemy on arrival. \n Can target wards and towers, but prioritizes champions. \n Hitting with Q grants 50% [[CDR]].",
          "W grants [[INVULNERABLE]] and [[CC_IMMUNE]] while striking a pose. \n Does not block tower damage. \n \n Shortly after, fires a [[PIERCE_MINION]] [[SINGLE]] [[PROJECTILE]] forward, \n dealing [[SLOW]] and [[DMG_MAGIC]]. \n \n If [[IMMOBILIZING]] was negated during the pose, \n applies [[STUN]] instead of [[SLOW]]. \n Detailed interactions are listed per champion in the box below.",
          "E empowers the next 2 [[BA]]s and grants [[AS_UP]]. \n First hit applies [[SLOW]], second hit applies [[CRIT]]. \n [[AA_RESET]] is possible.",
          "R's [[PASSIVE_BONUS]] increases P's [[MS_UP]] effect.",
          "R places 4 vitals on the target and creates a surrounding zone. \n P's [[MS_UP]] is continuously active while inside the zone. \n Striking all 4 vitals creates an area [[HEAL]] [[ZONE]]. \n Also triggers if the target dies after at least one vital was struck.",
        ]

      },

      note2: {
        ko: [
       "[[Q_FLASH]] (찌르기) 안됨", 
       "[[W_FLASH]] (응수) 안됨",
       "W의 [[INVULNERABLE]]으로 점화, 장로 [[EXECUTE]] 등도 막을 수 있음.",
      ],
        en: ["[[Q_FLASH]] (Lunge) not possible", "[[W_FLASH]] (Riposte) not possible", "W's [[INVULNERABLE]] can also block [[EXECUTE]] effects like Ignite or Elder Dragon."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 90,
    16: 70,
  },

};

export default fiora;
