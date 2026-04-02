import type { ChampData } from "../interactions/types";

const neeko: ChampData = {
  id: "neeko",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "INVISIBILITY"],
    E: ["E_FLASH", "ROOT"],
    R: ["R_FLASH", "SUSPENDING", "STUN", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: ["VISION"],
    E: ["HIT_INDICATOR"],
    R: [],
  },

  gimmick: {
    P: [],
    Q: { phases: [
      { label: { ko: "", en: "" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "", en: "" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ZONE", "DOT"] },
    ] },
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "ON_HIT", "NON_PROJECTILE", "PROC"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["SUMMON", "MOBILITY"] },
    ] },
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE" ,"PIERCE"],
    R: { phases: [
      { label: { ko: "준비단계", en: "Wind-up"  }, tags: ["BUFF_FORM", "SKILL_CHANNEL", "TIMING_CAST", "LOCKED"] },
      { label: { ko: "체공단계", en: "Airborne" }, tags: ["SKILL_CHANNEL", "TIMING_CAST", "LOCKED"] },
      { label: { ko: "스턴단계", en: "Stun"     }, tags: ["DMG_MAGIC", "AOE", "LOCKED"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "P로 물체 OR 생명체 근처에서 쇼마(게이지)를 채우면 변신 가능.", "변신은 CC를 맞거나, 변신한 대상의 체력이 다 닳면 해제.", "변신하고 평타를 3대 때리면 W의 [[PASSIVE_BONUS]]의 [[ON_HIT]]효과가 발동.", "니코 P(변신)로 (덫,와드 등등)변신하고 W로 소환한 분신에 텔 안타짐", "니코가 변했을때 아이템을 쓰면 풀리지 않는것들과 풀리는것들이 있음.\n\n풀리지 않는것\n슈렐, 솔라리, 미카엘, 기맹, 요오무, 실체화 장비, 수은, 존야\n\n풀리는 것들\n구원, 벨트, 란두인, 히드라류. \n\n착용하면 효과가 보이는것들\n가엔, 망자의 갑옷, 얼심, 피바라기, 주문검류.\n\n착용하면 효과가 유효한것들\n웬만한 아이템 효과는 다 발휘됨.\n치감, 스태틱, 고연포, 강심 심지어 징수의 총 까지 뭐 등등 대부분.\n\n밴시류는 모습이 보이지 않지만 정상작동.\n멜모셔스도 조건이 맞으면 발동.", "Q는 미니언을 처치하거나, 챔피언 대형 몬스터를 맞히면 추가로 폭발.", "W는 Ctrl+1 감정표현으로 오래 남길 수 있음", "E는 관통해서 맞히면 [[ROOT]]이 조금 더 길게 걸림", "니코 궁콤보는 R F(점멸) 벨트가 자연스러움", "니코 R은 세단계로 이루어짐\n준비단계\n[[SUSPENDING]]단계 니코가 점프하여 적 챔피언들을 [[SUSPENDING]]시킴\n[[STUN]]단계 니코가 착지하면서 범위에 [[STUN]]", "적 챔피언이 [[SUSPENDING]]단계에 범위밖에 있다가 [[STUN]]단계에 범위에 들어와있으면 [[STUN]]과 피해가 들어감"
      ],
        en: ["[[Q_FLASH]] not possible", "Cannot TP onto Neeko's disguise or W clones", "W clone can be kept alive longer with Ctrl+1 emote", "E applies a longer [[ROOT]] when piercing through", "Neeko's R combo flows naturally as R → Flash → Belt", "Neeko's R has three phases:\nPrep phase\n[[SUSPENDING]] phase — Neeko jumps and [[SUSPENDING]]s nearby enemy champions\n[[STUN]] phase — landing deals [[STUN]] in the area", "Enemies outside the area during [[SUSPENDING]] but inside during [[STUN]] will be hit by [[STUN]] and damage"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 95,
    16: 90,
  },

};

export default neeko;
