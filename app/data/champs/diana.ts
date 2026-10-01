import type { ChampData } from "../interactions/types";

const diana: ChampData = {
  id: "diana",
  skills: {
    P: ["ST_CONDITIONAL", "AS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "MARK", "REVEALED"],
    W: ["W_FLASH", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
    E: ["E_FLASH", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "CDR_RESET"],
    R: ["R_FLASH", "REVEALED", "SEPARATOR", "GRAB", "SLOW"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 공속 증가", en: "P Attack Speed Up" }, tags: ["ST_CONDITIONAL", "AS_UP"] },
      { label: { ko: "P 평타", en: "P Basic Attack" }, tags: ["BUFF_STACK"] },
      { label: { ko: "P 평타 강화", en: "P Empowered Attack" }, tags: ["STACK_CONSUME", "DMG_MAGIC", "AOE"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "PROJECTILE", "SEPARATOR", "MARK", "REVEALED"],

    W: { phases: [
      { label: { ko: "W 쉴드", en: "W Shield" }, tags: ["SHIELD"] },
      { label: { ko: "W 구체", en: "W Orbs" }, tags: ["DMG_MAGIC", "SINGLE", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"] },
    ] },
    
    E: ["DMG_MAGIC", "TARGETED", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "MARK_CONSUME", "CDR_RESET"],

    R: { phases: [
      { label: { ko: "달", en: "Moon" }, tags: ["TIMING_CAST", "AOE", "REVEALED", "SEPARATOR", "GRAB", "SLOW"] },
      { label: { ko: "달 낙하", en: "Moonfall" }, tags: ["ST_CONDITIONAL", "ST_DELAYED", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬 사용 시 [[AS_UP]]. \n [[BA]]를 때리면 [[BUFF_STACK]]. \n 2 [[BUFF_STACK]]시 다음 [[BA]] [[EMPOWERED]] \n [[AOE]] [[DMG_MAGIC]] 추가. \n \n",

          "Q는 오른손에서 반시계 방향으로 \n 포물선을 그리면서 [[PIERCE]] [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[MARK]]. \n [[MARK]]은 [[STEALTH]]이 아닌 대상을 [[REVEALED]]. \n \n",

          "W는 [[SHIELD]]를 획득하고 \n 몸 주변에 회전하는 구체 3개 생성. \n 구체에 부딪히면 [[DMG_MAGIC]]를 입히고 소멸. \n 3개가 다 소모되면 같은 양의 [[SHIELD]] 추가. \n \n",

          "E는 [[TARGETED]] [[DASH]]. \n Q의 [[MARK]]이 남아있는 대상은 E [[CDR_RESET]]. \n \n",

          "R은 주변 [[AOE]] [[REVEALED]], [[GRAB]], [[SLOW]]. \n 적 챔피언이 적중하면 \n 머리위에 구체 생성 \n 잠시 뒤 [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]]. \n 적중한 챔피언 하나당 추가 [[DMG_MAGIC]].",
        ],

        en: [
          "P grants [[AS_UP]] when using a skill. \n Each [[BA]] grants a [[BUFF_STACK]]. \n At 2 [[BUFF_STACK]]s, the next [[BA]] is [[EMPOWERED]], \n adding [[AOE]] [[DMG_MAGIC]]. \n \n",
          "Q fires counterclockwise from the right hand, \n launching a [[PIERCE]] [[PROJECTILE]] in an arc. \n [[DMG_MAGIC]] and [[MARK]]. \n The [[MARK]] makes non-[[STEALTH]] targets [[REVEALED]]. \n \n",
          "W grants a [[SHIELD]] \n and creates 3 orbs orbiting Diana. \n Orbs deal [[DMG_MAGIC]] on contact and disappear. \n When all 3 are consumed, grants an additional [[SHIELD]] of the same amount. \n \n",
          "E is a [[TARGETED]] [[DASH]]. \n Against a target that still has Q's [[MARK]], E gets a [[CDR_RESET]]. \n \n",
          "R applies [[AOE]] [[REVEALED]], [[GRAB]], and [[SLOW]] around Diana. \n If an enemy champion is hit, \n an orb forms overhead \n and shortly after [[DETONATE]]s, dealing [[AOE]] [[DMG_MAGIC]]. \n Bonus [[DMG_MAGIC]] per champion hit.",
        ]

      },

      note2: {
        ko: ["EQ는 E의 [[DASH]]이 도착하고 \n Q가 적중해서 E [[CDR_RESET]] 불가.", 
          "R의 구체는 다이애나를 따라옴. \n 점멸을 사용해도 따라옴."],
        en: [
          "With EQ, E's [[DASH]] arrives first \n and Q lands afterward, so E cannot get a [[CDR_RESET]].",
          "R's orb follows Diana. \n It follows even when she uses Flash.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Diana,
  // 스킬 수치 최근 변경 V26.11). DDragon effectBurn/vars가 대부분 비어 있어 위키 본문 수치로 채움.
  // R 둔화는 DDragon effectBurn(35/40/45%)과 위키(40/50/60%)가 달라 위키 값을 채택.
  // R "최대 추가 피해"는 위키의 챔피언당 추가 피해 × 최대 4명으로 계산한 값.
  skillTooltip: {
    P: {
      ko: "3번째 [[BA]]마다 근처 적들을 베어 20~220([[LEVEL_SCALE]] 비례)(+50% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 입힙니다. \n 스킬 사용 후 5초 동안 45~105%([[LEVEL_SCALE]] 비례)의 [[AS_UP]]를 얻습니다.",
      en: "Every 3rd [[BA]] cleaves nearby enemies, dealing 20~220 (based on [[LEVEL_SCALE]]) (+50% [[AP_SCALE]]) bonus [[DMG_MAGIC]]. \n After using a skill, Diana gains 45~105% (based on [[LEVEL_SCALE]]) [[AS_UP]] for 5 seconds.",
    },
    Q: {
      ko: "다이애나가 달 에너지를 휘어지게 발사하여 70/105/140/175/210(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 3초 동안 달빛으로 [[MARK]]을 남깁니다. \n \n 달빛은 은신 상태가 아닌 적을 [[REVEALED]] 상태로 만듭니다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "Diana fires a curving bolt of lunar energy, dealing 70/105/140/175/210 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] and leaving a Moonlight [[MARK]] for 3 seconds. \n \n Moonlight makes enemies that are not stealthed [[REVEALED]]. \n \n 8/7.5/7/6.5/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "다이애나가 5초 동안 주위를 돌면서 닿으면 폭발하여 각각 20/32/44/56/68(+18% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히는 구체를 세 개 생성합니다. 최대 60/96/132/168/204(+54% [[AP_SCALE]])의 피해를 입힙니다. \n \n 같은 시간 동안 다이애나가 45/60/75/90/105(+30% [[AP_SCALE]])(+11% [[SELF_BONUS_HP_SCALE]])의 피해를 흡수하는 [[SHIELD]]도 얻습니다. \n 마지막 구체가 폭발하면 같은 양의 [[SHIELD]]를 추가로 얻고 [[DURATION_RESET]]됩니다. \n \n 15/13.5/12/10.5/9초의 [[COOLDOWN]].",
      en: "Diana creates three orbs that orbit her for 5 seconds and explode on contact, each dealing 20/32/44/56/68 (+18% [[AP_SCALE]]) [[DMG_MAGIC]]. Deals up to 60/96/132/168/204 (+54% [[AP_SCALE]]) damage. \n \n For the same duration, Diana also gains a [[SHIELD]] that absorbs 45/60/75/90/105 (+30% [[AP_SCALE]]) (+11% [[SELF_BONUS_HP_SCALE]]) damage. \n When the last orb explodes, she gains an additional [[SHIELD]] of the same amount and gets a [[DURATION_RESET]]. \n \n 15/13.5/12/10.5/9 second [[COOLDOWN]].",
    },
    E: {
      ko: "다이애나가 복수심에 불타는 달이 되어 적에게 [[DASH]]하고 50/70/90/110/130(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 대상이 달빛 효과를 받고 있으면 이 스킬이 [[CDR_RESET]]됩니다. \n \n 22/20/18/16/14초의 [[COOLDOWN]].",
      en: "Diana becomes the vengeful moon and [[DASH]]es to an enemy, dealing 50/70/90/110/130 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. \n If the target is affected by Moonlight, this skill gets a [[CDR_RESET]]. \n \n 22/20/18/16/14 second [[COOLDOWN]].",
    },
    R: {
      ko: "다이애나가 주위 적들을 [[REVEALED]] 상태로 만들고 [[GRAB]]한 다음 2초 동안 40/50/60% [[SLOW]]시킵니다. \n \n 최소 한 명의 적 챔피언에게 적중하면 다이애나가 달을 불러내어 200/300/400(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]+추가로 끌어당기는 챔피언 하나당 35/60/85(+15% [[AP_SCALE]])에 해당하는 피해를 입힙니다. \n 최대 140/240/340(+60% [[AP_SCALE]])의 피해를 추가로 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Diana makes nearby enemies [[REVEALED]], [[GRAB]]s them, and then [[SLOW]]s them by 40/50/60% for 2 seconds. \n \n If she hits at least one enemy champion, Diana calls down the moon, dealing 200/300/400 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] + 35/60/85 (+15% [[AP_SCALE]]) per additional champion pulled. \n Deals up to 140/240/340 (+60% [[AP_SCALE]]) additional damage. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default diana;
