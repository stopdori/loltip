import type { ChampData } from "../interactions/types";

const jhin: ChampData = {
  id: "jhin",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["ROOT"],
    E: ["E_FLASH", "SLOW", "REVEALED", "ALLY_TP_OK"],
    R: ["SLOW", "REVEALED"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_PHYSICAL"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "CHAIN"],
    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "ST_CONDITIONAL"],
    E: ["DMG_MAGIC", "TRAP", "ZONE", "RECHARGE", "ST_DELAYED"],
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "CANCELLABLE"],
  },

  notes: {
    ko: [
    "P의 [[MS_UP]]는 평타로 치명타 적중시 발동", "4타를 들고있으면 이속이 빠름\n4타 유지를 위해 덫을 깔아 지속시간 연장시키면 좋음", "진이 적을 처치하면 E가 활성화 된채로 적시체에 생성.", "Q는 4번까지 튕기는데, 대상을 처치하고 튕기면 피해량 증가.", "W의 [[ROOT]]은 대상이 어떤 피해(디버프들 포함)를 받으면 조건이 활성화됨", "E의 [[SLOW]]는 덫 범위위에 있는동안 발동", "R은 미니언 관통, 챔피언 비관통."
  ],
    en: ["P's [[MS_UP]] triggers on crit with a basic attack", "Holding the 4th shot increases movement speed.\nPlacing traps to extend the 4th shot buff is effective", "W's [[ROOT]] activates when the target receives any damage or debuff", "E's [[SLOW]] applies continuously to enemies standing in the trap area"]
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default jhin;
