// app/components/SkillTagsPanel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { TAG_LABEL, TAG_DESC, type SkillKey, type TagId } from "../data/interactions";
import { CHAMPS } from "../data/champs/_index";
import { CHAMP_FORMS, hasForms, type FormKey } from "../data/interactions/forms";
import { useChampSpells } from "@/app/lib/useChampSpells";
import { stripHtml } from "@/app/lib/ddragon";

/* 🔹 태그 판별 */
const isFlashTag = (t: TagId) =>
  t === "Q_FLASH" || t === "W_FLASH" || t === "E_FLASH" || t === "R_FLASH";
const isAllyTpTag = (t: TagId) => t === "ALLY_TP_OK";
const isLifestealTag = (t: TagId) => t === "LIFESTEAL";
const isHealTag = (t: TagId) => t === "HEAL";
const isShieldTag = (t: TagId) => t === "SHIELD";
const isMaxHpUpTag = (t: TagId) => t === "MAX_HP_UP";
const isManaRestoreTag = (t: TagId) => t === "MANA_RESTORE";
const isEnergyRestoreTag = (t: TagId) => t === "ENERGY_RESTORE";



const isArShredTag = (t: TagId) => t === "AR_SHRED";
const isMrShredTag = (t: TagId) => t === "MR_SHRED";
const isArMrShredTag = (t: TagId) => t === "AR_MR_SHRED";
const isArPenetrationTag = (t: TagId) => t === "AR_PEN";
const isMrPenetrationTag = (t: TagId) => t === "MR_PEN";
const isArMrPenetrationTag = (t: TagId) => t === "AR_MR_PEN";


const isGwTag = (t: TagId) => t === "GW";
const isShieldBreakTag = (t: TagId) => t === "SHIELD_BREAK";
const isWallTag = (t: TagId) => t === "WALL";
const isSuppressionTag = (t: TagId) => t === "SUPPRESSION";
const isStunTag = (t: TagId) => t === "STUN";
const isRootTag = (t: TagId) => t === "ROOT";
const isSlowTag = (t: TagId) => t === "SLOW";
const isTauntTag = (t: TagId) => t === "TAUNT";
const isAirborneTag = (t: TagId) => t === "AIRBORNE";
const isSuspendingTag = (t: TagId) => t === "SUSPENDING";
const isCharmTag = (t: TagId) => t === "CHARM";
const isUnstoppableTag = (t: TagId) => t === "UNSTOPPABLE";
const isReviveTag = (t: TagId) => t === "REVIVE";
const isInvulnerableTag = (t: TagId) => t === "INVULNERABLE";
const isMovespeedUpTag = (t: TagId) => t === "MS_UP";
const isAsUpTag = (t: TagId) => t === "AS_UP";
const isAsDownTag = (t: TagId) => t === "AS_DOWN";
const isAdUpTag = (t: TagId) => t === "AD_UP";
const isAdDownTag = (t: TagId) => t === "AD_DOWN";
const isApUpTag = (t: TagId) => t === "AP_UP";

const isCritTag = (t: TagId) => t === "CRIT";
const isExecuteTag = (t: TagId) => t === "EXECUTE";
const isRangeUpTag = (t: TagId) => t === "RANGE_UP";
const isPierceTag = (t: TagId) => t === "PIERCE";


