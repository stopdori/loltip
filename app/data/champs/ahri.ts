import type { ChampData } from "../interactions/types";

const ahri: ChampData = {
  id: "ahri",
  skills: {
    P: ["ST_CONDITIONAL", "HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "CHARM"],
    R: ["R_FLASH", "DASH", "WALL_HOP", "SKILL_RECAST", "SEPARATOR_NEWLINE", "SEPARATOR", "ON_TAKEDOWN", "SKILL_RECAST", "DURATION_EXT"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND"],
    W: ["POSITION_REVEAL"],
    E: ["HIT_SOUND", "HIT_EFFECT"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "정기", en: "" }, tags: ["ST_CONDITIONAL", "BUFF_STACK", "SEPARATOR", "ON_TAKEDOWN", "BUFF_STACK", "X9"] },
      { label: { ko: "회복", en: ""  }, tags: ["STACK_CONSUME", "HEAL"] },
    ] },

    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
      { label: { ko: "오는 Q", en: "Return Q"  }, tags: ["DMG_TRUE", "ST_DELAYED", "PROJECTILE", "HOMING", "PIERCE"] },
    ] },

    W: { phases: [
      { label: { ko: "W 버프", en: "" }, tags: ["BUFF_FORM", "MS_UP"] },
      { label: { ko: "W 투사체", en: ""  }, tags: ["DMG_MAGIC", "PROJECTILE", "HOMING"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "CHARM"],

    R: { phases: [
      { label: { ko: "R 버프", en: "" }, tags: ["BUFF_FORM", "SEPARATOR", "ON_TAKEDOWN", "SKILL_RECAST", "DURATION_EXT"] },
      { label: { ko: "R", en: ""  }, tags: ["DMG_MAGIC", "PROJECTILE", "HOMING", "DASH", "WALL_HOP"] },
    ] },
  },

  notes: {
    skill: {
      note3: {         
        ko: [], en: [] },
      note1: {
        ko: [
          "P는 [[BUFF_STACK]] 9개 쌓이면 [[HEAL]] 발동. \n 일반 대상 처치 시 1개. \n [[ON_TAKEDOWN]] 시 (3초 이내) 9개, 하지만 [[EMPOWERED]]된 효과. \n \n",

          "Q는 되돌아 오는 [[PROJECTILE]]를 발사. \n 발사한 Q는 [[PIERCE]] [[DMG_MAGIC]] \n 되돌아 오는 Q는 [[DMG_TRUE]]. \n \n",

          "W는 [[MS_UP]] [[BUFF]]와 \n [[HOMING]] [[PROJECTILE]] 3개 생성. \n 잠시 몸 주변에 머물다가 \n 주변 대상에게 적절히 발사하여 [[DMG_MAGIC]]. \n \n",

          "E는 [[PROJECTILE]]를 발사. \n 적중하면 [[DMG_MAGIC]], [[CHARM]]. \n \n",

          "R은 [[DASH]]하여 주변에 [[HOMING]] [[PROJECTILE]] 3개를 발사하여 [[DMG_MAGIC]]. \n 동시에 아리에게 15초간 [[BUFF]] 생성. \n [[BUFF]]가 있는동안 2회 [[SKILL_RECAST]] 가능. \n [[ON_TAKEDOWN]] 시 (3초 이내) [[SKILL_RECAST]] +1회 (최대 3회) \n [[DURATION_EXT]] 최대 10초.",
          ],
        en: [
          "P's [[BUFF_STACK]] triggers [[HEAL]] when full. \n 1 stack per kill, 18 stacks on kill participation within 3s.",
          "Must hit with the return Q. \n Going Q deals [[DMG_MAGIC]], return Q deals [[DMG_TRUE]].",
          "W flies toward targets attacked within the last 3 seconds.",
          "E's [[CHARM]] is great for stopping [[DASH]]-type moves. \n [[E_FLASH]] is especially effective.",
          "R allows up to 3 [[DASH]]es. \n Kill participation within 3s grants +1 charge. \n Duration: 15s, resets to 10s on kill participation.",
          "W and R projectiles require vision of the target to travel.",
        ]
      },

      note2: {
        ko: [
        "Q는 사거리 끝에 맞히면 [[DMG_MAGIC]], [[DMG_TRUE]]가 같이 들어감.", 
        "W, R의 투사체는 대상의 시야가 있어야 날아감. \n 3초 이내 아리가 공격한 챔피언이 있다면 우선적으로 적중.", 
        "W는 대상이 없다면 가까운 적에게 발사. \n 하지만 1개 이상은 챔피언 우선.",
        "W는 적중하는 첫번째 [[DMG_MAGIC]]가 제일 쌔고 \n 2~3번째 적중하는 피해는 감소한 [[DMG_MAGIC]]. \n 만약, 각각의 대상에게 1개씩만 날아가면 \n 모두 감소없는 피해로 들어감.",
        "R을 사용하면 R 아이콘에 노란색 테두리로 \n 지속시간 15초가 생김. \n 이 지속시간 동안 [[ON_TAKEDOWN]] 시 R 사용 가능 횟수 +1 \n 동시에 지속시간 다시 10초로 증가 \n 횟수를 다 사용해도 지속시간은 끝나지 않음."
      ],
        en: [
          "W's first hit deals full damage; additional hits to the same target deal reduced damage. \n If only 1 orb flies to each target, it deals full damage. \n If no recent target exists, W fires freely (prioritizes champions, at least 1 orb).",
          "When R is active, a yellow border appears on the R icon showing 15s duration.\nKill participation grants +1 R charge and resets duration to 10s.\nEven if all charges are used, the duration continues.",
        ]
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. 아리도 아트록스와 동일하게 DDragon
  // vars/effectBurn이 P~R 전부 "0"으로 깨져 있어 공식 위키
  // (wiki.leagueoflegends.com/en-us/Ahri) 수치로 채웠다. 위키 fetch 시
  // "Notes" 섹션(정보박스/본문 설명이 아닌 별도 커뮤니티 디테일 목록)
  // 내용은 배제하고, 라벨 붙은 정보박스 필드 값만 채택했다 — E에 "knocking
  // them down"/"65% slow"가 잘못 섞여 나온 걸 필드별로 재질의해서 걸러냄
  // (실제로는 매혹 + 마법 피해만 있고 넉다운/슬로우는 없음).
  // cost/cooldown/range처럼 vars와 무관한 필드는 DDragon 원본에서 직접 확인.
  // (CLAUDE.md "챔피언 skillTooltip 작성 규칙" 참고.)
  skillTooltip: {
    P: {
      ko: "아리가 미니언 또는 몬스터를 처치할 때마다 [[BUFF_STACK]]을 얻고, 9개가 모이면 소모하여 35~95([[LEVEL_SCALE]])(+20% [[AP_SCALE]])의 [[HEAL]]을 얻습니다. \n 적 챔피언 처치에 관여(피해를 입힌 뒤 3초 이내)하면 대신 75~165([[LEVEL_SCALE]])(+30% [[AP_SCALE]])의 [[HEAL]]을 얻습니다.",
      en: "Ahri gains a [[BUFF_STACK]] (Essence Fragment) whenever she kills a minion or monster; at 9 stacks, she consumes them to heal for 35~95 ([[LEVEL_SCALE]]) (+20% [[AP_SCALE]]). \n If she gets a champion takedown within 3 seconds of damaging them, she instead heals for 75~165 ([[LEVEL_SCALE]]) (+30% [[AP_SCALE]]).",
    },
    Q: {
      ko: "아리가 구슬을 던진 후 다시 받습니다. \n 던질 때는 35/60/85/110/135(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며, \n 돌아올 때는 같은 양의 [[DMG_TRUE]]를 입힙니다. \n \n 7초의 [[COOLDOWN]].",
      en: "Ahri throws then pulls back her orb. \n Deals 35/60/85/110/135 (+50% [[AP_SCALE]]) [[DMG_MAGIC]] on the way out, \n and the same amount as [[DMG_TRUE]] on the way back. \n \n 7 second [[COOLDOWN]].",
    },
    W: {
      ko: "아리가 근처 적에게 날아가는 여우불 3개를 방출하여 40/60/80/100/120(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 첫 번째 명중 이후에는 16/24/32/40/48(+16% [[AP_SCALE]])로 감소한 피해를 입힙니다. \n 또한 [[MS_UP]] 40%를 얻었다가 2초에 걸쳐 원래대로 돌아옵니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Ahri releases 3 fox-fires that seek nearby enemies, dealing 40/60/80/100/120 (+40% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Damage is reduced to 16/24/32/40/48 (+16% [[AP_SCALE]]) after the first hit. \n Also gains [[MS_UP]] of 40%, decaying over 2 seconds. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    E: {
      ko: "아리가 입맞춤을 날려 첫 번째로 맞는 적을 1.2/1.35/1.5/1.65/1.8초 동안 [[CHARM]]시키고 80/120/160/200/240(+85% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 12초의 [[COOLDOWN]].",
      en: "Ahri blows a kiss that [[CHARM]]s the first enemy hit for 1.2/1.35/1.5/1.65/1.8 seconds and deals 80/120/160/200/240 (+85% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 12 second [[COOLDOWN]].",
    },
    R: {
      ko: "아리가 민첩하게 [[DASH]]하며 근처 적(챔피언 우선)에게 혼령의 정기 3개를 쏘아내 정기 하나당 75/125/175(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 이 스킬은 15초 안에 최대 2회까지 [[SKILL_RECAST]] 가능합니다. \n \n 이 기간 동안 패시브 효과로 챔피언의 정기를 흡수하면 [[SKILL_RECAST]] 가능 횟수가 1회 늘고(최대 3회까지 저장) 남은 시간이 최대 10초 늘어납니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Ahri nimbly dashes, firing 3 essence bolts at nearby enemies (prioritizing champions), each dealing 75/125/175 (+35% [[AP_SCALE]]) [[DMG_MAGIC]]. \n This Ability can [[SKILL_RECAST]] up to 2 more times within 15 seconds. \n \n During this window, consuming a champion's essence via the passive grants an additional recast (up to 3 stored) and extends the remaining time by up to 10 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]] (at levels 6/11/16).",
    },
  },
};

export default ahri;
