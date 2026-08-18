import type { ChampData } from "../interactions/types";
 

 
const senna: ChampData = {
 
  id: "senna",
 
  skills: {
 
    P: ["MS_UP", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "STACKING", "AD_UP", "RANGE_UP", "CRIT", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL"],
 
    Q: ["Q_FLASH", "SLOW", "HEAL"],
 
    W: ["W_FLASH", "ROOT"],
 
    E: ["E_FLASH", "MS_UP", "UNTARGETABLE", "CAMOUFLAGE"],
 
    R: ["SHIELD"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: ["HIT_INDICATOR"],
 
    W: ["HIT_INDICATOR"],
 
    E: [],
 
    R: ["VISION"],
 
  },
 

 
  gimmick: {
 
    P: { phases: [
      { label: { ko: "표식", en: "Mark" }, tags: ["MARK_INTERACT", "Q", "W", "R"] },
      { label: { ko: "안개", en: "Soul" }, tags: ["DMG_PHYSICAL", "STACKING"] },
      { label: { ko: "안개 스택 효과", en: "Soul Stack Bonus" }, tags: ["AD_UP", "RANGE_UP", "CRIT", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL"] },
    ] },
 
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "AOE", "MARK", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME"],
 
    W: { phases: [
      { label: { ko: "W 투사체", en: "W Projectile" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "MARK", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME"] },
      { label: { ko: "W 폭발", en: "W Explosion" }, tags: ["ST_CONDITIONAL", "AOE", "MARK", "ROOT", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME"] },
    ] },
 
    E: ["BUFF_FORM", "TIMING_CAST", "AOE", "SEPARATOR", "MS_UP", "UNTARGETABLE", "CAMOUFLAGE"],
 
    R: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "MARK", "LOCKED", "SHIELD", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME"],
 
  },
 

 
  notes: {
    skill: {
      note3: {
        ko: [
          "생존을 신경쓰면서 Q, R로 아군 도와주면서 \n 상대 앞라인 열심히 때리기.",
        ], en: [
          "Focus on survival while helping allies with Q and R, \n and poke the enemy frontline hard.",
        ] },
      note1: {

        ko: [
          "세나는 레벨업 [[AD_UP]]가 없음. \n [[CRIT]] 피해량은 200%가 아닌 160%.", 
          "P는 챔피언을 [[BA]] 공격 시 [[ON_HIT]] [[DMG_PHYSICAL]]와 \n 대상은 [[SLOW]] 세나는 [[MS_UP]]. \n \n", 
          "안개 [[STACKING]] \n 1. [[BA]] 또는 스킬로 두 번 연속 공격하면 \n 추가 [[DMG_PHYSICAL]]와 [[STACKING]]. \n 챔피언별로 [[COOLDOWN]]. \n \n 2. 세나 주변 적 유닛이 처치되면 \n 확률적으로 안개가 떨어짐. \n 공격하면 [[STACKING]]. \n \n [[STACKING]] 효과는 \n 1개당 0.75 [[AD_UP]]. \n 20개당 [[BA]] [[RANGE_UP]], [[CRIT]] 확률 10% 증가. \n \n", 

          "Q는 아군, 적군에게 사용할 수 있음. \n 대상에게 [[PIERCE]]하는 [[BEAM]] 발사. \n 적군은 [[DMG_PHYSICAL]]와 [[SLOW]]. \n 아군과 세나는 [[HEAL]].",

          "W는 [[PROJECTILE]]를 발사. \n 적중한 대상은 [[DMG_PHYSICAL]], [[DEBUFF]]. \n [[DEBUFF]]는 잠시 뒤 폭발하여 [[AOE]] [[ROOT]]. \n 만약 대상이 처치되면 즉시 폭발.",

          "E는 세나 주변에 안개를 펼침. \n 세나를 [[MS_UP]], [[UNTARGETABLE]], [[CAMOUFLAGE]] 상태로 만듦. \n 단, 안개 자체는 계속 보이고 \n 안개 중심에 세나가 있다는 것을 상대가 알 수 있음. \n \n 안개에 들어온 아군도 적용. \n 아군이 안개에서 나가면 적군에게 망령의 모습으로 보임. \n 공격, 스킬을 사용 하면 망령의 모습 해제. \n \n 즉, 망령은 적군 입장에서 챔피언인 것은 알지만 \n 어떤 챔피언인지 알 수 없음. \n 예) 망령이 유미인 줄 알고 다가갔는데 다리우스가 등장. \n \n",

          "R은 사거리가 무제한인 [[BEAM]] 발사. \n 좁은 범위에 맞은 적 챔피언은 [[DMG_PHYSICAL]]. \n 넓은 범위에 맞은 아군 챔피언은 [[STACKING]] 비례 [[SHIELD]]. \n",
        ],

        en: [
          "Senna has no level-up [[AD_UP]]. \n [[CRIT]] damage is 160% instead of 200%.",

          "P's [[BA]] against champions deals [[ON_HIT]] [[DMG_PHYSICAL]], \n [[SLOW]]s the target, and grants Senna [[MS_UP]]. \n \n",

          "Mist [[STACKING]] \n 1. Hitting the same target twice in a row with [[BA]] or a skill \n deals bonus [[DMG_PHYSICAL]] and grants [[STACKING]]. \n Has a [[COOLDOWN]] per champion. \n \n 2. When a nearby enemy unit dies, \n a mist has a chance to drop. \n Attacking it grants [[STACKING]]. \n \n [[STACKING]] effect: \n 0.75 [[AD_UP]] per stack. \n Every 20 stacks grants [[BA]] [[RANGE_UP]] and +10% [[CRIT]] chance. \n \n",

          "Q can be used on allies or enemies. \n Fires a [[PIERCE]]ing [[BEAM]] at the target. \n Enemies take [[DMG_PHYSICAL]] and [[SLOW]]. \n Allies and Senna gain [[HEAL]].",

          "W fires a [[PROJECTILE]]. \n On hit, deals [[DMG_PHYSICAL]] and applies [[DEBUFF]]. \n The [[DEBUFF]] explodes after a short delay, dealing [[AOE]] [[ROOT]]. \n If the target dies, it explodes immediately.",

          "E spreads a mist around Senna. \n Grants Senna [[MS_UP]], [[UNTARGETABLE]], and [[CAMOUFLAGE]]. \n However, the mist itself remains visible, \n so enemies can tell Senna is somewhere inside it. \n \n Allies who enter the mist also gain the effect. \n Allies who leave the mist appear to enemies as a wraith. \n Attacking or using a skill removes the wraith disguise. \n \n In other words, enemies can tell a wraith is a champion, \n but not which champion it is. \n e.g. an enemy approaches thinking the wraith is Yuumi, but Darius appears instead. \n \n",

          "R fires a [[BEAM]] with unlimited range. \n Enemy champions hit in the narrow zone take [[DMG_PHYSICAL]]. \n Allied champions hit in the wide zone gain [[SHIELD]] scaling with [[STACKING]]. \n",
        ]

      },

      note2: {

        ko: [

        "세나가 처치한 미니언에서 안개 생성 확률이 낮음. \n 챔피언, 대형 정글, 공성미니언은 반드시 안개 생성.",
        "안개 [[STACKING]]으로 치명타 확률이 총합 100% 초과되면 \n 초과분의 35%만큼 [[LIFESTEAL]]으로 전환. \n 예) 10% 초과 시 3.5% [[LIFESTEAL]].",
        "P의 [[STACKING]] 안개가 떨어졌을 때 \n 안개에 [[ALLY_TP_OK]] 불가.",
        "Q의 사거리는 [[BA]] 사거리에 비례하여 증가. \n 시전 속도는 공격 속도에 비례하여 증가.",
        "Q는 [[ON_HIT]] 효과 적용 가능.",

      ],

        en: [
          "Mist has a low chance to drop from minions Senna kills. \n Champions, large jungle monsters, and siege minions always drop a mist.",
          "When total [[CRIT]] chance from mist [[STACKING]] exceeds 100%, \n 35% of the excess converts to [[LIFESTEAL]]. \n e.g. 10% excess grants 3.5% [[LIFESTEAL]].",
          "When P's [[STACKING]] mist drops, \n [[ALLY_TP_OK]] is not possible onto it.",
          "Q's range scales with [[BA]] range. \n Its cast speed scales with attack speed.",
          "Q can apply [[ON_HIT]] effects.",
        ]

        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 140,
 
    11: 120,
 
    16: 100,
 
  },
 

 
};
 

 
export default senna;
 
