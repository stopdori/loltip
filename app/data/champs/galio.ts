import type { ChampData } from "../interactions/types";

const galio: ChampData = {
  id: "galio",
  skills: {
    P: ["AS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["Q_FLASH"],
    W: ["SHIELD", "MS_DOWN", "DMG_REDUCE", "TAUNT"],
    E: ["DASH", "AIRBORNE", "CC_BUFFER"],
    R: ["R_FLASH", "SHIELD", "AIRBORNE", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CC_IMMUNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT", "AOE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE"] },
      { label: { ko: "와류", en: "Tornado" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "DOT", "ZONE"] },
    ] },

    W: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "도발", en: "Taunt" }, tags: ["DMG_MAGIC", "SKILL_CHARGED", "DMG_REDUCE", "TAUNT"] },
    ] },

    E: { phases: [
      { label: { ko: "후진단계", en: "Retreat" }, tags: ["CC_BUFFER"] },
      { label: { ko: "돌진단계", en: "Dash"    }, tags: ["DMG_MAGIC", "PIERCE_MINION", "SINGLE", "DASH", "AIRBORNE"] },
    ] },

    R: { phases: [
      { label: { ko: "시전집중", en: "Channeling" }, tags: ["SKILL_CHANNEL", "TARGETED"] },
      { label: { ko: "착지", en: "Hero Landing" }, tags: ["DMG_MAGIC", "TIMING_AFTERCAST", "BLINK", "AIRBORNE", "SEPARATOR", "ST_CONDITIONAL", "CC_IMMUNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "앞선에서 Q로 포킹하다가 \n E로 들어가서 W로 광역 [[TAUNT]] \n R로 아군 지켜주기.",
          "아군 챔피언중에 잘 파고드는 친구에게 \n R 연계로 한타 자리 부수기.",
        ], en: [
          "Poke from the frontline with Q, \n engage with E into a wide [[TAUNT]] with W, \n then use R to protect your allies.",
          "Combo R onto an ally who dives deep \n to blow up the enemy team fight positioning.",
        ] },
      note1: {

        ko: [
          "P는 사용 가능할때 [[AS_UP]] \n 스킬로 상대 챔피언, 에픽몬스터를 때리면 3초 [[CDR]].",
          "Q는 바람 경로에 데미지. \n 바람끼리 부딪히면 와류발생",
          "W의 [[PASSIVE_BONUS]]에 마법[[SHIELD]] \n 10초정도 맞지 않으면 다시 충전.", "W([[TAUNT]])는 눌러서 시전하는 동안 [[DMG_REDUCE]]. \n [[TAUNT]]에 성공하면 [[DMG_REDUCE]] 지속시간 2초 연장. \n [[TAUNT]]시간과 사거리는 충전시간에 비례.",
          "E는 챔피언에 적중하면 [[AIRBORNE]]. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
          "R은 아군에게 사용하면 \n 해당 범위내의 아군에게 마법[[SHIELD]]를 모두 걸어줌. \n R을 시전할 때 방해 받을 수 있음. (주의) \n 도착하면 범위 [[AIRBORNE]] \n 그리고 잠시동안 [[CC_IMMUNE]]",
        ],

        en: [
          "P grants [[AS_UP]] when available. \n Hitting enemy champions or epic monsters with a skill reduces its cooldown by 3s.",
          "Q deals damage along the wind path. \n Two winds colliding create a tornado.",
          "W passive grants a magic [[SHIELD]]. \n Recharges after not taking damage for ~10s.",
          "W ([[TAUNT]]) grants [[DMG_REDUCE]] while channeling. \n A successful [[TAUNT]] extends [[DMG_REDUCE]] duration by 2s. \n [[TAUNT]] duration and range scale with charge time.",
          "E applies [[AIRBORNE]] on champion hit. \n [[CC_BUFFER]] allows ignoring some CC.",
          "When cast on an ally, \n grants a magic [[SHIELD]] to all allies in the landing area. \n R can be interrupted during cast. (caution) \n Upon landing, applies [[AIRBORNE]] in an area \n then briefly becomes [[CC_IMMUNE]].",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 안됨. 막혔음 \n W는 스마트키를 풀고 쓰시면 좋음", "[[E_FLASH]] 안됨.", "E 스킬은 2단계로 나뉨 후진/돌진.\n후진단계에서 갈리오가 맞은 CC는 유효 하지만\n돌진단계가 발동되어 앞으로 이동하는 것.\n돌진단계에는 CC 저항력 없음.", "R은 점프를 준비할때 CC저항력이 없지만 \n 착지하고 아주 잠시동안 ''시전 집중'' 상태에 돌입하는데 \n 이때 걸린 CC는 완전 무시. [[SUPPRESS]] 포함."
      ],
        en: ["[[W_FLASH]] not possible (patched).\nDisabling smartcast on W is recommended", "[[E_FLASH]] not possible", "E has two phases: wind-up / dash.\nCC hit during wind-up is valid, but Galio still dashes forward.\nThere is no CC immunity during the dash phase.", "R has no CC immunity during the jump wind-up, but briefly enters a 'channeling focus' state upon landing, marked as [[CAST_COMMIT]].\nCC applied during this state is ignored, including [[SUPPRESS]]."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 180,
    11: 160,
    16: 140,
  },

};

export default galio;
