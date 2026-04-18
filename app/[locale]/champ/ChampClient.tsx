"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import ChampSelectButton from "@/app/components/ChampSelectButton";
import ChampSelectModal from "@/app/components/ChampSelectModal";
import SkillTagsPanel from "@/app/components/SkillTagsPanel";
import MatchupSummaryBox from "@/app/components/MatchupSummaryBox";
import UltCooldownBox from "@/app/components/UltCooldownBox";

import { CHAMPIONS, type Champ } from "@/app/data/champions";
import { CHAMPS } from "@/app/data/champs/_index";
import FeedbackButton from "@/app/components/FeedbackButton";
import QuizWidget from "@/app/components/QuizWidget";
import SiteHeader from "@/app/components/SiteHeader";
import AdSlot from "@/app/components/AdSlot";

type Lang = "ko" | "en";

type Props = {
  forcedMe?: string | null;
  forcedEnemy?: string | null;
  highlight?: string;
};

export default function Home({ forcedMe, forcedEnemy, highlight }: Props) {
  const locale = useLocale();
  const lang = locale as Lang;

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

const [myChampId, setMyChampId] = useState<string | null>(forcedMe ?? null);
const [enemyChampId, setEnemyChampId] = useState<string | null>(forcedEnemy ?? null);

useEffect(() => {
  // SPA 네비게이션으로 props 변경 시 동기화
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
  const [helpOpen, setHelpOpen] = useState(false);
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);

  useEffect(() => {
    console.log('openTarget:', openTarget);
  }, [openTarget]);

  useEffect(() => {
  setOpenTarget(null);
}, [forcedMe, forcedEnemy]);

  const [myUltCd, setMyUltCd] = useState<number | null>(null);
  const [enemyUltCd, setEnemyUltCd] = useState<number | null>(null);
  const [mobileTab, setMobileTab] = useState<"my" | "enemy">("my");

  const canCompare =
    !!myChamp && !!enemyChamp && myUltCd != null && enemyUltCd != null;
    const bothSelected = !!myChamp && !!enemyChamp;

  const diff = canCompare ? Math.abs(myUltCd! - enemyUltCd!) : null;

  const subtitle =
    lang === "ko" ? "롤 챔피언 요약과 상호작용 매커니즘 정리" : "LoL Champion Overview & Interaction Mechanics Guide";

  const firstUltLabel = lang === "ko" ? "궁 주도권" : "ULT CD Lead";

  const myIsSooner = canCompare ? myUltCd! < enemyUltCd! : false;
  const enemyIsSooner = canCompare ? enemyUltCd! < myUltCd! : false;



  return (
    <div className="space-y-12">


      <SiteHeader
        subtitle={subtitle}
        champSearchOpen={openTarget !== null}
        helpOpen={helpOpen}
        onHelpOpenChange={setHelpOpen}
        onNoticeOpenChange={setNoticeOpen}
        onGlossaryOpenChange={setGlossaryOpen}
      />

      {/* CHAMP PICK */}
<section className="lg:static sticky top-0 z-40 w-full bg-slate-900/95 border-b border-white/10 supports-[backdrop-filter]:backdrop-blur">
  <div className="max-w-5xl mx-auto px-3 py-2">


    <div className="flex items-center justify-center gap-3 sm:gap-8 w-full max-w-[430px] sm:max-w-none mx-auto">

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
        
      {/* QuizWidget: 챔피언 미선택 시 */}
      {!myChamp && !enemyChamp && (
        <div className="max-w-[474px] sm:max-w-[648px] mx-auto px-3">
          <QuizWidget lang={lang} />
        </div>
      )}

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
<>
{/* 모바일 탭바 */}
{(myChamp || enemyChamp) && (
  <div className="sm:hidden flex w-full max-w-[430px] mx-auto rounded-xl bg-slate-800/40 ring-1 ring-white/10 overflow-hidden mb-2">
    <button
      type="button"
      onClick={() => myChamp && setMobileTab("my")}
      disabled={!myChamp}
      className={`flex-1 py-2 text-base font-bold text-center transition ${
        !myChamp
          ? "text-slate-600 cursor-not-allowed"
          : mobileTab === "my"
          ? "text-yellow-400 bg-slate-700/60"
          : "text-slate-400"
      }`}
    >
      {myChamp
        ? (lang === "ko" ? myChamp.ko : myChamp.en)
        : (lang === "ko" ? "챔피언 선택" : "Select")}
    </button>
    <button
      type="button"
      onClick={() => enemyChamp && setMobileTab("enemy")}
      disabled={!enemyChamp}
      className={`flex-1 py-2 text-base font-bold text-center transition ${
        !enemyChamp
          ? "text-slate-600 cursor-not-allowed"
          : mobileTab === "enemy"
          ? "text-yellow-400 bg-slate-700/60"
          : "text-slate-400"
      }`}
    >
      {enemyChamp
        ? (lang === "ko" ? enemyChamp.ko : enemyChamp.en)
        : (lang === "ko" ? "챔피언 선택" : "Select")}
    </button>
  </div>
)}
<section className="relative grid grid-cols-1 sm:grid-cols-[430px_68px_430px] gap-4 w-full max-w-[980px] mx-auto justify-center items-start">

      
        {/* MY */}
{myChamp && (
<div className={`flex flex-col w-full max-w-[430px] mx-auto rounded-3xl bg-slate-800/30 p-2 pb-3 ring-2 ring-black/40 min-w-0 sm:col-start-1 sm:flex ${myChamp && enemyChamp && mobileTab !== "my" ? "hidden sm:flex" : ""}`}>


{/* 챔피언 이름 표시 */}
<div className="hidden sm:block mb-3 text-center text-lg font-bold text-slate-200 tracking-wide truncate">
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

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-2">
    <SkillTagsPanel champId={myChamp?.id ?? null} lang={lang} />
  </div>
</div>


)}



        {/* ENEMY */}
        {enemyChamp && (
<div className={`flex flex-col w-full max-w-[430px] mx-auto rounded-3xl bg-slate-800/30 p-2 pb-3 ring-2 ring-black/40 min-w-0 sm:col-start-3 sm:flex ${myChamp && enemyChamp && mobileTab !== "enemy" ? "hidden sm:flex" : ""}`}>

{/* 챔피언 이름 표시 */}
 <div className="hidden sm:block mb-3 text-center text-lg font-bold text-slate-200 tracking-wide truncate">
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

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-2">
    <SkillTagsPanel champId={enemyChamp?.id ?? null} lang={lang} />
  </div>
</div>

)}

{myChamp && enemyChamp && (
  <div className="hidden sm:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-[88px] pointer-events-none">
    <div className="rounded-full bg-yellow-400 px-5 py-1.5 text-sm font-black text-black">
      {firstUltLabel}
    </div>
    <div className="mt-1 text-lg font-bold text-emerald-300">
      {diff != null ? `${diff}s` : "--"}
    </div>
  </div>
)}

</section>
</>
) : null}
<section className="mt-[4.5rem] md:mt-12 max-w-[430px] sm:max-w-[980px] mx-auto w-full">
  {myChamp && enemyChamp ? (
    <MatchupSummaryBox
      myChampId={myChamp.id}
      enemyChampId={enemyChamp.id}
      lang={lang}
      highlight={highlight}
    />
  ) : (
    <div className="space-y-4">
      <div className={`${!(myChamp || enemyChamp) ? "max-w-[474px] sm:max-w-[648px] mx-auto" : "w-full"} rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-5 py-4 hover:ring-yellow-400/60 transition-all min-h-[120px]`}>
        <p className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-4">
          {lang === "ko" ? "판정 세부사항" : "Interaction Details"}
        </p>
        <p className="text-slate-400 text-sm">
          {lang === "ko"
            ? "양쪽 챔피언을 선택하면 \n 상호작용 요약이 표시됨"
            : "Pick both champions \n to see matchup summary."}
        </p>
      </div>
      {(myChamp || enemyChamp) && <QuizWidget lang={lang} />}
    </div>
  )}
</section>

      {myChamp && enemyChamp && <div className="mt-[4.5rem] md:mt-12 max-w-[430px] sm:max-w-[980px] mx-auto w-full"><QuizWidget lang={lang} /></div>}

      <FeedbackButton lang={lang} hidden={openTarget !== null || helpOpen || noticeOpen || glossaryOpen} />

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
