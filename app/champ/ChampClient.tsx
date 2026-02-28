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

type Props = {
  forcedMe?: string | null;
  forcedEnemy?: string | null;
};

export default function Home({ forcedMe, forcedEnemy }: Props) {
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

  function clearMyChamp() {
  // 오른쪽만 남기기
  if (enemyChampId) {
    router.replace(`/champ/${enemyChampId}?side=enemy`);
    return;
  }

  // 아무도 없으면 챔피언 선택 초기화
  router.replace(`/champ`);
}

function clearEnemyChamp() {
  if (myChampId) {
    router.replace(`/champ/${myChampId}?side=my`);
    return;
  }

  router.replace(`/champ`);
}

const [myChampId, setMyChampId] = useState<string | null>(null);
const [enemyChampId, setEnemyChampId] = useState<string | null>(null);

useEffect(() => {
  // 이미 같은 값이면 덮어쓰지 않는다 (중요)
  if (forcedMe !== myChampId) setMyChampId(forcedMe ?? null);
  if (forcedEnemy !== enemyChampId) setEnemyChampId(forcedEnemy ?? null);
}, [forcedMe, forcedEnemy]);

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

  useEffect(() => {
  setOpenTarget(null);
}, [forcedMe, forcedEnemy]);

  const [myUltCd, setMyUltCd] = useState<number | null>(null);
  const [enemyUltCd, setEnemyUltCd] = useState<number | null>(null);

  const canCompare =
    !!myChamp && !!enemyChamp && myUltCd != null && enemyUltCd != null;
    const bothSelected = !!myChamp && !!enemyChamp;

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


    <div className="flex items-center justify-center gap-16">

      <ChampSelectButton
  label={lang === "ko" ? "챔피언" : "Champion"}
  lang={lang}
  selected={myChamp}
  onClick={() => setOpenTarget("my")}
  onClear={clearMyChamp}
/>

      <div className="text-sm font-extrabold text-slate-300 px-2">
        VS
      </div>

      <ChampSelectButton
  label={lang === "ko" ? "챔피언" : "Champion"}
  lang={lang}
  selected={enemyChamp}
  onClick={() => setOpenTarget("enemy")}
  onClear={clearEnemyChamp}
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
        
  // 현재 선택 상태 기준으로 새 상태 계산
const nextMy = openTarget === "my" ? c.id : myChampId;
const nextEnemy = openTarget === "enemy" ? c.id : enemyChampId;

// 둘 다 있으면 → matchup
if (nextMy && nextEnemy) {
  const pair = [nextMy, nextEnemy].sort().join("-vs-");
router.push(`/matchup/${pair}?first=${openTarget === "my" ? c.id : myChampId}`);
  setOpenTarget(null);
  return;
}

// 하나만 있으면 → 단일 챔프
if (nextMy && !nextEnemy) {
  router.push(`/champ/${nextMy}?side=my`);
  return;
}

if (!nextMy && nextEnemy) {
  router.push(`/champ/${nextEnemy}?side=enemy`);
  return;
}
setOpenTarget(null);

}}
        />

      {/* COMPARE */}
{(myChamp || enemyChamp) ? (
<section
  className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-8 lg:gap-6 relative w-full max-w-[980px] mx-auto items-start"
>

      
        {/* MY */}
{myChamp && (
<div className="flex flex-col w-full max-w-[430px] rounded-3xl bg-slate-800/30 p-6 pb-8 ring-2 ring-black/40 min-w-0 lg:col-start-1">


{/* 챔피언 이름 표시 */}
<div className="mb-3 text-center text-lg font-bold text-slate-200 tracking-wide truncate">
     {myChamp
     ? (lang === "ko" ? myChamp.ko : myChamp.en)
     : (lang === "ko" ? "챔피언" : "Champion")}
 </div>

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


)}


{myChamp && enemyChamp && (
  <div className="hidden lg:flex flex-col items-center lg:col-start-2 pt-[72px]">
    <div className="rounded-full bg-yellow-400 px-5 py-1.5 text-sm font-black text-black">
      {firstUltLabel}
    </div>
    <div className="mt-1 text-lg font-bold text-emerald-300">
      {diff != null ? `${diff}s ${diffLabel}` : "--"}
    </div>
  </div>
)}

        {/* ENEMY */}
        {enemyChamp && (
<div className="flex flex-col w-full max-w-[430px] rounded-3xl bg-slate-800/30 p-6 pb-8 ring-2 ring-black/40 min-w-0 lg:col-start-3">

{/* 챔피언 이름 표시 */}
 <div className="mb-3 text-center text-lg font-bold text-slate-200 tracking-wide truncate">
   {enemyChamp
     ? (lang === "ko" ? enemyChamp.ko : enemyChamp.en)
     : (lang === "ko" ? "챔피언" : "Champion")}
 </div>

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

)}

</section>
) : null}
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