const isGrabTag = (t: TagId) => t === "GRAB";
const isDmgReduceTag = (t: TagId) => t === "DMG_REDUCE";
const isDodgeTag = (t: TagId) => t === "DODGE";
const isSilenceTag = (t: TagId) => t === "SILENCE";
const isGroundedTag = (t: TagId) => t === "GROUNDED";
const isRevealedTag = (t: TagId) => t === "REVEALED";
const isCcImmuneTag = (t: TagId) => t === "CC_IMMUNE";
const isCcCleanseTag = (t: TagId) => t === "CC_CLEANSE";
const isStealthTag = (t: TagId) => t === "STEALTH";
const isInvisibilityTag = (t: TagId) => t === "INVISIBILITY";
const isFearTag = (t: TagId) => t === "FEAR";
const isCancelTag = (t: TagId) => t === "CANCEL";
const isBerserkTag = (t: TagId) => t === "BERSERK";
const isBlindTag = (t: TagId) => t === "BLIND";
const isVisionTag = (t: TagId) => t === "VISION";
const isSuppressTag = (t: TagId) => t === "SUPPRESS";
const isSleepTag = (t: TagId) => t === "SLEEP";
const isPolymorphTag = (t: TagId) => t === "POLYMORPH";
const isSlowResistTag = (t: TagId) => t === "SLOW_RESIST";
const isSlowImmuneTag = (t: TagId) => t === "SLOW_IMMUNE";
const isGhostingTag = (t: TagId) => t === "GHOSTING";
const isProtectiveZoneTag = (t: TagId) => t === "PROTECTIVE_ZONE";
const isReflectTag = (t: TagId) => t === "REFLECT";
const isInsecKickTag = (t: TagId) => t === "INSEC_KICK";

const isTenacityTag = (t: TagId) => t === "TENACITY";
const isKnockbackTag = (t: TagId) => t === "KNOCKBACK";
const isSpellShieldTag = (t: TagId) => t === "SPELL_SHIELD";
const isNearsightTag = (t: TagId) => t === "NEARSIGHT";
const isAntiDashTag = (t: TagId) => t === "ANTI_DASH";
const isTrueSightTag = (t: TagId) => t === "TRUE_SIGHT";
const isWindshieldTag = (t: TagId) => t === "WINDSHIELD";
const isCamouflageTag = (t: TagId) => t === "CAMOUFLAGE";
const isHardCcTag = (t: TagId) => t === "HARD_CC";

const NOTE_COLOR: Partial<Record<TagId, string>> = {
  Q_FLASH: "text-amber-300 font-semibold",
  W_FLASH: "text-amber-300 font-semibold",
  E_FLASH: "text-amber-300 font-semibold",
  R_FLASH: "text-amber-300 font-semibold",

  ALLY_TP_OK: "text-fuchsia-300 font-semibold",
  WALL_HOP: "text-stone-300 font-semibold",

  AA_RESET: "text-stone-300 font-semibold",
  UNTARGETABLE: "text-slate-200 font-semibold",
  TOWER_DODGE: "text-slate-200 font-semibold",

  SHIELD_BREAK: "text-stone-300 font-semibold",

  MS_UP: "text-sky-300 font-semibold",
  AS_UP: "text-sky-300 font-semibold",
  AS_DOWN: "text-amber-500 font-semibold",
  AD_UP: "text-red-500 font-extrabold",
  AD_DOWN: "text-amber-500 font-semibold",
  AP_UP: "text-red-500 font-extrabold",

  CRIT: "text-red-500 font-extrabold",
  EXECUTE: "text-red-500 font-extrabold",
  RANGE_UP: "text-red-500 font-extrabold",
  PIERCE: "text-red-500 font-extrabold",


  SLOW_RESIST: "text-sky-300 font-semibold",
  SLOW_IMMUNE: "text-sky-300 font-semibold",
  GHOSTING: "text-sky-300 font-semibold",

  TENACITY: "text-amber-200 font-semibold",
  DMG_REDUCE: "text-amber-200 font-semibold",
  DODGE: "text-amber-200 font-semibold",

  AR_SHRED: "text-rose-300 font-semibold",
  MR_SHRED: "text-purple-300 font-semibold",
  AR_MR_SHRED: "text-purple-300 font-semibold",
  AR_PEN: "text-rose-300 font-semibold",
  MR_PEN: "text-purple-300 font-semibold",
  AR_MR_PEN: "text-purple-300 font-semibold",
  GW: "text-fuchsia-300 font-semibold",

  ANTI_DASH: "text-teal-300 font-semibold",
  KNOCKBACK: "text-teal-300 font-semibold",
  AIRBORNE: "text-teal-300 font-semibold",
  SUSPENDING: "text-teal-300 font-semibold",

  GRAB: "text-teal-300 font-semibold",
  SUPPRESS: "text-teal-300 font-semibold",
  SUPPRESSION: "text-teal-300 font-semibold",
  ROOT: "text-teal-300 font-semibold",

  HARD_CC: "text-teal-300 font-semibold",
  STUN: "text-teal-300 font-semibold",

  SLOW: "text-amber-500 font-semibold",

  CHARM: "text-pink-300 font-semibold",
  SLEEP: "text-teal-300 font-semibold",
  TAUNT: "text-pink-300 font-semibold",

  SILENCE: "text-violet-300 font-semibold",
  GROUNDED: "text-fuchsia-300 font-semibold",
  FEAR: "text-teal-300 font-semibold",
  CANCEL: "text-teal-300 font-semibold",
  BERSERK: "text-red-500 font-extrabold",

  NEARSIGHT: "text-zinc-300 font-semibold",
  BLIND: "text-zinc-600 font-semibold",
  POLYMORPH: "text-teal-300 font-semibold",

  SPELL_SHIELD: "text-amber-300 font-semibold",
  CC_IMMUNE: "text-zinc-300 font-semibold",
  CC_CLEANSE: "text-zinc-300 font-semibold",
  STEALTH: "text-zinc-500 font-semibold",
  INVISIBILITY: "text-zinc-500 font-semibold",
  CAMOUFLAGE: "text-zinc-500 font-semibold",
  UNSTOPPABLE: "text-zinc-300 font-semibold",
  VISION: "text-sky-300 font-semibold",
  REVEALED: "text-sky-300 font-semibold",
  TRUE_SIGHT: "text-sky-300 font-semibold",

  REVIVE: "text-lime-300 font-semibold",
  INVULNERABLE: "text-amber-300 font-semibold",
  REFLECT: "text-amber-300 font-semibold",
  INSEC_KICK: "text-amber-300 font-semibold",

  WINDSHIELD: "text-amber-200 font-semibold",
  PROTECTIVE_ZONE: "text-amber-200 font-semibold",

  LIFESTEAL: "text-red-500 font-extrabold",
  HEAL: "text-lime-300 font-semibold",
  SHIELD: "text-slate-200 font-semibold",
  MAX_HP_UP: "text-lime-300 font-semibold",
  MANA_RESTORE: "text-sky-300 font-semibold",
  ENERGY_RESTORE: "text-amber-300 font-semibold",




  WALL: "text-neutral-300 font-semibold",
};

