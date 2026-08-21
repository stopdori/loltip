"use client";

import { useEffect, useRef, useState } from "react";
import TokenText from "./TokenText";
import type { MatchupLoadResult } from "../data/matchups/_index";
import { CHAMPIONS } from "../data/champions";

type Lang = "ko" | "en";

// 문장 맨 앞에서만 [[TIP]]를 인식 (중간에 있으면 TokenText가 일반 텍스트로 처리)
const TIP_PREFIX_RE = /^\[\[TIP\]\]\s*/;

function splitTipPrefix(text: string) {
  const isTip = TIP_PREFIX_RE.test(text);
  return { isTip, text: isTip ? text.replace(TIP_PREFIX_RE, "") : text };
}

// 리스트 마커(불릿) 자리를 대체하는 전구 — badge와 완전히 분리된 별도 요소
// list-disc 마커는 li의 콘텐츠 시작 위치(pl-5 안쪽 경계)보다 19px 왼쪽(text-sm 기준 측정값)에 렌더링되는데,
// grid 레이아웃의 1열은 li 콘텐츠 시작 위치에서 시작하므로 그만큼 -ml로 당겨서 흰 점 자리와 맞춤
function TipMarker() {
  return (
    <span aria-hidden="true" className="-ml-[19px] select-none leading-[1.5]">
      💡
    </span>
  );
}

// 전구 바로 다음에 오는 순수 장식용 배지 (클릭 기능 없음, 판정 태그 색과 겹치지 않는 amber 계열)
function TipTag() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex select-none items-center rounded-full bg-amber-400/15 px-1.5 py-0.5 text-[11px] font-bold leading-none text-amber-300 ring-1 ring-amber-400/40"
    >
      LOLTip
    </span>
  );
}

// TIP 문장용 <li> className: 전구|배지|텍스트 3열 grid로 행잉 인덴트 구성
// (텍스트 열이 1fr을 차지해, \n으로 인한 줄바꿈도 전구/배지가 아니라 텍스트 시작 위치에 맞춰짐)
function tipLiClassName(isTip: boolean, extra: string) {
  const tipGrid = isTip ? " list-none grid grid-cols-[auto_auto_1fr] items-start gap-x-1.5" : "";
  return `whitespace-pre-line${tipGrid}${extra}`;
}

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
  highlight,
  previewResult,
}: {
  myChampId: string;
  enemyChampId: string;
  lang: Lang;
  highlight?: string;
  // 스타일/레이아웃 미리보기 전용(app/[locale]/dev-preview): 넘기면 /api/matchup fetch를
  // 건너뛰고 이 값을 그대로 사용한다. 넘기지 않으면(기존 호출부 전부) 기존 동작 그대로 fetch함.
  previewResult?: MatchupLoadResult;
}) {
  const [result, setResult] = useState<MatchupLoadResult | null>(previewResult ?? null);
  const highlightRef = useRef<HTMLLIElement>(null);
  const parsed = parseHighlight(highlight);

  const my = CHAMPIONS.find((c) => c.id === myChampId);
  const enemy = CHAMPIONS.find((c) => c.id === enemyChampId);
  const fmt = (champ: typeof my) => {
    if (!champ) return "";
    const name = lang === "ko" ? champ.ko : champ.en;
    const al = lang === "ko" ? (champ.aliases?.ko ?? []) : (champ.aliases?.en ?? []);
    return al.length > 0 ? `${name}(${al.join(", ")})` : name;
  };

  useEffect(() => {
    if (previewResult) return;
    fetch(`/api/matchup?a=${encodeURIComponent(myChampId)}&b=${encodeURIComponent(enemyChampId)}`)
      .then((res) => res.json())
      .then(setResult);
  }, [myChampId, enemyChampId, previewResult]);

  useEffect(() => {
    if (!parsed || !result) return;
    const el = highlightRef.current;
    if (!el) return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, [parsed?.champId, parsed?.idx, result]);


  return (
  <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-5 py-4 transition-all min-h-[120px]">

    <div className="flex items-baseline justify-between mb-3">
      <h3 className="text-base font-bold text-yellow-400 tracking-wide uppercase">{lang === "ko" ? "판정 세부사항" : "Interaction Details"}</h3>
    </div>

 
      {/* ✅ 정상 */}
      {result?.status === "ok" && (() => {
        const myItems = result.data.highlightsByChamp?.[myChampId]?.[lang] ?? [];
        const enemyItems = result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? [];
        const commonItems = result.data.common?.[lang] ?? [];

        const showMyEnemyDivider = !!my && !!enemy;
        const showEnemyCommonDivider = commonItems.length > 0 && (!!my || !!enemy);

        const groupWrapperClass =
          "rounded-lg -mx-2 px-2 py-1 transition-colors duration-150 hover:bg-slate-900/60";
        const listClass = "list-disc pl-5 space-y-2";

        return (
          <div className="text-sm text-slate-200">
            {/* 내 챔피언 요약 먼저 */}
            {my && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{fmt(my)}</p>
                {myItems.length > 0 && (
                  <ul className={listClass}>
                    {myItems.map((rawText, idx) => {
                      const isHighlighted = parsed?.champId === myChampId && parsed?.idx === idx;
                      const { isTip, text } = splitTipPrefix(rawText);
                      return (
                        <li
                          key={`my-${idx}`}
                          ref={isHighlighted ? highlightRef : null}
                          className={tipLiClassName(isTip, isHighlighted ? " border-2 border-yellow-400 rounded px-2 py-1" : "")}
                        >
                          {isTip ? (
                            <>
                              <TipMarker />
                              <TipTag />
                              <span>
                                <TokenText text={text} lang={lang} />
                              </span>
                            </>
                          ) : (
                            <TokenText text={text} lang={lang} />
                          )}
                        </li>
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
            {enemy && (
              <div className={groupWrapperClass}>
                <p className="text-sm font-semibold text-sky-300 mb-1">{fmt(enemy)}</p>
                {enemyItems.length > 0 && (
                  <ul className={listClass}>
                    {enemyItems.map((rawText, idx) => {
                      const isHighlighted = parsed?.champId === enemyChampId && parsed?.idx === idx;
                      const { isTip, text } = splitTipPrefix(rawText);
                      return (
                        <li
                          key={`enemy-${idx}`}
                          ref={isHighlighted ? highlightRef : null}
                          className={tipLiClassName(isTip, isHighlighted ? " border-2 border-yellow-400 rounded px-2 py-1" : "")}
                        >
                          {isTip ? (
                            <>
                              <TipMarker />
                              <TipTag />
                              <span>
                                <TokenText text={text} lang={lang} />
                              </span>
                            </>
                          ) : (
                            <TokenText text={text} lang={lang} />
                          )}
                        </li>
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
                  {commonItems.map((rawText, idx) => {
                    const { isTip, text } = splitTipPrefix(rawText);
                    return (
                      <li key={`common-${idx}`} className={tipLiClassName(isTip, "")}>
                        {isTip ? (
                          <>
                            <TipMarker />
                            <TipTag />
                            <span>
                              <TokenText text={text} lang={lang} />
                            </span>
                          </>
                        ) : (
                          <TokenText text={text} lang={lang} />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })()}

      {/* 내용 없음 */}
      {result?.status === "ok" &&
        (result.data.highlightsByChamp?.[myChampId]?.[lang] ?? []).length === 0 &&
        (result.data.highlightsByChamp?.[enemyChampId]?.[lang] ?? []).length === 0 &&
        (result.data.common?.[lang] ?? []).length === 0 && (
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