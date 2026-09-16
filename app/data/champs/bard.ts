import type { ChampData } from "../interactions/types";

const bard: ChampData = {
  id: "bard",
  skills: {
    P: ["DROP", "MS_UP", "SEPARATOR", "COOLDOWN", "SLOW"],
    Q: ["Q_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["DROP", "MS_UP", "HEAL"],
    E: ["E_FLASH", "SEPARATOR", "DASH", "WALL_HOP"],
    R: ["R_FLASH", "SEPARATOR", "STASIS"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 고대의 종", en: "P Ancient Chime" }, tags: ["DROP", "STACKING"] },
      { label: { ko: "P 정령", en: "P Spirit"  }, tags: ["COOLDOWN", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "STACK_CONSUME", "DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "P 정령 강화", en: "P Spirit Empowered" }, tags: ["ST_CONDITIONAL", "SLOW", "RECHARGE", "EMPOWERED", "AOE", "CDR"] },
    ] },

    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE_ONCE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    W: ["DROP", "RECHARGE", "SEPARATOR", "MS_UP", "HEAL"],

    E: ["DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],

    R: ["TIMING_CAST", "ZONE", "STASIS", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 두가지로 나뉨 \n 고대의 종, 정령", 
          "고대의 종은 맵에 주기적으로 [[DROP]] 생성. \n 모을수록 여러가지 효과 추가. ([[STACKING]]) \n 획득하면 [[MANA_RESTORE]], 경험치, [[OUT_OF_COMBAT]] [[MS_UP]]. \n [[MS_UP]] 끝나기 전에 또 획득하면 \n 효과가 증가하고 [[DURATION_RESET]].", 
          "정령은 [[COOLDOWN]]이 지나면 [[BUFF_STACK]] 획득. \n 종에 비례하여 최대 정령 보유 수 증가. \n 5개 이상일 때 [[SLOW]] 효과 추가. \n 15개 이상일 때 [[AOE]] 피해 추가. \n \n",

          "Q는 [[PIERCE_ONCE]] [[PROJECTILE]]를 발사. \n 첫 대상은 [[DMG_MAGIC]], [[SLOW]]. \n [[PIERCE]] 하여 다른 적이나 벽에 충돌하거나 하면 [[STUN]] 추가. \n 적이라면 동일한 효과 적용.\n \n",

          "W는 바닥에 [[DROP]] 설치. \n 밟으면 [[MS_UP]], [[HEAL]]. \n 설치하고 5초동안 효과 점차 증가. \n 상대팀이 밟으면 파괴. \n \n",

          "E는 벽에 일방향 통로 생성. \n 아군, 적군 챔피언이 우클릭으로 이동 가능. \n 아군이라면 33% [[MS_UP]]. \n \n",

          "R은 광역 [[STASIS]](존야). \n 잘쓰면 케리아 못쓰면 개트롤."
        ],

        en: [
          "P is split into two parts \n Ancient Chime and Spirit",

          "Ancient Chime periodically spawns a [[DROP]] on the map. \n Collecting more adds various effects. ([[STACKING]]) \n Picking one up grants [[MANA_RESTORE]], XP, and [[OUT_OF_COMBAT]] [[MS_UP]]. \n Picking up another before the [[MS_UP]] ends \n increases the effect and [[DURATION_RESET]]s it.",
          "Spirit grants a [[BUFF_STACK]] once its [[COOLDOWN]] passes. \n Max Spirit count increases with Chime count. \n At 5 or more, adds a [[SLOW]] effect. \n At 15 or more, adds [[AOE]] damage. \n \n",

          "Q fires a [[PIERCE_ONCE]] [[PROJECTILE]]. \n The first target takes [[DMG_MAGIC]] and [[SLOW]]. \n [[PIERCE]]ing through to hit another enemy or a wall adds [[STUN]]. \n If it's an enemy, the same effects apply to them too. \n \n",

          "W places a [[DROP]] on the ground. \n Stepping on it grants [[MS_UP]] and [[HEAL]]. \n Its effect gradually increases for 5 seconds after being placed. \n The enemy team destroys it by stepping on it. \n \n",

          "E creates a one-way tunnel through a wall. \n Both ally and enemy champions can move through it with a right-click. \n Allies get 33% [[MS_UP]] while doing so. \n \n",

          "R is an [[AOE]] [[STASIS]] (Zhonya's). \n Used well, it's a Keria-tier carry play; used poorly, it's a total troll.",
        ]

      },

      note2: {
        ko: [
        "고대의 종은 영구적인 [[STACKING]]", 
        "고대의 종 효과표 \n 링크 이동해서 펼치기 눌러야함. https://namu.wiki/w/바드(리그%20오브%20레전드)#s-5.1", 
        "E는 게임 시작하고 15초간 사용할 수 없음.", 
        "E(터널)로 이동하는 도중에 공격도 당할 수 있고 \n [[AIRBORNE]], [[KNOCKDOWN]] 효과에 맞으면 벽에서 튀어나옴. \n 다른 CC들은 효과가 유효하지만 이동 유지.", 
        "관측한 가장 긴 터널은 블루팀 바텀 2차 3차 포탑거리 정도. \n 더 긴 터널 본적 있으면 제보 부탁.", 
        "R(존야)의 [[STASIS]]은 적에게 [[STUN]]도 같이 적용.", 
        "R의 [[STASIS]]으로 멈출수 없는 종류. \n [[SPELL_SHIELD]] 예) 녹턴 W, 시비르 E, \n [[CC_IMMUNE]] 예) 모르가나 E(블랙쉴드), \n 아이템 쉴드류 예) 밤의 끝자락(밤끝), 밴시의 장막 \n [[UNSTOPPABLE]] 예) 말파이트 R"
      ],
        en: [
          "Ancient Chimes grant permanent [[STACKING]]",
          "Chime bonus effects table https://wiki.leagueoflegends.com/en-us/Bard \n Follow the link, then scroll down to the Notes section under Traveler's Call.",
          "E cannot be used for the first 15 seconds of the game.",
          "You can still be attacked while traveling through E's tunnel, \n and getting hit by [[AIRBORNE]] or [[KNOCKDOWN]] ejects you from the wall. \n Other CC effects still apply, but you keep moving through the tunnel.",
          "The longest tunnel observed spans roughly the distance between Blue side bot lane's tier-2 and tier-3 turrets. \n Let us know if you've seen a longer one.",
          "R's (Zhonya's) [[STASIS]] also applies [[STUN]] to enemies.",
          "Things R's [[STASIS]] cannot stop: \n [[SPELL_SHIELD]] e.g. Nocturne W, Sivir E, \n [[CC_IMMUNE]] e.g. Morgana E (Black Shield), \n item shields e.g. Edge of Night, Banshee's Veil, \n [[UNSTOPPABLE]] e.g. Malphite R",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

  // skillTooltip 근거: DDragon P/Q/W/E/R 전부 vars가 빈 배열이라 위키
  // (wiki.leagueoflegends.com/en-us/Bard, V26.18 기준) 정보박스로 채웠다
  // (Notes 섹션 제외). P의 차임(Chime) 누적표는 5/100개까지 20단계에 달해
  // 과밀 방지를 위해 핵심 임계값(5개/15개)만 반영하고 전체 표는 생략했다.
  // R은 위키 fetch가 잘려서 데이터 템플릿 페이지(Template:Data_Bard/
  // Tempered_Fate)로 스턴/경직 지속시간(2.5초 고정)을 재확인했다.
  // R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "맵 곳곳에 무작위로 오래된 종([[DROP]])이 나타나며, 처음 습득하면 최대 마나의 12% [[MANA_RESTORE]], 경험치, [[OUT_OF_COMBAT]] [[MS_UP]](처음 24%, 이후 1개당 +14%p, 최대 150%)을 얻는다. \n (최대 10중첩([[BUFF_STACK]]), 20초 지속, [[DURATION_RESET]]) \n \n 바드에게 주기적으로 정령([[BUFF_STACK]])이 나타나며(종 개수에 비례하여 최대 1~9개), 평타 공격 시 [[STACK_CONSUME]]되어 30(종 5개당 +6)(+40% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 [[ON_HIT]]으로 입힌다. \n \n 종을 5개 모을 때마다 정령이 강화된다. \n 5개부터는 명중 시 [[SLOW]](처음 25%, 종이 늘수록 강화), \n 15개부터는 주변까지 [[DMG_MAGIC]]가 튀는 범위 효과가 추가된다.",
      en: "Old chimes ([[DROP]]) randomly appear across the map; the first one picked up grants 12% of max mana ([[MANA_RESTORE]]), XP, and [[OUT_OF_COMBAT]] [[MS_UP]] (24% initially, +14%p per additional chime, capped at 150%). \n (Max 10 stacks ([[BUFF_STACK]]), lasts 20 seconds, [[DURATION_RESET]]s) \n \n Bard periodically gains a Spirit ([[BUFF_STACK]]) (max 1~9, scaling with chime count); landing a basic attack [[STACK_CONSUME]]s one for 30 (+6 per 5 chimes) (+40% [[AP_SCALE]]) bonus [[DMG_MAGIC]] as [[ON_HIT]]. \n \n Every 5 chimes collected empowers the Spirit further. \n From 5, hits also apply [[SLOW]] (25% initially, stronger with more chimes), \n and from 15, adds a splash effect where [[DMG_MAGIC]] also hits nearby enemies.",
    },
    Q: {
      ko: "바드가 에너지 [[PROJECTILE]]를 발사해 처음 맞은 적에게 80/120/160/200/240(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 60%만큼 [[SLOW]]시킨다(1~1.8초, 스킬 레벨 비례). \n \n [[PROJECTILE]]가 벽이나 두 번째 적과 부딪히면 맞은 모든 대상을 [[STUN]]시키고, 두 번째 대상에게도 동일한 [[DMG_MAGIC]]를 입힌다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Bard fires an energy [[PROJECTILE]], dealing 80/120/160/200/240 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit and [[SLOW]]ing them by 60% (1~1.8 seconds, scaling with skill level). \n \n If the [[PROJECTILE]] hits a wall or a second enemy, it [[STUN]]s everyone hit, and deals the same [[DMG_MAGIC]] to the second target as well. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "바드가 지정 위치에 신단([[DROP]])을 설치한다. (5초에 걸쳐 [[EMPOWERED]]). 아군(자신 포함)이 처음 밟으면 그 시점의 [[EMPOWERED]]에 따라 25/50/75/100/125(+40% [[AP_SCALE]]) ~ 50/87.5/125/162.5/200(+70% [[AP_SCALE]])의 [[HEAL]]과, 1.5초에 걸쳐 감소하는 20/22.5/25/27.5/30%(+[[AP_SCALE]] 100당 6%)의 [[MS_UP]]를 얻는다(중첩 가능). \n \n 적이 밟으면 파괴된다. \n 최대 3개까지 배치 가능하며, 최대 2개까지 [[RECHARGE]]된다. \n \n 충전당 18초의 [[COOLDOWN]].",
      en: "Bard places a shrine ([[DROP]]) at the target location. (Becomes [[EMPOWERED]] over 5 seconds). The first ally (including himself) to step on it gains, based on its [[EMPOWERED]] level at that moment, 25/50/75/100/125 (+40% [[AP_SCALE]]) ~ 50/87.5/125/162.5/200 (+70% [[AP_SCALE]]) [[HEAL]] and 20/22.5/25/27.5/30% (+6% per 100 [[AP_SCALE]]) [[MS_UP]] that decays over 1.5 seconds (can stack). \n \n Destroyed if an enemy steps on it. \n Up to 3 can be placed at once, [[RECHARGE]]ing up to 2 charges. \n \n 18 second [[COOLDOWN]] per charge.",
    },
    E: {
      ko: "바드가 지정 방향의 지형([[TERRAIN]])에 10초간 유지되는 일방통행 통로(관문)를 연다. 챔피언(아군, 적군)은 입구 근처에서 관문을 선택해 통과할 수 있으며, 통과하는 동안 [[REVEALED]] 상태가 되고 아군은 33% [[MS_UP]] 효과로 이동한다. \n \n 사거리 내에 유효한 지형이 있어야 시전할 수 있으며 \n [[IMMOBILIZING]], [[GROUNDED]] 상태에서는 시전할 수 있지만, \n 관문을 이용할 수 없다. \n \n 22/20.5/19/17.5/16초의 [[COOLDOWN]].",
      en: "Bard opens a one-way passage through [[TERRAIN]] in the chosen direction, lasting 10 seconds. Champions (allied or enemy) can choose the passage near its entrance to cross through it, becoming [[REVEALED]] while crossing, with allies moving at 33% [[MS_UP]]. \n \n Valid terrain must exist within range to cast this, \n and while [[IMMOBILIZING]] or [[GROUNDED]], it can still be cast, \n but the passage cannot be used. \n \n 22/20.5/19/17.5/16 second [[COOLDOWN]].",
    },
    R: {
      ko: "바드가 지정 위치로 정령의 기운을 날려(이동 경로에 [[VISION]] 부여) 착탄 지점 반경 350 내의 모든 대상을 2.5초간 [[STASIS]] 상태로 만들고, 적 챔피언·미니언·포탑은 같은 시간 동안 [[STUN]]시키며 [[REVEALED]] 상태로 만든다. \n \n (에픽 몬스터·포탑은 CC 면역이지만 이 스킬은 예외적으로 적용됨) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Bard sends out spirit energy toward the target location (granting [[VISION]] along its path), putting all targets within a 350 radius of the impact point into [[STASIS]] for 2.5 seconds, and [[STUN]]ning enemy champions, minions, and turrets for the same duration while making them [[REVEALED]]. \n \n (Epic monsters and turrets are normally CC-immune, but this skill is an exception) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default bard;
