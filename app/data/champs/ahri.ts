import type { ChampData } from "../interactions/types";

const ahri: ChampData = {
  id: "ahri",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "CHARM"],
    R: ["R_FLASH", "DASH", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND"],
    W: ["POSITION_REVEAL"],
    E: ["HIT_SOUND", "HIT_EFFECT"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF_STACK"],
    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
      { label: { ko: "오는 Q", en: "Return Q"  }, tags: ["DMG_TRUE", "PROJECTILE", "HOMING", "PIERCE"] },
    ] },
    W: ["DMG_MAGIC", "PROJECTILE", "HOMING"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"],
    R: ["DMG_MAGIC", "PROJECTILE", "HOMING", "DASH", "SEPARATOR" ,"ST_CONDITIONAL", "SKILL_RECAST"],
  },

  notes: {
    skill: {
      note3: { 
        
        ko: [
          "R로 왔다갔다 하면서 Q, W로 데미지를 넣고 \n E([[CHARM]])로 상대 진입 막기.", "RE 또는 [[E_FLASH]]로 진입해서 \n 아군의 호응을 유도하거나 암살각을 노리기.",
          ], en: [
          "Use R to reposition while dealing damage with Q and W, \n then block enemy advances with E ([[CHARM]]).",
          "Engage with RE or [[E_FLASH]] to bait allied follow-up \n or go for an assassination.",
          ] },
      note1: {
        ko: [
          "P는 [[BUFF_STACK]]이 쌓이면 [[HEAL]] 발동. \n [[BUFF_STACK]]은 처치 시 1개, 3초 이내 킬관여 시 18개",
          "오는 Q를 맞혀야 함. \n 가는 Q는 [[DMG_MAGIC]], 오는 Q는 [[DMG_TRUE]].",
          "W는 3초이내 공격 대상에게 날아감. \n",
          "E의 [[CHARM]]은 [[DASH]] 계열을 막기 좋음. \n [[E_FLASH]]이 정말 좋음.",
          "R은 [[DASH]] 3번 가능. \n 3초 안에 킬 관여 시 +1회 \n 지속시간 15초, 킬관여 시 10초",
          "W, R의 투사체는 대상의 시야가 있어야 날아감.",


          ],
        en: [
          "P's [[BUFF_STACK]] triggers [[HEAL]] when full. \n 1 stack per kill, 18 stacks on kill participation within 3s.",
          "Must hit with the return Q. \n Going Q deals [[DMG_MAGIC]], return Q deals [[DMG_TRUE]].",
          "W flies toward targets attacked within the last 3 seconds.",
          "E's [[CHARM]] is great for stopping [[DASH]]-type moves. \n [[E_FLASH]] is especially effective.",
          "R allows up to 3 [[DASH]]es. \n Kill participation within 3s grants +1 charge. \n Duration: 15s, resets to 10s on kill participation.",
          "W and R projectiles require vision of the target to travel.",
        ]
      },

      note2: {
        ko: [
        "W는 1개 데미지가 제일 쌔고 \n 2~3개는 감소한 피해로 들어감. \n 만약, 각각의 대상에게 1개씩만 날아가면 감소없는 피해로 들어감. \n 만약 최근 타겟이 없을 때 W를 쓰면 자기 맘대로 날아감. (챔피언은 우선 1개이상.)", "R을 사용하면 R 아이콘에 노란색 테두리로 \n 지속시간 15초가 생김. \n 이 지속시간 동안 킬 관여 시 R 사용 가능 횟수 +1 \n 동시에 지속시간 다시 10초로 증가 \n 횟수를 다 사용해도 지속시간은 끝나지 않음."
      ],
        en: [
          "W's first hit deals full damage; additional hits to the same target deal reduced damage. \n If only 1 orb flies to each target, it deals full damage. \n If no recent target exists, W fires freely (prioritizes champions, at least 1 orb).",
          "When R is active, a yellow border appears on the R icon showing 15s duration.\nKill participation grants +1 R charge and resets duration to 10s.\nEven if all charges are used, the duration continues.",
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

export default ahri;
