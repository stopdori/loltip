// app/data/interactions/tagTone.ts
import type { TagId } from "./index";

// ✅ 스타일 팔레트용 톤(색상 그룹)
export type Tone =
  | "default"
  | "note"
  | "amber" // 노랑/황금
  | "amber_dark" // (예전 amber-700/40: slow/ad_down/as_down/invuln/reflect/spell_shield)
  | "amber_deep" // (예전 amber-900/40: tenacity/dmg_reduce/dodge/windshield/protective_zone)
  | "red" // 공격/치명
  | "sky" // 이동/회복
  | "sky_soft" // (예전 sky-000/15: vision/revealed/true_sight)
  | "teal" // CC/제어
  | "pink" // 매혹/도발
  | "purple" // 마법 계열
  | "rose" // 방깎(물리)
  | "lime" // 체력/힐/부활
  | "zinc" // 은신/시야제한/면역류
  | "fuchsia" // 치감/그라운드/특수
  | "stone"; // 벽/특수/리셋

// ✅ TagId -> Tone 매핑(색상 관리의 "단일 진실 소스")
export const TAG_TONE: Partial<Record<TagId, Tone>> = {
  // --- note inline은 TagPill tone="note"로만 쓰고 여기선 보통 안 씀 ---

  // 🔶 amber (플래시/노랑)
  Q_FLASH: "amber",
  W_FLASH: "amber",
  E_FLASH: "amber",
  R_FLASH: "amber",
  INVULNERABLE: "amber",
  REFLECT: "amber",

  // 🔶 amber_dark (예전 amber-700/40)
  SLOW: "amber_dark",
  AS_DOWN: "amber_dark",
  AD_DOWN: "amber_dark",

  // 🔶 amber_deep (예전 amber-900/40)
  TENACITY: "amber_deep",
  DMG_REDUCE: "amber_deep",
  DODGE: "amber_deep",
  WINDSHIELD: "amber_deep",
  PROTECTIVE_ZONE: "amber_deep",
  TOWER_DODGE: "amber_deep",
  SPELL_SHIELD: "amber_deep",
  DAMAGE_NULLIFY: "amber_deep",
  INTERCEPT_PROJECTILE: "amber_deep",

  // 🔴 red (공격/치명/광란/흡혈)
  AD_UP: "red",
  AP_UP: "red",
  CRIT: "red",
  EXECUTE: "red",
  RANGE_UP: "red",
  PIERCE: "red",
  BERSERK: "red",
  LIFESTEAL: "red",

  // 🔵 sky (이동/회복/자원/저항)
  MS_UP: "sky",
  AS_UP: "sky",
  MANA_RESTORE: "sky",
  SLOW_RESIST: "sky",
  SLOW_IMMUNE: "sky",
  GHOSTING: "sky",

  // 🔵 sky_soft (예전 sky-000/15: 시야)
  VISION: "sky_soft",
  REVEALED: "sky_soft",
  TRUE_SIGHT: "sky_soft",
  VISION_CREATE: "sky_soft",
  POSITION_REVEAL: "sky_soft",
  POSITION_TRACK: "sky_soft",
  OUTLINE_REVEAL: "sky_soft",

  // 🟩 teal (CC/제어)
  HARD_CC: "teal",
  STUN: "teal",
  ROOT: "teal",
  AIRBORNE: "teal",
  SUSPENDING: "teal",
  KNOCKBACK: "teal",
  GRAB: "teal",
  SUPPRESS: "teal",
  TETHER: "teal",
  FEAR: "teal",
  CANCEL: "teal",
  POLYMORPH: "teal",
  SLEEP: "teal",
  INSEC_KICK: "teal",


  THE_COPYPASTA: "teal",

  
  // 🩷 pink (매혹/도발)
  CHARM: "pink",
  TAUNT: "pink",

  // 🟣 purple (마법 계열 / 침묵 / MR)
  MR_SHRED: "purple",
  MR_PEN: "purple",
  AR_MR_SHRED: "purple",
  AR_MR_PEN: "purple",
  SILENCE: "purple",

  // 🌹 rose (물리 방깎 / AR)
  AR_SHRED: "rose",
  AR_PEN: "rose",

  // 🟢 lime (힐/체력/부활)
  HEAL: "lime",
  MAX_HP_UP: "lime",
  REVIVE: "lime",

  // ⚫ zinc (은신/시야제한/면역류)
  CAMOUFLAGE: "zinc",
  INVISIBILITY: "zinc",
  NEARSIGHT: "zinc",
  BLIND: "zinc",
  CC_IMMUNE: "zinc",
  CC_CLEANSE: "zinc",
  UNSTOPPABLE: "zinc",
  PSEUDO_UNSTOPPABLE: "zinc",

  // 💜 fuchsia (치감/그라운드/TP류)
  GW: "fuchsia",
  GROUNDED: "fuchsia",
  ALLY_TP_OK: "fuchsia",

  // 🪨 stone (벽/특수/리셋)
  WALL: "stone",
  WALL_HOP: "stone",
  SHIELD_BREAK: "stone",
  AA_RESET: "stone",
  UNTARGETABLE: "stone",
};

// ✅ tag가 등록 안 되어있으면 default
export const toneOfTag = (tag: TagId): Tone => TAG_TONE[tag] ?? "default";

// ✅ pill 색상
export const TONE_CLASS: Record<Tone, string> = {
  default: "bg-slate-700/70 text-slate-100 ring-slate-600",
  note: "bg-transparent ring-0",

  amber: "bg-amber-400/70 text-amber-100 ring-amber-400/40",
  amber_dark: "bg-amber-700/40 text-amber-000 ring-amber-500/50",
  amber_deep: "bg-amber-900/40 text-amber-000 ring-amber-700/50",

  red: "bg-red-900/60 text-red-300 ring-red-600/70",

  sky: "bg-sky-600/50 text-sky-200 ring-sky-400/40",
  sky_soft: "bg-sky-000/15 text-sky-200 ring-sky-400/30",

  teal: "bg-teal-500/15 text-teal-200 ring-teal-400/30",
  pink: "bg-pink-400/50 text-pink-100 ring-pink-300/50",
  purple: "bg-purple-500/15 text-purple-200 ring-purple-400/30",
  rose: "bg-rose-500/20 text-rose-200 ring-rose-400/40",
  lime: "bg-lime-400/30 text-lime-100 ring-lime-400/40",
  zinc: "bg-zinc-800/70 text-zinc-200 ring-zinc-600/50",
  fuchsia: "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/30",
  stone: "bg-stone-500/20 text-stone-200 ring-stone-400/40",
};

// ✅ note용 텍스트 컬러 (inline)
export const NOTE_TONE_CLASS: Record<Tone, string> = {
  default: "text-slate-200",
  note: "text-slate-200",

  amber: "text-amber-300",
  amber_dark: "text-amber-300",
  amber_deep: "text-amber-300",

  red: "text-red-400 font-extrabold",

  sky: "text-sky-300",
  sky_soft: "text-sky-300",

  teal: "text-teal-300",
  pink: "text-pink-300",
  purple: "text-purple-300",
  rose: "text-rose-300",
  lime: "text-lime-300",
  zinc: "text-zinc-500",
  fuchsia: "text-fuchsia-300",
  stone: "text-stone-300",
};
