import type { ChampData } from "../interactions/types";

const ezreal: ChampData = {
  id: "ezreal",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "WALL_HOP", "CC_BUFFER"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK"],
    Q: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"],
    W: { phases: [
      { label: { ko: "W",     en: "W" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE", "MARK"] },
      { label: { ko: "W 발동", en: "W Active" }, tags: ["DMG_MAGIC"] },
    ] },
    E: { phases: [
      { label: { ko: "준비단계",     en: "Wind-up" }, tags: ["TIMING_CAST"] },
      { label: { ko: "순간이동단계", en: "Blink"   }, tags: ["BLINK", "DMG_MAGIC", "PROJECTILE", "SINGLE", ] },
    ] },
    R: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "LOCKED", "CAST_COMMIT"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 [[BUFF_STACK]]으로 5스택까지 쌓이고, 계속 유지시켜야 함.", "[[E_FLASH]] 판정이 점멸 도착한 곳에서 공격이 나감", "[[R_FLASH]]은 가능하지만, 원래 위치에서 스킬이 발동하기 때문에 불가능으로 판단.", "E 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 이즈리얼이 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: ["P is a stacking buff that must be maintained with skills", "[[E_FLASH]] fires from the flash destination", "[[R_FLASH]] technically works but since R fires from Ezreal's original position, it's classified as not possible.", "E has two phases: wind-up / blink.\nCC during the wind-up phase is valid, but the blink still triggers and Ezreal moves.\nThere is no CC immunity during the blink phase.\nIf CC duration remains when Ezreal blinks, the CC effect still applies."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default ezreal;
