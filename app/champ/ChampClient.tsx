"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ChampSelectButton from "../components/ChampSelectButton";
import ChampSelectModal from "../components/ChampSelectModal";
import SkillTagsPanel from "../components/SkillTagsPanel";
import MatchupSummaryBox from "../components/MatchupSummaryBox";
import UltCooldownBox from "../components/UltCooldownBox";

import { CHAMPIONS, type Champ } from "../data/champions";
import { CHAMPS } from "../data/champs/_index";
import FeedbackButton from "../components/FeedbackButton";
import HelpButton from "../components/HelpButton";
import NoticeButton from "../components/NoticeButton";
import AdSlot from "../components/AdSlot";
import TagGlossaryButton from "../components/TagGlossaryButton";



type Lang = "ko" | "en";
const LANG_KEY = "loltip_lang";

function detectDefaultLang(): Lang {
  const browser = (navigator.language || "").toLowerCase();
  return browser.startsWith("ko") ? "ko" : "en";
}

function readSavedLang(): Lang | null {
  const v = localStorage.getItem(LANG_KEY);
  return v === "ko" || v === "en" ? v : null;
}

function saveLang(v: Lang) {
  localStorage.setItem(LANG_KEY, v);
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ko");

  useEffect(() => {
    const saved = readSavedLang();
    setLang(saved ?? detectDefaultLang());
  }, []);

  const setLangAndPersist = (v: Lang) => {
    setLang(v);
    saveLang(v);
  };


  const router = useRouter();
const searchParams = useSearchParams();

const myChampId = searchParams.get("me");
const enemyChampId = searchParams.get("enemy");

const myChamp =
  myChampId ? CHAMPIONS.find((c) => c.id === myChampId) ?? null : null;

const enemyChamp =
  enemyChampId ? CHAMPIONS.find((c) => c.id === enemyChampId) ?? null : null;

useEffect(() => {
  if (!myChamp) return;

  ["P","Q","W","E","R"].forEach((s) => {
  const img = new window.Image();
  img.src = `/spells/${myChamp.id}/${s}.webp`;
});
}, [myChamp]);

useEffect(() => {
  if (!enemyChamp) return;

  ["P","Q","W","E","R"].forEach((s) => {
  const img = new window.Image();
  img.src = `/spells/${enemyChamp.id}/${s}.webp`;
});
}, [enemyChamp]);

  const [openTarget, setOpenTarget] = useState<"my" | "enemy" | null>(null);

  const [myUltCd, setMyUltCd] = useState<number | null>(null);
  const [enemyUltCd, setEnemyUltCd] = useState<number | null>(null);

  const canCompare =
    !!myChamp && !!enemyChamp && myUltCd != null && enemyUltCd != null;

  const diff = canCompare ? Math.abs(myUltCd! - enemyUltCd!) : null;

  const subtitle =
    lang === "ko" ? "롤 챔피언 특징과 메커니즘 요약" : "Summary of LoL Champion Features and Mechanisms";

  const firstUltLabel = lang === "ko" ? "선궁" : "First Ult";
  const diffLabel = lang === "ko" ? "차이" : "diff";

  const myIsSooner = canCompare ? myUltCd! < enemyUltCd! : false;
  const enemyIsSooner = canCompare ? enemyUltCd! < myUltCd! : false;

  const handleLogoClick = () => {
  window.location.href = "/champ";
};


  return (
    <div className="space-y-12">


      <header className="relative text-center max-w-6xl mx-auto px-4">
        <div className="
  mt-4
  flex flex-col items-end gap-2
  lg:absolute lg:right-4 lg:top-4 lg:mt-0
">
          {/* 상단: 패치 / 공지 / 도움말 */}
          <div className="flex items-center gap-2">
            <span className="text-xl text-slate-300 select-none whitespace-nowrap">
              🛠 26.4
            
            </span>

            <NoticeButton lang={lang} />
            <HelpButton lang={lang} />
            <TagGlossaryButton lang={lang} />
          </div>

          {/* 하단: 언어 선택 */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLangAndPersist("ko")}
              className={`px-3 py-2 rounded-xl text-sm font-bold border ${
                lang === "ko"
                  ? "bg-yellow-400 text-black border-yellow-300"
                  : "bg-slate-800/60 border-white/10"
              }`}
            >
              한글
            </button>

            <button
              onClick={() => setLangAndPersist("en")}
              className={`px-3 py-2 rounded-xl text-sm font-bold border ${
                lang === "en"
                  ? "bg-yellow-400 text-black border-yellow-300"
                  : "bg-slate-800/60 border-white/10"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <h1
  onClick={handleLogoClick}
  className="inline-block text-5xl font-extrabold text-yellow-400 hover:brightness-110 cursor-pointer"
>
  LOLTIP
</h1>
        <p className="mt-5 lg:mt-3 text-slate-300">{subtitle}</p>
      </header>

      {/* CHAMP PICK */}
<section className="lg:static sticky top-0 z-40 w-full bg-slate-900/95 border-b border-white/10 supports-[backdrop-filter]:backdrop-blur">
  <div className="max-w-5xl mx-auto px-3 py-2">


    <div className="flex items-center justify-between gap-2">

      <ChampSelectButton
        label={lang === "ko" ? "챔피언" : "Champion"}
        lang={lang}
        selected={myChamp}
        onClick={() => setOpenTarget("my")}
        clearParam="me"
      />

      <div className="text-sm font-extrabold text-slate-300 px-2">
        VS
      </div>

      <ChampSelectButton
        label={lang === "ko" ? "챔피언" : "Champion"}
        lang={lang}
        selected={enemyChamp}
        onClick={() => setOpenTarget("enemy")}
        clearParam="enemy"
      />

    </div>
  </div>
</section>
        
      {/* MODAL */}
      <ChampSelectModal
        open={openTarget !== null}
        lang={lang}
        champions={CHAMPIONS}
        title={
          openTarget === "my"
            ? lang === "ko"
              ? "챔피언 선택"
              : "Pick Champion"
            : lang === "ko"
            ? "챔피언 선택"
            : "Pick Champion"
        }
        onClose={() => setOpenTarget(null)}
        onPick={(c) => {
  const params = new URLSearchParams(searchParams.toString());

  if (openTarget === "my") {
    params.set("me", c.id);
    setMyUltCd(null);
  } else {
    params.set("enemy", c.id);
    setEnemyUltCd(null);
  }

  router.push(`/champ?${params.toString()}`);
  setOpenTarget(null);
}}
      />

      {/* COMPARE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 relative">

        {/* 중앙 선궁 (PC) */}
        <div className="hidden lg:flex absolute left-1/2 top-[78px] -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">

          <div className="rounded-full bg-yellow-400 px-5 py-1.5 text-sm font-black text-black">
            {firstUltLabel}
          </div>
          <div className="mt-1 text-lg font-bold text-emerald-300">
            {diff != null ? `${diff}s ${diffLabel}` : "--"}
          </div>
        </div>

        {/* MY */}
<div className="flex flex-col rounded-3xl bg-slate-800/30 p-6 pb-8 ring-2 ring-black/40 min-w-0">

{/* 챔피언 이름 표시 */}
{myChamp && (
  <div className="mb-3 text-center text-lg font-bold text-yellow-300 tracking-wide truncate">
    {lang === "ko" ? myChamp.ko : myChamp.en}
  </div>
)}

  <div
    className={`rounded-2xl ring-2 transition ${
      myIsSooner
        ? "ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]"
        : "ring-white/10"
    }`}
  >
    <UltCooldownBox
      lang={lang}
      ultCooldown={
        myChamp
          ? CHAMPS[myChamp.id as keyof typeof CHAMPS]?.ultCooldown
          : undefined
      }
      onCdChange={setMyUltCd}
    />
  </div>

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-4">
    <SkillTagsPanel champId={myChamp?.id ?? null} lang={lang} />
  </div>
</div>


        {/* ENEMY */}
<div className="flex flex-col rounded-3xl bg-slate-800/30 p-6 pb-8 ring-2 ring-black/40 min-w-0">

{/* 챔피언 이름 표시 */}
{enemyChamp && (
  <div className="mb-3 text-center text-lg font-bold text-sky-300 tracking-wide truncate">
    {lang === "ko" ? enemyChamp.ko : enemyChamp.en}
  </div>
)}

  <div
    className={`rounded-2xl ring-2 transition ${
      enemyIsSooner
        ? "ring-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]"
        : "ring-white/10"
    }`}
  >
    <UltCooldownBox
      lang={lang}
      ultCooldown={
        enemyChamp
          ? CHAMPS[enemyChamp.id as keyof typeof CHAMPS]?.ultCooldown
          : undefined
      }
      onCdChange={setEnemyUltCd}
    />
  </div>

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-4">
    <SkillTagsPanel champId={enemyChamp?.id ?? null} lang={lang} />
  </div>
</div>

</section>
    


      {/* MATCHUP */}
      <section>
        {myChamp && enemyChamp ? (
          <MatchupSummaryBox
            myChampId={myChamp.id}
            enemyChampId={enemyChamp.id}
            lang={lang}
          />
        ) : (
          <div className="rounded-3xl bg-slate-800/25 ring-2 ring-black/40 p-10 text-center text-slate-400">
            {lang === "ko"
              ? "양쪽 챔피언을 선택하면 상호작용 요약이 표시됨"
              : "Pick both champions to see matchup summary."}
          </div>
        )}
      </section>

      <FeedbackButton lang={lang} />

<div className="pt-8">
  <AdSlot side="bottom" />
</div>

<footer className="pt-8 text-center text-xs text-slate-500">
  <a
    href="/privacy"
    className="hover:text-slate-300 underline underline-offset-2"
  >
    Privacy Policy
  </a>
</footer>


</div>
);

}
