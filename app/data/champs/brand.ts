import type { ChampData } from "../interactions/types";

const brand: ChampData = {
  id: "brand",
  skills: {
    P: ["MANA_RESTORE"],
    Q: ["Q_FLASH", "STUN"],
    W: ["W_FLASH"],
    E: [],
    R: ["SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[MANA_RESTORE]]은 불길 대상을 처치시 발동.\n불길은 스킬을 맞히면 3스택까지 적중\n3스택시 광역 폭발\n아이템 효과로 발동안됨(벨트, 루덴 등등)", "Q의 [[STUN]]은 이미 불길이 걸려있는 대상에게만 발동 됨 (예- WQ, EQ, RQ)","R의 [[SLOW]]는 불길이 있는상태에만 걸림"
  ],
    en: ["P's [[MANA_RESTORE]] triggers when killing a target with Blaze.\nBlaze stacks up to 3 per target from skills.\nAt 3 stacks it triggers an AoE explosion.\nItem effects (e.g. Liandry's, Luden's) don't proc it", "Q's [[STUN]] only applies to targets already affected by Blaze (e.g. WQ, EQ, RQ)", "R's [[SLOW]] only applies to targets already affected by Blaze"]
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
    6: 100,
    11: 90,
    16: 80,
  },

};

export default brand;
