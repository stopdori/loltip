import type { ChampData } from "../interactions/types";
 

 
const ryze: ChampData = {
 
  id: "ryze",
 
  skills: {
 
    P: [],
 
    Q: ["ST_CONDITIONAL", "MARK_CONSUME", "CHAIN", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
 
    W: ["W_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "ROOT", "SEPARATOR", "Q", "CDR_RESET"],
 
    E: ["E_FLASH", "MARK", "SEPARATOR", "ST_CONDITIONAL", "MARK", "CHAIN"],
 
    R: ["BLINK", "WALL_HOP", "SEPARATOR", "TOWER_DODGE"],
 
  },
 

 
  vision: {
 
    P: [],
 
    Q: ["HIT_SOUND", "HIT_EFFECT"],
 
    W: ["POSITION_REVEAL"],
 
    E: ["POSITION_REVEAL", "HIT_EFFECT"],
 
    R: ["VISION"],
 
  },
 

 
  gimmick: {
 
    P: ["PASSIVE_BONUS"],
 
    Q: ["DMG_MAGIC", "PROJECTILE", "STACK_CONSUME", "SEPARATOR", "ST_CONDITIONAL", "CHAIN", "DMG_MAGIC", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
 
    W: ["DMG_MAGIC", "TARGETED", "NON_PROJECTILE", "BUFF_STACK", "SLOW", "SEPARATOR", "Q", "CDR_RESET", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],
 
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "MARK", "BUFF_STACK"] },
      { label: { ko: "주문전이", en: "Spell Flux" }, tags: ["PROJECTILE", "CHAIN", "MARK"] },
    ] },
     
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "CAST_MOVE", "SEPARATOR", "ZONE", "X2"] },
      { label: { ko: "R 순간이동", en: "R Blink" }, tags: ["TOWER_DODGE", "BLINK", "WALL_HOP"] },
    ] },
    
 
  },
 

 
  notes: {
    skill: {
      note3: { 
        ko: [
          "사용자에 따라 무궁무진한 전략이 있음.",
          "최대 극딜 콤보는 Q, W, Q, E, Q",
          "도망칠 때는 EW, Q로 [[MS_UP]]가 중요.",
        ], en: [
          "There are endless strategies depending on the player.",
          "The max burst combo is Q, W, Q, E, Q",
          "When escaping, [[MS_UP]] from E into W and Q is important.",
        ] },
      note1: {

        ko: [
          "P는 최대 마나량이 10% 증가. \n 스킬에 추가 마나량의 비례 [[DMG_MAGIC]]. \n \n",

          "라이즈는 챔프 특성상 E, W, Q 순으로 설명. \n \n",

          "E는 [[PROJECTILE]]를 발사하여 [[DMG_MAGIC]]. \n 대상에게 [[MARK]]을 부여하고 주변에 [[CHAIN]] ([[MARK]]만). \n 이미 [[MARK]]이 있다면 [[MARK]]이 또 주변에 [[CHAIN]] (반복).  \n \n",

          "W는 [[TARGETED]] [[NON_PROJECTILE]]. \n [[SLOW]] [[DMG_MAGIC]]. \n [[MARK]]이 있다면 [[MARK_CONSUME]]하여 [[SLOW]] 대신 [[ROOT]]. \n 즉, EW \n \n",

          "Q의 [[PASSIVE_BONUS]]는 \n W, E가 \n Q [[CDR_RESET]]와 룬 [[BUFF_STACK]] 획득. 최대 2스택. \n Q를 사용하면 (적중하지 않아도) 모든 룬 [[STACK_CONSUME]]. \n 한번에 2개 소모하면 [[MS_UP]]. \n 1개는 효과 없음.", 

          "Q는 [[PROJECTILE]] 발사하여 [[DMG_MAGIC]]. \n 대상에게 E의 [[MARK]]이 있다면 \n [[MARK_CONSUME]] 하여 50% 추가 [[DMG_MAGIC]]. \n 주변 [[MARK]] 대상에게 [[CHAIN]] 반복. \n 즉, EQ \n \n",

          "R의 [[PASSIVE_BONUS]]는 \n EQ의 [[DMG_MAGIC]] 증가.",
          "R은 원하는 위치에 [[ZONE]] B를 생성. \n 동시에 라이즈 발 아래 [[ZONE]] A도 자동 생성. \n 잠시 후 발아래 있던 [[ZONE]] A 위에 있는 라이즈와 아군들이 \n 맵에서 잠시 사라지고 \n [[ZONE]] B로 모두 순간이동.",
        ],

        en: [
          "P increases max mana by 10%. \n Skills deal bonus [[DMG_MAGIC]] based on bonus mana. \n \n",

          "Due to Ryze's kit, this is explained in E, W, Q order. \n \n",

          "E fires a [[PROJECTILE]], dealing [[DMG_MAGIC]]. \n Applies [[MARK]] to the target and [[CHAIN]]s to nearby targets ([[MARK]] only). \n If the target is already [[MARK]]ed, it [[CHAIN]]s again to nearby targets (repeats). \n \n",

          "W is [[TARGETED]] [[NON_PROJECTILE]]. \n Applies [[SLOW]] and [[DMG_MAGIC]]. \n If the target is [[MARK]]ed, [[MARK_CONSUME]]s to apply [[ROOT]] instead of [[SLOW]]. \n i.e. E into W \n \n",

          "Q's [[PASSIVE_BONUS]] is that \n W and E \n [[CDR_RESET]] Q and grant a Rune [[BUFF_STACK]]. Max 2 stacks. \n Using Q (even without hitting) [[STACK_CONSUME]]s all Runes. \n Consuming 2 at once grants [[MS_UP]]. \n Consuming just 1 has no effect.",

          "Q fires a [[PROJECTILE]], dealing [[DMG_MAGIC]]. \n If the target has E's [[MARK]], \n it [[MARK_CONSUME]]s for 50% bonus [[DMG_MAGIC]]. \n [[CHAIN]]s repeatedly to nearby [[MARK]]ed targets. \n i.e. E into Q \n \n",

          "R's [[PASSIVE_BONUS]] is that \n it increases E-into-Q [[DMG_MAGIC]].",
          "R creates [[ZONE]] B at the chosen location. \n It also automatically creates [[ZONE]] A under Ryze at the same time. \n After a short delay, Ryze and allies standing on [[ZONE]] A \n briefly vanish from the map \n and all teleport to [[ZONE]] B.",
        ]

      },

      note2: {

        ko: [
          "주문전이 묻히고 [[W_FLASH]] 개사기임.",
          "R은 시전중에 라이즈가 CC(이동불가, 사용불가)에 맞으면 [[CAST_CANCEL]]. \n 아군은 CC에 맞아도 라이즈가 해당되지 않으면 이동 가능. \n R [[ZONE]] 위에서 귀환 누르면 나만 안타짐 (라이즈포함). \n 라이즈가 귀환을 눌러도 R은 정상적으로 작동. \n R로 사라지면서 이동할 때 [[INVULNERABLE]] 판정. \n 타워 데미지 포함 온갖 기술들을 무효화 할 수 있음. \n \n R로 아군 미니언, 소환수와 함께 상대포탑에 이동할 때 \n 포탑 어그로는 미니언, 소환수 먼저."

      ],

        en: [
          "Landing Spell Flux then [[W_FLASH]] is absurdly strong.",
          "R gets [[CAST_CANCEL]]led if Ryze is hit by CC (immobilize, disable) during the cast. \n Allies can still travel even if they're CC'd, as long as Ryze himself isn't. \n Pressing Recall while standing on R's [[ZONE]] excludes only that user from the teleport (including Ryze). \n R still works normally even if Ryze presses Recall. \n While vanishing and traveling via R, units count as [[INVULNERABLE]]. \n This can negate all sources of damage, including tower shots. \n \n When teleporting with allied minions or pets to an enemy tower via R, \n tower aggro is drawn to the minions/pets first.",
        ]

        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },
 

 
  ultCooldown: {
 
    6: 180,
 
    11: 160,
 
    16: 140,
 
  },
 

 
};
 

 
export default ryze;
 
