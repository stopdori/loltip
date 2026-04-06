// 기믹 전용 태그 시스템
// 나중에 GimmickTagId에 태그를 추가하면 TAG_TONE(tagTone.ts)에도 색상을 등록해줘

export type GimmickTagId =


  | "STACKING"
  | "PASSIVE_BONUS"
  | "PASSIVE_INTERACT"
  | "BUFF_INTERACT"
  | "DEBUFF_INTERACT"
  | "MARK_INTERACT"
  | "MARK_CONSUME"
  // 스킬 키
  | "BA"
  | "P"
  | "Q"
  | "W"
  | "E"
  | "R"
  // 피해 종류
  | "DMG_PHYSICAL"
  | "DMG_MAGIC"
  | "DMG_TRUE"
  | "DOT_DMG_TRUE"
  // 스킬 형태
  | "SKILL_ACTIVE"
  | "SKILL_TOGGLE"
  | "SKILL_CHANNEL"
  | "SKILL_CHARGED"
  | "SKILL_VECTOR"
  | "SKILL_STEERABLE"
  // 타이밍
  | "TIMING_INSTANT"
  | "TIMING_CAST"
  | "TIMING_AFTERCAST"
  // 판정 방식
  | "TARGETED"
  | "NON_TARGETED"
  | "TARGET_ALLY"
  | "TARGET_ENEMY"
  | "TARGET_BOTH"
  | "PROJECTILE"
  | "NON_PROJECTILE"
  | "TRAP"
  // 피해 범위
  | "GLOBAL"
  | "SUMMON"
  | "DROP"
  | "X2"
  | "X3"
  | "X4"
  | "X5"
  | "XN"
  | "CLONE"
  | "HOMING"
  | "SWARM"
  | "VOLLEY"
  | "VOLLEY_OVERLAP"
  | "CHAIN"
  
  | "SINGLE"
  | "ON_HIT"
  | "PIERCE"
  | "PIERCE_MINION"
  | "PIERCE_ONCE"

  | "ZONE"
  | "AOE"
  | "AURA"
  | "DOT"
  // 시전 행동
  | "CAST_COMMIT"
  | "CAST_CANCEL"
  | "CAST_MOVE"
  | "CAST_IMMOBILE"
  | "CC_BUFFER"
  // 이동
  | "MOBILITY"
  | "DASH"
  | "BLINK"
  // 중단 여부
  | "CANCELLABLE"
  | "LOCKED"
  // 기타
  | "BUFF"
  | "DEBUFF"
  | "COOLDOWN"
  | "EMPOWERED"
  | "RANGE_UP"
  | "RECHARGE"
  | "MARK"
  | "PROC"

  | "BUFF_STACK"
  | "DEBUFF_STACK"
  | "STACK_CONSUME"
  // 스킬 타이밍
  | "SKILL_RECAST"
  | "ST_IMPACT"
  | "ST_DELAYED"
  | "ST_CONDITIONAL"

  | "SEPARATOR"
  | "SEPARATOR_NEWLINE"

  ;

