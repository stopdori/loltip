"use client";

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";
import TokenText from "./TokenText";
import type { MatchupClientResult } from "../data/matchups/_index";
import { CHAMPIONS } from "../data/champions";
import { GIMMICK_TAG_LABEL } from "../data/interactions/tags_gimmick";
import { NOTE_TONE_CLASS, toneOfTag } from "../data/interactions/tagTone";

type Lang = "ko" | "en";

// 문장 맨 앞에서만 [[TIP]]를 인식 (중간에 있으면 TokenText가 일반 텍스트로 처리)
const TIP_PREFIX_RE = /^\[\[TIP\]\]\s*/;

function splitTipPrefix(text: string) {
  const isTip = TIP_PREFIX_RE.test(text);
  return { isTip, text: isTip ? text.replace(TIP_PREFIX_RE, "") : text };
}

// 흰 점 자리 마커 칸 (전구, 판정 O/X 공용)
// list-disc 마커는 li의 콘텐츠 시작 위치(pl-5 안쪽 경계)보다 19px 왼쪽(text-sm 기준 측정값)에서 시작하고,
// 점의 가운데는 콘텐츠 시작보다 약 13px 왼쪽이다(화면 확인 후 조정한 값).
// 마커 칸은 고정 폭으로 두고 그 안에서 가운데 정렬하며, 칸의 가운데를 흰 점의 가운데 세로선에 맞춘다.
// 세로는 칸 높이를 첫 줄 텍스트의 줄 높이와 같게(h-[1lh] — 칸 자신은 li의 line-height를 상속하므로
// 1lh = li의 line-height) 고정하고 flex로 가운데 정렬한다. 글자는 안쪽 span에서 leading-none으로 두어
// 글자 자체의 줄 높이가 정렬에 영향을 주지 않게 한다(이모지는 폰트가 달라 위아래로 치우쳐 그려지므로).
const DISC_CENTER_X = -13; // 콘텐츠 시작 위치 기준 흰 점 가운데 x(px)
const MARKER_CELL_W = 20; // 마커 칸 폭(px) — 전구 이모지가 들어가는 폭
const MARKER_CELL_LEFT = DISC_CENTER_X - MARKER_CELL_W / 2; // 콘텐츠 시작 위치 기준 칸 왼쪽 끝

