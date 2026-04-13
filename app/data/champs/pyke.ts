import type { ChampData } from "../interactions/types";

const pyke: ChampData = {
  id: "pyke",
  skills: {
    P: ["HEAL", "AD_UP"],
    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Stab" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["Q_FLASH", "GRAB"] },
    ] },
    
    W: ["W_FLASH", "MS_UP", "CAMOUFLAGE"],
    E: ["E_FLASH", "WALL_HOP", "STUN", "GHOSTING"],
    R: ["R_FLASH", "WALL_HOP", "EXECUTE", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_BONUS"],
    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Stab" }, tags: ["DMG_PHYSICAL", "TIMING_INSTANT", "NON_PROJECTILE", "SINGLE"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["DMG_PHYSICAL", "SKILL_CHARGED", "TIMING_CAST", "PROJECTILE"] },
    ] },
    W: ["BUFF_FORM"],
    E: { phases: [
      { label: { ko: "E", en: "E"}, tags: ["DASH"] },
      { label: { ko: "E 잔상", en: "E Afterimage" }, tags: ["DMG_PHYSICAL", "AOE", "ST_DELAYED"] },
    ] },
    R: { phases: [
      { label: { ko: "준비단계",     en: "Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER", "MOBILITY", "LOCKED"] },
      { label: { ko: "순간이동단계", en: "Blink"   }, tags: ["DMG_PHYSICAL", "AOE", "BLINK", "SKILL_RECAST"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "파이크 P는 체력14를 공격력1로 변환", "우물에서 복귀할 때 E쓰고 W쓰면 좋음\nW쓰고 E쓰면 [[CAMOUFLAGE]] 풀림", "W [[CAMOUFLAGE]] 중 점멸써도 [[CAMOUFLAGE]] 안풀림", "E [[STUN]]은 잔상이 돌아오면서 적용", "R 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 파이크가 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동하고 내려 찍었을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: ["Pyke's P converts 14 HP into 1 AD", "Using E then W when recalling is effective.\nUsing W then E breaks [[CAMOUFLAGE]]", "[[CAMOUFLAGE]] does not break on flash during W", "E's [[STUN]] triggers as the returning dagger comes back", "R is [[UNSTOPPABLE]] even though it's not stated in the description"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default pyke;
