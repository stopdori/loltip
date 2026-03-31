import type { ChampData } from "../interactions/types";

const camille: ChampData = {
  id: "camille",
  skills: {
    P: ["SHIELD"],
    Q: ["MS_UP", "AA_RESET"],
    W: ["W_FLASH", "HEAL", "SLOW"],
    E: ["AS_UP", "STUN", "WALL_HOP", "CC_BUFFER"],
    R: ["R_FLASH", "KNOCKBACK", "WALL_HOP", "SILENCE", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
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
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1"  }, tags: ["DMG_PHYSICAL", "ON_HIT", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_PHYSICAL", "DMG_TRUE", "TIMING_CAST", "ON_HIT"] },
    ] },
    W: ["DMG_PHYSICAL", "AOE"],
    E: { phases: [
      { label: { ko: "투척단계", en: "Throw" }, tags: ["PROJECTILE", "CC_BUFFER"] },
      { label: { ko: "그렙단계", en: "Grab"  }, tags: ["DASH"] },
      { label: { ko: "대기단계", en: "Hold"  }, tags: ["SKILL_RECAST"] },
      { label: { ko: "돌진단계", en: "Dash"  }, tags: ["DMG_PHYSICAL", "DASH"] },
    ] },
    R:{ phases: [
      { label: { ko: "도약", en: "Dash" }, tags: ["UNSTOPPABLE", "TIMING_CAST", "ZONE", "MARK", "DASH"] },
      { label: { ko: "Mark", en: "Mark"  }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 카밀이 입는 피해의 유형이 물리/마법 피해중 높은쪽의 쉴드를 받음\n예)카밀 방어력/마법저항력이 30/50 일때\n상대스킬로 100/100 물리/마법 피해가 들어온다면\n결과적으로 물리데미지가 더 많이 들어와서 >>>> 물리쉴드", "W는 바깥쪽에 맞혀야지만 [[HEAL]]과 [[SLOW]] 효과 발동", "E스킬은 네단계로 나뉨 투척/그렙/대기/돌진\n투척단계에 카밀이 맞은 CC는 유효하지만\n그렙단계가 발동되어 벽으로 이동.\n대기 단계까지 CC가 남아있다면 E가 해제됨.\n그렙/대기 단계에는 CC류를 맞으면 E가 해제." ,"E는 웬만한 생성된 벽에도 사용 가능.\n[[AS_UP]]과 [[STUN]]은 적(미니언, 몬스터, 챔피언)에게 부딪혀야지만 발동.", "R은 설명에 [[UNSTOPPABLE]]가 없지만, 점프해서 날아갈 때 카밀 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.", "R은 시전 한 대상을 범위에 가두고 [[SILENCE]]을 잠깐 걸고, 범위가 펼쳐질 때 근처에 있던 다른 적 챔피언은 범위 밖으로 [[KNOCKBACK]]시킴."
      ],
        en: ["P: the shield type reflects the higher proportion of incoming physical/magic damage received.\nExample: if Camille has 30 armor / 50 MR and takes 100 physical / 100 magic damage,\nmore physical damage goes through, so she gets a physical shield", "W applies [[HEAL]] and [[SLOW]] only when hitting with the outer ring", "E has four phases: lunge / grapple / wait / dash.\nCC hit during the lunge phase is valid, but the grapple still triggers and Camille moves toward the wall.\nIf CC persists until the wait phase, E is canceled.\nCC during the grapple / wait phase cancels E.", "E can be used on most generated terrain walls.\n[[AS_UP]] and [[STUN]] only trigger on collision with an enemy (minions, monsters, or champions).", "R's [[UNSTOPPABLE]] is not shown in the description, but appears above Camille's health bar while leaping to the target. It ends upon arrival.", "R traps the target inside an arena, briefly applies [[SILENCE]], and [[KNOCKBACK]]s nearby enemy champions out when the arena expands."]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default camille;
