import type { ChampData } from "../interactions/types";

const aphelios: ChampData = {
  id: "aphelios",

  // 폼 5개 = 장착 중인 주무기 기준(base=칼리브럼, alt=세베룸, alt2=그라비툼,
  // alt3=인페르눔, alt4=크레센덤). forms.ts의 CHAMP_FORMS.aphelios 배열 순서와
  // 동일해야 한다(인덱스 0~4 ↔ base~alt4).
  skills: {
    base: {
      // 칼리브럼
      P: ["RANGE_UP"],
      Q: ["MARK", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL"],
      W: ["TRANSFORM"],
      E: [],
      R: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "MARK"],
    },
    alt: {
      // 세베룸
      P: ["LIFESTEAL", "SHIELD"],
      Q: ["MS_UP", "DMG_PHYSICAL", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL"],
      W: ["TRANSFORM"],
      E: [],
      R: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    },
    alt2: {
      // 그라비툼
      P: ["SLOW"],
      Q: ["DMG_MAGIC", "ROOT", "SEPARATOR", "ST_CONDITIONAL"],
      W: ["TRANSFORM"],
      E: [],
      R: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "SLOW", "ROOT"],
    },
    alt3: {
      // 인페르눔
      P: ["AOE", "DMG_PHYSICAL"],
      Q: ["DMG_PHYSICAL", "AOE", "MARK"],
      W: ["TRANSFORM"],
      E: [],
      R: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"],
    },
    alt4: {
      // 크레센덤
      P: ["BUFF_STACK"],
      Q: ["SUMMON", "DMG_PHYSICAL"],
      W: ["TRANSFORM"],
      E: [],
      R: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK"],
    },
  },

  vision: {
    base: { P: [], Q: ["REVEALED"], W: [], E: [], R: ["VISION"] },   // 칼리브럼 MARK는 표식 대상을 드러냄
    alt: { P: [], Q: [], W: [], E: [], R: ["VISION"] },
    alt2: { P: [], Q: [], W: [], E: [], R: ["VISION"] },
    alt3: { P: [], Q: [], W: [], E: [], R: ["VISION"] },
    alt4: { P: [], Q: [], W: [], E: [], R: ["VISION"] },
  },

  gimmick: {
    base: {
      // 칼리브럼
      P: ["RANGE_UP"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SINGLE", "MARK", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "MARK_CONSUME"],
      W: ["TRANSFORM"],
      E: [],
      R: { phases: [
        { label: { ko: "1타 (충돌)", en: "1st Hit (Impact)" }, tags: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "VISION"] },
        { label: { ko: "2타 (평타 세례)", en: "2nd Hit (Barrage)" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ON_HIT", "XN"] },
        { label: { ko: "칼리브럼 추가효과", en: "Calibrum Bonus" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "MARK_CONSUME"] },
      ] },
    },
    alt: {
      // 세베룸
      P: ["NON_PROJECTILE", "SEPARATOR", "LIFESTEAL", "SHIELD"],
      Q: ["BUFF", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "AOE", "ON_HIT", "XN"],
      W: ["TRANSFORM"],
      E: [],
      R: { phases: [
        { label: { ko: "1타 (충돌)", en: "1st Hit (Impact)" }, tags: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "VISION"] },
        { label: { ko: "2타 (평타 세례)", en: "2nd Hit (Barrage)" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ON_HIT", "XN"] },
        { label: { ko: "세베룸 추가효과", en: "Severum Bonus" }, tags: ["ST_CONDITIONAL", "HEAL"] },
      ] },
    },
    alt2: {
      // 그라비툼
      P: ["ON_HIT", "SLOW"],
      Q: ["ST_CONDITIONAL", "TIMING_INSTANT", "DMG_MAGIC", "ST_CONDITIONAL", "ROOT"],
      W: ["TRANSFORM"],
      E: [],
      R: { phases: [
        { label: { ko: "1타 (충돌)", en: "1st Hit (Impact)" }, tags: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "VISION"] },
        { label: { ko: "2타 (평타 세례)", en: "2nd Hit (Barrage)" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ON_HIT", "XN"] },
        { label: { ko: "그라비툼 추가효과", en: "Gravitum Bonus" }, tags: ["ST_CONDITIONAL", "SLOW", "ROOT"] },
      ] },
    },
    alt3: {
      // 인페르눔
      P: ["ON_HIT", "AOE", "DMG_PHYSICAL"],
      Q: { phases: [
        { label: { ko: "1타 (부채꼴)", en: "1st Hit (Cone)" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "MARK"] },
        { label: { ko: "2타 (후속 사격)", en: "2nd Hit (Follow-up)" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "MARK_CONSUME", "XN"] },
      ] },
      W: ["TRANSFORM"],
      E: [],
      R: { phases: [
        { label: { ko: "1타 (충돌)", en: "1st Hit (Impact)" }, tags: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "VISION"] },
        { label: { ko: "2타 (평타 세례)", en: "2nd Hit (Barrage)" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ON_HIT", "XN"] },
        { label: { ko: "인페르눔 추가효과", en: "Infernum Bonus" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE", "XN"] },
      ] },
    },
    alt4: {
      // 크레센덤
      P: ["ON_HIT", "BUFF_STACK", "DMG_PHYSICAL"],
      Q: ["SUMMON", "ST_DELAYED", "DMG_PHYSICAL", "SINGLE", "ON_TARGET_CD"],
      W: ["TRANSFORM"],
      E: [],
      R: { phases: [
        { label: { ko: "1타 (충돌)", en: "1st Hit (Impact)" }, tags: ["PROJECTILE", "DMG_PHYSICAL", "AOE", "VISION"] },
        { label: { ko: "2타 (평타 세례)", en: "2nd Hit (Barrage)" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ON_HIT", "XN"] },
        { label: { ko: "크레센덤 추가효과", en: "Crescendum Bonus" }, tags: ["ST_CONDITIONAL", "CLONE", "BUFF_STACK"] },
      ] },
    },
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
        "무기순서 만절중화반 또는 초빨보파흰", "솔직히 경우의 수가 너무 많은 캐릭터. 정확하게 알기 위해서는 위키 같은 디테일한 사이트를 읽어야 함.", "간단 왜곡설명\n주무기가 있고 보조무기가 있음.\n주무기 효과에 보조무기 효과가 묻어서 발동되는 느낌.\n만월(초록) - [[RANGE_UP]] 증가, 추가 평타.\n절단(빨강) - [[LIFESTEAL]], [[MS_UP]].\n중력(보라) - [[SLOW]], [[ROOT]]\n화염(파랑) - 범위 공격, 데미지 추가\n반월(흰색) - 칼날 스택당 피해 증가. 최대 20스택. 공격 대상과 가까울 수록 [[AS_UP]]", "만월총(초록) - Q, R를 적중시키면 대상에게 표식이 생기고, 사거리 내에서 평타를 한번 더 공격할 수 있음. R의 경우 표식이 여러개 생기지만 하나만 공격 가능하고 나머지 대상은 자동으로 보조무기 공격.\n보조무기가 중력(보라) 일때 W를 눌러 중력포로 바꾸고 Q사용 가능.", "절단검(빨강)은 근접 판정임\nQ[[LIFESTEAL]]이 최대체력이면 [[SHIELD]]로 생김", "화염포(파랑)은 두명의 적이 일직선으로 있다고 가정, 앞의적을 평타로 공격하면 뒤의적이 부채꼴 화염포를 맞을 수 있고, 뒤의 적을 공격하면 투사체가 앞의적을 지나갈때 앞의 챔피언에게도 피해를 줌\n데미지는 메커니즘을 잘 모르겠음 각각 다르게 들어감", "반월검(흰색) Q의 포탑에 [[ALLY_TP_OK]]가능", "R은 범위 피해를 주고 피해를 받은 모든 대상을 주무기로 한번 더 공격함", "아 몰라 안해"
      ],
        en: ["Weapon order: Calibrum→Severum→Gravitum→Infernum→Crescendum (or Moonlit→Crimson→Gravitum→Infernum→Flare)", "Honestly too many cases to cover. For accurate details, refer to the wiki or similar resources.", "Simplified overview:\nThere's a main weapon and an off-hand weapon. The off-hand effect piggybacks onto the main weapon's actions.\nCalibrum (green) — [[RANGE_UP]], bonus auto.\nSeverum (red) — [[LIFESTEAL]], [[MS_UP]].\nGravitum (purple) — [[SLOW]], [[ROOT]].\nInfernum (blue) — area attacks, bonus damage.\nCrescendum (white) — damage increases per blade stack (max 20). The closer to the target, the higher [[AS_UP]].", "Calibrum (green) — Q and R hits mark the target, allowing one bonus auto within range. R can mark multiple targets but only one can be bonus-auto'd; the rest are auto-attacked with the off-hand weapon.\nIf off-hand is Gravitum (purple), press W to swap and use Q.", "Severum (red) is melee range.\nQ [[LIFESTEAL]] generates [[SHIELD]] when at max HP", "Infernum (blue): if two enemies are lined up, aiming at the front one lets the back one get hit by the cone blast; aiming at the back one damages the front one as the projectile passes through.\nDamage mechanics vary per target", "Crescendum (white) Q turret allows [[ALLY_TP_OK]]", "R deals area damage then auto-attacks all hit targets once with the current weapon", "...I give up"]
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

  // skillTooltip 근거: 아펠리오스는 5개 무기(칼리브럼/세베룸/그라비툼/인페르눔/
  // 크레센덤)에 따라 평타·Q가 완전히 달라지는 구조라, DDragon Q/E는 client-side
  // 렌더링 텍스트({{spellmodifierdescriptionappend}})만 있고 실제 무기별 수치가
  // 아예 없다(vars도 전부 빈 배열). 위키(wiki.leagueoflegends.com/en-us/Aphelios,
  // V26.16 기준) 정보박스 + 무기별 데이터 템플릿(Template:Data_Aphelios/*)을
  // 기준으로 전량 새로 작성했다(Notes/트리비아 섹션 제외). 크리티컬 상호작용,
  // 보초 체력/피격 데미지, Weapon Master 레벨업 대체 스탯, Arena 전용 수치처럼
  // 과밀 방지 목적으로 생략한 세부사항이 있다. R 쿨타임은 {{ultCooldown}}으로 참조.
  //
  // 2026-09-14 재검증: 5폼(base~alt4) 구조로 재배치하면서 위키를 다시 fetch해
  // 대조했다. P/Q/W/R의 수치(마크 보너스 AD 15%, Onslaught 20~41% AD, Binding
  // Eclipse 50~140(+32~50% AD)(+70% AP), Duskwave 20~110(+15~21% AD)(+70% AP),
  // Sentry 35~125(+34~52% AD)(+50% AP), R 기본 125/175/225(+20% AD)(+100% AP),
  // R 무기별 후속효과 대부분)는 전부 위키(V26.13 패치 반영 최신값 기준)와 정확히
  // 일치해 그대로 유지했다. 다음 항목은 이번 재조사로 완전히 재확인하지 못해
  // 기존 값을 유지만 하고 별도로 보고함:
  // - P: "무기 조립 시작과 동시에 그 무기의 Q가 1.5초 쿨타임에 들어간다"는
  //   위키 문구를 이번에 새로 발견해 추가함(기존엔 없었음).
  // - 세베룸 힐 세부치(스킬 공격 5~17.75%, 실드 지속 30초/최대체력 6%)와
  //   그라비툼 Q 쿨타임(12~10초)은 이번 재조사에서 독립 확인 못함(오류
  //   발견은 아님, 단지 소스 확인 미완료).
  // - 크레센덤 R 후속효과("최대 5명 적중 시 최대 10개 획득")는 이번 위키
  //   재조사 결과 표현이 다소 다르게 읽혀(첫 대상 6개+나머지 대상 추가 방식)
  //   완전히 같은 값인지 확신 못함 — 채팅 답변에 별도로 보고.
  skillTooltip: {
    P: {
      ko: "아펠리오스는 5개의 무기(칼리브럼-저격소총, 세베룸-낫권총, 그라비툼-대포, 인페르눔-화염방사기, 크레센덤-차크람)를 돌아가며 사용하며, 항상 주무기 하나와 보조무기 하나만 장착한다. 무기를 교체하면 평타와 [[Q]]의 효과가 완전히 [[TRANSFORM]]된다. \n 각 무기는 최대 50의 달빛(탄약)을 가지며 평타와 [[Q]] 시전마다 소모되고, 탄약이 떨어지면 그 무기는 버려지고 다음 순번의 무기가 1초에 걸쳐 조립된다(조립 시작과 동시에 그 무기의 [[Q]]는 1.5초 [[COOLDOWN]]에 들어가며, 조립 중엔 [[W]] 사용 불가). \n \n 시작 시 칼리브럼(주무기)·세베룸(보조무기)·그라비툼/인페르눔/크레센덤(예비) 순서로 장착한다.",
      en: "Aphelios cycles through 5 weapons (Calibrum – sniper rifle, Severum – scythe pistol, Gravitum – cannon, Infernum – flamethrower, Crescendum – chakram), always carrying exactly one main-hand and one off-hand weapon at a time. Switching weapons completely [[TRANSFORM]]s his basic attack and [[Q]]. \n Each weapon holds up to 50 Moonlight (ammo), consumed on every basic attack and [[Q]] cast. Once a weapon runs dry, it's discarded and the next weapon in the reserve order assembles over 1 second (that weapon's [[Q]] enters a 1.5s [[COOLDOWN]] the moment assembly begins, and [[W]] cannot be used while assembling). \n \n At the start of the game, he's equipped with Calibrum (main-hand), Severum (off-hand), then Gravitum/Infernum/Crescendum in reserve.",
    },
    Q: {
      ko: "주무기에 따라 평타와 액티브 스킬이 완전히 달라진다(액티브는 10 달빛 + 60마나 소모). \n \n 칼리브럼(저격소총) — 장착 중 사거리 +100. 스킬 적중 시 대상을 4.5초간 [[MARK]](겸 [[REVEALED]])하며, [[MARK]]된 대상에 가하는 다음 평타는 보조무기로 발사되고 사거리 1800에 [[MARK]] 소모당 15(+15% [[AD_SCALE]])의 추가 [[DMG_PHYSICAL]]를 입힌다. \n 액티브(Moonshot): 직선 [[PROJECTILE]]로 첫 번째 적에게 70~160([[LEVEL_SCALE]])(+42~60% 추가 [[AD_SCALE]])(+100% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입혀 [[MARK]]를 건다. [[COOLDOWN]] 10~8초([[LEVEL_SCALE]]). \n \n 세베룸(낫권총) — 평타는 논타겟 사격 방식이며, 가한 피해의 2~7.1%([[LEVEL_SCALE]])(스킬 공격은 5~17.75%)를 [[HEAL]]하고 초과분은 최대 30초 지속되는 [[SHIELD]](최대 체력의 6% 비례)로 전환된다. \n 액티브(Onslaught): 1.75초간 25%(+주문력 100당 10%)의 [[MS_UP]]를 얻고 가장 가까운 적(챔피언 우선)에게 주무기·보조무기를 번갈아 최대 6회(+공격속도 100%당 2회) 자동 공격(회당 20~41%([[LEVEL_SCALE]]) [[AD_SCALE]] [[DMG_PHYSICAL]], [[ON_HIT]] 효과 25%만 적용). [[COOLDOWN]] 10~8초([[LEVEL_SCALE]]). \n \n 그라비툼(대포) — 평타 적중 시 30%의 [[SLOW]](2.5초, 0.7초 뒤 10%로 감소). \n 액티브(Binding Eclipse): [[SLOW]] 상태(또는 비행 중인 그라비툼 탄환)가 있어야 시전 가능하며, 그라비툼 [[SLOW]]에 걸린 모든 적에게 즉시 50~140([[LEVEL_SCALE]])(+32~50% 추가 [[AD_SCALE]])(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 [[ROOT]]시킨다. [[COOLDOWN]] 12~10초([[LEVEL_SCALE]]). \n \n 인페르눔(화염방사기) — 평타는 명중 시 갈라져 뒤쪽 부채꼴로 4개의 화염구가 추가로 퍼진다(주 대상 110% [[AD_SCALE]], 2차 대상은 그 피해의 75~100%([[LEVEL_SCALE]])). \n 액티브(Duskwave): 부채꼴(40도) 범위에 20~110([[LEVEL_SCALE]])(+15~21% 추가 [[AD_SCALE]])(+70% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 적중한 모든 적을 [[MARK]]한다. 0.25초 뒤 보조무기로 [[MARK]]된 모든 대상에게 100% [[AD_SCALE]]의 [[DMG_PHYSICAL]] 원거리 사격(사거리 제한 없음). [[COOLDOWN]] 9~6초([[LEVEL_SCALE]]). \n \n 크레센덤(차크람) — 평타는 투척 후 되돌아오는 방식이며(회수 전엔 재사용 불가), 보유 [[BUFF_STACK]](차크람) 개수에 비례해 최대 138.5% [[AD_SCALE]]의 추가 [[DMG_PHYSICAL]](최대 20[[BUFF_STACK]], 5초 또는 탄약 소진 시 초기화). \n 액티브(Sentry): 지정 지점에 0.35초 뒤 활성화되는 보초를 설치한다(최대 20초 지속, 적이 근처에 오면 지속시간이 4초로 줄고 파괴 가능해짐). 보초는 보조무기로 가장 가까운 적을 자동 공격해 35~125([[LEVEL_SCALE]])(+34~52% 추가 [[AD_SCALE]])(+50% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힌다. [[COOLDOWN]] 9~6초([[LEVEL_SCALE]]).",
      en: "Basic attacks and the active ability change completely depending on the equipped main weapon (the active costs 10 Moonlight + 60 mana). \n \n Calibrum (sniper rifle) — +100 attack range while equipped. Hitting a target with a skill [[MARK]]s it for 4.5 seconds (also [[REVEALED]]); the next basic attack against a [[MARK]]ed target fires with the off-hand weapon instead, gains 1800 range, and deals bonus [[DMG_PHYSICAL]] of 15 (+15% [[AD_SCALE]]) per [[MARK]] consumed. \n Active (Moonshot): fires a straight-line [[PROJECTILE]] dealing 70-160 ([[LEVEL_SCALE]]) (+42-60% bonus [[AD_SCALE]]) (+100% [[AP_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit and [[MARK]]s it. [[COOLDOWN]] 10-8s ([[LEVEL_SCALE]]). \n \n Severum (scythe pistol) — basic attacks are non-targeted hitscan shots, healing for 2-7.1% ([[LEVEL_SCALE]]) of damage dealt (5-17.75% from skill damage) with any overheal converting into a [[SHIELD]] (6% of max HP) lasting up to 30 seconds. \n Active (Onslaught): gains 25% [[MS_UP]] (+10% per 100 AP) for 1.75s and auto-attacks the nearest enemy (champions prioritized) up to 6 times (+2 per 100% attack speed), alternating main/off-hand, each hit dealing 20-41% ([[LEVEL_SCALE]]) [[AD_SCALE]] [[DMG_PHYSICAL]] (only 25% [[ON_HIT]] effectiveness). [[COOLDOWN]] 10-8s ([[LEVEL_SCALE]]). \n \n Gravitum (cannon) — basic attacks apply a 30% [[SLOW]] on hit (2.5s, decaying to 10% after 0.7s). \n Active (Binding Eclipse): can only be cast while a [[SLOW]] is active (or a Gravitum bolt is in flight); instantly deals 50-140 ([[LEVEL_SCALE]]) (+32-50% bonus [[AD_SCALE]]) (+70% [[AP_SCALE]]) [[DMG_MAGIC]] to every enemy affected by Gravitum's [[SLOW]] and [[ROOT]]s them for 1 second. [[COOLDOWN]] 12-10s ([[LEVEL_SCALE]]). \n \n Infernum (flamethrower) — basic attacks split on hit into a rear cone of 4 additional fire bolts (110% [[AD_SCALE]] to the primary target, secondary targets take 75-100% ([[LEVEL_SCALE]]) of that damage). \n Active (Duskwave): deals 20-110 ([[LEVEL_SCALE]]) (+15-21% bonus [[AD_SCALE]]) (+70% [[AP_SCALE]]) [[DMG_PHYSICAL]] in a 40-degree cone and [[MARK]]s every enemy hit. 0.25s later, fires an unlimited-range shot with the off-hand weapon at every [[MARK]]ed target for 100% [[AD_SCALE]] [[DMG_PHYSICAL]]. [[COOLDOWN]] 9-6s ([[LEVEL_SCALE]]). \n \n Crescendum (chakram) — basic attacks are thrown and return to Aphelios (cannot attack again until it returns), dealing bonus [[DMG_PHYSICAL]] of up to 138.5% [[AD_SCALE]] scaling with held [[BUFF_STACK]]s (chakrams, max 20, reset after 5s or when the weapon runs out of ammo). \n Active (Sentry): deploys a sentry at the target location that arms after 0.35s (lasts up to 20s, but drops to 4s and becomes destructible once an enemy comes near). The sentry auto-attacks the nearest enemy with the off-hand weapon for 35-125 ([[LEVEL_SCALE]]) (+34-52% bonus [[AD_SCALE]]) (+50% [[AP_SCALE]]) [[DMG_PHYSICAL]]. [[COOLDOWN]] 9-6s ([[LEVEL_SCALE]]).",
    },
    W: {
      ko: "주무기와 보조무기를 서로 맞바꾼다(0.25초에 걸쳐 전환). \n \n [[COOLDOWN]] 감소의 영향을 받지 않는 고정 0.8초.",
      en: "Swaps the main-hand and off-hand weapons (takes 0.25s to complete). \n \n Fixed 0.8s [[COOLDOWN]], unaffected by cooldown reduction.",
    },
    E: {
      ko: "실제 스킬이 아니라, 알루네가 다음으로 준비할 무기를 미리 보여주는 표시 칸이다. \n 무기 순서는 처음엔 고정돼 있지만, 무기의 탄약이 떨어질 때마다 그 무기가 순번 맨 뒤로 밀려나면서 게임 중 계속 바뀐다.",
      en: "Not an actual ability — just an indicator showing which weapon Alune will assemble next. \n The initial weapon order is fixed, but each time a weapon runs out of ammo it gets pushed to the back of the queue, so the order keeps changing throughout the game.",
    },
    R: {
      ko: "아펠리오스가 지정 방향으로 달빛을 발사해 경로를 잠깐 [[VISION]]으로 밝히며, 적 챔피언에게 닿으면 폭발해 주변 적 챔피언에게 125/175/225([[LEVEL_SCALE]])(+20% 추가 [[AD_SCALE]])(+100% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 2초간 해당 범위에 [[VISION]]을 밝히며 적중한 대상 모두를 조준 고정한다. \n 0.3초 뒤 하늘에서 조준 고정된 모든 대상에게 주무기 기준 100% [[AD_SCALE]]의 [[DMG_PHYSICAL]] 공격을 퍼붓는다([[ON_HIT]] 효과 적용, 사거리 제한 없음). \n \n 주무기별 추가 효과: \n 칼리브럼 — [[MARK]] 소모당 50/80/110([[LEVEL_SCALE]])의 추가 [[DMG_PHYSICAL]]. \n 세베룸 — 적 챔피언 1명 이상 적중 시 250/350/450([[LEVEL_SCALE]]) [[HEAL]]. \n 그라비툼 — 초기 [[SLOW]]가 99%로 강화되고, 이 [[SLOW]]에 걸린 대상은 Binding Eclipse로 1.35초간 [[ROOT]]됨. \n 인페르눔 — 최초 폭발이 50/100/150([[LEVEL_SCALE]])(+25% 추가 [[AD_SCALE]])의 추가 [[DMG_PHYSICAL]]를 입히고 주변에 화염 폭발을 흩뿌림. \n 크레센덤 — 적중한 대상마다 추가 차크람을 생성해 최대 5명 적중 시 최대 10개의 [[BUFF_STACK]](차크람) 획득. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Aphelios fires a bolt of moonlight in the target direction, briefly lighting its path with [[VISION]]; on hitting an enemy champion it explodes, dealing 125/175/225 ([[LEVEL_SCALE]]) (+20% bonus [[AD_SCALE]]) (+100% [[AP_SCALE]]) [[DMG_PHYSICAL]] to nearby enemy champions, lighting the area with [[VISION]] for 2 seconds, and locking onto every target hit. \n 0.3s later, unleashes a volley from the sky at every locked-on target for 100% [[AD_SCALE]] [[DMG_PHYSICAL]] based on the main weapon (applies [[ON_HIT]] effects, no range limit). \n \n Bonus effect by main weapon: \n Calibrum — bonus [[DMG_PHYSICAL]] of 50/80/110 ([[LEVEL_SCALE]]) per [[MARK]] consumed. \n Severum — [[HEAL]]s for 250/350/450 ([[LEVEL_SCALE]]) if at least one enemy champion is hit. \n Gravitum — the initial [[SLOW]] is enhanced to 99%, and targets affected by it are [[ROOT]]ed for 1.35s by Binding Eclipse. \n Infernum — the initial blast deals bonus [[DMG_PHYSICAL]] of 50/100/150 ([[LEVEL_SCALE]]) (+25% bonus [[AD_SCALE]]) and scatters fiery explosions nearby. \n Crescendum — generates an extra chakram per target hit, gaining up to 10 [[BUFF_STACK]]s (chakrams) when hitting up to 5 targets. \n \n {{ultCooldown}}s [[COOLDOWN]].",
    },
  },

};

export default aphelios;
