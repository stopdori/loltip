import type { ExamQuestion } from "../types";

// questions.ts가 비어 있을 때 대신 쓰이는 임시 문항 풀 (easy 10 / normal 12 / hard 8 = 30문항).
// 실제 검증된 매치업 문항이 questions.ts에 채워지면 자동으로 그쪽이 우선된다 (data/index.ts 참고).
const placeholder: ExamQuestion[] = [
  {
    id: "q001",
    source: { champ1: "anivia", champ2: "blitzcrank", highlight: "anivia-ko-0" },
    question: {
      ko: "애니비아가 알 상태일 때 블리츠크랭크의 로켓 그랩에 맞으면?",
      en: "What happens when Blitzcrank's Rocket Grab hits Anivia in egg form?",
    },
    options: [
      { ko: "알이 끌려온다", en: "The egg gets pulled" },
      { ko: "그랩이 무효화된다", en: "The grab is negated" },
      { ko: "알이 즉사한다", en: "The egg dies instantly" },
      { ko: "블리츠크랭크가 튕겨진다", en: "Blitzcrank gets knocked back" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q002",
    source: { champ1: "yasuo", champ2: "xerath", highlight: "yasuo-ko-0" },
    question: {
      ko: "야스오 E(질풍검)의 바람의 벽은 아군이 쏜 투사체도 막을까?",
      en: "Does Yasuo's Wind Wall (E) block projectiles fired by his own allies too?",
    },
    options: [
      { ko: "막는다 (아군/적군 무관)", en: "Yes, blocks regardless of team" },
      { ko: "적 투사체만 막는다", en: "Only blocks enemy projectiles" },
      { ko: "아군 투사체만 통과시키지 않는다", en: "Only blocks ally projectiles" },
      { ko: "투사체 자체를 막지 못한다", en: "It doesn't block projectiles at all" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q003",
    source: { champ1: "vayne", champ2: "malphite", highlight: "vayne-ko-0" },
    question: {
      ko: "베인 W(은화살)의 고정 피해는 말파이트의 방어력을 무시할까?",
      en: "Does the true damage from Vayne's Silver Bolts (W) ignore Malphite's armor?",
    },
    options: [
      { ko: "무시한다 (고정 피해)", en: "Yes, it's true damage" },
      { ko: "방어력만큼 감소한다", en: "It's reduced by armor" },
      { ko: "마법 저항력으로 계산된다", en: "It's calculated against magic resist instead" },
      { ko: "실드에는 아예 적용되지 않는다", en: "It never applies through shields" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q004",
    source: { champ1: "leona", champ2: "ezreal", highlight: "leona-ko-0" },
    question: {
      ko: "레오나에게 기절한 이즈리얼은 그 상태에서 점멸을 쓸 수 있을까?",
      en: "Can a stunned Ezreal use Flash while stunned by Leona?",
    },
    options: [
      { ko: "쓸 수 없다 (강한 CC로 차단)", en: "No, hard CC blocks Flash" },
      { ko: "쓸 수 있다", en: "Yes, it can still be used" },
      { ko: "쿨타임만 소모되고 이동은 안 한다", en: "It goes on cooldown but doesn't move him" },
      { ko: "점멸 거리가 줄어든 채로 나간다", en: "It works but with reduced range" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q005",
    source: { champ1: "sivir", champ2: "malzahar", highlight: "sivir-ko-0" },
    question: {
      ko: "시비르 E(스펠 실드)로 말자하 궁극기(제압)를 막을 수 있을까?",
      en: "Can Sivir's Spell Shield (E) block Malzahar's suppression ultimate?",
    },
    options: [
      { ko: "막을 수 있다", en: "Yes, it can block it" },
      { ko: "제압은 스펠 실드로 막을 수 없다", en: "No, suppression can't be spell-shielded" },
      { ko: "피해만 막고 제압은 유지된다", en: "It blocks the damage but suppression still applies" },
      { ko: "궁극기 자체가 무효화되어 재사용된다", en: "The ult is voided and refunded" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q006",
    source: { champ1: "teemo", champ2: "twitch", highlight: "teemo-ko-0" },
    question: {
      ko: "트위치의 독(감염)이 걸린 상태에서 티모가 은신하면 독 피해는 계속 들어갈까?",
      en: "If Teemo goes stealth while already poisoned by Twitch's Deadly Venom, does the poison keep ticking?",
    },
    options: [
      { ko: "계속 들어간다", en: "Yes, it keeps ticking" },
      { ko: "은신하는 즉시 끊긴다", en: "No, it stops the moment he stealths" },
      { ko: "피해량이 절반으로 줄어든다", en: "It ticks at half damage" },
      { ko: "은신이 아예 불가능해진다", en: "Stealth becomes impossible instead" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q007",
    source: { champ1: "khazix", champ2: "reksai", highlight: "khazix-ko-0" },
    question: {
      ko: "강타(스마이트)로 상대 챔피언을 대상으로 지정할 수 있을까?",
      en: "Can the Smite summoner spell target enemy champions?",
    },
    options: [
      { ko: "챔피언은 대상으로 지정할 수 없다", en: "No, it can't target champions" },
      { ko: "체력이 낮으면 챔피언도 지정 가능하다", en: "Yes, if their health is low enough" },
      { ko: "정글 몬스터보다 챔피언을 우선 지정한다", en: "It even prioritizes champions over jungle monsters" },
      { ko: "챔피언에게 쓰면 실드가 부여된다", en: "Using it on a champion grants a shield instead" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q008",
    source: { champ1: "vladimir", champ2: "swain", highlight: "vladimir-ko-0" },
    question: {
      ko: "이그나이트(점화) 소환사 주문에 걸리면 회복 효과가 감소할까?",
      en: "Does the Ignite summoner spell reduce healing received?",
    },
    options: [
      { ko: "감소한다 (그리버스 운즈)", en: "Yes, it applies Grievous Wounds" },
      { ko: "회복에는 영향을 주지 않는다", en: "No, it doesn't affect healing" },
      { ko: "받는 피해량만 늘어난다", en: "It only increases damage taken" },
      { ko: "체력 재생만 막고 스킬 회복은 그대로다", en: "It only blocks regen, not ability healing" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q009",
    source: { champ1: "teemo", champ2: "cassiopeia", highlight: "cassiopeia-ko-0" },
    question: {
      ko: "이미 걸려 있던 카시오페아의 독(지속 피해) 상태에서 존야의 모래시계를 쓰면 그 독 피해도 막힐까?",
      en: "If Zhonya's Hourglass is used while already poisoned by Cassiopeia, does it block the ongoing poison damage?",
    },
    options: [
      { ko: "이미 걸린 지속 피해는 그대로 들어간다", en: "No, the pre-applied DoT still ticks" },
      { ko: "존야 사용 즉시 독이 사라진다", en: "Yes, the poison is removed instantly" },
      { ko: "독 피해가 무적 시간만큼 누적됐다가 한번에 들어간다", en: "It's delayed and dealt all at once after" },
      { ko: "독은 막히지만 지속시간은 그대로 흐른다", en: "Damage is blocked but the duration still counts down" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q010",
    source: { champ1: "malzahar", champ2: "warwick", highlight: "malzahar-ko-1" },
    question: {
      ko: "클렌즈(정화) 소환사 주문으로 말자하나 워윅의 제압(서프레션)도 풀 수 있을까?",
      en: "Can the Cleanse summoner spell remove suppression effects like Malzahar's or Warwick's ultimate?",
    },
    options: [
      { ko: "풀 수 있다", en: "Yes, it removes suppression too" },
      { ko: "제압은 정화로도 못 푼다", en: "No, suppression can't be cleansed" },
      { ko: "지속시간만 절반으로 줄여준다", en: "It only halves the duration" },
      { ko: "쿨타임 중에는 아예 반응하지 않는다", en: "It simply does nothing while suppressed" },
    ],
    answer: 0,
    difficulty: "easy",
  },
  {
    id: "q011",
    source: { champ1: "poppy", champ2: "malphite", highlight: "poppy-ko-1" },
    question: {
      ko: "뽀삐 E(고속 돌진)로 상대를 밀쳐 벽에 부딪히게 하면 기절 시간이 늘어날까?",
      en: "If Poppy's E (Heroic Charge) knocks a target into a wall, does the stun duration increase?",
    },
    options: [
      { ko: "밀쳐진 거리에 비례해 늘어난다", en: "Yes, it scales with the distance knocked" },
      { ko: "고정된 기절 시간만 적용된다", en: "No, the stun duration is always fixed" },
      { ko: "벽에 부딪혀도 기절 대신 둔화만 걸린다", en: "Hitting a wall applies a slow instead of a stun" },
      { ko: "벽과 충돌하면 오히려 기절이 풀린다", en: "Hitting a wall actually cancels the stun" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q012",
    source: { champ1: "galio", champ2: "syndra", highlight: "galio-ko-2" },
    question: {
      ko: "갈리오 궁극기(영웅의 강림)가 착지할 때, 착지 지점의 아군에게도 보호막을 부여할까?",
      en: "When Galio's ultimate (Hero's Entrance) lands, does it also shield nearby allies at the landing point?",
    },
    options: [
      { ko: "갈리오와 주변 아군 모두에게 보호막을 준다", en: "Yes, it shields Galio and nearby allies" },
      { ko: "갈리오 자신에게만 보호막이 생긴다", en: "No, only Galio himself gets the shield" },
      { ko: "보호막 대신 이동속도만 부여한다", en: "It grants move speed instead of a shield" },
      { ko: "적에게 맞아야만 보호막이 생긴다", en: "The shield only triggers if it hits an enemy" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q013",
    source: { champ1: "rumble", champ2: "jarvaniv", highlight: "rumble-ko-0" },
    question: {
      ko: "럼블 궁극기(이퀄라이저)의 화상 지대 위에서 존야의 모래시계를 쓰면 화상 피해를 계속 입을까?",
      en: "If a target uses Zhonya's Hourglass while standing in Rumble's ultimate zone, does the burn damage keep applying?",
    },
    options: [
      { ko: "무적 상태이므로 새로 들어오는 화상 피해는 막힌다", en: "No, being untargetable blocks the new burn ticks" },
      { ko: "지대에 서 있는 한 계속 들어간다", en: "Yes, it keeps ticking as long as they stand there" },
      { ko: "화상 피해가 두 배로 누적된다", en: "It stacks up and deals double after" },
      { ko: "존야 사용 즉시 지대 밖으로 밀려난다", en: "Using it instantly pushes them out of the zone" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q014",
    source: { champ1: "syndra", champ2: "zed", highlight: "syndra-ko-1" },
    question: {
      ko: "신드라 궁극기(구슬 폭풍)로 스턴이 들어가는 순간, 상대가 존야의 모래시계로 무적 상태라면 스턴이 적용될까?",
      en: "If a target is untargetable via Zhonya's Hourglass when Syndra's ultimate (Unleashed Power) would stun them, does the stun still land?",
    },
    options: [
      { ko: "무적 상태라 스턴이 적용되지 않는다", en: "No, being untargetable prevents the stun" },
      { ko: "피해만 막히고 스턴은 그대로 들어간다", en: "Yes, only the damage is blocked, not the stun" },
      { ko: "스턴 시간이 절반으로 줄어든다", en: "The stun duration is halved instead" },
      { ko: "존야 지속시간이 강제로 끝난다", en: "It forcibly ends the Zhonya's duration" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q015",
    source: { champ1: "morgana", champ2: "leblanc", highlight: "morgana-ko-0" },
    question: {
      ko: "스펠 실드(사일러스 E, 시비르 E, 모르가나 흑마법 방패 등)는 광역(논타겟) 스킬도 막을까?",
      en: "Do spell shields (Sylas's E, Sivir's E, Morgana's Black Shield, etc.) block AoE / non-targeted abilities too?",
    },
    options: [
      { ko: "챔피언을 직접 지정하는 스킬만 막는다", en: "No, only spells that specifically target the champion" },
      { ko: "범위에 닿기만 해도 전부 막는다", en: "Yes, anything that touches the area is blocked" },
      { ko: "피해 스킬만 막고 CC는 통과시킨다", en: "It blocks damage only, CC still lands" },
      { ko: "CC만 막고 피해는 그대로 들어간다", en: "It blocks CC only, damage still lands" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q016",
    source: { champ1: "tahmkench", champ2: "braum", highlight: "tahmkench-ko-1" },
    question: {
      ko: "탐켄치 궁극기(삼키기)를 아군에게 사용하면 피해 대신 보호막을 부여할까?",
      en: "Does Tahm Kench's ultimate (Devour) grant a shield instead of damage when used on an ally?",
    },
    options: [
      { ko: "아군에게는 보호막을 부여한다", en: "Yes, it shields allies instead" },
      { ko: "아군에게도 동일하게 피해를 준다", en: "No, it damages allies the same way" },
      { ko: "아군에게는 사용 자체가 불가능하다", en: "It simply can't be cast on allies" },
      { ko: "아군을 삼키면 침묵 효과만 준다", en: "It only silences the ally instead" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q017",
    source: { champ1: "singed", champ2: "teemo", highlight: "singed-ko-0" },
    question: {
      ko: "신지드 W(독 트레일)는 신지드가 바라보는 방향과 무관하게 항상 뒤쪽에 남을까?",
      en: "Does Singed's Poison Trail (W) always stay behind him regardless of which way he's facing?",
    },
    options: [
      { ko: "이동 방향과 무관하게 항상 뒤에 남는다", en: "Yes, it always trails behind his movement" },
      { ko: "바라보는 방향 앞쪽에 생긴다", en: "No, it forms in front of where he's facing" },
      { ko: "신지드를 중심으로 원형으로 생긴다", en: "It forms in a circle centered on Singed" },
      { ko: "정지 상태에서만 생성된다", en: "It only appears while Singed is standing still" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q018",
    source: { champ1: "sylas", champ2: "ahri", highlight: "sylas-ko-1" },
    question: {
      ko: "사일러스가 궁극기로 훔친 상대 궁극기는 원래 주인의 능력치가 아니라 사일러스 자신의 능력치를 기준으로 계산될까?",
      en: "When Sylas steals an ultimate, is its power calculated from his own stats rather than the original owner's?",
    },
    options: [
      { ko: "사일러스 자신의 능력치를 따른다", en: "Yes, it's based on Sylas's own stats" },
      { ko: "원래 챔피언의 능력치를 그대로 따른다", en: "No, it keeps using the original champion's stats" },
      { ko: "둘의 능력치 중 더 낮은 쪽을 따른다", en: "It uses whichever stat total is lower" },
      { ko: "고정 수치로만 적용되어 능력치와 무관하다", en: "It's a flat value unaffected by any stats" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q019",
    source: { champ1: "nasus", champ2: "warwick", highlight: "nasus-ko-0" },
    question: {
      ko: "나서스 Q(황천의 낫)은 미니언뿐 아니라 정글 몬스터를 처치해도 스택이 오를까?",
      en: "Does Nasus's Q (Siphoning Strike) gain a stack from jungle monster kills too, not just minions?",
    },
    options: [
      { ko: "정글 몬스터 처치로도 스택이 오른다", en: "Yes, jungle monster kills count too" },
      { ko: "미니언 처치로만 스택이 오른다", en: "No, only minion kills grant a stack" },
      { ko: "챔피언 처치로만 스택이 오른다", en: "Only champion kills grant a stack" },
      { ko: "몬스터를 처치하면 오히려 스택이 소모된다", en: "Killing a monster actually consumes a stack" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q020",
    source: { champ1: "maokai", champ2: "teemo", highlight: "maokai-ko-0" },
    question: {
      ko: "마오카이 궁극기(대자연의 분노)로 소환되는 묘목은 와드처럼 시야를 제공할까?",
      en: "Do the saplings summoned by Maokai's ultimate (Vengeful Maelstrom) provide vision like a ward?",
    },
    options: [
      { ko: "시야를 제공한다", en: "Yes, they grant vision" },
      { ko: "시야는 주지 않고 피해만 준다", en: "No, they only deal damage without vision" },
      { ko: "적에게 발각되기 전까지만 시야를 준다", en: "They only grant vision until spotted by an enemy" },
      { ko: "묘목이 아군 챔피언 근처에 있을 때만 시야를 준다", en: "Only if standing near an allied champion" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q021",
    source: { champ1: "kennen", champ2: "garen", highlight: "kennen-ko-0" },
    question: {
      ko: "케넨의 패시브(폭풍의 징표)는 기본 공격뿐 아니라 스킬 피해로도 스택이 쌓일까?",
      en: "Does Kennen's passive (Mark of the Storm) stack from ability damage too, not just basic attacks?",
    },
    options: [
      { ko: "기본 공격과 스킬 모두 스택이 쌓인다", en: "Yes, both basic attacks and abilities stack it" },
      { ko: "기본 공격으로만 쌓인다", en: "No, only basic attacks stack it" },
      { ko: "스킬로만 쌓이고 기본 공격은 안 쌓인다", en: "Only abilities stack it, not basic attacks" },
      { ko: "궁극기 사용 중에만 쌓인다", en: "It only stacks while his ultimate is active" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q022",
    source: { champ1: "neeko", champ2: "shaco", highlight: "neeko-ko-0" },
    question: {
      ko: "니코가 W(위장)로 다른 챔피언 모습으로 변신하면, 상대 포탑도 속아서 니코를 그 챔피언으로 인식할까?",
      en: "When Neeko disguises herself as another champion with W, is the enemy tower fooled by the disguise too?",
    },
    options: [
      { ko: "포탑은 변신에 속지 않는다", en: "No, towers aren't fooled by the disguise" },
      { ko: "포탑도 변신한 챔피언으로 인식한다", en: "Yes, towers see her as the disguised champion" },
      { ko: "포탑 공격 자체가 니코에게 닿지 않는다", en: "Tower shots simply can't reach her at all" },
      { ko: "변신 중엔 포탑이 니코를 무시하고 공격하지 않는다", en: "Towers just ignore her entirely while disguised" },
    ],
    answer: 0,
    difficulty: "normal",
  },
  {
    id: "q023",
    source: { champ1: "jarvaniv", champ2: "leesin", highlight: "jarvaniv-ko-1" },
    question: {
      ko: "자르반 4세 궁극기(진격의 나팔)로 만든 벽은 감옥에 갇힌 대상 외의 다른 챔피언의 이동도 막을까?",
      en: "Does the wall from Jarvan IV's ultimate (Cataclysm) also block movement for other champions, not just the trapped target?",
    },
    options: [
      { ko: "지형처럼 모든 챔피언의 이동을 막는다", en: "Yes, it blocks all champions like terrain" },
      { ko: "갇힌 대상에게만 벽으로 작용한다", en: "No, it's only a wall for the trapped target" },
      { ko: "아군은 통과할 수 있고 적만 막는다", en: "Allies can pass through, only enemies are blocked" },
      { ko: "벽이 아니라 둔화 지대일 뿐이다", en: "It's just a slow zone, not an actual wall" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q024",
    source: { champ1: "nidalee", champ2: "garen", highlight: "nidalee-ko-0" },
    question: {
      ko: "니달리 표범 폼 스킬(강타/도약/추격)은 대상이 잃은 체력 비율에 비례한 고정 피해를 추가로 줄까?",
      en: "Do Nidalee's cougar-form abilities (Takedown/Pounce/Swipe) deal bonus true damage based on the target's missing health?",
    },
    options: [
      { ko: "잃은 체력 비율에 비례한 고정 피해가 추가된다", en: "Yes, bonus true damage scales with missing health" },
      { ko: "체력과 무관하게 고정된 추가 피해만 준다", en: "No, the bonus damage is a flat amount regardless of health" },
      { ko: "최대 체력 비례 피해만 주고 고정 피해는 없다", en: "It only deals max-health-based damage, no true damage" },
      { ko: "대상이 챔피언일 때는 추가 피해가 없다", en: "The bonus doesn't apply against champions at all" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q025",
    source: { champ1: "syndra", champ2: "leblanc", highlight: "syndra-ko-0" },
    question: {
      ko: "신드라 E(힘의 분산)로 던져진 챔피언이 다른 챔피언과 충돌하면 둘 다 기절하는데, 미니언과 충돌해도 기절이 걸릴까?",
      en: "Syndra's E (Force of Will) stuns both champions on collision — does it also stun on colliding with a minion?",
    },
    options: [
      { ko: "미니언과 충돌해서는 기절이 걸리지 않는다", en: "No, colliding with a minion doesn't stun" },
      { ko: "미니언과 충돌해도 동일하게 기절이 걸린다", en: "Yes, it stuns the same way on minions" },
      { ko: "미니언과 충돌하면 던져진 대상만 기절한다", en: "Only the thrown target gets stunned on a minion" },
      { ko: "미니언과 충돌 시 피해만 두 배로 들어간다", en: "It just deals double damage on a minion instead" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q026",
    source: { champ1: "fiora", champ2: "swain", highlight: "fiora-ko-0" },
    question: {
      ko: "이그나이트(그리버스 운즈)에 걸리면, 걸리기 전에 이미 받은 회복 수치까지 소급으로 줄어들까?",
      en: "When Grievous Wounds (e.g. Ignite) is applied, does it retroactively reduce healing already received before it landed?",
    },
    options: [
      { ko: "그 이후 들어오는 회복부터만 감소한다", en: "No, only healing received after it applies is reduced" },
      { ko: "이미 받은 회복 수치까지 소급으로 깎인다", en: "Yes, it retroactively reduces past healing too" },
      { ko: "받은 회복량 전체를 즉시 무효화한다", en: "It instantly cancels all healing received so far" },
      { ko: "체력 재생만 소급 적용되고 스킬 회복은 그대로다", en: "Only regen is retroactive; ability healing is untouched" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q027",
    source: { champ1: "warwick", champ2: "teemo", highlight: "warwick-ko-0" },
    question: {
      ko: "워윅 궁극기(무한의 사냥)는 은신한 상대(예: 티모 패시브)도 체력이 낮으면 추적해서 발동될까?",
      en: "Can Warwick's ultimate (Infinite Duress) track and trigger on a low-health enemy even while they're stealthed (e.g. Teemo's passive)?",
    },
    options: [
      { ko: "체력이 낮으면 은신 상태도 감지해 발동한다", en: "Yes, it detects and triggers through stealth on low health" },
      { ko: "은신 중인 상대에게는 아예 사용할 수 없다", en: "No, it can't be used on a stealthed target at all" },
      { ko: "은신 상대에게는 발동은 되지만 제압은 안 걸린다", en: "It triggers but doesn't suppress a stealthed target" },
      { ko: "은신을 먼저 강제로 해제해야만 발동된다", en: "It requires stealth to be broken first before it can trigger" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q028",
    source: { champ1: "lux", champ2: "leblanc", highlight: "lux-ko-0" },
    question: {
      ko: "럭스 E(감금)로 표식(빛의 결속)을 남긴 뒤, 그 표식이 사라지기 전에 궁극기(파멸의 빛)로 적중하면 추가 피해가 들어갈까?",
      en: "If Lux marks a target with E (Light Binding) and hits them with her ultimate (Final Spark) before the mark expires, does it deal bonus damage?",
    },
    options: [
      { ko: "표식 중 적중 시 추가 피해가 들어간다", en: "Yes, it deals bonus damage while the mark is active" },
      { ko: "표식과 궁극기 피해는 서로 연동되지 않는다", en: "No, the mark and ultimate don't interact" },
      { ko: "표식이 있으면 궁극기 피해가 오히려 줄어든다", en: "The mark actually reduces the ultimate's damage" },
      { ko: "표식은 기본 공격에만 추가 피해를 준다", en: "The mark only adds bonus damage to basic attacks" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q029",
    source: { champ1: "zed", champ2: "irelia", highlight: "zed-ko-0" },
    question: {
      ko: "제드 궁극기(죽음의 표식)로 남긴 표식이 터지기 전에 제드가 죽으면, 표식으로 인한 처형 피해는 그래도 발동될까?",
      en: "If Zed dies before his ultimate's mark (Death Mark) detonates, does the mark still deal its damage?",
    },
    options: [
      { ko: "제드가 죽어도 표식은 그대로 터진다", en: "Yes, the mark still detonates even if Zed dies" },
      { ko: "제드가 죽으면 표식도 함께 사라진다", en: "No, the mark disappears if Zed dies" },
      { ko: "표식 피해가 절반으로 줄어든 채 터진다", en: "It detonates but at half the damage" },
      { ko: "표식은 제드가 부활해야만 발동된다", en: "The mark only triggers once Zed respawns" },
    ],
    answer: 0,
    difficulty: "hard",
  },
  {
    id: "q030",
    source: { champ1: "fizz", champ2: "garen", highlight: "fizz-ko-0" },
    question: {
      ko: "피즈 E(장난스러운 속임수)로 대상 위에 올라탔을 때, 그 대상이 기절이나 침묵 상태여도 피즈는 정상적으로 착지해 피해를 줄까?",
      en: "When Fizz hops onto a target with E (Playful/Trickster), does he still land and deal damage normally even if that target is stunned or silenced?",
    },
    options: [
      { ko: "대상의 CC 상태와 무관하게 정상적으로 적용된다", en: "Yes, it works regardless of the target's CC state" },
      { ko: "대상이 CC 상태면 스킬 자체가 무효화된다", en: "No, the ability fails if the target is under CC" },
      { ko: "침묵 상태의 대상에게는 피해만 안 들어간다", en: "It lands but deals no damage against a silenced target" },
      { ko: "기절 상태의 대상 위에는 아예 올라탈 수 없다", en: "He simply can't hop onto a stunned target at all" },
    ],
    answer: 0,
    difficulty: "hard",
  },
];

export default placeholder;
