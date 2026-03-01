// app/components/TagGlossaryButton.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TAG_LABEL, TAG_DESC, type TagId } from "../data/interactions";
import { toneOfTag, TONE_CLASS } from "../data/interactions/tagTone";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function TagPill({
  text,
  tip,
  tone = "default",
}: {
  text: string;
  tip?: string;
  tone?: keyof typeof TONE_CLASS;
}) {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLSpanElement | null>(null);

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number; arrowLeft: number } | null>(null);

  const base =
  "flex items-center justify-center rounded-md font-semibold ring-1 align-top px-2 py-[3px] text-[12px]";
  const toneCls = TONE_CLASS[tone] ?? TONE_CLASS.default;

  const measure = () => {
    const a = anchorRef.current?.getBoundingClientRect();
    const t = tipRef.current?.getBoundingClientRect();
    if (!a || !t) return;

    const vw = window.innerWidth;
    const margin = 12;

    const anchorCenterX = a.left + a.width / 2;

    // 화면 기준으로 툴팁 center를 clamp
    const left = clamp(anchorCenterX, margin + t.width / 2, vw - margin - t.width / 2);

    // anchor 위쪽으로 띄우기
    const top = a.top - 10;

    // 화살표 위치도 툴팁 내부에서 clamp
    const arrowLeft = clamp(anchorCenterX - (left - t.width / 2), 10, t.width - 10);

    setPos({ left, top, arrowLeft });
  };

  const onEnter = () => {
    if (!tip) return;
    setOpen(true);
    requestAnimationFrame(() => {
      measure();
      requestAnimationFrame(measure);
    });
  };

  const onLeave = () => {
    setOpen(false);
    setPos(null);
  };

  return (
  <span
    ref={anchorRef}
    className="relative flex"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    <span className={`${base} ${toneCls}`}>{text}</span>

      {open && tip && (
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
            className="block w-max max-w-[min(520px,calc(100vw-24px))]
                       whitespace-pre break-keep text-center leading-snug
                       rounded-lg bg-black/95 px-3 py-2 text-[14px] font-semibold
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
            {tip}
          </span>

          <span
            className="block h-0 w-0 border-x-[6px] border-t-[6px] border-x-transparent border-t-black/95"
            style={{ marginLeft: (pos?.arrowLeft ?? 0) - 6 }}
          />
        </span>
      )}
    </span>
  );
}


function renderWithTokens(text: string, lang: "ko" | "en") {
  const parts = text.split(/(\[\[.*?\]\])/g);

  return (
    <div className="flex flex-wrap items-start gap-x-0.5 gap-y-1.5">
      {parts.map((part, idx) => {
        const raw = part.match(/^\[\[(.+?)\]\]$/)?.[1];
        const token = raw?.trim() as TagId | undefined;

        if (token && TAG_LABEL[token]) {
          const tone = toneOfTag(token);
          return (
            <TagPill
              key={idx}
              text={TAG_LABEL[token][lang]}
              tip={TAG_DESC?.[token]?.[lang]}
              tone={tone}
            />
          );
        }

        // 일반 텍스트 (ex: "기본버프 :")
        return (
          <span key={idx} className="text-slate-300 font-semibold">
            {part}
          </span>
        );
      })}
    </div>
  );
}

type Line = string | null;

function splitLeftRight(lines: Line[]) {
  const left: Line[] = [];
  const right: Line[] = [];
  let mode: "left" | "right" = "left"; // 기본은 left로 쌓기

  for (const t of lines) {
    if (t === "[[LEFT_START]]") {
      mode = "left";
      continue;
    }
    if (t === "[[RIGHT_START]]") {
      mode = "right";
      continue;
    }
    if (t === "[[LEFT_END]]" || t === "[[RIGHT_END]]") {
      mode = "left";
      continue;
    }

    if (mode === "left") left.push(t);
    else right.push(t);
  }

  return { left, right };
}

