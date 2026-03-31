import type { ChampData } from "../interactions/types";

const ahri: ChampData = {
  id: "ahri",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "CHARM"],
    R: ["R_FLASH", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND"],
    W: ["POSITION_REVEAL"],
    E: ["HIT_SOUND", "HIT_EFFECT"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: [],
    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE"] },
      { label: { ko: "오는 Q", en: "Return Q"  }, tags: ["DMG_TRUE", "PROJECTILE", "PIERCE"] },
    ] },
    W: ["DMG_MAGIC", "PROJECTILE", "HOMING"],
    E: ["DMG_MAGIC", "PROJECTILE"],
    R: ["DMG_MAGIC", "PROJECTILE", "HOMING", "DASH", "SKILL_RECAST"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P의 [[HEAL]]은 9[[BUFF_STACK]]이 되면 발동.\n스택은 미니언, 몬스터 처치시 1획득.\n3초이내 킬관여 시 18스택 P([[HEAL]])효과 발동.\n이때 스택이 날아가지 않음.", "W, R은 시야가 있어야 투사체가 날아감.", "R을 사용하면 R 아이콘에 노란색 태두리로 지속시간이 생김.\n 지속시간동안 킬 관여 시 R 사용가능 횟수가 +1 되고, 지속시간도 추가 증가\n사용 횟수를 지속시간 이내에 다 사용했어도 끝나지 않음."
      ],
        en: ["P's [[HEAL]] activates at 9 stacks.\nGain 1 stack from killing minions or monsters.\nKill participation within 3s triggers ~18 stacks instantly\n(stacks are not consumed when triggered this way)", "When R is active, a yellow border appears on the R icon showing its remaining duration.\nKill participation during this window grants +1 R charge and extends the duration.\nEven if all charges are used within the duration, the effect does not end immediately."]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default ahri;
