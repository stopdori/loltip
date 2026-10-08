// app/data/interactions/interruptOverrides.ts
//
// 기본 규칙(ccInteractions.ts)에서 벗어나는 스킬만 등록. 챔피언 파일의 기믹
// 태그(DASH/SKILL_CHANNEL 등)는 그대로 유지하고, 이 파일은 예외만 담당.
// 출처: LoL 위키 Dash / Channel 문서.

// 서버 전용 모듈 — 클라이언트 컴포넌트에서 import하면 빌드 에러로 막는다(데이터 노출 방지).
import "server-only";
import type { TagId } from "./tags";

type CCRef = TagId; // IMMOBILIZING 같은 그룹 태그 포함

export type InterruptOverride = {
  champ: string;             // app/data/champs/ 파일명과 같은 id
  slot: "P" | "Q" | "W" | "E" | "R";
  phase?: string;            // 필요할 때만
  kind: "DASH" | "SKILL_CHANNEL" | "SKILL_CHANNEL_MOVEMENT" | "IGNORE_TERRAIN" | "TRANSFORM";
  charged?: boolean;         // 충전형 여부
  also?: CCRef[];            // 기본 규칙 외에 추가로 끊는 CC
  except?: CCRef[];          // 기본 규칙상 끊겨야 하지만 안 끊기는 CC
  uninterruptible?: boolean; // CC로 끊기지 않음
  note?: { ko: string; en: string };
  source: string;            // 위키 문서/섹션명
};

const CC_IMMUNE_NOTE = { ko: "채널링 중 CC 면역", en: "CC immune while channeling" };