export default function TagGlossaryButton({ lang }: { lang: "ko" | "en" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const title = lang === "ko" ? "말풍선 사전" : "Tags";

  // ✅ 마커로 좌/우 섹션 구분
  const lines = useMemo<Line[]>(
    () => [
      "[[LEFT_START]]",

      lang === "ko" ? "버프류" : "Buff",

      lang === "ko"
        ? "기본버프  :  [[MS_UP]]  [[AS_UP]]  [[AD_UP]]  [[AP_UP]]  [[RANGE_UP]]  [[CRIT]]"
        : "Normal Buff  :  [[MS_UP]]  [[AS_UP]]  [[AD_UP]]  [[AP_UP]]  [[RANGE_UP]]  [[CRIT]]",

      lang === "ko"
        ? "특수버프  :  [[TENACITY]]  [[DODGE]]  [[DMG_REDUCE]]  [[INVULNERABLE]]  [[REVIVE]]"
        : "Special Buff  :  [[TENACITY]]  [[DODGE]]  [[DMG_REDUCE]]  [[INVULNERABLE]]  [[REVIVE]]",

      "                  [[GHOSTING]]  [[SLOW_RESIST]]  [[SLOW_IMMUNE]]",
      "                  [[CC_CLEANSE]]  [[CC_IMMUNE]]  [[UNSTOPPABLE]]",

      null,

      
      lang === "ko" ? "특수 기능" : "Special Technique",
      "[[AA_RESET]]  [[UNTARGETABLE]]  [[TOWER_DODGE]]",
      "[[SHIELD_BREAK]]  [[PIERCE]]  [[EXECUTE]]",
      "[[WALL]]  [[WALL_HOP]]  [[ALLY_TP_OK]]",

      null,
      null,
      lang === "ko" ? "회복" : "HEAL",
      "[[HEAL]]  [[SHIELD]]  [[MAX_HP_UP]]  [[LIFESTEAL]]",
      "[[MANA_RESTORE]]  [[ENERGY_RESTORE]]",

      null,
      null,
      lang === "ko" ? "시야 / 은신" : "Sight / Staelth",
      "[[VISION]]  [[REVEALED]]  [[TRUE_SIGHT]]",
      "[[STEALTH]]  [[CAMOUFLAGE]]  [[INVISIBILITY]]",
      "[[NEARSIGHT]]  [[BLIND]]",


      "[[LEFT_END]]",

      "[[RIGHT_START]]",




      lang === "ko" ? "디버프류" : "Debuff",
      lang === "ko"
        ? "기본 디버프  :  [[SLOW]] [[AS_DOWN]] [[AD_DOWN]]"
        : "Debuff  :  [[SLOW]] [[AS_DOWN]] [[AD_DOWN]]",
      lang === "ko"
        ? "특수 디버프  :  [[NEARSIGHT]]  [[BLIND]]  [[GW]]" 
        : "Special Debuff  :  [[NEARSIGHT]]  [[BLIND]]  [[GW]]",
    null,
    null,
    null,
    null,
      lang === "ko" ? "방어 관련 (깍과 관은 다른것)" : "Armor / Magic",
      "[[AR_SHRED]]  [[MR_SHRED]]  [[AR_MR_SHRED]]",
      "[[AR_PEN]]  [[MR_PEN]]  [[AR_MR_PEN]]",

    null,
    lang === "ko"
        ? "특수 개인스킬"  : "Specil Skills",
        "[[REFLECT]]  [[WINDSHIELD]]  [[SPELL_SHIELD]]  [[PROTECTIVE_ZONE]]", "[[POLYMORPH]]  [[BERSERK]]", 
        "[[ANTI_DASH]]  [[GROUNDED]]",
    null,
    null,



      lang === "ko"
        ? "점멸류  :  [[Q_FLASH]]  [[W_FLASH]]  [[E_FLASH]]  [[R_FLASH]]  [[INSEC_KICK]]"
        : "FLASH  :  [[Q_FLASH]]  [[W_FLASH]]  [[E_FLASH]]  [[R_FLASH]]  [[INSEC_KICK]]",

    null,
    

      "[[HARD_CC]]",

      lang === "ko"
        ? "클린즈 가능  :  [[STUN]]  [[ROOT]]  [[SUSPENDING]]  [[SLEEP]]  [[FEAR]]  [[CHARM]]  [[TAUNT]]"
        : "Cleanseable  :  [[STUN]]  [[ROOT]]  [[SUSPENDING]]  [[SLEEP]]  [[FEAR]]  [[CHARM]]  [[TAUNT]]",

      lang === "ko"
        ? "클린즈 불가능  :  [[KNOCKBACK]]  [[GRAB]]  [[AIRBORNE]]  [[SUPPRESS]]  [[WALL]]"
        : "Uncleanseable  :  [[KNOCKBACK]]  [[GRAB]]  [[AIRBORNE]]  [[SUPPRESS]]  [[WALL]]",

      lang === "ko"
        ? "일반 CC  :  [[SLOW]]  [[SILENCE]]  [[TETHER]]  [[CANCEL]]"
        : "Normal CC  :  [[SLOW]]  [[SILENCE]]  [[TETHER]]  [[CANCEL]]",


      "[[RIGHT_END]]",
    ],
    [lang]
  );

  const { left, right } = useMemo(() => splitLeftRight(lines), [lines]);

  return (
    <>
      <button
  type="button"
  onClick={() => setOpen(true)}
  className="px-3 py-2 rounded-xl text-sm font-bold border bg-slate-800/60 border-white/10 hover:bg-slate-800/80"
>
  {lang === "ko" ? "말풍선" : "Tags"}
</button>


      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onMouseDown={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60" />

          <div
            className="relative w-[960px] max-w-[calc(100vw-24px)] max-h-[calc(100vh-24px)]
                       rounded-2xl bg-slate-900 ring-1 ring-white/10 shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="text-lg font-extrabold text-yellow-400">
                {title}
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-bold bg-slate-800/60 border border-white/10 hover:bg-slate-800/80"
              >
                {lang === "ko" ? "닫기" : "Close"}
              </button>
            </div>

            <div className="p-6 overflow-auto max-h-[calc(100vh-120px)] text-slate-200 text-sm leading-relaxed text-left">
              <div className="grid grid-cols-2 gap-x-10">
                {/* LEFT */}
                <div className="space-y-3">
                  {left.map((t, i) =>
                    t === null ? (
                      <div key={i} className="h-4" />
                    ) : (
                      <div key={i}>
                        {renderWithTokens(t, lang)}
                      </div>
                    )
                  )}
                </div>

                {/* RIGHT */}
                <div className="space-y-3">
                  {right.map((t, i) =>
                    t === null ? (
                      <div key={i} className="h-4" />
                    ) : (
                      <div key={i}>
                        {renderWithTokens(t, lang)}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
