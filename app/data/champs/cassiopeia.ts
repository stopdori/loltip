import type { ChampData } from "../interactions/types";

const cassiopeia: ChampData = {
  id: "cassiopeia",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
    W: ["W_FLASH", "SEPARATOR", "SLOW", "GROUNDED"],
    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    R: ["R_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["MS_POWER"],

    Q: ["DOT", "DMG_MAGIC", "TIMING_CAST", "ST_DELAYED", "AOE", "SEPARATOR", "DEBUFF", "SEPARATOR", "ON_CHAMP_HIT", "MS_UP"],

    W: { phases: [
      { label: { ko: "W 독구름 투사체 발사", en: "W Poison Cloud Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "W 독 장판", en: "W Poison Zone" }, tags: ["DOT", "DMG_MAGIC", "ZONE", "SLOW", "GROUNDED", "SEPARATOR", "DEBUFF"] },
    ] },

    E: { phases: [
      { label: { ko: "E 쌍독니", en: "E Twin Fang" }, tags: ["DMG_MAGIC", "TARGETED", "SINGLE", "PROJECTILE", "SEPARATOR_NEWLINE", "SEPARATOR", "ON_KILL", "MANA_RESTORE"] },
      { label: { ko: "E 쌍독니 독 디버프 추가효과", en: "E Twin Fang Poison Bonus" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "HEAL"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[MS_UP]] 효과를 증가. \n \n",

          "Q는 바닥에 [[ZONE]] 생성. \n [[DETONATE]]하여 독 [[DEBUFF]]. \n 3초간 [[DOT]] [[DMG_MAGIC]]. \n 챔피언 적중 시 [[MS_UP]]. \n \n",

          "W는 [[ZONE]]을 깔고 그 위의 대상들에게 [[DOT]]적으로 적용. \n 독 [[DEBUFF]]는 [[DMG_MAGIC]]와 [[GROUNDED]], [[SLOW]]. \n [[ZONE]]을 벗어나면 사라짐.", 
          "W의 디테일한 판정은 챔피언별로 하단 박스에 정리. \n \n",

          "E는 [[TARGETED]] [[PROJECTILE]]를 발사. \n 독 [[DEBUFF]]에 걸린 대상에게 추가 [[DMG_MAGIC]]와 [[HEAL]]. \n (미니언과 작은 몬스터 대상은 [[HEAL]] 효과 감소) \n \n",

          "R은 전방에 부채꼴 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 카시오페아를 바라본 대상은 [[SLOW]] 대신 [[STUN]]."
        ],

        en: [
          "P increases [[MS_UP]] effects. \n \n",
          "Q creates a [[ZONE]] on the ground. \n It [[DETONATE]]s, applying a poison [[DEBUFF]]. \n [[DOT]] [[DMG_MAGIC]] for 3 seconds. \n Grants [[MS_UP]] on champion hit. \n \n",
          "W places a [[ZONE]] that applies its effects as [[DOT]] to targets on it. \n The poison [[DEBUFF]] deals [[DMG_MAGIC]] and applies [[GROUNDED]] and [[SLOW]]. \n Effects disappear when leaving the [[ZONE]].",
          "Detailed W interactions are listed per champion in the box below. \n \n",
          "E fires a [[TARGETED]] [[PROJECTILE]]. \n Deals bonus [[DMG_MAGIC]] and [[HEAL]]s against targets with a poison [[DEBUFF]]. \n (Reduced [[HEAL]] against minions and small monsters) \n \n",
          "R deals cone-shaped [[AOE]] [[DMG_MAGIC]] and [[SLOW]] in front. \n Targets facing Cassiopeia are [[STUN]]ned instead of [[SLOW]]ed.",
        ]

      },

      note2: {
        ko: [
        "이제 신발 구매가능함", 
        "W는 지형지물 또는 \n 생성된 [[TERRAIN]]에도 겹쳐지게 사용 가능.", 
        "E는 독이걸린 대상에게 추가 데미지.\n독은 Q, W 뿐만 아니라\n티모 E(평타), R(버섯), 트위치 P, W(독병), \n 신지드 Q(독 구름)의 독 [[DEBUFF]]에도 적용.",
      ],
        en: [
          "Boots can now be purchased",
          "W can be overlapped on terrain or \n created [[TERRAIN]].",
          "E deals bonus damage to poisoned targets.\nPoison includes not only Q and W, but also\nTeemo E (auto), R (mushroom), Twitch P, W (venom cask), \n and Singed Q (poison trail) poison [[DEBUFF]]s.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Cassiopeia,
  // 최근 변경 V26.18). Q/W는 DDragon effectBurn, E/R은 비어 있어 위키 본문 수치로 채움.
  skillTooltip: {
    P: {
      ko: "카시오페아의 모든 [[MS_UP]] 효과가 5~36%([[LEVEL_SCALE]] 비례) 증가합니다.",
      en: "All of Cassiopeia's [[MS_UP]] effects are increased by 5~36% (based on [[LEVEL_SCALE]]).",
    },
    Q: {
      ko: "카시오페아가 독가스를 내뿜어 적들을 중독시키고 3초 동안 65/100/135/170/205(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 챔피언에게 적중 시 카시오페아가 30/35/40/45/50%의 [[MS_UP]]을 얻었다가 3초에 걸쳐 원래대로 돌아옵니다. \n \n 3.5초의 [[COOLDOWN]].",
      en: "Cassiopeia blasts poison gas, poisoning enemies and dealing 65/100/135/170/205 (+75% [[AP_SCALE]]) [[DMG_MAGIC]] over 3 seconds. \n \n If it hits a champion, Cassiopeia gains 30/35/40/45/50% [[MS_UP]], decaying over 3 seconds. \n \n 3.5 second [[COOLDOWN]].",
    },
    W: {
      ko: "카시오페아가 맹독을 내뿜어 5초 동안 지속되는 독구름([[ZONE]])을 남깁니다. \n 독구름 속의 적은 초당 20/25/30/35/40(+10% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입고 중독, [[GROUNDED]] 상태가 되며 40/50/60/70/80% [[SLOW]]됩니다. \n \n 24/22/20/18/16초의 [[COOLDOWN]].",
      en: "Cassiopeia spits venom, leaving a poison cloud ([[ZONE]]) that lasts 5 seconds. \n Enemies in the cloud take 20/25/30/35/40 (+10% [[AP_SCALE]]) [[DMG_MAGIC]] per second, become poisoned and [[GROUNDED]], and are [[SLOW]]ed by 40/50/60/70/80%. \n \n 24/22/20/18/16 second [[COOLDOWN]].",
    },
    E: {
      ko: "카시오페아가 치명적인 가시를 발사해 50~120([[LEVEL_SCALE]] 비례)(+20% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 중독된 적에게 사용 시 20/45/70/95/120(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입히고, 자신의 체력을 10/11.5/13/14.5/16% [[AP_SCALE]]만큼 [[HEAL]]합니다. \n 공격로 미니언과 작은 몬스터를 상대로는 회복하는 체력이 2.5/2.875/3.25/3.625/4% [[AP_SCALE]]로 감소합니다. \n \n 해당 스킬로 대상을 처치하면 카시오페아가 45 [[MANA_RESTORE]]합니다. \n \n 0.75초의 [[COOLDOWN]].",
      en: "Cassiopeia fires a lethal fang, dealing 50~120 (based on [[LEVEL_SCALE]]) (+20% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Against poisoned enemies, it deals an additional 20/45/70/95/120 (+45% [[AP_SCALE]]) [[DMG_MAGIC]] and [[HEAL]]s her for 10/11.5/13/14.5/16% [[AP_SCALE]]. \n Against lane minions and small monsters, the healing is reduced to 2.5/2.875/3.25/3.625/4% [[AP_SCALE]]. \n \n If this skill kills the target, Cassiopeia gains 45 [[MANA_RESTORE]]. \n \n 0.75 second [[COOLDOWN]].",
    },
    R: {
      ko: "카시오페아가 석화의 응시로 125/225/325(+75% [[AP_SCALE]])의 [[AOE]] [[DMG_MAGIC]]를 입히고 자신을 바라보는 적들을 2초 동안 [[STUN]]시킵니다. \n 카시오페아를 등진 적은 같은 시간 동안 40% [[SLOW]]됩니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Cassiopeia's petrifying gaze deals 125/225/325 (+75% [[AP_SCALE]]) [[AOE]] [[DMG_MAGIC]] and [[STUN]]s enemies facing her for 2 seconds. \n Enemies facing away from Cassiopeia are [[SLOW]]ed by 40% for the same duration. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default cassiopeia;
