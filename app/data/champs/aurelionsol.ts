import type { ChampData } from "../interactions/types";

const aurelionsol: ChampData = {
  id: "aurelionsol",
  skills: {
    P: ["STACKING"],
    Q: ["LEVEL_SCALE", "RANGE_UP"],
    W: ["MS_UP", "GHOSTING", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    E: ["SLOW", "KINEMATICS", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["R_FLASH", "STUN"] },
      { label: { ko: "천상강림", en: "Falling Star" }, tags: ["R_FLASH", "AIRBORNE", "SEPARATOR", "SLOW"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["STACKING"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DOT", "DMG_MAGIC", "SKILL_CHANNEL", "SKILL_STEERABLE", "BEAM", "MARK", "SEPARATOR_NEWLINE", "SEPARATOR", "AOE", "DMG_MAGIC", "X0.5", "SEPARATOR_NEWLINE", "SEPARATOR", "LEVEL_SCALE", "RANGE_UP",  "SEPARATOR", "ST_CONDITIONAL", "STACKING"] },
      { label: { ko: "Q 폭발", en: "Q Burst" }, tags: ["MARK_CONSUME", "DETONATE", "DMG_MAGIC"] },
    ] },

    W: { phases: [
      { label: { ko: "W 비행 버프", en: "W Flight Buff" }, tags: ["BUFF_FORM", "MS_UP", "GHOSTING", "SEPARATOR", "UNOBSTRUCTED_VISION"] },
      { label: { ko: "W 비행", en: "W Flight" }, tags: ["SKILL_CHANNEL", "TIMING_CAST", "CANCELLABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
      { label: { ko: "W 비행 Q", en: "W Flight Q" }, tags: ["BUFF_FORM", "MS_DOWN"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DOT", "DMG_MAGIC", "TIMING_CAST", "ZONE", "SEPARATOR", "SLOW", "KINEMATICS", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACKING"] },
      { label: { ko: "E 처형", en: "E Execute" }, tags: ["ST_CONDITIONAL", "EXECUTE"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 유성", en: "The Skies Descend" }, tags: ["DMG_MAGIC", "PROJECTILE", "ZONE", "STUN", "SEPARATOR", "STACKING"] },
      { label: { ko: "R 천상강림", en: "Falling Star" }, tags: ["DMG_MAGIC", "PROJECTILE", "ZONE", "AIRBORNE"] },
      { label: { ko: "R 천상강림 충격파", en: "Falling Star Shockwave" }, tags: ["DMG_MAGIC", "AOE", "SLOW"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P의 별가루 [[STACKING]]으로 스킬 [[EMPOWERED]]. \n \n",

          "Q는 [[BEAM]]을 발사. \n 적중 시 [[DMG_MAGIC]], [[MARK]] \n 주변에는 [[AOE]] [[DMG_MAGIC]] 50% 피해. \n 1초당 2의 별가루.", 
          "육각형 [[MARK]]이 다 차면 [[DETONATE]] [[DMG_MAGIC]]. \n \n",

          "W는 지정한 방향으로 비행. \n 스킬을 사용해도 비행 유지. \n Q 사용 시에는 비행 [[MS_DOWN]]. \n Q의 [[COOLDOWN]]과 지속시간이 사라짐.", 
          "[[ON_TAKEDOWN]] 시 [[CDR]] 90%. \n \n",
          
          "E는 [[AOE]] [[KINEMATICS]], [[DMG_MAGIC]]. \n 중앙 블랙홀에 조건부 [[EXECUTE]]. \n 블랙홀에 챔피언이 닿으면 초당 별가루 1개. \n E [[AOE]]에서 미니언, 몬스터가 죽으면 마리당 1개. \n 직접 처치하지 않아도 획득. \n E 종료 시 별가루 한번에 획득. \n \n",

          "R은 [[AOE]] [[DMG_MAGIC]], [[STUN]], 별가루 5개.", 
          "[[EMPOWERED]] R(천상강림)은 커다란 유성 낙하. \n 낙하 시 엄청나게 넓은 [[AOE]] 충격파 동반. \n 중앙부분은 [[DMG_MAGIC]], [[AIRBORNE]]. \n 충격파는 [[DMG_MAGIC]]와 [[SLOW]]. \n 별가루 획득 없음.",

        ],

        en: [
          "Skills are [[EMPOWERED]] by P's Stardust [[STACKING]]. \n \n",

          "Q fires a [[BEAM]]. \n On hit: [[DMG_MAGIC]] and [[MARK]] \n Nearby enemies take 50% [[AOE]] [[DMG_MAGIC]]. \n Grants 2 Stardust per second.",
          "When the hexagonal [[MARK]] fills up, it [[DETONATE]]s for [[DMG_MAGIC]]. \n \n",

          "W flies in a chosen direction. \n Using skills does not cancel the flight. \n Using Q [[MS_DOWN]]s the flight. \n Q's [[COOLDOWN]] and duration limit are removed.",
          "[[ON_TAKEDOWN]] grants 90% [[CDR]] on this skill. \n \n",

          "E deals [[AOE]] [[KINEMATICS]] and [[DMG_MAGIC]]. \n Conditional [[EXECUTE]] in the center black hole. \n Champions touching the black hole grant 1 Stardust per second. \n Minions or monsters dying within E's [[AOE]] grant 1 each. \n No last hit required. \n Stardust is granted all at once when E ends. \n \n",

          "R deals [[AOE]] [[DMG_MAGIC]], applies [[STUN]], and grants 5 Stardust.",
          "[[EMPOWERED]] R (Falling Star) drops a massive star. \n Landing comes with a much wider [[AOE]] shockwave. \n The center deals [[DMG_MAGIC]] and applies [[AIRBORNE]]. \n The shockwave deals [[DMG_MAGIC]] and applies [[SLOW]]. \n Grants no Stardust.",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]] 사거리 밖에 사용하고 점멸 쓰면 발동 됨", 

        "[[STACKING]](별가루)당 \n Q는 데미지. \n W는 비행 거리. \n E는 [[EXECUTE]] 기준. \n R은 [[AOE]] 증가.", 
        "Q의 [[RANGE_UP]]는 [[LEVEL_SCALE]]. \n 19, 20 레벨에도 증가.", 
        "W는 벽 위에서 내리면 벽에서 가까운 땅으로 밀려남.", 
        "E는 블랙홀과 강착원반으로 나뉨. \n 블랙홀은 중앙부분의 구체. \n 강착원반은 주변 테두리. \n 적 챔피언이 블랙홀 부분에 잠깐 스쳐도 별가루 획득."
        ],
        en: [
          "[[R_FLASH]] works by casting R outside its range, then flashing.",
          "Per [[STACKING]] (Stardust): \n Q gains damage. \n W gains flight distance. \n E's [[EXECUTE]] threshold increases. \n R's [[AOE]] increases.",
          "Q's [[RANGE_UP]] is [[LEVEL_SCALE]]. \n It still increases at levels 19 and 20.",
          "Landing W on top of a wall pushes you to the nearest ground.",
          "E is divided into a Black Hole and an Accretion Disk. \n The Black Hole is the sphere at the center. \n The Accretion Disk is the surrounding ring. \n Even briefly grazing the Black Hole as an enemy champion grants Stardust."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

  // skillTooltip 근거: DDragon P/Q/W/E/R 전부 vars가 빈 배열이고 effectBurn도
  // "0"으로 깨져 있어 위키(wiki.leagueoflegends.com/en-us/Aurelion_Sol, V26.17
  // 기준) 정보박스 + 능력치 데이터 템플릿(Template:Data_Aurelion_Sol/*) 기준으로
  // 전량 새로 작성했다(Notes 섹션 제외). 별가루 비례 범위/사거리 증가량은
  // 위키에 제곱근 공식(예: 반경 = √(275² + 16.93²×스타더스트))으로 나와 있는데,
  // 툴팁 문장에 그대로 넣기엔 과밀해서 "스타더스트가 많을수록 커진다" 정도로
  // 단순화하고 처형 기준처럼 선형 비례인 수치만 정확히 반영했다. Q 5랭크의
  // 특수 케이스(사실상 무제한 채널), 몬스터 대상 상한(300) 등은 본문에 포함.
  // R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "아우렐리온 솔의 피해를 주는 스킬이 적(특히 챔피언)에게 적중하면 영구적인 [[STACKING]](별가루)을 얻으며, 스택 상한은 없다. \n \n 별가루가 많을수록 \n Q의 [[TARGET_MAXHP_SCALE]] 비례 피해 \n W의 사거리 \n E의 [[AOE]], [[EXECUTE]] 기준 \n R의 [[AOE]]가 함께 커진다.",
      en: "Aurelion Sol's damaging abilities landing on enemies (especially champions) grant permanent [[STACKING]] (Stardust), with no stack cap. \n \n The more Stardust he has, \n Q's [[TARGET_MAXHP_SCALE]] damage, \n W's range, \n E's [[AOE]] and [[EXECUTE]] threshold, \n and R's [[AOE]] all grow together.",
    },
    Q: {
      ko: "[[LEVEL_SCALE]] [[RANGE_UP]], 최대 3.25초(5개 배웠을 때 사실상 무제한) 동안 화염 숨결([[BEAM]])을 [[SKILL_CHANNEL]]하여, 첫 번째로 맞은 적에게 초당 45/60/75/90/105(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 주변 적에게는 50%를 입힌다. \n \n 같은 대상을 1초 꽉 채워 맞힐 때마다 60/70/80/90/100(+30% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]와 별가루 비례 [[TARGET_MAXHP_SCALE]] [[DMG_MAGIC]]를 폭발적으로 입히며(몬스터 상대로는 300 고정 상한), 챔피언 상대로는 이때 별가루 2개를 추가로 얻는다. \n \n 3초의 [[COOLDOWN]].",
      en: "Channels ([[SKILL_CHANNEL]]) a breath of fire ([[BEAM]]) with [[LEVEL_SCALE]] [[RANGE_UP]] for up to 3.25 seconds (effectively unlimited at rank 5), dealing 45/60/75/90/105 (+55% [[AP_SCALE]]) [[DMG_MAGIC]] per second to the first enemy hit and 50% of that to nearby enemies. \n \n Every full 1 second spent hitting the same target detonates for an additional 60/70/80/90/100 (+30% [[AP_SCALE]]) [[DMG_MAGIC]] plus [[TARGET_MAXHP_SCALE]] [[DMG_MAGIC]] scaling with Stardust (capped at 300 against monsters), and grants 2 additional Stardust against champions. \n \n 3 second [[COOLDOWN]].",
    },
    W: {
      ko: "아우렐리온 솔이 지정 방향으로 [[TERRAIN]]을 넘어 날아간다(사거리는 별가루가 많을수록 증가). \n \n 비행 중에는 Q의 [[COOLDOWN]]과 최대 지속시간 제한이 사라지고 고정 피해량이 8~12%(랭크 비례) 증가하며, 다른 스킬도 자유롭게 사용할 수 있다. \n 최근(3초 이내) [[ON_TAKEDOWN]] 시 이 스킬의 남은 시간 [[CDR]] 90%된다. \n [[SKILL_RECAST]], 우클릭으로 비행을 조기 종료할 수 있다. \n \n 22/20/18/16/14초의 [[COOLDOWN]].",
      en: "Aurelion Sol flies over [[TERRAIN]] in a chosen direction (range increases with more Stardust). \n \n While flying, Q's [[COOLDOWN]] and max duration limit are removed and its flat damage increases by 8~12% (rank-based), and other skills can be freely used. \n A recent (within 3 seconds) [[ON_TAKEDOWN]] grants 90% [[CDR]] on this skill's remaining cooldown. \n [[SKILL_RECAST]] or right-click ends the flight early. \n \n 22/20/18/16/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "아우렐리온 솔이 0.5초 뒤 발동하는 블랙홀([[ZONE]])을 소환해 5초 동안 유지하며, 0.25초마다 범위 내 적에게 2.5/3.75/5/6.25/7.5(+3% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 중심으로 서서히 끌어당긴다. ([[KINEMATICS]]) \n 중심부에서 최대 체력의 5%(+별가루 100당 2.6%) 이하인 적은 즉시 [[EXECUTE]]된다. \n \n [[AOE]] 안에서 적이 죽거나 \n 중심부에 챔피언이 닿아있으면 매초 별가루를 얻는다. \n \n 12초의 [[COOLDOWN]].",
      en: "Aurelion Sol summons a black hole ([[ZONE]]) that activates after 0.5 seconds and lasts 5 seconds, dealing 2.5/3.75/5/6.25/7.5 (+3% [[AP_SCALE]]) [[DMG_MAGIC]] every 0.25 seconds to enemies inside and slowly pulling them toward the center. ([[KINEMATICS]]) \n Enemies at the center below 5% max HP (+2.6% per 100 Stardust) are instantly [[EXECUTE]]d. \n \n Enemies dying within the [[AOE]] \n or champions touching the center grant Stardust every second. \n \n 12 second [[COOLDOWN]].",
    },
    R: {
      ko: "아우렐리온 솔이 1.25초 뒤 지정 위치에 별을 떨어뜨려 150/200/250/300/350(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 [[STUN]]시키며, 맞힌 적 챔피언 1명당 별가루 5개를 얻는다. \n \n 천상강림 \n R을 배우고 별가루를 75개 쌓으면 다음 시전이 [[EMPOWERED]] 된다. \n 2초 뒤 더 넓은 범위에 187.5/250/312.5/375/437.5(+93.75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 [[STUN]] 대신 [[AIRBORNE]]시키며, 곧이어 퍼지는 충격파가 챔피언과 에픽 몬스터에게 135/180/225/270/315(+67.5% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 50%만큼 [[SLOW]]시키며 1.5초간 [[VISION]]을 밝힌다. \n \n 천상강림을 사용하면 일반 유성으로 돌아오고, 다시 별가루를 75개를 쌓아야 천상강림으로 [[EMPOWERED]] 된다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Aurelion Sol drops a star at the target location after 1.25 seconds, dealing 150/200/250/300/350 (+75% [[AP_SCALE]]) [[DMG_MAGIC]] and [[STUN]]ning for 1 second, granting 5 Stardust per enemy champion hit. \n \n Falling Star \n Once R is learned, gathering 75 Stardust [[EMPOWERED]]s the next cast. \n After a 2 second delay, it deals 187.5/250/312.5/375/437.5 (+93.75% [[AP_SCALE]]) [[DMG_MAGIC]] to a much wider area and applies [[AIRBORNE]] for 1 second instead of [[STUN]], followed by a spreading shockwave that deals 135/180/225/270/315 (+67.5% [[AP_SCALE]]) [[DMG_MAGIC]] to champions and epic monsters, [[SLOW]]s them by 50% for 1 second, and grants [[VISION]] for 1.5 seconds. \n \n Using Falling Star reverts to the normal star, requiring another 75 Stardust to [[EMPOWERED]] it again. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default aurelionsol;
