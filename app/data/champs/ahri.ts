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
      note1: {
        ko: [
          "P는 [[BUFF_STACK]]이 쌓이면 [[HEAL]] 발동. \n [[BUFF_STACK]]은 처치 시 1개, 3초 이내 킬관여 시 18개",
          "오는 Q를 맞혀야 함. \n 가는 Q는 [[DMG_MAGIC]], 오는 Q는 [[DMG_TRUE]].",
          "W, R의 투사체는 시야가 있어야 날아감.",
          "R은 [[DASH]] 3번 가능. \n 3초 안에 킬 관여 시 +1회 \n 지속시간 15초, 킬관여 시 10초"


          ],
        en: [
          "P's [[BUFF_STACK]] triggers [[HEAL]] when full. \n 1 stack per kill, 18 stacks on kill participation within 3s.",
          "Must hit with the return. \n Going Q deals [[DMG_MAGIC]], return Q deals [[DMG_TRUE]].",
          "W and R projectiles require vision to travel.",
          "R can [[DASH]] up to 3 times. \n Kill participation within 3s grants +1 charge. \n Duration: 15s, resets to 10s on kill participation."
        ]
      },

      note2: {
        ko: [
        "R을 사용하면 R 아이콘에 노란색 테두리로 \n 지속시간 15초가 생김. \n 이 지속시간 동안 킬 관여 시 R 사용 가능 횟수 +1 \n 동시에 지속시간 다시 10초로 증가 \n 횟수를 다 사용해도 지속시간은 끝나지 않음."
      ],
        en: ["When R is active, a yellow border appears on the R icon showing 15s duration.\nKill participation grants +1 R charge and resets duration to 10s.\nEven if all charges are used, the duration continues."]
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