export const GIMMICK_TAG_LABEL: Record<GimmickTagId, { ko: string; en: string }> = {
  // 스킬 형태
  SKILL_ACTIVE:      { ko: "액티브",   en: "Active"     },
  SKILL_TOGGLE:      { ko: "토글",     en: "Toggle"     },
  SKILL_CHANNEL:     { ko: "채널링",   en: "Channel"    },
  SKILL_CHARGED:     { ko: "차징",     en: "Charged"    },
  SKILL_VECTOR:      { ko: "벡터",     en: "Vector"     },
  SKILL_STEERABLE:   { ko: "조종가능", en: "Steerable" },
  BUFF:          { ko: "버프",    en: "Buff"      },
  DEBUFF:        { ko: "디버프",  en: "Debuff"    },
  COOLDOWN:      { ko: "쿨타임",  en: "Cooldown"  },
  EMPOWERED:     { ko: "강화",    en: "Empowered" },
  RANGE_UP:      { ko: "사거리↑", en: "Range↑" },
  SKILL_RECAST:  { ko: "재시전",  en: "Recast"  },
  RECHARGE:      { ko: "충전식",  en: "Recharge" },
  STACKING:      { ko: "스태킹",  en: "Stacking" },
  PROC:          { ko: "스택발동", en: "Proc" },
  BUFF_STACK:    { ko: "버프스택",   en: "Buff Stack"   },
  DEBUFF_STACK:  { ko: "디버프 스택", en: "Debuff Stack" },
  STACK_CONSUME: { ko: "스택소모",   en: "Stack Consume" },

  // 타이밍
  TIMING_INSTANT:   { ko: "즉발",     en: "Instant"    },
  TIMING_CAST:      { ko: "선딜",     en: "Cast-time"       },
  TIMING_AFTERCAST: { ko: "후딜",     en: "After-cast" },
  ST_IMPACT:      { ko: "즉시발동", en: "Impact" },
  ST_DELAYED:     { ko: "지연발동", en: "Delayed" },
  ST_CONDITIONAL: { ko: "조건발동", en: "Conditional" },
  // 중단 여부
  CANCELLABLE: { ko: "취소가능", en: "Cancellable" },
  LOCKED:      { ko: "취소불가", en: "Locked"      },
  // 판정 방식
  TARGETED:       { ko: "타겟팅",   en: "Targeted"       },
  NON_TARGETED:   { ko: "논타겟",   en: "Skill Shot"     },
  TARGET_ALLY:    { ko: "아군 대상", en: "Ally Target"   },
  TARGET_ENEMY:   { ko: "적군 대상", en: "Enemy Target"  },
  TARGET_BOTH:    { ko: "아/적 대상", en: "Both Target"  },
  PROJECTILE:     { ko: "투사체",   en: "Projectile"     },
  NON_PROJECTILE: { ko: "비투사체",  en: "Non-projectile" },
  ZONE:           { ko: "장판",      en: "Zone"           },
  TRAP:           { ko: "트랩",      en: "Trap"           },
  // 속성
  CHAIN:            { ko: "연쇄",      en: "Chain"            },
  PASSIVE_BONUS:    { ko: "패시브",   en: "Passive Bonus"    },
  PASSIVE_INTERACT: { ko: "패시브 연동", en: "Passive Interact" },
  BUFF_INTERACT:    { ko: "버프연동",   en: "Buff Interact"   },
  DEBUFF_INTERACT:  { ko: "디버프 연동", en: "Debuff Interact" },
  MARK_INTERACT:    { ko: "표식연동",   en: "Mark Interact"  },
  MARK_CONSUME:     { ko: "표식소모",   en: "Mark Consume"   },
  // 스킬 키
  P: { ko: "P", en: "P" },
  Q: { ko: "Q", en: "Q" },
  W: { ko: "W", en: "W" },
  E: { ko: "E", en: "E" },
  R: { ko: "R", en: "R" },
  BA: { ko: "평타", en: "Basic Attack" },
  MARK:          { ko: "표식",     en: "Mark"          },
  HOMING:        { ko: "호밍",     en: "Homing"        },
  // 피해 범위
  SINGLE:  { ko: "단일",   en: "Single Target"   },
  PIERCE:        { ko: "관통",      en: "Pierce"        },
  PIERCE_MINION: { ko: "미니언 관통", en: "Minion Pierce" },
  PIERCE_ONCE:   { ko: "1회 관통",   en: "Pierce Once"  },
  AOE:     { ko: "범위",   en: "Area of Effect"  },
  AURA:    { ko: "오라",   en: "Aura"            },
  GLOBAL:  { ko: "전체맵", en: "Global"          },
  SUMMON:  { ko: "소환",     en: "Summon"  },
  DROP:          { ko: "드랍스",    en: "Drops"    },
  X2:            { ko: "x2",       en: "x2"      },
  X3:            { ko: "x3",       en: "x3"      },
  X4:            { ko: "x4",       en: "x4"      },
  X5:            { ko: "x5",       en: "x5"      },
  XN:            { ko: "xN",       en: "xN"      },
  CLONE:   { ko: "분신",     en: "Clone"   },
  SWARM:   { ko: "분산",     en: "Swarm"   },
  VOLLEY:         { ko: "일제사격", en: "Volley"         },
  VOLLEY_OVERLAP: { ko: "중첩사격", en: "Overlap Volley" },
  // 피해 종류
  DMG_PHYSICAL: { ko: "물리피해", en: "Physical Damage" },
  DMG_MAGIC:    { ko: "마법피해", en: "Magic Damage"    },
  DMG_TRUE:     { ko: "고정피해", en: "True Damage"     },
  DOT_DMG_TRUE: { ko: "지속고피", en: "True DoT" },
  DOT:          { ko: "지속피해", en: "DoT"             },
  ON_HIT:       { ko: "온힛",    en: "On-Hit"          },
  // 시전 행동
  CAST_COMMIT:   { ko: "시전강행",  en: "Cast Commit"  },
  CAST_CANCEL:   { ko: "시전취소",  en: "Cast Cancel"  },
  CAST_MOVE:     { ko: "이동가능", en: "Can Move"      },
  CAST_IMMOBILE: { ko: "이동불가", en: "Immobile"      },
  CC_BUFFER:    { ko: "CC버퍼", en: "CC Buffer"   },
  // 이동
  MOBILITY: { ko: "이동기",    en: "Mobility" },
  DASH:     { ko: "돌진",     en: "Dash"     },
  BLINK:    { ko: "순간이동", en: "Blink"    },
  SEPARATOR: { ko: "/", en: "/" },
  SEPARATOR_NEWLINE: { ko: "↵", en: "↵" },
};

