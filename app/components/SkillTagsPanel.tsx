// app/components/SkillTagsPanel.tsx
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { TAG_LABEL, TAG_DESC, type SkillKey, type TagId } from "../data/interactions";
import { CHAMPS } from "../data/champs/_index";
import { CHAMP_FORMS, hasForms, type FormKey } from "../data/interactions/forms";
import { useChampSpells } from "@/app/lib/useChampSpells";
import { stripHtml, toDdragonId } from "@/app/lib/ddragon";
import { toneOfTag, TONE_CLASS, NOTE_TONE_CLASS } from "../data/interactions/tagTone";
import TokenText from "./TokenText";




import type { Tone } from "../data/interactions/tagTone";


function TagPill({
  text,
  tip,
  tone = "default",
  className,
}: {
  text: string;
  tip?: string;
  className?: string;
  tone?: Tone;
}) {
  const base =
    tone === "note"
      ? "inline cursor-help hover:opacity-90"
      : "inline-flex items-center justify-center h-6 rounded-md font-semibold ring-1 leading-none";

  const size = tone === "note" ? "" : "px-1 py-0.5 text-xs";

const toneCls = TONE_CLASS[tone] ?? TONE_CLASS.default;
const cls = `${base} ${size} ${toneCls} ${className ?? ""}`;


  return (
    <span className="relative inline-flex group">
      <span className={cls}>{text}</span>

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
                       text-slate-100 ring-1.5 ring-white/10 shadow-lg"
          >
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

/** ✅ 여기부터가 새로 “추가”되는 위치 (SkillLabelWithTip 끝난 다음 줄) */
function ToggleGroup({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-0 rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-0">
      {children}
    </div>
  );
}

const toggleBtnBase = "px-2 py-1 rounded-lg text-[14px] font-bold transition";
const toggleBtnOn = "bg-yellow-400 text-black";
const toggleBtnOff = "text-slate-200 hover:bg-slate-800/70";
const toggleBtnDisabled = "bg-slate-800/30 text-slate-500 cursor-default";

function toggleBtnClass(active: boolean) {
  return `${toggleBtnBase} ${active ? toggleBtnOn : toggleBtnOff}`;
}




export default function SkillTagsPanel({
  champId,
  lang,
}: {
  champId: string | null;
  lang: "ko" | "en";
}) {
  const [form, setForm] = useState<FormKey>("base");
  const [mode, setMode] = useState<"skill" | "vision">("skill");

  useEffect(() => {
    setForm("base");
    setMode("skill");
  }, [champId]);


  const champ = champId ? CHAMPS[champId as keyof typeof CHAMPS] : null;

let notes: string[] = [];

if (champ?.notes) {
  if (Array.isArray(champ.notes)) {
    notes = champ.notes;
  } else {
    notes = champ.notes[lang] ?? [];
  }
}


  // ✅ Data Dragon (스킬 설명) 준비
  const locale = lang === "ko" ? "ko_KR" : "en_US";
  const ddragonId = champId ? toDdragonId(champId) : null;
  const ddragon = useChampSpells(ddragonId, locale);
  const loadingText = locale === "ko_KR" ? "불러오는 중..." : "Loading...";

  const label: Record<SkillKey, string> = {
    P: "P",
    Q: "Q",
    W: "W",
    E: "E",
    R: "R",
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
  const source = mode === "skill" ? champ?.skills : (champ as any)?.vision;

  const tags: TagId[] = hasForms(champId ?? "")
    ? (source?.[form]?.[k] ?? source?.[k] ?? [])
    : (source?.[k] ?? []);

  if (k === "ETC" && tags.length === 0) return null;

  const spellTip = getSpellTip(k);

  return (
    <div className="grid grid-cols-[24px_1fr] gap-x-4 items-center py-1.5 min-h-[35px]">
      <div
        className={`w-[24px] font-bold text-center flex items-center justify-center ${
          k === "R"
            ? "text-yellow-400"
            : k === "P"
            ? "text-slate-200"
            : "text-sky-300"
        }`}
      >
        <SkillLabelWithTip
          labelText={label[k]}
          tip={spellTip}
          champId={champId}
          skillKey={k}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5 min-h-[28px]">
        {tags.length > 0 ? (
          tags.map((t) => {
            const labelData = TAG_LABEL[t];
            if (!labelData) return null;

            return (
              <TagPill
                key={t}
                text={labelData[lang]}
                tone={toneOfTag(t)}
                tip={TAG_DESC?.[t]?.[lang]}
              />
            );
          })
        ) : (
          <span className="text-sm text-slate-500">-</span>
        )}
      </div>
    </div>
  );
};



// ✅ 폼 라벨/버튼 스타일 (여기만 고치면 전체 통일)
const formLabel = champId && hasForms(champId) ? CHAMP_FORMS[champId] : null;

return (
  <div className="space-y-2">
    {/* 🔹 탭 + 폼 토글 영역 */}
<div className="h-10 flex items-center justify-between gap-2">
  {/* 왼쪽: 스킬 / 시야 */}
  <ToggleGroup>
  <button
    type="button"
    onClick={() => setMode("skill")}
    className={toggleBtnClass(true)}
  >
    {lang === "ko" ? "스킬" : "Skills"}
  </button>
</ToggleGroup>


  {/* 오른쪽: 폼 토글 */}
  <ToggleGroup>
    {formLabel ? (
      <>
        <button
          type="button"
          onClick={() => setForm("base")}
          className={toggleBtnClass(form === "base")}
        >
          {formLabel.base[lang]}
        </button>

        <button
          type="button"
          onClick={() => setForm("alt")}
          className={toggleBtnClass(form === "alt")}
        >
          {formLabel.alt[lang]}
        </button>

        {formLabel.alt2 && (
          <button
            type="button"
            onClick={() => setForm("alt2")}
            className={toggleBtnClass(form === "alt2")}
          >
            {formLabel.alt2[lang]}
          </button>
        )}
      </>
    ) : (
      <>
        <div className={`${toggleBtnBase} ${toggleBtnDisabled}`}>기본</div>
        <div className={`${toggleBtnBase} ${toggleBtnDisabled}`}>변환</div>
      </>
    )}
  </ToggleGroup>
</div>



    <div className="space-y-1">
      {renderRow("P")}
      {renderRow("Q")}
      {renderRow("W")}
      {renderRow("E")}
      {renderRow("R")}
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
  <TokenText text={n} lang={lang} />
</span>

            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
);
}
