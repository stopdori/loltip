import type { ChampData } from "../interactions/types";

const heimerdinger: ChampData = {
  id: "heimerdinger",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["ALLY_TP"] },
      { label: { ko: "강화 Q", en: "Empowered Q" }, tags: ["SLOW", "ALLY_TP"] },
    ] },
    W: [],
    E: ["SLOW", "STUN"],
    R: ["EMPOWERED", "Q", "W", "E"],
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
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SUMMON", "RECHARGE"] },
      { label: { ko: "강화 Q", en: "Empowered Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SUMMON", "SLOW"] },
      { label: { ko: "포탑 빔", en: "Turret Beam" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
    ] },

    W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE", "VOLLEY_OVERLAP"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["EMPOWERED", "Q", "W", "E"],
  },

  notes: {
    skill: {
      note3: {
        ko: [],
        en: [] },
      note1: {

        ko: [
          "P는 Q포탑, 아군포탑 \n 근처(넥서스 크기 정도)에서 [[MS_UP]].",

          "Q는 부품을 사용하여 3개까지 [[RECHARGE]], [[SUMMON]] 가능. \n 부품은 딩거 몸 주변을 회전하고있음. \n \n 포탑은 특정 조건에서 빔 게이지가 충전. \n 100충전을 소모해서 빔 발사. \n 딩거가 멀어지면 포탑이 비활성화. ",

          "W는 5발을 한번에 발사. \n 챔피언에 적중한 발수 하나당 포탑빔 20충전.",

          "E는 [[AOE]][[SLOW]]. \n 중심에 맞으면 [[STUN]]. \n 챔피언에 적중하면 포탑빔 100충전.",

          "R은 다른 스킬들을 [[EMPOWERED]]. \n \n Q [[EMPOWERED]]는 최대 개수 예외 포탑을 [[SUMMON]]. \n [[EMPOWERED]]포탑이 [[CC_IMMUNE]]. \n [[EMPOWERED]]포탑의 [[BA]]는 [[SLOW]]와 20충전. \n \n W [[EMPOWERED]] 5발씩 4번 발사.\n 조건만 맞는다면 최대 400충전 \n \n E는 범위가 증가하고 3번까지 튕김. \n 조건만 맞는다면 3번 다 포탑 100씩 충전",
        ],

        en: [
          "P: Grants [[MS_UP]] near Q turrets or allied towers \n (roughly the size of a Nexus).",

          "Q: Uses a charge to [[SUMMON]] a turret, up to 3 via [[RECHARGE]]. \n Charges orbit Heimerdinger's body. \n \n Turrets build a beam gauge under certain conditions. \n Consuming 100 charges fires a beam. \n Turrets deactivate if Heimerdinger moves too far away.",

          "W: Fires 5 rockets at once. \n Each rocket that hits a champion charges turret beams by 20.",

          "E: [[AOE]] [[SLOW]]. \n Hitting the center applies [[STUN]]. \n Hitting a champion charges turret beams by 100.",

          "R: [[EMPOWERED]]s other skills. \n \n Q [[EMPOWERED]]: [[SUMMON]]s a bonus turret beyond the normal cap. \n The [[EMPOWERED]] turret is [[CC_IMMUNE]]. \n The [[EMPOWERED]] turret's [[BA]]s apply [[SLOW]] and charge 20 per hit. \n \n W [[EMPOWERED]]: Fires 5 rockets 4 times. \n Up to 400 charges if all connect. \n \n E gets increased range and bounces up to 3 times. \n Each bounce can charge turrets by 100 if conditions are met.",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]] 안됨",
        "Q는 충전 범위, 비활성화 거리는 \n Q포탑 사거리 2배 정도.",
        "딩거 몸 주변에 부품이 회전하는데 \n 회전하는 개수당 Q 사용가능 개수. \n [[EMPOWERED]]Q는 부품을 사용하지 않음.",
        "R은 Q를 [[CDR_RESET]] 시키고 \n W, E는 해당 없음."
      ],
        en: [
          "[[W_FLASH]], [[E_FLASH]] not possible",
          "Q's charge range and deactivation distance \n are roughly twice the turret's attack range.",
          "The number of charges orbiting Heimerdinger \n equals the number of Q turrets available to place. \n [[EMPOWERED]] Q does not consume a charge.",
          "R [[CDR_RESET]]s Q \n but does not affect W or E.",
        ]
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

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Heimerdinger,
  // 스킬 수치 최근 변경 V26.11). W는 DDragon effectBurn이 V26.03 이전 값이라 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_heimerdingerpassive_tooltip)을 사용.
  skillTooltip: {
    P: {
      ko: "하이머딩거가 아군 포탑이나 자신의 포탑 주변에서 20%의 [[MS_UP]]를 얻습니다.",
      en: "Heimerdinger gains 20% [[MS_UP]] near allied turrets or his own turrets.",
    },
    Q: {
      ko: "하이머딩거가 근처 적을 공격하는 포탑을 세웁니다([[SUMMON]]). \n 포탑은 한 번에 3개까지 세울 수 있으며 천천히 충전됩니다. 최대로 충전되면 더 강력한 공격을 가합니다. \n \n 하이머딩거가 너무 멀리 떨어지면 포탑은 8초 후 작동을 멈춥니다. \n \n 이 스킬은 3회까지 [[RECHARGE]]됩니다. \n \n 포탑은 7/11/15/19/23(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를, 충전 공격은 40/60/80/100/120(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 4번째 포탑을 세우면 가장 오래된 포탑이 파괴됩니다. \n \n 20초의 [[RECHARGE]] [[COOLDOWN]].",
      en: "Heimerdinger builds a turret that attacks nearby enemies ([[SUMMON]]). \n He can have up to 3 turrets at once, and they slowly charge up. When fully charged, they fire a more powerful attack. \n \n If Heimerdinger moves too far away, turrets deactivate after 8 seconds. \n \n This skill holds up to 3 [[RECHARGE]] charges. \n \n Turrets deal 7/11/15/19/23 (+35% [[AP_SCALE]]) [[DMG_MAGIC]], and charged attacks deal 40/60/80/100/120 (+55% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Building a 4th turret destroys the oldest one. \n \n 20 second [[RECHARGE]] [[COOLDOWN]].",
    },
    W: {
      ko: "하이머딩거가 5개의 로켓을 발사하여 처음 적중한 적에게 50/75/100/125/150(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 여러 발을 맞게 되면 받는 피해가 감소합니다. \n \n (최대 피해량: 90/135/180/225/270(+103% [[AP_SCALE]])의 [[DMG_MAGIC]]) \n \n 챔피언에게 적중하는 로켓 하나당 근처 포탑이 20% 충전됩니다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Heimerdinger fires 5 rockets, dealing 50/75/100/125/150 (+55% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit. \n Taking multiple rockets deals reduced damage. \n \n (Maximum damage: 90/135/180/225/270 (+103% [[AP_SCALE]]) [[DMG_MAGIC]]) \n \n Each rocket that hits a champion charges nearby turrets by 20%. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    E: {
      ko: "하이머딩거가 수류탄을 던져 일정 지역에 60/100/140/180/220(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 2초 동안 35% [[SLOW]]시킵니다. \n 중앙에 있는 적들은 1.5초 동안 [[STUN]]합니다. \n \n 적 챔피언을 맞히면 근처의 포탑이 최대로 충전됩니다. \n \n 11초의 [[COOLDOWN]].",
      en: "Heimerdinger throws a grenade, dealing 60/100/140/180/220 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] in an area and [[SLOW]]ing by 35% for 2 seconds. \n Enemies in the center are [[STUN]]ned for 1.5 seconds. \n \n Hitting an enemy champion fully charges nearby turrets. \n \n 11 second [[COOLDOWN]].",
    },
    R: {
      ko: "하이머딩거가 다음에 사용하는 궁극기 이외의 스킬을 [[EMPOWERED]]합니다. \n \n H-28Q 최첨단 포탑: 하이머딩거의 최대 포탑 개수에 포함되지 않는 [[EMPOWERED]]된 포탑을 8초 동안 배치해([[SUMMON]]) 기본 사격마다 80/100/120(+35% [[AP_SCALE]])의 [[DMG_MAGIC]], 충전 사격마다 100/140/180(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 포탑 공격은 대상 지역에 피해를 입히며, 2초 동안 25% [[SLOW]]시킵니다. 포탑은 [[CC_IMMUNE]]이 됩니다. \n \n 마법공학 로켓 연사: 로켓이 4회 연속 발사되며 각각 135/180/225(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 챔피언과 정글 몬스터가 추가 로켓으로 받는 피해량이 감소하고 미니언이 추가 로켓으로 받는 피해량은 증가합니다. \n 최대 피해량: 503/697.5/892(+183% [[AP_SCALE]])의 [[DMG_MAGIC]] \n \n CH-3X 전격 수류탄: 세 번 튕기며 전류를 방출하는 반동 수류탄을 던져 100/200/300(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 기절과 둔화 적용 범위가 모두 커집니다. \n \n [[SKILL_RECAST]] 시: 이 스킬을 취소합니다([[RECAST_CANCEL]]). \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Heimerdinger [[EMPOWERED]]s his next non-ultimate skill. \n \n H-28Q Apex Turret: Places ([[SUMMON]]) an [[EMPOWERED]] turret for 8 seconds that doesn't count toward his turret limit, dealing 80/100/120 (+35% [[AP_SCALE]]) [[DMG_MAGIC]] per basic shot and 100/140/180 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] per charged shot. \n Turret attacks damage an area and [[SLOW]] by 25% for 2 seconds. The turret is [[CC_IMMUNE]]. \n \n Hextech Rocket Swarm: Fires 4 consecutive volleys of rockets, each dealing 135/180/225 (+45% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Champions and jungle monsters take reduced damage from additional rockets, while minions take increased damage from them. \n Maximum damage: 503/697.5/892 (+183% [[AP_SCALE]]) [[DMG_MAGIC]] \n \n CH-3X Lightning Grenade: Throws a grenade that bounces three times, releasing electricity and dealing 100/200/300 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Both the stun and slow areas are increased. \n \n [[SKILL_RECAST]]: Cancels this skill ([[RECAST_CANCEL]]). \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default heimerdinger;