export const INTERRUPT_OVERRIDES: InterruptOverride[] = [
  // 1) 대시 — 이동 불가 계열/변이에도 끊김
  { champ: "akshan",  slot: "E", phase: "E 회전", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], except: ["SILENCE", "DISRUPT", "GROUNDED"],
    note: { ko: "이동 채널이지만 침묵·방해·이동 방해에는 끊기지 않음(인게임 실험: 블리츠크랭크 R)", en: "A movement channel, but not interrupted by silence, disrupt, or grounded (in-game test: Blitzcrank R)" },
    source: "Wiki: Dash / Akshan (Heroic Swing) - knocked down by immobilizing or polymorph; in-game test" },
  { champ: "camille", slot: "E", phase: "E1 벽 돌진 단계", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], except: ["SLEEP"],
    note: { ko: "E1(Hookshot) 돌진은 이동불가·변이에 끊김. 수면에는 끊기지 않음(위키상 버그). 채널링이 아니라 벽 돌진 단계·대기 단계 모두 침묵에 끊기지 않음(인게임 실험). E2 벽 돌진은 일반 돌진 규칙", en: "The E1 (Hookshot) dash is knocked down by immobilize or polymorph. Not by sleep (bug per wiki). Not a channel, so neither the wall-dash phase nor the hold phase is interrupted by silence (in-game test). E2 Wall Dive follows the normal dash rule" },
    source: "Wiki: Dash / Camille (Hookshot) - knocked down by immobilizing or polymorphing CC; sleep does not (bug); in-game test (silence does not interrupt the wall-dash or hold phase)" },
  { champ: "kalista", slot: "P", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "rakan",   slot: "W", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], except: ["SLEEP"],
    note: { ko: "수면에는 넉다운되지 않음(위키상 버그)", en: "Not knocked down by sleep (bug per wiki)" }, source: "Wiki: Dash" },
  { champ: "rakan",   slot: "E", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "yasuo",   slot: "E", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "yuumi",   slot: "W", phase: "W", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], except: ["SLEEP"],
    note: { ko: "아군에게 가는 돌진은 이동불가·변이에 끊김. 수면에는 끊기지 않음(위키상 버그). 부착하러 가는 동안 침묵에도 끊김(인게임 실험: 블리츠크랭크 R)", en: "The dash to an ally is knocked down by immobilize or polymorph. Not by sleep (bug per wiki). Also interrupted by silence while going to attach (in-game test: Blitzcrank R)" },
    source: "Wiki: Yuumi (You and Me!) - 0.25s channel then dash; knocked down by immobilizing or polymorphing CC; sleep does not (bug); in-game test (Blitzcrank R silence)" },
  { champ: "yuumi",   slot: "W", phase: "W 재사용", kind: "DASH", uninterruptible: true,
    note: { ko: "부착한 상태에서 다른 아군에게 옮겨가는 동안은 대상 지정 불가", en: "Untargetable while moving from one ally to another while attached" }, source: "In-game test" },
  { champ: "aurelionsol", slot: "W", phase: "W 비행", kind: "DASH", except: ["SILENCE", "DISRUPT", "GROUNDED"],
    note: { ko: "이동 채널이지만 침묵·방해·이동 방해에는 끊기지 않음(아크샨 E와 같은 판정, 인게임 실험: 블리츠크랭크 R)", en: "A movement channel, but not interrupted by silence, disrupt, or grounded (same as Akshan E; in-game test: Blitzcrank R)" },
    source: "Wiki: Aurelion Sol (Astral Flight) - knocked down by any immobilizing CC; in-game test" },

  // 2) 이동형 채널링
  { champ: "fiddlesticks", slot: "R", phase: "R 시전집중", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "galio",        slot: "R", phase: "시전집중", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "kayn",         slot: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "naafiri",      slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "nunu",         slot: "W", phase: "W", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "pantheon",     slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "shen",         slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "sion",         slot: "R", kind: "SKILL_CHANNEL_MOVEMENT", uninterruptible: true, note: CC_IMMUNE_NOTE, source: "Wiki: Channel" },
  { champ: "tahmkench",    slot: "W", phase: "W", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "taliyah",      slot: "R", phase: "R2", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "twistedfate",  slot: "R", phase: "R2", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "ryze",         slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "vi",           slot: "Q", kind: "SKILL_CHANNEL_MOVEMENT", charged: true, source: "Wiki: Channel" },
  { champ: "zac",          slot: "E", phase: "E 차징", kind: "SKILL_CHANNEL_MOVEMENT", charged: true, source: "Wiki: Channel" },

  // 3) CC로 끊기지 않는 채널링
  { champ: "briar",  slot: "E", kind: "SKILL_CHANNEL", charged: true, uninterruptible: true, source: "Wiki: Channel" },
  { champ: "irelia", slot: "W", phase: "W 차징", kind: "SKILL_CHANNEL", charged: true, uninterruptible: true, source: "Wiki: Channel" },
  { champ: "ksante", slot: "W", kind: "SKILL_CHANNEL", charged: true, uninterruptible: true, source: "Wiki: Channel" },
  { champ: "pantheon", slot: "E", phase: "E / E 강화", kind: "SKILL_CHANNEL", uninterruptible: true, source: "Wiki: Channel" },
  { champ: "urgot",  slot: "R", phase: "R2", kind: "SKILL_CHANNEL", uninterruptible: true, source: "Wiki: Channel" },
  // 워윅 긴 Q: 채널링 + 밀려남 면역(에어본 계열·체공·넉다운·키네마틱스·수면·경직)을 동시에 가진 유일한 스킬.
  // 밀려남 면역으로 막히는 CC만 제외하고, 나머지 채널링 방해 CC(기절·매혹·침묵 등)에는 끊김.
  { champ: "warwick", slot: "Q", phase: "Q 길게", kind: "SKILL_CHANNEL", charged: true,
    except: ["AIRBORNE", "KNOCKBACK", "GRAB", "SUSPENDING", "KNOCKDOWN", "KINEMATICS", "SLEEP", "STASIS", "POSITION_LOCK"],
    note: { ko: "밀려남 면역(에어본 계열·체공·넉다운·수면·경직)에는 끊기지 않음. 속박·이동 방해에도 끊기지 않음", en: "Not interrupted by displacement-immune effects (airborne family, suspension, knockdown, sleep, stasis), nor by root or grounded" },
    source: "Wiki: Warwick (Jaws of the Beast) notes / Crowd control (Displacement Immunity); in-game test (Maokai R root)" },

  // 4) 충전형 (1~3에 없는 스킬만)
  { champ: "aurelionsol", slot: "Q", phase: "Q", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "galio",       slot: "W", phase: "도발", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "pantheon",    slot: "Q", phase: "Q 길게", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "poppy",       slot: "R", phase: "R 길게", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "pyke",        slot: "Q", phase: "Q 길게", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "sion",        slot: "Q", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "varus",       slot: "Q", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "viego",       slot: "W", kind: "SKILL_CHANNEL_MOVEMENT", charged: true,
    note: { ko: "위키 이동형 채널링 목록에는 없으나 실제로 속박에 충전이 끊김(직접 확인)", en: "Not in the wiki's movement channel list, but the charge is interrupted by root (verified in-game)" },
    source: "In-game test (Maokai R root interrupts the charge); not listed in wiki movement channels" },
  { champ: "vladimir",    slot: "E", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "xerath",      slot: "Q", phase: "Q 충전", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },

  // 5) 지형 통과([[IGNORE_TERRAIN]]) — 기본 규칙은 이동불가(IMMOBILIZING)에 끊김.
  //    스몰더 E는 기본 규칙 그대로라 등록하지 않음.
  { champ: "kayn",    slot: "E", kind: "IGNORE_TERRAIN", except: ["SLEEP"],
    note: { ko: "수면에는 끊기지 않음(위키상 버그)", en: "Not interrupted by sleep (bug per wiki)" }, source: "Wiki: Kayn (Shadow Step)" },
  { champ: "skarner", slot: "E", phase: "E", kind: "IGNORE_TERRAIN", also: ["GROUNDED", "SILENCE", "DISRUPT"],
    note: { ko: "이동 방해·시전 방해 CC(침묵, 방해 등)에도 끊김", en: "Also interrupted by grounded and cast-inhibiting CC (silence, disrupt, etc.)" },
    source: "Wiki: Skarner (Ixtal's Impact) / Kassadin Null Sphere V14.22 patch note (interrupts Ixtal's Impact) / Viktor Arcane Storm notes; in-game test (Viktor R, Kassadin Q)" },

  // 6) 변신([[TRANSFORM]]) — TRANSFORM 태그 자체에는 기본 규칙이 없고, 변신이 CC로 해제되는 챔피언만 각각 등록.
  { champ: "quinn",    slot: "R", phase: "R1", kind: "TRANSFORM", also: ["IMMOBILIZING", "GROUNDED", "SILENCE"],
    note: { ko: "이동불가·이동 방해·침묵에 변신 해제. 단, [[TRANSFORM]]이 해제되고 R2 발동 없이 쿨타임 소모.", en: "Transform ends on immobilize, grounded, or silence. However, the [[TRANSFORM]] ends and the cooldown is spent without casting R2." },
    source: "Wiki: Quinn (Behind Enemy Lines) - immobilized, grounded, or silenced ends it without performing Skystrike" },
  { champ: "rammus",   slot: "Q", kind: "TRANSFORM",
    also: ["AIRBORNE", "KNOCKBACK", "GRAB", "SUSPENDING", "STUN", "SUPPRESS", "SLEEP", "STASIS", "FORCED_ACTION", "SILENCE", "POLYMORPH", "DISRUPT"],
    note: { ko: "일반 채널링과 같은 CC에 변신 해제(속박·이동 방해에는 해제되지 않음)", en: "Transform ends on the same CC as a normal channel (not on root or grounded)" },
    source: "Wiki: Rammus (Powerball) - channel, not a movement channel" },
  { champ: "volibear", slot: "Q", phase: "추격단계", kind: "TRANSFORM", also: ["IMMOBILIZING", "POLYMORPH"],
    note: { ko: "이동불가·변이에 변신 해제. 단, 볼리베어 Q는 [[CDR_RESET]].", en: "Transform ends on immobilize or polymorph. However, Volibear's Q [[CDR_RESET]]s." },
    source: "Wiki: Volibear (Thundering Smash) - immobilized or polymorphed by an enemy ends it and resets the cooldown" },
];

// 끊김 계산에서 아예 제외하는 스킬. 판정 자체가 의미 없거나(예: 상대 궁극기를 훔쳐 쓰는 사일러스 R),
// 나중에 따로 정리할 예정인 스킬을 여기에 둔다. matchInterrupts·참고 문서·매치업 점검 스크립트가 모두 건너뜀.
export type InterruptCalcExclusion = {
  champ: string;
  slot: "P" | "Q" | "W" | "E" | "R";
  reason: { ko: string; en: string };
};

export const INTERRUPT_CALC_EXCLUDED: InterruptCalcExclusion[] = [
  { champ: "sylas", slot: "R", reason: {
    ko: "훔친 궁극기에 따라 판정이 달라서 계산에서 제외(모든 궁극기 판정을 정리한 뒤 마지막에 추가 예정)",
    en: "Excluded because the result depends on the stolen ultimate (to be added last, after every ultimate is sorted out)" } },
];
