// app/[locale]/tags/TagsClient.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import SiteHeader from "@/app/components/SiteHeader";
import TagPill from "@/app/components/TagPill";
import { TAG_LABEL, TAG_DESC, type TagId } from "@/app/data/interactions";
import { GIMMICK_TAG_LABEL, GIMMICK_TAG_DESC, type GimmickTagId } from "@/app/data/interactions/tags_gimmick";
import { TAG_CATEGORIES, VISION_STEALTH_CATEGORY, GIMMICK_CATEGORIES } from "@/app/data/interactions/tagCategories";
import { toneOfTag } from "@/app/data/interactions/tagTone";

type Lang = "ko" | "en";
type Tab = "basic" | "vision" | "gimmick";

// ---------------------------------------------------------------------------
// 개발 모드 전용: tagCategories.ts에 정의된 키 집합과 실제 TAG_LABEL /
// GIMMICK_TAG_LABEL의 키 집합이 어긋나면 콘솔에 경고를 띄운다.
// 프로덕션 빌드에는 영향 없음 (다음 조건 자체가 트리쇼킹되어 사라짐).
// ---------------------------------------------------------------------------
if (process.env.NODE_ENV === "development") {
  const categorizedTagKeys = new Set<string>(TAG_CATEGORIES.flatMap((c) => c.keys));
  const actualTagKeys = new Set<string>(Object.keys(TAG_LABEL));
  const missingFromCategories = [...actualTagKeys].filter((k) => !categorizedTagKeys.has(k));
  const staleInCategories = [...categorizedTagKeys].filter((k) => !actualTagKeys.has(k));

  if (missingFromCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] TAG_LABEL에는 있지만 TAG_CATEGORIES에는 없는 태그(추가 필요):",
      missingFromCategories
    );
  }
  if (staleInCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] TAG_CATEGORIES에는 있지만 TAG_LABEL에는 없는 태그(삭제된 태그, 정리 필요):",
      staleInCategories
    );
  }

  const categorizedGimmickKeys = new Set<string>(GIMMICK_CATEGORIES.flatMap((c) => c.keys));
  const actualGimmickKeys = new Set<string>(Object.keys(GIMMICK_TAG_LABEL));
  const missingFromGimmickCategories = [...actualGimmickKeys].filter((k) => !categorizedGimmickKeys.has(k));
  const staleInGimmickCategories = [...categorizedGimmickKeys].filter((k) => !actualGimmickKeys.has(k));

  if (missingFromGimmickCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] GIMMICK_TAG_LABEL에는 있지만 GIMMICK_CATEGORIES에는 없는 태그(추가 필요):",
      missingFromGimmickCategories
    );
  }
  if (staleInGimmickCategories.length > 0) {
    console.warn(
      "[tagCategories.ts] GIMMICK_CATEGORIES에는 있지만 GIMMICK_TAG_LABEL에는 없는 태그(삭제된 태그, 정리 필요):",
      staleInGimmickCategories
    );
  }
}

// ---------------------------------------------------------------------------

const TAB_LABEL: Record<Tab, { ko: string; en: string }> = {
  basic: { ko: "기본 태그", en: "Basic Tags" },
  vision: { ko: "시야 · 은신", en: "Vision · Stealth" },
  gimmick: { ko: "기믹", en: "Gimmick" },
};

type SearchHit = {
  key: string;
  kind: "tag" | "gimmick";
  label: string;
};

