"use client";

import { useState } from "react";
import ChampSelectButton from "./components/ChampSelectButton";
import ChampSelectModal from "./components/ChampSelectModal";
import SkillTagsPanel from "./components/SkillTagsPanel";
import MatchupSummaryBox from "./components/MatchupSummaryBox";
import UltCooldownBox from "./components/UltCooldownBox";

import { CHAMPIONS, type Champ } from "./data/champions";
import { CHAMPS } from "./data/champs/_index";
import FeedbackButton from "./components/FeedbackButton";
import HelpButton from "./components/HelpButton";

export default function Home() {
  const [lang, setLang] = useState<"ko" | "en">("ko");

  const [myChamp, setMyChamp] = useState<Champ | null>(null);
  const [enemyChamp, setEnemyChamp] = useState<Champ | null>(null);
  const [openTarget, setOpenTarget] = useState<"my" | "enemy" | null>(null);

  const [myUltCd, setMyUltCd] = useState<number | null>(null);
  const [enemyUltCd, setEnemyUltCd] = useState<number | null>(null);

  const canCompare =
  !!myChamp && !!enemyChamp && myUltCd != null && enemyUltCd != null;

const diff = canCompare ? Math.abs(myUltCd! - enemyUltCd!) : null;

const subtitle =
  lang === "ko"
    ? "롤 메커니즘 사이트"
    : "Guides and tips by champion";


  const myIsSooner = canCompare ? myUltCd! < enemyUltCd! : false;
  const enemyIsSooner = canCompare ? enemyUltCd! < myUltCd! : false;
  return (
  <div className="mx-auto max-w-6xl px-4 py-10 space-y-12">


  <header className="relative text-center">
  <div className="absolute right-0 top-0 flex items-center gap-2">
    <span className="text-xl text-slate-400 select-none whitespace-nowrap">
      🛠 26.2
    </span>

    <button
      onClick={() => setLang("ko")}
      className={`px-3 py-2 rounded-xl text-sm font-bold border ${
        lang === "ko"
          ? "bg-yellow-400 text-black border-yellow-300"
          : "bg-slate-800/60 border-white/10"
      }`}
    >
      한국어
    </button>

    <button
      onClick={() => setLang("en")}
      className={`px-3 py-2 rounded-xl text-sm font-bold border ${
        lang === "en"
          ? "bg-yellow-400 text-black border-yellow-300"
          : "bg-slate-800/60 border-white/10"
      }`}
    >
      EN
    </button>

    <HelpButton lang={lang} />
  </div>

  <h1 className="text-5xl font-extrabold text-yellow-400">LOLTIP</h1>
  <p className="mt-3 text-slate-300">{subtitle}</p>
</header>



      {/* CHAMP PICK */}
      <section className="flex justify-center items-center gap-10">
        <ChampSelectButton
          label={lang === "ko" ? "내 챔피언" : "My Champion"}
          lang={lang}
          selected={myChamp}
          onClick={() => setOpenTarget("my")}
        />

        <div className="text-xl font-black text-slate-400">VS</div>

        <ChampSelectButton
          label={lang === "ko" ? "상대 챔피언" : "Enemy Champion"}
          lang={lang}
          selected={enemyChamp}
          onClick={() => setOpenTarget("enemy")}
        />
      </section>

      {/* MODAL */}
      <ChampSelectModal
        open={openTarget !== null}
        lang={lang}
        champions={CHAMPIONS}
        title={
          openTarget === "my"
            ? lang === "ko"
              ? "내 챔피언 선택"
              : "Pick My Champion"
            : lang === "ko"
            ? "상대 챔피언 선택"
            : "Pick Enemy Champion"
        }
        onClose={() => setOpenTarget(null)}
        onPick={(c) => {
          if (openTarget === "my") {
            setMyChamp(c);
            setMyUltCd(null);
          } else {
            setEnemyChamp(c);
            setEnemyUltCd(null);
          }
          setOpenTarget(null);
        }}
      />

      {/* COMPARE */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* 중앙 선궁 */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-10">
          <div className="rounded-full bg-yellow-400 px-5 py-1.5 text-sm font-black text-black">
            선궁
          </div>
          <div className="mt-1 text-lg font-bold text-emerald-300">
            {diff != null ? `${diff}s 차이` : "--"}
          </div>
        </div>

        {/* MY */}
        <div
  className={`flex flex-col rounded-3xl bg-slate-800/30 p-6 pb-8 ring-2 ${
    myIsSooner
      ? "ring-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.6)]"
      : "ring-black/40"
  }`}
>
  <UltCooldownBox
    ultCooldown={
      myChamp
        ? CHAMPS[myChamp.id as keyof typeof CHAMPS]?.ultCooldown
        : undefined
    }
    onCdChange={setMyUltCd}
  />

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-4">
    <SkillTagsPanel champId={myChamp?.id ?? null} lang={lang} />
  </div>
</div>


        {/* ENEMY */}
        <div
  className={`flex flex-col rounded-3xl bg-slate-800/30 p-6 pb-8 ring-2 ${
    enemyIsSooner
      ? "ring-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.6)]"
      : "ring-black/40"
  }`}
>
  <UltCooldownBox
    ultCooldown={
      enemyChamp
        ? CHAMPS[enemyChamp.id as keyof typeof CHAMPS]?.ultCooldown
        : undefined
    }
    onCdChange={setEnemyUltCd}
  />

  <div className="mt-4 flex-1 rounded-2xl bg-slate-900/30 ring-1 ring-white/10 p-4">
    <SkillTagsPanel champId={enemyChamp?.id ?? null} lang={lang} />
  </div>
</div>

        {/* 모바일 선궁 */}
        <div className="md:hidden col-span-full flex flex-col items-center gap-1">
          <div className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-black text-black">
            선궁
          </div>
          <div className="text-sm font-bold text-emerald-300">
            {diff != null ? `${diff}s 차이` : "--"}
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
    </div>
  );
}
