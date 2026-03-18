import type { ChampData } from "../interactions/types";

const briar: ChampData = {
  id: "briar",
  skills: {
    P: ["Q_FLASH", "LIFESTEAL"],
    Q: ["W_FLASH", "AA_RESET", "AR_MR_SHRED", "WALL_HOP"],
    W: ["AS_UP", "MS_UP", "LIFESTEAL", "WALL_HOP"],
    E: ["DMG_REDUCE", "KNOCKBACK", "STUN", "UNSTOPPABLE_CHANNEL"],
    R: ["R_FLASH", "MS_UP", "LIFESTEAL", "FEAR", "WALL_HOP", "CC_IMMUNE", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "브라이어 [[LIFESTEAL]] 귀신임.\n브라이어 상대로는 [[GW]] 필수.", "E에 [[STUN]]은 대상이 벽에 부딪혀야 걸림.", "R은 시전 중 일 때는 [[CC_IMMUNE]], 적중해서 날아갈 때는 [[UNSTOPPABLE]]", "R이 적중한 대상 주변에 범위가 생기고,\n대상을 제외한 범위 내의 적들에게는 [[FEAR]]."
  ],
    en: ["Briar's [[LIFESTEAL]] is exceptional — [[GW]] is essential against her", "E's [[STUN]] requires the target to collide with a wall", "R is [[CC_IMMUNE]] while casting; once it hits and Briar flies toward the target, it becomes [[UNSTOPPABLE]]", "R creates an area around the target it hits.\nEnemies inside the area (excluding the target) are afflicted with [[FEAR]]."]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default briar;