export const GIMMICK_TAG_DESC: Partial<Record<GimmickTagId, { ko: string; en: string }>> = {
  SKILL_ACTIVE:      { ko: "버튼 한 번으로 발동되는 스킬", en: "Ability that activates immediately on a single press" },
  SKILL_STEERABLE:   { ko: "시전 중 마우스 방향으로 조종할 수 있음", en: "Can be steered toward the mouse cursor during cast" },
  SKILL_CHANNEL:    { ko: "버튼 한 번으로 발동하고 시전을 유지하는 스킬\nCC에 맞으면 중단.", en: "Activates on a single press and maintains its effect over time.\nInterrupted by CC."},
  SKILL_TOGGLE:     { ko: "버튼을 눌러 켜고 끄는 방식\nCC에 걸리면 끌 수 없음", en: "Ability toggled on and off\nCannot be deactivated while CC'd" },
  SKILL_CHARGED:    { ko: "누르고 있어야 효과가 증가하거나 발동하는 스킬", en: "Charges up while held\nCaster can move while charging" },
  SKILL_VECTOR:     { ko: "시전 위치와 방향을 드래그로 지정하는 스킬.", en: "A skill where the cast location and direction are specified by dragging." },
  BUFF:             { ko: "자신 또는 아군에게 유리한 효과", en: "A beneficial effect applied to self or allies" },
  DEBUFF:           { ko: "적에게 불리한 효과", en: "A negative effect applied to enemies" },
  COOLDOWN:         { ko: "스킬의 재사용 대기시간과 관련된 효과", en: "An effect related to the ability's cooldown" },
  EMPOWERED:        { ko: "조건 충족 시 스킬 또는 공격이 강화됨", en: "Ability or attack becomes empowered when a condition is met" },
  RANGE_UP:         { ko: "스킬 또는 공격의 사거리가 증가함", en: "Increases attack range" },
  SKILL_RECAST:     { ko: "쿨타임이 돌기 전에 스킬을 다시 사용할 수 있음", en: "The ability can be used again before its cooldown begins" },
  RECHARGE:         { ko: "스킬을 여러 개 충전해두고 사용할 수 있음\n최대 충전이 아니면 쿨타임이 돔.", en: "Multiple charges of the skill can be stored and used\nCooldown applies if not at maximum charges." },
  STACKING:         { ko: "조건을 충족할 때마다 효과가 영구적으로 강화됨", en: "Effects are permanently enhanced each time the conditions are met" },
  PROC:             { ko: "상대 또는 자신에게 스택을 쌓고 \n N번째 적중 시 추가 효과가 발동됨", en: "Stacks build up on the target or yourself, \n and an additional effect is triggered on the $N$-th hit." },
  BUFF_STACK:       { ko: "자신에게 스택을 쌓아 추가 효과가 생김", en: "Applies stacks to self, granting additional effects" },
  DEBUFF_STACK:     { ko: "상대에게 스택을 쌓아 추가 효과가 생김", en: "Applies stacks to enemies, granting additional effects" },
  STACK_CONSUME:    { ko: "쌓인 버프 스택을 소모하여 효과를 발동하거나 강화함.", en: "Consumes accumulated buff stacks to trigger or empower an effect." },
  TIMING_INSTANT:   { ko: "누르면 즉시 발동", en: "Activates immediately on cast" },
  TIMING_CAST:      { ko: "시전 후 발동까지 시간이 걸림", en: "Has a cast delay before activating." },
  TIMING_AFTERCAST: { ko: "발동 후 다음 행동까지 시간이 걸림.", en: "Takes time between activation and the next action." },
  ST_IMPACT:      { ko: "스킬이 대상에게 즉시 발동됨", en: "The skill activates immediately upon hitting the target" },
  ST_DELAYED:     { ko: "스킬이 발동까지 일정 시간이 걸림", en: "The skill takes time before it activates" },
  ST_CONDITIONAL: { ko: "특정 조건이 충족될 때 발동됨", en: "Activates only when a specific condition is met" },
  CANCELLABLE:      { ko: "시전 중 직접 중단할 수 있음", en: "Can be manually cancelled during cast" },
  LOCKED:           { ko: "시전 중 직접 중단할 수 없음\n끝까지 완료되어야 함", en: "Cannot be manually cancelled\nMust complete fully" },
  TARGETED:         { ko: "대상을 직접 지정하여 시전하는 스킬\n단, 무적/타겟불가 상태에는 적중하지 않음", en: "Targets an enemy directly\nDoes not hit invulnerable or untargetable units" },
  NON_TARGETED:     { ko: "방향 또는 위치를 지정하여 시전하는 스킬\n대상이 피할 수 있음", en: "Targets a direction or location\nCan be dodged by the enemy" },
  TARGET_ALLY:      { ko: "아군에게 사용하는 스킬", en: "Ability that targets allies" },
  TARGET_ENEMY:     { ko: "적군에게 사용하는 스킬", en: "Ability that targets enemies" },
  TARGET_BOTH:      { ko: "아군과 적군 모두에게 사용 가능한 스킬", en: "Ability that can target both allies and enemies" },
  PROJECTILE:       { ko: "투사체", en: "Projectile" },
  NON_PROJECTILE:   { ko: "외형상 투사체처럼 보이지만 실제로는 투사체가 아님.", en: "Appears to be a projectile but is not." },
  ZONE:             { ko: "시전자와 분리되어 \n 특정 위치에 독립적으로 존재하는 효과", en: "An effect that exists independently at a fixed location, \n separate from the caster" },
  TRAP:             { ko: "설치 후 적이 밟으면 발동되는 함정", en: "A trap that activates when an enemy steps on it" },
  CHAIN:            { ko: "조건 충족 시 추가 투사체 또는 효과가 연쇄 생성됨", en: "Generates additional projectiles or effects when a condition is met" },
  HOMING:           { ko: "시전 후 스스로 대상을 추적.", en: "Tracks a target on its own after cast." },
  PASSIVE_BONUS:    { ko: "스킬을 찍으면 별도의 패시브 효과가 추가됨", en: "Leveling this ability grants an additional persistent passive effect" },
  PASSIVE_INTERACT: { ko: "패시브와 다른 스킬이 서로 영향을 주고받음.", en: "The passive and other abilities interact with each other." },
  BUFF_INTERACT:    { ko: "버프가 다른 스킬과 서로 영향을 주고받음.", en: "A buff interacts with other abilities." },
  DEBUFF_INTERACT:  { ko: "디버프가 다른 스킬과 서로 영향을 주고받음.", en: "A debuff interacts with other abilities." },
  MARK_INTERACT:    { ko: "표식이 다른 스킬과 서로 영향을 주고받음.", en: "A mark interacts with other abilities." },
  MARK_CONSUME:     { ko: "표식을 소모하여 추가 효과를 발동함.", en: "Consumes a mark to trigger a bonus effect." },
  P: { ko: "P", en: "P" },
  Q: { ko: "Q", en: "Q" },
  W: { ko: "W", en: "W" },
  E: { ko: "E", en: "E" },
  R: { ko: "R", en: "R" },
  BA: { ko: "기본 공격", en: "Basic Attack" },
  MARK:             { ko: "적에게 표식을 남기며 \n 표식이 있는 대상에게 추가 효과가 발동됨", en: "Marks an enemy and triggers \n a bonus effect on marked targets" },
  // 피해 범위
  SINGLE:      { ko: "단일 대상에게만 적용되는 스킬", en: "Affects only a single target" },
  PIERCE:        { ko: "투사체가 대상을 관통하여 뒤의 적에게도 적중", en: "Projectile passes through targets" },
  PIERCE_MINION: { ko: "미니언을 관통하여 지나가지만 챔피언은 관통 못하는 조건부 관통", en:   "Passes through minions\nDoes not pierce champions"  },
  PIERCE_ONCE:   { ko: "적 챔피언 1명을 관통하고 멈춤.", en: "Pierces through one enemy champion and stops." },
  AOE:         { ko: "특정 범위 내 \여러 대상에게 적용", en: "Affects multiple targets within an area" },
  AURA:        { ko: "주변 아군 또는 적에게 지속적으로 영향을 주는 범위 효과. \n CC에 맞아도 풀리지 않음.", en: "A persistent area effect that continuously affects nearby allies or enemies.\nCannot be dispelled by CC." },
  GLOBAL:      { ko: "사거리 또는 목표물이 맵 전체", en: "Range or target \n extends across the entire map" },
  SUMMON:  { ko: "유닛을 소환하는 스킬", en: "Summons a unit to assist in combat" },
  DROP:          { ko: "바닥에 오브젝트를 생성하여, \n 밟으면 획득하거나 효과가 발동됨", en: "Creates an object on the ground \n that activates or is collected when stepped on" },
  X2:            { ko: "해당 효과가 2회 발생함", en: "The effect occurs 2 times" },
  X3:            { ko: "해당 효과가 3회 발생함", en: "The effect occurs 3 times" },
  X4:            { ko: "해당 효과가 4회 발생함", en: "The effect occurs 4 times" },
  X5:            { ko: "해당 효과가 5회 발생함", en: "The effect occurs 5 times" },
  XN:            { ko: "특정 조건이나 스택에 따라 발생 횟수가 달라짐", en: "The number of occurrences varies based on stacks or conditions" },
  CLONE:   { ko: "자신의 외형을 모방한 분신", en: "A clone that mimics the champion's appearance" },
  SWARM:   { ko: "스킬이 근처 적에게 나뉘어 각각 단일 적중", en: "Splits among nearby enemies,\n each hitting a single target"},
  VOLLEY:  { ko: "여러 투사체를 한번에 발사. \n 한개만 피해.", en: "Fires multiple projectiles at once. \n Only one projectile can hit each enemy." },
  VOLLEY_OVERLAP: {
    ko: "여러 투사체가 발사되며 가까운 적에게 여러 발이 겹쳐 맞을 수 있음.\n두 번째 발부터는 감소된 피해가 적용됨.",
    en: "Fires multiple projectiles that can overlap on close-range enemies.\nSubsequent hits deal reduced damage.",
  },
  // 피해 종류
  DMG_PHYSICAL: { ko: "방어력에 의해 감소되는 피해", en: "Damage mitigated by armor" },
  DMG_MAGIC:    { ko: "마법 저항력에 의해 감소되는 피해", en: "Damage mitigated by magic resistance" },
  DMG_TRUE:     { ko: "저항력에 감소되지 않는 피해\n단, 실드와 무적에는 막힘", en: "Ignores resistances\nStill blocked by shields and invulnerability" },
  DOT_DMG_TRUE: { ko: "시간에 걸쳐 지속적으로 입히는 고정 피해.", en: "True damage dealt continuously over time." },
  DOT:          { ko: "일정 시간 동안 지속적으로 피해를 줌", en: "Deals damage repeatedly over a duration" },
  ON_HIT:       { ko: "기본 공격 적중 시 추가 피해가 발생함", en: "Deals bonus damage on basic attack hit" },
  // 시전 행동
  CAST_COMMIT:   { ko: "시전 중 CC에 걸려도 스킬이 끊기지 않고 유지됨.\nCC 효과는 시전 도중에도 정상 작동.", en: "The skill is not interrupted and persists even if hit by CC during the cast.\nCC effects function normally during the casting process." },
  CAST_CANCEL:   { ko: "시전 중 CC에 걸리면 스킬이 취소됨\n쿨타임만 소모됨", en: "The skill is canceled if hit by CC during the cast\nOnly the cooldown is consumed" },
  CAST_MOVE:     { ko: "시전 중 이동할 수 있음", en: "Caster can move freely during cast" },
  CAST_IMMOBILE: { ko: "시전 중 이동할 수 없음", en: "Caster cannot move during cast" },
  CC_BUFFER:    { ko: "일부 단계에서 CC를 무시하고 다음단계를 발동함.\n단, CC는 남아있음.\n주로 이동기에 사용.", en: "CC is ignored only during specific phases.\nCommonly seen on mobility abilities." },
  // 이동
  MOBILITY: { ko: "이동 능력의 상위 분류. \n 이동기 금지 상태에서 사용 불가.", en: "The overarching category of movement abilities. \n Cannot be used while grounded." },
  DASH: { ko: "목표 지점까지 경로를 따라 실제로 이동하는 스킬. \n 이동기의 하위 분류.", en: "Moves the caster along a path to the target location. \n A subcategory of Mobility." },
  BLINK: { ko: "거리를 순간적으로 건너뛰는 이동. \n 이동기의 하위 분류.", en: "Instantly crosses a distance without traversing the space between. \n A subcategory of Mobility." }
};
