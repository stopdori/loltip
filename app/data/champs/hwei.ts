import type { ChampData } from "../interactions/types";

const hwei: ChampData = {
  id: "hwei",

  skills: {
    base: {
      // 🔫 Q스킬 기반
      P: [],
      Q: ["Q_FLASH"],
      W: ["W_FLASH"],
      E: ["SLOW"],
      R: ["R_FLASH", "SLOW"],
    },

    alt: {
      // 🔨 W스킬 기반
      P: [],
      Q: ["MS_UP"],
      W: ["W_FLASH", "SHIELD"],
      E: ["MANA_RESTORE"],
      R: ["R_FLASH", "SLOW"],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
      Q: ["Q_FLASH", "FEAR"],
      W: ["W_FLASH", "ROOT"],
      E: ["E_FLASH", "AIRBORNE", "SLOW"],
      R: ["R_FLASH", "SLOW"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["DMG_MAGIC", "PROC", "ZONE", "ST_DELAYED"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK"],
      W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "ST_DELAYED"],
      E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "ZONE", "DOT", "DEBUFF_STACK", "ST_DELAYED"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },


    alt: {
      P: ["DMG_MAGIC", "ZONE", "PROC"],
      Q: ["PROJECTILE", "ZONE"],
      W: ["ZONE"],
      E: ["DMG_MAGIC", "PROJECTILE", "BUFF_STACK", "DEBUFF_STACK", "ON_HIT"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },


    alt2: {
      P: ["DMG_MAGIC", "ZONE", "PROC"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK"],
      W:{ phases: [
      { label: { ko: "EW 장판", en: "EW Zone" }, tags: ["TIMING_CAST", "PROJECTILE", "ZONE", "ST_DELAYED"] },
      { label: { ko: "EW 투사체", en: "EW Projectile" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "HOMING", "SINGLE", "DEBUFF_STACK"] },
    ] },
      E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "ST_DELAYED"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "흐웨이 스킬은 색상별로 외우면 좋음", "P는 스킬 한대 맞히면 스택이 쌓이고 다른스킬로 한대 더 맞히면 발동.", "P스택이 쌓이는 스킬\nQQ, QW, QE, WE(평타), EQ, EW, EE, R(범위에 닿으면)", "Q, W, E를 한번 누르고 R을 누르면 취소할 수 있음.", "귀환중에 Q, W, E를 한번 눌러도, 귀환이 끊기지 않음.", "Q스킬 (빨강 - 딜)\nQW는 CC걸린 대상 또는 고립된 대상에게 추가데미지를 줌", "W스킬 (파랑 - 유틸)\nWW은 장판위에 서 있으면 쉴드가 지속적으로 차오름.\nWE는 이미 시전한 스킬에도 추가될 수 있음.", "E스킬 (보라 - CC)\nEW는 날아가서 펼쳐지는데 시간이 걸림\n펼처지고도 범위내에 상대 챔피언이 있다면\n상대를 따라가는 유도투사체를 발사함\n투사체는 다른대상에게 막힐 수 있음\n(미니언 ,정글몹, 등등 포함)"
      ],
        en: ["Hwei's skills are easiest to memorize by color", "Q skills (red — damage):\nQW deals bonus damage to isolated or CC'd targets", "W skills (blue — utility)", "E skills (purple — CC):\nEW travels and expands after a delay.\nIf an enemy champion is within range when it expands, it launches a homing projectile.\nThe projectile can be blocked by other units (minions, jungle monsters, etc.)"]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 80,
  },
};

export default hwei;