// originX: 이 칸을 감싸는 relative 부모의 왼쪽 끝이 콘텐츠 시작 위치 기준 어디에 있는지(px)
function MarkerCell({ originX = 0, className = "", children }: { originX?: number; className?: string; children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-0 flex h-[1lh] select-none items-center justify-center ${className}`}
      style={{ left: MARKER_CELL_LEFT - originX, width: MARKER_CELL_W }}
    >
      <span className="leading-none">{children}</span>
    </span>
  );
}

// 리스트 마커(불릿) 자리를 대체하는 전구 — badge와 완전히 분리된 별도 요소
// grid 1열은 li 콘텐츠 시작 위치에서 시작하고 -ml로 19px 당겨져 있으므로, 그 안의 MarkerCell은 originX=-19로 보정한다.
// 셀 안의 invisible 전구는 1열 폭을 기존과 똑같이 유지하는 자리표시자 — 뒤따르는 배지/텍스트 위치를 바꾸지 않기 위함.
function TipMarker() {
  return (
    <span aria-hidden="true" className="relative -ml-[19px] select-none">
      <span className="invisible">💡</span>
      <MarkerCell originX={-19}>💡</MarkerCell>
    </span>
  );
}

// 전구 바로 다음에 오는 순수 장식용 배지 (클릭 기능 없음, 판정 태그 색과 겹치지 않는 amber 계열)
// grid가 items-start라 배지(약 15px)가 줄(20px) 맨 위에 붙어 첫 줄 글자보다 위로 치우치므로,
// 마커 칸과 같은 방식으로 첫 줄 높이(h-[1lh]) 칸 안에서 세로 가운데 정렬한다.
function TipTag() {
  return (
    <span aria-hidden="true" className="flex h-[1lh] select-none items-center">
      <span className="inline-flex items-center rounded-full bg-amber-400/15 px-1.5 py-0.5 text-[11px] font-bold leading-none text-amber-300 ring-1 ring-amber-400/40">
        LOLTip
      </span>
    </span>
  );
}

// TIP 문장용 <li> className: 전구|배지|텍스트 3열 grid로 행잉 인덴트 구성
// (텍스트 열이 1fr을 차지해, \n으로 인한 줄바꿈도 전구/배지가 아니라 텍스트 시작 위치에 맞춰짐)
function tipLiClassName(isTip: boolean, extra: string) {
  const tipGrid = isTip ? " list-none grid grid-cols-[auto_auto_1fr] items-start gap-x-1.5" : "";
  return `whitespace-pre-line${tipGrid}${extra}`;
}

// \n으로 나뉜 한 줄의 끝에 붙은 판정 토큰을 인식한다.
// 토큰 뒤에 마침표 하나 또는 [[CLIP:...]]만 오는 경우도 줄 끝으로 본다.
const VERDICT_LINE_END_RE = /\[\[(EXIST|NOT_EXIST)\]\]\s*\.?\s*(?:\[\[CLIP:[^\]]*\]\]\s*)*$/;

type Verdict = "EXIST" | "NOT_EXIST";

function verdictOfLine(line: string): Verdict | null {
  return (line.match(VERDICT_LINE_END_RE)?.[1] as Verdict | undefined) ?? null;
}

// 줄 앞 점 자리에 표시하는 O/X 마커 (줄 끝의 기존 O/X 표시는 그대로 두고 추가로 표시)
// 각 줄을 relative 블록(왼쪽 끝 = 콘텐츠 시작 위치)으로 두고 TipMarker와 같은 MarkerCell에 올리므로,
// 첫 줄과 이후 줄의 마커가 흰 점·전구와 같은 가운데 세로선에 오고 텍스트는 줄마다 같은 시작 위치를 유지한다.
// 색상은 문장 속 O/X 태그와 동일한 NOTE_TONE_CLASS(tagTone.ts)를 그대로 따른다.
function VerdictMarker({ verdict, lang }: { verdict: Verdict; lang: Lang }) {
  return (
    <MarkerCell className={`font-bold ${NOTE_TONE_CLASS[toneOfTag(verdict)]}`}>
      {GIMMICK_TAG_LABEL[verdict][lang]}
    </MarkerCell>
  );
}

// 판정 박스의 문장 하나(<li>). 내 챔피언/상대 챔피언/공통 세 리스트가 공용으로 쓴다.
// - [[TIP]]으로 시작: 전구|배지|텍스트 grid (판정 마커 없음)
// - 줄 끝에 판정 토큰이 있는 줄이 하나라도 있음: 줄 단위로 나눠 해당 줄 앞에 O/X 마커 표시.
//   첫 줄에 마커가 있으면 기본 흰 점을 대신하고(list-none), 없으면 기본 점을 유지한다.
// - 그 외: 기존과 동일하게 통째로 렌더링
function SummaryItem({
  rawText,
  lang,
  liRef,
  extraClassName = "",
}: {
  rawText: string;
  lang: Lang;
  liRef?: Ref<HTMLLIElement>;
  extraClassName?: string;
}) {
  const { isTip, text } = splitTipPrefix(rawText);

  if (isTip) {
    return (
      <li ref={liRef} className={tipLiClassName(true, extraClassName)}>
        <TipMarker />
        <TipTag />
        <span>
          <TokenText text={text} lang={lang} />
        </span>
      </li>
    );
  }

  const lines = text.split("\n");
  const verdicts = lines.map(verdictOfLine);

  if (verdicts.every((v) => v === null)) {
    return (
      <li ref={liRef} className={tipLiClassName(false, extraClassName)}>
        <TokenText text={text} lang={lang} />
      </li>
    );
  }

  return (
    <li ref={liRef} className={`whitespace-pre-line${verdicts[0] ? " list-none" : ""}${extraClassName}`}>
      {lines.map((line, i) => {
        const verdict = verdicts[i];
        return (
          <span key={i} className="relative block">
            {verdict && <VerdictMarker verdict={verdict} lang={lang} />}
            {/* 빈 줄(\n \n)도 기존처럼 한 줄 높이를 차지하도록 nbsp로 채운다 */}
            {line.trim() === "" ? " " : <TokenText text={line} lang={lang} />}
          </span>
        );
      })}
    </li>
  );
}

const HIGHLIGHT_CLASS = " border-2 border-yellow-400 rounded px-2 py-1";

function parseHighlight(highlight: string | undefined) {
  if (!highlight) return null;
  const parts = highlight.split("-");
  if (parts.length < 3) return null;
  const idx = parseInt(parts[parts.length - 1], 10);
  // 마지막 2개(langKey, idx) 제외한 나머지가 champId
  const champId = parts.slice(0, parts.length - 2).join("-");
  if (isNaN(idx)) return null;
  return { champId, idx };
}

export default function MatchupSummaryBox({
  myChampId,
  enemyChampId,
  lang,
  initialResult,
}: {
  myChampId: string;
  enemyChampId: string;
  lang: Lang;
  // 서버가 이미 읽은 매치업 결과를 첫 렌더부터 쓰기 위한 초기값. 넘기면 /api/matchup fetch를
  // 건너뛰고 이 값을 그대로 사용하므로, 판정 박스가 SSR HTML에 그대로 들어간다.
  // 넘기지 않으면(/champ, /champ/[id] 등) 기존처럼 클라이언트에서 fetch한다.
  // 매치업 페이지(SSR 주입)와 dev-preview(하드코딩 더미)가 함께 쓴다.
  initialResult?: MatchupClientResult;
}) {
  const [result, setResult] = useState<MatchupClientResult | null>(initialResult ?? null);
  const highlightRef = useRef<HTMLLIElement>(null);
  // 강조할 판정 문장은 URL에서 마운트 후에 읽는다 — 해시(#highlight=xxx) 우선, 없으면 예전에 퍼진
  // ?highlight=xxx 쿼리(하위호환). 해시는 서버로 전달되지 않으므로 SSR HTML에는 강조가 들어가지 않고,
  // 첫 렌더는 서버와 같게(강조 없음) 두었다가 마운트 직후 적용해 하이드레이션 불일치를 피한다.
  const [highlight, setHighlight] = useState<string | undefined>(undefined);
  const parsed = parseHighlight(highlight);

  useEffect(() => {
    const read = () => {
      const fromHash = new URLSearchParams(window.location.hash.slice(1)).get("highlight");
      const fromQuery = new URLSearchParams(window.location.search).get("highlight");
      setHighlight(fromHash ?? fromQuery ?? undefined);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const my = CHAMPIONS.find((c) => c.id === myChampId);
  const enemy = CHAMPIONS.find((c) => c.id === enemyChampId);
  const fmt = (champ: typeof my) => {
    if (!champ) return "";
    const name = lang === "ko" ? champ.ko : champ.en;
    const al = lang === "ko" ? (champ.aliases?.ko ?? []) : (champ.aliases?.en ?? []);
    return al.length > 0 ? `${name}(${al.join(", ")})` : name;
  };

  useEffect(() => {
    if (initialResult) return;
    fetch(`/api/matchup?a=${encodeURIComponent(myChampId)}&b=${encodeURIComponent(enemyChampId)}&locale=${lang}`)
      .then((res) => res.json())
      .then(setResult);
  }, [myChampId, enemyChampId, initialResult, lang]);

  useEffect(() => {
    if (!parsed || !result) return;
    const el = highlightRef.current;
    if (!el) return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, [parsed?.champId, parsed?.idx, result]);


  return (
  <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-2 sm:px-5 py-4 transition-all min-h-[120px]">

    <div className="flex items-baseline justify-between mb-3">
      <h3 className="text-base font-bold text-yellow-400 tracking-wide uppercase">{lang === "ko" ? "판정 세부사항" : "Interaction Details"}</h3>
    </div>

 
      {/* ✅ 정상 */}
      {result?.status === "ok" && (() => {
        const myItems = (result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).filter((s) => s !== "");
        const enemyItems = (result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).filter((s) => s !== "");
        const commonItems = (result.data.common?.[lang] ?? []).filter((s) => s !== "");

        // 판정 문장이 없는 챔피언은 이름만 남지 않게 블록 자체를 숨기고, 구분선은 실제로 보이는 블록 사이에만 둔다.
        // 세 블록이 모두 비면 아래 "내용 없음" 안내 한 줄만 보인다.
        const showMy = !!my && myItems.length > 0;
        const showEnemy = !!enemy && enemyItems.length > 0;
        const showCommon = commonItems.length > 0;
        if (!showMy && !showEnemy && !showCommon) return null;

        const showMyEnemyDivider = showMy && showEnemy;
        const showEnemyCommonDivider = showCommon && (showMy || showEnemy);

        const groupWrapperClass =
          "rounded-lg -mx-2 px-2 py-1 transition-colors duration-150 hover:bg-slate-900/60";
        const listClass = "list-disc pl-5 space-y-2";

        return (
          <div className="text-sm text-slate-200">
            {/* 내 챔피언 요약 먼저 */}
            {showMy && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{fmt(my)}</p>
                {myItems.length > 0 && (
                  <ul className={listClass}>
                    {myItems.map((rawText, idx) => {
                      const isHighlighted = parsed?.champId === myChampId && parsed?.idx === idx;
                      return (
                        <SummaryItem
                          key={`my-${idx}`}
                          rawText={rawText}
                          lang={lang}
                          liRef={isHighlighted ? highlightRef : undefined}
                          extraClassName={isHighlighted ? HIGHLIGHT_CLASS : ""}
                        />
                      );
                    })}
                  </ul>
                )}
              </div>
            )}

            {showMyEnemyDivider && (
              <div className="my-3 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" aria-hidden="true" />
            )}

            {/* 상대 챔피언 요약 다음 */}
            {showEnemy && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{fmt(enemy)}</p>
                {enemyItems.length > 0 && (
                  <ul className={listClass}>
                    {enemyItems.map((rawText, idx) => {
                      const isHighlighted = parsed?.champId === enemyChampId && parsed?.idx === idx;
                      return (
                        <SummaryItem
                          key={`enemy-${idx}`}
                          rawText={rawText}
                          lang={lang}
                          liRef={isHighlighted ? highlightRef : undefined}
                          extraClassName={isHighlighted ? HIGHLIGHT_CLASS : ""}
                        />
                      );
                    })}
                  </ul>
                )}
              </div>
            )}

            {showEnemyCommonDivider && (
              <div className="my-3 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent" aria-hidden="true" />
            )}

            {/* 공통 항목: 좌우 배치와 무관하게 항상 맨 아래 */}
            {commonItems.length > 0 && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{lang === "ko" ? "공통" : "Common"}</p>
                <ul className={listClass}>
                  {commonItems.map((rawText, idx) => (
                    <SummaryItem key={`common-${idx}`} rawText={rawText} lang={lang} />
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })()}

      {/* 내용 없음 */}
      {result?.status === "ok" &&
        (result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).filter((s) => s !== "").length === 0 &&
        (result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).filter((s) => s !== "").length === 0 &&
        (result.data.common?.[lang] ?? []).filter((s) => s !== "").length === 0 && (
          <p className="text-slate-400 text-sm text-center">
            {lang === "ko" ? "특별한 상호작용 없음." : "No notable interactions."}
          </p>
        )}

      {/* ❌ 매치업 파일 문제 */}
      {result?.status === "missing" && (
        <div className="text-sm text-red-400">
          ⚠ 매치업 데이터 누락: <b>{result.key}</b>
        </div>
      )}


  </div>
  );
}