const DD_ID_MAP: Record<string, string> = {
  reksai: "RekSai",
  leesin: "LeeSin",
  masteryi: "MasterYi",
  drmundo: "DrMundo",
  missfortune: "MissFortune",
  xinzhao: "XinZhao",
  aurelionsol: "AurelionSol",
  wukong: "MonkeyKing",
  jarvaniv: "JarvanIV",
  kogmaw: "KogMaw",
  ksante: "KSante",
  tahmkench: "TahmKench",
  twistedfate: "TwistedFate",
};

const toDdragonId = (id: string) => {
  const key = id.toLowerCase();
  if (DD_ID_MAP[key]) return DD_ID_MAP[key];

  return id
    .split("_")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join("");
};


function TagPill({
  text,
  tip,
  tone = "default",
  className,
}: {
  text: string;
  tip?: string;
  className?: string;
  tone?:
    | "default"
    | "note"
    | "flash"
    | "tp"
    | "lifesteal"
    | "heal"
    | "shield"
    | "max_hp_up"
    | "mana_restore"


    | "ms_up"
    | "as_up"
    | "as_down"
    | "ad_up"
    | "ad_down"
    | "ap_up"

    | "crit"
    | "execute"
    | "range_up"
    | "pierce"


    | "shield_break"
    | "wall"
    | "suppress"
    | "suppression"
    | "ar_shred"
    | "mr_shred"
    | "ar_mr_shred"
    | "ar_pen"
    | "mr_pen"
    | "ar_mr_pen"
    | "gw"

    | "aa_reset"
    | "wall_hop"
    | "hard_cc"
    | "stun"
    | "root"
    | "slow"
    | "taunt"
    | "anti_dash"
    | "knockback"
    | "airborne"
    | "suspending"
    | "charm"
    | "sleep"
    | "unstoppable"
    | "revive"
    | "grab"
    | "tenacity"
    | "dmg_reduce"
    | "dodge"
    | "silence"
    | "grounded"
    | "vision"
    | "revealed"
    | "true_sight"
    | "spell_shield"
    | "cc_immune"
    | "cc_cleanse"
    | "stealth"
    | "invisibility"
    | "camouflage"
    | "slow_resist"
    | "slow_immune"
    | "ghosting"
    | "windshield"
    | "protective_zone"
    | "fear"
    | "cancel"
    | "berserk"
    | "nearsight"
    | "blind"
    | "polymorph"
    | "reflect"
    | "insec_kick"
    | "invulnerable";
}) {
  const base =
    tone === "note"
      ? "inline cursor-help hover:opacity-90"
      : "inline-flex items-center justify-center h-6 rounded-md font-semibold ring-1 leading-none";

  const size =
    tone === "note"
      ? ""
      : tone === "flash" || tone === "aa_reset" || tone === "wall_hop"
      ? "px-1 py-0.5 text-[12px]"
      : "px-1 py-0.5 text-xs";

  const styles =
    tone === "note"
      ? "bg-transparent ring-0 px-0 py-0"
      : tone === "flash"
      ? "bg-amber-500/20 text-amber-200 ring-amber-400/40"
      : tone === "aa_reset"
      ? "bg-orange-500/20 text-orange-200 ring-orange-400/40"
      : tone === "wall_hop"
      ? "bg-stone-500/20 text-stone-200 ring-stone-400/40"
      : tone === "lifesteal"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "heal"
      ? "bg-lime-400/30 text-lime-100 ring-lime-400/40"
      : tone === "shield"
      ? "bg-slate-300/20 text-slate-100 ring-slate-300/40"
      : tone === "max_hp_up"
      ? "bg-lime-400/30 text-lime-100 ring-lime-400/40"
      : tone === "mana_restore"
      ? "bg-sky-600/50 text-sky-200 ring-sky-400/40"
      : tone === "ms_up"
      ? "bg-sky-600/50 text-sky-200 ring-sky-400/40"
      : tone === "as_up"
      ? "bg-sky-600/50 text-sky-200 ring-sky-400/40"
      : tone === "as_down"
      ? "bg-amber-700/40 text-amber-200 ring-amber-500/50"
      : tone === "ad_up"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "ad_down"
      ? "bg-amber-700/40 text-amber-200 ring-amber-500/50"
      : tone === "ap_up"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "crit"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "execute"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "range_up"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "pierce"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "shield_break"
      ? "bg-stone-500/20 text-stone-200 ring-stone-400/40"
      : tone === "wall"
      ? "bg-neutral-500/20 text-neutral-200 ring-neutral-400/40"
      : tone === "suppress"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "suppression"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"

      : tone === "ar_shred"
      ? "bg-rose-500/20 text-rose-200 ring-rose-400/40"
      : tone === "mr_shred"
      ? "bg-purple-500/15 text-purple-200 ring-purple-400/30"
      : tone === "ar_mr_shred"
      ? "bg-purple-500/15 text-purple-200 ring-purple-400/30"
      : tone === "ar_pen"
      ? "bg-rose-500/20 text-rose-200 ring-rose-400/40"
      : tone === "mr_pen"
      ? "bg-purple-500/15 text-purple-200 ring-purple-400/30"
      : tone === "ar_mr_pen"
      ? "bg-purple-500/15 text-purple-200 ring-purple-400/30"



      : tone === "gw"
      ? "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/30"
      : tone === "tp"
      ? "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/30"
      : tone === "hard_cc"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "stun"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "root"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "slow"
      ? "bg-amber-700/40 text-amber-200 ring-amber-500/50"
      : tone === "taunt"
      ? "bg-pink-400/50 text-pink-100 ring-pink-300/50"
      : tone === "anti_dash"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "knockback"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "airborne"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "suspending"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "charm"
      ? "bg-pink-400/50 text-pink-100 ring-pink-300/50"
      : tone === "sleep"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "revive"
      ? "bg-lime-500/20 text-lime-200 ring-lime-400/40"
      : tone === "invulnerable"
      ? "bg-amber-700/40 text-amber-200 ring-amber-500/50"
      : tone === "reflect"
      ? "bg-amber-700/40 text-amber-200 ring-amber-500/50"
      : tone === "insec_kick"
      ? "bg-amber-500/20 text-amber-200 ring-amber-400/40"
      : tone === "grab"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "tenacity"
      ? "bg-amber-900/40 text-amber-000 ring-amber-700/50"
      : tone === "dmg_reduce"
      ? "bg-amber-900/40 text-amber-000 ring-amber-700/50"
      : tone === "dodge"
      ? "bg-amber-900/40 text-amber-000 ring-amber-700/50"
      : tone === "silence"
      ? "bg-violet-500/15 text-violet-200 ring-violet-400/30"
      : tone === "grounded"
      ? "bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/30"
      : tone === "vision"
      ? "bg-sky-000/15 text-sky-200 ring-sky-400/30"
      : tone === "revealed"
      ? "bg-sky-000/15 text-sky-200 ring-sky-400/30"
      : tone === "true_sight"
      ? "bg-sky-000/15 text-sky-200 ring-sky-400/30"
      : tone === "spell_shield"
      ? "bg-amber-700/40 text-amber-200 ring-amber-500/50"
      : tone === "cc_immune"
      ? "bg-zinc-500/20 text-zinc-200 ring-zinc-400/40"
      : tone === "cc_cleanse"
      ? "bg-zinc-500/20 text-zinc-200 ring-zinc-400/40"
      : tone === "stealth"
      ? "bg-zinc-800/70 text-zinc-200 ring-zinc-600/50"
      : tone === "invisibility"
      ? "bg-zinc-800/70 text-zinc-200 ring-zinc-600/50"
      : tone === "camouflage"
      ? "bg-zinc-800/70 text-zinc-200 ring-zinc-600/50"
      : tone === "slow_resist"
      ? "bg-sky-600/50 text-sky-200 ring-sky-400/40"
      : tone === "slow_immune"
      ? "bg-sky-600/50 text-sky-200 ring-sky-400/40"
      : tone === "ghosting"
      ? "bg-sky-600/50 text-sky-200 ring-sky-400/40"
      : tone === "windshield"
      ? "bg-amber-900/40 text-amber-000 ring-amber-700/50"
      : tone === "protective_zone"
      ? "bg-amber-900/40 text-amber-000 ring-amber-700/50"
      : tone === "fear"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "cancel"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "berserk"
      ? "bg-red-900/60 text-red-300 ring-red-600/70"
      : tone === "nearsight"
      ? "bg-zinc-800/70 text-zinc-200 ring-zinc-600/50"
      : tone === "blind"
      ? "bg-zinc-800/70 text-zinc-200 ring-zinc-600/50"
      : tone === "polymorph"
      ? "bg-teal-500/15 text-teal-200 ring-teal-400/30"
      : tone === "unstoppable"
      ? "bg-zinc-500/20 text-zinc-200 ring-zinc-400/40"
      : "bg-slate-700/70 text-slate-100 ring-slate-600";

  if (!tip) {
    return (
      <span className={`${base} ${size} ${styles} ${className ?? ""}`}>
        {text}
      </span>
    );
  }

  return (
    <span className="relative inline-flex group">
      <span className={`${base} ${size} ${styles} ${className ?? ""}`}>
        {text}
      </span>

      <span className="pointer-events-none absolute left-1/2 top-0 z-50 hidden -translate-x-1/2 -translate-y-[110%] group-hover:flex flex-col items-center">
        <span className="inline-block w-max whitespace-pre break-keep text-center leading-snug rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold text-slate-100 ring-1.5 ring-white/10 shadow-lg">
          {tip}
        </span>
        <span className="mt-0 block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95" />
      </span>
    </span>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function SkillLabelWithTip({
  labelText,
  tip,
  champId,
  skillKey,
}: {
  labelText: string;
  tip?: string;
  champId: string | null;
  skillKey: SkillKey;
}) {

  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    arrowLeft: number;
  } | null>(null);

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const margin = 12;
    const anchorCenterX = a.left + a.width / 2;

    const left = clamp(
      anchorCenterX,
      margin + t.width / 2,
      vw - margin - t.width / 2
    );

    const top = a.top - 10;

    const arrowLeft = clamp(
      anchorCenterX - (left - t.width / 2),
      10,
      t.width - 10
    );

    setPos({ left, top, arrowLeft });
  };

  const onEnter = () => {
    setOpen(true);

    // DOM/ref 안정화용 2프레임 측정
    requestAnimationFrame(() => {
      measure();
      requestAnimationFrame(measure);
    });
  };

  const onLeave = () => {
    setOpen(false);
    setPos(null);
  };

  if (!tip) return <span>{labelText}</span>;

  return (
    <span
      ref={anchorRef}
      className="relative inline-flex cursor-help"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span>{labelText}</span>

      {open && (
        <span
          className="pointer-events-none fixed z-[9999]"
          style={{
            left: pos?.left ?? 0,
            top: pos?.top ?? 0,
            transform: "translate(-50%, -100%)",
          }}
        >
          <span
            ref={tipRef}
            className="block w-[520px] max-w-[calc(100vw-24px)]
                       whitespace-pre-line break-normal text-left
                       leading-snug rounded-lg bg-black/95
                       px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
  {champId && (
    <img
      src={`/spells/${champId}/${skillKey}.webp`}
      alt={`${champId} ${skillKey}`}
      className="w-12 h-12 rounded-md ring-1 ring-white/10"
      loading="lazy"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  )}
</div>

            {tip}
          </span>

          <span
            className="block h-0 w-0 border-x-[6px] border-t-[6px]
                       border-x-transparent border-t-black/95"
            style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
          />
        </span>
      )}
    </span>
  );
}



