import type { ChampData } from "../interactions/types";

const aurora: ChampData = {
  id: "aurora",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "INVISIBILITY", "WALL_HOP"],
    E: ["E_FLASH", "SLOW", "WALL_HOP", "CC_BUFFER"],
    R: ["SLOW", "WALL_HOP", "UNSTOPPABLE"],
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
    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "BUFF_STACK", "DASH"],
    W: ["DASH"],
    E: { phases: [
      { label: { ko: "준비단계", en: "Wind-up" }, tags: ["TIMING_CAST", "LOCKED", "CC_BUFFER"] },
      { label: { ko: "후진단계", en: "Retreat" }, tags: ["DMG_MAGIC", "AOE", "BUFF_STACK", "DASH"] },
    ] },
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "UNSTOPPABLE"], },
      { label: { ko: "경계넘어", en: "Zone Dash" }, tags: ["UNTARGETABLE", "DASH"] },
    ] },
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
        "[[R_FLASH]] 안됨", "P가 3스택이 되면 제거되면서 추가 피해와 [[HEAL]]" ,"Q1은 적에게 적중하면 표식을 남기고, 지속시간이 끝나거나 Q2를 누르면 표식이 되돌아 오면서 경로의 적을 타격함.\n이 때 경로의 대상에게 P 스택을 쌓을 수 있음.\nQ를 미니언과 상대 챔피언에게 같이 사용하고, 미니언에남은 표식이 돌아오면서 상대 챔피언을 맞혀야함." ,"W는 얇은 벽, E는 더 얇은 벽을 넘을 수 있음." ,"E 스킬은 2단계로 나뉨 준비/후진.\n준비단계에서 오로라가 맞은 CC는 유효 하지만\n후진단계가 발동되어 뒤로 이동하는 것.\n후진단계에는 CC 저항력 없음.", "R은 설명에 [[UNSTOPPABLE]]가 없지만, 스킬을 시전할때 오로라 체력바 위에 [[UNSTOPPABLE]]가 생김. 처음 도약하며 경계를 펼칠 때만.", "R은 오로라가 경계를 넘으면\n180도 반대반향으로 이동.\n이때 [[UNTARGETABLE]]"
      ],
        en: ["[[R_FLASH]] not possible", "P triggers at 3 stacks, dealing bonus damage and [[HEAL]]ing.", "Q1 hits an enemy to leave a mark. When the duration ends or Q2 is pressed, the mark returns and hits enemies along its path.\nThis can stack P on targets in the path.\nUse Q to hit both a minion and an enemy champion, then let the mark return through the champion.", "W can hop thin walls; E can hop even thinner walls.", "E has two phases: Wind-up and Retreat.\nCC during the wind-up phase applies to Aurora, but the retreat phase still triggers and moves her backward.\nThere is no CC resistance during the retreat phase.", "R's description doesn't mention [[UNSTOPPABLE]], but the [[UNSTOPPABLE]] icon appears above Aurora's health bar when the skill is cast.\nThis applies only during the initial leap when expanding the boundary.", "When Aurora crosses the boundary with R, she reappears from the opposite direction (180°)."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default aurora;
