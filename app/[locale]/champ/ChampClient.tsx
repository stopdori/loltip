"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import ChampSelectButton from "@/app/components/ChampSelectButton";
import ChampSelectModal from "@/app/components/ChampSelectModal";
import ChampMiniSearch from "@/app/components/ChampMiniSearch";
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
  hideHeader?: boolean;
  embedMode?: boolean;
  useIframe?: boolean;
  forceCompact?: boolean;
};

export default function Home({ forcedMe, forcedEnemy, highlight, hideHeader, embedMode, useIframe, forceCompact }: Props) {
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
  const [noticeOpen, setNoticeOpen] = useState(false);

  useEffect(() => {
    console.log('openTarget:', openTarget);
  }, [openTarget]);

  useEffect(() => {
  setOpenTarget(null);
}, [forcedMe, forcedEnemy]);

  // iframe(useIframe=true)일 때만 필요: iframe은 자신만의 좁은 뷰포트를 가지므로
  // iframe 내부의 sm: 미디어 쿼리가 부모 페이지의 실제 뷰포트를 반영하지 못한다.
  // 그래서 이 컴포넌트(iframe이 아닌 실제 페이지)에서 뷰포트 폭을 판단해 iframe src에 넘겨준다.
  //
  // - initialCompact: iframe src(compact= 쿼리)에만 쓰는 값. 마운트 시점에 딱 한 번만
  //   정해지고 이후 리사이즈에도 절대 바뀌지 않는다. (예전엔 isMobileViewport를 그대로
  //   src에 박아 넣어서, 리사이즈로 값이 바뀔 때마다 src 문자열이 달라져 브라우저가
  //   iframe을 실제로 재로드해버렸다 — 내부 탭/폼 선택 상태가 날아가고, 재로드 중
  //   height 동기화도 꼬여서 퀴즈 박스가 밀리는 버그로 이어졌음)
  // - isMobileViewport: 실시간으로 갱신되는 값. iframe에는 postMessage로만 전달하고,
  //   src 생성에는 절대 관여하지 않는다.
  const [iframeViewportReady, setIframeViewportReady] = useState(false);
  const [initialCompact, setInitialCompact] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    if (!useIframe) return;
    const mobile = window.innerWidth < 640;
    setInitialCompact(mobile);
    setIsMobileViewport(mobile);
    setIframeViewportReady(true);

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const syncViewportToIframes = () => {
      const next = window.innerWidth < 640;
      setIsMobileViewport((prev) => (prev === next ? prev : next));

      const msg = { type: "champViewportSync", isMobileViewport: next };
      const myFrame = document.getElementById("iframe-my") as HTMLIFrameElement | null;
      const enemyFrame = document.getElementById("iframe-enemy") as HTMLIFrameElement | null;
      myFrame?.contentWindow?.postMessage(msg, "*");
      enemyFrame?.contentWindow?.postMessage(msg, "*");
    };
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(syncViewportToIframes, 150);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [useIframe]);

  useEffect(() => {
    if (!useIframe) return;
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== 'champEmbedHeight') return;
      const myEl = document.getElementById('iframe-my');
      const enemyEl = document.getElementById('iframe-enemy');
      if (!myEl || !enemyEl) return;
      const myH = myEl.getAttribute('data-h') ? parseInt(myEl.getAttribute('data-h')!) : 0;
      const enemyH = enemyEl.getAttribute('data-h') ? parseInt(enemyEl.getAttribute('data-h')!) : 0;
      if (e.data.id === myChamp?.id) myEl.setAttribute('data-h', e.data.height);
      if (e.data.id === enemyChamp?.id) enemyEl.setAttribute('data-h', e.data.height);

      // 모바일(한 번에 한쪽만 보임)에서는 두 iframe 높이를 맞출 필요가 없고,
      // 오히려 숨겨진 반대쪽의 예전(PC 시절) 큰 높이가 Math.max로 끌려와
      // 화면에 안 보이는데도 현재 보이는 쪽 iframe을 그만큼 부풀리는 문제가
      // 있었다(퀴즈 박스가 아래로 밀리는 버그의 원인). 모바일에서는 각자
      // 자기 자신이 보고한 높이만 그대로 적용한다.
      if (isMobileViewport) {
        if (e.data.id === myChamp?.id) myEl.style.height = e.data.height + 'px';
        if (e.data.id === enemyChamp?.id) enemyEl.style.height = e.data.height + 'px';
        return;
      }

      // 데스크톱(좌우 동시 표시)에서는 기존대로 양쪽 높이를 맞춰준다.
      const maxH = Math.max(
        e.data.id === myChamp?.id ? e.data.height : myH,
        e.data.id === enemyChamp?.id ? e.data.height : enemyH
      );
      if (maxH > 0) {
        if (myEl) myEl.style.height = maxH + 'px';
        if (enemyEl) enemyEl.style.height = maxH + 'px';
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [useIframe, myChamp, enemyChamp, isMobileViewport]);

  // embed(iframe 내부) 역할: 부모(/matchup 페이지)가 리사이즈될 때 보내주는
  // 실제 뷰포트 판정값을 받아 로컬 override로 저장. forceCompact prop은
  // iframe 최초 로드 시점 URL(compact=)에서 온 값이라 이후 리사이즈에는
  // 반응하지 못하므로, 이 값이 도착하면 그걸 우선 사용한다.
  const [liveForceCompact, setLiveForceCompact] = useState<boolean | null>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== "champViewportSync") return;
      if (typeof e.data.isMobileViewport !== "boolean") return;
      setLiveForceCompact(e.data.isMobileViewport);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const effectiveForceCompact = liveForceCompact ?? forceCompact;

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
    <div className="space-y-6 sm:space-y-12">


      {!hideHeader && (
        <SiteHeader
          subtitle={subtitle}
          champSearchOpen={openTarget !== null}
          onNoticeOpenChange={setNoticeOpen}
        />
      )}

      {/* CHAMP PICK */}
{!embedMode && <section className="lg:static sticky top-0 z-40 w-full bg-slate-900/95 sm:border-b sm:border-white/10 supports-[backdrop-filter]:backdrop-blur">
  <div className="max-w-5xl mx-auto px-3 py-2">


    <div className="flex items-center justify-center gap-3 sm:gap-8 w-full max-w-[430px] sm:max-w-none mx-auto">

      {/* ChampMiniSearch: 이 블록은 이미 !embedMode 섹션 안에 있으므로
          "두 챔피언을 선택하는 화면"(embed 제외 전부: /champ, /champ/[id], /matchup)에
          매치업 페이지 여부와 무관하게 일관되게 노출된다. */}
      <div className="flex flex-col items-center w-[156px] sm:w-[230px]">
        <ChampMiniSearch
          lang={lang}
          champions={CHAMPIONS}
          side="my"
          myChampId={myChampId}
          enemyChampId={enemyChampId}
        />
        <ChampSelectButton
          label={lang === "ko" ? "챔피언" : "Champion"}
          lang={lang}
          selected={myChamp}
          onClick={() => setOpenTarget("my")}
          onClear={clearMyChamp}
        />
      </div>

      <div className="flex flex-col items-center">
        {/* 검색창(h-[36px]/h-[40px] + mb-6/mb-12) 높이만큼 스페이서를 둬서
            "&"가 검색창이 아니라 그 아래 아이콘 카드의 세로 중앙에 오도록 맞춤.
            ChampMiniSearch/ChampSelectButton의 높이·여백이 바뀌면 이 값도 같이 조정 필요. */}
        <div className="h-[60px] sm:h-[88px]" />
        <div className="h-[108px] sm:h-[150px] flex items-center">
          <span className="text-3xl font-extrabold text-slate-300 px-2">VS</span>
        </div>
        {/* ChampSelectButton 하단 spacer(h-4 sm:h-10)와 동일 — 없으면 이 컬럼 전체
            높이가 챔피언 컬럼보다 짧아져서 items-center가 "&"를 더 아래로 밀어버림 */}
        <div className="h-4 sm:h-10" />
      </div>

      <div className="flex flex-col items-center w-[156px] sm:w-[230px]">
        <ChampMiniSearch
          lang={lang}
          champions={CHAMPIONS}
          side="enemy"
          myChampId={myChampId}
          enemyChampId={enemyChampId}
        />
        <ChampSelectButton
          label={lang === "ko" ? "챔피언" : "Champion"}
          lang={lang}
          selected={enemyChamp}
          onClick={() => setOpenTarget("enemy")}
          onClear={clearEnemyChamp}
        />
      </div>

    </div>
  </div>
</section>}

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

      {bothSelected && !embedMode && (
<section className="mt-6 sm:mt-12 max-w-[474px] sm:max-w-[980px] mx-auto px-0 sm:px-3">
  <MatchupSummaryBox
    myChampId={myChamp!.id}
    enemyChampId={enemyChamp!.id}
    lang={lang}
    highlight={highlight}
  />
</section>
)}

      {/* COMPARE */}
{(myChamp || enemyChamp) ? (
<>
{/* 모바일 탭바 */}
{/* 탭마다 독립된 rounded 박스 + border로 처리 (gap으로 분리) —
    부모에 overflow-hidden/rounded를 두고 ring을 쓰면 맞닿는 경계에서
    두 탭의 ring이 겹치고, glow도 부모 클리핑에 잘리는 문제가 있었음 */}
{(myChamp || enemyChamp) && !embedMode && !useIframe && (
  <div className="sm:hidden flex gap-1.5 w-full max-w-[430px] mx-auto mb-2">
    <button
      type="button"
      onClick={() => myChamp && setMobileTab("my")}
      disabled={!myChamp}
      className={`flex-1 py-2 rounded-lg text-base font-bold text-center transition bg-slate-800/40 ${
        !myChamp
          ? "text-slate-600 cursor-not-allowed border border-white/10"
          : mobileTab === "my"
          ? "text-yellow-400 border-2 border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]"
          : "text-slate-200 border border-white/10"
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
      className={`flex-1 py-2 rounded-lg text-base font-bold text-center transition bg-slate-800/40 ${
        !enemyChamp
          ? "text-slate-600 cursor-not-allowed border border-white/10"
          : mobileTab === "enemy"
          ? "text-yellow-400 border-2 border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]"
          : "text-slate-200 border border-white/10"
      }`}
    >
      {enemyChamp
        ? (lang === "ko" ? enemyChamp.ko : enemyChamp.en)
        : (lang === "ko" ? "챔피언 선택" : "Select")}
    </button>
  </div>
)}
{useIframe ? (
<>
{useIframe && (
  <div className="sm:hidden flex gap-1.5 w-full max-w-[430px] mx-auto mb-2">
    <button onClick={() => setMobileTab("my")} className={`flex-1 py-2 rounded-lg text-base font-bold text-center transition bg-slate-800/40 ${mobileTab === "my" ? "text-yellow-400 border-2 border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]" : "text-slate-200 border border-white/10"}`}>{myChamp?.ko ?? "내 챔피언"}</button>
    <button onClick={() => setMobileTab("enemy")} className={`flex-1 py-2 rounded-lg text-base font-bold text-center transition bg-slate-800/40 ${mobileTab === "enemy" ? "text-yellow-400 border-2 border-yellow-400 shadow-[0_0_16px_rgba(250,204,21,0.5)]" : "text-slate-200 border border-white/10"}`}>{enemyChamp?.ko ?? "상대 챔피언"}</button>
  </div>
)}
{iframeViewportReady && (
<section className="relative grid grid-cols-1 sm:grid-cols-[430px_68px_430px] gap-4 w-full max-w-[980px] mx-auto justify-center items-start">
  {myChamp && (
    <iframe
      id="iframe-my"
      src={`/${locale}/champ-embed/${myChamp.id}?side=my&compact=${initialCompact ? "1" : "0"}`}
      style={{ border: "none", height: "800px" }}
      scrolling="no"
      className={`w-full max-w-[430px] mx-auto sm:col-start-1${mobileTab !== "my" ? " hidden sm:block" : ""}`}
    />
  )}
  {enemyChamp && (
    <iframe
      id="iframe-enemy"
      src={`/${locale}/champ-embed/${enemyChamp.id}?side=enemy&compact=${initialCompact ? "1" : "0"}`}
      style={{ border: "none", height: "800px" }}
      scrolling="no"
      className={`w-full max-w-[430px] mx-auto sm:col-start-3${mobileTab !== "enemy" ? " hidden sm:block" : ""}`}
    />
  )}
</section>
)}
</>
) : (
<section className="relative grid grid-cols-1 sm:grid-cols-[430px_68px_430px] gap-4 w-full max-w-[980px] mx-auto justify-center items-start">


        {/* MY */}
{myChamp && (
<div className={`flex flex-col w-full max-w-[430px] mx-auto rounded-3xl bg-slate-800/30 p-0.5 sm:p-2 pb-3 ring-2 ring-black/40 min-w-0 sm:col-start-1 sm:flex ${myChamp && enemyChamp && mobileTab !== "my" ? "hidden sm:flex" : ""}`}>


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

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-0.5 sm:p-2">
    <SkillTagsPanel champId={myChamp?.id ?? null} lang={lang} forceCompact={effectiveForceCompact} />
  </div>
</div>


)}



        {/* ENEMY */}
        {enemyChamp && (
<div className={`flex flex-col w-full max-w-[430px] mx-auto rounded-3xl bg-slate-800/30 p-0.5 sm:p-2 pb-3 ring-2 ring-black/40 min-w-0 sm:col-start-3 sm:flex ${myChamp && enemyChamp && mobileTab !== "enemy" ? "hidden sm:flex" : ""}`}>

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

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-0.5 sm:p-2">
    <SkillTagsPanel champId={enemyChamp?.id ?? null} lang={lang} forceCompact={effectiveForceCompact} />
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
)}
</>
) : null}
{!bothSelected && !embedMode && (
<section className="mt-6 sm:mt-12 max-w-[474px] sm:max-w-[980px] mx-auto px-0 sm:px-3">
    <div className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-5 py-4 hover:ring-yellow-400/60 transition-all min-h-[120px]">
      <p className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-4">
        {lang === "ko" ? "판정 세부사항" : "Interaction Details"}
      </p>
      <p className="text-slate-400 text-sm text-center">
        {lang === "ko"
          ? "양쪽 챔피언을 선택하면 \n 상호작용 요약이 표시됨"
          : "Pick both champions \n to see matchup summary."}
      </p>
    </div>
</section>
)}

      {/* 퀴즈박스: 항상 표시 */}
      {!embedMode && (
        <div className="max-w-[474px] sm:max-w-[980px] mx-auto px-0 sm:px-3">
          <QuizWidget lang={lang} />
        </div>
      )}

      {!embedMode && (
        <FeedbackButton lang={lang} hidden={openTarget !== null || noticeOpen} />
      )}

{!embedMode && (
<div className="pt-8">
  <AdSlot side="bottom" />
</div>
)}

{!embedMode && (
<footer className="pt-8 text-center text-xs text-slate-500">
  <a
    href={`/${locale}/privacy`}
    className="hover:text-slate-300 underline underline-offset-2"
  >
    Privacy Policy
  </a>
</footer>
)}


</div>
);

}
