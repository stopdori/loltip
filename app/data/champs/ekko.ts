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
    P: ["DMG_MAGIC", "PROC"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"],
    W: ["PASSIVE_BONUS", "TIMING_CAST", "ZONE"],
    E: { phases: [
      { label: { ko: "구르기단계",   en: "Roll"   }, tags: ["DASH"] },
      { label: { ko: "경직단계",     en: "Buffer" }, tags: ["TIMING_CAST"] },
      { label: { ko: "순간이동단계", en: "Blink"  }, tags: ["HOMING", "BLINK", "DMG_MAGIC", "ON_HIT"] },
    ] },
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BLINK"],
  },

     notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "P의 [[PROC]]은 평타, 스킬피해에 쌓이고 3번 쌓일때 발동.", "W 범위에 [[SLOW]].\n사라지기 전에 에코가 들어가면 추가 효과 발동.", "E 스킬은 3단계로 나뉨 구르기/경직/순간이동.\n경직 단계에서 에코가 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하고 공격하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효.", "E의 경직 단계의 경직 시간은 공격속도와 무관하게 일정함."
      ],
        en: ["P's [[PROC]] stacks on basic attacks and skill damage, triggering on the 3rd stack.", "W creates a slow zone.\nIf Ekko enters before it disappears, a bonus effect activates.", "E has three phases: roll / buffer / blink.\nCC applied during the buffer phase is valid, but the blink still triggers and Ekko moves and attacks.\nThere is no CC immunity during the blink phase.\nIf CC duration remains when Ekko blinks, the CC effect still applies.", "The buffer duration of E's buffer phase is fixed and unaffected by attack speed."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 80,
    16: 50,
  },

};

export default ekko;
