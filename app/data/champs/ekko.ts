import type { ChampData } from "../interactions/types";

const ekko: ChampData = {
  id: "ekko",
  skills: {
    P: ["MS_UP",],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SHIELD", "SLOW", "STUN"],
    E: ["E_FLASH", "WALL_HOP", "CC_BUFFER"],
    R: ["HEAL", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

     notes: {
    ko: [
    "W 깔면 밤위 슬로우임\n사라지기 전에만 들어가면 효과 발동됨", "E 스킬은 3단계로 나뉨 구르기/평타(아주 잠깐 경직)/순간이동.\n평타 단계에서 에코가 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하고 공격하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효.", "E의 평타단계의 경직 시간은 공격속도와 무관하게 일정함."
  ],
    en: ["W creates a slow field.\nThe effect activates as long as enemies enter before it disappears.", "E has three phases: roll / auto-attack (very brief stun) / teleport.\nCC applied during the auto-attack phase is valid, but the teleport still triggers and Ekko moves and attacks.\nThere is no CC immunity during the teleport phase.\nIf CC duration remains when Ekko teleports, the CC effect still applies.", "The stun duration of E's auto-attack phase is fixed and unaffected by attack speed."]
  },

  ultCooldown: {
    6: 110,
    11: 80,
    16: 50,
  },

};

export default ekko;
