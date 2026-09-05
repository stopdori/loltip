import type { ChampData } from "../interactions/types";

const reksai: ChampData = {
  id: "reksai",

  skills: {
    base: {
      // 돌출
      P: [],
      Q: ["AS_UP", "AA_RESET"],                // 인간 Q는 Q플 X
      W: ["TRANSFORM"],
      E: ["E_FLASH"],
      R: ["R_FLASH", "DASH", "WALL_HOP", "SEPARATOR", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
    },

    alt: {
      // 매복
      P: ["MS_UP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
      Q: ["Q_FLASH", "REVEALED"],      // 변신 Q는 Q플 가능
      W: ["TRANSFORM", "SEPARATOR", "AIRBORNE"],
      E: ["DASH", "WALL_HOP", "SEPARATOR", "ALLY_TP_OK"],
      R: ["R_FLASH", "DASH", "WALL_HOP", "SEPARATOR", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: [],
      E: ["POSITION_REVEAL"],
      R: [],
    },
    alt: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q: ["DMG_PHYSICAL", "AOE", "ON_HIT", "AS_UP"],
      W: ["TRANSFORM"],
      E: ["DMG_PHYSICAL", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "DMG_TRUE"],      
      R: ["DMG_PHYSICAL", "TIMING_CAST", "DASH", "HOMING", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
    },

    alt: {
      P: [],
      Q: ["DMG_MAGIC", "PROJECTILE", "AOE", "MARK"],
      W: ["TRANSFORM"],
      E: ["DASH", "SEPARATOR", "SUMMON", "SEPARATOR", "ALLY_TP_OK"],
      R: ["DMG_PHYSICAL", "TIMING_CAST", "DASH", "HOMING", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],

    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "매복폼 E로 진입해서 광역 [[AIRBORNE]]. \n 싸우다 땅굴로 탈출하거나 \n R로 어그로 핑퐁 또는 상대 마무리 하기.",
        ], en: [
          "Engage with Burrowed Form's E for a wide-area [[AIRBORNE]]. \n Escape through a tunnel mid-fight, \n or use R to bounce aggro or finish off the target.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]], 스킬 사용 시 25분노 생성. \n 미니언 대상은 16%의 효율로 생성. \n 최대 100 \n 5초동안 생성하지 않으면 초당 20씩 소모. \n W의 매복폼 일때 분노를 소모하여 레벨 비례 [[HEAL]]. \n \n ",

          "돌출폼 \n \n Q는 [[AS_UP]] [[BUFF]] 3초간 획득. \n [[BA]] 공격 시 [[DURATION_RESET]]. 최대 3번 \n [[BUFF]]가 있는 동안 [[BA]]가 [[EMPOWERED]]되어 [[AOE]] [[DMG_PHYSICAL]]. \n \n W는 매복폼으로 [[TRANSFORM]]. \n \n E는 대상을 물어뜯어 [[DMG_PHYSICAL]]. \n 분노가 100일 때 [[DMG_PHYSICAL]] 대신 [[DMG_TRUE]]. \n \n",

          "매복폼 \n \n 이 상태일 때 [[MS_UP]]. \n 렉사이의 시야가 감소하지만 \n 넓은 범위 적들의 움직임을 감지. \n 움직임은 아군에게도 보여줌. \n \n 매복폼에서 [[BA]]를 때리면 자동으로 돌출폼으로 [[TRANSFORM]]. \n 이때 공격 대상과 주변 [[AOE]] [[AIRBORNE]]. \n \n Q는 [[PROJECTILE]]를 발사. \n 적중하면 [[AOE]] [[DMG_MAGIC]] \n 챔피언이라면 25분노 생성. \n 비-은신 챔피언의 위치를 5초간 드러냄. \n \n W는 돌출폼으로 [[TRANSFORM]]. \n 주변 [[AOE]] [[AIRBORNE]]. \n \n E는 땅속으로 [[DASH]]하여 땅굴 출입구 2개 생성. \n 땅굴은 10분간 유지되고 최대 8개 유지가능. \n 2개중 하나를 클릭하면 반대쪽으로 [[DASH]]. \n 땅굴마다 6초의 [[ON_TARGET_CD]]. \n \n",

          "R은 [[UNSTOPPABLE]]로 땅속에 숨어 [[UNTARGETABLE]]. \n 이때 렉사이는 협곡에서 사라지는 판정. \n 잠시 뒤 대상 근처에서 나타나 [[UNSTOPPABLE]] [[HOMING]] [[DASH]]. \n 대상 최대체력 비례 [[DMG_PHYSICAL]]와 W의 [[CDR_RESET]]. \n \n 5초이내 피해를 준 대상에게 사용 가능.",
        ],

        en: [
          "P generates 25 Fury on [[BA]] or skill use. \n Generates at 16% efficiency against minions. \n Max 100. \n If no Fury is generated for 5 seconds, it drains 20 per second. \n While in Burrowed Form (W), consumes Fury for a level-scaling [[HEAL]]. \n \n ",

          "Unburrowed Form \n \n Q grants an [[AS_UP]] [[BUFF]] for 3 seconds. \n [[DURATION_RESET]]s on [[BA]], up to 3 times. \n While the [[BUFF]] is active, [[BA]]s become [[EMPOWERED]] to deal [[AOE]] [[DMG_PHYSICAL]]. \n \n W [[TRANSFORM]]s into Burrowed Form. \n \n E bites the target for [[DMG_PHYSICAL]]. \n Deals [[DMG_TRUE]] instead of [[DMG_PHYSICAL]] at 100 Fury. \n \n",

          "Burrowed Form \n \n Grants [[MS_UP]] while in this state. \n Rek'Sai's vision is reduced, \n but she detects enemy movement across a wide radius. \n This movement is also shown to allies. \n \n Landing a [[BA]] while burrowed automatically [[TRANSFORM]]s her into Unburrowed Form. \n This causes an [[AOE]] [[AIRBORNE]] on the target and nearby enemies. \n \n Q fires a [[PROJECTILE]]. \n On hit, deals [[AOE]] [[DMG_MAGIC]]. \n Generates 25 Fury if it hits a champion. \n Reveals the position of non-stealthed champions for 5 seconds. \n \n W [[TRANSFORM]]s her into Unburrowed Form. \n [[AOE]] [[AIRBORNE]] on nearby enemies. \n \n E [[DASH]]es underground to create 2 tunnel entrances. \n Tunnels last 10 minutes, up to 8 at once. \n Clicking either entrance [[DASH]]es her to the other. \n Each tunnel has a 6-second [[ON_TARGET_CD]]. \n \n",

          "R burrows underground with [[UNSTOPPABLE]] and [[UNTARGETABLE]]. \n During this, Rek'Sai is considered to have left the Rift. \n After a short delay, she emerges near the target with an [[UNSTOPPABLE]] [[HOMING]] [[DASH]]. \n Deals max-HP-scaling [[DMG_PHYSICAL]] and triggers [[CDR_RESET]] for W. \n \n Can be used on a target she has damaged within the last 5 seconds.",
        ]

      },

      note2: {
        ko: [
        "돌출폼 Q의 [[AOE]] [[DMG_PHYSICAL]]는 \n [[BA]] 공격 대상에게는 [[CRIT]]로 적용 가능.",
        "매복폼 상태에서는 렉사이의 시야가 줄어듦 \n 대신 상대 움직임을 진동으로 감지할 수 있음. \n 상대가 가만히 서있다면 바로 근처에 있어도 모를 수 있음.", 
        "매복폼 E의 땅굴은 [[ALLY_TP_OK]]. \n 양쪽 출입구중 선택해서 사용 가능.",
        "R은 상대가 점멸로 피할 수 없음. \n 단, [[UNTARGETABLE]] 또는 협곡에서 사라지는 판정은 피할 수 있음.",
      ],
        en: [
        "Unburrowed Form's Q [[AOE]] [[DMG_PHYSICAL]] \n can [[CRIT]] against [[BA]] targets.",
        "Rek'Sai's vision is reduced while in Burrowed Form, \n but she can detect enemy movement through vibrations instead. \n If the enemy stands still, she may not notice them even up close.",
        "Burrowed Form's E tunnels are [[ALLY_TP_OK]]. \n Either entrance can be used to exit.",
        "R cannot be dodged with Flash. \n However, [[UNTARGETABLE]] effects or leaving the Rift can still avoid it.",
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default reksai;