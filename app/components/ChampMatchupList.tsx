import { Link } from "@/i18n/navigation";
import { CHAMPIONS } from "@/app/data/champions";
import type { ChampMatchupEntry } from "@/app/data/matchups/_index";

// 챔프 페이지(/champ/[id]) 하단(ChampClient의 extraSection 슬롯)의 "이 챔피언의 매치업" 링크 목록.
// 서버 컴포넌트("use client" 없음)라서 <a href="/{locale}/matchup/{pair}">가 항상 SSR HTML에 나간다.
// entries는 호출부(page.tsx)가 listIndexableMatchupsForChamp(champId, 현재 로케일)로 만든 것 —
// 현재 로케일에서 색인 대상인 매치업만 들어 있다(noindex 페이지로 링크 금지). 여기서는 다시 거르지 않는다.
// 앵커 텍스트: "{현재 챔프} vs {상대 챔프}" (대상 페이지의 <h1>/title 패턴과 같은 형태).
// 정렬: 판정 문장이 많은 매치업 먼저, 같으면 상대 이름 순(로케일 collator).
export default function ChampMatchupList({
  lang,
  champName,
  entries,
}: {
  lang: "ko" | "en";
  champName: string;
  entries: ChampMatchupEntry[];
}) {
  if (entries.length === 0) return null;

  const collator = new Intl.Collator(lang === "ko" ? "ko" : "en", { sensitivity: "base" });
  const nameOf = (id: string) => {
    const c = CHAMPIONS.find((x) => x.id === id);
    return c ? (lang === "ko" ? c.ko : c.en) : id;
  };
  const items = entries
    .map((e) => ({ ...e, opponentName: nameOf(e.opponentId) }))
    .sort((x, y) => y.sentenceCount - x.sentenceCount || collator.compare(x.opponentName, y.opponentName));

  return (
    <section
      aria-labelledby="champ-matchups-heading"
      className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-2 sm:px-5 py-4"
    >
      <h2
        id="champ-matchups-heading"
        className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-3"
      >
        {lang === "ko" ? `${champName} 매치업 판정` : `${champName} Matchup Interactions`}
        <span className="ml-2 text-xs font-semibold text-slate-400 normal-case">{items.length}</span>
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((m) => {
          const text = `${champName} vs ${m.opponentName}`;
          return (
            <li key={m.pair}>
              {/* 최대 170여 개가 한 화면에 들어오므로 프리패치를 끈다(링크 자체는 그대로 크롤 가능) */}
              <Link
                href={`/matchup/${m.pair}`}
                prefetch={false}
                title={text}
                className="block truncate rounded-lg bg-slate-800/50 hover:bg-slate-700/60 transition px-3 py-2 text-sm text-slate-200 border border-white/10 hover:border-white/20"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
