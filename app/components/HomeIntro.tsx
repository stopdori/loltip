import { Link } from "@/i18n/navigation";
import { CHAMPIONS } from "@/app/data/champions";
import type { TopMatchupEntry } from "@/app/data/matchups/_index";

// /champ(홈) 하단, 전체 챔피언 그리드(ChampGrid) 위에 들어가는 사이트 소개 + "판정이 많은 상호작용" 목록.
// 서버 컴포넌트("use client" 없음)라 소개 문단과 20개 텍스트 링크(<a href="/{locale}/interactions/{pair}">)가
// 항상 SSR HTML에 나간다 — 홈 본문이 아이콘 그리드뿐이라 구글이 읽을 텍스트가 거의 없던 문제 보완.
// entries는 호출부(champ/page.tsx)가 listTopIndexableMatchups(현재 로케일, 20)로 만든 것(색인 대상만).
export default function HomeIntro({ lang, entries }: { lang: "ko" | "en"; entries: TopMatchupEntry[] }) {
  const nameOf = (id: string) => {
    const c = CHAMPIONS.find((x) => x.id === id);
    return c ? (lang === "ko" ? c.ko : c.en) : id;
  };

  return (
    <div className="space-y-4">
      <section
        aria-labelledby="home-intro-heading"
        className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-4 sm:px-5 py-4"
      >
        <h2
          id="home-intro-heading"
          className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-2"
        >
          {lang === "ko" ? "LOLTIP 소개" : "About LOLTIP"}
        </h2>
        <p className="text-sm leading-relaxed text-slate-300">
          {lang === "ko"
            ? "LOLTIP은 리그 오브 레전드 챔피언 스킬 사이의 상호작용과 판정을 정리한 사이트입니다. 두 챔피언을 고르면 어떤 스킬이 상대 스킬을 끊거나 무시할 수 있는지, 알아두면 좋은 특이한 판정은 무엇인지 확인할 수 있습니다. 판정은 공식 위키와 인게임 영상 클립을 바탕으로 직접 정리합니다."
            : "LOLTIP is a site that documents how League of Legends champion abilities interact with each other. Pick two champions to see which abilities can interrupt or ignore the other's, and which unusual interactions are worth knowing. Every interaction is compiled by hand based on the official wiki and in-game video clips."}
        </p>
      </section>

      {entries.length > 0 && (
        <section
          aria-labelledby="home-top-matchups-heading"
          className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-4 sm:px-5 py-4"
        >
          <h2
            id="home-top-matchups-heading"
            className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-3"
          >
            {lang === "ko" ? "판정이 많은 상호작용" : "Interactions With the Most Details"}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {entries.map((e) => {
              const [a, b] = e.champs;
              const label =
                lang === "ko"
                  ? `${nameOf(a)} · ${nameOf(b)} 상호작용`
                  : `${nameOf(a)} · ${nameOf(b)} Interactions`;
              return (
                <li key={e.pair}>
                  <Link
                    href={`/interactions/${e.pair}`}
                    prefetch={false}
                    className="text-sm text-slate-200 hover:text-yellow-300 underline-offset-2 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
