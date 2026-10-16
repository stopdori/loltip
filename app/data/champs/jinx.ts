import type { ChampData } from "../interactions/types";

const jinx: ChampData = {
  id: "jinx",
  skills: {
    P: ["ON_TAKEDOWN", "AS_UP", "MS_UP"],

    Q: { phases: [
      { label: { ko: "Q 미니건", en: "Q Minigun" }, tags: ["TRANSFORM", "AS_UP"] },
      { label: { ko: "Q 로켓", en: "Q Rocket" }, tags: ["TRANSFORM", "AS_DOWN", "SEPARATOR", "RANGE_UP"] },
    ] },
    
    W: ["REVEALED", "SLOW"],
    E: ["TRAP", "ROOT"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ON_TAKEDOWN", "MS_UP", "SEPARATOR", "ON_TAKEDOWN", "BUFF_STACK", "AS_UP"],

    Q:    { phases: [
      { label: { ko: "Q 폼변환", en: "Q Form Swap" }, tags: ["TRANSFORM"] },
      { label: { ko: "Q 미니건", en: "Q Minigun" }, tags: ["ON_HIT", "PROJECTILE", "SEPARATOR", "BUFF_STACK", "AS_UP"] },
      { label: { ko: "Q 로켓", en: "Q Rocket" }, tags: ["ON_HIT", "PROJECTILE", "DETONATE", "SEPARATOR", "AS_DOWN", "RANGE_UP"] },
    ] },

    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "REVEALED", "SLOW"],

    E: { phases: [
      { label: { ko: "E 덫 투척", en: "E Trap Throw" }, tags: ["PROJECTILE"] },
      { label: { ko: "E 덫", en: "E Trap" }, tags: ["TRAP", "ZONE", "SEPARATOR", "DETONATE", "DMG_MAGIC", "SEPARATOR", "ROOT", "KNOCKDOWN"] },
    ] },
        
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "DETONATE"] },
      { label: { ko: "R 강화", en: "R Empowered" }, tags: ["DMG_PHYSICAL", "ADDITIONAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 3초 안에 챔피언, 에픽, 구조물 파괴에 관여하면 \n [[AS_UP]], [[MS_UP]]. ([[MS_SCALE]]는 크게 증가했다 점차 감소)", 
          "단, 2스택부터는 중첩은 반드시 \n 챔피언 [[ON_TAKEDOWN]]에만 가능. \n \n ",

          "Q는 [[TRANSFORM]]", 
          "미니건폼은 [[BA]] 공격 시 \n [[AS_UP]] [[BUFF_STACK]].(최대 3스택)", 
          "로켓폼은 징크스의 [[AS_DOWN]]이지만 \n [[RANGE_UP]]와 [[DETONATE]] 공격. \n [[BA]] 공격 시 마나 소모. \n \n",

          "W는 [[PROJECTILE]] 발사. \n [[DMG_PHYSICAL]]와 [[SLOW]], [[REVEALED]]. \n \n",

          "E는 3개의 [[PROJECTILE]] [[TRAP]] 발사. \n 잠시 후 활성화 상태 돌입. \n 시간이 다 되거나 챔피언이 닿으면 [[DETONATE]]. \n [[DMG_MAGIC]]와 [[ROOT]]. \n \n",

          "R은 [[RANGE_SCALE]] [[GLOBAL]]의 미사일([[PROJECTILE]]) 발사. \n 발사되고 1초뒤 피해량 증가. \n 적중하면 [[TARGET_MISSING_HP_SCALE]] 비례 [[DETONATE]] [[DMG_PHYSICAL]]. \n 단, [[DETONATE]] 주변 대상은 80% 피해.",
        ],

        en: ["P: when involved in destroying a champion, epic monster, or structure within 3 seconds, \n grants [[AS_UP]] and [[MS_UP]]. ([[MS_SCALE]] spikes then gradually decays)",
          "However, from 2 stacks on, stacking \n is only possible on champion [[ON_TAKEDOWN]]. \n \n ",
          "Q [[TRANSFORM]]s.",
          "Minigun form: on [[BA]], \n [[AS_UP]] [[BUFF_STACK]]. (Max 3 stacks)",
          "Rocket form gives Jinx [[AS_DOWN]], but \n [[RANGE_UP]] and [[DETONATE]] attacks. \n [[BA]]s consume mana. \n \n",
          "W fires a [[PROJECTILE]]. \n [[DMG_PHYSICAL]], [[SLOW]], and [[REVEALED]]. \n \n",
          "E throws 3 [[PROJECTILE]] [[TRAP]]s. \n They become active shortly after. \n When time runs out or a champion touches one, it [[DETONATE]]s. \n [[DMG_MAGIC]] and [[ROOT]]. \n \n",
          "R fires a missile ([[PROJECTILE]]) with [[GLOBAL]] [[RANGE_SCALE]]. \n Damage increases 1 second after launch. \n On hit, it [[DETONATE]]s for [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]]. \n However, targets around the [[DETONATE]] take 80% damage."
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", 
        "E의 [[ROOT]]은 [[KNOCKDOWN]]이 있어서. \n 일반적인 [[ROOT]]보다 판정이 좋음.", 
        "E는 발동하거나 시간이 다 되어 [[DETONATE]]할 때 \n [[AOE]] 피해이고 미니언이나 정글도 맞음.",
        "E([[TRAP]])는 [[ALLY_TP_OK]] 아님."
      ],
        en: ["[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] all not possible",
          "E's [[ROOT]] includes a [[KNOCKDOWN]], \n so it has better detection than a normal [[ROOT]].",
          "When E triggers or [[DETONATE]]s on timeout, \n it deals [[AOE]] damage and also hits minions and jungle monsters.",
          "E ([[TRAP]]) is not [[ALLY_TP_OK]]."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 85,
    11: 65,
    16: 45,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_jinxpassivemarker_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.16)로 채움(CDragon 게임 데이터 jinx.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "징크스가 챔피언이나 에픽 몬스터, 구조물에 피해를 입힌 뒤 3초 안에 해당 챔피언, 에픽 몬스터가 처치되거나 구조물이 파괴되면, \n 6초간 징크스의 [[AS_SCALE]]가 25% 증가하고 [[MS_SCALE]]가 175% 증가했다가 점차 감소합니다. \n \n 첫 중첩 이후 추가 [[BUFF_STACK]]은 챔피언 [[ON_TAKEDOWN]]에만 쌓이며, 최대 5회까지 중첩됩니다.",
      en: "When a champion, epic monster, or structure that Jinx damaged within the last 3 seconds is killed or destroyed, \n Jinx's [[AS_SCALE]] increases by 25% and her [[MS_SCALE]] increases by 175%, decaying gradually, for 6 seconds. \n \n After the first stack, additional [[BUFF_STACK]]s only accumulate on champion [[ON_TAKEDOWN]]s, stacking up to 5 times.",
    },
    Q: {
      ko: "징크스가 생선대가리 로켓 런처와 빵야빵야 미니건을 [[TRANSFORM]] 합니다. \n \n 로켓 런처로 [[BA]] 시 마나를 소모하여 대상과 주변 적들에게 [[AD_SCALE]]의 110%에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n 추가 [[AS_SCALE]]는 10% 느려지지만 [[RANGE_SCALE]]는 100/125/150/175/200만큼 증가합니다. \n \n 미니건으로 [[BA]] 시 2.5초 동안 [[AS_SCALE]]가 상승합니다. \n 이 효과는 최대 3번까지 중첩됩니다. ([[BUFF_STACK]]) (최대 추가 [[AS_SCALE]] 30/55/80/105/130%) \n \n 0.9초의 [[COOLDOWN]].",
      en: "Jinx [[TRANSFORM]]s between Fishbones, the rocket launcher, and Pow-Pow, the minigun. \n \n With the rocket launcher, her [[BA]]s cost mana and deal [[DMG_PHYSICAL]] equal to 110% of [[AD_SCALE]] to the target and nearby enemies. \n Her bonus [[AS_SCALE]] is reduced by 10%, but her [[RANGE_SCALE]] increases by 100/125/150/175/200. \n \n With the minigun, her [[BA]]s increase her [[AS_SCALE]] for 2.5 seconds. \n This effect stacks up to 3 times. ([[BUFF_STACK]]) (Max bonus [[AS_SCALE]] 30/55/80/105/130%) \n \n 0.9 second [[COOLDOWN]].",
    },
    W: {
      ko: "징크스가 전기 충격파를 발사하여 처음 맞힌 적에게 10/60/110/160/210(+140% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 2초 동안 40/50/60/70/80% [[SLOW]]시키며 위치를 드러냅니다. ([[REVEALED]]) \n \n 8/7/6/5/4초의 [[COOLDOWN]].",
      en: "Jinx fires a shock blast, dealing 10/60/110/160/210 (+140% [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit, \n [[SLOW]]ing them by 40/50/60/70/80% for 2 seconds and revealing their position. ([[REVEALED]]) \n \n 8/7/6/5/4 second [[COOLDOWN]].",
    },
    E: {
      ko: "징크스가 5초간 유지되는 와작와작 지뢰 3개를 던집니다. ([[TRAP]]) \n 적 챔피언이 닿으면 1.5초 동안 [[ROOT]]시키고 [[DETONATE]]하여 주변 적들에게 90/140/190/240/290(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 24/20.5/17/13.5/10초의 [[COOLDOWN]].",
      en: "Jinx throws 3 Flame Chompers that last 5 seconds. ([[TRAP]]) \n When an enemy champion touches one, it [[ROOT]]s them for 1.5 seconds and [[DETONATE]]s, dealing 90/140/190/240/290 (+100% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n \n 24/20.5/17/13.5/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "징크스가 로켓을 발사합니다. 로켓은 발사 후 첫 1초 동안 피해량이 커지며, 적 챔피언을 맞히면 [[DETONATE]]하여 20/35/50(+12% 추가 [[AD_SCALE]]) ~ 200/350/500(+120% 추가 [[AD_SCALE]]) + [[TARGET_MISSING_HP_SCALE]] 비례의 25/30/35%에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n 주변 적들은 80%의 피해를 입습니다. \n \n 몬스터를 상대로는 [[TARGET_MISSING_HP_SCALE]] 비례 피해량이 1200까지만 적용됩니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Jinx fires a rocket. The rocket gains damage over its first second of flight, and when it hits an enemy champion it [[DETONATE]]s, dealing 20/35/50 (+12% bonus [[AD_SCALE]]) ~ 200/350/500 (+120% bonus [[AD_SCALE]]) + 25/30/35% of [[TARGET_MISSING_HP_SCALE]] [[DMG_PHYSICAL]]. \n Nearby enemies take 80% damage. \n \n Against monsters, the [[TARGET_MISSING_HP_SCALE]] damage is capped at 1200. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default jinx;
