import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CHAMPIONS } from "@/app/data/champions";
import type { ChampMatchupEntry } from "@/app/data/matchups/_index";
import { filterChampions } from "@/app/utils/champSearch";
import { waGwa } from "@/app/utils/koreanParticle";

// 챔프 페이지(/champ/[id]) 하단(ChampClient의 extraSection 슬롯)의 "이 챔피언과 상호작용하는 챔피언들" 목록.
// 서버 컴포넌트("use client" 없음)라서 <a href="/{locale}/matchup/{pair}">가 항상 SSR HTML에 나간다.
// entries는 호출부(page.tsx)가 listIndexableMatchupsForChamp(champId, 현재 로케일)로 만든 것 —
// 현재 로케일에서 색인 대상인 매치업만 들어 있다(noindex 페이지로 링크 금지). 여기서는 거르지도, 바꾸지도 않고
// 표시 방식(작은 아이콘)과 정렬만 정한다. 링크 대상은 챔프 페이지가 아니라 매치업 페이지다.
//
// 아이콘만 보이고 텍스트가 없으므로 alt/title/aria-label에 상대 챔피언 이름을 반드시 넣는다
// (ChampGrid는 옆에 이름 텍스트가 있어서 alt=""였지만 여기는 다르다).
// 정렬: ChampGrid와 같은 filterChampions(언어별 collator — ko 가나다, en 알파벳)를 재사용한다.
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

  const pairByOpponent = new Map(entries.map((e) => [e.opponentId, e.pair]));
  const opponents = filterChampions(
    CHAMPIONS.filter((c) => pairByOpponent.has(c.id)),
    "",
    lang
  );

  const title =
    lang === "ko"
      ? `${champName}${waGwa(champName)}의 상호작용 챔피언들`
      : `Champions That Interact With ${champName}`;

  return (
    <section
      aria-labelledby="champ-matchups-heading"
      className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-2 sm:px-5 py-4"
    >
      <h2
        id="champ-matchups-heading"
        className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-3"
      >
        {title}
        <span className="ml-2 text-xs font-semibold text-slate-400 normal-case">{opponents.length}</span>
      </h2>

      <ul className="flex flex-wrap gap-1.5 sm:gap-2">
        {opponents.map((c) => {
          const name = lang === "ko" ? c.ko : c.en;
          const label =
            lang === "ko" ? `${name}${waGwa(name)}의 매치업 보기` : `View matchup with ${name}`;
          return (
            <li key={c.id}>
              {/* 최대 170여 개라 프리패치는 끈다(링크 자체는 그대로 크롤 가능). 이미지는 next/image 기본
                  lazy 로딩이라 뷰포트 밖 아이콘은 초기 로드에서 빠진다. 40px 고정 크기 래퍼가 자리를 미리 잡는다. */}
              <Link
                href={`/matchup/${pairByOpponent.get(c.id)}`}
                prefetch={false}
                title={name}
                aria-label={label}
                className="block rounded-lg border border-white/10 bg-slate-800/50 p-0.5 transition hover:border-yellow-400/60 hover:bg-slate-700/60"
              >
                <div className="relative h-9 w-9 overflow-hidden rounded-md bg-slate-950/30 sm:h-10 sm:w-10">
                  <Image
                    src={`/champs/${c.id}.webp`}
                    alt={name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
