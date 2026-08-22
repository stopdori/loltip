import type { ChampData } from "../interactions/types";

const taliyah: ChampData = {
  id: "taliyah",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED", "Q", "SLOW"],
    W: ["W_FLASH", "KNOCKBACK"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["TERRAIN", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DASH", "WALL_HOP", "SKILL_RECAST"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "MS_UP"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SEPARATOR", "ZONE"] },
      { label: { ko: "강화 Q ( 다진땅 소모 )", en: "Empowered Q (Consumes Worked Ground)" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
    ] },

    W: ["SKILL_VECTOR", "TIMING_CAST", "NON_PROJECTILE", "ST_DELAYED", "ZONE", "KNOCKBACK"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "ZONE", "SLOW"] },
      { label: { ko: "자갈 소모", en: "E Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "STUN"] },
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["TIMING_CAST", "PROJECTILE", "TERRAIN", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["SKILL_CHANNEL", "DASH", "SKILL_RECAST"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "무궁무진한 운용방법이 있음.",
          "궁극의 카이팅이 정말 강력함.",
        ], en: [
          "There are endless ways to use her kit.",
          "Her ultimate kiting potential is extremely strong.",
        ] },
      note1: {

        ko: [
          "P는 비전투 일 때 \n 탈리야가 벽 근처에서 3초 이상 있으면 [[TRANSFORM]] 하여 [[MS_UP]]. \n 벽에서 떨어져도 3초간 유지. \n \n",

          "Q는 탈리야 발 밑에 다져진 땅 [[ZONE]] 생성. \n 동시에 [[PROJECTILE]] 5개 발사. \n 적중하면 폭발하여 [[AOE]] [[DMG_MAGIC]]. \n 동일 대상 적중 시 피해량 감소.", 
          "다져진 땅 [[ZONE]] 위에서 [[EMPOWERED]] Q. \n 사용시 다져진땅 [[ZONE]]을 소모. \n Q 마나 소모량 10으로 감소. \n Q [[CDR]] 50%. \n [[PROJECTILE]] 5개 대신 대형 1개 발사. \n 더 넓게 폭발하여 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 몬스터는 [[STUN]]. \n \n",

          "W는 [[SKILL_VECTOR]] 스킬. \n [[ZONE]]을 생성하여 지정한 방향으로 [[AOE]] [[KNOCKBACK]]. \n \n",

          "E는 여러개의 자갈 생성. \n 자갈이 깔릴 때 [[DMG_MAGIC]], [[SLOW]].", "적이 [[DASH]] 또는 [[KNOCKBACK]]으로 자갈 위를 지나갈 때 \n 자갈을 소모하여 1개당 [[DMG_MAGIC]]와 \n 대상의 남은 이동시간 비례 [[STUN]] \n 자세한 설명은 TMI에 \n \n",

          "R은 직선으로 기다란 [[ZONE]] 생성. \n 잠시후 [[ZONE]]에서 [[TERRAIN]]이 순차적으로 생성. \n R을 사용하고 1초안에 R2로 [[SKILL_RECAST]]하면 \n 탈리야가 [[TERRAIN]]에 올라타 [[SKILL_CHANNEL]] [[DASH]].", 
          "탈리야가 움직이거나 [[IMMOBILIZING]] 효과를 받으면 \n [[SKILL_CHANNEL]] [[DASH]] 중단.",
          "R은 챔피언과 타워에게 피해를 받으면 \n 3초의 [[COOLDOWN]]이 생김.",
        ],

        en: [
          "P: while out of combat, \n if Taliyah stays near a wall for 3+ seconds, she [[TRANSFORM]]s and gains [[MS_UP]]. \n This persists for 3 seconds even after leaving the wall. \n \n",

          "Q creates a Worked Ground [[ZONE]] under Taliyah's feet. \n It also fires 5 [[PROJECTILE]]s at once. \n On hit, they explode for [[AOE]] [[DMG_MAGIC]]. \n Damage is reduced against the same target hit multiple times.",
          "Casting Q on a Worked Ground [[ZONE]] gives an [[EMPOWERED]] Q. \n Using it consumes the Worked Ground [[ZONE]]. \n Q's mana cost drops to 10. \n Q gets 50% [[CDR]]. \n Instead of 5 [[PROJECTILE]]s, fires 1 large one. \n It explodes in a wider area for [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n Monsters are [[STUN]]ned instead. \n \n",

          "W is a [[SKILL_VECTOR]] skill. \n It creates a [[ZONE]] that [[AOE]] [[KNOCKBACK]]s in the chosen direction. \n \n",

          "E creates several pebbles. \n Laying them down deals [[DMG_MAGIC]] and applies [[SLOW]].", "When an enemy passes over the pebbles via [[DASH]] or [[KNOCKBACK]], \n each pebble is consumed to deal [[DMG_MAGIC]] and \n apply [[STUN]] scaling with the target's remaining movement duration. \n See the TMI section for details. \n \n",

          "R creates a long, straight [[ZONE]]. \n Shortly after, [[TERRAIN]] rises sequentially within the [[ZONE]]. \n If R2 is [[SKILL_RECAST]] within 1 second of using R, \n Taliyah mounts the [[TERRAIN]] and [[SKILL_CHANNEL]]s a [[DASH]].",
          "If Taliyah moves or is affected by [[IMMOBILIZING]], \n the [[SKILL_CHANNEL]] [[DASH]] is interrupted.",
          "If R takes damage from a champion or tower, \n it goes on a 3-second [[COOLDOWN]].",
        ]

      },

      note2: {
        ko: [
        "Q의 [[SLOW]]는 다진땅 Q만 발동.",
        "E는 지속[[SLOW]]. \n \n",
        "E의 [[STUN]] 시간은 \n 남은 [[DASH]] 시간에 비례.", "예) [[DASH]] 시간이 1초라 했을 때 \n 0.1초 지난 시점에서 자갈을 밟는다면 \n 0.9초 + 0.75초 = 총 1.65초 [[STUN]]", "0.75초는 기본 [[STUN]] 지속시간. \n 0.9초는 ( 총 [[DASH]]시간 - [[DASH]]한 시간. ) \n \n",
        "R의 [[TERRAIN]]으로 전령 박치기 막을 수 있음",
        "R의 [[TERRAIN]]은 [[ALLY_TP_OK]] 불가."
      ],
        en: [
          "Q [[SLOW]] only applies from the Empowered Q cast on Worked Ground.",
          "E applies a lingering [[SLOW]]. \n \n",
          "E's [[STUN]] duration \n scales with the target's remaining [[DASH]] duration.", "e.g., if the [[DASH]] duration is 1 second \n and the pebble is stepped on 0.1 seconds in, \n 0.9s + 0.75s = 1.65s total [[STUN]].", "0.75s is the base [[STUN]] duration. \n 0.9s is (total [[DASH]] duration − elapsed [[DASH]] time). \n \n",
          "R's [[TERRAIN]] can block the Rift Herald's charge.",
          "R's [[TERRAIN]] does not allow [[ALLY_TP_OK]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taliyah;
