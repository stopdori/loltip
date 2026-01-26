"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { Champ } from "../data/champions";

type Props = {
  open: boolean;
  lang: "ko" | "en";
  champions: Champ[];
  title: string;
  onClose: () => void;
  onPick: (champ: Champ) => void;
};

// ===== Hangul utils =====
const CHOSEONG = [
  "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
  "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
] as const;

const JUNGSEONG_KEY = [
  "k", "o", "i", "O", "j", "p", "u", "P", "h", "hk", "ho", "hl",
  "y", "n", "nj", "np", "nl", "b", "m", "ml", "l",
] as const;

const CHOSEONG_KEY = [
  "r", "R", "s", "e", "E", "f", "a", "q", "Q", "t",
  "T", "d", "w", "W", "c", "z", "x", "v", "g",
] as const;

const CHOSEONG_TO_KEY: Record<string, string> = Object.fromEntries(
  CHOSEONG.map((jamo, i) => [jamo, CHOSEONG_KEY[i] ?? ""])
);

function initialsToDubeol(initials: string) {
  return [...initials].map((ch) => CHOSEONG_TO_KEY[ch] ?? ch).join("");
}


// 종성(받침) 인덱스 0은 없음("")
const JONGSEONG_KEY = [
  "",
  "r",  "R",  "rt", "s",  "sw", "sg", "e",  "f",  "fr",
  "fa", "fq", "ft", "fx", "fv", "fg", "a",  "q",  "qt",
  "t",  "T",  "d",  "w",  "c",  "z",  "x",  "v",  "g",
] as const;

function isHangulSyllable(ch: string) {
  const code = ch.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
}

function hangulToInitials(str: string) {
  let out = "";
  for (const ch of str) {
    if (!isHangulSyllable(ch)) continue;
    const code = ch.charCodeAt(0) - 0xac00;
    const ci = Math.floor(code / (21 * 28));
    out += CHOSEONG[ci] ?? "";
  }
  return out;
}

// 한글(완성형) -> 두벌식 영문 타이핑 결과로 변환 (가렌 => rkfps)
function hangulToDubeol(str: string) {
  let out = "";
  for (const ch of str) {
    if (!isHangulSyllable(ch)) {
      out += ch;
      continue;
    }
    const code = ch.charCodeAt(0) - 0xac00;
    const ci = Math.floor(code / (21 * 28));
    const vi = Math.floor((code % (21 * 28)) / 28);
    const fi = code % 28;

    out += (CHOSEONG_KEY[ci] ?? "");
    out += (JUNGSEONG_KEY[vi] ?? "");
    out += (JONGSEONG_KEY[fi] ?? "");
  }
  return out;
}

const JAMO_EXPAND: Record<string, string> = {
  // 겹받침(겹자음)
  "ㄳ": "ㄱㅅ",
  "ㄵ": "ㄴㅈ",
  "ㄶ": "ㄴㅎ",
  "ㄺ": "ㄹㄱ",
  "ㄻ": "ㄹㅁ",
  "ㄼ": "ㄹㅂ",
  "ㄽ": "ㄹㅅ",
  "ㄾ": "ㄹㅌ",
  "ㄿ": "ㄹㅍ",
  "ㅀ": "ㄹㅎ",
  "ㅄ": "ㅂㅅ",

  // (선택) 겹모음까지 같이 풀고 싶으면 유지
  "ㅘ": "ㅗㅏ",
  "ㅙ": "ㅗㅐ",
  "ㅚ": "ㅗㅣ",
  "ㅝ": "ㅜㅓ",
  "ㅞ": "ㅜㅔ",
  "ㅟ": "ㅜㅣ",
  "ㅢ": "ㅡㅣ",
};

function expandCompositeJamo(str: string) {
  return [...str].map((ch) => JAMO_EXPAND[ch] ?? ch).join("");
}


function normalize(str: string) {
  return expandCompositeJamo(str)
    .toLowerCase()
    .replace(/\s+/g, "");
}


function buildSearchKeys(c: Champ) {
  const ko = c.ko ?? "";
  const aliases = c.aliases ?? [];

  const baseKeys = [
    ko,
    c.en,
    c.id,
    hangulToInitials(ko),
    hangulToDubeol(ko),
    initialsToDubeol(hangulToInitials(ko)),
  ];

  const aliasKeys = aliases.flatMap((a) => {
    const initials = hangulToInitials(a);
    return [
      a,
      initials,
      hangulToDubeol(a),
      initialsToDubeol(initials),
    ];
  });

  return [...baseKeys, ...aliasKeys]
    .map(normalize)
    .filter(Boolean);
}



export default function ChampSelectModal({
  open,
  lang,
  champions,
  title,
  onClose,
  onPick,
}: Props) {
  const [q, setQ] = useState("");

  // 열릴 때 검색어 초기화 + ESC 닫기
  useEffect(() => {
    if (!open) return;
    setQ("");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const collator = useMemo(() => {
    return new Intl.Collator(lang === "ko" ? "ko" : "en", { sensitivity: "base" });
  }, [lang]);

  const filtered = useMemo(() => {
    const key = normalize(q.trim());

    const list = champions
      .slice()
      .sort((a, b) =>
        collator.compare(
          lang === "ko" ? a.ko : a.en,
          lang === "ko" ? b.ko : b.en
        )
      );

    if (!key) return list;

    return list.filter((c) => {
      const keys = buildSearchKeys(c);
      return keys.some((k) => k.includes(key));
    });
  }, [q, champions, lang, collator]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* 배경 */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* 모달 */}
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-slate-900 border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="font-bold text-lg">{title}</div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 transition text-sm"
          >
            닫기
          </button>
        </div>

        <div className="p-5">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === "ko" ? "챔피언 검색 (예: 나 / ㅇ / rkfps)" : "Search champion (e.g. a / rkfps)"}
            className="w-full rounded-xl bg-slate-800/70 border border-white/10 px-4 py-3 outline-none focus:border-white/20"
            autoFocus
          />

          <div className="mt-5 max-h-[55vh] overflow-auto pr-1">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {filtered.map((c) => {
                const name = lang === "ko" ? c.ko : c.en;
                return (
                  <button
                    key={c.id}
                    onClick={() => onPick(c)}
                    className="rounded-xl bg-slate-800/50 hover:bg-slate-700/60 transition p-2 border border-white/10 hover:border-white/20"
                    title={name}
                  >
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/10 bg-slate-950/30">
                      <Image
                        src={`/champs/${c.id}.webp`}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-2 text-xs text-center truncate">
                      {name}
                    </div>
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="text-center text-slate-400 py-10">
                {lang === "ko" ? "검색 결과가 없어요." : "No results."}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
