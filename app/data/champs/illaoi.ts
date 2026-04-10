import type { ChampData } from "../interactions/types";

const illaoi: ChampData = {
  id: "illaoi",
  skills: {
    P: ["HEAL", "ALLY_TP_OK", "SEPARATOR", "ST_CONDITIONAL", "SUMMON"],
    Q: [],
    W: ["AA_RESET", "WALL_HOP"],
    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "SUMMON", "SLOW"],
    R: ["R_FLASH", "UNSTOPPABLE"],
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
      { label: { ko: "촉수 소환", en: "Tentacle Spawn" }, tags: ["ST_CONDITIONAL", "SUMMON"] },
      { label: { ko: "촉수", en: "Tentacle" }, tags: ["DMG_PHYSICAL", "AOE", "ST_DELAYED",] },
    ] },

    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
    ] },
    
    W: ["DMG_PHYSICAL", "ON_HIT", "DASH"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE", "SEPARATOR", "ST_CONDITIONAL", "MARK"] },
      { label: { ko: "표식", en: "Soul" }, tags: ["SUMMON", "SLOW"] },
    ] },

    R: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SUMMON", "BUFF", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BUFF", "CDR", "W"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "사이드가 정말 강함. \n 1대 다수와 싸울때 빛남 \n 한타는 별로...",
          "일라오이 고수분들 제보 부탁드림.",
        ],
        en: [
          "Extremely strong in side lanes. \n Shines in 1v many situations. \n Struggles in teamfights...",
          "Illaoi mains, please share any tips!",
        ] },
      note1: {

        ko: [
          "P는 근처에 촉수를 [[SUMMON]]. \n W, E로 적 챔피언을 맞히면 촉수가 공격. \n 촉수가 챔피언을 맞히면 \n 일라오이가 잃은체력 비례 [[HEAL]].",

          "Q의 [[PASSIVE_BONUS]]로 촉수의 데미지 증가. \n Q를 쓰면 [[AOE]] [[DMG_PHYSICAL]].",

          "W는 [[BA]] [[EMPOWERED]]. \n 대상 최대체력 %뎀과 주변 촉수가 잠시뒤 공격. \n [[AA_RESET]] 가능.",

          "E는 적 챔피언에 적중 시 영혼추출. \n 챔피언을 복제하여 일라이오 앞에 두고 피해를 공유. \n 영혼을 처치하거나 대상이 범위를 벗어나면 [[DEBUFF]]. \n [[DEBUFF]]가 생기면 잠시 [[SLOW]]와 \n 대상 주변에 주기적으로 촉수가 소환되어 공격.",

          "R은 [[UNSTOPPABLE]] [[AOE]] [[DMG_PHYSICAL]]. \n 맞은 적 챔피언 하나당 임시촉수 [[SUMMON]]. \n 8초간 주변 모든촉수가 [[UNTARGETABLE]]가 되고 \n 촉수의 [[AS_UP]] 50%, W의 [[COOLDOWN]]이 2초가 됨. \n 이때 W는 스킬가속에 영향을 받음.",
        ],

        en: [
          "P: [[SUMMON]]s tentacles nearby. \n W and E hits on enemy champions trigger tentacle attacks. \n Tentacle hits on champions [[HEAL]] Illaoi based on missing HP.",

          "Q's [[PASSIVE_BONUS]] increases tentacle damage. \n Casting Q deals [[AOE]] [[DMG_PHYSICAL]].",

          "W: [[EMPOWERED]] [[BA]]. \n Deals % of target's max HP and triggers nearby tentacles to attack after a delay. \n Can [[AA_RESET]].",

          "E: Hitting an enemy champion extracts their soul. \n The soul is a copy placed in front of Illaoi that shares damage. \n Killing the soul or the target leaving the area applies [[DEBUFF]]. \n [[DEBUFF]] applies brief [[SLOW]] \n and periodically [[SUMMON]]s tentacles around the target to attack.",

          "R: [[UNSTOPPABLE]] [[AOE]] [[DMG_PHYSICAL]]. \n Spawns a temporary tentacle per enemy champion hit. \n For 8 seconds, all nearby tentacles become [[UNTARGETABLE]], \n gain 50% [[AS_UP]], and W's [[COOLDOWN]] is reduced to 2 seconds. \n During this time, W's cooldown is affected by ability haste.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨",
        "E는 미니언도 관통 불가.",
        "R은 공식적인 저지불가는 아니지만, 각종 CC 효과를 무시하거나 유예하는 걸로 보아 [[UNSTOPPABLE]]이 맞는 것으로 보임."
      ],
        en: [
          "[[Q_FLASH]] not possible",
          "E cannot pierce minions.",
          "R is not officially described as [[UNSTOPPABLE]], but based on it ignoring various CC effects, it appears to be [[UNSTOPPABLE]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 95,
    16: 70,
  },

};

export default illaoi;