export default function TagsClient() {
  const locale = useLocale();
  const lang = locale as Lang;

  const [tab, setTab] = useState<Tab>("basic");
  const [query, setQuery] = useState("");
  const [highlightKey, setHighlightKey] = useState<string | null>(null);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const title = lang === "ko" ? "태그 레퍼런스" : "Tag Reference";
  const subtitle = lang === "ko" ? "모든 상호작용 태그 사전" : "Full interaction tag glossary";

  // 검색 인덱스: TAG_LABEL + GIMMICK_TAG_LABEL 전체를 라벨 텍스트 기준으로 통합
  const searchIndex = useMemo<SearchHit[]>(() => {
    const tagHits: SearchHit[] = Object.entries(TAG_LABEL).map(([key, v]) => ({
      key,
      kind: "tag",
      label: `${v.ko} ${v.en}`,
    }));
    const gimmickHits: SearchHit[] = Object.entries(GIMMICK_TAG_LABEL).map(([key, v]) => ({
      key,
      kind: "gimmick",
      label: `${v.ko} ${v.en}`,
    }));
    return [...tagHits, ...gimmickHits];
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((hit) => hit.label.toLowerCase().includes(q)).slice(0, 30);
  }, [query, searchIndex]);

  const goToTag = (hit: SearchHit) => {
    setTab(hit.kind === "gimmick" ? "gimmick" : "basic");
    setQuery("");

    // 탭 전환으로 DOM이 다시 그려질 시간을 준 다음 스크롤 + 하이라이트
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(`tag-${hit.kind}-${hit.key}`);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        if (highlightTimer.current) clearTimeout(highlightTimer.current);
        setHighlightKey(`${hit.kind}-${hit.key}`);
        highlightTimer.current = setTimeout(() => setHighlightKey(null), 1500);
      });
    });
  };

  useEffect(() => {
    return () => {
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
    };
  }, []);

  const renderCategoryList = (
    categories: { title: { ko: string; en: string }; keys: string[] }[],
    kind: "tag" | "gimmick"
  ) => {
    const labelMap = kind === "tag" ? TAG_LABEL : GIMMICK_TAG_LABEL;
    const descMap = kind === "tag" ? TAG_DESC : GIMMICK_TAG_DESC;

    return (
      <div className="space-y-8">
        {categories.map((cat) => (
          <section key={cat.title.ko}>
            <h2 className="text-lg font-bold text-yellow-400 mb-3">{cat.title[lang]}</h2>
            <div className="flex flex-wrap gap-2">
              {cat.keys.map((key) => {
                const label = (labelMap as Record<string, { ko: string; en: string }>)[key];
                if (!label) return null;
                const desc = (descMap as Partial<Record<string, { ko: string; en: string }>>)[key];
                const domId = `tag-${kind}-${key}`;
                const isHighlighted = highlightKey === `${kind}-${key}`;
                return (
                  <div
                    key={key}
                    id={domId}
                    className={`rounded-md transition-colors duration-300 ${
                      isHighlighted ? "bg-yellow-400/40 ring-2 ring-yellow-300" : ""
                    }`}
                  >
                    <TagPill
                      text={label[lang]}
                      tip={desc?.[lang]}
                      tone={toneOfTag(key as TagId | GimmickTagId)}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <SiteHeader subtitle={subtitle} />

      <div className="mx-auto w-full max-w-[960px] px-4 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-100">{title}</h1>
        </div>

        {/* 검색 */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "ko" ? "태그 검색... (예: 기절, Stun)" : "Search tags... (e.g. Stun)"}
            className="w-full rounded-xl bg-slate-800/60 ring-1 ring-white/10 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-yellow-400/60"
          />

          {query.trim() && (
            <div className="absolute left-0 right-0 top-full mt-1 z-40 max-h-[320px] overflow-y-auto rounded-xl bg-slate-900 ring-1 ring-white/10 shadow-xl">
              {searchResults.length === 0 ? (
                <div className="px-4 py-3 text-sm text-slate-400">
                  {lang === "ko" ? "검색 결과 없음" : "No results found"}
                </div>
              ) : (
                searchResults.map((hit) => {
                  const labelMap = hit.kind === "tag" ? TAG_LABEL : GIMMICK_TAG_LABEL;
                  const label = (labelMap as Record<string, { ko: string; en: string }>)[hit.key];
                  return (
                    <button
                      key={`${hit.kind}-${hit.key}`}
                      type="button"
                      onClick={() => goToTag(hit)}
                      className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-800/80 flex items-center justify-between gap-2"
                    >
                      <span>{label?.[lang]}</span>
                      <span className="text-xs text-slate-500">
                        {hit.kind === "gimmick" ? (lang === "ko" ? "기믹" : "Gimmick") : (lang === "ko" ? "기본" : "Basic")}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          )}
        </div>

        {/* 탭 */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-0 rounded-xl bg-slate-800/60 ring-1 ring-white/10 p-1">
            {(Object.keys(TAB_LABEL) as Tab[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition ${
                  tab === t
                    ? "ring-2 ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)] text-slate-200"
                    : "text-slate-200 hover:bg-slate-800/70"
                }`}
              >
                {TAB_LABEL[t][lang]}
              </button>
            ))}
          </div>
        </div>

        {/* 본문 */}
        <div>
          {tab === "basic" && renderCategoryList(TAG_CATEGORIES, "tag")}
          {tab === "vision" && renderCategoryList([VISION_STEALTH_CATEGORY], "tag")}
          {tab === "gimmick" && renderCategoryList(GIMMICK_CATEGORIES, "gimmick")}
        </div>
      </div>
    </div>
  );
}