export default function SkillTagsPanel({
  champId,
  lang,
}: {
  champId: string | null;
  lang: "ko" | "en";
}) {
  const [form, setForm] = useState<FormKey>("base");

  useEffect(() => {
    setForm("base");
  }, [champId]);

  const champ = champId ? CHAMPS[champId as keyof typeof CHAMPS] : null;
  const notes = champ?.notes ?? [];

  // ✅ Data Dragon (스킬 설명) 준비
  const locale = lang === "ko" ? "ko_KR" : "en_US";
  const ddragonId = champId ? toDdragonId(champId) : null;
  const ddragon = useChampSpells(ddragonId, locale);
  const loadingText = locale === "ko_KR" ? "불러오는 중..." : "Loading...";

  const label: Record<SkillKey, string> = {
    P: lang === "ko" ? "P스킬" : "Passive",
    Q: "Q스킬",
    W: "W스킬",
    E: "E스킬",
    R: "R스킬",
    ETC: lang === "ko" ? "기타" : "Other",
  };

    const getSpellTip = (k: SkillKey) => {
    if (!ddragonId) return undefined;
    if (k !== "P" && k !== "Q" && k !== "W" && k !== "E" && k !== "R") return undefined;

    // P(패시브)
    if (k === "P") {
      const p = ddragon?.passive;
      if (!p) return loadingText;

      const body = stripHtml(p.description)
        .replace(/\{\{[^}]+\}\}/g, "") // {{ ... }} 제거
        .replace(/\s+\n/g, "\n")
        .replace(/[ \t]{2,}/g, " ")
        .trim();

      return `P - ${p.name}\n${body}`;
    }

    // Q/W/E/R
    const idx = k === "Q" ? 0 : k === "W" ? 1 : k === "E" ? 2 : 3;
    const s = ddragon?.spells?.[idx];
    if (!s) return loadingText;

    const body = stripHtml(s.tooltip || s.description)
      .replace(/\{\{[^}]+\}\}/g, "") // {{ ... }} 제거
      .replace(/\s+\n/g, "\n")
      .replace(/[ \t]{2,}/g, " ")
      .trim();

    return `${k} - ${s.name}\n${body}`;
  };



  const renderRow = (k: SkillKey) => {
    const tags: TagId[] = hasForms(champId ?? "")
      ? (champ?.skills?.[form]?.[k] ?? [])
      : (champ?.skills?.[k] ?? []);

    if (k === "ETC" && tags.length === 0) return null;

    const spellTip = getSpellTip(k);

    return (
      <div className="grid grid-cols-[56px_1fr] gap-x-3 items-center py-1 min-h-[40px]">
        <div
          className={`w-[56px] text-sm font-bold text-center leading-none flex items-center justify-center ${
            k === "R" ? "text-yellow-400" : k === "P" ? "text-slate-200" : "text-sky-300"
          }`}
        >
          <SkillLabelWithTip
  labelText={label[k]}
  tip={spellTip}
  champId={champId}
  skillKey={k}
/>
        </div>

        <div className="flex flex-wrap items-center gap-2 min-h-[28px]">
          {tags.length > 0 ? (
            tags.map((t) => {
              const labelData = TAG_LABEL[t];
              if (!labelData) return null;

              const tone = isFlashTag(t)
                ? "flash"
                : isHardCcTag(t)
                ? "hard_cc"
                : isStunTag(t)
                ? "stun"
                : isRootTag(t)
                ? "root"
                : isSlowTag(t)
                ? "slow"
                : isTauntTag(t)
                ? "taunt"
                : isAntiDashTag(t)
                ? "anti_dash"
                : isKnockbackTag(t)
                ? "knockback"
                : isAirborneTag(t)
                ? "airborne"
                : isSuspendingTag(t)
                ? "suspending"
                : isGrabTag(t)
                ? "grab"
                : isCharmTag(t)
                ? "charm"
                : isSleepTag(t)
                ? "sleep"
                : isSuppressTag(t)
                ? "suppress"
                : isSuppressionTag(t)
                ? "suppression"
                : isSilenceTag(t)
                ? "silence"
                : isGroundedTag(t)
                ? "grounded"
                : isVisionTag(t)
                ? "vision"
                : isRevealedTag(t)
                ? "revealed"
                : isTrueSightTag(t)
                ? "true_sight"
                : isReviveTag(t)
                ? "revive"
                : isInvulnerableTag(t)
                ? "invulnerable"
                : isReflectTag(t)
                ? "reflect"
                : isInsecKickTag(t)
                ? "insec_kick"
                : isWallTag(t)
                ? "wall"
                : isSpellShieldTag(t)
                ? "spell_shield"              
                : isCcImmuneTag(t)
                ? "cc_immune"
                : isCcCleanseTag(t)
                ? "cc_cleanse"
                : isFearTag(t)
                ? "fear"
                : isCancelTag(t)
                ? "cancel"
                : isBerserkTag(t)
                ? "berserk"
                : isNearsightTag(t)
                ? "nearsight"
                : isBlindTag(t)
                ? "blind"
                : isPolymorphTag(t)
                ? "polymorph"
                : isStealthTag(t)
                ? "stealth"
                : isInvisibilityTag(t)
                ? "invisibility"
                : isCamouflageTag(t)
                ? "camouflage"
                : isSlowResistTag(t)
                ? "slow_resist"
                : isSlowImmuneTag(t)
                ? "slow_immune"
                : isGhostingTag(t)
                ? "ghosting"
                : isWindshieldTag(t)
                ? "windshield"
                : isProtectiveZoneTag(t)
                ? "protective_zone"
                : isUnstoppableTag(t)
                ? "unstoppable"
                : isShieldBreakTag(t)
                ? "shield_break"
                : isLifestealTag(t)
                ? "lifesteal"
                : isHealTag(t)
                ? "heal"
                : isShieldTag(t)
                ? "shield"
                : isMaxHpUpTag(t)
                ? "max_hp_up"
                : isManaRestoreTag(t)
                ? "mana_restore"
                : isEnergyRestoreTag(t)
                ? "flash"
                : isMovespeedUpTag(t)
                ? "ms_up"
                : isAsUpTag(t)
                ? "as_up"
                : isAsDownTag(t)
                ? "as_down"
                : isAdUpTag(t)
                ? "ad_up"
                : isAdDownTag(t)
                ? "ad_down"
                : isApUpTag(t)
                ? "ap_up"
                : isCritTag(t)
                ? "crit"
                : isExecuteTag(t)
                ? "execute"
                : isRangeUpTag(t)
                ? "range_up"
                : isPierceTag(t)
                ? "pierce"
                : isTenacityTag(t)
                ? "tenacity"
                : isDmgReduceTag(t)
                ? "dmg_reduce"
                : isDodgeTag(t)
                ? "dodge"
                : isArShredTag(t)
                ? "ar_shred"
                : isMrShredTag(t)
                ? "mr_shred"
                : isArMrShredTag(t)
                ? "ar_mr_shred"
                 : isArPenetrationTag(t)
                ? "ar_pen"
                : isMrPenetrationTag(t)
                ? "mr_pen"
                : isArMrPenetrationTag(t)
                ? "ar_mr_pen"
                : isGwTag(t)
                ? "gw"
                : isAllyTpTag(t)
                ? "tp"
                : "default";

              const tip = TAG_DESC?.[t]?.[lang];
              return <TagPill key={t} text={labelData[lang]} tone={tone} tip={tip} />;
            })
          ) : (
            <span className="text-sm text-slate-500">-</span>
          )}
        </div>
      </div>
    );
  };

  const formLabel = champId && hasForms(champId) ? CHAMP_FORMS[champId] : null;

  return (
    <div className="space-y-2">
      {/* 🔹 폼 토글 영역 */}
      <div className="h-10 flex items-center justify-end gap-2">
        {formLabel ? (
          <>
            <button
              onClick={() => setForm("base")}
              className={`px-3 py-1 rounded-xl text-xm font-bold ${
                form === "base" ? "bg-yellow-400 text-black" : "bg-slate-800/50 text-slate-200"
              }`}
            >
              {formLabel.base[lang]}
            </button>

            <button
              onClick={() => setForm("alt")}
              className={`px-3 py-1 rounded-xl text-xm font-bold ${
                form === "alt" ? "bg-yellow-400 text-black" : "bg-slate-800/50 text-slate-200"
              }`}
            >
              {formLabel.alt[lang]}
            </button>

            {formLabel.alt2 && (
              <button
                onClick={() => setForm("alt2")}
                className={`px-3 py-1 rounded-xl text-xm font-bold ${
                  form === "alt2" ? "bg-yellow-400 text-black" : "bg-slate-800/50 text-slate-200"
                }`}
              >
                {formLabel.alt2[lang]}
              </button>
            )}
          </>
        ) : (
          <>
            <div className="px-3 py-1 rounded-xl text-xm font-bold bg-slate-800/30 text-slate-500">
              기본폼
            </div>
            <div className="px-3 py-1 rounded-xl text-xm font-bold bg-slate-800/30 text-slate-500">
              변환폼
            </div>
          </>
        )}
      </div>

      {/* 🔒 스킬 행 */}
      <div className="space-y-1">
        {renderRow("P")}
        {renderRow("Q")}
        {renderRow("W")}
        {renderRow("E")}
        {renderRow("R")}
        {renderRow("ETC")}
      </div>

      {/* 🔹 노트 */}
      {notes.length > 0 && (
        <div className="mt-3 rounded-xl bg-slate-800/40 ring-1 ring-white/10 p-3">
          <div className="text-sm font-bold text-slate-200 mb-2">
            {lang === "ko" ? "노트" : "Notes"}
          </div>

          <ul className="space-y-2 text-sm text-slate-200">
            {notes.map((n, i) => (
              <li key={i} className="flex gap-2 whitespace-pre-line">
                <span className="text-slate-300">•</span>
                <span>
                  {n.split(/(\[\[.*?\]\])/g).map((part, idx) => {
                    const raw = part.match(/^\[\[(.+?)\]\]$/)?.[1];
                    const token = raw?.trim() as TagId | undefined;

                    if (token && TAG_LABEL[token]) {
                      return (
                        <TagPill
                          key={idx}
                          text={TAG_LABEL[token][lang]}
                          tip={TAG_DESC?.[token]?.[lang]}
                          tone="note"
                          className={NOTE_COLOR[token]}
                        />
                      );
                    }

                    return <span key={idx}>{part}</span>;
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
