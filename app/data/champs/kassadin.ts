import type { ChampData } from "../interactions/types";

const kassadin: ChampData = {
  id: "kassadin",
  skills: {
    P: ["DMG_REDUCE", "GHOSTING"],
    Q: ["Q_FLASH", "SHIELD"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "WALL_HOP", "CC_BUFFER"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[DMG_REDUCE]]는 마법피해만 해당됨","Q에 채널링 캔슬 있음. 침묵 아님", "R 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 카사딘이 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
  ],
    en: ["P's [[DMG_REDUCE]] applies to magic damage only", "Q has channel interruption (not silence)", "R has two phases: wind-up / blink.\nCC during the wind-up phase is valid, but the blink still triggers and Kassadin moves.\nThere is no CC immunity during the blink phase.\nIf CC duration remains when Kassadin blinks, the CC effect still applies."]
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
    6: 0,
    11: 0,
    16: 0,
  },

};

export default kassadin;
